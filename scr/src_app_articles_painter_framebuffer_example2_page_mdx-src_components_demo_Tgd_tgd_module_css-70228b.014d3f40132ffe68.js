"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_example2_page_mdx-src_components_demo_Tgd_tgd_module_css-70228b"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
28531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _material__rspack_import_3 = __webpack_require__(67132);
/* import */ var _assets_mesh_cube_glb__rspack_import_4 = __webpack_require__(41839);
/* import */ var _assets_image_dino_webp__rspack_import_5 = __webpack_require__(44859);






function init(context, assets) {
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: { distance: 0 },
        far: 100,
        near: 0.01,
        fovy: Math.PI * 0.25,
        zoom: 0.333,
    });
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
    });
    const framebufferRender = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context),
    });
    const framebufferCopy = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context),
    });
    const material = new _material__rspack_import_3.Material();
    material.texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(assets.image.background);
    const painter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: new _tolokoban_tgd__rspack_import_1.TgdVec4(),
                depth: 1,
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset: assets.glb.mesh,
                material: () => material,
            }),
        ],
    });
    framebufferRender.add(painter);
    const copy = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilterHueRotation({
                hueShiftInDegrees: 90,
            }),
        ],
        texture: framebufferRender.textureColor0,
    });
    framebufferCopy.add(copy);
    const screen = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        texture: framebufferRender.textureColor0,
        filters: [new _tolokoban_tgd__rspack_import_1.TgdFilterZoom({ zoom: 1.1 })],
        flipY: true,
    });
    context.add(framebufferRender, framebufferCopy, screen, new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((_, delta) => {
        const { camera } = context;
        camera.transfo.orbitAroundY(delta);
    }));
    context.play();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            glb: {
                mesh: _assets_mesh_cube_glb__rspack_import_4,
            },
            image: {
                background: _assets_image_dino_webp__rspack_import_5,
            },
        } }));
}


},
46451(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(28531);





const FOCUS = { "Detail #1": "    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 0 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI * 0.25,\n        zoom: 0.333,\n    })\n    new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    const framebufferRender = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const framebufferCopy = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const material = new Material()\n    material.texture = new TgdTexture2D(context).loadBitmap(assets.image.background)\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        // cull: webglPresetCull.front,\n        children: [\n            new TgdPainterClear(context, {\n                color: new TgdVec4(),\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                material: () => material,\n            }),\n        ],\n    })\n    framebufferRender.add(painter)\n    const copy = new TgdPainterFilter(context, {\n        filters: [\n            new TgdFilterHueRotation({\n                hueShiftInDegrees: 90,\n            }),\n        ],\n        texture: framebufferRender.textureColor0,\n    })\n    framebufferCopy.add(copy)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebufferRender.textureColor0,\n        filters: [new TgdFilterZoom({ zoom: 1.1 })],\n        flipY: true,\n    })\n    context.add(\n        framebufferRender,\n        framebufferCopy,\n        screen,\n        new TgdPainterLogic((_, delta) => {\n            const { camera } = context\n            camera.transfo.orbitAroundY(delta)\n        }),\n    )\n    context.play()" };
const FULL = "import {\n    TgdCameraPerspective,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdFilterHueRotation,\n    TgdFilterZoom,\n    TgdPainterClear,\n    TgdPainterFilter,\n    TgdPainterFramebuffer,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdVec4,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\nimport View, { Assets } from \"@/components/demo/Tgd\"\nimport { Material } from \"./material\"\n\nimport CubeURL from \"@/assets/mesh/cube.glb\"\nimport BackgroundURL from \"@/assets/image/dino.webp\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 0 },\n        far: 100,\n        near: 0.01,\n        fovy: Math.PI * 0.25,\n        zoom: 0.333,\n    })\n    new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n    })\n    const framebufferRender = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const framebufferCopy = new TgdPainterFramebuffer(context, {\n        textureColor0: new TgdTexture2D(context),\n    })\n    const material = new Material()\n    material.texture = new TgdTexture2D(context).loadBitmap(assets.image.background)\n    const painter = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        // cull: webglPresetCull.front,\n        children: [\n            new TgdPainterClear(context, {\n                color: new TgdVec4(),\n                depth: 1,\n            }),\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.mesh,\n                material: () => material,\n            }),\n        ],\n    })\n    framebufferRender.add(painter)\n    const copy = new TgdPainterFilter(context, {\n        filters: [\n            new TgdFilterHueRotation({\n                hueShiftInDegrees: 90,\n            }),\n        ],\n        texture: framebufferRender.textureColor0,\n    })\n    framebufferCopy.add(copy)\n    const screen = new TgdPainterFilter(context, {\n        texture: framebufferRender.textureColor0,\n        filters: [new TgdFilterZoom({ zoom: 1.1 })],\n        flipY: true,\n    })\n    context.add(\n        framebufferRender,\n        framebufferCopy,\n        screen,\n        new TgdPainterLogic((_, delta) => {\n            const { camera } = context\n            camera.transfo.orbitAroundY(delta)\n        }),\n    )\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                glb: {\n                    mesh: CubeURL,\n                },\n                image: {\n                    background: BackgroundURL,\n                },\n            }}\n        />\n    )\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_framebuffer_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
67132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Material: () => (Material)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class Material extends _tolokoban_tgd__rspack_import_0.TgdMaterial {
    texture = undefined;
    constructor() {
        super({
            uniforms: { texDiffuse: "sampler2D", uniTime: "float" },
            varyings: { varUV: "vec2" },
            fragmentShaderCode: [
                `vec4 color1 = texture(texDiffuse, varUV * 1.0);`,
                `float k = 0.7071067811865476;`,
                `float ang = uniTime * .777;`,
                `vec4 color2 = vec4(`,
                [
                    `0.5 + k * sin(ang - 2.0943951023931953),`,
                    `0.5 + k * sin(ang),`,
                    `0.5 + k * sin(ang + 2.0943951023931953),`,
                    `1.0`,
                ],
                `);`,
                `vec2 p = 2.0 * (varUV - vec2(.5));`,
                `vec2 polar = vec2(`,
                [`length(p),`, `atan(p.y, p.x)`],
                `);`,
                `float alpha = 0.1 + 0.3 * (cos(uniTime * 1.451) * sin(uniTime) + 1.0);`,
                `polar.y -= uniTime * 1.421 * (1.0 + pow(polar.x, .5));`,
                `polar.x += 0.25 * sin(0.75 * uniTime + polar.y * 3.0) * cos(uniTime * 1.751);`,
                `float beta = 1.0 - smoothstep(0.0, 0.1 + 0.1 * abs(sin(uniTime * 1.1474) * cos(uniTime) * 1.452), abs(fract(polar.x * 0.90) - 0.5));`,
                `return mix(color1, color2, max(alpha, beta));`,
            ],
            vertexShaderCode: ["varUV = TEXCOORD_0;"],
            setUniforms: ({ program, time }) => {
                const { texture } = this;
                if (texture)
                    texture.activate(0, program, "texDiffuse");
                program.uniform1f("uniTime", time * 1e-3);
            },
        });
    }
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
44859(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dino.5737266deb4973e5.webp";

},
41839(module) {
module.exports = "data:model/gltf-binary;base64,Z2xURgIAAADABgAAXAMAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4zLjQ3IiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzBdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiQ3ViZSJ9XSwibWVzaGVzIjpbeyJuYW1lIjoiQ3ViZSIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIk5PUk1BTCI6MSwiVEVYQ09PUkRfMCI6Mn0sImluZGljZXMiOjN9XX1dLCJhY2Nlc3NvcnMiOlt7ImJ1ZmZlclZpZXciOjAsImNvbXBvbmVudFR5cGUiOjUxMjYsImNvdW50IjoyNCwibWF4IjpbMSwxLDFdLCJtaW4iOlstMSwtMSwtMV0sInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoxLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMzIn0seyJidWZmZXJWaWV3IjoyLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MjQsInR5cGUiOiJWRUMyIn0seyJidWZmZXJWaWV3IjozLCJjb21wb25lbnRUeXBlIjo1MTIzLCJjb3VudCI6MzYsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6MCwidGFyZ2V0IjozNDk2Mn0seyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjI4OCwiYnl0ZU9mZnNldCI6Mjg4LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTkyLCJieXRlT2Zmc2V0Ijo1NzYsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjo3MiwiYnl0ZU9mZnNldCI6NzY4LCJ0YXJnZXQiOjM0OTYzfV0sImJ1ZmZlcnMiOlt7ImJ5dGVMZW5ndGgiOjg0MH1dfUgDAABCSU4AAACAPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAPwAAgD8AAIA/AACAPwAAgD8AAIC/AACAPwAAgD8AAIC/AACAPwAAgD8AAIC/AACAPwAAgL8AAIA/AACAPwAAgL8AAIA/AACAPwAAgL8AAIA/AACAPwAAgL8AAIC/AACAPwAAgL8AAIC/AACAPwAAgL8AAIC/AACAvwAAgD8AAIA/AACAvwAAgD8AAIA/AACAvwAAgD8AAIA/AACAvwAAgD8AAIC/AACAvwAAgD8AAIC/AACAvwAAgD8AAIC/AACAvwAAgL8AAIA/AACAvwAAgL8AAIA/AACAvwAAgL8AAIA/AACAvwAAgL8AAIC/AACAvwAAgL8AAIC/AACAvwAAgL8AAIC/AAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgD8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIA/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAAAAAAAAAAAAAAIC/AAAAAAAAgL8AAAAAAACAvwAAAAAAAAAAuth/P7nYfz+22H8/uth/P7XYfz+52H8/uNh/P7nYfz+22H8/ACQdOgASHTq42H8/ACAdOrjYfz+42H8/uth/P7jYfz8AKB06uth/PwAcHToAHB06udh/PwAYHToAHB06uth/PwAoHToAFh06uth/P7bYfz+52H8/ACAdOrbYfz8AIh06ACQdOrrYfz8AKB06ACYdOgAcHTq62H8/ACgdOgAgHTq52H8/ACgdOgAQHToAIB06ABwdOgAgHToAKB06AAAMABIAAAASAAYACgAHABMACgATABYAFwAUAA4AFwAOABEADwADAAkADwAJABUABQACAAgABQAIAAsAEAANAAEAEAABAAQA";

},
45759(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(46451);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Example 2"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example2/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy03MDIyOGIuMDE0ZDNmNDAxMzJmZmU2OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMi9fL2ZyYW1lYnVmZmVyLmRlbW8vZnJhbWVidWZmZXIuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUyL18vZnJhbWVidWZmZXIuZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUyL18vZnJhbWVidWZmZXIuZGVtby9tYXRlcmlhbC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMi9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCJpbXBvcnQge1xuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxuICAgIFRnZEZpbHRlclpvb20sXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RWZWM0LFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcIi4vbWF0ZXJpYWxcIlxuXG5pbXBvcnQgQ3ViZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9jdWJlLmdsYlwiXG5pbXBvcnQgQmFja2dyb3VuZFVSTCBmcm9tIFwiQC9hc3NldHMvaW1hZ2UvZGluby53ZWJwXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcbiAgICAgICAgdHJhbnNmbzogeyBkaXN0YW5jZTogMCB9LFxuICAgICAgICBmYXI6IDEwMCxcbiAgICAgICAgbmVhcjogMC4wMSxcbiAgICAgICAgZm92eTogTWF0aC5QSSAqIDAuMjUsXG4gICAgICAgIHpvb206IDAuMzMzLFxuICAgIH0pXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIHNwZWVkUGFubmluZzogMCxcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgIH0pXG4gICAgY29uc3QgZnJhbWVidWZmZXJSZW5kZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcbiAgICB9KVxuICAgIGNvbnN0IGZyYW1lYnVmZmVyQ29weSA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxuICAgIH0pXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWF0ZXJpYWwoKVxuICAgIG1hdGVyaWFsLnRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpXG4gICAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuZnJvbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoKSxcbiAgICAgICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIubWVzaCxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKCkgPT4gbWF0ZXJpYWwsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGZyYW1lYnVmZmVyUmVuZGVyLmFkZChwYWludGVyKVxuICAgIGNvbnN0IGNvcHkgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG4gICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7XG4gICAgICAgICAgICAgICAgaHVlU2hpZnRJbkRlZ3JlZXM6IDkwLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyUmVuZGVyLnRleHR1cmVDb2xvcjAsXG4gICAgfSlcbiAgICBmcmFtZWJ1ZmZlckNvcHkuYWRkKGNvcHkpXG4gICAgY29uc3Qgc2NyZWVuID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlclJlbmRlci50ZXh0dXJlQ29sb3IwLFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjEgfSldLFxuICAgICAgICBmbGlwWTogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBmcmFtZWJ1ZmZlclJlbmRlcixcbiAgICAgICAgZnJhbWVidWZmZXJDb3B5LFxuICAgICAgICBzY3JlZW4sXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKF8sIGRlbHRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGNhbWVyYSB9ID0gY29udGV4dFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhKVxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzaDogQ3ViZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEJhY2tncm91bmRVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL2ZyYW1lYnVmZmVyLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAgfSxcXG4gICAgICAgIGZhcjogMTAwLFxcbiAgICAgICAgbmVhcjogMC4wMSxcXG4gICAgICAgIGZvdnk6IE1hdGguUEkgKiAwLjI1LFxcbiAgICAgICAgem9vbTogMC4zMzMsXFxuICAgIH0pXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgc3BlZWRQYW5uaW5nOiAwLFxcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlclJlbmRlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXJDb3B5ID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgpXFxuICAgIG1hdGVyaWFsLnRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuZnJvbnQsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoKSxcXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoKSA9PiBtYXRlcmlhbCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGZyYW1lYnVmZmVyUmVuZGVyLmFkZChwYWludGVyKVxcbiAgICBjb25zdCBjb3B5ID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7XFxuICAgICAgICAgICAgICAgIGh1ZVNoaWZ0SW5EZWdyZWVzOiA5MCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlclJlbmRlci50ZXh0dXJlQ29sb3IwLFxcbiAgICB9KVxcbiAgICBmcmFtZWJ1ZmZlckNvcHkuYWRkKGNvcHkpXFxuICAgIGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyUmVuZGVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjEgfSldLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZnJhbWVidWZmZXJSZW5kZXIsXFxuICAgICAgICBmcmFtZWJ1ZmZlckNvcHksXFxuICAgICAgICBzY3JlZW4sXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKChfLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIFRnZENhbWVyYVBlcnNwZWN0aXZlLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZEZpbHRlckh1ZVJvdGF0aW9uLFxcbiAgICBUZ2RGaWx0ZXJab29tLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RWZWM0LFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIlxcbmltcG9ydCB7IE1hdGVyaWFsIH0gZnJvbSBcXFwiLi9tYXRlcmlhbFxcXCJcXG5cXG5pbXBvcnQgQ3ViZVVSTCBmcm9tIFxcXCJAL2Fzc2V0cy9tZXNoL2N1YmUuZ2xiXFxcIlxcbmltcG9ydCBCYWNrZ3JvdW5kVVJMIGZyb20gXFxcIkAvYXNzZXRzL2ltYWdlL2Rpbm8ud2VicFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDAgfSxcXG4gICAgICAgIGZhcjogMTAwLFxcbiAgICAgICAgbmVhcjogMC4wMSxcXG4gICAgICAgIGZvdnk6IE1hdGguUEkgKiAwLjI1LFxcbiAgICAgICAgem9vbTogMC4zMzMsXFxuICAgIH0pXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgc3BlZWRQYW5uaW5nOiAwLFxcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICB9KVxcbiAgICBjb25zdCBmcmFtZWJ1ZmZlclJlbmRlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgfSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXJDb3B5ID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICB9KVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgpXFxuICAgIG1hdGVyaWFsLnRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpXFxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAvLyBjdWxsOiB3ZWJnbFByZXNldEN1bGwuZnJvbnQsXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoKSxcXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLm1lc2gsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoKSA9PiBtYXRlcmlhbCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGZyYW1lYnVmZmVyUmVuZGVyLmFkZChwYWludGVyKVxcbiAgICBjb25zdCBjb3B5ID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xcbiAgICAgICAgZmlsdGVyczogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RGaWx0ZXJIdWVSb3RhdGlvbih7XFxuICAgICAgICAgICAgICAgIGh1ZVNoaWZ0SW5EZWdyZWVzOiA5MCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgICAgICB0ZXh0dXJlOiBmcmFtZWJ1ZmZlclJlbmRlci50ZXh0dXJlQ29sb3IwLFxcbiAgICB9KVxcbiAgICBmcmFtZWJ1ZmZlckNvcHkuYWRkKGNvcHkpXFxuICAgIGNvbnN0IHNjcmVlbiA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG4gICAgICAgIHRleHR1cmU6IGZyYW1lYnVmZmVyUmVuZGVyLnRleHR1cmVDb2xvcjAsXFxuICAgICAgICBmaWx0ZXJzOiBbbmV3IFRnZEZpbHRlclpvb20oeyB6b29tOiAxLjEgfSldLFxcbiAgICAgICAgZmxpcFk6IHRydWUsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgZnJhbWVidWZmZXJSZW5kZXIsXFxuICAgICAgICBmcmFtZWJ1ZmZlckNvcHksXFxuICAgICAgICBzY3JlZW4sXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKChfLCBkZWx0YSkgPT4ge1xcbiAgICAgICAgICAgIGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0XFxuICAgICAgICAgICAgY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhKVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5wbGF5KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgZ2xiOiB7XFxuICAgICAgICAgICAgICAgICAgICBtZXNoOiBDdWJlVVJMLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQmFja2dyb3VuZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi90eXBlLWd1YXJkc1wiXG5pbXBvcnQgeyBUZ2RNYXRlcmlhbCwgVGdkUHJvZ3JhbSwgVGdkVGV4dHVyZTJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsIGV4dGVuZHMgVGdkTWF0ZXJpYWwge1xuICAgIHB1YmxpYyB0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWRcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICB1bmlmb3JtczogeyB0ZXhEaWZmdXNlOiBcInNhbXBsZXIyRFwiLCB1bmlUaW1lOiBcImZsb2F0XCIgfSxcbiAgICAgICAgICAgIHZhcnlpbmdzOiB7IHZhclVWOiBcInZlYzJcIiB9LFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICAgICAgYHZlYzQgY29sb3IxID0gdGV4dHVyZSh0ZXhEaWZmdXNlLCB2YXJVViAqIDEuMCk7YCxcbiAgICAgICAgICAgICAgICBgZmxvYXQgayA9IDAuNzA3MTA2NzgxMTg2NTQ3NjtgLFxuICAgICAgICAgICAgICAgIGBmbG9hdCBhbmcgPSB1bmlUaW1lICogLjc3NztgLFxuICAgICAgICAgICAgICAgIGB2ZWM0IGNvbG9yMiA9IHZlYzQoYCxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGAwLjUgKyBrICogc2luKGFuZyAtIDIuMDk0Mzk1MTAyMzkzMTk1MyksYCxcbiAgICAgICAgICAgICAgICAgICAgYDAuNSArIGsgKiBzaW4oYW5nKSxgLFxuICAgICAgICAgICAgICAgICAgICBgMC41ICsgayAqIHNpbihhbmcgKyAyLjA5NDM5NTEwMjM5MzE5NTMpLGAsXG4gICAgICAgICAgICAgICAgICAgIGAxLjBgLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYCk7YCxcbiAgICAgICAgICAgICAgICBgdmVjMiBwID0gMi4wICogKHZhclVWIC0gdmVjMiguNSkpO2AsXG4gICAgICAgICAgICAgICAgYHZlYzIgcG9sYXIgPSB2ZWMyKGAsXG4gICAgICAgICAgICAgICAgW2BsZW5ndGgocCksYCwgYGF0YW4ocC55LCBwLngpYF0sXG4gICAgICAgICAgICAgICAgYCk7YCxcbiAgICAgICAgICAgICAgICBgZmxvYXQgYWxwaGEgPSAwLjEgKyAwLjMgKiAoY29zKHVuaVRpbWUgKiAxLjQ1MSkgKiBzaW4odW5pVGltZSkgKyAxLjApO2AsXG4gICAgICAgICAgICAgICAgYHBvbGFyLnkgLT0gdW5pVGltZSAqIDEuNDIxICogKDEuMCArIHBvdyhwb2xhci54LCAuNSkpO2AsXG4gICAgICAgICAgICAgICAgYHBvbGFyLnggKz0gMC4yNSAqIHNpbigwLjc1ICogdW5pVGltZSArIHBvbGFyLnkgKiAzLjApICogY29zKHVuaVRpbWUgKiAxLjc1MSk7YCxcbiAgICAgICAgICAgICAgICBgZmxvYXQgYmV0YSA9IDEuMCAtIHNtb290aHN0ZXAoMC4wLCAwLjEgKyAwLjEgKiBhYnMoc2luKHVuaVRpbWUgKiAxLjE0NzQpICogY29zKHVuaVRpbWUpICogMS40NTIpLCBhYnMoZnJhY3QocG9sYXIueCAqIDAuOTApIC0gMC41KSk7YCxcbiAgICAgICAgICAgICAgICBgcmV0dXJuIG1peChjb2xvcjEsIGNvbG9yMiwgbWF4KGFscGhhLCBiZXRhKSk7YCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJVViA9IFRFWENPT1JEXzA7XCJdLFxuICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0sIHRpbWUgfTogeyBwcm9ncmFtOiBUZ2RQcm9ncmFtOyB0aW1lOiBudW1iZXIgfSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgdGV4dHVyZSB9ID0gdGhpc1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlKSB0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidGV4RGlmZnVzZVwiKVxuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTFmKFwidW5pVGltZVwiLCB0aW1lICogMWUtMylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7Ozs7Ozs7O0FDY25KO0FBQzZCO0FBQ2Y7QUFFTztBQUNRO0FBRXBELFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksb0RBQW9CLENBQUM7UUFDdEMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtRQUN4QixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO1FBQ1YsSUFB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