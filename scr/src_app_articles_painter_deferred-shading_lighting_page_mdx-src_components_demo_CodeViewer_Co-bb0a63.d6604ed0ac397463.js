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
    "Initializing WebGL": "    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // Orbits on the other side of the helmet, in the opposite direction.\n    // Without textures, metallic is 0 and roughness is 0.5.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }).orbitAroundY(Math.PI),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.6, 0.1, 0.3, 1] }),\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, suzanne, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    // The shadow camera depends on the initial position of the main camera.\n    context.camera.fitSpaceAtTarget(4, 4)\n    const shadow = new TgdPainterShadow(context, {\n        camera: makeShadowCamera(context),\n        meshes: [box, suzanne, helmet],\n    })\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = shadow.camera.transfo.axisZ\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })\n    // Nothing is painted (alpha = 0) where there is no mesh.\n    const state = new TgdPainterState(context, {\n        depth: \"off\",\n        cull: \"off\",\n        blend: \"alpha\",\n    })\n    const base: SceneBase = { deferred, skybox, light, shadow, state }\n    refScene.current = { ...base, ...rebuildFilters(context, base, DEFAULT_SETTINGS) }\n    context.add(\n        shadow,\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        state,\n        (_time: number, delta: number) => {\n            box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094)\n            const speed = -0.06247 * delta\n            suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84)\n        },\n    )\n    context.play()",
    "rebuildFilters()": "/**\n * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`\n * can only be set in the constructor.\n * The previous ones, if any, are deleted.\n */\nfunction rebuildFilters(\n    context: TgdContext,\n    scene: SceneBase & Partial<SceneFilters>,\n    settings: Settings,\n): SceneFilters {\n    const { deferred, skybox, light, shadow, state } = scene\n    // The painters do not own the filters, so we delete both.\n    state.removeAll()\n    for (const filter of Object.values(scene.filters ?? {})) filter.delete()\n    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }\n    const cavity = settings.cavity ? { ridge: settings.ridge, valley: settings.valley } : undefined\n    const ambientOcclusion = settings.ambientOcclusion\n        ? {\n              intensity: settings.ambientOcclusionIntensity,\n              blur: settings.ambientOcclusionBlur,\n              combineWithLight: settings.ambientOcclusionCombineWithLight,\n          }\n        : undefined\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: skybox,\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: \"#7af\",\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    applyMode(painters, settings.mode)\n    state.add(painters.skybox, painters.color)\n    return { filters, painters }\n}",
    "makePainterFilter()": "/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(\n    context: TgdContext,\n    deferred: TgdPainterDeferredShadingTextures,\n    filter: TgdFilterDeferredShading,\n) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}",
    "makeShadowCamera()": "/**\n * The light is at the top left of the initial camera,\n * at a distance of 8 from it, and looks at the camera's target.\n */\nfunction makeShadowCamera(context: TgdContext) {\n    const { transfo } = context.camera\n    const target = new TgdVec3(transfo.position)\n    const offset = new TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8)\n    const position = new TgdVec3(transfo.actualPosition).add(offset)\n    const distance = new TgdVec3(position).subtract(target).size\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position }),\n        // Half of the height of the visible area.\n        spaceHeight: 3,\n        near: Math.max(0.1, distance - 5),\n        far: distance + 5,\n    })\n    light.transfo.lookAt(target)\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    return light\n}",
    "applyMode()": "function applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}",
    "applyStrength()": "function applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}",
    "applyExponent()": "function applyExponent(filters: Record<Mode, TgdFilterDeferredShading>, exponent: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxExponent = exponent\n    }\n}",
    "applyCavity()": "function applyCavity(filters: Record<Mode, TgdFilterDeferredShading>, ridge: number, valley: number) {\n    for (const filter of Object.values(filters)) {\n        filter.cavityRidge = ridge\n        filter.cavityValley = valley\n    }\n}",
    "applyAmbientOcclusionIntensity()": "function applyAmbientOcclusionIntensity(filters: Record<Mode, TgdFilterDeferredShading>, intensity: number) {\n    for (const filter of Object.values(filters)) {\n        filter.ambientOcclusionIntensity = intensity\n    }\n}"
};
var FULL = "import {\n    TgdCameraOrthographic,\n    type TgdContext,\n    TgdFilterDeferredShading,\n    TgdGeometryBox,\n    TgdLight,\n    TgdMaterialFlat,\n    TgdMaterialFlatTexture,\n    type TgdMeshWithTextures,\n    TgdPainterDeferredShadingTextures,\n    TgdPainterFilter,\n    TgdPainterShadow,\n    TgdPainterSkybox,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdTextureCube,\n    TgdTransfo,\n    TgdVec3,\n    tgdCanvasCreateCreateGradientvertical,\n    tgdCanvasCreateGradientHorizontal,\n} from \"@tolokoban/tgd\"\nimport { ViewInputNumber, ViewOptions, ViewPanel, ViewSwitch } from \"@tolokoban/ui\"\nimport React from \"react\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport HelmetURL from \"@/assets/mesh/helmet.glb\"\nimport SuzanneURL from \"@/assets/mesh/suzanne-low.glb\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\n\ntype Mode = \"skybox\" | \"color\"\n\n/** What the user can change in the panel. */\ninterface Settings {\n    mode: Mode\n    strength: number\n    exponent: number\n    shading: boolean\n    cavity: boolean\n    ridge: number\n    valley: number\n    ambientOcclusion: boolean\n    ambientOcclusionIntensity: number\n    ambientOcclusionBlur: boolean\n    ambientOcclusionCombineWithLight: boolean\n}\n\nconst DEFAULT_SETTINGS: Settings = {\n    mode: \"skybox\",\n    strength: 1,\n    exponent: 2.2,\n    shading: true,\n    cavity: true,\n    ridge: 1,\n    valley: 1,\n    ambientOcclusion: true,\n    ambientOcclusionIntensity: 1,\n    ambientOcclusionBlur: true,\n    ambientOcclusionCombineWithLight: false,\n}\n\n/**\n * Everything the filters need, so we can rebuild them when `shading`, `cavity`\n * or `ambientOcclusion` changes.\n */\ninterface SceneBase {\n    deferred: TgdPainterDeferredShadingTextures\n    skybox: TgdTextureCube\n    light: TgdLight\n    shadow: TgdPainterShadow\n    /** Parent of the filter painters. */\n    state: TgdPainterState\n}\n\ninterface SceneFilters {\n    filters: Record<Mode, TgdFilterDeferredShading>\n    painters: Record<Mode, TgdPainterFilter>\n}\n\ntype Scene = SceneBase & SceneFilters\n\nfunction init(context: TgdContext, assets: Assets, refScene: { current: Scene | null }) {\n    // Metallic grows from left to right, and roughness from top to bottom.\n    const box: TgdMeshWithTextures = {\n        geometry: new TgdGeometryBox(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [1, 0.7, 0.2, 1] }),\n        textures: {\n            metallic: new TgdTexture2D(context, {\n                load: tgdCanvasCreateGradientHorizontal(64, [\"#000\", \"#fff\"]),\n            }),\n            roughness: new TgdTexture2D(context, {\n                load: tgdCanvasCreateCreateGradientvertical(64, [\"#000\", \"#fff\"]),\n            }),\n        },\n    }\n    // Orbits on the other side of the helmet, in the opposite direction.\n    // Without textures, metallic is 0 and roughness is 0.5.\n    const suzanne: TgdMeshWithTextures = {\n        geometry: assets.glb.suzanne.makeGeometry(),\n        transfo: new TgdTransfo({ position: [0, 0, 0], distance: 2 }).orbitAroundY(Math.PI),\n        visible: true,\n        material: new TgdMaterialFlat({ color: [0.6, 0.1, 0.3, 1] }),\n    }\n    // glTF stores metallic in BLUE and roughness in GREEN.\n    const { helmet: asset } = assets.glb\n    const gltfMaterial = asset.getMaterial(0)\n    const indexBaseColor = gltfMaterial.pbrMetallicRoughness?.baseColorTexture?.index ?? 0\n    const indexMetallicRoughness = gltfMaterial.pbrMetallicRoughness?.metallicRoughnessTexture?.index ?? 0\n    const indexOcclusion = gltfMaterial.occlusionTexture?.index ?? 0\n    const indexNormals = gltfMaterial.normalTexture?.index ?? 0\n    // The emission texture is optional in glTF.\n    const indexEmission = gltfMaterial.emissiveTexture?.index\n    const textureMetallicRoughness = asset.createTexture2D(context, indexMetallicRoughness)\n    const helmet: TgdMeshWithTextures = {\n        geometry: asset.makeGeometry(),\n        transfo: asset.createTransfoFromNode(asset.getNode(0)),\n        visible: true,\n        material: new TgdMaterialFlatTexture({\n            texture: asset.createTexture2D(context, indexBaseColor),\n        }),\n        textures: {\n            normals: asset.createTexture2D(context, indexNormals),\n            metallic: textureMetallicRoughness,\n            metallicChannel: \"b\",\n            roughness: textureMetallicRoughness,\n            roughnessChannel: \"g\",\n            bakedAO: asset.createTexture2D(context, indexOcclusion),\n            bakedAOChannel: \"r\",\n            emission: indexEmission === undefined ? undefined : asset.createTexture2D(context, indexEmission),\n        },\n    }\n    const deferred = new TgdPainterDeferredShadingTextures(context, { meshes: [box, suzanne, helmet] })\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    // The shadow camera depends on the initial position of the main camera.\n    context.camera.fitSpaceAtTarget(4, 4)\n    const shadow = new TgdPainterShadow(context, {\n        camera: makeShadowCamera(context),\n        meshes: [box, suzanne, helmet],\n    })\n    // The light camera looks toward its -Z axis.\n    const [lx, ly, lz] = shadow.camera.transfo.axisZ\n    const light = new TgdLight({ color: [1, 0.9, 0.8, 1], direction: [-lx, -ly, -lz] })\n    // Nothing is painted (alpha = 0) where there is no mesh.\n    const state = new TgdPainterState(context, {\n        depth: \"off\",\n        cull: \"off\",\n        blend: \"alpha\",\n    })\n    const base: SceneBase = { deferred, skybox, light, shadow, state }\n    refScene.current = { ...base, ...rebuildFilters(context, base, DEFAULT_SETTINGS) }\n    context.add(\n        shadow,\n        deferred,\n        new TgdPainterSkybox(context, { texture: skybox }),\n        state,\n        (_time: number, delta: number) => {\n            box.transfo.orbitAroundX(delta * 0.071).orbitAroundY(delta * 0.094)\n            const speed = -0.06247 * delta\n            suzanne.transfo.orbitAroundX(speed * 0.63).orbitAroundY(speed * 0.84)\n        },\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    const refContext = React.useRef<TgdContext | null>(null)\n    const refScene = React.useRef<Scene | null>(null)\n    const [mode, setMode] = React.useState<Mode>(DEFAULT_SETTINGS.mode)\n    const [strength, setStrength] = React.useState(DEFAULT_SETTINGS.strength)\n    const [exponent, setExponent] = React.useState(DEFAULT_SETTINGS.exponent)\n    const [shading, setShading] = React.useState(DEFAULT_SETTINGS.shading)\n    const [cavity, setCavity] = React.useState(DEFAULT_SETTINGS.cavity)\n    const [ridge, setRidge] = React.useState(DEFAULT_SETTINGS.ridge)\n    const [valley, setValley] = React.useState(DEFAULT_SETTINGS.valley)\n    const [ambientOcclusion, setAmbientOcclusion] = React.useState(DEFAULT_SETTINGS.ambientOcclusion)\n    const [ambientOcclusionIntensity, setAmbientOcclusionIntensity] = React.useState(\n        DEFAULT_SETTINGS.ambientOcclusionIntensity,\n    )\n    const [ambientOcclusionBlur, setAmbientOcclusionBlur] = React.useState(DEFAULT_SETTINGS.ambientOcclusionBlur)\n    const [ambientOcclusionCombineWithLight, setAmbientOcclusionCombineWithLight] = React.useState(\n        DEFAULT_SETTINGS.ambientOcclusionCombineWithLight,\n    )\n    const settings: Settings = {\n        mode,\n        strength,\n        exponent,\n        shading,\n        cavity,\n        ridge,\n        valley,\n        ambientOcclusion,\n        ambientOcclusionIntensity,\n        ambientOcclusionBlur,\n        ambientOcclusionCombineWithLight,\n    }\n    /** Some options can only be set in the constructor of the filters. */\n    const rebuild = (changes: Partial<Settings>) => {\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        Object.assign(scene, rebuildFilters(context, scene, { ...settings, ...changes }))\n        context.paint()\n    }\n    const handleModeChange = (value: Mode) => {\n        setMode(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyMode(scene.painters, value)\n        context.paint()\n    }\n    const handleStrengthChange = (value: number) => {\n        setStrength(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyStrength(scene.filters, value)\n        context.paint()\n    }\n    const handleExponentChange = (value: number) => {\n        setExponent(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyExponent(scene.filters, value)\n        context.paint()\n    }\n    const handleCavityChange = (value: boolean) => {\n        setCavity(value)\n        rebuild({ cavity: value })\n    }\n    const handleShadingChange = (value: boolean) => {\n        setShading(value)\n        rebuild({ shading: value })\n    }\n    const handleAmbientOcclusionChange = (value: boolean) => {\n        setAmbientOcclusion(value)\n        rebuild({ ambientOcclusion: value })\n    }\n    const handleAmbientOcclusionBlurChange = (value: boolean) => {\n        setAmbientOcclusionBlur(value)\n        rebuild({ ambientOcclusionBlur: value })\n    }\n    const handleAmbientOcclusionCombineWithLightChange = (value: boolean) => {\n        setAmbientOcclusionCombineWithLight(value)\n        rebuild({ ambientOcclusionCombineWithLight: value })\n    }\n    const handleAmbientOcclusionIntensityChange = (value: number) => {\n        setAmbientOcclusionIntensity(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyAmbientOcclusionIntensity(scene.filters, value)\n        context.paint()\n    }\n    const handleRidgeChange = (value: number) => {\n        setRidge(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyCavity(scene.filters, value, valley)\n        context.paint()\n    }\n    const handleValleyChange = (value: number) => {\n        setValley(value)\n        const context = refContext.current\n        const scene = refScene.current\n        if (!context || !scene) return\n\n        applyCavity(scene.filters, ridge, value)\n        context.paint()\n    }\n    return (\n        <View\n            onReady={(context: TgdContext, assets: Assets) => {\n                refContext.current = context\n                init(context, assets, refScene)\n            }}\n            assets={{\n                glb: { helmet: HelmetURL, suzanne: SuzanneURL },\n                image: {\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            controller={{ inertiaOrbit: 1000 }}\n            gizmo>\n            <ViewPanel display=\"flex\" flexDirection=\"column\" gap=\"S\">\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewOptions value={mode} onChange={handleModeChange}>\n                        <div key=\"skybox\">skybox texture</div>\n                        <div key=\"color\">skybox color</div>\n                    </ViewOptions>\n                    <ViewInputNumber label=\"skyboxStrength\" value={strength} onChange={handleStrengthChange} />\n                    <ViewInputNumber label=\"skyboxExponent\" value={exponent} onChange={handleExponentChange} />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewSwitch value={shading} onChange={handleShadingChange}>\n                        Shading\n                    </ViewSwitch>\n                    <ViewSwitch value={cavity} onChange={handleCavityChange}>\n                        Cavity\n                    </ViewSwitch>\n                    <ViewInputNumber label=\"Ridge\" value={ridge} onChange={handleRidgeChange} enabled={cavity} />\n                    <ViewInputNumber label=\"Valley\" value={valley} onChange={handleValleyChange} enabled={cavity} />\n                </ViewPanel>\n                <ViewPanel display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\" flexWrap=\"wrap\" gap=\"S\">\n                    <ViewSwitch value={ambientOcclusion} onChange={handleAmbientOcclusionChange}>\n                        Ambient Occlusion\n                    </ViewSwitch>\n                    <ViewInputNumber\n                        label=\"Intensity\"\n                        value={ambientOcclusionIntensity}\n                        onChange={handleAmbientOcclusionIntensityChange}\n                        enabled={ambientOcclusion}\n                    />\n                    <ViewSwitch\n                        value={ambientOcclusionBlur}\n                        onChange={handleAmbientOcclusionBlurChange}\n                        enabled={ambientOcclusion}>\n                        Blur\n                    </ViewSwitch>\n                    <ViewSwitch\n                        value={ambientOcclusionCombineWithLight}\n                        onChange={handleAmbientOcclusionCombineWithLightChange}\n                        enabled={ambientOcclusion && shading}>\n                        Combine with light\n                    </ViewSwitch>\n                </ViewPanel>\n            </ViewPanel>\n        </View>\n    )\n}\n\n/**\n * Replace the filters and their painters, because `shading`, `cavity` and `ambientOcclusion`\n * can only be set in the constructor.\n * The previous ones, if any, are deleted.\n */\nfunction rebuildFilters(\n    context: TgdContext,\n    scene: SceneBase & Partial<SceneFilters>,\n    settings: Settings,\n): SceneFilters {\n    const { deferred, skybox, light, shadow, state } = scene\n    // The painters do not own the filters, so we delete both.\n    state.removeAll()\n    for (const filter of Object.values(scene.filters ?? {})) filter.delete()\n    const shadowOptions = { camera: shadow.camera, texture: shadow.texture }\n    const cavity = settings.cavity ? { ridge: settings.ridge, valley: settings.valley } : undefined\n    const ambientOcclusion = settings.ambientOcclusion\n        ? {\n              intensity: settings.ambientOcclusionIntensity,\n              blur: settings.ambientOcclusionBlur,\n              combineWithLight: settings.ambientOcclusionCombineWithLight,\n          }\n        : undefined\n    const filters: Record<Mode, TgdFilterDeferredShading> = {\n        skybox: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: skybox,\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n        // A 1×1 cube texture is created from this color.\n        color: new TgdFilterDeferredShading(context, {\n            textureNormals: deferred.textureNormals,\n            textureDepth: deferred.textureDepth,\n            textureMetallicRoughnessSpecularBakedAO: deferred.textureMetallicRoughnessSpecularBakedAO,\n            shading: settings.shading,\n            skyboxTexture: \"#7af\",\n            skyboxStrength: settings.strength,\n            skyboxExponent: settings.exponent,\n            light,\n            shadow: shadowOptions,\n            cavity,\n            ambientOcclusion,\n        }),\n    }\n    const painters: Record<Mode, TgdPainterFilter> = {\n        skybox: makePainterFilter(context, deferred, filters.skybox),\n        color: makePainterFilter(context, deferred, filters.color),\n    }\n    applyMode(painters, settings.mode)\n    state.add(painters.skybox, painters.color)\n    return { filters, painters }\n}\n\n/**\n * The albedo is the input texture of the filter.\n */\nfunction makePainterFilter(\n    context: TgdContext,\n    deferred: TgdPainterDeferredShadingTextures,\n    filter: TgdFilterDeferredShading,\n) {\n    return new TgdPainterFilter(context, {\n        texture: deferred.textureAlbedo,\n        filters: [filter],\n        flipY: true,\n    })\n}\n\n/**\n * The light is at the top left of the initial camera,\n * at a distance of 8 from it, and looks at the camera's target.\n */\nfunction makeShadowCamera(context: TgdContext) {\n    const { transfo } = context.camera\n    const target = new TgdVec3(transfo.position)\n    const offset = new TgdVec3(transfo.axisY).subtract(transfo.axisX).normalize().scale(8)\n    const position = new TgdVec3(transfo.actualPosition).add(offset)\n    const distance = new TgdVec3(position).subtract(target).size\n    const light = new TgdCameraOrthographic({\n        transfo: new TgdTransfo({ distance: 0, position }),\n        // Half of the height of the visible area.\n        spaceHeight: 3,\n        near: Math.max(0.1, distance - 5),\n        far: distance + 5,\n    })\n    light.transfo.lookAt(target)\n    // Square shadow texture.\n    light.screenWidth = 1\n    light.screenHeight = 1\n    return light\n}\n\nfunction applyMode(painters: Record<Mode, TgdPainterFilter>, mode: Mode) {\n    for (const key of Object.keys(painters) as Mode[]) {\n        painters[key].active = key === mode\n    }\n}\n\nfunction applyStrength(filters: Record<Mode, TgdFilterDeferredShading>, strength: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxStrength = strength\n    }\n}\n\nfunction applyExponent(filters: Record<Mode, TgdFilterDeferredShading>, exponent: number) {\n    for (const filter of Object.values(filters)) {\n        filter.skyboxExponent = exponent\n    }\n}\n\nfunction applyCavity(filters: Record<Mode, TgdFilterDeferredShading>, ridge: number, valley: number) {\n    for (const filter of Object.values(filters)) {\n        filter.cavityRidge = ridge\n        filter.cavityValley = valley\n    }\n}\n\nfunction applyAmbientOcclusionIntensity(filters: Record<Mode, TgdFilterDeferredShading>, intensity: number) {\n    for (const filter of Object.values(filters)) {\n        filter.ambientOcclusionIntensity = intensity\n    }\n}\n";
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
    var deferred = new _tolokoban_tgd__rspack_import_1.TgdPainterDeferredShadingTextures(context, {
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
    var _React_useState7 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusion), 2), ambientOcclusion = _React_useState7[0], setAmbientOcclusion = _React_useState7[1];
    var _React_useState8 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionIntensity), 2), ambientOcclusionIntensity = _React_useState8[0], setAmbientOcclusionIntensity = _React_useState8[1];
    var _React_useState9 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionBlur), 2), ambientOcclusionBlur = _React_useState9[0], setAmbientOcclusionBlur = _React_useState9[1];
    var _React_useState10 = _sliced_to_array(react__rspack_import_3_default().useState(DEFAULT_SETTINGS.ambientOcclusionCombineWithLight), 2), ambientOcclusionCombineWithLight = _React_useState10[0], setAmbientOcclusionCombineWithLight = _React_useState10[1];
    var settings = {
        mode: mode,
        strength: strength,
        exponent: exponent,
        shading: shading,
        cavity: cavity,
        ridge: ridge,
        valley: valley,
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
                                    lineNumber: 315,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                                    children: "skybox color"
                                }, "color", false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                                    lineNumber: 316,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 314,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "skyboxStrength",
                            value: strength,
                            onChange: handleStrengthChange
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 318,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "skyboxExponent",
                            value: exponent,
                            onChange: handleExponentChange
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 319,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 313,
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
                            lineNumber: 322,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: cavity,
                            onChange: handleCavityChange,
                            children: "Cavity"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 325,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Ridge",
                            value: ridge,
                            onChange: handleRidgeChange,
                            enabled: cavity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 328,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Valley",
                            value: valley,
                            onChange: handleValleyChange,
                            enabled: cavity
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 329,
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
                            value: ambientOcclusion,
                            onChange: handleAmbientOcclusionChange,
                            children: "Ambient Occlusion"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 332,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewInputNumber, {
                            label: "Intensity",
                            value: ambientOcclusionIntensity,
                            onChange: handleAmbientOcclusionIntensityChange,
                            enabled: ambientOcclusion
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 335,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: ambientOcclusionBlur,
                            onChange: handleAmbientOcclusionBlurChange,
                            enabled: ambientOcclusion,
                            children: "Blur"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 341,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewSwitch, {
                            value: ambientOcclusionCombineWithLight,
                            onChange: handleAmbientOcclusionCombineWithLightChange,
                            enabled: ambientOcclusion && shading,
                            children: "Combine with light"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                            lineNumber: 347,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
                    lineNumber: 331,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
            lineNumber: 312,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/_lighting/lighting.demo.tsx",
        lineNumber: 294,
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
        valley: settings.valley
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
                        children: "TgdPainterDeferredShadingTextures"
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
                    " (default: 1) set the strength of each side and can be changed at any time.\nSet them to 0 to disable the effect."
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
                        lineNumber: 26,
                        columnNumber: 5
                    }, this),
                    " to skip the lighting: the albedo is used as is, but ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "cavity"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 26,
                        columnNumber: 74
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "shadow"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 26,
                        columnNumber: 87
                    }, this),
                    " are still applied."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 26,
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
                        lineNumber: 31,
                        columnNumber: 1
                    }, this),
                    " needs ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "textureNormals"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                        lineNumber: 31,
                        columnNumber: 16
                    }, this),
                    ": without it, the cavity is disabled and an error is printed in the console."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 28,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "The specular parameter sets the reflectance of non metallic surfaces: 0.5 gives the usual 4%."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 33,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Where nothing has been painted, the filter outputs a transparent black. The demo uses an alpha blending\nto see the skybox behind the meshes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 35,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "On the box, metallic grows from left to right, and roughness from top to bottom."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 38,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 40,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter/deferred-shading",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                    lineNumber: 42,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/deferred-shading/lighting/page.mdx",
                lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9kZWZlcnJlZC1zaGFkaW5nX2xpZ2h0aW5nX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Dby1iYjBhNjMuZDY2MDRlZDBhYzM5NzQ2My5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2RlZmVycmVkLXNoYWRpbmcvbGlnaHRpbmcvX2xpZ2h0aW5nL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL19saWdodGluZy9saWdodGluZy5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9kZWZlcnJlZC1zaGFkaW5nL2xpZ2h0aW5nL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9saWdodGluZy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLjcsIDAuMiwgMV0gfSksXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgLy8gT3JiaXRzIG9uIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBoZWxtZXQsIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXFxuICAgIC8vIFdpdGhvdXQgdGV4dHVyZXMsIG1ldGFsbGljIGlzIDAgYW5kIHJvdWdobmVzcyBpcyAwLjUuXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KS5vcmJpdEFyb3VuZFkoTWF0aC5QSSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuNiwgMC4xLCAwLjMsIDFdIH0pLFxcbiAgICB9XFxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXFxuICAgIGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApXFxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE9jY2x1c2lvbiA9IGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIC8vIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIGlzIG9wdGlvbmFsIGluIGdsVEYuXFxuICAgIGNvbnN0IGluZGV4RW1pc3Npb24gPSBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleFxcbiAgICBjb25zdCB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MgPSBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhNZXRhbGxpY1JvdWdobmVzcylcXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4QmFzZUNvbG9yKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBub3JtYWxzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhOb3JtYWxzKSxcXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXFxcImJcXFwiLFxcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFxcXCJnXFxcIixcXG4gICAgICAgICAgICBiYWtlZEFPOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhPY2NsdXNpb24pLFxcbiAgICAgICAgICAgIGJha2VkQU9DaGFubmVsOiBcXFwiclxcXCIsXFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdIH0pXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIC8vIFRoZSBzaGFkb3cgY2FtZXJhIGRlcGVuZHMgb24gdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1haW4gY2FtZXJhLlxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDQsIDQpXFxuICAgIGNvbnN0IHNoYWRvdyA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbWFrZVNoYWRvd0NhbWVyYShjb250ZXh0KSxcXG4gICAgICAgIG1lc2hlczogW2JveCwgc3V6YW5uZSwgaGVsbWV0XSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXFxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IHNoYWRvdy5jYW1lcmEudHJhbnNmby5heGlzWlxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RMaWdodCh7IGNvbG9yOiBbMSwgMC45LCAwLjgsIDFdLCBkaXJlY3Rpb246IFstbHgsIC1seSwgLWx6XSB9KVxcbiAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhc2U6IFNjZW5lQmFzZSA9IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfVxcbiAgICByZWZTY2VuZS5jdXJyZW50ID0geyAuLi5iYXNlLCAuLi5yZWJ1aWxkRmlsdGVycyhjb250ZXh0LCBiYXNlLCBERUZBVUxUX1NFVFRJTkdTKSB9XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgc2hhZG93LFxcbiAgICAgICAgZGVmZXJyZWQsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7IHRleHR1cmU6IHNreWJveCB9KSxcXG4gICAgICAgIHN0YXRlLFxcbiAgICAgICAgKF90aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjA3MSkub3JiaXRBcm91bmRZKGRlbHRhICogMC4wOTQpXFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAtMC4wNjI0NyAqIGRlbHRhXFxuICAgICAgICAgICAgc3V6YW5uZS50cmFuc2ZvLm9yYml0QXJvdW5kWChzcGVlZCAqIDAuNjMpLm9yYml0QXJvdW5kWShzcGVlZCAqIDAuODQpXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXCIsXCJyZWJ1aWxkRmlsdGVycygpXCI6XCIvKipcXG4gKiBSZXBsYWNlIHRoZSBmaWx0ZXJzIGFuZCB0aGVpciBwYWludGVycywgYmVjYXVzZSBgc2hhZGluZ2AsIGBjYXZpdHlgIGFuZCBgYW1iaWVudE9jY2x1c2lvbmBcXG4gKiBjYW4gb25seSBiZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yLlxcbiAqIFRoZSBwcmV2aW91cyBvbmVzLCBpZiBhbnksIGFyZSBkZWxldGVkLlxcbiAqL1xcbmZ1bmN0aW9uIHJlYnVpbGRGaWx0ZXJzKFxcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICBzY2VuZTogU2NlbmVCYXNlICYgUGFydGlhbDxTY2VuZUZpbHRlcnM+LFxcbiAgICBzZXR0aW5nczogU2V0dGluZ3MsXFxuKTogU2NlbmVGaWx0ZXJzIHtcXG4gICAgY29uc3QgeyBkZWZlcnJlZCwgc2t5Ym94LCBsaWdodCwgc2hhZG93LCBzdGF0ZSB9ID0gc2NlbmVcXG4gICAgLy8gVGhlIHBhaW50ZXJzIGRvIG5vdCBvd24gdGhlIGZpbHRlcnMsIHNvIHdlIGRlbGV0ZSBib3RoLlxcbiAgICBzdGF0ZS5yZW1vdmVBbGwoKVxcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKHNjZW5lLmZpbHRlcnMgPz8ge30pKSBmaWx0ZXIuZGVsZXRlKClcXG4gICAgY29uc3Qgc2hhZG93T3B0aW9ucyA9IHsgY2FtZXJhOiBzaGFkb3cuY2FtZXJhLCB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSB9XFxuICAgIGNvbnN0IGNhdml0eSA9IHNldHRpbmdzLmNhdml0eSA/IHsgcmlkZ2U6IHNldHRpbmdzLnJpZGdlLCB2YWxsZXk6IHNldHRpbmdzLnZhbGxleSB9IDogdW5kZWZpbmVkXFxuICAgIGNvbnN0IGFtYmllbnRPY2NsdXNpb24gPSBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uXFxuICAgICAgICA/IHtcXG4gICAgICAgICAgICAgIGludGVuc2l0eTogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcXG4gICAgICAgICAgICAgIGJsdXI6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25CbHVyLFxcbiAgICAgICAgICAgICAgY29tYmluZVdpdGhMaWdodDogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXFxuICAgICAgICAgIH1cXG4gICAgICAgIDogdW5kZWZpbmVkXFxuICAgIGNvbnN0IGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+ID0ge1xcbiAgICAgICAgc2t5Ym94OiBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXFxuICAgICAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXFxuICAgICAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXFxuICAgICAgICAgICAgc2hhZGluZzogc2V0dGluZ3Muc2hhZGluZyxcXG4gICAgICAgICAgICBza3lib3hUZXh0dXJlOiBza3lib3gsXFxuICAgICAgICAgICAgc2t5Ym94U3RyZW5ndGg6IHNldHRpbmdzLnN0cmVuZ3RoLFxcbiAgICAgICAgICAgIHNreWJveEV4cG9uZW50OiBzZXR0aW5ncy5leHBvbmVudCxcXG4gICAgICAgICAgICBsaWdodCxcXG4gICAgICAgICAgICBzaGFkb3c6IHNoYWRvd09wdGlvbnMsXFxuICAgICAgICAgICAgY2F2aXR5LFxcbiAgICAgICAgICAgIGFtYmllbnRPY2NsdXNpb24sXFxuICAgICAgICB9KSxcXG4gICAgICAgIC8vIEEgMcOXMSBjdWJlIHRleHR1cmUgaXMgY3JlYXRlZCBmcm9tIHRoaXMgY29sb3IuXFxuICAgICAgICBjb2xvcjogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxcbiAgICAgICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogXFxcIiM3YWZcXFwiLFxcbiAgICAgICAgICAgIHNreWJveFN0cmVuZ3RoOiBzZXR0aW5ncy5zdHJlbmd0aCxcXG4gICAgICAgICAgICBza3lib3hFeHBvbmVudDogc2V0dGluZ3MuZXhwb25lbnQsXFxuICAgICAgICAgICAgbGlnaHQsXFxuICAgICAgICAgICAgc2hhZG93OiBzaGFkb3dPcHRpb25zLFxcbiAgICAgICAgICAgIGNhdml0eSxcXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxcbiAgICAgICAgfSksXFxuICAgIH1cXG4gICAgY29uc3QgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiA9IHtcXG4gICAgICAgIHNreWJveDogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuc2t5Ym94KSxcXG4gICAgICAgIGNvbG9yOiBtYWtlUGFpbnRlckZpbHRlcihjb250ZXh0LCBkZWZlcnJlZCwgZmlsdGVycy5jb2xvciksXFxuICAgIH1cXG4gICAgYXBwbHlNb2RlKHBhaW50ZXJzLCBzZXR0aW5ncy5tb2RlKVxcbiAgICBzdGF0ZS5hZGQocGFpbnRlcnMuc2t5Ym94LCBwYWludGVycy5jb2xvcilcXG4gICAgcmV0dXJuIHsgZmlsdGVycywgcGFpbnRlcnMgfVxcbn1cIixcIm1ha2VQYWludGVyRmlsdGVyKClcIjpcIi8qKlxcbiAqIFRoZSBhbGJlZG8gaXMgdGhlIGlucHV0IHRleHR1cmUgb2YgdGhlIGZpbHRlci5cXG4gKi9cXG5mdW5jdGlvbiBtYWtlUGFpbnRlckZpbHRlcihcXG4gICAgY29udGV4dDogVGdkQ29udGV4dCxcXG4gICAgZGVmZXJyZWQ6IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdUZXh0dXJlcyxcXG4gICAgZmlsdGVyOiBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXFxuKSB7XFxuICAgIHJldHVybiBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxcbiAgICAgICAgZmlsdGVyczogW2ZpbHRlcl0sXFxuICAgICAgICBmbGlwWTogdHJ1ZSxcXG4gICAgfSlcXG59XCIsXCJtYWtlU2hhZG93Q2FtZXJhKClcIjpcIi8qKlxcbiAqIFRoZSBsaWdodCBpcyBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIGluaXRpYWwgY2FtZXJhLFxcbiAqIGF0IGEgZGlzdGFuY2Ugb2YgOCBmcm9tIGl0LCBhbmQgbG9va3MgYXQgdGhlIGNhbWVyYSdzIHRhcmdldC5cXG4gKi9cXG5mdW5jdGlvbiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLnBvc2l0aW9uKVxcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLmF4aXNZKS5zdWJ0cmFjdCh0cmFuc2ZvLmF4aXNYKS5ub3JtYWxpemUoKS5zY2FsZSg4KVxcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8uYWN0dWFsUG9zaXRpb24pLmFkZChvZmZzZXQpXFxuICAgIGNvbnN0IGRpc3RhbmNlID0gbmV3IFRnZFZlYzMocG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldCkuc2l6ZVxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb24gfSksXFxuICAgICAgICAvLyBIYWxmIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpc2libGUgYXJlYS5cXG4gICAgICAgIHNwYWNlSGVpZ2h0OiAzLFxcbiAgICAgICAgbmVhcjogTWF0aC5tYXgoMC4xLCBkaXN0YW5jZSAtIDUpLFxcbiAgICAgICAgZmFyOiBkaXN0YW5jZSArIDUsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICByZXR1cm4gbGlnaHRcXG59XCIsXCJhcHBseU1vZGUoKVwiOlwiZnVuY3Rpb24gYXBwbHlNb2RlKHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4sIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFpbnRlcnMpIGFzIE1vZGVbXSkge1xcbiAgICAgICAgcGFpbnRlcnNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcXG4gICAgfVxcbn1cIixcImFwcGx5U3RyZW5ndGgoKVwiOlwiZnVuY3Rpb24gYXBwbHlTdHJlbmd0aChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgc3RyZW5ndGg6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuc2t5Ym94U3RyZW5ndGggPSBzdHJlbmd0aFxcbiAgICB9XFxufVwiLFwiYXBwbHlFeHBvbmVudCgpXCI6XCJmdW5jdGlvbiBhcHBseUV4cG9uZW50KGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBleHBvbmVudDogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5za3lib3hFeHBvbmVudCA9IGV4cG9uZW50XFxuICAgIH1cXG59XCIsXCJhcHBseUNhdml0eSgpXCI6XCJmdW5jdGlvbiBhcHBseUNhdml0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgcmlkZ2U6IG51bWJlciwgdmFsbGV5OiBudW1iZXIpIHtcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xcbiAgICAgICAgZmlsdGVyLmNhdml0eVJpZGdlID0gcmlkZ2VcXG4gICAgICAgIGZpbHRlci5jYXZpdHlWYWxsZXkgPSB2YWxsZXlcXG4gICAgfVxcbn1cIixcImFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSgpXCI6XCJmdW5jdGlvbiBhcHBseUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkoZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4sIGludGVuc2l0eTogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5ID0gaW50ZW5zaXR5XFxuICAgIH1cXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgVGdkTGlnaHQsXFxuICAgIFRnZE1hdGVyaWFsRmxhdCxcXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcXG4gICAgdHlwZSBUZ2RNZXNoV2l0aFRleHR1cmVzLFxcbiAgICBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJTaGFkb3csXFxuICAgIFRnZFBhaW50ZXJTa3lib3gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcXG4gICAgVGdkVHJhbnNmbyxcXG4gICAgVGdkVmVjMyxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlQ3JlYXRlR3JhZGllbnR2ZXJ0aWNhbCxcXG4gICAgdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IHsgVmlld0lucHV0TnVtYmVyLCBWaWV3T3B0aW9ucywgVmlld1BhbmVsLCBWaWV3U3dpdGNoIH0gZnJvbSBcXFwiQHRvbG9rb2Jhbi91aVxcXCJcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2hlbG1ldC5nbGJcXFwiXFxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcXFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLWxvdy5nbGJcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuXFxudHlwZSBNb2RlID0gXFxcInNreWJveFxcXCIgfCBcXFwiY29sb3JcXFwiXFxuXFxuLyoqIFdoYXQgdGhlIHVzZXIgY2FuIGNoYW5nZSBpbiB0aGUgcGFuZWwuICovXFxuaW50ZXJmYWNlIFNldHRpbmdzIHtcXG4gICAgbW9kZTogTW9kZVxcbiAgICBzdHJlbmd0aDogbnVtYmVyXFxuICAgIGV4cG9uZW50OiBudW1iZXJcXG4gICAgc2hhZGluZzogYm9vbGVhblxcbiAgICBjYXZpdHk6IGJvb2xlYW5cXG4gICAgcmlkZ2U6IG51bWJlclxcbiAgICB2YWxsZXk6IG51bWJlclxcbiAgICBhbWJpZW50T2NjbHVzaW9uOiBib29sZWFuXFxuICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHk6IG51bWJlclxcbiAgICBhbWJpZW50T2NjbHVzaW9uQmx1cjogYm9vbGVhblxcbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogYm9vbGVhblxcbn1cXG5cXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcXG4gICAgbW9kZTogXFxcInNreWJveFxcXCIsXFxuICAgIHN0cmVuZ3RoOiAxLFxcbiAgICBleHBvbmVudDogMi4yLFxcbiAgICBzaGFkaW5nOiB0cnVlLFxcbiAgICBjYXZpdHk6IHRydWUsXFxuICAgIHJpZGdlOiAxLFxcbiAgICB2YWxsZXk6IDEsXFxuICAgIGFtYmllbnRPY2NsdXNpb246IHRydWUsXFxuICAgIGFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHk6IDEsXFxuICAgIGFtYmllbnRPY2NsdXNpb25CbHVyOiB0cnVlLFxcbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogZmFsc2UsXFxufVxcblxcbi8qKlxcbiAqIEV2ZXJ5dGhpbmcgdGhlIGZpbHRlcnMgbmVlZCwgc28gd2UgY2FuIHJlYnVpbGQgdGhlbSB3aGVuIGBzaGFkaW5nYCwgYGNhdml0eWBcXG4gKiBvciBgYW1iaWVudE9jY2x1c2lvbmAgY2hhbmdlcy5cXG4gKi9cXG5pbnRlcmZhY2UgU2NlbmVCYXNlIHtcXG4gICAgZGVmZXJyZWQ6IFRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdUZXh0dXJlc1xcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXFxuICAgIGxpZ2h0OiBUZ2RMaWdodFxcbiAgICBzaGFkb3c6IFRnZFBhaW50ZXJTaGFkb3dcXG4gICAgLyoqIFBhcmVudCBvZiB0aGUgZmlsdGVyIHBhaW50ZXJzLiAqL1xcbiAgICBzdGF0ZTogVGdkUGFpbnRlclN0YXRlXFxufVxcblxcbmludGVyZmFjZSBTY2VuZUZpbHRlcnMge1xcbiAgICBmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPlxcbiAgICBwYWludGVyczogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJGaWx0ZXI+XFxufVxcblxcbnR5cGUgU2NlbmUgPSBTY2VuZUJhc2UgJiBTY2VuZUZpbHRlcnNcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzLCByZWZTY2VuZTogeyBjdXJyZW50OiBTY2VuZSB8IG51bGwgfSkge1xcbiAgICAvLyBNZXRhbGxpYyBncm93cyBmcm9tIGxlZnQgdG8gcmlnaHQsIGFuZCByb3VnaG5lc3MgZnJvbSB0b3AgdG8gYm90dG9tLlxcbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5Qm94KCksXFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHsgY29sb3I6IFsxLCAwLjcsIDAuMiwgMV0gfSksXFxuICAgICAgICB0ZXh0dXJlczoge1xcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgbG9hZDogdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICByb3VnaG5lc3M6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsKDY0LCBbXFxcIiMwMDBcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgLy8gT3JiaXRzIG9uIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBoZWxtZXQsIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXFxuICAgIC8vIFdpdGhvdXQgdGV4dHVyZXMsIG1ldGFsbGljIGlzIDAgYW5kIHJvdWdobmVzcyBpcyAwLjUuXFxuICAgIGNvbnN0IHN1emFubmU6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XFxuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KS5vcmJpdEFyb3VuZFkoTWF0aC5QSSksXFxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuNiwgMC4xLCAwLjMsIDFdIH0pLFxcbiAgICB9XFxuICAgIC8vIGdsVEYgc3RvcmVzIG1ldGFsbGljIGluIEJMVUUgYW5kIHJvdWdobmVzcyBpbiBHUkVFTi5cXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXFxuICAgIGNvbnN0IGdsdGZNYXRlcmlhbCA9IGFzc2V0LmdldE1hdGVyaWFsKDApXFxuICAgIGNvbnN0IGluZGV4QmFzZUNvbG9yID0gZ2x0Zk1hdGVyaWFsLnBick1ldGFsbGljUm91Z2huZXNzPy5iYXNlQ29sb3JUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxcbiAgICBjb25zdCBpbmRleE9jY2x1c2lvbiA9IGdsdGZNYXRlcmlhbC5vY2NsdXNpb25UZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIGNvbnN0IGluZGV4Tm9ybWFscyA9IGdsdGZNYXRlcmlhbC5ub3JtYWxUZXh0dXJlPy5pbmRleCA/PyAwXFxuICAgIC8vIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIGlzIG9wdGlvbmFsIGluIGdsVEYuXFxuICAgIGNvbnN0IGluZGV4RW1pc3Npb24gPSBnbHRmTWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlPy5pbmRleFxcbiAgICBjb25zdCB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MgPSBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhNZXRhbGxpY1JvdWdobmVzcylcXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xcbiAgICAgICAgZ2VvbWV0cnk6IGFzc2V0Lm1ha2VHZW9tZXRyeSgpLFxcbiAgICAgICAgdHJhbnNmbzogYXNzZXQuY3JlYXRlVHJhbnNmb0Zyb21Ob2RlKGFzc2V0LmdldE5vZGUoMCkpLFxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSh7XFxuICAgICAgICAgICAgdGV4dHVyZTogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4QmFzZUNvbG9yKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgdGV4dHVyZXM6IHtcXG4gICAgICAgICAgICBub3JtYWxzOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhOb3JtYWxzKSxcXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIG1ldGFsbGljQ2hhbm5lbDogXFxcImJcXFwiLFxcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxcbiAgICAgICAgICAgIHJvdWdobmVzc0NoYW5uZWw6IFxcXCJnXFxcIixcXG4gICAgICAgICAgICBiYWtlZEFPOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhPY2NsdXNpb24pLFxcbiAgICAgICAgICAgIGJha2VkQU9DaGFubmVsOiBcXFwiclxcXCIsXFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcXG4gICAgICAgIH0sXFxuICAgIH1cXG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdIH0pXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIC8vIFRoZSBzaGFkb3cgY2FtZXJhIGRlcGVuZHMgb24gdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1haW4gY2FtZXJhLlxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDQsIDQpXFxuICAgIGNvbnN0IHNoYWRvdyA9IG5ldyBUZ2RQYWludGVyU2hhZG93KGNvbnRleHQsIHtcXG4gICAgICAgIGNhbWVyYTogbWFrZVNoYWRvd0NhbWVyYShjb250ZXh0KSxcXG4gICAgICAgIG1lc2hlczogW2JveCwgc3V6YW5uZSwgaGVsbWV0XSxcXG4gICAgfSlcXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXFxuICAgIGNvbnN0IFtseCwgbHksIGx6XSA9IHNoYWRvdy5jYW1lcmEudHJhbnNmby5heGlzWlxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RMaWdodCh7IGNvbG9yOiBbMSwgMC45LCAwLjgsIDFdLCBkaXJlY3Rpb246IFstbHgsIC1seSwgLWx6XSB9KVxcbiAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwib2ZmXFxcIixcXG4gICAgICAgIGN1bGw6IFxcXCJvZmZcXFwiLFxcbiAgICAgICAgYmxlbmQ6IFxcXCJhbHBoYVxcXCIsXFxuICAgIH0pXFxuICAgIGNvbnN0IGJhc2U6IFNjZW5lQmFzZSA9IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfVxcbiAgICByZWZTY2VuZS5jdXJyZW50ID0geyAuLi5iYXNlLCAuLi5yZWJ1aWxkRmlsdGVycyhjb250ZXh0LCBiYXNlLCBERUZBVUxUX1NFVFRJTkdTKSB9XFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgc2hhZG93LFxcbiAgICAgICAgZGVmZXJyZWQsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclNreWJveChjb250ZXh0LCB7IHRleHR1cmU6IHNreWJveCB9KSxcXG4gICAgICAgIHN0YXRlLFxcbiAgICAgICAgKF90aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICBib3gudHJhbnNmby5vcmJpdEFyb3VuZFgoZGVsdGEgKiAwLjA3MSkub3JiaXRBcm91bmRZKGRlbHRhICogMC4wOTQpXFxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAtMC4wNjI0NyAqIGRlbHRhXFxuICAgICAgICAgICAgc3V6YW5uZS50cmFuc2ZvLm9yYml0QXJvdW5kWChzcGVlZCAqIDAuNjMpLm9yYml0QXJvdW5kWShzcGVlZCAqIDAuODQpXFxuICAgICAgICB9LFxcbiAgICApXFxuICAgIGNvbnRleHQucGxheSgpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIGNvbnN0IHJlZkNvbnRleHQgPSBSZWFjdC51c2VSZWY8VGdkQ29udGV4dCB8IG51bGw+KG51bGwpXFxuICAgIGNvbnN0IHJlZlNjZW5lID0gUmVhY3QudXNlUmVmPFNjZW5lIHwgbnVsbD4obnVsbClcXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gUmVhY3QudXNlU3RhdGU8TW9kZT4oREVGQVVMVF9TRVRUSU5HUy5tb2RlKVxcbiAgICBjb25zdCBbc3RyZW5ndGgsIHNldFN0cmVuZ3RoXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1Muc3RyZW5ndGgpXFxuICAgIGNvbnN0IFtleHBvbmVudCwgc2V0RXhwb25lbnRdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5leHBvbmVudClcXG4gICAgY29uc3QgW3NoYWRpbmcsIHNldFNoYWRpbmddID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zaGFkaW5nKVxcbiAgICBjb25zdCBbY2F2aXR5LCBzZXRDYXZpdHldID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5jYXZpdHkpXFxuICAgIGNvbnN0IFtyaWRnZSwgc2V0UmlkZ2VdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5yaWRnZSlcXG4gICAgY29uc3QgW3ZhbGxleSwgc2V0VmFsbGV5XSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MudmFsbGV5KVxcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbiwgc2V0QW1iaWVudE9jY2x1c2lvbl0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmFtYmllbnRPY2NsdXNpb24pXFxuICAgIGNvbnN0IFthbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5LCBzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5XSA9IFJlYWN0LnVzZVN0YXRlKFxcbiAgICAgICAgREVGQVVMVF9TRVRUSU5HUy5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5LFxcbiAgICApXFxuICAgIGNvbnN0IFthbWJpZW50T2NjbHVzaW9uQmx1ciwgc2V0QW1iaWVudE9jY2x1c2lvbkJsdXJdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5hbWJpZW50T2NjbHVzaW9uQmx1cilcXG4gICAgY29uc3QgW2FtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LCBzZXRBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodF0gPSBSZWFjdC51c2VTdGF0ZShcXG4gICAgICAgIERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXFxuICAgIClcXG4gICAgY29uc3Qgc2V0dGluZ3M6IFNldHRpbmdzID0ge1xcbiAgICAgICAgbW9kZSxcXG4gICAgICAgIHN0cmVuZ3RoLFxcbiAgICAgICAgZXhwb25lbnQsXFxuICAgICAgICBzaGFkaW5nLFxcbiAgICAgICAgY2F2aXR5LFxcbiAgICAgICAgcmlkZ2UsXFxuICAgICAgICB2YWxsZXksXFxuICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb25CbHVyLFxcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXFxuICAgIH1cXG4gICAgLyoqIFNvbWUgb3B0aW9ucyBjYW4gb25seSBiZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBmaWx0ZXJzLiAqL1xcbiAgICBjb25zdCByZWJ1aWxkID0gKGNoYW5nZXM6IFBhcnRpYWw8U2V0dGluZ3M+KSA9PiB7XFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcXG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxcblxcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzY2VuZSwgcmVidWlsZEZpbHRlcnMoY29udGV4dCwgc2NlbmUsIHsgLi4uc2V0dGluZ3MsIC4uLmNoYW5nZXMgfSkpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVNb2RlQ2hhbmdlID0gKHZhbHVlOiBNb2RlKSA9PiB7XFxuICAgICAgICBzZXRNb2RlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5TW9kZShzY2VuZS5wYWludGVycywgdmFsdWUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVTdHJlbmd0aENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRTdHJlbmd0aCh2YWx1ZSlcXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcXG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXFxuXFxuICAgICAgICBhcHBseVN0cmVuZ3RoKHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlRXhwb25lbnRDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xcbiAgICAgICAgc2V0RXhwb25lbnQodmFsdWUpXFxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcXG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxcblxcbiAgICAgICAgYXBwbHlFeHBvbmVudChzY2VuZS5maWx0ZXJzLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZUNhdml0eUNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0Q2F2aXR5KHZhbHVlKVxcbiAgICAgICAgcmVidWlsZCh7IGNhdml0eTogdmFsdWUgfSlcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVTaGFkaW5nQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XFxuICAgICAgICBzZXRTaGFkaW5nKHZhbHVlKVxcbiAgICAgICAgcmVidWlsZCh7IHNoYWRpbmc6IHZhbHVlIH0pXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbih2YWx1ZSlcXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uOiB2YWx1ZSB9KVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XFxuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uQmx1cih2YWx1ZSlcXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uQmx1cjogdmFsdWUgfSlcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodENoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQodmFsdWUpXFxuICAgICAgICByZWJ1aWxkKHsgYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQ6IHZhbHVlIH0pXFxuICAgIH1cXG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkludGVuc2l0eUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XFxuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5KHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShzY2VuZS5maWx0ZXJzLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIGNvbnN0IGhhbmRsZVJpZGdlQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcXG4gICAgICAgIHNldFJpZGdlKHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHZhbHVlLCB2YWxsZXkpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfVxcbiAgICBjb25zdCBoYW5kbGVWYWxsZXlDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xcbiAgICAgICAgc2V0VmFsbGV5KHZhbHVlKVxcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cXG5cXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHJpZGdlLCB2YWx1ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxcbiAgICB9XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIG9uUmVhZHk9eyhjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykgPT4ge1xcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XFxuICAgICAgICAgICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzLCByZWZTY2VuZSlcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHsgaGVsbWV0OiBIZWxtZXRVUkwsIHN1emFubmU6IFN1emFubmVVUkwgfSxcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuICAgICAgICAgICAgZ2l6bW8+XFxuICAgICAgICAgICAgPFZpZXdQYW5lbCBkaXNwbGF5PVxcXCJmbGV4XFxcIiBmbGV4RGlyZWN0aW9uPVxcXCJjb2x1bW5cXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCIgZ2FwPVxcXCJTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3T3B0aW9ucyB2YWx1ZT17bW9kZX0gb25DaGFuZ2U9e2hhbmRsZU1vZGVDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVxcXCJza3lib3hcXFwiPnNreWJveCB0ZXh0dXJlPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9XFxcImNvbG9yXFxcIj5za3lib3ggY29sb3I8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld09wdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJza3lib3hTdHJlbmd0aFxcXCIgdmFsdWU9e3N0cmVuZ3RofSBvbkNoYW5nZT17aGFuZGxlU3RyZW5ndGhDaGFuZ2V9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJza3lib3hFeHBvbmVudFxcXCIgdmFsdWU9e2V4cG9uZW50fSBvbkNoYW5nZT17aGFuZGxlRXhwb25lbnRDaGFuZ2V9IC8+XFxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxcbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XFxcImZsZXhcXFwiIGp1c3RpZnlDb250ZW50PVxcXCJzcGFjZS1hcm91bmRcXFwiIGFsaWduSXRlbXM9XFxcImNlbnRlclxcXCIgZmxleFdyYXA9XFxcIndyYXBcXFwiIGdhcD1cXFwiU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaCB2YWx1ZT17c2hhZGluZ30gb25DaGFuZ2U9e2hhbmRsZVNoYWRpbmdDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNoYWRpbmdcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtjYXZpdHl9IG9uQ2hhbmdlPXtoYW5kbGVDYXZpdHlDaGFuZ2V9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENhdml0eVxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cXFwiUmlkZ2VcXFwiIHZhbHVlPXtyaWRnZX0gb25DaGFuZ2U9e2hhbmRsZVJpZGdlQ2hhbmdlfSBlbmFibGVkPXtjYXZpdHl9IC8+XFxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVxcXCJWYWxsZXlcXFwiIHZhbHVlPXt2YWxsZXl9IG9uQ2hhbmdlPXtoYW5kbGVWYWxsZXlDaGFuZ2V9IGVuYWJsZWQ9e2Nhdml0eX0gLz5cXG4gICAgICAgICAgICAgICAgPC9WaWV3UGFuZWw+XFxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cXFwiZmxleFxcXCIganVzdGlmeUNvbnRlbnQ9XFxcInNwYWNlLWFyb3VuZFxcXCIgYWxpZ25JdGVtcz1cXFwiY2VudGVyXFxcIiBmbGV4V3JhcD1cXFwid3JhcFxcXCIgZ2FwPVxcXCJTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXthbWJpZW50T2NjbHVzaW9ufSBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgQW1iaWVudCBPY2NsdXNpb25cXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiSW50ZW5zaXR5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5Q2hhbmdlfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2FtYmllbnRPY2NsdXNpb259XFxuICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2hcXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1iaWVudE9jY2x1c2lvbkJsdXJ9XFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlfVxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2FtYmllbnRPY2NsdXNpb259PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEJsdXJcXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodENoYW5nZX1cXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXthbWJpZW50T2NjbHVzaW9uICYmIHNoYWRpbmd9PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbWJpbmUgd2l0aCBsaWdodFxcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxcbiAgICAgICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgICAgICA8L1ZpZXdQYW5lbD5cXG4gICAgICAgIDwvVmlldz5cXG4gICAgKVxcbn1cXG5cXG4vKipcXG4gKiBSZXBsYWNlIHRoZSBmaWx0ZXJzIGFuZCB0aGVpciBwYWludGVycywgYmVjYXVzZSBgc2hhZGluZ2AsIGBjYXZpdHlgIGFuZCBgYW1iaWVudE9jY2x1c2lvbmBcXG4gKiBjYW4gb25seSBiZSBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yLlxcbiAqIFRoZSBwcmV2aW91cyBvbmVzLCBpZiBhbnksIGFyZSBkZWxldGVkLlxcbiAqL1xcbmZ1bmN0aW9uIHJlYnVpbGRGaWx0ZXJzKFxcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxcbiAgICBzY2VuZTogU2NlbmVCYXNlICYgUGFydGlhbDxTY2VuZUZpbHRlcnM+LFxcbiAgICBzZXR0aW5nczogU2V0dGluZ3MsXFxuKTogU2NlbmVGaWx0ZXJzIHtcXG4gICAgY29uc3QgeyBkZWZlcnJlZCwgc2t5Ym94LCBsaWdodCwgc2hhZG93LCBzdGF0ZSB9ID0gc2NlbmVcXG4gICAgLy8gVGhlIHBhaW50ZXJzIGRvIG5vdCBvd24gdGhlIGZpbHRlcnMsIHNvIHdlIGRlbGV0ZSBib3RoLlxcbiAgICBzdGF0ZS5yZW1vdmVBbGwoKVxcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKHNjZW5lLmZpbHRlcnMgPz8ge30pKSBmaWx0ZXIuZGVsZXRlKClcXG4gICAgY29uc3Qgc2hhZG93T3B0aW9ucyA9IHsgY2FtZXJhOiBzaGFkb3cuY2FtZXJhLCB0ZXh0dXJlOiBzaGFkb3cudGV4dHVyZSB9XFxuICAgIGNvbnN0IGNhdml0eSA9IHNldHRpbmdzLmNhdml0eSA/IHsgcmlkZ2U6IHNldHRpbmdzLnJpZGdlLCB2YWxsZXk6IHNldHRpbmdzLnZhbGxleSB9IDogdW5kZWZpbmVkXFxuICAgIGNvbnN0IGFtYmllbnRPY2NsdXNpb24gPSBzZXR0aW5ncy5hbWJpZW50T2NjbHVzaW9uXFxuICAgICAgICA/IHtcXG4gICAgICAgICAgICAgIGludGVuc2l0eTogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcXG4gICAgICAgICAgICAgIGJsdXI6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25CbHVyLFxcbiAgICAgICAgICAgICAgY29tYmluZVdpdGhMaWdodDogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQsXFxuICAgICAgICAgIH1cXG4gICAgICAgIDogdW5kZWZpbmVkXFxuICAgIGNvbnN0IGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+ID0ge1xcbiAgICAgICAgc2t5Ym94OiBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcXG4gICAgICAgICAgICB0ZXh0dXJlTm9ybWFsczogZGVmZXJyZWQudGV4dHVyZU5vcm1hbHMsXFxuICAgICAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXFxuICAgICAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXFxuICAgICAgICAgICAgc2hhZGluZzogc2V0dGluZ3Muc2hhZGluZyxcXG4gICAgICAgICAgICBza3lib3hUZXh0dXJlOiBza3lib3gsXFxuICAgICAgICAgICAgc2t5Ym94U3RyZW5ndGg6IHNldHRpbmdzLnN0cmVuZ3RoLFxcbiAgICAgICAgICAgIHNreWJveEV4cG9uZW50OiBzZXR0aW5ncy5leHBvbmVudCxcXG4gICAgICAgICAgICBsaWdodCxcXG4gICAgICAgICAgICBzaGFkb3c6IHNoYWRvd09wdGlvbnMsXFxuICAgICAgICAgICAgY2F2aXR5LFxcbiAgICAgICAgICAgIGFtYmllbnRPY2NsdXNpb24sXFxuICAgICAgICB9KSxcXG4gICAgICAgIC8vIEEgMcOXMSBjdWJlIHRleHR1cmUgaXMgY3JlYXRlZCBmcm9tIHRoaXMgY29sb3IuXFxuICAgICAgICBjb2xvcjogbmV3IFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxcbiAgICAgICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxcbiAgICAgICAgICAgIHRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTzogZGVmZXJyZWQudGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPLFxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogXFxcIiM3YWZcXFwiLFxcbiAgICAgICAgICAgIHNreWJveFN0cmVuZ3RoOiBzZXR0aW5ncy5zdHJlbmd0aCxcXG4gICAgICAgICAgICBza3lib3hFeHBvbmVudDogc2V0dGluZ3MuZXhwb25lbnQsXFxuICAgICAgICAgICAgbGlnaHQsXFxuICAgICAgICAgICAgc2hhZG93OiBzaGFkb3dPcHRpb25zLFxcbiAgICAgICAgICAgIGNhdml0eSxcXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxcbiAgICAgICAgfSksXFxuICAgIH1cXG4gICAgY29uc3QgcGFpbnRlcnM6IFJlY29yZDxNb2RlLCBUZ2RQYWludGVyRmlsdGVyPiA9IHtcXG4gICAgICAgIHNreWJveDogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuc2t5Ym94KSxcXG4gICAgICAgIGNvbG9yOiBtYWtlUGFpbnRlckZpbHRlcihjb250ZXh0LCBkZWZlcnJlZCwgZmlsdGVycy5jb2xvciksXFxuICAgIH1cXG4gICAgYXBwbHlNb2RlKHBhaW50ZXJzLCBzZXR0aW5ncy5tb2RlKVxcbiAgICBzdGF0ZS5hZGQocGFpbnRlcnMuc2t5Ym94LCBwYWludGVycy5jb2xvcilcXG4gICAgcmV0dXJuIHsgZmlsdGVycywgcGFpbnRlcnMgfVxcbn1cXG5cXG4vKipcXG4gKiBUaGUgYWxiZWRvIGlzIHRoZSBpbnB1dCB0ZXh0dXJlIG9mIHRoZSBmaWx0ZXIuXFxuICovXFxuZnVuY3Rpb24gbWFrZVBhaW50ZXJGaWx0ZXIoXFxuICAgIGNvbnRleHQ6IFRnZENvbnRleHQsXFxuICAgIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMsXFxuICAgIGZpbHRlcjogVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nLFxcbikge1xcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZTogZGVmZXJyZWQudGV4dHVyZUFsYmVkbyxcXG4gICAgICAgIGZpbHRlcnM6IFtmaWx0ZXJdLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxufVxcblxcbi8qKlxcbiAqIFRoZSBsaWdodCBpcyBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIGluaXRpYWwgY2FtZXJhLFxcbiAqIGF0IGEgZGlzdGFuY2Ugb2YgOCBmcm9tIGl0LCBhbmQgbG9va3MgYXQgdGhlIGNhbWVyYSdzIHRhcmdldC5cXG4gKi9cXG5mdW5jdGlvbiBtYWtlU2hhZG93Q2FtZXJhKGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLnBvc2l0aW9uKVxcbiAgICBjb25zdCBvZmZzZXQgPSBuZXcgVGdkVmVjMyh0cmFuc2ZvLmF4aXNZKS5zdWJ0cmFjdCh0cmFuc2ZvLmF4aXNYKS5ub3JtYWxpemUoKS5zY2FsZSg4KVxcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8uYWN0dWFsUG9zaXRpb24pLmFkZChvZmZzZXQpXFxuICAgIGNvbnN0IGRpc3RhbmNlID0gbmV3IFRnZFZlYzMocG9zaXRpb24pLnN1YnRyYWN0KHRhcmdldCkuc2l6ZVxcbiAgICBjb25zdCBsaWdodCA9IG5ldyBUZ2RDYW1lcmFPcnRob2dyYXBoaWMoe1xcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb24gfSksXFxuICAgICAgICAvLyBIYWxmIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpc2libGUgYXJlYS5cXG4gICAgICAgIHNwYWNlSGVpZ2h0OiAzLFxcbiAgICAgICAgbmVhcjogTWF0aC5tYXgoMC4xLCBkaXN0YW5jZSAtIDUpLFxcbiAgICAgICAgZmFyOiBkaXN0YW5jZSArIDUsXFxuICAgIH0pXFxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcXG4gICAgLy8gU3F1YXJlIHNoYWRvdyB0ZXh0dXJlLlxcbiAgICBsaWdodC5zY3JlZW5XaWR0aCA9IDFcXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxcbiAgICByZXR1cm4gbGlnaHRcXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlNb2RlKHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4sIG1vZGU6IE1vZGUpIHtcXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFpbnRlcnMpIGFzIE1vZGVbXSkge1xcbiAgICAgICAgcGFpbnRlcnNba2V5XS5hY3RpdmUgPSBrZXkgPT09IG1vZGVcXG4gICAgfVxcbn1cXG5cXG5mdW5jdGlvbiBhcHBseVN0cmVuZ3RoKGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCBzdHJlbmd0aDogbnVtYmVyKSB7XFxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcXG4gICAgICAgIGZpbHRlci5za3lib3hTdHJlbmd0aCA9IHN0cmVuZ3RoXFxuICAgIH1cXG59XFxuXFxuZnVuY3Rpb24gYXBwbHlFeHBvbmVudChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgZXhwb25lbnQ6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuc2t5Ym94RXhwb25lbnQgPSBleHBvbmVudFxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIGFwcGx5Q2F2aXR5KGZpbHRlcnM6IFJlY29yZDxNb2RlLCBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmc+LCByaWRnZTogbnVtYmVyLCB2YWxsZXk6IG51bWJlcikge1xcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XFxuICAgICAgICBmaWx0ZXIuY2F2aXR5UmlkZ2UgPSByaWRnZVxcbiAgICAgICAgZmlsdGVyLmNhdml0eVZhbGxleSA9IHZhbGxleVxcbiAgICB9XFxufVxcblxcbmZ1bmN0aW9uIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgaW50ZW5zaXR5OiBudW1iZXIpIHtcXG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xcbiAgICAgICAgZmlsdGVyLmFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkgPSBpbnRlbnNpdHlcXG4gICAgfVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICBUZ2RDYW1lcmFPcnRob2dyYXBoaWMsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZyxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RMaWdodCxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSxcbiAgICB0eXBlIFRnZE1lc2hXaXRoVGV4dHVyZXMsXG4gICAgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlclNoYWRvdyxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkVHJhbnNmbyxcbiAgICBUZ2RWZWMzLFxuICAgIHRnZENhbnZhc0NyZWF0ZUNyZWF0ZUdyYWRpZW50dmVydGljYWwsXG4gICAgdGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVmlld0lucHV0TnVtYmVyLCBWaWV3T3B0aW9ucywgVmlld1BhbmVsLCBWaWV3U3dpdGNoIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IEhlbG1ldFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9oZWxtZXQuZ2xiXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUtbG93LmdsYlwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5cbnR5cGUgTW9kZSA9IFwic2t5Ym94XCIgfCBcImNvbG9yXCJcblxuLyoqIFdoYXQgdGhlIHVzZXIgY2FuIGNoYW5nZSBpbiB0aGUgcGFuZWwuICovXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xuICAgIG1vZGU6IE1vZGVcbiAgICBzdHJlbmd0aDogbnVtYmVyXG4gICAgZXhwb25lbnQ6IG51bWJlclxuICAgIHNoYWRpbmc6IGJvb2xlYW5cbiAgICBjYXZpdHk6IGJvb2xlYW5cbiAgICByaWRnZTogbnVtYmVyXG4gICAgdmFsbGV5OiBudW1iZXJcbiAgICBhbWJpZW50T2NjbHVzaW9uOiBib29sZWFuXG4gICAgYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eTogbnVtYmVyXG4gICAgYW1iaWVudE9jY2x1c2lvbkJsdXI6IGJvb2xlYW5cbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogYm9vbGVhblxufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBTZXR0aW5ncyA9IHtcbiAgICBtb2RlOiBcInNreWJveFwiLFxuICAgIHN0cmVuZ3RoOiAxLFxuICAgIGV4cG9uZW50OiAyLjIsXG4gICAgc2hhZGluZzogdHJ1ZSxcbiAgICBjYXZpdHk6IHRydWUsXG4gICAgcmlkZ2U6IDEsXG4gICAgdmFsbGV5OiAxLFxuICAgIGFtYmllbnRPY2NsdXNpb246IHRydWUsXG4gICAgYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eTogMSxcbiAgICBhbWJpZW50T2NjbHVzaW9uQmx1cjogdHJ1ZSxcbiAgICBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogZmFsc2UsXG59XG5cbi8qKlxuICogRXZlcnl0aGluZyB0aGUgZmlsdGVycyBuZWVkLCBzbyB3ZSBjYW4gcmVidWlsZCB0aGVtIHdoZW4gYHNoYWRpbmdgLCBgY2F2aXR5YFxuICogb3IgYGFtYmllbnRPY2NsdXNpb25gIGNoYW5nZXMuXG4gKi9cbmludGVyZmFjZSBTY2VuZUJhc2Uge1xuICAgIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXNcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXG4gICAgbGlnaHQ6IFRnZExpZ2h0XG4gICAgc2hhZG93OiBUZ2RQYWludGVyU2hhZG93XG4gICAgLyoqIFBhcmVudCBvZiB0aGUgZmlsdGVyIHBhaW50ZXJzLiAqL1xuICAgIHN0YXRlOiBUZ2RQYWludGVyU3RhdGVcbn1cblxuaW50ZXJmYWNlIFNjZW5lRmlsdGVycyB7XG4gICAgZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz5cbiAgICBwYWludGVyczogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJGaWx0ZXI+XG59XG5cbnR5cGUgU2NlbmUgPSBTY2VuZUJhc2UgJiBTY2VuZUZpbHRlcnNcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cywgcmVmU2NlbmU6IHsgY3VycmVudDogU2NlbmUgfCBudWxsIH0pIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgLy8gTWV0YWxsaWMgZ3Jvd3MgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgcm91Z2huZXNzIGZyb20gdG9wIHRvIGJvdHRvbS5cbiAgICBjb25zdCBib3g6IFRnZE1lc2hXaXRoVGV4dHVyZXMgPSB7XG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlCb3goKSxcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBwb3NpdGlvbjogWzAsIDAsIDBdLCBkaXN0YW5jZTogMiB9KSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzEsIDAuNywgMC4yLCAxXSB9KSxcbiAgICAgICAgdGV4dHVyZXM6IHtcbiAgICAgICAgICAgIG1ldGFsbGljOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVHcmFkaWVudEhvcml6b250YWwoNjQsIFtcIiMwMDBcIiwgXCIjZmZmXCJdKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcm91Z2huZXNzOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBsb2FkOiB0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsKDY0LCBbXCIjMDAwXCIsIFwiI2ZmZlwiXSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgLy8gT3JiaXRzIG9uIHRoZSBvdGhlciBzaWRlIG9mIHRoZSBoZWxtZXQsIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgLy8gV2l0aG91dCB0ZXh0dXJlcywgbWV0YWxsaWMgaXMgMCBhbmQgcm91Z2huZXNzIGlzIDAuNS5cbiAgICBjb25zdCBzdXphbm5lOiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXRzLmdsYi5zdXphbm5lLm1ha2VHZW9tZXRyeSgpLFxuICAgICAgICB0cmFuc2ZvOiBuZXcgVGdkVHJhbnNmbyh7IHBvc2l0aW9uOiBbMCwgMCwgMF0sIGRpc3RhbmNlOiAyIH0pLm9yYml0QXJvdW5kWShNYXRoLlBJKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoeyBjb2xvcjogWzAuNiwgMC4xLCAwLjMsIDFdIH0pLFxuICAgIH1cbiAgICAvLyBnbFRGIHN0b3JlcyBtZXRhbGxpYyBpbiBCTFVFIGFuZCByb3VnaG5lc3MgaW4gR1JFRU4uXG4gICAgY29uc3QgeyBoZWxtZXQ6IGFzc2V0IH0gPSBhc3NldHMuZ2xiXG4gICAgY29uc3QgZ2x0Zk1hdGVyaWFsID0gYXNzZXQuZ2V0TWF0ZXJpYWwoMClcbiAgICBjb25zdCBpbmRleEJhc2VDb2xvciA9IGdsdGZNYXRlcmlhbC5wYnJNZXRhbGxpY1JvdWdobmVzcz8uYmFzZUNvbG9yVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4TWV0YWxsaWNSb3VnaG5lc3MgPSBnbHRmTWF0ZXJpYWwucGJyTWV0YWxsaWNSb3VnaG5lc3M/Lm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIGNvbnN0IGluZGV4T2NjbHVzaW9uID0gZ2x0Zk1hdGVyaWFsLm9jY2x1c2lvblRleHR1cmU/LmluZGV4ID8/IDBcbiAgICBjb25zdCBpbmRleE5vcm1hbHMgPSBnbHRmTWF0ZXJpYWwubm9ybWFsVGV4dHVyZT8uaW5kZXggPz8gMFxuICAgIC8vIFRoZSBlbWlzc2lvbiB0ZXh0dXJlIGlzIG9wdGlvbmFsIGluIGdsVEYuXG4gICAgY29uc3QgaW5kZXhFbWlzc2lvbiA9IGdsdGZNYXRlcmlhbC5lbWlzc2l2ZVRleHR1cmU/LmluZGV4XG4gICAgY29uc3QgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzID0gYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4TWV0YWxsaWNSb3VnaG5lc3MpXG4gICAgY29uc3QgaGVsbWV0OiBUZ2RNZXNoV2l0aFRleHR1cmVzID0ge1xuICAgICAgICBnZW9tZXRyeTogYXNzZXQubWFrZUdlb21ldHJ5KCksXG4gICAgICAgIHRyYW5zZm86IGFzc2V0LmNyZWF0ZVRyYW5zZm9Gcm9tTm9kZShhc3NldC5nZXROb2RlKDApKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXRUZXh0dXJlKHtcbiAgICAgICAgICAgIHRleHR1cmU6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEJhc2VDb2xvciksXG4gICAgICAgIH0pLFxuICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgbm9ybWFsczogYXNzZXQuY3JlYXRlVGV4dHVyZTJEKGNvbnRleHQsIGluZGV4Tm9ybWFscyksXG4gICAgICAgICAgICBtZXRhbGxpYzogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxuICAgICAgICAgICAgbWV0YWxsaWNDaGFubmVsOiBcImJcIixcbiAgICAgICAgICAgIHJvdWdobmVzczogdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzLFxuICAgICAgICAgICAgcm91Z2huZXNzQ2hhbm5lbDogXCJnXCIsXG4gICAgICAgICAgICBiYWtlZEFPOiBhc3NldC5jcmVhdGVUZXh0dXJlMkQoY29udGV4dCwgaW5kZXhPY2NsdXNpb24pLFxuICAgICAgICAgICAgYmFrZWRBT0NoYW5uZWw6IFwiclwiLFxuICAgICAgICAgICAgZW1pc3Npb246IGluZGV4RW1pc3Npb24gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFzc2V0LmNyZWF0ZVRleHR1cmUyRChjb250ZXh0LCBpbmRleEVtaXNzaW9uKSxcbiAgICAgICAgfSxcbiAgICB9XG4gICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgVGdkUGFpbnRlckRlZmVycmVkU2hhZGluZ1RleHR1cmVzKGNvbnRleHQsIHsgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdIH0pXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICB9KVxuICAgIC8vIFRoZSBzaGFkb3cgY2FtZXJhIGRlcGVuZHMgb24gdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIG1haW4gY2FtZXJhLlxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNCwgNClcbiAgICBjb25zdCBzaGFkb3cgPSBuZXcgVGdkUGFpbnRlclNoYWRvdyhjb250ZXh0LCB7XG4gICAgICAgIGNhbWVyYTogbWFrZVNoYWRvd0NhbWVyYShjb250ZXh0KSxcbiAgICAgICAgbWVzaGVzOiBbYm94LCBzdXphbm5lLCBoZWxtZXRdLFxuICAgIH0pXG4gICAgLy8gVGhlIGxpZ2h0IGNhbWVyYSBsb29rcyB0b3dhcmQgaXRzIC1aIGF4aXMuXG4gICAgY29uc3QgW2x4LCBseSwgbHpdID0gc2hhZG93LmNhbWVyYS50cmFuc2ZvLmF4aXNaXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkTGlnaHQoeyBjb2xvcjogWzEsIDAuOSwgMC44LCAxXSwgZGlyZWN0aW9uOiBbLWx4LCAtbHksIC1sel0gfSlcbiAgICAvLyBOb3RoaW5nIGlzIHBhaW50ZWQgKGFscGhhID0gMCkgd2hlcmUgdGhlcmUgaXMgbm8gbWVzaC5cbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJvZmZcIixcbiAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgYmxlbmQ6IFwiYWxwaGFcIixcbiAgICB9KVxuICAgIGNvbnN0IGJhc2U6IFNjZW5lQmFzZSA9IHsgZGVmZXJyZWQsIHNreWJveCwgbGlnaHQsIHNoYWRvdywgc3RhdGUgfVxuICAgIHJlZlNjZW5lLmN1cnJlbnQgPSB7IC4uLmJhc2UsIC4uLnJlYnVpbGRGaWx0ZXJzKGNvbnRleHQsIGJhc2UsIERFRkFVTFRfU0VUVElOR1MpIH1cbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgc2hhZG93LFxuICAgICAgICBkZWZlcnJlZCxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwgeyB0ZXh0dXJlOiBza3lib3ggfSksXG4gICAgICAgIHN0YXRlLFxuICAgICAgICAoX3RpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgYm94LnRyYW5zZm8ub3JiaXRBcm91bmRYKGRlbHRhICogMC4wNzEpLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuMDk0KVxuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSAtMC4wNjI0NyAqIGRlbHRhXG4gICAgICAgICAgICBzdXphbm5lLnRyYW5zZm8ub3JiaXRBcm91bmRYKHNwZWVkICogMC42Mykub3JiaXRBcm91bmRZKHNwZWVkICogMC44NClcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgY29uc3QgcmVmQ29udGV4dCA9IFJlYWN0LnVzZVJlZjxUZ2RDb250ZXh0IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZTY2VuZSA9IFJlYWN0LnVzZVJlZjxTY2VuZSB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gUmVhY3QudXNlU3RhdGU8TW9kZT4oREVGQVVMVF9TRVRUSU5HUy5tb2RlKVxuICAgIGNvbnN0IFtzdHJlbmd0aCwgc2V0U3RyZW5ndGhdID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zdHJlbmd0aClcbiAgICBjb25zdCBbZXhwb25lbnQsIHNldEV4cG9uZW50XSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MuZXhwb25lbnQpXG4gICAgY29uc3QgW3NoYWRpbmcsIHNldFNoYWRpbmddID0gUmVhY3QudXNlU3RhdGUoREVGQVVMVF9TRVRUSU5HUy5zaGFkaW5nKVxuICAgIGNvbnN0IFtjYXZpdHksIHNldENhdml0eV0gPSBSZWFjdC51c2VTdGF0ZShERUZBVUxUX1NFVFRJTkdTLmNhdml0eSlcbiAgICBjb25zdCBbcmlkZ2UsIHNldFJpZGdlXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MucmlkZ2UpXG4gICAgY29uc3QgW3ZhbGxleSwgc2V0VmFsbGV5XSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MudmFsbGV5KVxuICAgIGNvbnN0IFthbWJpZW50T2NjbHVzaW9uLCBzZXRBbWJpZW50T2NjbHVzaW9uXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbilcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSwgc2V0QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eV0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICAgICAgREVGQVVMVF9TRVRUSU5HUy5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5LFxuICAgIClcbiAgICBjb25zdCBbYW1iaWVudE9jY2x1c2lvbkJsdXIsIHNldEFtYmllbnRPY2NsdXNpb25CbHVyXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfU0VUVElOR1MuYW1iaWVudE9jY2x1c2lvbkJsdXIpXG4gICAgY29uc3QgW2FtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LCBzZXRBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodF0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICAgICAgREVGQVVMVF9TRVRUSU5HUy5hbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodCxcbiAgICApXG4gICAgY29uc3Qgc2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgICAgICBtb2RlLFxuICAgICAgICBzdHJlbmd0aCxcbiAgICAgICAgZXhwb25lbnQsXG4gICAgICAgIHNoYWRpbmcsXG4gICAgICAgIGNhdml0eSxcbiAgICAgICAgcmlkZ2UsXG4gICAgICAgIHZhbGxleSxcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbixcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcbiAgICAgICAgYW1iaWVudE9jY2x1c2lvbkJsdXIsXG4gICAgICAgIGFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LFxuICAgIH1cbiAgICAvKiogU29tZSBvcHRpb25zIGNhbiBvbmx5IGJlIHNldCBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhlIGZpbHRlcnMuICovXG4gICAgY29uc3QgcmVidWlsZCA9IChjaGFuZ2VzOiBQYXJ0aWFsPFNldHRpbmdzPikgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBPYmplY3QuYXNzaWduKHNjZW5lLCByZWJ1aWxkRmlsdGVycyhjb250ZXh0LCBzY2VuZSwgeyAuLi5zZXR0aW5ncywgLi4uY2hhbmdlcyB9KSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU1vZGVDaGFuZ2UgPSAodmFsdWU6IE1vZGUpID0+IHtcbiAgICAgICAgc2V0TW9kZSh2YWx1ZSlcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBjb25zdCBzY2VuZSA9IHJlZlNjZW5lLmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFzY2VuZSkgcmV0dXJuXG5cbiAgICAgICAgYXBwbHlNb2RlKHNjZW5lLnBhaW50ZXJzLCB2YWx1ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVN0cmVuZ3RoQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0U3RyZW5ndGgodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5U3RyZW5ndGgoc2NlbmUuZmlsdGVycywgdmFsdWUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVFeHBvbmVudENoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEV4cG9uZW50KHZhbHVlKVxuICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVmQ29udGV4dC5jdXJyZW50XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcmVmU2NlbmUuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBhcHBseUV4cG9uZW50KHNjZW5lLmZpbHRlcnMsIHZhbHVlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQ2F2aXR5Q2hhbmdlID0gKHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHNldENhdml0eSh2YWx1ZSlcbiAgICAgICAgcmVidWlsZCh7IGNhdml0eTogdmFsdWUgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU2hhZGluZ0NoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICBzZXRTaGFkaW5nKHZhbHVlKVxuICAgICAgICByZWJ1aWxkKHsgc2hhZGluZzogdmFsdWUgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICBzZXRBbWJpZW50T2NjbHVzaW9uKHZhbHVlKVxuICAgICAgICByZWJ1aWxkKHsgYW1iaWVudE9jY2x1c2lvbjogdmFsdWUgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkJsdXJDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbkJsdXIodmFsdWUpXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uQmx1cjogdmFsdWUgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHRDaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgc2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQodmFsdWUpXG4gICAgICAgIHJlYnVpbGQoeyBhbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodDogdmFsdWUgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlQW1iaWVudE9jY2x1c2lvbkludGVuc2l0eUNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShzY2VuZS5maWx0ZXJzLCB2YWx1ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVJpZGdlQ2hhbmdlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0UmlkZ2UodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHZhbHVlLCB2YWxsZXkpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVWYWxsZXlDaGFuZ2UgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRWYWxsZXkodmFsdWUpXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZTY2VuZS5jdXJyZW50XG4gICAgICAgIGlmICghY29udGV4dCB8fCAhc2NlbmUpIHJldHVyblxuXG4gICAgICAgIGFwcGx5Q2F2aXR5KHNjZW5lLmZpbHRlcnMsIHJpZGdlLCB2YWx1ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpID0+IHtcbiAgICAgICAgICAgICAgICByZWZDb250ZXh0LmN1cnJlbnQgPSBjb250ZXh0XG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMsIHJlZlNjZW5lKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBoZWxtZXQ6IEhlbG1ldFVSTCwgc3V6YW5uZTogU3V6YW5uZVVSTCB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXG4gICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXG4gICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb250cm9sbGVyPXt7IGluZXJ0aWFPcmJpdDogMTAwMCB9fVxuICAgICAgICAgICAgZ2l6bW8+XG4gICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGdhcD1cIlNcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiU1wiPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld09wdGlvbnMgdmFsdWU9e21vZGV9IG9uQ2hhbmdlPXtoYW5kbGVNb2RlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwic2t5Ym94XCI+c2t5Ym94IHRleHR1cmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiY29sb3JcIj5za3lib3ggY29sb3I8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3T3B0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdJbnB1dE51bWJlciBsYWJlbD1cInNreWJveFN0cmVuZ3RoXCIgdmFsdWU9e3N0cmVuZ3RofSBvbkNoYW5nZT17aGFuZGxlU3RyZW5ndGhDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXIgbGFiZWw9XCJza3lib3hFeHBvbmVudFwiIHZhbHVlPXtleHBvbmVudH0gb25DaGFuZ2U9e2hhbmRsZUV4cG9uZW50Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBnYXA9XCJTXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXtzaGFkaW5nfSBvbkNoYW5nZT17aGFuZGxlU2hhZGluZ0NoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBTaGFkaW5nXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2ggdmFsdWU9e2Nhdml0eX0gb25DaGFuZ2U9e2hhbmRsZUNhdml0eUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYXZpdHlcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwiUmlkZ2VcIiB2YWx1ZT17cmlkZ2V9IG9uQ2hhbmdlPXtoYW5kbGVSaWRnZUNoYW5nZX0gZW5hYmxlZD17Y2F2aXR5fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0lucHV0TnVtYmVyIGxhYmVsPVwiVmFsbGV5XCIgdmFsdWU9e3ZhbGxleX0gb25DaGFuZ2U9e2hhbmRsZVZhbGxleUNoYW5nZX0gZW5hYmxlZD17Y2F2aXR5fSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFuZWwgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWFyb3VuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBmbGV4V3JhcD1cIndyYXBcIiBnYXA9XCJTXCI+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U3dpdGNoIHZhbHVlPXthbWJpZW50T2NjbHVzaW9ufSBvbkNoYW5nZT17aGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbWJpZW50IE9jY2x1c2lvblxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3SW5wdXROdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW50ZW5zaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkPXthbWJpZW50T2NjbHVzaW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1N3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FtYmllbnRPY2NsdXNpb25CbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD17YW1iaWVudE9jY2x1c2lvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBCbHVyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbWJpZW50T2NjbHVzaW9uQ29tYmluZVdpdGhMaWdodENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2FtYmllbnRPY2NsdXNpb24gJiYgc2hhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21iaW5lIHdpdGggbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3U3dpdGNoPlxuICAgICAgICAgICAgICAgIDwvVmlld1BhbmVsPlxuICAgICAgICAgICAgPC9WaWV3UGFuZWw+XG4gICAgICAgIDwvVmlldz5cbiAgICApXG59XG5cbi8vICNiZWdpbiByZWJ1aWxkRmlsdGVycygpXG4vKipcbiAqIFJlcGxhY2UgdGhlIGZpbHRlcnMgYW5kIHRoZWlyIHBhaW50ZXJzLCBiZWNhdXNlIGBzaGFkaW5nYCwgYGNhdml0eWAgYW5kIGBhbWJpZW50T2NjbHVzaW9uYFxuICogY2FuIG9ubHkgYmUgc2V0IGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAqIFRoZSBwcmV2aW91cyBvbmVzLCBpZiBhbnksIGFyZSBkZWxldGVkLlxuICovXG5mdW5jdGlvbiByZWJ1aWxkRmlsdGVycyhcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgIHNjZW5lOiBTY2VuZUJhc2UgJiBQYXJ0aWFsPFNjZW5lRmlsdGVycz4sXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzLFxuKTogU2NlbmVGaWx0ZXJzIHtcbiAgICBjb25zdCB7IGRlZmVycmVkLCBza3lib3gsIGxpZ2h0LCBzaGFkb3csIHN0YXRlIH0gPSBzY2VuZVxuICAgIC8vIFRoZSBwYWludGVycyBkbyBub3Qgb3duIHRoZSBmaWx0ZXJzLCBzbyB3ZSBkZWxldGUgYm90aC5cbiAgICBzdGF0ZS5yZW1vdmVBbGwoKVxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoc2NlbmUuZmlsdGVycyA/PyB7fSkpIGZpbHRlci5kZWxldGUoKVxuICAgIGNvbnN0IHNoYWRvd09wdGlvbnMgPSB7IGNhbWVyYTogc2hhZG93LmNhbWVyYSwgdGV4dHVyZTogc2hhZG93LnRleHR1cmUgfVxuICAgIGNvbnN0IGNhdml0eSA9IHNldHRpbmdzLmNhdml0eSA/IHsgcmlkZ2U6IHNldHRpbmdzLnJpZGdlLCB2YWxsZXk6IHNldHRpbmdzLnZhbGxleSB9IDogdW5kZWZpbmVkXG4gICAgY29uc3QgYW1iaWVudE9jY2x1c2lvbiA9IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25cbiAgICAgICAgPyB7XG4gICAgICAgICAgICAgIGludGVuc2l0eTogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkludGVuc2l0eSxcbiAgICAgICAgICAgICAgYmx1cjogc2V0dGluZ3MuYW1iaWVudE9jY2x1c2lvbkJsdXIsXG4gICAgICAgICAgICAgIGNvbWJpbmVXaXRoTGlnaHQ6IHNldHRpbmdzLmFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0LFxuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWRcbiAgICBjb25zdCBmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiA9IHtcbiAgICAgICAgc2t5Ym94OiBuZXcgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHRleHR1cmVOb3JtYWxzOiBkZWZlcnJlZC50ZXh0dXJlTm9ybWFscyxcbiAgICAgICAgICAgIHRleHR1cmVEZXB0aDogZGVmZXJyZWQudGV4dHVyZURlcHRoLFxuICAgICAgICAgICAgdGV4dHVyZU1ldGFsbGljUm91Z2huZXNzU3BlY3VsYXJCYWtlZEFPOiBkZWZlcnJlZC50ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU8sXG4gICAgICAgICAgICBzaGFkaW5nOiBzZXR0aW5ncy5zaGFkaW5nLFxuICAgICAgICAgICAgc2t5Ym94VGV4dHVyZTogc2t5Ym94LFxuICAgICAgICAgICAgc2t5Ym94U3RyZW5ndGg6IHNldHRpbmdzLnN0cmVuZ3RoLFxuICAgICAgICAgICAgc2t5Ym94RXhwb25lbnQ6IHNldHRpbmdzLmV4cG9uZW50LFxuICAgICAgICAgICAgbGlnaHQsXG4gICAgICAgICAgICBzaGFkb3c6IHNoYWRvd09wdGlvbnMsXG4gICAgICAgICAgICBjYXZpdHksXG4gICAgICAgICAgICBhbWJpZW50T2NjbHVzaW9uLFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gQSAxw5cxIGN1YmUgdGV4dHVyZSBpcyBjcmVhdGVkIGZyb20gdGhpcyBjb2xvci5cbiAgICAgICAgY29sb3I6IG5ldyBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcoY29udGV4dCwge1xuICAgICAgICAgICAgdGV4dHVyZU5vcm1hbHM6IGRlZmVycmVkLnRleHR1cmVOb3JtYWxzLFxuICAgICAgICAgICAgdGV4dHVyZURlcHRoOiBkZWZlcnJlZC50ZXh0dXJlRGVwdGgsXG4gICAgICAgICAgICB0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3NTcGVjdWxhckJha2VkQU86IGRlZmVycmVkLnRleHR1cmVNZXRhbGxpY1JvdWdobmVzc1NwZWN1bGFyQmFrZWRBTyxcbiAgICAgICAgICAgIHNoYWRpbmc6IHNldHRpbmdzLnNoYWRpbmcsXG4gICAgICAgICAgICBza3lib3hUZXh0dXJlOiBcIiM3YWZcIixcbiAgICAgICAgICAgIHNreWJveFN0cmVuZ3RoOiBzZXR0aW5ncy5zdHJlbmd0aCxcbiAgICAgICAgICAgIHNreWJveEV4cG9uZW50OiBzZXR0aW5ncy5leHBvbmVudCxcbiAgICAgICAgICAgIGxpZ2h0LFxuICAgICAgICAgICAgc2hhZG93OiBzaGFkb3dPcHRpb25zLFxuICAgICAgICAgICAgY2F2aXR5LFxuICAgICAgICAgICAgYW1iaWVudE9jY2x1c2lvbixcbiAgICAgICAgfSksXG4gICAgfVxuICAgIGNvbnN0IHBhaW50ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkUGFpbnRlckZpbHRlcj4gPSB7XG4gICAgICAgIHNreWJveDogbWFrZVBhaW50ZXJGaWx0ZXIoY29udGV4dCwgZGVmZXJyZWQsIGZpbHRlcnMuc2t5Ym94KSxcbiAgICAgICAgY29sb3I6IG1ha2VQYWludGVyRmlsdGVyKGNvbnRleHQsIGRlZmVycmVkLCBmaWx0ZXJzLmNvbG9yKSxcbiAgICB9XG4gICAgYXBwbHlNb2RlKHBhaW50ZXJzLCBzZXR0aW5ncy5tb2RlKVxuICAgIHN0YXRlLmFkZChwYWludGVycy5za3lib3gsIHBhaW50ZXJzLmNvbG9yKVxuICAgIHJldHVybiB7IGZpbHRlcnMsIHBhaW50ZXJzIH1cbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIG1ha2VQYWludGVyRmlsdGVyKClcbi8qKlxuICogVGhlIGFsYmVkbyBpcyB0aGUgaW5wdXQgdGV4dHVyZSBvZiB0aGUgZmlsdGVyLlxuICovXG5mdW5jdGlvbiBtYWtlUGFpbnRlckZpbHRlcihcbiAgICBjb250ZXh0OiBUZ2RDb250ZXh0LFxuICAgIGRlZmVycmVkOiBUZ2RQYWludGVyRGVmZXJyZWRTaGFkaW5nVGV4dHVyZXMsXG4gICAgZmlsdGVyOiBUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmcsXG4pIHtcbiAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBkZWZlcnJlZC50ZXh0dXJlQWxiZWRvLFxuICAgICAgICBmaWx0ZXJzOiBbZmlsdGVyXSxcbiAgICAgICAgZmxpcFk6IHRydWUsXG4gICAgfSlcbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIG1ha2VTaGFkb3dDYW1lcmEoKVxuLyoqXG4gKiBUaGUgbGlnaHQgaXMgYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBpbml0aWFsIGNhbWVyYSxcbiAqIGF0IGEgZGlzdGFuY2Ugb2YgOCBmcm9tIGl0LCBhbmQgbG9va3MgYXQgdGhlIGNhbWVyYSdzIHRhcmdldC5cbiAqL1xuZnVuY3Rpb24gbWFrZVNoYWRvd0NhbWVyYShjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxuICAgIGNvbnN0IHRhcmdldCA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8ucG9zaXRpb24pXG4gICAgY29uc3Qgb2Zmc2V0ID0gbmV3IFRnZFZlYzModHJhbnNmby5heGlzWSkuc3VidHJhY3QodHJhbnNmby5heGlzWCkubm9ybWFsaXplKCkuc2NhbGUoOClcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBUZ2RWZWMzKHRyYW5zZm8uYWN0dWFsUG9zaXRpb24pLmFkZChvZmZzZXQpXG4gICAgY29uc3QgZGlzdGFuY2UgPSBuZXcgVGdkVmVjMyhwb3NpdGlvbikuc3VidHJhY3QodGFyZ2V0KS5zaXplXG4gICAgY29uc3QgbGlnaHQgPSBuZXcgVGdkQ2FtZXJhT3J0aG9ncmFwaGljKHtcbiAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oeyBkaXN0YW5jZTogMCwgcG9zaXRpb24gfSksXG4gICAgICAgIC8vIEhhbGYgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxuICAgICAgICBzcGFjZUhlaWdodDogMyxcbiAgICAgICAgbmVhcjogTWF0aC5tYXgoMC4xLCBkaXN0YW5jZSAtIDUpLFxuICAgICAgICBmYXI6IGRpc3RhbmNlICsgNSxcbiAgICB9KVxuICAgIGxpZ2h0LnRyYW5zZm8ubG9va0F0KHRhcmdldClcbiAgICAvLyBTcXVhcmUgc2hhZG93IHRleHR1cmUuXG4gICAgbGlnaHQuc2NyZWVuV2lkdGggPSAxXG4gICAgbGlnaHQuc2NyZWVuSGVpZ2h0ID0gMVxuICAgIHJldHVybiBsaWdodFxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gYXBwbHlNb2RlKClcbmZ1bmN0aW9uIGFwcGx5TW9kZShwYWludGVyczogUmVjb3JkPE1vZGUsIFRnZFBhaW50ZXJGaWx0ZXI+LCBtb2RlOiBNb2RlKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFpbnRlcnMpIGFzIE1vZGVbXSkge1xuICAgICAgICBwYWludGVyc1trZXldLmFjdGl2ZSA9IGtleSA9PT0gbW9kZVxuICAgIH1cbn1cbi8vICNlbmRcblxuLy8gI2JlZ2luIGFwcGx5U3RyZW5ndGgoKVxuZnVuY3Rpb24gYXBwbHlTdHJlbmd0aChmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgc3RyZW5ndGg6IG51bWJlcikge1xuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIE9iamVjdC52YWx1ZXMoZmlsdGVycykpIHtcbiAgICAgICAgZmlsdGVyLnNreWJveFN0cmVuZ3RoID0gc3RyZW5ndGhcbiAgICB9XG59XG4vLyAjZW5kXG5cbi8vICNiZWdpbiBhcHBseUV4cG9uZW50KClcbmZ1bmN0aW9uIGFwcGx5RXhwb25lbnQoZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4sIGV4cG9uZW50OiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XG4gICAgICAgIGZpbHRlci5za3lib3hFeHBvbmVudCA9IGV4cG9uZW50XG4gICAgfVxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gYXBwbHlDYXZpdHkoKVxuZnVuY3Rpb24gYXBwbHlDYXZpdHkoZmlsdGVyczogUmVjb3JkPE1vZGUsIFRnZEZpbHRlckRlZmVycmVkU2hhZGluZz4sIHJpZGdlOiBudW1iZXIsIHZhbGxleTogbnVtYmVyKSB7XG4gICAgZm9yIChjb25zdCBmaWx0ZXIgb2YgT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKSkge1xuICAgICAgICBmaWx0ZXIuY2F2aXR5UmlkZ2UgPSByaWRnZVxuICAgICAgICBmaWx0ZXIuY2F2aXR5VmFsbGV5ID0gdmFsbGV5XG4gICAgfVxufVxuLy8gI2VuZFxuXG4vLyAjYmVnaW4gYXBwbHlBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5KClcbmZ1bmN0aW9uIGFwcGx5QW1iaWVudE9jY2x1c2lvbkludGVuc2l0eShmaWx0ZXJzOiBSZWNvcmQ8TW9kZSwgVGdkRmlsdGVyRGVmZXJyZWRTaGFkaW5nPiwgaW50ZW5zaXR5OiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiBPYmplY3QudmFsdWVzKGZpbHRlcnMpKSB7XG4gICAgICAgIGZpbHRlci5hbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5ID0gaW50ZW5zaXR5XG4gICAgfVxufVxuLy8gI2VuZFxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJUZ2RDYW1lcmFPcnRob2dyYXBoaWMiLCJUZ2RGaWx0ZXJEZWZlcnJlZFNoYWRpbmciLCJUZ2RHZW9tZXRyeUJveCIsIlRnZExpZ2h0IiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkTWF0ZXJpYWxGbGF0VGV4dHVyZSIsIlRnZFBhaW50ZXJEZWZlcnJlZFNoYWRpbmdUZXh0dXJlcyIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyU2hhZG93IiwiVGdkUGFpbnRlclNreWJveCIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFRleHR1cmUyRCIsIlRnZFRleHR1cmVDdWJlIiwiVGdkVHJhbnNmbyIsIlRnZFZlYzMiLCJ0Z2RDYW52YXNDcmVhdGVDcmVhdGVHcmFkaWVudHZlcnRpY2FsIiwidGdkQ2FudmFzQ3JlYXRlR3JhZGllbnRIb3Jpem9udGFsIiwiVmlld0lucHV0TnVtYmVyIiwiVmlld09wdGlvbnMiLCJWaWV3UGFuZWwiLCJWaWV3U3dpdGNoIiwiVmlldyIsIkhlbG1ldFVSTCIsIlN1emFubmVVUkwiLCJQb3NYIiwiUG9zWSIsIlBvc1oiLCJOZWdYIiwiTmVnWSIsIk5lZ1oiLCJERUZBVUxUX1NFVFRJTkdTIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJyZWZTY2VuZSIsIl9nbHRmTWF0ZXJpYWxfcGJyTWV0YWxsaWNSb3VnaG5lc3NfYmFzZUNvbG9yVGV4dHVyZSIsIl9nbHRmTWF0ZXJpYWxfcGJyTWV0YWxsaWNSb3VnaG5lc3NfbWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9vY2NsdXNpb25UZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9ub3JtYWxUZXh0dXJlIiwiX2dsdGZNYXRlcmlhbF9lbWlzc2l2ZVRleHR1cmUiLCJib3giLCJzdXphbm5lIiwiTWF0aCIsIl9hc3NldHNfZ2xiIiwiYXNzZXQiLCJnbHRmTWF0ZXJpYWwiLCJpbmRleEJhc2VDb2xvciIsImluZGV4TWV0YWxsaWNSb3VnaG5lc3MiLCJpbmRleE9jY2x1c2lvbiIsImluZGV4Tm9ybWFscyIsImluZGV4RW1pc3Npb24iLCJ0ZXh0dXJlTWV0YWxsaWNSb3VnaG5lc3MiLCJoZWxtZXQiLCJ1bmRlZmluZWQiLCJkZWZlcnJlZCIsInNreWJveCIsInNoYWRvdyIsIm1ha2VTaGFkb3dDYW1lcmEiLCJfc2hhZG93X2NhbWVyYV90cmFuc2ZvX2F4aXNaIiwibHgiLCJseSIsImx6IiwibGlnaHQiLCJzdGF0ZSIsImJhc2UiLCJyZWJ1aWxkRmlsdGVycyIsIl90aW1lIiwiZGVsdGEiLCJzcGVlZCIsInJlZkNvbnRleHQiLCJtb2RlIiwic2V0TW9kZSIsIl9SZWFjdF91c2VTdGF0ZTEiLCJzdHJlbmd0aCIsInNldFN0cmVuZ3RoIiwiX1JlYWN0X3VzZVN0YXRlMiIsImV4cG9uZW50Iiwic2V0RXhwb25lbnQiLCJfUmVhY3RfdXNlU3RhdGUzIiwic2hhZGluZyIsInNldFNoYWRpbmciLCJfUmVhY3RfdXNlU3RhdGU0IiwiY2F2aXR5Iiwic2V0Q2F2aXR5IiwiX1JlYWN0X3VzZVN0YXRlNSIsInJpZGdlIiwic2V0UmlkZ2UiLCJfUmVhY3RfdXNlU3RhdGU2IiwidmFsbGV5Iiwic2V0VmFsbGV5IiwiX1JlYWN0X3VzZVN0YXRlNyIsImFtYmllbnRPY2NsdXNpb24iLCJzZXRBbWJpZW50T2NjbHVzaW9uIiwiX1JlYWN0X3VzZVN0YXRlOCIsImFtYmllbnRPY2NsdXNpb25JbnRlbnNpdHkiLCJzZXRBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5IiwiX1JlYWN0X3VzZVN0YXRlOSIsImFtYmllbnRPY2NsdXNpb25CbHVyIiwic2V0QW1iaWVudE9jY2x1c2lvbkJsdXIiLCJfUmVhY3RfdXNlU3RhdGUxMCIsImFtYmllbnRPY2NsdXNpb25Db21iaW5lV2l0aExpZ2h0Iiwic2V0QW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHQiLCJzZXR0aW5ncyIsInJlYnVpbGQiLCJjaGFuZ2VzIiwic2NlbmUiLCJPYmplY3QiLCJoYW5kbGVNb2RlQ2hhbmdlIiwidmFsdWUiLCJhcHBseU1vZGUiLCJoYW5kbGVTdHJlbmd0aENoYW5nZSIsImFwcGx5U3RyZW5ndGgiLCJoYW5kbGVFeHBvbmVudENoYW5nZSIsImFwcGx5RXhwb25lbnQiLCJoYW5kbGVDYXZpdHlDaGFuZ2UiLCJoYW5kbGVTaGFkaW5nQ2hhbmdlIiwiaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNoYW5nZSIsImhhbmRsZUFtYmllbnRPY2NsdXNpb25CbHVyQ2hhbmdlIiwiaGFuZGxlQW1iaWVudE9jY2x1c2lvbkNvbWJpbmVXaXRoTGlnaHRDaGFuZ2UiLCJoYW5kbGVBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5Q2hhbmdlIiwiYXBwbHlBbWJpZW50T2NjbHVzaW9uSW50ZW5zaXR5IiwiaGFuZGxlUmlkZ2VDaGFuZ2UiLCJhcHBseUNhdml0eSIsImhhbmRsZVZhbGxleUNoYW5nZSIsIm9uUmVhZHkiLCJfc2NlbmVfZmlsdGVycyIsIl9pdGVyYXRvckVycm9yIiwiZmlsdGVyIiwic2hhZG93T3B0aW9ucyIsImZpbHRlcnMiLCJwYWludGVycyIsIm1ha2VQYWludGVyRmlsdGVyIiwidHJhbnNmbyIsInRhcmdldCIsIm9mZnNldCIsInBvc2l0aW9uIiwiZGlzdGFuY2UiLCJrZXkiLCJpbnRlbnNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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