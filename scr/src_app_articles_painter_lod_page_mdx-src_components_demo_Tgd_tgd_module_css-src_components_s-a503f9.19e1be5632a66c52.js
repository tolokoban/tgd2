"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_s-a503f9"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
7294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(68668);





const FOCUS = {
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.fovy = tgdCalcDegToRad(60)\n\t\tcamera.spaceHeightAtTarget = 6\n\t}\n\tcamera.near = 1e-2\n\tcamera.far = 1e2\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>\n\t\tmax: Readonly<ArrayNumber3>\n\t} = {\n\t\tmin: [-1, -1, -1],\n\t\tmax: [+1, +1, +1],\n\t}\n\tconst [minX, minY, minZ] = bbox.min\n\tconst [maxX, maxY, maxZ] = bbox.max\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 8,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst levels = [0, 1, 2, 3, 4, 5]\n\tconst materials = levels.map(\n\t\t(i) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t\tcolor: COLORS[i],\n\t\t\t}),\n\t)\n\tconst boxes = [0, 1, 2, 3, 4, 5].map(\n\t\t(i) =>\n\t\t\tnew TgdPainterMeshGltf(context, {\n\t\t\t\tasset: assets.glb.box,\n\t\t\t\tmaterial: materials[i],\n\t\t\t}),\n\t)\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst size = 2 ** -level\n\t\t\tconst sizeX = size * (maxX - minX)\n\t\t\tconst sizeY = size * (maxY - minY)\n\t\t\tconst sizeZ = size * (maxZ - minZ)\n\t\t\tconst center: ArrayNumber3 = [\n\t\t\t\t(x + 0.5) * sizeX + minX,\n\t\t\t\t(y + 0.5) * sizeY + minY,\n\t\t\t\t(z + 0.5) * sizeZ + minZ,\n\t\t\t]\n\t\t\tconst transfo = new TgdTransfo()\n\t\t\ttransfo.setPosition(center).setScale(sizeX, sizeY, sizeZ)\n\t\t\tconst node = new TgdPainterNode({\n\t\t\t\tname: `(${x}, ${y}, ${z})/${level}`,\n\t\t\t\tchildren: [boxes[level]],\n\t\t\t\ttransfo,\n\t\t\t})\n\t\t\treturn node\n\t\t},\n\t\tsubdivisions: 5,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}",
};
const FULL = 'import {\n\ttype ArrayNumber3,\n\ttype ArrayNumber4,\n\tTgdCameraPerspective,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdGeometrySphereIco,\n\tTgdMaterialDiffuse,\n\tTgdPainterClear,\n\tTgdPainterLOD,\n\tTgdPainterMesh,\n\tTgdPainterMeshGltf,\n\tTgdPainterNode,\n\tTgdPainterState,\n\tTgdTransfo,\n\ttgdCalcDegToRad,\n\ttgdColorMakeHueWheel,\n\twebglPresetDepth,\n} from "@tolokoban/tgd"\n\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport BoxURL from "./box.glb"\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst { camera } = context\n\tif (camera instanceof TgdCameraPerspective) {\n\t\tcamera.fovy = tgdCalcDegToRad(60)\n\t\tcamera.spaceHeightAtTarget = 6\n\t}\n\tcamera.near = 1e-2\n\tcamera.far = 1e2\n\tconst clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n\tconst bbox: {\n\t\tmin: Readonly<ArrayNumber3>\n\t\tmax: Readonly<ArrayNumber3>\n\t} = {\n\t\tmin: [-1, -1, -1],\n\t\tmax: [+1, +1, +1],\n\t}\n\tconst [minX, minY, minZ] = bbox.min\n\tconst [maxX, maxY, maxZ] = bbox.max\n\tconst COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n\t\tsteps: 8,\n\t}).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n\tconst levels = [0, 1, 2, 3, 4, 5]\n\tconst materials = levels.map(\n\t\t(i) =>\n\t\t\tnew TgdMaterialDiffuse({\n\t\t\t\tlockLightsToCamera: true,\n\t\t\t\tcolor: COLORS[i],\n\t\t\t}),\n\t)\n\tconst boxes = [0, 1, 2, 3, 4, 5].map(\n\t\t(i) =>\n\t\t\tnew TgdPainterMeshGltf(context, {\n\t\t\t\tasset: assets.glb.box,\n\t\t\t\tmaterial: materials[i],\n\t\t\t}),\n\t)\n\tconst lod = new TgdPainterLOD(context, {\n\t\tbbox,\n\t\tasync factory(x: number, y: number, z: number, level: number) {\n\t\t\tconst size = 2 ** -level\n\t\t\tconst sizeX = size * (maxX - minX)\n\t\t\tconst sizeY = size * (maxY - minY)\n\t\t\tconst sizeZ = size * (maxZ - minZ)\n\t\t\tconst center: ArrayNumber3 = [\n\t\t\t\t(x + 0.5) * sizeX + minX,\n\t\t\t\t(y + 0.5) * sizeY + minY,\n\t\t\t\t(z + 0.5) * sizeZ + minZ,\n\t\t\t]\n\t\t\tconst transfo = new TgdTransfo()\n\t\t\ttransfo.setPosition(center).setScale(sizeX, sizeY, sizeZ)\n\t\t\tconst node = new TgdPainterNode({\n\t\t\t\tname: `(${x}, ${y}, ${z})/${level}`,\n\t\t\t\tchildren: [boxes[level]],\n\t\t\t\ttransfo,\n\t\t\t})\n\t\t\treturn node\n\t\t},\n\t\tsubdivisions: 5,\n\t})\n\tcontext.add(\n\t\tclear,\n\t\tnew TgdPainterState(context, {\n\t\t\tchildren: [lod],\n\t\t\tdepth: webglPresetDepth.less,\n\t\t}),\n\t)\n\tcontext.paint()\n\tnew TgdControllerCameraOrbit(context, {\n\t\tinertiaOrbit: 1000,\n\t\tinertiaZoom: 1000,\n\t})\n}\n\nexport default function Demo() {\n\treturn (\n\t\t<View\n\t\t\tonReady={init}\n\t\t\tgizmo\n\t\t\tassets={{\n\t\t\t\tglb: { box: BoxURL },\n\t\t\t}}\n\t\t/>\n\t)\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
68668(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _box_glb__rspack_import_3 = __webpack_require__(83714);




function init(context, assets) {
    const { camera } = context;
    if (camera instanceof _tolokoban_tgd__rspack_import_1.TgdCameraPerspective) {
        camera.fovy = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(60);
        camera.spaceHeightAtTarget = 6;
    }
    camera.near = 1e-2;
    camera.far = 1e2;
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });
    const bbox = {
        min: [-1, -1, -1],
        max: [+1, +1, +1],
    };
    const [minX, minY, minZ] = bbox.min;
    const [maxX, maxY, maxZ] = bbox.max;
    const COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
        steps: 8,
    }).map((color) => [color.R, color.G, color.B, 1]);
    const levels = [0, 1, 2, 3, 4, 5];
    const materials = levels.map((i) => new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        lockLightsToCamera: true,
        color: COLORS[i],
    }));
    const boxes = [0, 1, 2, 3, 4, 5].map((i) => new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset: assets.glb.box,
        material: materials[i],
    }));
    const lod = new _tolokoban_tgd__rspack_import_1.TgdPainterLOD(context, {
        bbox,
        async factory(x, y, z, level) {
            const size = 2 ** -level;
            const sizeX = size * (maxX - minX);
            const sizeY = size * (maxY - minY);
            const sizeZ = size * (maxZ - minZ);
            const center = [(x + 0.5) * sizeX + minX, (y + 0.5) * sizeY + minY, (z + 0.5) * sizeZ + minZ];
            const transfo = new _tolokoban_tgd__rspack_import_1.TgdTransfo();
            transfo.setPosition(center).setScale(sizeX, sizeY, sizeZ);
            const node = new _tolokoban_tgd__rspack_import_1.TgdPainterNode({
                name: `(${x}, ${y}, ${z})/${level}`,
                children: [boxes[level]],
                transfo,
            });
            return node;
        },
        subdivisions: 5,
    });
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [lod],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
    }));
    context.paint();
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 1000,
        inertiaZoom: 1000,
    });
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true, assets: {
            glb: { box: _box_glb__rspack_import_3 },
        } }));
}


},
5253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(7439);





function CodeViewerView(props) {
    const { value } = props;
    if (typeof value === "string") {
        const singleProps = {
            ...props,
            value,
        };
        return (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { ...singleProps });
    }
    const multiProps = {
        ...props,
        value,
    };
    return (0,react_jsx_runtime__rspack_import_0.jsx)(MultiCodeViewerView, { ...multiProps });
}
function SingleCodeViewerView(props) {
    const refTimeout = react__rspack_import_2.useRef(0);
    const [popup, setPopup] = react__rspack_import_2.useState(false);
    const refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current;
            if (!code)
                return;
            const html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [props.value, props.language, refCode.current]);
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000);
        });
    };
    const handlePopupClick = () => {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: getClassNames(props), onDoubleClick: handleDoubleClick, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("code", { ref: refCode, className: `language-${props.language}` }) }), popup && ((0,react_jsx_runtime__rspack_import_0.jsx)("button", { className: _CodeViewer_module_css__rspack_import_3["default"].popup, onClick: handlePopupClick, type: "button", children: (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "This code has been copied to the clipboard!" }) }))] }));
}
function getClassNames(props) {
    const classNames = [_CodeViewer_module_css__rspack_import_3["default"].CodeViewer];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    const captions = Object.keys(props.value);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, { children: captions.map((caption, index) => ((0,react_jsx_runtime__rspack_import_0.jsxs)("details", { open: false, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: caption }), (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { value: props.value[caption], language: props.language })] }, caption))) }));
}


},
7439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
/* import */ var prismjs__rspack_import_0 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_0);
/* import */ var prismjs_components_prism_javascript__rspack_import_1 = __webpack_require__(25723);
/* import */ var prismjs_components_prism_javascript__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__rspack_import_1);
/* import */ var prismjs_components_prism_jsx__rspack_import_2 = __webpack_require__(65903);
/* import */ var prismjs_components_prism_jsx__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__rspack_import_2);
/* import */ var prismjs_components_prism_typescript__rspack_import_3 = __webpack_require__(59587);
/* import */ var prismjs_components_prism_typescript__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__rspack_import_3);
/* import */ var prismjs_components_prism_tsx__rspack_import_4 = __webpack_require__(82769);
/* import */ var prismjs_components_prism_tsx__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__rspack_import_4);
/* import */ var prismjs_components_prism_c__rspack_import_5 = __webpack_require__(50271);
/* import */ var prismjs_components_prism_c__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__rspack_import_5);
/* import */ var prismjs_components_prism_glsl__rspack_import_6 = __webpack_require__(73980);
/* import */ var prismjs_components_prism_glsl__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__rspack_import_6);







function getGrammarForLanguage(language) {
    switch (language) {
        case "ts":
            return (prismjs__rspack_import_0_default().languages.typescript);
        case "tsx":
            return (prismjs__rspack_import_0_default().languages.tsx);
        case "frag":
        case "vert":
            return (prismjs__rspack_import_0_default().languages.glsl);
        default:
            return GLSL;
    }
}
const TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void",
];
const KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile",
];
const GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID",
];
const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16",
];
const GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true,
        },
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true,
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS),
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`),
        lookbehind: false,
        greedy: true,
    };
}


},
99002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(5253);



},
83714(module) {
module.exports = "data:model/gltf-binary;base64,Z2xURgIAAACcFwAAQAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NS4wLjIxIiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzBdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiQ3ViZSJ9XSwibWVzaGVzIjpbeyJuYW1lIjoiQ3ViZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MX0sImluZGljZXMiOjJ9XX1dLCJhY2Nlc3NvcnMiOlt7ImJ1ZmZlclZpZXciOjAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoxOTIsIm1heCI6WzAuNTAxMDUxNzgzNTYxNzA2NSwwLjUwMTA1MTc4MzU2MTcwNjUsMC41MDEwNTE3ODM1NjE3MDY1XSwibWluIjpbLTAuNTAxMDUxNzgzNTYxNzA2NSwtMC41MDEwNTE3ODM1NjE3MDY1LC0wLjUwMTA1MTc4MzU2MTcwNjVdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE5MiwidHlwZSI6IlZFQzMifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50IjoyODgsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjIzMDQsImJ5dGVPZmZzZXQiOjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoyMzA0LCJieXRlT2Zmc2V0IjoyMzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6NTc2LCJieXRlT2Zmc2V0Ijo0NjA4LCJ0YXJnZXQiOjM0OTYzfV0sImJ1ZmZlcnMiOlt7ImJ5dGVMZW5ndGgiOjUxODR9XX0gQBQAAEJJTgCRJPI+kSTyPpEk8r6RJPI+kSTyPpEk8r6RJPI+kSTyPpEk8r6RJPI+kSTyPpEk8r6RJPI+kSTyPpEk8r6RJPI+kSTyPpEk8r7uRAA/7kQAP+5EAL/uRAA/7kQAP+5EAL/uRAA/7kQAP+5EAL/uRAA/7kQAP+5EAL/uRAA/7kQAP+5EAL/uRAA/7kQAP+5EAL+RJPI+kSTyvpEk8r6RJPI+kSTyvpEk8r6RJPI+kSTyvpEk8r6RJPI+kSTyvpEk8r6RJPI+kSTyvpEk8r6RJPI+kSTyvpEk8r7uRAA/7kQAv+5EAL/uRAA/7kQAv+5EAL/uRAA/7kQAv+5EAL/uRAA/7kQAv+5EAL/uRAA/7kQAv+5EAL/uRAA/7kQAv+5EAL+RJPI+kSTyPpEk8j6RJPI+kSTyPpEk8j6RJPI+kSTyPpEk8j6RJPI+kSTyPpEk8j6RJPI+kSTyPpEk8j6RJPI+kSTyPpEk8j7uRAA/7kQAP+5EAD/uRAA/7kQAP+5EAD/uRAA/7kQAP+5EAD/uRAA/7kQAP+5EAD/uRAA/7kQAP+5EAD/uRAA/7kQAP+5EAD+RJPI+kSTyvpEk8j6RJPI+kSTyvpEk8j6RJPI+kSTyvpEk8j6RJPI+kSTyvpEk8j6RJPI+kSTyvpEk8j6RJPI+kSTyvpEk8j7uRAA/7kQAv+5EAD/uRAA/7kQAv+5EAD/uRAA/7kQAv+5EAD/uRAA/7kQAv+5EAD/uRAA/7kQAv+5EAD/uRAA/7kQAv+5EAD+RJPK+kSTyPpEk8r6RJPK+kSTyPpEk8r6RJPK+kSTyPpEk8r6RJPK+kSTyPpEk8r6RJPK+kSTyPpEk8r6RJPK+kSTyPpEk8r7uRAC/7kQAP+5EAL/uRAC/7kQAP+5EAL/uRAC/7kQAP+5EAL/uRAC/7kQAP+5EAL/uRAC/7kQAP+5EAL/uRAC/7kQAP+5EAL+RJPK+kSTyvpEk8r6RJPK+kSTyvpEk8r6RJPK+kSTyvpEk8r6RJPK+kSTyvpEk8r6RJPK+kSTyvpEk8r6RJPK+kSTyvpEk8r7uRAC/7kQAv+5EAL/uRAC/7kQAv+5EAL/uRAC/7kQAv+5EAL/uRAC/7kQAv+5EAL/uRAC/7kQAv+5EAL/uRAC/7kQAv+5EAL+RJPK+kSTyPpEk8j6RJPK+kSTyPpEk8j6RJPK+kSTyPpEk8j6RJPK+kSTyPpEk8j6RJPK+kSTyPpEk8j6RJPK+kSTyPpEk8j7uRAC/7kQAP+5EAD/uRAC/7kQAP+5EAD/uRAC/7kQAP+5EAD/uRAC/7kQAP+5EAD/uRAC/7kQAP+5EAD/uRAC/7kQAP+5EAD+RJPK+kSTyvpEk8j6RJPK+kSTyvpEk8j6RJPK+kSTyvpEk8j6RJPK+kSTyvpEk8j6RJPK+kSTyvpEk8j6RJPK+kSTyvpEk8j7uRAC/7kQAv+5EAD/uRAC/7kQAv+5EAD/uRAC/7kQAv+5EAD/uRAC/7kQAv+5EAD/uRAC/7kQAv+5EAD/uRAC/7kQAv+5EAD+n3+w+N1f5Pqff7L6n3+w+N1f5Pqff7L6n3+w+N1f5Pqff7L6n3+w+N1f5Pqff7L6n3+y+N1f5Pqff7L6n3+y+N1f5Pqff7L6n3+y+N1f5Pqff7L6n3+y+N1f5Pqff7L6n3+y+N1f5Pqff7D6n3+y+N1f5Pqff7D6n3+y+N1f5Pqff7D6n3+y+N1f5Pqff7D6n3+w+N1f5Pqff7D6n3+w+N1f5Pqff7D6n3+w+N1f5Pqff7D6n3+w+N1f5Pqff7D6n3+w+p9/svjdX+T6n3+w+p9/svjdX+T6n3+w+p9/svjdX+T6n3+w+p9/svjdX+T6n3+w+p9/sPjdX+T6n3+w+p9/sPjdX+T6n3+w+p9/sPjdX+T6n3+w+p9/sPjdX+T6n3+y+p9/sPjdX+T6n3+y+p9/sPjdX+T6n3+y+p9/sPjdX+T6n3+y+p9/sPjdX+T6n3+y+p9/svjdX+T6n3+y+p9/svjdX+T6n3+y+p9/svjdX+T6n3+y+p9/svjdX+T43V/m+p9/svqff7D43V/m+p9/svqff7D43V/m+p9/svqff7D43V/m+p9/svqff7D43V/m+p9/sPqff7D43V/m+p9/sPqff7D43V/m+p9/sPqff7D43V/m+p9/sPqff7D43V/m+p9/sPqff7L43V/m+p9/sPqff7L43V/m+p9/sPqff7L43V/m+p9/sPqff7L43V/m+p9/svqff7L43V/m+p9/svqff7L43V/m+p9/svqff7L43V/m+p9/svqff7L6n3+y+N1f5vqff7L6n3+y+N1f5vqff7L6n3+y+N1f5vqff7L6n3+y+N1f5vqff7L6n3+w+N1f5vqff7L6n3+w+N1f5vqff7L6n3+w+N1f5vqff7L6n3+w+N1f5vqff7L6n3+w+N1f5vqff7D6n3+w+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AAAAAK5ncL+hkE6/AAAAANc3Fz8AAAAAlfivPq5ncL8AAAAAoZBOP9c3Fz+V+K++AAAAAK5ncL+hkE6/AAAAANc3Fz9hAGUAMABhADAAAABkAGAABgBkAAYANgBnAGsATQBnAE0ANQBqAGYAOQBqADkAUQBpAG0AGABpABgASABsAGgATgBsAE4AHgBvAGMABQBvAAUAHQBiAG4AIwBiACMACwBzAHcAHABzABwAKAB2AHIALgB2AC4AIgB1AHkASQB1AEkAGQB4AHQAHwB4AB8ATwB7AH8AWAB7AFgATAB+AHoAUAB+AFAAXAB9AHEAJQB9ACUAVQBwAHwAWgBwAFoAKgCAAIQASgCAAEoAVgCGAIIAXgCGAF4AUgCFAIkAMwCFADMASwCLAIcAUwCLAFMAOwCIAIwAPgCIAD4AMgCOAIoAOgCOADoARgCNAIEAVwCNAFcAPwCDAI8ARwCDAEcAXwCQAJQADACQAAwAPACVAJEAQwCVAEMAEwCXAJsAKQCXACkAEQCaAJYAFwCaABcALwCYAJwAVACYAFQAJACdAJkAKwCdACsAWwCfAJMAQQCfAEEAWQCSAJ4AXQCSAF0ARQCiAKYAAgCiAAIADgCkAKAAFACkABQACACnAKsAGwCnABsAAwCpAKUACQCpAAkAIQCqAK4AJgCqACYAGgCsAKgAIACsACAALACvAKMADwCvAA8AJwChAK0ALQChAC0AFQCzALcANACzADQAQAC2ALIARAC2AEQAOAC1ALkAAQC1AAEAMQC4ALQANwC4ADcABwC7AL8AEAC7ABAABAC+ALoACgC+AAoAFgC9ALEAPQC9AD0ADQCwALwAEgCwABIAQgA=";

},
80540(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(7294);
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
                    href: "docs/classes/TgdPainterLOD.html",
                    children: "TgdPainterLOD"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this demo, we just create a sphere that fills the bounding box of the current level of details.\nThe higher the level, the more high res the sphere is."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This is just a way for you to see how the octree splitting acts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/lod/detail",
                        children: "next demo"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, this),
                    " is a more useful usecase: we will display a complex mesh that looks more detailed when we are near."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jc3Mtc3JjX2NvbXBvbmVudHNfcy1hNTAzZjkuMTllMWJlNTYzMmE2NmM1Mi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21haW4uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgIFwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLmZvdnkgPSB0Z2RDYWxjRGVnVG9SYWQoNjApXFxuXFx0XFx0Y2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSA2XFxuXFx0fVxcblxcdGNhbWVyYS5uZWFyID0gMWUtMlxcblxcdGNhbWVyYS5mYXIgPSAxZTJcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuXFx0Y29uc3QgYmJveDoge1xcblxcdFxcdG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcblxcdFxcdG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcblxcdH0gPSB7XFxuXFx0XFx0bWluOiBbLTEsIC0xLCAtMV0sXFxuXFx0XFx0bWF4OiBbKzEsICsxLCArMV0sXFxuXFx0fVxcblxcdGNvbnN0IFttaW5YLCBtaW5ZLCBtaW5aXSA9IGJib3gubWluXFxuXFx0Y29uc3QgW21heFgsIG1heFksIG1heFpdID0gYmJveC5tYXhcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA4LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuXFx0Y29uc3QgbGV2ZWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdXFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gbGV2ZWxzLm1hcChcXG5cXHRcXHQoaSkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tpXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29uc3QgYm94ZXMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChpKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLmJveCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWxzW2ldLFxcblxcdFxcdFxcdH0pLFxcblxcdClcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBzaXplID0gMiAqKiAtbGV2ZWxcXG5cXHRcXHRcXHRjb25zdCBzaXplWCA9IHNpemUgKiAobWF4WCAtIG1pblgpXFxuXFx0XFx0XFx0Y29uc3Qgc2l6ZVkgPSBzaXplICogKG1heFkgLSBtaW5ZKVxcblxcdFxcdFxcdGNvbnN0IHNpemVaID0gc2l6ZSAqIChtYXhaIC0gbWluWilcXG5cXHRcXHRcXHRjb25zdCBjZW50ZXI6IEFycmF5TnVtYmVyMyA9IFtcXG5cXHRcXHRcXHRcXHQoeCArIDAuNSkgKiBzaXplWCArIG1pblgsXFxuXFx0XFx0XFx0XFx0KHkgKyAwLjUpICogc2l6ZVkgKyBtaW5ZLFxcblxcdFxcdFxcdFxcdCh6ICsgMC41KSAqIHNpemVaICsgbWluWixcXG5cXHRcXHRcXHRdXFxuXFx0XFx0XFx0Y29uc3QgdHJhbnNmbyA9IG5ldyBUZ2RUcmFuc2ZvKClcXG5cXHRcXHRcXHR0cmFuc2ZvLnNldFBvc2l0aW9uKGNlbnRlcikuc2V0U2NhbGUoc2l6ZVgsIHNpemVZLCBzaXplWilcXG5cXHRcXHRcXHRjb25zdCBub2RlID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG5cXHRcXHRcXHRcXHRuYW1lOiBgKCR7eH0sICR7eX0sICR7en0pLyR7bGV2ZWx9YCxcXG5cXHRcXHRcXHRcXHRjaGlsZHJlbjogW2JveGVzW2xldmVsXV0sXFxuXFx0XFx0XFx0XFx0dHJhbnNmbyxcXG5cXHRcXHRcXHR9KVxcblxcdFxcdFxcdHJldHVybiBub2RlXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDUsXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdH0pXFxufVwiLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjMsXFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0VGdkQ2FtZXJhUGVyc3BlY3RpdmUsXFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG5cXHRUZ2RHZW9tZXRyeVNwaGVyZUljbyxcXG5cXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJMT0QsXFxuXFx0VGdkUGFpbnRlck1lc2gsXFxuXFx0VGdkUGFpbnRlck1lc2hHbHRmLFxcblxcdFRnZFBhaW50ZXJOb2RlLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHRUZ2RUcmFuc2ZvLFxcblxcdHRnZENhbGNEZWdUb1JhZCxcXG5cXHR0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBCb3hVUkwgZnJvbSBcIi4vYm94LmdsYlwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuXFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRnZENhbWVyYVBlcnNwZWN0aXZlKSB7XFxuXFx0XFx0Y2FtZXJhLmZvdnkgPSB0Z2RDYWxjRGVnVG9SYWQoNjApXFxuXFx0XFx0Y2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSA2XFxuXFx0fVxcblxcdGNhbWVyYS5uZWFyID0gMWUtMlxcblxcdGNhbWVyYS5mYXIgPSAxZTJcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuXFx0Y29uc3QgYmJveDoge1xcblxcdFxcdG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcblxcdFxcdG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcblxcdH0gPSB7XFxuXFx0XFx0bWluOiBbLTEsIC0xLCAtMV0sXFxuXFx0XFx0bWF4OiBbKzEsICsxLCArMV0sXFxuXFx0fVxcblxcdGNvbnN0IFttaW5YLCBtaW5ZLCBtaW5aXSA9IGJib3gubWluXFxuXFx0Y29uc3QgW21heFgsIG1heFksIG1heFpdID0gYmJveC5tYXhcXG5cXHRjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcblxcdFxcdHN0ZXBzOiA4LFxcblxcdH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuXFx0Y29uc3QgbGV2ZWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdXFxuXFx0Y29uc3QgbWF0ZXJpYWxzID0gbGV2ZWxzLm1hcChcXG5cXHRcXHQoaSkgPT5cXG5cXHRcXHRcXHRuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG5cXHRcXHRcXHRcXHRsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuXFx0XFx0XFx0XFx0Y29sb3I6IENPTE9SU1tpXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29uc3QgYm94ZXMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcblxcdFxcdChpKSA9PlxcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGFzc2V0OiBhc3NldHMuZ2xiLmJveCxcXG5cXHRcXHRcXHRcXHRtYXRlcmlhbDogbWF0ZXJpYWxzW2ldLFxcblxcdFxcdFxcdH0pLFxcblxcdClcXG5cXHRjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuXFx0XFx0YmJveCxcXG5cXHRcXHRhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG5cXHRcXHRcXHRjb25zdCBzaXplID0gMiAqKiAtbGV2ZWxcXG5cXHRcXHRcXHRjb25zdCBzaXplWCA9IHNpemUgKiAobWF4WCAtIG1pblgpXFxuXFx0XFx0XFx0Y29uc3Qgc2l6ZVkgPSBzaXplICogKG1heFkgLSBtaW5ZKVxcblxcdFxcdFxcdGNvbnN0IHNpemVaID0gc2l6ZSAqIChtYXhaIC0gbWluWilcXG5cXHRcXHRcXHRjb25zdCBjZW50ZXI6IEFycmF5TnVtYmVyMyA9IFtcXG5cXHRcXHRcXHRcXHQoeCArIDAuNSkgKiBzaXplWCArIG1pblgsXFxuXFx0XFx0XFx0XFx0KHkgKyAwLjUpICogc2l6ZVkgKyBtaW5ZLFxcblxcdFxcdFxcdFxcdCh6ICsgMC41KSAqIHNpemVaICsgbWluWixcXG5cXHRcXHRcXHRdXFxuXFx0XFx0XFx0Y29uc3QgdHJhbnNmbyA9IG5ldyBUZ2RUcmFuc2ZvKClcXG5cXHRcXHRcXHR0cmFuc2ZvLnNldFBvc2l0aW9uKGNlbnRlcikuc2V0U2NhbGUoc2l6ZVgsIHNpemVZLCBzaXplWilcXG5cXHRcXHRcXHRjb25zdCBub2RlID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcXG5cXHRcXHRcXHRcXHRuYW1lOiBgKCR7eH0sICR7eX0sICR7en0pLyR7bGV2ZWx9YCxcXG5cXHRcXHRcXHRcXHRjaGlsZHJlbjogW2JveGVzW2xldmVsXV0sXFxuXFx0XFx0XFx0XFx0dHJhbnNmbyxcXG5cXHRcXHRcXHR9KVxcblxcdFxcdFxcdHJldHVybiBub2RlXFxuXFx0XFx0fSxcXG5cXHRcXHRzdWJkaXZpc2lvbnM6IDUsXFxuXFx0fSlcXG5cXHRjb250ZXh0LmFkZChcXG5cXHRcXHRjbGVhcixcXG5cXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRjaGlsZHJlbjogW2xvZF0sXFxuXFx0XFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHR9KSxcXG5cXHQpXFxuXFx0Y29udGV4dC5wYWludCgpXFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdFxcdGluZXJ0aWFab29tOiAxMDAwLFxcblxcdH0pXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9e2luaXR9XFxuXFx0XFx0XFx0Z2l6bW9cXG5cXHRcXHRcXHRhc3NldHM9e3tcXG5cXHRcXHRcXHRcXHRnbGI6IHsgYm94OiBCb3hVUkwgfSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RHZW9tZXRyeVNwaGVyZUljbyxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMT0QsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUcmFuc2ZvLFxuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQm94VVJMIGZyb20gXCIuL2JveC5nbGJcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuICAgICAgICBjYW1lcmEuZm92eSA9IHRnZENhbGNEZWdUb1JhZCg2MClcbiAgICAgICAgY2FtZXJhLnNwYWNlSGVpZ2h0QXRUYXJnZXQgPSA2XG4gICAgfVxuICAgIGNhbWVyYS5uZWFyID0gMWUtMlxuICAgIGNhbWVyYS5mYXIgPSAxZTJcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXG4gICAgY29uc3QgYmJveDoge1xuICAgICAgICBtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XG4gICAgfSA9IHtcbiAgICAgICAgbWluOiBbLTEsIC0xLCAtMV0sXG4gICAgICAgIG1heDogWysxLCArMSwgKzFdLFxuICAgIH1cbiAgICBjb25zdCBbbWluWCwgbWluWSwgbWluWl0gPSBiYm94Lm1pblxuICAgIGNvbnN0IFttYXhYLCBtYXhZLCBtYXhaXSA9IGJib3gubWF4XG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcbiAgICAgICAgc3RlcHM6IDgsXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcbiAgICBjb25zdCBsZXZlbHMgPSBbMCwgMSwgMiwgMywgNCwgNV1cbiAgICBjb25zdCBtYXRlcmlhbHMgPSBsZXZlbHMubWFwKFxuICAgICAgICAoaSkgPT5cbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuICAgICAgICAgICAgICAgIGxvY2tMaWdodHNUb0NhbWVyYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2ldLFxuICAgICAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnN0IGJveGVzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcbiAgICAgICAgKGkpID0+XG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi5ib3gsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tpXSxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XG4gICAgICAgIGJib3gsXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IDIgKiogLWxldmVsXG4gICAgICAgICAgICBjb25zdCBzaXplWCA9IHNpemUgKiAobWF4WCAtIG1pblgpXG4gICAgICAgICAgICBjb25zdCBzaXplWSA9IHNpemUgKiAobWF4WSAtIG1pblkpXG4gICAgICAgICAgICBjb25zdCBzaXplWiA9IHNpemUgKiAobWF4WiAtIG1pblopXG4gICAgICAgICAgICBjb25zdCBjZW50ZXI6IEFycmF5TnVtYmVyMyA9IFsoeCArIDAuNSkgKiBzaXplWCArIG1pblgsICh5ICsgMC41KSAqIHNpemVZICsgbWluWSwgKHogKyAwLjUpICogc2l6ZVogKyBtaW5aXVxuICAgICAgICAgICAgY29uc3QgdHJhbnNmbyA9IG5ldyBUZ2RUcmFuc2ZvKClcbiAgICAgICAgICAgIHRyYW5zZm8uc2V0UG9zaXRpb24oY2VudGVyKS5zZXRTY2FsZShzaXplWCwgc2l6ZVksIHNpemVaKVxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUZ2RQYWludGVyTm9kZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogYCgke3h9LCAke3l9LCAke3p9KS8ke2xldmVsfWAsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtib3hlc1tsZXZlbF1dLFxuICAgICAgICAgICAgICAgIHRyYW5zZm8sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgc3ViZGl2aXNpb25zOiA1LFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGNsZWFyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kXSxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcbiAgICB9KVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgZ2l6bW9cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBib3g6IEJveFVSTCB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7Ozs7QUNFako7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixNQUFNLEtBQUssR0FBRztJQUNWLFdBQVcsRUFDUCxraEVBQWtoRTtDQUN6aEU7QUFDRCxNQUFNLElBQUksR0FDTiw4cUZBQThxRjtBQUVucUYsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxDQUNILHNHQUNJLG9EQUFLLFNBQVMsRUFBQyxXQUFXLFlBQ3RCLDJDQUFDLHNDQUFJLEtBQUcsR0FDTixFQUNOLHFEQUFLLFNBQVMsRUFBQyxZQUFZLGFBQ3ZCLDhEQUNJLDJDQUFDLHlDQUFVLElBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQ3ZELElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUNyQyxHQUNYLEVBQ04sMkNBQUMsdURBQVUsSUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFJLElBQ3ZELElBQ1AsQ0FDTjtBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDZHNCO0FBRWtDO0FBRTNCO0FBRzlCLFNBQVMsSUFBSSxDQUFDLE9B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