"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_shadow_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-215c0b"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.1795a904548542cf.glb";

},
35033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _shadow_demo__rspack_import_4 = __webpack_require__(42066);
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
    "Initializing WebGL": "    // The lights orbit around (0,0,0) at a distance of 8.\n    // Their Y coordinates can be changed with the sliders.\n    let light1Y = INITIAL_LIGHT_Y\n    let light2Y = INITIAL_LIGHT_Y\n    const makeLight = () => {\n        const light = new TgdCameraOrthographic({\n            transfo: new TgdTransfo({ distance: 0 }),\n            // Half of the height of the visible area.\n            spaceHeight: 4,\n            near: 0.1,\n            far: 30,\n        })\n        // Square shadow texture.\n        light.screenWidth = 1\n        light.screenHeight = 1\n        return light\n    }\n    const light1 = makeLight()\n    const light2 = makeLight()\n    const texture = assets.glb.suzanne.createTexture2D(context, 0)\n    const bouncingMonkey: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({ texture }),\n        transfo: new TgdTransfo({ position: [+2, +1, +1] }),\n        visible: true,\n    }\n    const spinningMonkey: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({ texture }),\n        transfo: new TgdTransfo({ position: [-2, +1, +1] }),\n        visible: true,\n    }\n    const ball: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 2 }),\n        // The material is set once the shadow textures are available.\n        transfo: new TgdTransfo({ position: [0, 0, -3] }),\n        visible: true,\n    }\n    const shadow1 = new TgdPainterShadow(context, {\n        camera: light1,\n        meshes: [bouncingMonkey, spinningMonkey, ball],\n    })\n    const shadow2 = new TgdPainterShadow(context, {\n        camera: light2,\n        meshes: [bouncingMonkey, spinningMonkey, ball],\n    })\n    // The ground and the ball share the same material to catch the shadows.\n    // A TgdMaterialShadow can wrap another one to catch the shadows of several lights.\n    const material2 = new TgdMaterialShadow({\n        camera: light2,\n        texture: shadow2.texture,\n        material: new TgdMaterialDiffuse({\n            color: new TgdColor(\"#ddd\").toArrayNumber4(),\n        }),\n        tint: INITIAL_COLOR2,\n    })\n    const material1 = new TgdMaterialShadow({\n        camera: light1,\n        texture: shadow1.texture,\n        material: material2,\n        tint: INITIAL_COLOR1,\n    })\n    // The ball casts a shadow, but it also catches the shadows.\n    ball.material = material1\n    const ground: TgdMesh = {\n        // Normal is +Y = X ^ -Z\n        geometry: new TgdGeometryPlane({\n            sizeX: 100,\n            sizeY: 100,\n            vecX: [1, 0, 0],\n            vecY: [0, 0, -1],\n        }),\n        material: material1,\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    // Show where the lights are. They do not cast any shadow.\n    const sunMaterial1 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR1).toArrayNumber4() })\n    const sunMaterial2 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR2).toArrayNumber4() })\n    const sun1: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),\n        material: sunMaterial1,\n        transfo: new TgdTransfo({ position: light1.transfo.actualPosition }),\n        visible: true,\n    }\n    const sun2: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),\n        material: sunMaterial2,\n        transfo: new TgdTransfo({ position: light2.transfo.actualPosition }),\n        visible: true,\n    }\n    context.add(\n        shadow1,\n        shadow2,\n        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [ground, bouncingMonkey, spinningMonkey, ball, sun1, sun2],\n                }),\n            ],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            const a1 = time * 0.207\n            const a2 = time * 0.371\n            const r = 8\n            light1.transfo.setPosition(r * Math.cos(a1), light1Y, r * Math.sin(a1)).lookAt([0, 0, 0])\n            sun1.transfo.setPosition(light1.transfo.actualPosition)\n            // The second light is on the opposite side.\n            light2.transfo.setPosition(-r * Math.cos(a2), light2Y, -r * Math.sin(a2)).lookAt([0, 0, 0])\n            sun2.transfo.setPosition(light2.transfo.actualPosition)\n            // One bounce per second, between Y = +1 and Y = +2.\n            bouncingMonkey.transfo.setPosition(+2, 1 + Math.abs(Math.sin(time * Math.PI)), 0)\n            // One turn every 2 seconds.\n            spinningMonkey.transfo.orbitAroundY((-delta * 2 * Math.PI) / 2)\n        }),\n    )\n    context.camera.transfo.setEulerRotation(-30, 0, 0)\n    context.camera.fitSpaceAtTarget(12, 12)\n    context.play()"
};
var FULL = "import {\n    TgdCameraOrthographic,\n    TgdColor,\n    type TgdContext,\n    TgdGeometryPlane,\n    TgdGeometrySphereIco,\n    TgdMaterialDiffuse,\n    TgdMaterialFlatTexture,\n    TgdMaterialShadow,\n    type TgdMesh,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMeshes,\n    TgdPainterShadow,\n    TgdPainterState,\n    TgdTransfo,\n} from \"@tolokoban/tgd\"\nimport { ViewInputColor, ViewSlider } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport { useFloat } from \"@/utils/hooks/float\"\nimport SuzanneURL from \"@/assets/mesh/suzanne.glb\"\n\nconst INITIAL_BIAS = 0.1\nconst BIAS_MIN = -0.3\nconst BIAS_MAX = 1\nconst INITIAL_LIGHT_Y = 2\nconst INITIAL_COLOR1 = \"#ffaa1a\"\nconst INITIAL_COLOR2 = \"#1aaaff\"\nconst STORAGE_KEY_BIAS = \"tgd/demo/painter/shadow/bias\"\n\nfunction loadBias(): number {\n    try {\n        const item = window.localStorage.getItem(STORAGE_KEY_BIAS)\n        if (item === null) return INITIAL_BIAS\n\n        const bias = Number(item)\n        if (!Number.isFinite(bias)) return INITIAL_BIAS\n\n        return Math.max(BIAS_MIN, Math.min(BIAS_MAX, bias))\n    } catch {\n        return INITIAL_BIAS\n    }\n}\n\nfunction saveBias(bias: number) {\n    try {\n        window.localStorage.setItem(STORAGE_KEY_BIAS, `${bias}`)\n    } catch {\n        // Storage can be unavailable (private mode, blocked site data, ...).\n    }\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n    // The lights orbit around (0,0,0) at a distance of 8.\n    // Their Y coordinates can be changed with the sliders.\n    let light1Y = INITIAL_LIGHT_Y\n    let light2Y = INITIAL_LIGHT_Y\n    const makeLight = () => {\n        const light = new TgdCameraOrthographic({\n            transfo: new TgdTransfo({ distance: 0 }),\n            // Half of the height of the visible area.\n            spaceHeight: 4,\n            near: 0.1,\n            far: 30,\n        })\n        // Square shadow texture.\n        light.screenWidth = 1\n        light.screenHeight = 1\n        return light\n    }\n    const light1 = makeLight()\n    const light2 = makeLight()\n    const texture = assets.glb.suzanne.createTexture2D(context, 0)\n    const bouncingMonkey: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({ texture }),\n        transfo: new TgdTransfo({ position: [+2, +1, +1] }),\n        visible: true,\n    }\n    const spinningMonkey: TgdMesh = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        material: new TgdMaterialFlatTexture({ texture }),\n        transfo: new TgdTransfo({ position: [-2, +1, +1] }),\n        visible: true,\n    }\n    const ball: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 2 }),\n        // The material is set once the shadow textures are available.\n        transfo: new TgdTransfo({ position: [0, 0, -3] }),\n        visible: true,\n    }\n    const shadow1 = new TgdPainterShadow(context, {\n        camera: light1,\n        meshes: [bouncingMonkey, spinningMonkey, ball],\n    })\n    const shadow2 = new TgdPainterShadow(context, {\n        camera: light2,\n        meshes: [bouncingMonkey, spinningMonkey, ball],\n    })\n    // The ground and the ball share the same material to catch the shadows.\n    // A TgdMaterialShadow can wrap another one to catch the shadows of several lights.\n    const material2 = new TgdMaterialShadow({\n        camera: light2,\n        texture: shadow2.texture,\n        material: new TgdMaterialDiffuse({\n            color: new TgdColor(\"#ddd\").toArrayNumber4(),\n        }),\n        tint: INITIAL_COLOR2,\n    })\n    const material1 = new TgdMaterialShadow({\n        camera: light1,\n        texture: shadow1.texture,\n        material: material2,\n        tint: INITIAL_COLOR1,\n    })\n    // The ball casts a shadow, but it also catches the shadows.\n    ball.material = material1\n    const ground: TgdMesh = {\n        // Normal is +Y = X ^ -Z\n        geometry: new TgdGeometryPlane({\n            sizeX: 100,\n            sizeY: 100,\n            vecX: [1, 0, 0],\n            vecY: [0, 0, -1],\n        }),\n        material: material1,\n        transfo: new TgdTransfo(),\n        visible: true,\n    }\n    // Show where the lights are. They do not cast any shadow.\n    const sunMaterial1 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR1).toArrayNumber4() })\n    const sunMaterial2 = new TgdMaterialDiffuse({ color: new TgdColor(INITIAL_COLOR2).toArrayNumber4() })\n    const sun1: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),\n        material: sunMaterial1,\n        transfo: new TgdTransfo({ position: light1.transfo.actualPosition }),\n        visible: true,\n    }\n    const sun2: TgdMesh = {\n        geometry: new TgdGeometrySphereIco({ radius: 0.5 }),\n        material: sunMaterial2,\n        transfo: new TgdTransfo({ position: light2.transfo.actualPosition }),\n        visible: true,\n    }\n    context.add(\n        shadow1,\n        shadow2,\n        new TgdPainterClear(context, { color: [0.1, 0.1, 0.1, 1], depth: 1 }),\n        new TgdPainterState(context, {\n            depth: \"less\",\n            cull: \"back\",\n            children: [\n                new TgdPainterMeshes(context, {\n                    meshes: [ground, bouncingMonkey, spinningMonkey, ball, sun1, sun2],\n                }),\n            ],\n        }),\n        new TgdPainterLogic((time, delta) => {\n            const a1 = time * 0.207\n            const a2 = time * 0.371\n            const r = 8\n            light1.transfo.setPosition(r * Math.cos(a1), light1Y, r * Math.sin(a1)).lookAt([0, 0, 0])\n            sun1.transfo.setPosition(light1.transfo.actualPosition)\n            // The second light is on the opposite side.\n            light2.transfo.setPosition(-r * Math.cos(a2), light2Y, -r * Math.sin(a2)).lookAt([0, 0, 0])\n            sun2.transfo.setPosition(light2.transfo.actualPosition)\n            // One bounce per second, between Y = +1 and Y = +2.\n            bouncingMonkey.transfo.setPosition(+2, 1 + Math.abs(Math.sin(time * Math.PI)), 0)\n            // One turn every 2 seconds.\n            spinningMonkey.transfo.orbitAroundY((-delta * 2 * Math.PI) / 2)\n        }),\n    )\n    context.camera.transfo.setEulerRotation(-30, 0, 0)\n    context.camera.fitSpaceAtTarget(12, 12)\n    context.play()\n    return {\n        setBias(bias: number) {\n            material1.bias = bias\n            material2.bias = bias\n            context.paint()\n        },\n        setLight1Y(y: number) {\n            light1Y = y\n            context.paint()\n        },\n        setLight2Y(y: number) {\n            light2Y = y\n            context.paint()\n        },\n        setColor1(color: string) {\n            material1.tint = color\n            sunMaterial1.color = color\n            context.paint()\n        },\n        setColor2(color: string) {\n            material2.tint = color\n            sunMaterial2.color = color\n            context.paint()\n        },\n    }\n}\n\nexport default function Demo() {\n    const ref = React.useRef<ReturnType<typeof init> | null>(null)\n    const initialBias = React.useMemo(loadBias, [])\n    const [bias, setBias] = useFloat(initialBias, ref.current?.setBias)\n    const [light1Y, setLight1Y] = useFloat(INITIAL_LIGHT_Y, ref.current?.setLight1Y)\n    const [light2Y, setLight2Y] = useFloat(INITIAL_LIGHT_Y, ref.current?.setLight2Y)\n    const [color1, setColor1] = React.useState(INITIAL_COLOR1)\n    const [color2, setColor2] = React.useState(INITIAL_COLOR2)\n    const handleColor1Change = (value: string) => {\n        setColor1(value)\n        ref.current?.setColor1(value)\n    }\n    const handleColor2Change = (value: string) => {\n        setColor2(value)\n        ref.current?.setColor2(value)\n    }\n    const handleBiasChange = (value: number) => {\n        setBias(value)\n        saveBias(value)\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                const demo = init(context, assets)\n                ref.current = demo\n                // The sliders may have changed before WebGL was ready.\n                demo.setBias(bias)\n                demo.setLight1Y(light1Y)\n                demo.setLight2Y(light2Y)\n                demo.setColor1(color1)\n                demo.setColor2(color2)\n            }}\n            assets={{ glb: { suzanne: SuzanneURL } }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewSlider\n                value={bias}\n                onChange={handleBiasChange}\n                min={BIAS_MIN}\n                max={BIAS_MAX}\n                step={0.05}\n                text={(value) => `bias: ${value.toFixed(2)}`}\n                wide\n            />\n            <ViewSlider\n                value={light1Y}\n                onChange={setLight1Y}\n                min={0}\n                max={20}\n                step={0.1}\n                text={(value) => `light1.y: ${value.toFixed(1)}`}\n                wide\n            />\n            <ViewSlider\n                value={light2Y}\n                onChange={setLight2Y}\n                min={0}\n                max={20}\n                step={0.1}\n                text={(value) => `light2.y: ${value.toFixed(1)}`}\n                wide\n            />\n            <ViewInputColor label=\"light1 color\" value={color1} onChange={handleColor1Change} />\n            <ViewInputColor label=\"light2 color\" value={color2} onChange={handleColor2Change} />\n        </View>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_shadow_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
42066(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _utils_hooks_float__rspack_import_5 = __webpack_require__(24429);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_6 = __webpack_require__(21278);
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







var INITIAL_BIAS = 0.1;
var BIAS_MIN = -0.3;
var BIAS_MAX = 1;
var INITIAL_LIGHT_Y = 2;
var INITIAL_COLOR1 = "#ffaa1a";
var INITIAL_COLOR2 = "#1aaaff";
var STORAGE_KEY_BIAS = "tgd/demo/painter/shadow/bias";
function loadBias() {
    try {
        var item = window.localStorage.getItem(STORAGE_KEY_BIAS);
        if (item === null) return INITIAL_BIAS;
        var bias = Number(item);
        if (!Number.isFinite(bias)) return INITIAL_BIAS;
        return Math.max(BIAS_MIN, Math.min(BIAS_MAX, bias));
    } catch (unused) {
        return INITIAL_BIAS;
    }
}
function saveBias(bias) {
    try {
        window.localStorage.setItem(STORAGE_KEY_BIAS, "".concat(bias));
    } catch (unused) {
    // Storage can be unavailable (private mode, blocked site data, ...).
    }
}
function init(context, assets) {
    // #begin Initializing WebGL
    // The lights orbit around (0,0,0) at a distance of 8.
    // Their Y coordinates can be changed with the sliders.
    var light1Y = INITIAL_LIGHT_Y;
    var light2Y = INITIAL_LIGHT_Y;
    var makeLight = function makeLight() {
        var light = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
            transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
                distance: 0
            }),
            // Half of the height of the visible area.
            spaceHeight: 4,
            near: 0.1,
            far: 30
        });
        // Square shadow texture.
        light.screenWidth = 1;
        light.screenHeight = 1;
        return light;
    };
    var light1 = makeLight();
    var light2 = makeLight();
    var texture = assets.glb.suzanne.createTexture2D(context, 0);
    var bouncingMonkey = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: texture
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                +2,
                +1,
                +1
            ]
        }),
        visible: true
    };
    var spinningMonkey = {
        geometry: assets.glb.suzanne.makeGeometry(),
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: texture
        }),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                -2,
                +1,
                +1
            ]
        }),
        visible: true
    };
    var ball = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
            radius: 2
        }),
        // The material is set once the shadow textures are available.
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                -3
            ]
        }),
        visible: true
    };
    var shadow1 = new _tolokoban_tgd__rspack_import_1.TgdPainterShadow(context, {
        camera: light1,
        meshes: [
            bouncingMonkey,
            spinningMonkey,
            ball
        ]
    });
    var shadow2 = new _tolokoban_tgd__rspack_import_1.TgdPainterShadow(context, {
        camera: light2,
        meshes: [
            bouncingMonkey,
            spinningMonkey,
            ball
        ]
    });
    // The ground and the ball share the same material to catch the shadows.
    // A TgdMaterialShadow can wrap another one to catch the shadows of several lights.
    var material2 = new _tolokoban_tgd__rspack_import_1.TgdMaterialShadow({
        camera: light2,
        texture: shadow2.texture,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: new _tolokoban_tgd__rspack_import_1.TgdColor("#ddd").toArrayNumber4()
        }),
        tint: INITIAL_COLOR2
    });
    var material1 = new _tolokoban_tgd__rspack_import_1.TgdMaterialShadow({
        camera: light1,
        texture: shadow1.texture,
        material: material2,
        tint: INITIAL_COLOR1
    });
    // The ball casts a shadow, but it also catches the shadows.
    ball.material = material1;
    var ground = {
        // Normal is +Y = X ^ -Z
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryPlane({
            sizeX: 100,
            sizeY: 100,
            vecX: [
                1,
                0,
                0
            ],
            vecY: [
                0,
                0,
                -1
            ]
        }),
        material: material1,
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo(),
        visible: true
    };
    // Show where the lights are. They do not cast any shadow.
    var sunMaterial1 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: new _tolokoban_tgd__rspack_import_1.TgdColor(INITIAL_COLOR1).toArrayNumber4()
    });
    var sunMaterial2 = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: new _tolokoban_tgd__rspack_import_1.TgdColor(INITIAL_COLOR2).toArrayNumber4()
    });
    var sun1 = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
            radius: 0.5
        }),
        material: sunMaterial1,
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: light1.transfo.actualPosition
        }),
        visible: true
    };
    var sun2 = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
            radius: 0.5
        }),
        material: sunMaterial2,
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: light2.transfo.actualPosition
        }),
        visible: true
    };
    context.add(shadow1, shadow2, new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.1,
            0.1,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        cull: "back",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshes(context, {
                meshes: [
                    ground,
                    bouncingMonkey,
                    spinningMonkey,
                    ball,
                    sun1,
                    sun2
                ]
            })
        ]
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
        var a1 = time * 0.207;
        var a2 = time * 0.371;
        var r = 8;
        light1.transfo.setPosition(r * Math.cos(a1), light1Y, r * Math.sin(a1)).lookAt([
            0,
            0,
            0
        ]);
        sun1.transfo.setPosition(light1.transfo.actualPosition);
        // The second light is on the opposite side.
        light2.transfo.setPosition(-r * Math.cos(a2), light2Y, -r * Math.sin(a2)).lookAt([
            0,
            0,
            0
        ]);
        sun2.transfo.setPosition(light2.transfo.actualPosition);
        // One bounce per second, between Y = +1 and Y = +2.
        bouncingMonkey.transfo.setPosition(+2, 1 + Math.abs(Math.sin(time * Math.PI)), 0);
        // One turn every 2 seconds.
        spinningMonkey.transfo.orbitAroundY(-delta * 2 * Math.PI / 2);
    }));
    context.camera.transfo.setEulerRotation(-30, 0, 0);
    context.camera.fitSpaceAtTarget(12, 12);
    context.play();
    // #end
    return {
        setBias: function setBias(bias) {
            material1.bias = bias;
            material2.bias = bias;
            context.paint();
        },
        setLight1Y: function setLight1Y(y) {
            light1Y = y;
            context.paint();
        },
        setLight2Y: function setLight2Y(y) {
            light2Y = y;
            context.paint();
        },
        setColor1: function setColor1(color) {
            material1.tint = color;
            sunMaterial1.color = color;
            context.paint();
        },
        setColor2: function setColor2(color) {
            material2.tint = color;
            sunMaterial2.color = color;
            context.paint();
        }
    };
}
function Demo() {
    var _ref_current, _ref_current1, _ref_current2;
    var ref = react__rspack_import_3_default().useRef(null);
    var initialBias = react__rspack_import_3_default().useMemo(loadBias, []);
    var _useFloat = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(initialBias, (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.setBias), 2), bias = _useFloat[0], setBias = _useFloat[1];
    var _useFloat1 = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(INITIAL_LIGHT_Y, (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.setLight1Y), 2), light1Y = _useFloat1[0], setLight1Y = _useFloat1[1];
    var _useFloat2 = _sliced_to_array((0,_utils_hooks_float__rspack_import_5.useFloat)(INITIAL_LIGHT_Y, (_ref_current2 = ref.current) === null || _ref_current2 === void 0 ? void 0 : _ref_current2.setLight2Y), 2), light2Y = _useFloat2[0], setLight2Y = _useFloat2[1];
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(INITIAL_COLOR1), 2), color1 = _React_useState[0], setColor1 = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(INITIAL_COLOR2), 2), color2 = _React_useState1[0], setColor2 = _React_useState1[1];
    var handleColor1Change = function handleColor1Change(value) {
        var _ref_current;
        setColor1(value);
        (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.setColor1(value);
    };
    var handleColor2Change = function handleColor2Change(value) {
        var _ref_current;
        setColor2(value);
        (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.setColor2(value);
    };
    var handleBiasChange = function handleBiasChange(value) {
        setBias(value);
        saveBias(value);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            var demo = init(context, assets);
            ref.current = demo;
            // The sliders may have changed before WebGL was ready.
            demo.setBias(bias);
            demo.setLight1Y(light1Y);
            demo.setLight2Y(light2Y);
            demo.setColor1(color1);
            demo.setColor2(color2);
        },
        assets: {
            glb: {
                suzanne: _assets_mesh_suzanne_glb__rspack_import_6
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                value: bias,
                onChange: handleBiasChange,
                min: BIAS_MIN,
                max: BIAS_MAX,
                step: 0.05,
                text: function text(value) {
                    return "bias: ".concat(value.toFixed(2));
                },
                wide: true
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
                lineNumber: 241,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                value: light1Y,
                onChange: setLight1Y,
                min: 0,
                max: 20,
                step: 0.1,
                text: function text(value) {
                    return "light1.y: ".concat(value.toFixed(1));
                },
                wide: true
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
                lineNumber: 250,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSlider, {
                value: light2Y,
                onChange: setLight2Y,
                min: 0,
                max: 20,
                step: 0.1,
                text: function text(value) {
                    return "light2.y: ".concat(value.toFixed(1));
                },
                wide: true
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputColor, {
                label: "light1 color",
                value: color1,
                onChange: handleColor1Change
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputColor, {
                label: "light2 color",
                value: color2,
                onChange: handleColor2Change
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/_shadow/shadow.demo.tsx",
        lineNumber: 227,
        columnNumber: 9
    }, this);
}


},
24429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFloat: () => (useFloat)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
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

function useFloat(initialValue, onChange) {
    var _React_useState = _sliced_to_array(react__rspack_import_0_default().useState(initialValue), 2), value = _React_useState[0], setValue = _React_useState[1];
    react__rspack_import_0_default().useEffect(function() {
        return onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        value
    ]);
    return [
        value,
        setValue
    ];
}


},
56367(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _shadow__rspack_import_1 = __webpack_require__(35033);
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
        br: "br",
        code: "code",
        h1: "h1",
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterShadow.html",
                    children: "TgdPainterShadow"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Framebuffer that holds the distance of a fragment from a light.\nIt is used to compute the shadows cast by a set of meshes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_shadow__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can see artefacts on the hemi-sphere's shadow.",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.br, {}, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                        lineNumber: 10,
                        columnNumber: 51
                    }, this),
                    "\n",
                    "Increase the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "bias"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                        lineNumber: 11,
                        columnNumber: 14
                    }, this),
                    " to fix the issue."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                    lineNumber: 15,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/shadow/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zaGFkb3dfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy0yMTVjMGIuZjQyNDA1MjI2YmI3YjIwNS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NoYWRvdy9fc2hhZG93L2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zaGFkb3cvX3NoYWRvdy9zaGFkb3cuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvdXRpbHMvaG9va3MvZmxvYXQudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2hhZG93L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9zaGFkb3cuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiSW5pdGlhbGl6aW5nIFdlYkdMXCI6XCIgICAgLy8gVGhlIGxpZ2h0cyBvcmJpdCBhcm91bmQgKDAsMCwwKSBhdCBhIGRpc3RhbmNlIG9mIDguXFxuICAgIC8vIFRoZWlyIFkgY29vcmRpbmF0ZXMgY2FuIGJlIGNoYW5nZWQgd2l0aCB0aGUgc2xpZGVycy5cXG4gICAgbGV0IGxpZ2h0MVkgPSBJTklUSUFMX0xJR0hUX1lcXG4gICAgbGV0IGxpZ2h0MlkgPSBJTklUSUFMX0xJR0hUX1lcXG4gICAgY29uc3QgbWFrZUxpZ2h0ID0gKCkgPT4ge1xcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcXG4gICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwIH0pLFxcbiAgICAgICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxcbiAgICAgICAgICAgIHNwYWNlSGVpZ2h0OiA0LFxcbiAgICAgICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgICAgICBmYXI6IDMwLFxcbiAgICAgICAgfSlcXG4gICAgICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cXG4gICAgICAgIGxpZ2h0LnNjcmVlbldpZHRoID0gMVxcbiAgICAgICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICAgICAgcmV0dXJuIGxpZ2h0XFxuICAgIH1cXG4gICAgY29uc3QgbGlnaHQxID0gbWFrZUxpZ2h0KClcXG4gICAgY29uc3QgbGlnaHQyID0gbWFrZUxpZ2h0KClcXG4gICAgY29uc3QgdGV4dHVyZSA9IGFzc2V0cy5nbGIuc3V6YW5uZS5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgMClcXG4gICAgY29uc3QgYm91bmNpbmdNb25rZXk6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHsgdGV4dHVyZSB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFsrMiwgKzEsICsxXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc3Bpbm5pbmdNb25rZXk6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHsgdGV4dHVyZSB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFstMiwgKzEsICsxXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3QgYmFsbDogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDIgfSksXFxuICAgICAgICAvLyBUaGUgbWF0ZXJpYWwgaXMgc2V0IG9uY2UgdGhlIHNoYWRvdyB0ZXh0dXJlcyBhcmUgYXZhaWxhYmxlLlxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIC0zXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc2hhZG93MSA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQxLFxcbiAgICAgICAgbWVzaGVzOiBbYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2hhZG93MiA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQyLFxcbiAgICAgICAgbWVzaGVzOiBbYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsXSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGdyb3VuZCBhbmQgdGhlIGJhbGwgc2hhcmUgdGhlIHNhbWUgbWF0ZXJpYWwgdG8gY2F0Y2ggdGhlIHNoYWRvd3MuXFxuICAgIC8vIEEgVGdkTWF0ZXJpYWxTaGFkb3cgY2FuIHdyYXAgYW5vdGhlciBvbmUgdG8gY2F0Y2ggdGhlIHNoYWRvd3Mgb2Ygc2V2ZXJhbCBsaWdodHMuXFxuICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XFxuICAgICAgICBjYW1lcmE6IGxpZ2h0MixcXG4gICAgICAgIHRleHR1cmU6IHNoYWRvdzIudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogbmV3IFRnZENvbG9yKFxcXCIjZGRkXFxcIikudG9BcnJheU51bWJlcjQoKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGludDogSU5JVElBTF9DT0xPUjIsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XFxuICAgICAgICBjYW1lcmE6IGxpZ2h0MSxcXG4gICAgICAgIHRleHR1cmU6IHNoYWRvdzEudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgICAgICB0aW50OiBJTklUSUFMX0NPTE9SMSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGJhbGwgY2FzdHMgYSBzaGFkb3csIGJ1dCBpdCBhbHNvIGNhdGNoZXMgdGhlIHNoYWRvd3MuXFxuICAgIGJhbGwubWF0ZXJpYWwgPSBtYXRlcmlhbDFcXG4gICAgY29uc3QgZ3JvdW5kOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgLy8gTm9ybWFsIGlzICtZID0gWCBeIC1aXFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoe1xcbiAgICAgICAgICAgIHNpemVYOiAxMDAsXFxuICAgICAgICAgICAgc2l6ZVk6IDEwMCxcXG4gICAgICAgICAgICB2ZWNYOiBbMSwgMCwgMF0sXFxuICAgICAgICAgICAgdmVjWTogWzAsIDAsIC0xXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICB9XFxuICAgIC8vIFNob3cgd2hlcmUgdGhlIGxpZ2h0cyBhcmUuIFRoZXkgZG8gbm90IGNhc3QgYW55IHNoYWRvdy5cXG4gICAgY29uc3Qgc3VuTWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiBuZXcgVGdkQ29sb3IoSU5JVElBTF9DT0xPUjEpLnRvQXJyYXlOdW1iZXI0KCkgfSlcXG4gICAgY29uc3Qgc3VuTWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiBuZXcgVGdkQ29sb3IoSU5JVElBTF9DT0xPUjIpLnRvQXJyYXlOdW1iZXI0KCkgfSlcXG4gICAgY29uc3Qgc3VuMTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBzdW5NYXRlcmlhbDEsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBsaWdodDEudHJhbnNmby5hY3R1YWxQb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc3VuMjogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBzdW5NYXRlcmlhbDIsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBsaWdodDIudHJhbnNmby5hY3R1YWxQb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBzaGFkb3cxLFxcbiAgICAgICAgc2hhZG93MixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1lc2hlczogW2dyb3VuZCwgYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsLCBzdW4xLCBzdW4yXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhMSA9IHRpbWUgKiAwLjIwN1xcbiAgICAgICAgICAgIGNvbnN0IGEyID0gdGltZSAqIDAuMzcxXFxuICAgICAgICAgICAgY29uc3QgciA9IDhcXG4gICAgICAgICAgICBsaWdodDEudHJhbnNmby5zZXRQb3NpdGlvbihyICogTWF0aC5jb3MoYTEpLCBsaWdodDFZLCByICogTWF0aC5zaW4oYTEpKS5sb29rQXQoWzAsIDAsIDBdKVxcbiAgICAgICAgICAgIHN1bjEudHJhbnNmby5zZXRQb3NpdGlvbihsaWdodDEudHJhbnNmby5hY3R1YWxQb3NpdGlvbilcXG4gICAgICAgICAgICAvLyBUaGUgc2Vjb25kIGxpZ2h0IGlzIG9uIHRoZSBvcHBvc2l0ZSBzaWRlLlxcbiAgICAgICAgICAgIGxpZ2h0Mi50cmFuc2ZvLnNldFBvc2l0aW9uKC1yICogTWF0aC5jb3MoYTIpLCBsaWdodDJZLCAtciAqIE1hdGguc2luKGEyKSkubG9va0F0KFswLCAwLCAwXSlcXG4gICAgICAgICAgICBzdW4yLnRyYW5zZm8uc2V0UG9zaXRpb24obGlnaHQyLnRyYW5zZm8uYWN0dWFsUG9zaXRpb24pXFxuICAgICAgICAgICAgLy8gT25lIGJvdW5jZSBwZXIgc2Vjb25kLCBiZXR3ZWVuIFkgPSArMSBhbmQgWSA9ICsyLlxcbiAgICAgICAgICAgIGJvdW5jaW5nTW9ua2V5LnRyYW5zZm8uc2V0UG9zaXRpb24oKzIsIDEgKyBNYXRoLmFicyhNYXRoLnNpbih0aW1lICogTWF0aC5QSSkpLCAwKVxcbiAgICAgICAgICAgIC8vIE9uZSB0dXJuIGV2ZXJ5IDIgc2Vjb25kcy5cXG4gICAgICAgICAgICBzcGlubmluZ01vbmtleS50cmFuc2ZvLm9yYml0QXJvdW5kWSgoLWRlbHRhICogMiAqIE1hdGguUEkpIC8gMilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigtMzAsIDAsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKVxcbiAgICBjb250ZXh0LnBsYXkoKVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgVGdkQ2FtZXJhT3J0aG9ncmFwaGljLFxcbiAgICBUZ2RDb2xvcixcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RHZW9tZXRyeVBsYW5lLFxcbiAgICBUZ2RHZW9tZXRyeVNwaGVyZUljbyxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlLFxcbiAgICBUZ2RNYXRlcmlhbFNoYWRvdyxcXG4gICAgdHlwZSBUZ2RNZXNoLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2hlcyxcXG4gICAgVGdkUGFpbnRlclNoYWRvdyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICBUZ2RUcmFuc2ZvLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld0lucHV0Q29sb3IsIFZpZXdTbGlkZXIgfSBmcm9tIFxcXCJAdG9sb2tvYmFuL3VpXFxcIlxcbmltcG9ydCBSZWFjdCBmcm9tIFxcXCJyZWFjdFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyB1c2VGbG9hdCB9IGZyb20gXFxcIkAvdXRpbHMvaG9va3MvZmxvYXRcXFwiXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlxcXCJcXG5cXG5jb25zdCBJTklUSUFMX0JJQVMgPSAwLjFcXG5jb25zdCBCSUFTX01JTiA9IC0wLjNcXG5jb25zdCBCSUFTX01BWCA9IDFcXG5jb25zdCBJTklUSUFMX0xJR0hUX1kgPSAyXFxuY29uc3QgSU5JVElBTF9DT0xPUjEgPSBcXFwiI2ZmYWExYVxcXCJcXG5jb25zdCBJTklUSUFMX0NPTE9SMiA9IFxcXCIjMWFhYWZmXFxcIlxcbmNvbnN0IFNUT1JBR0VfS0VZX0JJQVMgPSBcXFwidGdkL2RlbW8vcGFpbnRlci9zaGFkb3cvYmlhc1xcXCJcXG5cXG5mdW5jdGlvbiBsb2FkQmlhcygpOiBudW1iZXIge1xcbiAgICB0cnkge1xcbiAgICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWV9CSUFTKVxcbiAgICAgICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybiBJTklUSUFMX0JJQVNcXG5cXG4gICAgICAgIGNvbnN0IGJpYXMgPSBOdW1iZXIoaXRlbSlcXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGJpYXMpKSByZXR1cm4gSU5JVElBTF9CSUFTXFxuXFxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoQklBU19NSU4sIE1hdGgubWluKEJJQVNfTUFYLCBiaWFzKSlcXG4gICAgfSBjYXRjaCB7XFxuICAgICAgICByZXR1cm4gSU5JVElBTF9CSUFTXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gc2F2ZUJpYXMoYmlhczogbnVtYmVyKSB7XFxuICAgIHRyeSB7XFxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVlfQklBUywgYCR7Ymlhc31gKVxcbiAgICB9IGNhdGNoIHtcXG4gICAgICAgIC8vIFN0b3JhZ2UgY2FuIGJlIHVuYXZhaWxhYmxlIChwcml2YXRlIG1vZGUsIGJsb2NrZWQgc2l0ZSBkYXRhLCAuLi4pLlxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgLy8gVGhlIGxpZ2h0cyBvcmJpdCBhcm91bmQgKDAsMCwwKSBhdCBhIGRpc3RhbmNlIG9mIDguXFxuICAgIC8vIFRoZWlyIFkgY29vcmRpbmF0ZXMgY2FuIGJlIGNoYW5nZWQgd2l0aCB0aGUgc2xpZGVycy5cXG4gICAgbGV0IGxpZ2h0MVkgPSBJTklUSUFMX0xJR0hUX1lcXG4gICAgbGV0IGxpZ2h0MlkgPSBJTklUSUFMX0xJR0hUX1lcXG4gICAgY29uc3QgbWFrZUxpZ2h0ID0gKCkgPT4ge1xcbiAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcXG4gICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwIH0pLFxcbiAgICAgICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxcbiAgICAgICAgICAgIHNwYWNlSGVpZ2h0OiA0LFxcbiAgICAgICAgICAgIG5lYXI6IDAuMSxcXG4gICAgICAgICAgICBmYXI6IDMwLFxcbiAgICAgICAgfSlcXG4gICAgICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cXG4gICAgICAgIGxpZ2h0LnNjcmVlbldpZHRoID0gMVxcbiAgICAgICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICAgICAgcmV0dXJuIGxpZ2h0XFxuICAgIH1cXG4gICAgY29uc3QgbGlnaHQxID0gbWFrZUxpZ2h0KClcXG4gICAgY29uc3QgbGlnaHQyID0gbWFrZUxpZ2h0KClcXG4gICAgY29uc3QgdGV4dHVyZSA9IGFzc2V0cy5nbGIuc3V6YW5uZS5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgMClcXG4gICAgY29uc3QgYm91bmNpbmdNb25rZXk6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHsgdGV4dHVyZSB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFsrMiwgKzEsICsxXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc3Bpbm5pbmdNb25rZXk6IFRnZE1lc2ggPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHsgdGV4dHVyZSB9KSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFstMiwgKzEsICsxXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3QgYmFsbDogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDIgfSksXFxuICAgICAgICAvLyBUaGUgbWF0ZXJpYWwgaXMgc2V0IG9uY2UgdGhlIHNoYWRvdyB0ZXh0dXJlcyBhcmUgYXZhaWxhYmxlLlxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIC0zXSB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc2hhZG93MSA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQxLFxcbiAgICAgICAgbWVzaGVzOiBbYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2hhZG93MiA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbGlnaHQyLFxcbiAgICAgICAgbWVzaGVzOiBbYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsXSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGdyb3VuZCBhbmQgdGhlIGJhbGwgc2hhcmUgdGhlIHNhbWUgbWF0ZXJpYWwgdG8gY2F0Y2ggdGhlIHNoYWRvd3MuXFxuICAgIC8vIEEgVGdkTWF0ZXJpYWxTaGFkb3cgY2FuIHdyYXAgYW5vdGhlciBvbmUgdG8gY2F0Y2ggdGhlIHNoYWRvd3Mgb2Ygc2V2ZXJhbCBsaWdodHMuXFxuICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XFxuICAgICAgICBjYW1lcmE6IGxpZ2h0MixcXG4gICAgICAgIHRleHR1cmU6IHNoYWRvdzIudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICBjb2xvcjogbmV3IFRnZENvbG9yKFxcXCIjZGRkXFxcIikudG9BcnJheU51bWJlcjQoKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGludDogSU5JVElBTF9DT0xPUjIsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XFxuICAgICAgICBjYW1lcmE6IGxpZ2h0MSxcXG4gICAgICAgIHRleHR1cmU6IHNoYWRvdzEudGV4dHVyZSxcXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXFxuICAgICAgICB0aW50OiBJTklUSUFMX0NPTE9SMSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGJhbGwgY2FzdHMgYSBzaGFkb3csIGJ1dCBpdCBhbHNvIGNhdGNoZXMgdGhlIHNoYWRvd3MuXFxuICAgIGJhbGwubWF0ZXJpYWwgPSBtYXRlcmlhbDFcXG4gICAgY29uc3QgZ3JvdW5kOiBUZ2RNZXNoID0ge1xcbiAgICAgICAgLy8gTm9ybWFsIGlzICtZID0gWCBeIC1aXFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5UGxhbmUoe1xcbiAgICAgICAgICAgIHNpemVYOiAxMDAsXFxuICAgICAgICAgICAgc2l6ZVk6IDEwMCxcXG4gICAgICAgICAgICB2ZWNYOiBbMSwgMCwgMF0sXFxuICAgICAgICAgICAgdmVjWTogWzAsIDAsIC0xXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsMSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKCksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICB9XFxuICAgIC8vIFNob3cgd2hlcmUgdGhlIGxpZ2h0cyBhcmUuIFRoZXkgZG8gbm90IGNhc3QgYW55IHNoYWRvdy5cXG4gICAgY29uc3Qgc3VuTWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiBuZXcgVGdkQ29sb3IoSU5JVElBTF9DT0xPUjEpLnRvQXJyYXlOdW1iZXI0KCkgfSlcXG4gICAgY29uc3Qgc3VuTWF0ZXJpYWwyID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiBuZXcgVGdkQ29sb3IoSU5JVElBTF9DT0xPUjIpLnRvQXJyYXlOdW1iZXI0KCkgfSlcXG4gICAgY29uc3Qgc3VuMTogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBzdW5NYXRlcmlhbDEsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBsaWdodDEudHJhbnNmby5hY3R1YWxQb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29uc3Qgc3VuMjogVGdkTWVzaCA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcXG4gICAgICAgIG1hdGVyaWFsOiBzdW5NYXRlcmlhbDIsXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBsaWdodDIudHJhbnNmby5hY3R1YWxQb3NpdGlvbiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgIH1cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBzaGFkb3cxLFxcbiAgICAgICAgc2hhZG93MixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMSwgMC4xLCAwLjEsIDFdLCBkZXB0aDogMSB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc1xcXCIsXFxuICAgICAgICAgICAgY3VsbDogXFxcImJhY2tcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgICAgIG1lc2hlczogW2dyb3VuZCwgYm91bmNpbmdNb25rZXksIHNwaW5uaW5nTW9ua2V5LCBiYWxsLCBzdW4xLCBzdW4yXSxcXG4gICAgICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgXSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICBjb25zdCBhMSA9IHRpbWUgKiAwLjIwN1xcbiAgICAgICAgICAgIGNvbnN0IGEyID0gdGltZSAqIDAuMzcxXFxuICAgICAgICAgICAgY29uc3QgciA9IDhcXG4gICAgICAgICAgICBsaWdodDEudHJhbnNmby5zZXRQb3NpdGlvbihyICogTWF0aC5jb3MoYTEpLCBsaWdodDFZLCByICogTWF0aC5zaW4oYTEpKS5sb29rQXQoWzAsIDAsIDBdKVxcbiAgICAgICAgICAgIHN1bjEudHJhbnNmby5zZXRQb3NpdGlvbihsaWdodDEudHJhbnNmby5hY3R1YWxQb3NpdGlvbilcXG4gICAgICAgICAgICAvLyBUaGUgc2Vjb25kIGxpZ2h0IGlzIG9uIHRoZSBvcHBvc2l0ZSBzaWRlLlxcbiAgICAgICAgICAgIGxpZ2h0Mi50cmFuc2ZvLnNldFBvc2l0aW9uKC1yICogTWF0aC5jb3MoYTIpLCBsaWdodDJZLCAtciAqIE1hdGguc2luKGEyKSkubG9va0F0KFswLCAwLCAwXSlcXG4gICAgICAgICAgICBzdW4yLnRyYW5zZm8uc2V0UG9zaXRpb24obGlnaHQyLnRyYW5zZm8uYWN0dWFsUG9zaXRpb24pXFxuICAgICAgICAgICAgLy8gT25lIGJvdW5jZSBwZXIgc2Vjb25kLCBiZXR3ZWVuIFkgPSArMSBhbmQgWSA9ICsyLlxcbiAgICAgICAgICAgIGJvdW5jaW5nTW9ua2V5LnRyYW5zZm8uc2V0UG9zaXRpb24oKzIsIDEgKyBNYXRoLmFicyhNYXRoLnNpbih0aW1lICogTWF0aC5QSSkpLCAwKVxcbiAgICAgICAgICAgIC8vIE9uZSB0dXJuIGV2ZXJ5IDIgc2Vjb25kcy5cXG4gICAgICAgICAgICBzcGlubmluZ01vbmtleS50cmFuc2ZvLm9yYml0QXJvdW5kWSgoLWRlbHRhICogMiAqIE1hdGguUEkpIC8gMilcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbigtMzAsIDAsIDApXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbiAgICByZXR1cm4ge1xcbiAgICAgICAgc2V0QmlhcyhiaWFzOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDEuYmlhcyA9IGJpYXNcXG4gICAgICAgICAgICBtYXRlcmlhbDIuYmlhcyA9IGJpYXNcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRMaWdodDFZKHk6IG51bWJlcikge1xcbiAgICAgICAgICAgIGxpZ2h0MVkgPSB5XFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0TGlnaHQyWSh5OiBudW1iZXIpIHtcXG4gICAgICAgICAgICBsaWdodDJZID0geVxcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNldENvbG9yMShjb2xvcjogc3RyaW5nKSB7XFxuICAgICAgICAgICAgbWF0ZXJpYWwxLnRpbnQgPSBjb2xvclxcbiAgICAgICAgICAgIHN1bk1hdGVyaWFsMS5jb2xvciA9IGNvbG9yXFxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0Q29sb3IyKGNvbG9yOiBzdHJpbmcpIHtcXG4gICAgICAgICAgICBtYXRlcmlhbDIudGludCA9IGNvbG9yXFxuICAgICAgICAgICAgc3VuTWF0ZXJpYWwyLmNvbG9yID0gY29sb3JcXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgICAgIH0sXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIGluaXQ+IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgaW5pdGlhbEJpYXMgPSBSZWFjdC51c2VNZW1vKGxvYWRCaWFzLCBbXSlcXG4gICAgY29uc3QgW2JpYXMsIHNldEJpYXNdID0gdXNlRmxvYXQoaW5pdGlhbEJpYXMsIHJlZi5jdXJyZW50Py5zZXRCaWFzKVxcbiAgICBjb25zdCBbbGlnaHQxWSwgc2V0TGlnaHQxWV0gPSB1c2VGbG9hdChJTklUSUFMX0xJR0hUX1ksIHJlZi5jdXJyZW50Py5zZXRMaWdodDFZKVxcbiAgICBjb25zdCBbbGlnaHQyWSwgc2V0TGlnaHQyWV0gPSB1c2VGbG9hdChJTklUSUFMX0xJR0hUX1ksIHJlZi5jdXJyZW50Py5zZXRMaWdodDJZKVxcbiAgICBjb25zdCBbY29sb3IxLCBzZXRDb2xvcjFdID0gUmVhY3QudXNlU3RhdGUoSU5JVElBTF9DT0xPUjEpXFxuICAgIGNvbnN0IFtjb2xvcjIsIHNldENvbG9yMl0gPSBSZWFjdC51c2VTdGF0ZShJTklUSUFMX0NPTE9SMilcXG4gICAgY29uc3QgaGFuZGxlQ29sb3IxQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcXG4gICAgICAgIHNldENvbG9yMSh2YWx1ZSlcXG4gICAgICAgIHJlZi5jdXJyZW50Py5zZXRDb2xvcjEodmFsdWUpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQ29sb3IyQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcXG4gICAgICAgIHNldENvbG9yMih2YWx1ZSlcXG4gICAgICAgIHJlZi5jdXJyZW50Py5zZXRDb2xvcjIodmFsdWUpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQmlhc0NoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRCaWFzKHZhbHVlKVxcbiAgICAgICAgc2F2ZUJpYXModmFsdWUpXFxuICAgIH1cXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbW8gPSBpbml0KGNvbnRleHQsIGFzc2V0cylcXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBkZW1vXFxuICAgICAgICAgICAgICAgIC8vIFRoZSBzbGlkZXJzIG1heSBoYXZlIGNoYW5nZWQgYmVmb3JlIFdlYkdMIHdhcyByZWFkeS5cXG4gICAgICAgICAgICAgICAgZGVtby5zZXRCaWFzKGJpYXMpXFxuICAgICAgICAgICAgICAgIGRlbW8uc2V0TGlnaHQxWShsaWdodDFZKVxcbiAgICAgICAgICAgICAgICBkZW1vLnNldExpZ2h0MlkobGlnaHQyWSlcXG4gICAgICAgICAgICAgICAgZGVtby5zZXRDb2xvcjEoY29sb3IxKVxcbiAgICAgICAgICAgICAgICBkZW1vLnNldENvbG9yMihjb2xvcjIpXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuICAgICAgICAgICAgZ2l6bW8+XFxuICAgICAgICAgICAgPFZpZXdTbGlkZXJcXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JpYXN9XFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVCaWFzQ2hhbmdlfVxcbiAgICAgICAgICAgICAgICBtaW49e0JJQVNfTUlOfVxcbiAgICAgICAgICAgICAgICBtYXg9e0JJQVNfTUFYfVxcbiAgICAgICAgICAgICAgICBzdGVwPXswLjA1fVxcbiAgICAgICAgICAgICAgICB0ZXh0PXsodmFsdWUpID0+IGBiaWFzOiAke3ZhbHVlLnRvRml4ZWQoMil9YH1cXG4gICAgICAgICAgICAgICAgd2lkZVxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPFZpZXdTbGlkZXJcXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xpZ2h0MVl9XFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRMaWdodDFZfVxcbiAgICAgICAgICAgICAgICBtaW49ezB9XFxuICAgICAgICAgICAgICAgIG1heD17MjB9XFxuICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cXG4gICAgICAgICAgICAgICAgdGV4dD17KHZhbHVlKSA9PiBgbGlnaHQxLnk6ICR7dmFsdWUudG9GaXhlZCgxKX1gfVxcbiAgICAgICAgICAgICAgICB3aWRlXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8Vmlld1NsaWRlclxcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHQyWX1cXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldExpZ2h0Mll9XFxuICAgICAgICAgICAgICAgIG1pbj17MH1cXG4gICAgICAgICAgICAgICAgbWF4PXsyMH1cXG4gICAgICAgICAgICAgICAgc3RlcD17MC4xfVxcbiAgICAgICAgICAgICAgICB0ZXh0PXsodmFsdWUpID0+IGBsaWdodDIueTogJHt2YWx1ZS50b0ZpeGVkKDEpfWB9XFxuICAgICAgICAgICAgICAgIHdpZGVcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxWaWV3SW5wdXRDb2xvciBsYWJlbD1cXFwibGlnaHQxIGNvbG9yXFxcIiB2YWx1ZT17Y29sb3IxfSBvbkNoYW5nZT17aGFuZGxlQ29sb3IxQ2hhbmdlfSAvPlxcbiAgICAgICAgICAgIDxWaWV3SW5wdXRDb2xvciBsYWJlbD1cXFwibGlnaHQyIGNvbG9yXFxcIiB2YWx1ZT17Y29sb3IyfSBvbkNoYW5nZT17aGFuZGxlQ29sb3IyQ2hhbmdlfSAvPlxcbiAgICAgICAgPC9WaWV3PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIFRnZENhbWVyYU9ydGhvZ3JhcGhpYyxcbiAgICBUZ2RDb2xvcixcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkR2VvbWV0cnlQbGFuZSxcbiAgICBUZ2RHZW9tZXRyeVNwaGVyZUljbyxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcbiAgICBUZ2RNYXRlcmlhbFNoYWRvdyxcbiAgICB0eXBlIFRnZE1lc2gsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaGVzLFxuICAgIFRnZFBhaW50ZXJTaGFkb3csXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRyYW5zZm8sXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBWaWV3SW5wdXRDb2xvciwgVmlld1NsaWRlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IHVzZUZsb2F0IH0gZnJvbSBcIkAvdXRpbHMvaG9va3MvZmxvYXRcIlxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5jb25zdCBJTklUSUFMX0JJQVMgPSAwLjFcbmNvbnN0IEJJQVNfTUlOID0gLTAuM1xuY29uc3QgQklBU19NQVggPSAxXG5jb25zdCBJTklUSUFMX0xJR0hUX1kgPSAyXG5jb25zdCBJTklUSUFMX0NPTE9SMSA9IFwiI2ZmYWExYVwiXG5jb25zdCBJTklUSUFMX0NPTE9SMiA9IFwiIzFhYWFmZlwiXG5jb25zdCBTVE9SQUdFX0tFWV9CSUFTID0gXCJ0Z2QvZGVtby9wYWludGVyL3NoYWRvdy9iaWFzXCJcblxuZnVuY3Rpb24gbG9hZEJpYXMoKTogbnVtYmVyIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZX0JJQVMpXG4gICAgICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm4gSU5JVElBTF9CSUFTXG5cbiAgICAgICAgY29uc3QgYmlhcyA9IE51bWJlcihpdGVtKVxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiaWFzKSkgcmV0dXJuIElOSVRJQUxfQklBU1xuXG4gICAgICAgIHJldHVybiBNYXRoLm1heChCSUFTX01JTiwgTWF0aC5taW4oQklBU19NQVgsIGJpYXMpKVxuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gSU5JVElBTF9CSUFTXG4gICAgfVxufVxuXG5mdW5jdGlvbiBzYXZlQmlhcyhiaWFzOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVlfQklBUywgYCR7Ymlhc31gKVxuICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBTdG9yYWdlIGNhbiBiZSB1bmF2YWlsYWJsZSAocHJpdmF0ZSBtb2RlLCBibG9ja2VkIHNpdGUgZGF0YSwgLi4uKS5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgLy8gVGhlIGxpZ2h0cyBvcmJpdCBhcm91bmQgKDAsMCwwKSBhdCBhIGRpc3RhbmNlIG9mIDguXG4gICAgLy8gVGhlaXIgWSBjb29yZGluYXRlcyBjYW4gYmUgY2hhbmdlZCB3aXRoIHRoZSBzbGlkZXJzLlxuICAgIGxldCBsaWdodDFZID0gSU5JVElBTF9MSUdIVF9ZXG4gICAgbGV0IGxpZ2h0MlkgPSBJTklUSUFMX0xJR0hUX1lcbiAgICBjb25zdCBtYWtlTGlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRnZENhbWVyYU9ydGhvZ3JhcGhpYyh7XG4gICAgICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwIH0pLFxuICAgICAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXG4gICAgICAgICAgICBzcGFjZUhlaWdodDogNCxcbiAgICAgICAgICAgIG5lYXI6IDAuMSxcbiAgICAgICAgICAgIGZhcjogMzAsXG4gICAgICAgIH0pXG4gICAgICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cbiAgICAgICAgbGlnaHQuc2NyZWVuV2lkdGggPSAxXG4gICAgICAgIGxpZ2h0LnNjcmVlbkhlaWdodCA9IDFcbiAgICAgICAgcmV0dXJuIGxpZ2h0XG4gICAgfVxuICAgIGNvbnN0IGxpZ2h0MSA9IG1ha2VMaWdodCgpXG4gICAgY29uc3QgbGlnaHQyID0gbWFrZUxpZ2h0KClcbiAgICBjb25zdCB0ZXh0dXJlID0gYXNzZXRzLmdsYi5zdXphbm5lLmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCAwKVxuICAgIGNvbnN0IGJvdW5jaW5nTW9ua2V5OiBUZ2RNZXNoID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoeyB0ZXh0dXJlIH0pLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbKzIsICsxLCArMV0gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IHNwaW5uaW5nTW9ua2V5OiBUZ2RNZXNoID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoeyB0ZXh0dXJlIH0pLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbLTIsICsxLCArMV0gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IGJhbGw6IFRnZE1lc2ggPSB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDIgfSksXG4gICAgICAgIC8vIFRoZSBtYXRlcmlhbCBpcyBzZXQgb25jZSB0aGUgc2hhZG93IHRleHR1cmVzIGFyZSBhdmFpbGFibGUuXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFswLCAwLCAtM10gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IHNoYWRvdzEgPSBuZXcgVGdkUGFpbnRlclNoYWRvdyhjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogbGlnaHQxLFxuICAgICAgICBtZXNoZXM6IFtib3VuY2luZ01vbmtleSwgc3Bpbm5pbmdNb25rZXksIGJhbGxdLFxuICAgIH0pXG4gICAgY29uc3Qgc2hhZG93MiA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcbiAgICAgICAgY2FtZXJhOiBsaWdodDIsXG4gICAgICAgIG1lc2hlczogW2JvdW5jaW5nTW9ua2V5LCBzcGlubmluZ01vbmtleSwgYmFsbF0sXG4gICAgfSlcbiAgICAvLyBUaGUgZ3JvdW5kIGFuZCB0aGUgYmFsbCBzaGFyZSB0aGUgc2FtZSBtYXRlcmlhbCB0byBjYXRjaCB0aGUgc2hhZG93cy5cbiAgICAvLyBBIFRnZE1hdGVyaWFsU2hhZG93IGNhbiB3cmFwIGFub3RoZXIgb25lIHRvIGNhdGNoIHRoZSBzaGFkb3dzIG9mIHNldmVyYWwgbGlnaHRzLlxuICAgIGNvbnN0IG1hdGVyaWFsMiA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XG4gICAgICAgIGNhbWVyYTogbGlnaHQyLFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cyLnRleHR1cmUsXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcbiAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkQ29sb3IoXCIjZGRkXCIpLnRvQXJyYXlOdW1iZXI0KCksXG4gICAgICAgIH0pLFxuICAgICAgICB0aW50OiBJTklUSUFMX0NPTE9SMixcbiAgICB9KVxuICAgIGNvbnN0IG1hdGVyaWFsMSA9IG5ldyBUZ2RNYXRlcmlhbFNoYWRvdyh7XG4gICAgICAgIGNhbWVyYTogbGlnaHQxLFxuICAgICAgICB0ZXh0dXJlOiBzaGFkb3cxLnRleHR1cmUsXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbDIsXG4gICAgICAgIHRpbnQ6IElOSVRJQUxfQ09MT1IxLFxuICAgIH0pXG4gICAgLy8gVGhlIGJhbGwgY2FzdHMgYSBzaGFkb3csIGJ1dCBpdCBhbHNvIGNhdGNoZXMgdGhlIHNoYWRvd3MuXG4gICAgYmFsbC5tYXRlcmlhbCA9IG1hdGVyaWFsMVxuICAgIGNvbnN0IGdyb3VuZDogVGdkTWVzaCA9IHtcbiAgICAgICAgLy8gTm9ybWFsIGlzICtZID0gWCBeIC1aXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlQbGFuZSh7XG4gICAgICAgICAgICBzaXplWDogMTAwLFxuICAgICAgICAgICAgc2l6ZVk6IDEwMCxcbiAgICAgICAgICAgIHZlY1g6IFsxLCAwLCAwXSxcbiAgICAgICAgICAgIHZlY1k6IFswLCAwLCAtMV0sXG4gICAgICAgIH0pLFxuICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWwxLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbygpLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH1cbiAgICAvLyBTaG93IHdoZXJlIHRoZSBsaWdodHMgYXJlLiBUaGV5IGRvIG5vdCBjYXN0IGFueSBzaGFkb3cuXG4gICAgY29uc3Qgc3VuTWF0ZXJpYWwxID0gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yOiBuZXcgVGdkQ29sb3IoSU5JVElBTF9DT0xPUjEpLnRvQXJyYXlOdW1iZXI0KCkgfSlcbiAgICBjb25zdCBzdW5NYXRlcmlhbDIgPSBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgY29sb3I6IG5ldyBUZ2RDb2xvcihJTklUSUFMX0NPTE9SMikudG9BcnJheU51bWJlcjQoKSB9KVxuICAgIGNvbnN0IHN1bjE6IFRnZE1lc2ggPSB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcbiAgICAgICAgbWF0ZXJpYWw6IHN1bk1hdGVyaWFsMSxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogbGlnaHQxLnRyYW5zZm8uYWN0dWFsUG9zaXRpb24gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnN0IHN1bjI6IFRnZE1lc2ggPSB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KSxcbiAgICAgICAgbWF0ZXJpYWw6IHN1bk1hdGVyaWFsMixcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogbGlnaHQyLnRyYW5zZm8uYWN0dWFsUG9zaXRpb24gfSksXG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBzaGFkb3cxLFxuICAgICAgICBzaGFkb3cyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjEsIDAuMSwgMC4xLCAxXSwgZGVwdGg6IDEgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IFwibGVzc1wiLFxuICAgICAgICAgICAgY3VsbDogXCJiYWNrXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaGVzKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaGVzOiBbZ3JvdW5kLCBib3VuY2luZ01vbmtleSwgc3Bpbm5pbmdNb25rZXksIGJhbGwsIHN1bjEsIHN1bjJdLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUsIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhMSA9IHRpbWUgKiAwLjIwN1xuICAgICAgICAgICAgY29uc3QgYTIgPSB0aW1lICogMC4zNzFcbiAgICAgICAgICAgIGNvbnN0IHIgPSA4XG4gICAgICAgICAgICBsaWdodDEudHJhbnNmby5zZXRQb3NpdGlvbihyICogTWF0aC5jb3MoYTEpLCBsaWdodDFZLCByICogTWF0aC5zaW4oYTEpKS5sb29rQXQoWzAsIDAsIDBdKVxuICAgICAgICAgICAgc3VuMS50cmFuc2ZvLnNldFBvc2l0aW9uKGxpZ2h0MS50cmFuc2ZvLmFjdHVhbFBvc2l0aW9uKVxuICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBsaWdodCBpcyBvbiB0aGUgb3Bwb3NpdGUgc2lkZS5cbiAgICAgICAgICAgIGxpZ2h0Mi50cmFuc2ZvLnNldFBvc2l0aW9uKC1yICogTWF0aC5jb3MoYTIpLCBsaWdodDJZLCAtciAqIE1hdGguc2luKGEyKSkubG9va0F0KFswLCAwLCAwXSlcbiAgICAgICAgICAgIHN1bjIudHJhbnNmby5zZXRQb3NpdGlvbihsaWdodDIudHJhbnNmby5hY3R1YWxQb3NpdGlvbilcbiAgICAgICAgICAgIC8vIE9uZSBib3VuY2UgcGVyIHNlY29uZCwgYmV0d2VlbiBZID0gKzEgYW5kIFkgPSArMi5cbiAgICAgICAgICAgIGJvdW5jaW5nTW9ua2V5LnRyYW5zZm8uc2V0UG9zaXRpb24oKzIsIDEgKyBNYXRoLmFicyhNYXRoLnNpbih0aW1lICogTWF0aC5QSSkpLCAwKVxuICAgICAgICAgICAgLy8gT25lIHR1cm4gZXZlcnkgMiBzZWNvbmRzLlxuICAgICAgICAgICAgc3Bpbm5pbmdNb25rZXkudHJhbnNmby5vcmJpdEFyb3VuZFkoKC1kZWx0YSAqIDIgKiBNYXRoLlBJKSAvIDIpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oLTMwLCAwLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxuICAgIHJldHVybiB7XG4gICAgICAgIHNldEJpYXMoYmlhczogbnVtYmVyKSB7XG4gICAgICAgICAgICBtYXRlcmlhbDEuYmlhcyA9IGJpYXNcbiAgICAgICAgICAgIG1hdGVyaWFsMi5iaWFzID0gYmlhc1xuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldExpZ2h0MVkoeTogbnVtYmVyKSB7XG4gICAgICAgICAgICBsaWdodDFZID0geVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldExpZ2h0MlkoeTogbnVtYmVyKSB7XG4gICAgICAgICAgICBsaWdodDJZID0geVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldENvbG9yMShjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgICBtYXRlcmlhbDEudGludCA9IGNvbG9yXG4gICAgICAgICAgICBzdW5NYXRlcmlhbDEuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgICAgIHNldENvbG9yMihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgICAgICBtYXRlcmlhbDIudGludCA9IGNvbG9yXG4gICAgICAgICAgICBzdW5NYXRlcmlhbDIuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBpbml0PiB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgaW5pdGlhbEJpYXMgPSBSZWFjdC51c2VNZW1vKGxvYWRCaWFzLCBbXSlcbiAgICBjb25zdCBbYmlhcywgc2V0Qmlhc10gPSB1c2VGbG9hdChpbml0aWFsQmlhcywgcmVmLmN1cnJlbnQ/LnNldEJpYXMpXG4gICAgY29uc3QgW2xpZ2h0MVksIHNldExpZ2h0MVldID0gdXNlRmxvYXQoSU5JVElBTF9MSUdIVF9ZLCByZWYuY3VycmVudD8uc2V0TGlnaHQxWSlcbiAgICBjb25zdCBbbGlnaHQyWSwgc2V0TGlnaHQyWV0gPSB1c2VGbG9hdChJTklUSUFMX0xJR0hUX1ksIHJlZi5jdXJyZW50Py5zZXRMaWdodDJZKVxuICAgIGNvbnN0IFtjb2xvcjEsIHNldENvbG9yMV0gPSBSZWFjdC51c2VTdGF0ZShJTklUSUFMX0NPTE9SMSlcbiAgICBjb25zdCBbY29sb3IyLCBzZXRDb2xvcjJdID0gUmVhY3QudXNlU3RhdGUoSU5JVElBTF9DT0xPUjIpXG4gICAgY29uc3QgaGFuZGxlQ29sb3IxQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0Q29sb3IxKHZhbHVlKVxuICAgICAgICByZWYuY3VycmVudD8uc2V0Q29sb3IxKHZhbHVlKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDb2xvcjJDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRDb2xvcjIodmFsdWUpXG4gICAgICAgIHJlZi5jdXJyZW50Py5zZXRDb2xvcjIodmFsdWUpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUJpYXNDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRCaWFzKHZhbHVlKVxuICAgICAgICBzYXZlQmlhcyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbW8gPSBpbml0KGNvbnRleHQsIGFzc2V0cylcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGRlbW9cbiAgICAgICAgICAgICAgICAvLyBUaGUgc2xpZGVycyBtYXkgaGF2ZSBjaGFuZ2VkIGJlZm9yZSBXZWJHTCB3YXMgcmVhZHkuXG4gICAgICAgICAgICAgICAgZGVtby5zZXRCaWFzKGJpYXMpXG4gICAgICAgICAgICAgICAgZGVtby5zZXRMaWdodDFZKGxpZ2h0MVkpXG4gICAgICAgICAgICAgICAgZGVtby5zZXRMaWdodDJZKGxpZ2h0MlkpXG4gICAgICAgICAgICAgICAgZGVtby5zZXRDb2xvcjEoY29sb3IxKVxuICAgICAgICAgICAgICAgIGRlbW8uc2V0Q29sb3IyKGNvbG9yMilcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3sgZ2xiOiB7IHN1emFubmU6IFN1emFubmVVUkwgfSB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdTbGlkZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Ymlhc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQmlhc0NoYW5nZX1cbiAgICAgICAgICAgICAgICBtaW49e0JJQVNfTUlOfVxuICAgICAgICAgICAgICAgIG1heD17QklBU19NQVh9XG4gICAgICAgICAgICAgICAgc3RlcD17MC4wNX1cbiAgICAgICAgICAgICAgICB0ZXh0PXsodmFsdWUpID0+IGBiaWFzOiAke3ZhbHVlLnRvRml4ZWQoMil9YH1cbiAgICAgICAgICAgICAgICB3aWRlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpZXdTbGlkZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bGlnaHQxWX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0TGlnaHQxWX1cbiAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgbWF4PXsyMH1cbiAgICAgICAgICAgICAgICBzdGVwPXswLjF9XG4gICAgICAgICAgICAgICAgdGV4dD17KHZhbHVlKSA9PiBgbGlnaHQxLnk6ICR7dmFsdWUudG9GaXhlZCgxKX1gfVxuICAgICAgICAgICAgICAgIHdpZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Vmlld1NsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXtsaWdodDJZfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRMaWdodDJZfVxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezIwfVxuICAgICAgICAgICAgICAgIHN0ZXA9ezAuMX1cbiAgICAgICAgICAgICAgICB0ZXh0PXsodmFsdWUpID0+IGBsaWdodDIueTogJHt2YWx1ZS50b0ZpeGVkKDEpfWB9XG4gICAgICAgICAgICAgICAgd2lkZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaWV3SW5wdXRDb2xvciBsYWJlbD1cImxpZ2h0MSBjb2xvclwiIHZhbHVlPXtjb2xvcjF9IG9uQ2hhbmdlPXtoYW5kbGVDb2xvcjFDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8Vmlld0lucHV0Q29sb3IgbGFiZWw9XCJsaWdodDIgY29sb3JcIiB2YWx1ZT17Y29sb3IyfSBvbkNoYW5nZT17aGFuZGxlQ29sb3IyQ2hhbmdlfSAvPlxuICAgICAgICA8L1ZpZXc+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRmxvYXQoXG5cdGluaXRpYWxWYWx1ZTogbnVtYmVyLFxuXHRvbkNoYW5nZT86ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLFxuKTogW3ZhbHVlOiBudW1iZXIsIHNldFZhbHVlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZF0ge1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBvbkNoYW5nZT8uKHZhbHVlKSwgW3ZhbHVlXSk7XG5cdHJldHVybiBbdmFsdWUsIHNldFZhbHVlXTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ2FtZXJhT3J0aG9ncmFwaGljIiwiVGdkQ29sb3IiLCJUZ2RHZW9tZXRyeVBsYW5lIiwiVGdkR2VvbWV0cnlTcGhlcmVJY28iLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkTWF0ZXJpYWxTaGFkb3ciLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTG9naWMiLCJUZ2RQYWludGVyTWVzaGVzIiwiVGdkUGFpbnRlclNoYWRvdyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRyYW5zZm8iLCJWaWV3SW5wdXRDb2xvciIsIlZpZXdTbGlkZXIiLCJWaWV3IiwidXNlRmxvYXQiLCJTdXphbm5lVVJMIiwiSU5JVElBTF9CSUFTIiwiQklBU19NSU4iLCJCSUFTX01BWCIsIklOSVRJQUxfTElHSFRfWSIsIklOSVRJQUxfQ09MT1IxIiwiSU5JVElBTF9DT0xPUjIiLCJTVE9SQUdFX0tFWV9CSUFTIiwibG9hZEJpYXMiLCJpdGVtIiwid2luZG93IiwiYmlhcyIsIk51bWJlciIsIk1hdGgiLCJzYXZlQmlhcyIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwibGlnaHQxWSIsImxpZ2h0MlkiLCJtYWtlTGlnaHQiLCJsaWdodCIsImxpZ2h0MSIsImxpZ2h0MiIsInRleHR1cmUiLCJib3VuY2luZ01vbmtleSIsInNwaW5uaW5nTW9ua2V5IiwiYmFsbCIsInNoYWRvdzEiLCJzaGFkb3cyIiwibWF0ZXJpYWwyIiwibWF0ZXJpYWwxIiwiZ3JvdW5kIiwic3VuTWF0ZXJpYWwxIiwic3VuTWF0ZXJpYWwyIiwic3VuMSIsInN1bjIiLCJ0aW1lIiwiZGVsdGEiLCJhMSIsImEyIiwiciIsInNldEJpYXMiLCJzZXRMaWdodDFZIiwieSIsInNldExpZ2h0MlkiLCJzZXRDb2xvcjEiLCJjb2xvciIsInNldENvbG9yMiIsIl9yZWZfY3VycmVudCIsIl9yZWZfY3VycmVudDEiLCJfcmVmX2N1cnJlbnQyIiwicmVmIiwiaW5pdGlhbEJpYXMiLCJfdXNlRmxvYXQiLCJfdXNlRmxvYXQxIiwiX3VzZUZsb2F0MiIsImNvbG9yMSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJjb2xvcjIiLCJoYW5kbGVDb2xvcjFDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZUNvbG9yMkNoYW5nZSIsImhhbmRsZUJpYXNDaGFuZ2UiLCJvblJlYWR5IiwiZGVtbyIsInRleHQiLCJpbml0aWFsVmFsdWUiLCJvbkNoYW5nZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNyQjtBQUVoQyxJQUFNSSxRQUFRO0lBQUMsc0JBQXFCO0FBQTQxSjtBQUNoNEosSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osd0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNB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