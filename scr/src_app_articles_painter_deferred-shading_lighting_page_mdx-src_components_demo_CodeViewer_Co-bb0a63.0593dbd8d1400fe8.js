"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_deferred-shading_lighting_page_mdx-src_components_demo_CodeViewer_Co-bb0a63"], {
74167(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/helmet.d635f1c712b5efea.glb";

},
98771(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne-low.9e07f8932ceaa6ca.glb";

},
39232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _lighting_demo__rspack_import_4 = __webpack_require__(53511);
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
    "Initializing WebGL": "    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // Orbits on the other side of the helmet, in the opposite direction.\n    // Without textures, metallic is 0 and roughness is 0.5.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }).orbitAroundY(Math.PI),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.6, 0.1, 0.3, 1] }),\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [box, suzanne, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    // The shadow camera depends on the initial position of the main camera.\n    context.camera.fitSpaceAtTarget(4, 4)\n    const shadow = new TgdPainterShadow(context, {\n        camera: makeShadowCamera(context),\n        meshes: [box, suzanne, helmet],\n    })\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = shadow.camera.transfo.axisZ\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })\n    // Nothing is painted (alpha = 0) where there is no mesh.\n    const state = new TgdPainterState(context, {\n        depth: \"off\",\n        cull: \"off\",\n        blend: \"alpha\",\n    })\n    const base: SceneBase = { deferred, skybox, light, shadow, state }\n    refScene.current = { ...base, ...rebuildFilters(context, base, DEFAULT_SETTINGS) }\n    context.add(\n        shadow,\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        state,\n        (_time: number, delta: number) => {\n            box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094)\n            const speed = -0.06247 * delta\n            suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84)\n        },\n    )\n    context.play()",
    "rebuildFilters()": "/**\n * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`\n * can only be set in the constructor.\n * The previous ones, if any, are deleted.\n */\nfunction rebuildFilters(\n    context: TgdContext,\n    scene: SceneBase & Partial<SceneFilters>,\n    settings: Settings,\n): SceneFilters {\n    const { deferred, skybox, light, shadow, state } = scene\n    // The painters do not own the filters, so we delete both.\n    state.removeAll()\n    for (const filter of Object.values(scene.filters ?? {})) filter.delete()\n    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }\n    const cavity = settings.cavity ? { ridge: settings.ridge, valley: settings.valley, outline: settings.outline } : undefined\n    const ambientOcclusion = settings.ambientOcclusion\n        ? {\n              intensity: settings.ambientOcclusionIntensity,\n              blur: settings.ambientOcclusionBlur,\n              combineWithLight: settings.ambientOcclusionCombineWithLight,\n          }\n        : undefined\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: skybox,\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: \"#7af\",\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    applyMode(painters, settings.mode)\n    state.add(painters.skybox, painters.color)\n    return { filters, painters }\n}",
    "makePainterFilter()": "/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(context: TgdContext, deferred: TgdPainterDeferredShading, filter: TgdFilterDeferredShading) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}",
    "makeShadowCamera()": "/**\n * The light is at the top left of the initial camera,\n * at a distance of 8 from it, and looks at the camera's target.\n */\nfunction makeShadowCamera(context: TgdContext) {\n    const { transfo } = context.camera\n    const target = new TgdVec3(transfo.position)\n    const offset = new TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8)\n    const position = new TgdVec3(transfo.actualPosition).add(offset)\n    const distance = new TgdVec3(position).subtract(target).size\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position }),\n        // Half of the height of the visible area.\n        spaceHeight: 3,\n        near: Math.max(0.1, distance - 5),\n        far: distance + 5,\n    })\n    light.transfo.lookAt(target)\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    return light\n}",
    "applyMode()": "function applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}",
    "applyStrength()": "function applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}",
    "applyExponent()": "function applyExponent(filters: Record<Mode, TgdFilterDeferredShading>, exponent: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxExponent = exponent\n    }\n}",
    "applyCavity()": "function applyCavity(filters: Record<Mode, TgdFilterDeferredShading>, ridge: number, valley: number) {\n    for (const filter of Object.values(filters)) {\n        filter.cavityRidge = ridge\n        filter.cavityValley = valley\n    }\n}",
    "applyAmbientOcclusionIntensity()": "function applyAmbientOcclusionIntensity(filters: Record<Mode, TgdFilterDeferredShading>, intensity: number) {\n    for (const filter of Object.values(filters)) {\n        filter.ambientOcclusionIntensity = intensity\n    }\n}"
};
var FULL = "import {\n    TgdCameraOrthographic,\n    type TgdContext,\n    TgdFilterDeferredShading,\n    TgdGeometryBox,\n    TgdLight,\n    TgdMaterialFlat,\n    TgdMaterialFlatTexture,\n    type TgdMeshWithTextures,\n    TgdPainterDeferredShading,\n    TgdPainterFilter,\n    TgdPainterShadow,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdTransfo,\n    TgdVec3,\n    tgdCanvasCreateCreateGradientvertical,\n    tgdCanvasCreateGradientHorizontal,\n} from \"@tolokoban/tgd\"\nimport { ViewInputNumber, ViewOptions, ViewPanel, ViewSwitch } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport HelmetURL from \"@/assets/mesh/helmet.glb\"\nimport SuzanneURL from \"@/assets/mesh/suzanne-low.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\ntype Mode = \"skybox\" | \"color\"\n\n/** What the user can change in the panel. */\ninterface Settings {\n    mode: Mode\n    strength: number\n    exponent: number\n    shading: boolean\n    cavity: boolean\n    ridge: number\n    valley: number\n    outline: boolean\n    ambientOcclusion: boolean\n    ambientOcclusionIntensity: number\n    ambientOcclusionBlur: boolean\n    ambientOcclusionCombineWithLight: boolean\n}\n\nconst DEFAULT_SETTINGS: Settings = {\n    mode: \"skybox\",\n    strength: 1,\n    exponent: 2.2,\n    shading: true,\n    cavity: true,\n    ridge: 1,\n    valley: 1,\n    outline: true,\n    ambientOcclusion: true,\n    ambientOcclusionIntensity: 1,\n    ambientOcclusionBlur: true,\n    ambientOcclusionCombineWithLight: false,\n}\n\n/**\n * Everything the filters need, so we can rebuild them when `shading`, `cavity`\n * or `ambientOcclusion` changes.\n */\ninterface SceneBase {\n    deferred: TgdPainterDeferredShading\n    skybox: TgdTextureCube\n    light: TgdLight\n    shadow: TgdPainterShadow\n    /** Parent of the filter painters. */\n    state: TgdPainterState\n}\n\ninterface SceneFilters {\n    filters: Record<Mode, TgdFilterDeferredShading>\n    painters: Record<Mode, TgdPainterFilter>\n}\n\ntype Scene = SceneBase & SceneFilters\n\nfunction init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {\n    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // Orbits on the other side of the helmet, in the opposite direction.\n    // Without textures, metallic is 0 and roughness is 0.5.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }).orbitAroundY(Math.PI),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.6, 0.1, 0.3, 1] }),\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShading(context, { meshes: [box, suzanne, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    // The shadow camera depends on the initial position of the main camera.\n    context.camera.fitSpaceAtTarget(4, 4)\n    const shadow = new TgdPainterShadow(context, {\n        camera: makeShadowCamera(context),\n        meshes: [box, suzanne, helmet],\n    })\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = shadow.camera.transfo.axisZ\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })\n    // Nothing is painted (alpha = 0) where there is no mesh.\n    const state = new TgdPainterState(context, {\n        depth: \"off\",\n        cull: \"off\",\n        blend: \"alpha\",\n    })\n    const base: SceneBase = { deferred, skybox, light, shadow, state }\n    refScene.current = { ...base, ...rebuildFilters(context, base, DEFAULT_SETTINGS) }\n    context.add(\n        shadow,\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        state,\n        (_time: number, delta: number) => {\n            box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094)\n            const speed = -0.06247 * delta\n            suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refScene = React.useRef<Scene | null>(null)\n    const [mode, setMode] = React.useState<Mode>(DEFAULT_SETTINGS.mode)\n    const [strength, setStrength] = React.useState(DEFAULT_SETTINGS.strength)\n    const [exponent, setExponent] = React.useState(DEFAULT_SETTINGS.exponent)\n    const [shading, setShading] = React.useState(DEFAULT_SETTINGS.shading)\n    const [cavity, setCavity] = React.useState(DEFAULT_SETTINGS.cavity)\n    const [ridge, setRidge] = React.useState(DEFAULT_SETTINGS.ridge)\n    const [valley, setValley] = React.useState(DEFAULT_SETTINGS.valley)\n    const [outline, setOutline] = React.useState(DEFAULT_SETTINGS.outline)\n    const [ambientOcclusion, setAmbientOcclusion] = React.useState(DEFAULT_SETTINGS.ambientOcclusion)\n    const [ambientOcclusionIntensity, setAmbientOcclusionIntensity] = React.useState(\n        DEFAULT_SETTINGS.ambientOcclusionIntensity,\n    )\n    const [ambientOcclusionBlur, setAmbientOcclusionBlur] = React.useState(DEFAULT_SETTINGS.ambientOcclusionBlur)\n    const [ambientOcclusionCombineWithLight, setAmbientOcclusionCombineWithLight] = React.useState(\n        DEFAULT_SETTINGS.ambientOcclusionCombineWithLight,\n    )\n    const settings: Settings = {\n        mode,\n        strength,\n        exponent,\n        shading,\n        cavity,\n        ridge,\n        valley,\n        outline,\n        ambientOcclusion,\n        ambientOcclusionIntensity,\n        ambientOcclusionBlur,\n        ambientOcclusionCombineWithLight,\n    }\n    /** Some options can only be set in the constructor of the filters. */\n    const rebuild = (changes: Partial<Settings>) => {\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        Object.assign(scene, rebuildFilters(context, scene, { ...settings, ...changes }))\n        context.paint()\n    }\n    const handleModeChange = (value: Mode) => {\n        setMode(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyMode(scene.painters, value)\n        context.paint()\n    }\n    const handleStrengthChange = (value: number) => {\n        setStrength(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyStrength(scene.filters, value)\n        context.paint()\n    }\n    const handleExponentChange = (value: number) => {\n        setExponent(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyExponent(scene.filters, value)\n        context.paint()\n    }\n    const handleCavityChange = (value: boolean) => {\n        setCavity(value)\n        rebuild({ cavity: value })\n    }\n    const handleOutlineChange = (value: boolean) => {\n        setOutline(value)\n        rebuild({ outline: value })\n    }\n    const handleShadingChange = (value: boolean) => {\n        setShading(value)\n        rebuild({ shading: value })\n    }\n    const handleAmbientOcclusionChange = (value: boolean) => {\n        setAmbientOcclusion(value)\n        rebuild({ ambientOcclusion: value })\n    }\n    const handleAmbientOcclusionBlurChange = (value: boolean) => {\n        setAmbientOcclusionBlur(value)\n        rebuild({ ambientOcclusionBlur: value })\n    }\n    const handleAmbientOcclusionCombineWithLightChange = (value: boolean) => {\n        setAmbientOcclusionCombineWithLight(value)\n        rebuild({ ambientOcclusionCombineWithLight: value })\n    }\n    const handleAmbientOcclusionIntensityChange = (value: number) => {\n        setAmbientOcclusionIntensity(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyAmbientOcclusionIntensity(scene.filters, value)\n        context.paint()\n    }\n    const handleRidgeChange = (value: number) => {\n        setRidge(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyCavity(scene.filters, value, valley)\n        context.paint()\n    }\n    const handleValleyChange = (value: number) => {\n        setValley(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyCavity(scene.filters, ridge, value)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refScene)\n            }}\n            assets={{\n                glb: { helmet: HelmetURL, suzanne: SuzanneURL },\n                image: {\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" flexDirection=\"column\" gap=\"S\">\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewOptions value={mode} onChange={handleModeChange}>\n                        <div key=\"skybox\">skybox texture</div>\n                        <div key=\"color\">skybox color</div>\n                    </ViewOptions>\n                    <ViewInputNumber label=\"skyboxStrength\" value={strength} onChange={handleStrengthChange} />\n                    <ViewInputNumber label=\"skyboxExponent\" value={exponent} onChange={handleExponentChange} />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewSwitch value={shading} onChange={handleShadingChange}>\n                        Shading\n                    </ViewSwitch>\n                    <ViewSwitch value={cavity} onChange={handleCavityChange}>\n                        Cavity\n                    </ViewSwitch>\n                    <ViewInputNumber label=\"Ridge\" value={ridge} onChange={handleRidgeChange} enabled={cavity} />\n                    <ViewInputNumber label=\"Valley\" value={valley} onChange={handleValleyChange} enabled={cavity} />\n                    <ViewSwitch value={outline} onChange={handleOutlineChange} enabled={cavity}>\n                        Outline\n                    </ViewSwitch>\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewSwitch value={ambientOcclusion} onChange={handleAmbientOcclusionChange}>\n                        Ambient Occlusion\n                    </ViewSwitch>\n                    <ViewInputNumber\n                        label=\"Intensity\"\n                        value={ambientOcclusionIntensity}\n                        onChange={handleAmbientOcclusionIntensityChange}\n                        enabled={ambientOcclusion}\n                    />\n                    <ViewSwitch\n                        value={ambientOcclusionBlur}\n                        onChange={handleAmbientOcclusionBlurChange}\n                        enabled={ambientOcclusion}>\n                        Blur\n                    </ViewSwitch>\n                    <ViewSwitch\n                        value={ambientOcclusionCombineWithLight}\n                        onChange={handleAmbientOcclusionCombineWithLightChange}\n                        enabled={ambientOcclusion && shading}>\n                        Combine with light\n                    </ViewSwitch>\n                </ViewPanel>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`\n * can only be set in the constructor.\n * The previous ones, if any, are deleted.\n */\nfunction rebuildFilters(\n    context: TgdContext,\n    scene: SceneBase & Partial<SceneFilters>,\n    settings: Settings,\n): SceneFilters {\n    const { deferred, skybox, light, shadow, state } = scene\n    // The painters do not own the filters, so we delete both.\n    state.removeAll()\n    for (const filter of Object.values(scene.filters ?? {})) filter.delete()\n    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }\n    const cavity = settings.cavity ? { ridge: settings.ridge, valley: settings.valley, outline: settings.outline } : undefined\n    const ambientOcclusion = settings.ambientOcclusion\n        ? {\n              intensity: settings.ambientOcclusionIntensity,\n              blur: settings.ambientOcclusionBlur,\n              combineWithLight: settings.ambientOcclusionCombineWithLight,\n          }\n        : undefined\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: skybox,\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: \"#7af\",\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    applyMode(painters, settings.mode)\n    state.add(painters.skybox, painters.color)\n    return { filters, painters }\n}\n\n/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(context: TgdContext, deferred: TgdPainterDeferredShading, filter: TgdFilterDeferredShading) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}\n\n/**\n * The light is at the top left of the initial camera,\n * at a distance of 8 from it, and looks at the camera's target.\n */\nfunction makeShadowCamera(context: TgdContext) {\n    const { transfo } = context.camera\n    const target = new TgdVec3(transfo.position)\n    const offset = new TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8)\n    const position = new TgdVec3(transfo.actualPosition).add(offset)\n    const distance = new TgdVec3(position).subtract(target).size\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position }),\n        // Half of the height of the visible area.\n        spaceHeight: 3,\n        near: Math.max(0.1, distance - 5),\n        far: distance + 5,\n    })\n    light.transfo.lookAt(target)\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    return light\n}\n\nfunction applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}\n\nfunction applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}\n\nfunction applyExponent(filters: Record<Mode, TgdFilterDeferredShading>, exponent: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxExponent = exponent\n    }\n}\n\nfunction applyCavity(filters: Record<Mode, TgdFilterDeferredShading>, ridge: number, valley: number) {\n    for (const filter of Object.values(filters)) {\n        filter.cavityRidge = ridge\n        filter.cavityValley = valley\n    }\n}\n\nfunction applyAmbientOcclusionIntensity(filters: Record<Mode, TgdFilterDeferredShading>, intensity: number) {\n    for (const filter of Object.values(filters)) {\n        filter.ambientOcclusionIntensity = intensity\n    }\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_lighting_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
53511(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
/* import */ var _assets_mesh_helmet_glb__rspack_import_5 = __webpack_require__(74167);
/* import */ var _assets_mesh_suzanne_low_glb__rspack_import_6 = __webpack_require__(98771);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_7 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_8 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9 = __webpack_require__(85720);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_10 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_11 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12 = __webpack_require__(30892);
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













var DEFAULT_SETTINGS = {
    mode: "skybox",
    strength: 1,
    exponent: 2.2,
    shading: true,
    cavity: true,
    ridge: 1,
    valley: 1,
    outline: true,
    ambientOcclusion: true,
    ambientOcclusionIntensity: 1,
    ambientOcclusionBlur: true,
    ambientOcclusionCombineWithLight: false
};
function init(context, assets, refScene) {
    var _ref, _ref1, _ref2, _ref3;
    var _gltfMaterial_pbrMetallicRoughness_baseColorTexture, _gltfMaterial_pbrMetallicRoughness, _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture, _gltfMaterial_pbrMetallicRoughness1, _gltfMaterial_occlusionTexture, _gltfMaterial_normalTexture, _gltfMaterial_emissiveTexture;
    // #begin Initializing WebGL
    // Metallic grows from left to right, and roughness from top to bottom.
    var box = {
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryBox(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 2
        }),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                1,
                0.7,
                0.2,
                1
            ]
        }),
        textures: {
            metallic: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateGradientHorizontal)(64, [
                    "#000",
                    "#fff"
                ])
            }),
            roughness: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
                load: (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateCreateGradientvertical)(64, [
                    "#000",
                    "#fff"
                ])
            })
        }
    };
    // Orbits on the other side of the helmet, in the opposite direction.
    // Without textures, metallic is 0 and roughness is 0.5.
    var suzanne = {
        geometry: assets.glb.suzanne.makeGeometry(),
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            position: [
                0,
                0,
                0
            ],
            distance: 2
        }).orbitAroundY(Math.PI),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
            color: [
                0.6,
                0.1,
                0.3,
                1
            ]
        })
    };
    // glTF stores metallic in BLUE and roughness in GREEN.
    var _assets_glb = assets.glb, asset = _assets_glb.helmet;
    var gltfMaterial = asset.getMaterial(0);
    var indexBaseColor = (_ref = (_gltfMaterial_pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_baseColorTexture = _gltfMaterial_pbrMetallicRoughness.baseColorTexture) === null || _gltfMaterial_pbrMetallicRoughness_baseColorTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_baseColorTexture.index) !== null && _ref !== void 0 ? _ref : 0;
    var indexMetallicRoughness = (_ref1 = (_gltfMaterial_pbrMetallicRoughness1 = gltfMaterial.pbrMetallicRoughness) === null || _gltfMaterial_pbrMetallicRoughness1 === void 0 ? void 0 : (_gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture = _gltfMaterial_pbrMetallicRoughness1.metallicRoughnessTexture) === null || _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture === void 0 ? void 0 : _gltfMaterial_pbrMetallicRoughness_metallicRoughnessTexture.index) !== null && _ref1 !== void 0 ? _ref1 : 0;
    var indexOcclusion = (_ref2 = (_gltfMaterial_occlusionTexture = gltfMaterial.occlusionTexture) === null || _gltfMaterial_occlusionTexture === void 0 ? void 0 : _gltfMaterial_occlusionTexture.index) !== null && _ref2 !== void 0 ? _ref2 : 0;
    var indexNormals = (_ref3 = (_gltfMaterial_normalTexture = gltfMaterial.normalTexture) === null || _gltfMaterial_normalTexture === void 0 ? void 0 : _gltfMaterial_normalTexture.index) !== null && _ref3 !== void 0 ? _ref3 : 0;
    // The emission texture is optional in glTF.
    var indexEmission = (_gltfMaterial_emissiveTexture = gltfMaterial.emissiveTexture) === null || _gltfMaterial_emissiveTexture === void 0 ? void 0 : _gltfMaterial_emissiveTexture.index;
    var textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness);
    var helmet = {
        geometry: asset.makeGeometry(),
        transfo: asset.createTransfoFromNode(asset.getNode(0)),
        visible: true,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlatTexture({
            texture: asset.createTexture2D(context, indexBaseColor)
        }),
        textures: {
            normals: asset.createTexture2D(context, indexNormals),
            metallic: textureMetallicRoughness,
            metallicChannel: "b",
            roughness: textureMetallicRoughness,
            roughnessChannel: "g",
            bakedAO: asset.createTexture2D(context, indexOcclusion),
            bakedAOChannel: "r",
            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission)
        }
    };
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShading(context, {
        meshes: [
            box,
            suzanne,
            helmet
        ]
    });
    var skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ
    });
    // The shadow camera depends on the initial position of the main camera.
    context.camera.fitSpaceAtTarget(4, 4);
    var shadow = new _tolokoban_tgd__rspack_import_1.TgdPainterShadow(context, {
        camera: makeShadowCamera(context),
        meshes: [
            box,
            suzanne,
            helmet
        ]
    });
    // The light camera looks toward its -Z axis.
    var _shadow_camera_transfo_axisZ = _sliced_to_array(shadow.camera.transfo.axisZ, 3), lx = _shadow_camera_transfo_axisZ[0], ly = _shadow_camera_transfo_axisZ[1], lz = _shadow_camera_transfo_axisZ[2];
    var light = new _tolokoban_tgd__rspack_import_1.TgdLight({
        color: [
            1,
            0.9,
            0.8,
            1
        ],
        direction: [
            -lx,
            -ly,
            -lz
        ]
    });
    // Nothing is painted (alpha = 0) where there is no mesh.
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "off",
        cull: "off",
        blend: "alpha"
    });
    var base = {
        deferred: deferred,
        skybox: skybox,
        light: light,
        shadow: shadow,
        state: state
    };
    refScene.current = _object_spread({}, base, rebuildFilters(context, base, DEFAULT_SETTINGS));
    context.add(shadow, deferred, new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        texture: skybox
    }), state, function(_time, delta) {
        box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094);
        var speed = -0.06247 * delta;
        suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84);
    });
    context.play();
// #end
}
function Demo() {
    var refContext = react__rspack_import_3_default().useRef(null);
    var refScene = react__rspack_import_3_default().useRef(null);
    var _React_useState = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.mode), 2), mode = _React_useState[0], setMode = _React_useState[1];
    var _React_useState1 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.strength), 2), strength = _React_useState1[0], setStrength = _React_useState1[1];
    var _React_useState2 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.exponent), 2), exponent = _React_useState2[0], setExponent = _React_useState2[1];
    var _React_useState3 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.shading), 2), shading = _React_useState3[0], setShading = _React_useState3[1];
    var _React_useState4 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.cavity), 2), cavity = _React_useState4[0], setCavity = _React_useState4[1];
    var _React_useState5 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ridge), 2), ridge = _React_useState5[0], setRidge = _React_useState5[1];
    var _React_useState6 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.valley), 2), valley = _React_useState6[0], setValley = _React_useState6[1];
    var _React_useState7 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.outline), 2), outline = _React_useState7[0], setOutline = _React_useState7[1];
    var _React_useState8 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusion), 2), ambientOcclusion = _React_useState8[0], setAmbientOcclusion = _React_useState8[1];
    var _React_useState9 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionIntensity), 2), ambientOcclusionIntensity = _React_useState9[0], setAmbientOcclusionIntensity = _React_useState9[1];
    var _React_useState10 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionBlur), 2), ambientOcclusionBlur = _React_useState10[0], setAmbientOcclusionBlur = _React_useState10[1];
    var _React_useState11 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionCombineWithLight), 2), ambientOcclusionCombineWithLight = _React_useState11[0], setAmbientOcclusionCombineWithLight = _React_useState11[1];
    var settings = {
        mode: mode,
        strength: strength,
        exponent: exponent,
        shading: shading,
        cavity: cavity,
        ridge: ridge,
        valley: valley,
        outline: outline,
        ambientOcclusion: ambientOcclusion,
        ambientOcclusionIntensity: ambientOcclusionIntensity,
        ambientOcclusionBlur: ambientOcclusionBlur,
        ambientOcclusionCombineWithLight: ambientOcclusionCombineWithLight
    };
    /** Some options can only be set in the constructor of the filters. */ var rebuild = function rebuild(changes) {
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        Object.assign(scene, rebuildFilters(context, scene, _object_spread({}, settings, changes)));
        context.paint();
    };
    var handleModeChange = function handleModeChange(value) {
        setMode(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyMode(scene.painters, value);
        context.paint();
    };
    var handleStrengthChange = function handleStrengthChange(value) {
        setStrength(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyStrength(scene.filters, value);
        context.paint();
    };
    var handleExponentChange = function handleExponentChange(value) {
        setExponent(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyExponent(scene.filters, value);
        context.paint();
    };
    var handleCavityChange = function handleCavityChange(value) {
        setCavity(value);
        rebuild({
            cavity: value
        });
    };
    var handleOutlineChange = function handleOutlineChange(value) {
        setOutline(value);
        rebuild({
            outline: value
        });
    };
    var handleShadingChange = function handleShadingChange(value) {
        setShading(value);
        rebuild({
            shading: value
        });
    };
    var handleAmbientOcclusionChange = function handleAmbientOcclusionChange(value) {
        setAmbientOcclusion(value);
        rebuild({
            ambientOcclusion: value
        });
    };
    var handleAmbientOcclusionBlurChange = function handleAmbientOcclusionBlurChange(value) {
        setAmbientOcclusionBlur(value);
        rebuild({
            ambientOcclusionBlur: value
        });
    };
    var handleAmbientOcclusionCombineWithLightChange = function handleAmbientOcclusionCombineWithLightChange(value) {
        setAmbientOcclusionCombineWithLight(value);
        rebuild({
            ambientOcclusionCombineWithLight: value
        });
    };
    var handleAmbientOcclusionIntensityChange = function handleAmbientOcclusionIntensityChange(value) {
        setAmbientOcclusionIntensity(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyAmbientOcclusionIntensity(scene.filters, value);
        context.paint();
    };
    var handleRidgeChange = function handleRidgeChange(value) {
        setRidge(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyCavity(scene.filters, value, valley);
        context.paint();
    };
    var handleValleyChange = function handleValleyChange(value) {
        setValley(value);
        var context = refContext.current;
        var scene = refScene.current;
        if (!context || !scene) return;
        applyCavity(scene.filters, ridge, value);
        context.paint();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_4["default"], {
        onReady: function onReady(context, assets) {
            refContext.current = context;
            init(context, assets, refScene);
        },
        assets: {
            glb: {
                helmet: _assets_mesh_helmet_glb__rspack_import_5,
                suzanne: _assets_mesh_suzanne_low_glb__rspack_import_6
            },
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_7,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_8,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_9,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_10,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_11,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_12
            }
        },
        controller: {
            inertiaOrbit: 1000
        },
        gizmo: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
            display: "flex",
            flexDirection: "column",
            gap: "S",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewOptions, {
                            value: mode,
                            onChange: handleModeChange,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "skybox texture"
                                }, "skybox", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                                    lineNumber: 323,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "skybox color"
                                }, "color", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                                    lineNumber: 324,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "skyboxStrength",
                            value: strength,
                            onChange: handleStrengthChange
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 326,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "skyboxExponent",
                            value: exponent,
                            onChange: handleExponentChange
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 327,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 321,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: shading,
                            onChange: handleShadingChange,
                            children: "Shading"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 330,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: cavity,
                            onChange: handleCavityChange,
                            children: "Cavity"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 333,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Ridge",
                            value: ridge,
                            onChange: handleRidgeChange,
                            enabled: cavity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 336,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Valley",
                            value: valley,
                            onChange: handleValleyChange,
                            enabled: cavity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 337,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: outline,
                            onChange: handleOutlineChange,
                            enabled: cavity,
                            children: "Outline"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 338,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 329,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewPanel, {
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "S",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: ambientOcclusion,
                            onChange: handleAmbientOcclusionChange,
                            children: "Ambient Occlusion"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 343,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Intensity",
                            value: ambientOcclusionIntensity,
                            onChange: handleAmbientOcclusionIntensityChange,
                            enabled: ambientOcclusion
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 346,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: ambientOcclusionBlur,
                            onChange: handleAmbientOcclusionBlurChange,
                            enabled: ambientOcclusion,
                            children: "Blur"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 352,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: ambientOcclusionCombineWithLight,
                            onChange: handleAmbientOcclusionCombineWithLightChange,
                            enabled: ambientOcclusion && shading,
                            children: "Combine with light"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 342,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
            lineNumber: 320,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
        lineNumber: 302,
        columnNumber: 9
    }, this);
}
// #begin rebuildFilters()
/**
 * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`
 * can only be set in the constructor.
 * The previous ones, if any, are deleted.
 */ function rebuildFilters(context, scene, settings) {
    var _scene_filters;
    var deferred = scene.deferred, skybox = scene.skybox, light = scene.light, shadow = scene.shadow, state = scene.state;
    // The painters do not own the filters, so we delete both.
    state.removeAll();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values((_scene_filters = scene.filters) !== null && _scene_filters !== void 0 ? _scene_filters : {})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.delete();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var shadowOptions = {
        camera: shadow.camera,
        texture: shadow.texture
    };
    var cavity = settings.cavity ? {
        ridge: settings.ridge,
        valley: settings.valley,
        outline: settings.outline
    } : undefined;
    var ambientOcclusion = settings.ambientOcclusion ? {
        intensity: settings.ambientOcclusionIntensity,
        blur: settings.ambientOcclusionBlur,
        combineWithLight: settings.ambientOcclusionCombineWithLight
    } : undefined;
    var filters = {
        skybox: new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
            textureNormals: deferred.textureNormals,
            textureDepth: deferred.textureDepth,
            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
            shading: settings.shading,
            skyboxTexture: skybox,
            skyboxStrength: settings.strength,
            skyboxExponent: settings.exponent,
            light: light,
            shadow: shadowOptions,
            cavity: cavity,
            ambientOcclusion: ambientOcclusion
        }),
        // A 1×1 cube texture is created from this color.
        color: new _tolokoban_tgd__rspack_import_1.TgdFilterDeferredShading(context, {
            textureNormals: deferred.textureNormals,
            textureDepth: deferred.textureDepth,
            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,
            shading: settings.shading,
            skyboxTexture: "#7af",
            skyboxStrength: settings.strength,
            skyboxExponent: settings.exponent,
            light: light,
            shadow: shadowOptions,
            cavity: cavity,
            ambientOcclusion: ambientOcclusion
        })
    };
    var painters = {
        skybox: makePainterFilter(context, deferred, filters.skybox),
        color: makePainterFilter(context, deferred, filters.color)
    };
    applyMode(painters, settings.mode);
    state.add(painters.skybox, painters.color);
    return {
        filters: filters,
        painters: painters
    };
}
// #end
// #begin makePainterFilter()
/**
 * The albedo is the input texture of the filter.
 */ function makePainterFilter(context, deferred, filter) {
    return new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: deferred.textureAlbedo,
        filters: [
            filter
        ],
        flipY: true
    });
}
// #end
// #begin makeShadowCamera()
/**
 * The light is at the top left of the initial camera,
 * at a distance of 8 from it, and looks at the camera's target.
 */ function makeShadowCamera(context) {
    var transfo = context.camera.transfo;
    var target = new _tolokoban_tgd__rspack_import_1.TgdVec3(transfo.position);
    var offset = new _tolokoban_tgd__rspack_import_1.TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8);
    var position = new _tolokoban_tgd__rspack_import_1.TgdVec3(transfo.actualPosition).add(offset);
    var distance = new _tolokoban_tgd__rspack_import_1.TgdVec3(position).subtract(target).size;
    var light = new _tolokoban_tgd__rspack_import_1.TgdCameraOrthographic({
        transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
            distance: 0,
            position: position
        }),
        // Half of the height of the visible area.
        spaceHeight: 3,
        near: Math.max(0.1, distance - 5),
        far: distance + 5
    });
    light.transfo.lookAt(target);
    // Square shadow texture.
    light.screenWidth = 1;
    light.screenHeight = 1;
    return light;
}
// #end
// #begin applyMode()
function applyMode(painters, mode) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.keys(painters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            painters[key].active = key === mode;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// #end
// #begin applyStrength()
function applyStrength(filters, strength) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(filters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.skyboxStrength = strength;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// #end
// #begin applyExponent()
function applyExponent(filters, exponent) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(filters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.skyboxExponent = exponent;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// #end
// #begin applyCavity()
function applyCavity(filters, ridge, valley) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(filters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.cavityRidge = ridge;
            filter.cavityValley = valley;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
// #end
// #begin applyAmbientOcclusionIntensity()
function applyAmbientOcclusionIntensity(filters, intensity) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(filters)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var filter = _step.value;
            filter.ambientOcclusionIntensity = intensity;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
} // #end


},
2186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _lighting__rspack_import_1 = __webpack_require__(39232);
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
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdFilterDeferredShading.html",
                    children: "TgdFilterDeferredShading"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Physically based lighting computed in screen space from the textures of a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/deferred-shading",
                        children: "TgdPainterDeferredShading"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    ".\nThe main texture of the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterFilter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 7,
                        columnNumber: 25
                    }, this),
                    " is ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureAlbedo"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 7,
                        columnNumber: 47
                    }, this),
                    ", and the filter reads the normals, the depth,\nthe metallic, the roughness, the specular and the baked ambient occlusion from the other textures."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_lighting__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The light comes from two sources:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "light"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this),
                            ": a directional ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdLight"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 26
                            }, this),
                            ". Its ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "direction"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 42
                            }, this),
                            " is in world space, and the alpha of its ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "color"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 14,
                                columnNumber: 94
                            }, this),
                            " is the intensity."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxTexture"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": a ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "TgdTextureCube"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 15,
                                columnNumber: 22
                            }, this),
                            " used for the reflections on metallic surfaces (blurrier with a higher roughness)\nand for the global illumination. If you give a color instead, a cube texture of 1×1 pixels is created with this color.\n",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxTransfo"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            " orients the skybox.\nThe light coming from the skybox is ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxStrength * pow(skyboxTexture.rgb, skyboxExponent)"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 18,
                                columnNumber: 39
                            }, this),
                            "\n(defaults: ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxStrength = 1"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 19,
                                columnNumber: 14
                            }, this),
                            " and ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "skyboxExponent = 2.2"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                                lineNumber: 19,
                                columnNumber: 39
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "If ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavity"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 21,
                        columnNumber: 4
                    }, this),
                    " is defined, the ridges are lightened and the valleys darkened, like the screen space cavity\nof Blender's viewport in \"Solid\" shading. The curvature is computed from the normals of the neighbour pixels.\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavityRidge"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 23,
                        columnNumber: 1
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavityValley"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 23,
                        columnNumber: 19
                    }, this),
                    " (default: 1) set the strength of each side and can be changed at any time.\nSet them to 0 to disable the effect.\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "outline"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 25,
                        columnNumber: 1
                    }, this),
                    " (default: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "true"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 25,
                        columnNumber: 21
                    }, this),
                    ") keeps the dark contour that the curvature finds on each silhouette,\nin front of other objects and in front of nothing (where nothing has been painted, the filter outputs a transparent black\nthat darkens what is behind it). Set it to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "false"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 27,
                        columnNumber: 44
                    }, this),
                    " to remove this contour: the curvature is then ignored where the depth\njumps between two neighbour pixels."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Set ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "shading: false"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 30,
                        columnNumber: 5
                    }, this),
                    " to skip the lighting: the albedo is used as is, but ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavity"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 30,
                        columnNumber: 74
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "shadow"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 30,
                        columnNumber: 87
                    }, this),
                    " are still applied."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 30,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The three textures are optional. A missing one is replaced by a constant: a normal facing the camera\n(every pixel is considered painted), a depth of 0.5, and the default material\n(metallic 0, roughness 0.5, specular 0.5, baked AO 1).\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavity"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 35,
                        columnNumber: 1
                    }, this),
                    " needs ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureNormals"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 35,
                        columnNumber: 16
                    }, this),
                    ": without it, the cavity is disabled and an error is printed in the console."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 32,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The specular parameter sets the reflectance of non metallic surfaces: 0.5 gives the usual 4%."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 37,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Where nothing has been painted, the filter outputs a transparent black. The demo uses an alpha blending\nto see the skybox behind the meshes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 39,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "On the box, metallic grows from left to right, and roughness from top to bottom."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 42,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 44,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/deferred-shading",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                    lineNumber: 46,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 46,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9kZWZlcnJlZC1zaGFkaW5nX2xpZ2h0aW5nX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Dby1iYjBhNjMuMDU5M2RiZDhkMTQwMGZlOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2RlZmVycmVkLXNoYWRpbmcvbGlnaHRpbmcvX2xpZ2h0aW5nL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL19saWdodGluZy9saWdodGluZy5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9saWdodGluZy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLjcsIDAuMiwgMV0gfSksXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgLy8gT3JiaXRzIG9uIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBoZWxtZXQsIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXFxuICAgIC8vIFdpdGhvdXQgdGV4dHVyZXMsIG1ldGFsbGljIGlzIDAgYW5kIHJvdWdobmVzcyBpcyAwLjUuXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KS5vcmJpdEFyb3VuZFkoTWF0aC5QSSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuNiwgMC4xLCAwLjMsIDFdIH0pLFxcbiAgICB9XFxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXFxuICAgIGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApXFxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE9jY2x1c2lvbiA9IGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIC8vIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIGlzIG9wdGlvbmFsIGluIGdsVEYuXFxuICAgIGNvbnN0IGluZGV4RW1pc3Npb24gPSBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleFxcbiAgICBjb25zdCB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MgPSBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhNZXRhbGxpY1JvdWdobmVzcylcXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4QmFzZUNvbG9yKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBub3JtYWxzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhOb3JtYWxzKSxcXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXFxcImJcXFwiLFxcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFxcXCJnXFxcIixcXG4gICAgICAgICAgICBiYWtlZEFPOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhPY2NsdXNpb24pLFxcbiAgICAgICAgICAgIGJha2VkQU9DaGFubmVsOiBcXFwiclxcXCIsXFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7IG1lc2hlczogW2JveCwgc3V6YW5uZSwgaGVsbWV0XSB9KVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgc2hhZG93IGNhbWVyYSBkZXBlbmRzIG9uIHRoZSBpbml0aWFsIHBvc2l0aW9uIG9mIHRoZSBtYWluIGNhbWVyYS5cXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg0LCA0KVxcbiAgICBjb25zdCBzaGFkb3cgPSBuZXcgVGdkUGFpbnRlclNoYWRvdyhjb250ZXh0LCB7XFxuICAgICAgICBjYW1lcmE6IG1ha2VTaGFkb3dDYW1lcmEoY29udGV4dCksXFxuICAgICAgICBtZXNoZXM6IFtib3gsIHN1emFubmUsIGhlbG1ldF0sXFxuICAgIH0pXFxuICAgIC8vIFRoZSBsaWdodCBjYW1lcmEgbG9va3MgdG93YXJkIGl0cyAtWiBheGlzLlxcbiAgICBjb25zdCBbbHgsIGx5LCBsel0gPSBzaGFkb3cuY2FtZXJhLnRyYW5zZm8uYXhpc1pcXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkTGlnaHQoeyBjb2xvcjogWzEsIDAuOSwgMC44LCAxXSwgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcXG4gICAgLy8gTm90aGluZyBpcyBwYWludGVkIChhbHBoYSA9IDApIHdoZXJlIHRoZXJlIGlzIG5vIG1lc2guXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXFxcIm9mZlxcXCIsXFxuICAgICAgICBjdWxsOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIGJsZW5kOiBcXFwiYWxwaGFcXFwiLFxcbiAgICB9KVxcbiAgICBjb25zdCBiYXNlOiBTY2VuZUJhc2UgPSB7IGRlZmVycmVkLCBza3lib3gsIGxpZ2h0LCBzaGFkb3csIHN0YXRlIH1cXG4gICAgcmVmU2NlbmUuY3VycmVudCA9IHsgLi4uYmFzZSwgLi4ucmVidWlsZEZpbHRlcnMoY29udGV4dCwgYmFzZSwgREVGQVVMVF9TRVRUSU5HUykgfVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIHNoYWRvdyxcXG4gICAgICAgIGRlZmVycmVkLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwgeyB0ZXh0dXJlOiBza3lib3ggfSksXFxuICAgICAgICBzdGF0ZSxcXG4gICAgICAgIChfdGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4wNzEpLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuMDk0KVxcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gLTAuMDYyNDcgKiBkZWx0YVxcbiAgICAgICAgICAgIHN1emFubmUudHJhbnNmby5vcmJpdEFyb3VuZFgoc3BlZWQgKiAwLjYzKS5vcmJpdEFyb3VuZFkoc3BlZWQgKiAwLjg0KVxcbiAgICAgICAgfSxcXG4gICAgKVxcbiAgICBjb250ZXh0LnBsYXkoKVwiLFwicmVidWlsZEZpbHRlcnMoKVwiOlwiLyoqXFxuICogUmVwbGFjZSB0aGUgZmlsdGVycyBhbmQgdGhlaXIgcGFpbnRlcnMsIGJlY2F1c2UgYHNoYWRpbmdgLCBgY2F2aXR5YCBhbmQgYGFtYmllbnRPY2NsdXNpb25gXFxuICogY2FuIG9ubHkgYmUgc2V0IGluIHRoZSBjb25zdHJ1Y3Rvci5cXG4gKiBUaGUgcHJldmlvdXMgb25lcywgaWYgYW55LCBhcmUgZGVsZXRlZC5cXG4gKi9cXG5mdW5jdGlvbiByZWJ1aWxkRmlsdGVycyhcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgc2NlbmU6IFNjZW5lQmFzZSAmIFBhcnRpYWw8U2NlbmVGaWx0ZXJzPixcXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzLFxcbik6IFNjZW5lRmlsdGVycyB7XFxuICAgIGNvbnN0IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfSA9IHNjZW5lXFxuICAgIC8vIFRoZSBwYWludGVycyBkbyBub3Qgb3duIHRoZSBmaWx0ZXJzLCBzbyB3ZSBkZWxldGUgYm90aC5cXG4gICAgc3RhdGUucmVtb3ZlQWxsKClcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhzY2VuZS5maWx0ZXJzID8/IHt9KSkgZmlsdGVyLmRlbGV0ZSgpXFxuICAgIGNvbnN0IHNoYWRvd09wdGlvbnMgPSB7IGNhbWVyYTogc2hhZG93LmNhbWVyYSwgdGV4dHVyZTogc2hhZG93LnRleHR1cmUgfVxcbiAgICBjb25zdCBjYXZpdHkgPSBzZXR0aW5ncy5jYXZpdHkgPyB7IHJpZGdlOiBzZXR0aW5ncy5yaWRnZSwgdmFsbGV5OiBzZXR0aW5ncy52YWxsZXksIG91dGxpbmU6IHNldHRpbmdzLm91dGxpbmUgfSA6IHVuZGVmaW5lZFxcbiAgICBjb25zdCBhbWJpZW50T2NjbHVzaW9uID0gc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvblxcbiAgICAgICAgPyB7XFxuICAgICAgICAgICAgICBpbnRlbnNpdHk6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHksXFxuICAgICAgICAgICAgICBibHVyOiBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uQmx1cixcXG4gICAgICAgICAgICAgIGNvbWJpbmVXaXRoTGlnaHQ6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LFxcbiAgICAgICAgICB9XFxuICAgICAgICA6IHVuZGVmaW5lZFxcbiAgICBjb25zdCBmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiA9IHtcXG4gICAgICAgIHNreWJveDogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxcbiAgICAgICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogc2t5Ym94LFxcbiAgICAgICAgICAgIHNreWJveFN0cmVuZ3RoOiBzZXR0aW5ncy5zdHJlbmd0aCxcXG4gICAgICAgICAgICBza3lib3hFeHBvbmVudDogc2V0dGluZ3MuZXhwb25lbnQsXFxuICAgICAgICAgICAgbGlnaHQsXFxuICAgICAgICAgICAgc2hhZG93OiBzaGFkb3dPcHRpb25zLFxcbiAgICAgICAgICAgIGNhdml0eSxcXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBBIDHDlzEgY3ViZSB0ZXh0dXJlIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbG9yLlxcbiAgICAgICAgY29sb3I6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcXG4gICAgICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU86IGRlZmVycmVkLnRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTyxcXG4gICAgICAgICAgICBzaGFkaW5nOiBzZXR0aW5ncy5zaGFkaW5nLFxcbiAgICAgICAgICAgIHNreWJveFRleHR1cmU6IFxcXCIjN2FmXFxcIixcXG4gICAgICAgICAgICBza3lib3hTdHJlbmd0aDogc2V0dGluZ3Muc3RyZW5ndGgsXFxuICAgICAgICAgICAgc2t5Ym94RXhwb25lbnQ6IHNldHRpbmdzLmV4cG9uZW50LFxcbiAgICAgICAgICAgIGxpZ2h0LFxcbiAgICAgICAgICAgIHNoYWRvdzogc2hhZG93T3B0aW9ucyxcXG4gICAgICAgICAgICBjYXZpdHksXFxuICAgICAgICAgICAgYW1iaWVudE9jY2x1c2lvbixcXG4gICAgICAgIH0pLFxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4gPSB7XFxuICAgICAgICBza3lib3g6IG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQsIGRlZmVycmVkLCBmaWx0ZXJzLnNreWJveCksXFxuICAgICAgICBjb2xvcjogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuY29sb3IpLFxcbiAgICB9XFxuICAgIGFwcGx5TW9kZShwYWludGVycywgc2V0dGluZ3MubW9kZSlcXG4gICAgc3RhdGUuYWRkKHBhaW50ZXJzLnNreWJveCwgcGFpbnRlcnMuY29sb3IpXFxuICAgIHJldHVybiB7IGZpbHRlcnMsIHBhaW50ZXJzIH1cXG59XCIsXCJtYWtlUGFpbnRlckZpbHRlcigpXCI6XCIvKipcXG4gKiBUaGUgYWxiZWRvIGlzIHRoZSBpbnB1dCB0ZXh0dXJlIG9mIHRoZSBmaWx0ZXIuXFxuICovXFxuZnVuY3Rpb24gbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dDogVGdkQ29udGV4dCwgZGVmZXJyZWQ6IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcsIGZpbHRlcjogVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKSB7XFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG59XCIsXCJtYWtlU2hhZG93Q2FtZXJhKClcIjpcIi8qKlxcbiAqIFRoZSBsaWdodCBpcyBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIGluaXRpYWwgY2FtZXJhLFxcbiAqIGF0IGEgZGlzdGFuY2Ugb2YgOCBmcm9tIGl0LCBhbmQgbG9va3MgYXQgdGhlIGNhbWVyYSdzIHRhcmdldC5cXG4gKi9cXG5mdW5jdGlvbiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLnBvc2l0aW9uKVxcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLmF4aXNZKS5zdWJ0cmFjdCh0cmFuc2ZvLmF4aXNYKS5ub3JtYWxpemUoKS5zY2FsZSg4KVxcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8uYWN0dWFsUG9zaXRpb24pLmFkZChvZmZzZXQpXFxuICAgIGNvbnN0IGRpc3RhbmNlID0gbmV3IFRnZFZlYzMocG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldCkuc2l6ZVxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb24gfSksXFxuICAgICAgICAvLyBIYWxmIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpc2libGUgYXJlYS5cXG4gICAgICAgIHNwYWNlSGVpZ2h0OiAzLFxcbiAgICAgICAgbmVhcjogTWF0aC5tYXgoMC4xLCBkaXN0YW5jZSAtIDUpLFxcbiAgICAgICAgZmFyOiBkaXN0YW5jZSArIDUsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICByZXR1cm4gbGlnaHRcXG59XCIsXCJhcHBseU1vZGUoKVwiOlwiZnVuY3Rpb24gYXBwbHlNb2RlKHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4sIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFpbnRlcnMpIGFzIE1vZGVbXSkge1xcbiAgICAgICAgcGFpbnRlcnNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcXG4gICAgfVxcbn1cIixcImFwcGx5U3RyZW5ndGgoKVwiOlwiZnVuY3Rpb24gYXBwbHlTdHJlbmd0aChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgc3RyZW5ndGg6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuc2t5Ym94U3RyZW5ndGggPSBzdHJlbmd0aFxcbiAgICB9XFxufVwiLFwiYXBwbHlFeHBvbmVudCgpXCI6XCJmdW5jdGlvbiBhcHBseUV4cG9uZW50KGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBleHBvbmVudDogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5za3lib3hFeHBvbmVudCA9IGV4cG9uZW50XFxuICAgIH1cXG59XCIsXCJhcHBseUNhdml0eSgpXCI6XCJmdW5jdGlvbiBhcHBseUNhdml0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgcmlkZ2U6IG51bWJlciwgdmFsbGV5OiBudW1iZXIpIHtcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xcbiAgICAgICAgZmlsdGVyLmNhdml0eVJpZGdlID0gcmlkZ2VcXG4gICAgICAgIGZpbHRlci5jYXZpdHlWYWxsZXkgPSB2YWxsZXlcXG4gICAgfVxcbn1cIixcImFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSgpXCI6XCJmdW5jdGlvbiBhcHBseUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkoZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4sIGludGVuc2l0eTogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5ID0gaW50ZW5zaXR5XFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG4gICAgdHlwZSBUZ2RNZXNoV2l0aFRleHR1cmVzLFxcbiAgICBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxcbiAgICBUZ2RQYWludGVyU2hhZG93LFxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIFRnZFRyYW5zZm8sXFxuICAgIFRnZFZlYzMsXFxuICAgIHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwsXFxuICAgIHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCB7IFZpZXdJbnB1dE51bWJlciwgVmlld09wdGlvbnMsIFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXFxcIkB0b2xva29iYW4vdWlcXFwiXFxuaW1wb3J0IFJlYWN0IGZyb20gXFxcInJlYWN0XFxcIlxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCBIZWxtZXRVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXFxcIlxcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXFxcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS1sb3cuZ2xiXFxcIlxcbmltcG9ydCBQb3NYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFxcXCJcXG5pbXBvcnQgUG9zWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXFxcIlxcbmltcG9ydCBOZWdYIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFxcXCJcXG5pbXBvcnQgTmVnWSBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ogZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXFxcIlxcblxcbnR5cGUgTW9kZSA9IFxcXCJza3lib3hcXFwiIHwgXFxcImNvbG9yXFxcIlxcblxcbi8qKiBXaGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgaW4gdGhlIHBhbmVsLiAqL1xcbmludGVyZmFjZSBTZXR0aW5ncyB7XFxuICAgIG1vZGU6IE1vZGVcXG4gICAgc3RyZW5ndGg6IG51bWJlclxcbiAgICBleHBvbmVudDogbnVtYmVyXFxuICAgIHNoYWRpbmc6IGJvb2xlYW5cXG4gICAgY2F2aXR5OiBib29sZWFuXFxuICAgIHJpZGdlOiBudW1iZXJcXG4gICAgdmFsbGV5OiBudW1iZXJcXG4gICAgb3V0bGluZTogYm9vbGVhblxcbiAgICBhbWJpZW50T2NjbHVzaW9uOiBib29sZWFuXFxuICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHk6IG51bWJlclxcbiAgICBhbWJpZW50T2NjbHVzaW9uQmx1cjogYm9vbGVhblxcbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogYm9vbGVhblxcbn1cXG5cXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcXG4gICAgbW9kZTogXFxcInNreWJveFxcXCIsXFxuICAgIHN0cmVuZ3RoOiAxLFxcbiAgICBleHBvbmVudDogMi4yLFxcbiAgICBzaGFkaW5nOiB0cnVlLFxcbiAgICBjYXZpdHk6IHRydWUsXFxuICAgIHJpZGdlOiAxLFxcbiAgICB2YWxsZXk6IDEsXFxuICAgIG91dGxpbmU6IHRydWUsXFxuICAgIGFtYmllbnRPY2NsdXNpb246IHRydWUsXFxuICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHk6IDEsXFxuICAgIGFtYmllbnRPY2NsdXNpb25CbHVyOiB0cnVlLFxcbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogZmFsc2UsXFxufVxcblxcbi8qKlxcbiAqIEV2ZXJ5dGhpbmcgdGhlIGZpbHRlcnMgbmVlZCwgc28gd2UgY2FuIHJlYnVpbGQgdGhlbSB3aGVuIGBzaGFkaW5nYCwgYGNhdml0eWBcXG4gKiBvciBgYW1iaWVudE9jY2x1c2lvbmAgY2hhbmdlcy5cXG4gKi9cXG5pbnRlcmZhY2UgU2NlbmVCYXNlIHtcXG4gICAgZGVmZXJyZWQ6IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdcXG4gICAgc2t5Ym94OiBUZ2RUZXh0dXJlQ3ViZVxcbiAgICBsaWdodDogVGdkTGlnaHRcXG4gICAgc2hhZG93OiBUZ2RQYWludGVyU2hhZG93XFxuICAgIC8qKiBQYXJlbnQgb2YgdGhlIGZpbHRlciBwYWludGVycy4gKi9cXG4gICAgc3RhdGU6IFRnZFBhaW50ZXJTdGF0ZVxcbn1cXG5cXG5pbnRlcmZhY2UgU2NlbmVGaWx0ZXJzIHtcXG4gICAgZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz5cXG4gICAgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPlxcbn1cXG5cXG50eXBlIFNjZW5lID0gU2NlbmVCYXNlICYgU2NlbmVGaWx0ZXJzXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgcmVmU2NlbmU6IHsgY3VycmVudDogU2NlbmUgfCBudWxsIH0pIHtcXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgcm91Z2huZXNzIGZyb20gdG9wIHRvIGJvdHRvbS5cXG4gICAgY29uc3QgYm94OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMC43LCAwLjIsIDFdIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBtZXRhbGxpYzogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgcm91Z2huZXNzOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCg2NCwgW1xcXCIjMDAwXFxcIiwgXFxcIiNmZmZcXFwiXSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIC8vIE9yYml0cyBvbiB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgaGVsbWV0LCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxcbiAgICAvLyBXaXRob3V0IHRleHR1cmVzLCBtZXRhbGxpYyBpcyAwIGFuZCByb3VnaG5lc3MgaXMgMC41LlxcbiAgICBjb25zdCBzdXphbm5lOiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0cy5nbGIuc3V6YW5uZS5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFswLCAwLCAwXSwgZGlzdGFuY2U6IDIgfSkub3JiaXRBcm91bmRZKE1hdGguUEkpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFswLjYsIDAuMSwgMC4zLCAxXSB9KSxcXG4gICAgfVxcbiAgICAvLyBnbFRGIHN0b3JlcyBtZXRhbGxpYyBpbiBCTFVFIGFuZCByb3VnaG5lc3MgaW4gR1JFRU4uXFxuICAgIGNvbnN0IHsgaGVsbWV0OiBhc3NldCB9ID0gYXNzZXRzLmdsYlxcbiAgICBjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKVxcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE1ldGFsbGljUm91Z2huZXNzID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmU/LmluZGV4ID8/IDBcXG4gICAgY29uc3QgaW5kZXhPY2NsdXNpb24gPSBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICAvLyBUaGUgZW1pc3Npb24gdGV4dHVyZSBpcyBvcHRpb25hbCBpbiBnbFRGLlxcbiAgICBjb25zdCBpbmRleEVtaXNzaW9uID0gZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXhcXG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXFxuICAgIGNvbnN0IGhlbG1ldDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcXG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcXG4gICAgICAgIHZpc2libGU6IHRydWUsXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHRleHR1cmVzOiB7XFxuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXFxuICAgICAgICAgICAgbWV0YWxsaWM6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFxcXCJiXFxcIixcXG4gICAgICAgICAgICByb3VnaG5lc3M6IHRleHR1cmVNZXRhbGxpY1JvdWdobmVzcyxcXG4gICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiBcXFwiZ1xcXCIsXFxuICAgICAgICAgICAgYmFrZWRBTzogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4T2NjbHVzaW9uKSxcXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXFxcInJcXFwiLFxcbiAgICAgICAgICAgIGVtaXNzaW9uOiBpbmRleEVtaXNzaW9uID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhFbWlzc2lvbiksXFxuICAgICAgICB9LFxcbiAgICB9XFxuICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwgeyBtZXNoZXM6IFtib3gsIHN1emFubmUsIGhlbG1ldF0gfSlcXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgLy8gVGhlIHNoYWRvdyBjYW1lcmEgZGVwZW5kcyBvbiB0aGUgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgbWFpbiBjYW1lcmEuXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNClcXG4gICAgY29uc3Qgc2hhZG93ID0gbmV3IFRnZFBhaW50ZXJTaGFkb3coY29udGV4dCwge1xcbiAgICAgICAgY2FtZXJhOiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQpLFxcbiAgICAgICAgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdLFxcbiAgICB9KVxcbiAgICAvLyBUaGUgbGlnaHQgY2FtZXJhIGxvb2tzIHRvd2FyZCBpdHMgLVogYXhpcy5cXG4gICAgY29uc3QgW2x4LCBseSwgbHpdID0gc2hhZG93LmNhbWVyYS50cmFuc2ZvLmF4aXNaXFxuICAgIGNvbnN0IGxpZ2h0ID0gbmV3IFRnZExpZ2h0KHsgY29sb3I6IFsxLCAwLjksIDAuOCwgMV0sIGRpcmVjdGlvbjogWy1seCwgLWx5LCAtbHpdIH0pXFxuICAgIC8vIE5vdGhpbmcgaXMgcGFpbnRlZCAoYWxwaGEgPSAwKSB3aGVyZSB0aGVyZSBpcyBubyBtZXNoLlxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgY3VsbDogXFxcIm9mZlxcXCIsXFxuICAgICAgICBibGVuZDogXFxcImFscGhhXFxcIixcXG4gICAgfSlcXG4gICAgY29uc3QgYmFzZTogU2NlbmVCYXNlID0geyBkZWZlcnJlZCwgc2t5Ym94LCBsaWdodCwgc2hhZG93LCBzdGF0ZSB9XFxuICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IC4uLmJhc2UsIC4uLnJlYnVpbGRGaWx0ZXJzKGNvbnRleHQsIGJhc2UsIERFRkFVTFRfU0VUVElOR1MpIH1cXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBzaGFkb3csXFxuICAgICAgICBkZWZlcnJlZCxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHsgdGV4dHVyZTogc2t5Ym94IH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgICAgICAoX3RpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xcbiAgICAgICAgICAgIGJveC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuMDcxKS5vcmJpdEFyb3VuZFkoZGVsdGEgKiAwLjA5NClcXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IC0wLjA2MjQ3ICogZGVsdGFcXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8ub3JiaXRBcm91bmRYKHNwZWVkICogMC42Mykub3JiaXRBcm91bmRZKHNwZWVkICogMC44NClcXG4gICAgICAgIH0sXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgcmVmU2NlbmUgPSBSZWFjdC51c2VSZWY8U2NlbmUgfCBudWxsPihudWxsKVxcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlPihERUZBVUxUX1NFVFRJTkdTLm1vZGUpXFxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zdHJlbmd0aClcXG4gICAgY29uc3QgW2V4cG9uZW50LCBzZXRFeHBvbmVudF0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmV4cG9uZW50KVxcbiAgICBjb25zdCBbc2hhZGluZywgc2V0U2hhZGluZ10gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLnNoYWRpbmcpXFxuICAgIGNvbnN0IFtjYXZpdHksIHNldENhdml0eV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmNhdml0eSlcXG4gICAgY29uc3QgW3JpZGdlLCBzZXRSaWRnZV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLnJpZGdlKVxcbiAgICBjb25zdCBbdmFsbGV5LCBzZXRWYWxsZXldID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy52YWxsZXkpXFxuICAgIGNvbnN0IFtvdXRsaW5lLCBzZXRPdXRsaW5lXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1Mub3V0bGluZSlcXG4gICAgY29uc3QgW2FtYmllbnRPY2NsdXNpb24sIHNldEFtYmllbnRPY2NsdXNpb25dID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5hbWJpZW50T2NjbHVzaW9uKVxcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSwgc2V0QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcXG4gICAgICAgIERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcXG4gICAgKVxcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbkJsdXIsIHNldEFtYmllbnRPY2NsdXNpb25CbHVyXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkJsdXIpXFxuICAgIGNvbnN0IFthbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCwgc2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHRdID0gUmVhY3QudXNlU3RhdGUoXFxuICAgICAgICBERUZBVUxUX1NFVFRJTkdTLmFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LFxcbiAgICApXFxuICAgIGNvbnN0IHNldHRpbmdzOiBTZXR0aW5ncyA9IHtcXG4gICAgICAgIG1vZGUsXFxuICAgICAgICBzdHJlbmd0aCxcXG4gICAgICAgIGV4cG9uZW50LFxcbiAgICAgICAgc2hhZGluZyxcXG4gICAgICAgIGNhdml0eSxcXG4gICAgICAgIHJpZGdlLFxcbiAgICAgICAgdmFsbGV5LFxcbiAgICAgICAgb3V0bGluZSxcXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb24sXFxuICAgICAgICBhbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5LFxcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbkJsdXIsXFxuICAgICAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCxcXG4gICAgfVxcbiAgICAvKiogU29tZSBvcHRpb25zIGNhbiBvbmx5IGJlIHNldCBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGZpbHRlcnMuICovXFxuICAgIGNvbnN0IHJlYnVpbGQgPSAoY2hhbmdlczogUGFydGlhbDxTZXR0aW5ncz4pID0+IHtcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXFxuXFxuICAgICAgICBPYmplY3QuYXNzaWduKHNjZW5lLCByZWJ1aWxkRmlsdGVycyhjb250ZXh0LCBzY2VuZSwgeyAuLi5zZXR0aW5ncywgLi4uY2hhbmdlcyB9KSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZU1vZGVDaGFuZ2UgPSAodmFsdWU6IE1vZGUpID0+IHtcXG4gICAgICAgIHNldE1vZGUodmFsdWUpXFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcXG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxcblxcbiAgICAgICAgYXBwbHlNb2RlKHNjZW5lLnBhaW50ZXJzLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZVN0cmVuZ3RoQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcXG4gICAgICAgIHNldFN0cmVuZ3RoKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5U3RyZW5ndGgoc2NlbmUuZmlsdGVycywgdmFsdWUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVFeHBvbmVudENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRFeHBvbmVudCh2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXFxuXFxuICAgICAgICBhcHBseUV4cG9uZW50KHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQ2F2aXR5Q2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XFxuICAgICAgICBzZXRDYXZpdHkodmFsdWUpXFxuICAgICAgICByZWJ1aWxkKHsgY2F2aXR5OiB2YWx1ZSB9KVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZU91dGxpbmVDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcXG4gICAgICAgIHNldE91dGxpbmUodmFsdWUpXFxuICAgICAgICByZWJ1aWxkKHsgb3V0bGluZTogdmFsdWUgfSlcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVTaGFkaW5nQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XFxuICAgICAgICBzZXRTaGFkaW5nKHZhbHVlKVxcbiAgICAgICAgcmVidWlsZCh7IHNoYWRpbmc6IHZhbHVlIH0pXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbih2YWx1ZSlcXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uOiB2YWx1ZSB9KVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XFxuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uQmx1cih2YWx1ZSlcXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uQmx1cjogdmFsdWUgfSlcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodENoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQodmFsdWUpXFxuICAgICAgICByZWJ1aWxkKHsgYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQ6IHZhbHVlIH0pXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkludGVuc2l0eUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5KHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShzY2VuZS5maWx0ZXJzLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZVJpZGdlQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcXG4gICAgICAgIHNldFJpZGdlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHZhbHVlLCB2YWxsZXkpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVWYWxsZXlDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xcbiAgICAgICAgc2V0VmFsbGV5KHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHJpZGdlLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XFxuICAgICAgICAgICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzLCByZWZTY2VuZSlcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHsgaGVsbWV0OiBIZWxtZXRVUkwsIHN1emFubmU6IFN1emFubmVVUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuICAgICAgICAgICAgZ2l6bW8+XFxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCIgZ2FwPVxcXCJTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17bW9kZX0gb25DaGFuZ2U9e2hhbmRsZU1vZGVDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJza3lib3hcXFwiPnNreWJveCB0ZXh0dXJlPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImNvbG9yXFxcIj5za3lib3ggY29sb3I8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJza3lib3hTdHJlbmd0aFxcXCIgdmFsdWU9e3N0cmVuZ3RofSBvbkNoYW5nZT17aGFuZGxlU3RyZW5ndGhDaGFuZ2V9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJza3lib3hFeHBvbmVudFxcXCIgdmFsdWU9e2V4cG9uZW50fSBvbkNoYW5nZT17aGFuZGxlRXhwb25lbnRDaGFuZ2V9IC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17c2hhZGluZ30gb25DaGFuZ2U9e2hhbmRsZVNoYWRpbmdDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNoYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtjYXZpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDYXZpdHlDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhdml0eVxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwiUmlkZ2VcXFwiIHZhbHVlPXtyaWRnZX0gb25DaGFuZ2U9e2hhbmRsZVJpZGdlQ2hhbmdlfSBlbmFibGVkPXtjYXZpdHl9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJWYWxsZXlcXFwiIHZhbHVlPXt2YWxsZXl9IG9uQ2hhbmdlPXtoYW5kbGVWYWxsZXlDaGFuZ2V9IGVuYWJsZWQ9e2Nhdml0eX0gLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtvdXRsaW5lfSBvbkNoYW5nZT17aGFuZGxlT3V0bGluZUNoYW5nZX0gZW5hYmxlZD17Y2F2aXR5fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBPdXRsaW5lXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17YW1iaWVudE9jY2x1c2lvbn0gb25DaGFuZ2U9e2hhbmRsZUFtYmllbnRPY2NsdXNpb25DaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEFtYmllbnQgT2NjbHVzaW9uXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIkludGVuc2l0eVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1iaWVudE9jY2x1c2lvbkludGVuc2l0eX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkludGVuc2l0eUNoYW5nZX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXthbWJpZW50T2NjbHVzaW9ufVxcbiAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRPY2NsdXNpb25CbHVyfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbWJpZW50T2NjbHVzaW9uQmx1ckNoYW5nZX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXthbWJpZW50T2NjbHVzaW9ufT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBCbHVyXFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodH1cXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHRDaGFuZ2V9XFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD17YW1iaWVudE9jY2x1c2lvbiAmJiBzaGFkaW5nfT5cXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21iaW5lIHdpdGggbGlnaHRcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICA8L1ZpZXc+XFxuICAgIClcXG59XFxuXFxuLyoqXFxuICogUmVwbGFjZSB0aGUgZmlsdGVycyBhbmQgdGhlaXIgcGFpbnRlcnMsIGJlY2F1c2UgYHNoYWRpbmdgLCBgY2F2aXR5YCBhbmQgYGFtYmllbnRPY2NsdXNpb25gXFxuICogY2FuIG9ubHkgYmUgc2V0IGluIHRoZSBjb25zdHJ1Y3Rvci5cXG4gKiBUaGUgcHJldmlvdXMgb25lcywgaWYgYW55LCBhcmUgZGVsZXRlZC5cXG4gKi9cXG5mdW5jdGlvbiByZWJ1aWxkRmlsdGVycyhcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgc2NlbmU6IFNjZW5lQmFzZSAmIFBhcnRpYWw8U2NlbmVGaWx0ZXJzPixcXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzLFxcbik6IFNjZW5lRmlsdGVycyB7XFxuICAgIGNvbnN0IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfSA9IHNjZW5lXFxuICAgIC8vIFRoZSBwYWludGVycyBkbyBub3Qgb3duIHRoZSBmaWx0ZXJzLCBzbyB3ZSBkZWxldGUgYm90aC5cXG4gICAgc3RhdGUucmVtb3ZlQWxsKClcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhzY2VuZS5maWx0ZXJzID8/IHt9KSkgZmlsdGVyLmRlbGV0ZSgpXFxuICAgIGNvbnN0IHNoYWRvd09wdGlvbnMgPSB7IGNhbWVyYTogc2hhZG93LmNhbWVyYSwgdGV4dHVyZTogc2hhZG93LnRleHR1cmUgfVxcbiAgICBjb25zdCBjYXZpdHkgPSBzZXR0aW5ncy5jYXZpdHkgPyB7IHJpZGdlOiBzZXR0aW5ncy5yaWRnZSwgdmFsbGV5OiBzZXR0aW5ncy52YWxsZXksIG91dGxpbmU6IHNldHRpbmdzLm91dGxpbmUgfSA6IHVuZGVmaW5lZFxcbiAgICBjb25zdCBhbWJpZW50T2NjbHVzaW9uID0gc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvblxcbiAgICAgICAgPyB7XFxuICAgICAgICAgICAgICBpbnRlbnNpdHk6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHksXFxuICAgICAgICAgICAgICBibHVyOiBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uQmx1cixcXG4gICAgICAgICAgICAgIGNvbWJpbmVXaXRoTGlnaHQ6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LFxcbiAgICAgICAgICB9XFxuICAgICAgICA6IHVuZGVmaW5lZFxcbiAgICBjb25zdCBmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiA9IHtcXG4gICAgICAgIHNreWJveDogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxcbiAgICAgICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogc2t5Ym94LFxcbiAgICAgICAgICAgIHNreWJveFN0cmVuZ3RoOiBzZXR0aW5ncy5zdHJlbmd0aCxcXG4gICAgICAgICAgICBza3lib3hFeHBvbmVudDogc2V0dGluZ3MuZXhwb25lbnQsXFxuICAgICAgICAgICAgbGlnaHQsXFxuICAgICAgICAgICAgc2hhZG93OiBzaGFkb3dPcHRpb25zLFxcbiAgICAgICAgICAgIGNhdml0eSxcXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxcbiAgICAgICAgfSksXFxuICAgICAgICAvLyBBIDHDlzEgY3ViZSB0ZXh0dXJlIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbG9yLlxcbiAgICAgICAgY29sb3I6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xcbiAgICAgICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcXG4gICAgICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU86IGRlZmVycmVkLnRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTyxcXG4gICAgICAgICAgICBzaGFkaW5nOiBzZXR0aW5ncy5zaGFkaW5nLFxcbiAgICAgICAgICAgIHNreWJveFRleHR1cmU6IFxcXCIjN2FmXFxcIixcXG4gICAgICAgICAgICBza3lib3hTdHJlbmd0aDogc2V0dGluZ3Muc3RyZW5ndGgsXFxuICAgICAgICAgICAgc2t5Ym94RXhwb25lbnQ6IHNldHRpbmdzLmV4cG9uZW50LFxcbiAgICAgICAgICAgIGxpZ2h0LFxcbiAgICAgICAgICAgIHNoYWRvdzogc2hhZG93T3B0aW9ucyxcXG4gICAgICAgICAgICBjYXZpdHksXFxuICAgICAgICAgICAgYW1iaWVudE9jY2x1c2lvbixcXG4gICAgICAgIH0pLFxcbiAgICB9XFxuICAgIGNvbnN0IHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4gPSB7XFxuICAgICAgICBza3lib3g6IG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQsIGRlZmVycmVkLCBmaWx0ZXJzLnNreWJveCksXFxuICAgICAgICBjb2xvcjogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuY29sb3IpLFxcbiAgICB9XFxuICAgIGFwcGx5TW9kZShwYWludGVycywgc2V0dGluZ3MubW9kZSlcXG4gICAgc3RhdGUuYWRkKHBhaW50ZXJzLnNreWJveCwgcGFpbnRlcnMuY29sb3IpXFxuICAgIHJldHVybiB7IGZpbHRlcnMsIHBhaW50ZXJzIH1cXG59XFxuXFxuLyoqXFxuICogVGhlIGFsYmVkbyBpcyB0aGUgaW5wdXQgdGV4dHVyZSBvZiB0aGUgZmlsdGVyLlxcbiAqL1xcbmZ1bmN0aW9uIG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQ6IFRnZENvbnRleHQsIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLCBmaWx0ZXI6IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZykge1xcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZGVmZXJyZWQudGV4dHVyZUFsYmVkbyxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxufVxcblxcbi8qKlxcbiAqIFRoZSBsaWdodCBpcyBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIGluaXRpYWwgY2FtZXJhLFxcbiAqIGF0IGEgZGlzdGFuY2Ugb2YgOCBmcm9tIGl0LCBhbmQgbG9va3MgYXQgdGhlIGNhbWVyYSdzIHRhcmdldC5cXG4gKi9cXG5mdW5jdGlvbiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLnBvc2l0aW9uKVxcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLmF4aXNZKS5zdWJ0cmFjdCh0cmFuc2ZvLmF4aXNYKS5ub3JtYWxpemUoKS5zY2FsZSg4KVxcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8uYWN0dWFsUG9zaXRpb24pLmFkZChvZmZzZXQpXFxuICAgIGNvbnN0IGRpc3RhbmNlID0gbmV3IFRnZFZlYzMocG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldCkuc2l6ZVxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb24gfSksXFxuICAgICAgICAvLyBIYWxmIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpc2libGUgYXJlYS5cXG4gICAgICAgIHNwYWNlSGVpZ2h0OiAzLFxcbiAgICAgICAgbmVhcjogTWF0aC5tYXgoMC4xLCBkaXN0YW5jZSAtIDUpLFxcbiAgICAgICAgZmFyOiBkaXN0YW5jZSArIDUsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICByZXR1cm4gbGlnaHRcXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlNb2RlKHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4sIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFpbnRlcnMpIGFzIE1vZGVbXSkge1xcbiAgICAgICAgcGFpbnRlcnNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiBhcHBseVN0cmVuZ3RoKGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBzdHJlbmd0aDogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5za3lib3hTdHJlbmd0aCA9IHN0cmVuZ3RoXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlFeHBvbmVudChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgZXhwb25lbnQ6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuc2t5Ym94RXhwb25lbnQgPSBleHBvbmVudFxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIGFwcGx5Q2F2aXR5KGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCByaWRnZTogbnVtYmVyLCB2YWxsZXk6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuY2F2aXR5UmlkZ2UgPSByaWRnZVxcbiAgICAgICAgZmlsdGVyLmNhdml0eVZhbGxleSA9IHZhbGxleVxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgaW50ZW5zaXR5OiBudW1iZXIpIHtcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xcbiAgICAgICAgZmlsdGVyLmFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkgPSBpbnRlbnNpdHlcXG4gICAgfVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RMaWdodCxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcbiAgICB0eXBlIFRnZE1lc2hXaXRoVGV4dHVyZXMsXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJTaGFkb3csXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFRyYW5zZm8sXG4gICAgVGdkVmVjMyxcbiAgICB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsLFxuICAgIHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFZpZXdJbnB1dE51bWJlciwgVmlld09wdGlvbnMsIFZpZXdQYW5lbCwgVmlld1N3aXRjaCB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCBIZWxtZXRVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvaGVsbWV0LmdsYlwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLWxvdy5nbGJcIlxuaW1wb3J0IFBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1gud2VicFwiXG5pbXBvcnQgUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXCJcbmltcG9ydCBQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcIlxuaW1wb3J0IE5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1gud2VicFwiXG5pbXBvcnQgTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXCJcbmltcG9ydCBOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcIlxuXG50eXBlIE1vZGUgPSBcInNreWJveFwiIHwgXCJjb2xvclwiXG5cbi8qKiBXaGF0IHRoZSB1c2VyIGNhbiBjaGFuZ2UgaW4gdGhlIHBhbmVsLiAqL1xuaW50ZXJmYWNlIFNldHRpbmdzIHtcbiAgICBtb2RlOiBNb2RlXG4gICAgc3RyZW5ndGg6IG51bWJlclxuICAgIGV4cG9uZW50OiBudW1iZXJcbiAgICBzaGFkaW5nOiBib29sZWFuXG4gICAgY2F2aXR5OiBib29sZWFuXG4gICAgcmlkZ2U6IG51bWJlclxuICAgIHZhbGxleTogbnVtYmVyXG4gICAgb3V0bGluZTogYm9vbGVhblxuICAgIGFtYmllbnRPY2NsdXNpb246IGJvb2xlYW5cbiAgICBhbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5OiBudW1iZXJcbiAgICBhbWJpZW50T2NjbHVzaW9uQmx1cjogYm9vbGVhblxuICAgIGFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0OiBib29sZWFuXG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IFNldHRpbmdzID0ge1xuICAgIG1vZGU6IFwic2t5Ym94XCIsXG4gICAgc3RyZW5ndGg6IDEsXG4gICAgZXhwb25lbnQ6IDIuMixcbiAgICBzaGFkaW5nOiB0cnVlLFxuICAgIGNhdml0eTogdHJ1ZSxcbiAgICByaWRnZTogMSxcbiAgICB2YWxsZXk6IDEsXG4gICAgb3V0bGluZTogdHJ1ZSxcbiAgICBhbWJpZW50T2NjbHVzaW9uOiB0cnVlLFxuICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHk6IDEsXG4gICAgYW1iaWVudE9jY2x1c2lvbkJsdXI6IHRydWUsXG4gICAgYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQ6IGZhbHNlLFxufVxuXG4vKipcbiAqIEV2ZXJ5dGhpbmcgdGhlIGZpbHRlcnMgbmVlZCwgc28gd2UgY2FuIHJlYnVpbGQgdGhlbSB3aGVuIGBzaGFkaW5nYCwgYGNhdml0eWBcbiAqIG9yIGBhbWJpZW50T2NjbHVzaW9uYCBjaGFuZ2VzLlxuICovXG5pbnRlcmZhY2UgU2NlbmVCYXNlIHtcbiAgICBkZWZlcnJlZDogVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1xuICAgIHNreWJveDogVGdkVGV4dHVyZUN1YmVcbiAgICBsaWdodDogVGdkTGlnaHRcbiAgICBzaGFkb3c6IFRnZFBhaW50ZXJTaGFkb3dcbiAgICAvKiogUGFyZW50IG9mIHRoZSBmaWx0ZXIgcGFpbnRlcnMuICovXG4gICAgc3RhdGU6IFRnZFBhaW50ZXJTdGF0ZVxufVxuXG5pbnRlcmZhY2UgU2NlbmVGaWx0ZXJzIHtcbiAgICBmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPlxuICAgIHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj5cbn1cblxudHlwZSBTY2VuZSA9IFNjZW5lQmFzZSAmIFNjZW5lRmlsdGVyc1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZTY2VuZTogeyBjdXJyZW50OiBTY2VuZSB8IG51bGwgfSkge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxuICAgIGNvbnN0IGJveDogVGdkTWVzaFdpdGhUZXh0dXJlcyA9IHtcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCgpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMSwgMC43LCAwLjIsIDFdIH0pLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgbWV0YWxsaWM6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUdyYWRpZW50SG9yaXpvbnRhbCg2NCwgW1wiIzAwMFwiLCBcIiNmZmZcIl0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGxvYWQ6IHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwoNjQsIFtcIiMwMDBcIiwgXCIjZmZmXCJdKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgIH1cbiAgICAvLyBPcmJpdHMgb24gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGhlbG1ldCwgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAvLyBXaXRob3V0IHRleHR1cmVzLCBtZXRhbGxpYyBpcyAwIGFuZCByb3VnaG5lc3MgaXMgMC41LlxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XG4gICAgICAgIGdlb21ldHJ5OiBhc3NldHMuZ2xiLnN1emFubmUubWFrZUdlb21ldHJ5KCksXG4gICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHsgcG9zaXRpb246IFswLCAwLCAwXSwgZGlzdGFuY2U6IDIgfSkub3JiaXRBcm91bmRZKE1hdGguUEkpLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7IGNvbG9yOiBbMC42LCAwLjEsIDAuMywgMV0gfSksXG4gICAgfVxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cbiAgICBjb25zdCB7IGhlbG1ldDogYXNzZXQgfSA9IGFzc2V0cy5nbGJcbiAgICBjb25zdCBnbHRmTWF0ZXJpYWwgPSBhc3NldC5nZXRNYXRlcmlhbCgwKVxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXG4gICAgY29uc3QgaW5kZXhNZXRhbGxpY1JvdWdobmVzcyA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8ubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlPy5pbmRleCA/PyAwXG4gICAgY29uc3QgaW5kZXhPY2NsdXNpb24gPSBnbHRmTWF0ZXJpYWwub2NjbHVzaW9uVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXG4gICAgLy8gVGhlIGVtaXNzaW9uIHRleHR1cmUgaXMgb3B0aW9uYWwgaW4gZ2xURi5cbiAgICBjb25zdCBpbmRleEVtaXNzaW9uID0gZ2x0Zk1hdGVyaWFsLmVtaXNzaXZlVGV4dHVyZT8uaW5kZXhcbiAgICBjb25zdCB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MgPSBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhNZXRhbGxpY1JvdWdobmVzcylcbiAgICBjb25zdCBoZWxtZXQ6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XG4gICAgICAgIGdlb21ldHJ5OiBhc3NldC5tYWtlR2VvbWV0cnkoKSxcbiAgICAgICAgdHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdFRleHR1cmUoe1xuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4QmFzZUNvbG9yKSxcbiAgICAgICAgfSksXG4gICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICBub3JtYWxzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhOb3JtYWxzKSxcbiAgICAgICAgICAgIG1ldGFsbGljOiB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MsXG4gICAgICAgICAgICBtZXRhbGxpY0NoYW5uZWw6IFwiYlwiLFxuICAgICAgICAgICAgcm91Z2huZXNzOiB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MsXG4gICAgICAgICAgICByb3VnaG5lc3NDaGFubmVsOiBcImdcIixcbiAgICAgICAgICAgIGJha2VkQU86IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleE9jY2x1c2lvbiksXG4gICAgICAgICAgICBiYWtlZEFPQ2hhbm5lbDogXCJyXCIsXG4gICAgICAgICAgICBlbWlzc2lvbjogaW5kZXhFbWlzc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4RW1pc3Npb24pLFxuICAgICAgICB9LFxuICAgIH1cbiAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdIH0pXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICB9KVxuICAgIC8vIFRoZSBzaGFkb3cgY2FtZXJhIGRlcGVuZHMgb24gdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1haW4gY2FtZXJhLlxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNClcbiAgICBjb25zdCBzaGFkb3cgPSBuZXcgVGdkUGFpbnRlclNoYWRvdyhjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogbWFrZVNoYWRvd0NhbWVyYShjb250ZXh0KSxcbiAgICAgICAgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdLFxuICAgIH0pXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXG4gICAgY29uc3QgW2x4LCBseSwgbHpdID0gc2hhZG93LmNhbWVyYS50cmFuc2ZvLmF4aXNaXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkTGlnaHQoeyBjb2xvcjogWzEsIDAuOSwgMC44LCAxXSwgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcbiAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICB9KVxuICAgIGNvbnN0IGJhc2U6IFNjZW5lQmFzZSA9IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfVxuICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IC4uLmJhc2UsIC4uLnJlYnVpbGRGaWx0ZXJzKGNvbnRleHQsIGJhc2UsIERFRkFVTFRfU0VUVElOR1MpIH1cbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgc2hhZG93LFxuICAgICAgICBkZWZlcnJlZCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwgeyB0ZXh0dXJlOiBza3lib3ggfSksXG4gICAgICAgIHN0YXRlLFxuICAgICAgICAoX3RpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4wNzEpLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuMDk0KVxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAtMC4wNjI0NyAqIGRlbHRhXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8ub3JiaXRBcm91bmRYKHNwZWVkICogMC42Mykub3JiaXRBcm91bmRZKHNwZWVkICogMC44NClcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZTY2VuZSA9IFJlYWN0LnVzZVJlZjxTY2VuZSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gUmVhY3QudXNlU3RhdGU8TW9kZT4oREVGQVVMVF9TRVRUSU5HUy5tb2RlKVxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zdHJlbmd0aClcbiAgICBjb25zdCBbZXhwb25lbnQsIHNldEV4cG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MuZXhwb25lbnQpXG4gICAgY29uc3QgW3NoYWRpbmcsIHNldFNoYWRpbmddID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zaGFkaW5nKVxuICAgIGNvbnN0IFtjYXZpdHksIHNldENhdml0eV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmNhdml0eSlcbiAgICBjb25zdCBbcmlkZ2UsIHNldFJpZGdlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MucmlkZ2UpXG4gICAgY29uc3QgW3ZhbGxleSwgc2V0VmFsbGV5XSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MudmFsbGV5KVxuICAgIGNvbnN0IFtvdXRsaW5lLCBzZXRPdXRsaW5lXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1Mub3V0bGluZSlcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbiwgc2V0QW1iaWVudE9jY2x1c2lvbl0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmFtYmllbnRPY2NsdXNpb24pXG4gICAgY29uc3QgW2FtYmllbnRPY2NsdXNpb25JbnRlbnNpdHksIHNldEFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHldID0gUmVhY3QudXNlU3RhdGUoXG4gICAgICAgIERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcbiAgICApXG4gICAgY29uc3QgW2FtYmllbnRPY2NsdXNpb25CbHVyLCBzZXRBbWJpZW50T2NjbHVzaW9uQmx1cl0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmFtYmllbnRPY2NsdXNpb25CbHVyKVxuICAgIGNvbnN0IFthbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCwgc2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHRdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgICAgIERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXG4gICAgKVxuICAgIGNvbnN0IHNldHRpbmdzOiBTZXR0aW5ncyA9IHtcbiAgICAgICAgbW9kZSxcbiAgICAgICAgc3RyZW5ndGgsXG4gICAgICAgIGV4cG9uZW50LFxuICAgICAgICBzaGFkaW5nLFxuICAgICAgICBjYXZpdHksXG4gICAgICAgIHJpZGdlLFxuICAgICAgICB2YWxsZXksXG4gICAgICAgIG91dGxpbmUsXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb24sXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHksXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb25CbHVyLFxuICAgICAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCxcbiAgICB9XG4gICAgLyoqIFNvbWUgb3B0aW9ucyBjYW4gb25seSBiZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBmaWx0ZXJzLiAqL1xuICAgIGNvbnN0IHJlYnVpbGQgPSAoY2hhbmdlczogUGFydGlhbDxTZXR0aW5ncz4pID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzY2VuZSwgcmVidWlsZEZpbHRlcnMoY29udGV4dCwgc2NlbmUsIHsgLi4uc2V0dGluZ3MsIC4uLmNoYW5nZXMgfSkpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XG4gICAgICAgIHNldE1vZGUodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5TW9kZShzY2VuZS5wYWludGVycywgdmFsdWUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVTdHJlbmd0aENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFN0cmVuZ3RoKHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseVN0cmVuZ3RoKHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlRXhwb25lbnRDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRFeHBvbmVudCh2YWx1ZSlcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgYXBwbHlFeHBvbmVudChzY2VuZS5maWx0ZXJzLCB2YWx1ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUNhdml0eUNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICBzZXRDYXZpdHkodmFsdWUpXG4gICAgICAgIHJlYnVpbGQoeyBjYXZpdHk6IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU91dGxpbmVDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0T3V0bGluZSh2YWx1ZSlcbiAgICAgICAgcmVidWlsZCh7IG91dGxpbmU6IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVNoYWRpbmdDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0U2hhZGluZyh2YWx1ZSlcbiAgICAgICAgcmVidWlsZCh7IHNoYWRpbmc6IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbih2YWx1ZSlcbiAgICAgICAgcmVidWlsZCh7IGFtYmllbnRPY2NsdXNpb246IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldEFtYmllbnRPY2NsdXNpb25CbHVyKHZhbHVlKVxuICAgICAgICByZWJ1aWxkKHsgYW1iaWVudE9jY2x1c2lvbkJsdXI6IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0Q2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldEFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0KHZhbHVlKVxuICAgICAgICByZWJ1aWxkKHsgYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQ6IHZhbHVlIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHlDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5KHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkoc2NlbmUuZmlsdGVycywgdmFsdWUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVSaWRnZUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldFJpZGdlKHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseUNhdml0eShzY2VuZS5maWx0ZXJzLCB2YWx1ZSwgdmFsbGV5KVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlVmFsbGV5Q2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0VmFsbGV5KHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseUNhdml0eShzY2VuZS5maWx0ZXJzLCByaWRnZSwgdmFsdWUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVmQ29udGV4dC5jdXJyZW50ID0gY29udGV4dFxuICAgICAgICAgICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzLCByZWZTY2VuZSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgaGVsbWV0OiBIZWxtZXRVUkwsIHN1emFubmU6IFN1emFubmVVUkwgfSxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgICAgICBwb3NYOiBQb3NYLFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxuICAgICAgICAgICAgICAgICAgICBuZWdYOiBOZWdYLFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cbiAgICAgICAgICAgIGdpem1vPlxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBnYXA9XCJTXCI+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIGdhcD1cIlNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdPcHRpb25zIHZhbHVlPXttb2RlfSBvbkNoYW5nZT17aGFuZGxlTW9kZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInNreWJveFwiPnNreWJveCB0ZXh0dXJlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cImNvbG9yXCI+c2t5Ym94IGNvbG9yPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJza3lib3hTdHJlbmd0aFwiIHZhbHVlPXtzdHJlbmd0aH0gb25DaGFuZ2U9e2hhbmRsZVN0cmVuZ3RoQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwic2t5Ym94RXhwb25lbnRcIiB2YWx1ZT17ZXhwb25lbnR9IG9uQ2hhbmdlPXtoYW5kbGVFeHBvbmVudENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17c2hhZGluZ30gb25DaGFuZ2U9e2hhbmRsZVNoYWRpbmdDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgU2hhZGluZ1xuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtjYXZpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDYXZpdHlDaGFuZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F2aXR5XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cIlJpZGdlXCIgdmFsdWU9e3JpZGdlfSBvbkNoYW5nZT17aGFuZGxlUmlkZ2VDaGFuZ2V9IGVuYWJsZWQ9e2Nhdml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cIlZhbGxleVwiIHZhbHVlPXt2YWxsZXl9IG9uQ2hhbmdlPXtoYW5kbGVWYWxsZXlDaGFuZ2V9IGVuYWJsZWQ9e2Nhdml0eX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e291dGxpbmV9IG9uQ2hhbmdlPXtoYW5kbGVPdXRsaW5lQ2hhbmdlfSBlbmFibGVkPXtjYXZpdHl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgT3V0bGluZVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZsZXhXcmFwPVwid3JhcFwiIGdhcD1cIlNcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e2FtYmllbnRPY2NsdXNpb259IG9uQ2hhbmdlPXtoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFtYmllbnQgT2NjbHVzaW9uXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnRlbnNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRPY2NsdXNpb25JbnRlbnNpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkludGVuc2l0eUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2FtYmllbnRPY2NsdXNpb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1iaWVudE9jY2x1c2lvbkJsdXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkJsdXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXthbWJpZW50T2NjbHVzaW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJsdXJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD17YW1iaWVudE9jY2x1c2lvbiAmJiBzaGFkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbWJpbmUgd2l0aCBsaWdodFxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cbiAgICAgICAgPC9WaWV3PlxuICAgIClcbn1cblxuLy8gI2JlZ2luIHJlYnVpbGRGaWx0ZXJzKClcbi8qKlxuICogUmVwbGFjZSB0aGUgZmlsdGVycyBhbmQgdGhlaXIgcGFpbnRlcnMsIGJlY2F1c2UgYHNoYWRpbmdgLCBgY2F2aXR5YCBhbmQgYGFtYmllbnRPY2NsdXNpb25gXG4gKiBjYW4gb25seSBiZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICogVGhlIHByZXZpb3VzIG9uZXMsIGlmIGFueSwgYXJlIGRlbGV0ZWQuXG4gKi9cbmZ1bmN0aW9uIHJlYnVpbGRGaWx0ZXJzKFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgc2NlbmU6IFNjZW5lQmFzZSAmIFBhcnRpYWw8U2NlbmVGaWx0ZXJzPixcbiAgICBzZXR0aW5nczogU2V0dGluZ3MsXG4pOiBTY2VuZUZpbHRlcnMge1xuICAgIGNvbnN0IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfSA9IHNjZW5lXG4gICAgLy8gVGhlIHBhaW50ZXJzIGRvIG5vdCBvd24gdGhlIGZpbHRlcnMsIHNvIHdlIGRlbGV0ZSBib3RoLlxuICAgIHN0YXRlLnJlbW92ZUFsbCgpXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhzY2VuZS5maWx0ZXJzID8/IHt9KSkgZmlsdGVyLmRlbGV0ZSgpXG4gICAgY29uc3Qgc2hhZG93T3B0aW9ucyA9IHsgY2FtZXJhOiBzaGFkb3cuY2FtZXJhLCB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSB9XG4gICAgY29uc3QgY2F2aXR5ID0gc2V0dGluZ3MuY2F2aXR5ID8geyByaWRnZTogc2V0dGluZ3MucmlkZ2UsIHZhbGxleTogc2V0dGluZ3MudmFsbGV5LCBvdXRsaW5lOiBzZXR0aW5ncy5vdXRsaW5lIH0gOiB1bmRlZmluZWRcbiAgICBjb25zdCBhbWJpZW50T2NjbHVzaW9uID0gc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvblxuICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaW50ZW5zaXR5OiBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5LFxuICAgICAgICAgICAgICBibHVyOiBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uQmx1cixcbiAgICAgICAgICAgICAgY29tYmluZVdpdGhMaWdodDogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZFxuICAgIGNvbnN0IGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+ID0ge1xuICAgICAgICBza3lib3g6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxuICAgICAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU86IGRlZmVycmVkLnRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTyxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXG4gICAgICAgICAgICBza3lib3hUZXh0dXJlOiBza3lib3gsXG4gICAgICAgICAgICBza3lib3hTdHJlbmd0aDogc2V0dGluZ3Muc3RyZW5ndGgsXG4gICAgICAgICAgICBza3lib3hFeHBvbmVudDogc2V0dGluZ3MuZXhwb25lbnQsXG4gICAgICAgICAgICBsaWdodCxcbiAgICAgICAgICAgIHNoYWRvdzogc2hhZG93T3B0aW9ucyxcbiAgICAgICAgICAgIGNhdml0eSxcbiAgICAgICAgICAgIGFtYmllbnRPY2NsdXNpb24sXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBBIDHDlzEgY3ViZSB0ZXh0dXJlIGlzIGNyZWF0ZWQgZnJvbSB0aGlzIGNvbG9yLlxuICAgICAgICBjb2xvcjogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XG4gICAgICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXG4gICAgICAgICAgICB0ZXh0dXJlRGVwdGg6IGRlZmVycmVkLnRleHR1cmVEZXB0aCxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxuICAgICAgICAgICAgc2hhZGluZzogc2V0dGluZ3Muc2hhZGluZyxcbiAgICAgICAgICAgIHNreWJveFRleHR1cmU6IFwiIzdhZlwiLFxuICAgICAgICAgICAgc2t5Ym94U3RyZW5ndGg6IHNldHRpbmdzLnN0cmVuZ3RoLFxuICAgICAgICAgICAgc2t5Ym94RXhwb25lbnQ6IHNldHRpbmdzLmV4cG9uZW50LFxuICAgICAgICAgICAgbGlnaHQsXG4gICAgICAgICAgICBzaGFkb3c6IHNoYWRvd09wdGlvbnMsXG4gICAgICAgICAgICBjYXZpdHksXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxuICAgICAgICB9KSxcbiAgICB9XG4gICAgY29uc3QgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiA9IHtcbiAgICAgICAgc2t5Ym94OiBtYWtlUGFpbnRlckZpbHRlcihjb250ZXh0LCBkZWZlcnJlZCwgZmlsdGVycy5za3lib3gpLFxuICAgICAgICBjb2xvcjogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuY29sb3IpLFxuICAgIH1cbiAgICBhcHBseU1vZGUocGFpbnRlcnMsIHNldHRpbmdzLm1vZGUpXG4gICAgc3RhdGUuYWRkKHBhaW50ZXJzLnNreWJveCwgcGFpbnRlcnMuY29sb3IpXG4gICAgcmV0dXJuIHsgZmlsdGVycywgcGFpbnRlcnMgfVxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gbWFrZVBhaW50ZXJGaWx0ZXIoKVxuLyoqXG4gKiBUaGUgYWxiZWRvIGlzIHRoZSBpbnB1dCB0ZXh0dXJlIG9mIHRoZSBmaWx0ZXIuXG4gKi9cbmZ1bmN0aW9uIG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQ6IFRnZENvbnRleHQsIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nLCBmaWx0ZXI6IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZykge1xuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIHRleHR1cmU6IGRlZmVycmVkLnRleHR1cmVBbGJlZG8sXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICB9KVxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gbWFrZVNoYWRvd0NhbWVyYSgpXG4vKipcbiAqIFRoZSBsaWdodCBpcyBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIGluaXRpYWwgY2FtZXJhLFxuICogYXQgYSBkaXN0YW5jZSBvZiA4IGZyb20gaXQsIGFuZCBsb29rcyBhdCB0aGUgY2FtZXJhJ3MgdGFyZ2V0LlxuICovXG5mdW5jdGlvbiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXG4gICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRnZFZlYzModHJhbnNmby5wb3NpdGlvbilcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLmF4aXNZKS5zdWJ0cmFjdCh0cmFuc2ZvLmF4aXNYKS5ub3JtYWxpemUoKS5zY2FsZSg4KVxuICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFRnZFZlYzModHJhbnNmby5hY3R1YWxQb3NpdGlvbikuYWRkKG9mZnNldClcbiAgICBjb25zdCBkaXN0YW5jZSA9IG5ldyBUZ2RWZWMzKHBvc2l0aW9uKS5zdWJ0cmFjdCh0YXJnZXQpLnNpemVcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IGRpc3RhbmNlOiAwLCBwb3NpdGlvbiB9KSxcbiAgICAgICAgLy8gSGFsZiBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXNpYmxlIGFyZWEuXG4gICAgICAgIHNwYWNlSGVpZ2h0OiAzLFxuICAgICAgICBuZWFyOiBNYXRoLm1heCgwLjEsIGRpc3RhbmNlIC0gNSksXG4gICAgICAgIGZhcjogZGlzdGFuY2UgKyA1LFxuICAgIH0pXG4gICAgbGlnaHQudHJhbnNmby5sb29rQXQodGFyZ2V0KVxuICAgIC8vIFNxdWFyZSBzaGFkb3cgdGV4dHVyZS5cbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcbiAgICBsaWdodC5zY3JlZW5IZWlnaHQgPSAxXG4gICAgcmV0dXJuIGxpZ2h0XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBhcHBseU1vZGUoKVxuZnVuY3Rpb24gYXBwbHlNb2RlKHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4sIG1vZGU6IE1vZGUpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwYWludGVycykgYXMgTW9kZVtdKSB7XG4gICAgICAgIHBhaW50ZXJzW2tleV0uYWN0aXZlID0ga2V5ID09PSBtb2RlXG4gICAgfVxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gYXBwbHlTdHJlbmd0aCgpXG5mdW5jdGlvbiBhcHBseVN0cmVuZ3RoKGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBzdHJlbmd0aDogbnVtYmVyKSB7XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xuICAgICAgICBmaWx0ZXIuc2t5Ym94U3RyZW5ndGggPSBzdHJlbmd0aFxuICAgIH1cbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGFwcGx5RXhwb25lbnQoKVxuZnVuY3Rpb24gYXBwbHlFeHBvbmVudChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgZXhwb25lbnQ6IG51bWJlcikge1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcbiAgICAgICAgZmlsdGVyLnNreWJveEV4cG9uZW50ID0gZXhwb25lbnRcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBhcHBseUNhdml0eSgpXG5mdW5jdGlvbiBhcHBseUNhdml0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgcmlkZ2U6IG51bWJlciwgdmFsbGV5OiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XG4gICAgICAgIGZpbHRlci5jYXZpdHlSaWRnZSA9IHJpZGdlXG4gICAgICAgIGZpbHRlci5jYXZpdHlWYWxsZXkgPSB2YWxsZXlcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBhcHBseUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkoKVxuZnVuY3Rpb24gYXBwbHlBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5KGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBpbnRlbnNpdHk6IG51bWJlcikge1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcbiAgICAgICAgZmlsdGVyLmFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkgPSBpbnRlbnNpdHlcbiAgICB9XG59XG4vLyAjZW5kXG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENhbWVyYU9ydGhvZ3JhcGhpYyIsIlRnZEZpbHRlckRlZmVycmVkU2hhZGluZyIsIlRnZEdlb21ldHJ5Qm94IiwiVGdkTGlnaHQiLCJUZ2RNYXRlcmlhbEZsYXQiLCJUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlIiwiVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZyIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyU2hhZG93IiwiVGdkUGFpbnRlclNreWJveCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFRleHR1cmVDdWJlIiwiVGdkVHJhbnNmbyIsIlRnZFZlYzMiLCJ0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsIiwidGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld09wdGlvbnMiLCJWaWV3UGFuZWwiLCJWaWV3U3dpdGNoIiwiVmlldyIsIkhlbG1ldFVSTCIsIlN1emFubmVVUkwiLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJERUZBVUxUX1NFVFRJTkdTIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJyZWZTY2VuZSIsIl9nbHRmTWF0ZXJpYWxfcGJyTWV0YWxsaWNSb3VnaG5lc3NfYmFzZUNvbG9yVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfcGJyTWV0YWxsaWNSb3VnaG5lc3NfbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9vY2NsdXNpb25UZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9ub3JtYWxUZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9lbWlzc2l2ZVRleHR1cmUiLCJib3giLCJzdXphbm5lIiwiTWF0aCIsIl9hc3NldHNfZ2xiIiwiYXNzZXQiLCJnbHRmTWF0ZXJpYWwiLCJpbmRleEJhc2VDb2xvciIsImluZGV4TWV0YWxsaWNSb3VnaG5lc3MiLCJpbmRleE9jY2x1c2lvbiIsImluZGV4Tm9ybWFscyIsImluZGV4RW1pc3Npb24iLCJ0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MiLCJoZWxtZXQiLCJ1bmRlZmluZWQiLCJkZWZlcnJlZCIsInNreWJveCIsInNoYWRvdyIsIm1ha2VTaGFkb3dDYW1lcmEiLCJfc2hhZG93X2NhbWVyYV90cmFuc2ZvX2F4aXNaIiwibHgiLCJseSIsImx6IiwibGlnaHQiLCJzdGF0ZSIsImJhc2UiLCJyZWJ1aWxkRmlsdGVycyIsIl90aW1lIiwiZGVsdGEiLCJzcGVlZCIsInJlZkNvbnRleHQiLCJtb2RlIiwic2V0TW9kZSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJzdHJlbmd0aCIsInNldFN0cmVuZ3RoIiwiX1JlYWN0X3VzZVN0YXRlMiIsImV4cG9uZW50Iiwic2V0RXhwb25lbnQiLCJfUmVhY3RfdXNlU3RhdGUzIiwic2hhZGluZyIsInNldFNoYWRpbmciLCJfUmVhY3RfdXNlU3RhdGU0IiwiY2F2aXR5Iiwic2V0Q2F2aXR5IiwiX1JlYWN0X3VzZVN0YXRlNSIsInJpZGdlIiwic2V0UmlkZ2UiLCJfUmVhY3RfdXNlU3RhdGU2IiwidmFsbGV5Iiwic2V0VmFsbGV5IiwiX1JlYWN0X3VzZVN0YXRlNyIsIm91dGxpbmUiLCJzZXRPdXRsaW5lIiwiX1JlYWN0X3VzZVN0YXRlOCIsImFtYmllbnRPY2NsdXNpb24iLCJzZXRBbWJpZW50T2NjbHVzaW9uIiwiX1JlYWN0X3VzZVN0YXRlOSIsImFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkiLCJzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5IiwiX1JlYWN0X3VzZVN0YXRlMTAiLCJhbWJpZW50T2NjbHVzaW9uQmx1ciIsInNldEFtYmllbnRPY2NsdXNpb25CbHVyIiwiX1JlYWN0X3VzZVN0YXRlMTEiLCJhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCIsInNldEFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0Iiwic2V0dGluZ3MiLCJyZWJ1aWxkIiwiY2hhbmdlcyIsInNjZW5lIiwiT2JqZWN0IiwiaGFuZGxlTW9kZUNoYW5nZSIsInZhbHVlIiwiYXBwbHlNb2RlIiwiaGFuZGxlU3RyZW5ndGhDaGFuZ2UiLCJhcHBseVN0cmVuZ3RoIiwiaGFuZGxlRXhwb25lbnRDaGFuZ2UiLCJhcHBseUV4cG9uZW50IiwiaGFuZGxlQ2F2aXR5Q2hhbmdlIiwiaGFuZGxlT3V0bGluZUNoYW5nZSIsImhhbmRsZVNoYWRpbmdDaGFuZ2UiLCJoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ2hhbmdlIiwiaGFuZGxlQW1iaWVudE9jY2x1c2lvbkJsdXJDaGFuZ2UiLCJoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodENoYW5nZSIsImhhbmRsZUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHlDaGFuZ2UiLCJhcHBseUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkiLCJoYW5kbGVSaWRnZUNoYW5nZSIsImFwcGx5Q2F2aXR5IiwiaGFuZGxlVmFsbGV5Q2hhbmdlIiwib25SZWFkeSIsIl9zY2VuZV9maWx0ZXJzIiwiX2l0ZXJhdG9yRXJyb3IiLCJmaWx0ZXIiLCJzaGFkb3dPcHRpb25zIiwiZmlsdGVycyIsInBhaW50ZXJzIiwibWFrZVBhaW50ZXJGaWx0ZXIiLCJ0cmFuc2ZvIiwidGFyZ2V0Iiwib2Zmc2V0IiwicG9zaXRpb24iLCJkaXN0YW5jZSIsImtleSIsImludGVuc2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtB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