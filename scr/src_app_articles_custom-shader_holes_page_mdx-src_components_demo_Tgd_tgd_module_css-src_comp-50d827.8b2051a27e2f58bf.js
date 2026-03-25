"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_custom-shader_holes_page_mdx-src_components_demo_Tgd_tgd_module_css-src_comp-50d827"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
8373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (ViewShield)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_shield_glb__rspack_import_3 = __webpack_require__(67467);
/* import */ var _assets_background_png__rspack_import_4 = __webpack_require__(67496);





function ViewShield() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            image: {
                background: _assets_background_png__rspack_import_4,
            },
            glb: {
                shield: _assets_shield_glb__rspack_import_3,
            },
        } }));
}
function init(context, assets) {
    const asset = assets.glb.shield;
    const background = assets.image.background;
    const w = 4096;
    const h = w;
    const { canvas, ctx } = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(w, h);
    const holes = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(canvas);
    ctx.clearRect(0, 0, w, h);
    let count = 0;
    window.setInterval(() => {
        if (count > 59) {
            ctx.clearRect(0, 0, w, h);
            count = 0;
            return;
        }
        count++;
        ctx.fillStyle = "#fff";
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = 50 + 400 * Math.random();
        ctx.beginPath();
        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
        ctx.fill();
        holes.loadBitmap(canvas);
        context.paint();
    }, 500);
    context.camera.transfo.distance = 2.5;
    const painter = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
        asset,
        material: ({ color }) => {
            if (!(color instanceof _tolokoban_tgd__rspack_import_1.TgdTexture2D))
                throw Error("No abedo provided!");
            return new MaterialHole({ abedo: color, holes });
        },
    });
    const orbiter = new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 500,
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        blend: _tolokoban_tgd__rspack_import_1.webglPresetBlend.alpha,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: new _tolokoban_tgd__rspack_import_1.TgdVec4(0.5, 0.5, 0.5, 1),
                depth: 1,
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterBackground(context, {
                texture: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(background),
            }),
            painter,
        ],
    }));
    context.paint();
    context.canvas.addEventListener("dblclick", () => {
        orbiter.reset(300);
    });
}
class MaterialHole extends _tolokoban_tgd__rspack_import_1.TgdMaterial {
    constructor(options) {
        super({
            uniforms: {
                texAbedo: "sampler2D",
                texHoles: "sampler2D",
                uniLightDir: "vec3",
            },
            varyings: {
                varNormal: "vec3",
                varUV: "vec2",
            },
            fragmentShaderCode: [
                "vec3 normal = normalize(varNormal);",
                `float light = abs(dot(normal, uniLightDir));`,
                `light = pow(light, 9.0) * 0.9;`,
                `light += 0.2;`,
                `vec3 color = texture(texAbedo, varUV).rgb;`,
                `float spec = max(0.0, reflect(uniLightDir, normal).z);`,
                `spec = pow(spec, 20.0);`,
                `vec3 holes = texture(texHoles, varUV).rgb;`,
                `if (holes.r > 0.99) discard;`,
                `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,
            ],
            vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],
            setUniforms: ({ program }) => {
                program.uniform3fv("uniLightDir", this.lightDirection);
                this.options.abedo.activate(0, program, "texAbedo");
                this.options.holes.activate(1, program, "texHoles");
            },
        });
        this.options = options;
        this.lightDirection = new _tolokoban_tgd__rspack_import_1.TgdVec3(0.1, 0.2, 1);
    }
}


},
13423(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _Shield_demo__rspack_import_4 = __webpack_require__(8373);





const FOCUS = {
    "Initialising WebGL": 'function init(context: TgdContext, assets: Assets) {\n  const asset = assets.glb.shield;\n  const background = assets.image.background;\n\n  const w = 4096;\n  const h = w;\n  const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h);\n  const holes = new TgdTexture2D(context).loadBitmap(canvas);\n  ctx.clearRect(0, 0, w, h);\n  let count = 0;\n  window.setInterval(() => {\n    if (count > 59) {\n      ctx.clearRect(0, 0, w, h);\n      count = 0;\n      return;\n    }\n\n    count++;\n    ctx.fillStyle = "#fff";\n    const x = Math.random() * w;\n    const y = Math.random() * h;\n    const r = 50 + 400 * Math.random();\n    ctx.beginPath();\n    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);\n    ctx.fill();\n    holes.loadBitmap(canvas);\n    context.paint();\n  }, 500);\n  context.camera.transfo.distance = 2.5;\n  const painter = new TgdPainterMeshGltf(context, {\n    asset,\n    material: ({ color }) => {\n      if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!");\n\n      return new MaterialHole({ abedo: color, holes });\n    },\n  });\n  const orbiter = new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 500,\n  });\n  context.add(\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.less,\n      blend: webglPresetBlend.alpha,\n      children: [\n        new TgdPainterClear(context, {\n          color: new TgdVec4(0.5, 0.5, 0.5, 1),\n          depth: 1,\n        }),\n        new TgdPainterBackground(context, {\n          texture: new TgdTexture2D(context).loadBitmap(background),\n        }),\n        painter,\n      ],\n    }),\n  );\n  context.paint();\n  context.canvas.addEventListener("dblclick", () => {\n    orbiter.reset(300);\n  });\n}',
    "Class MaterialHole": 'interface MaterialHoleOptions {\n  abedo: TgdTexture2D;\n  holes: TgdTexture2D;\n}\n\nclass MaterialHole extends TgdMaterial {\n  private readonly lightDirection = new TgdVec3(0.1, 0.2, 1);\n\n  constructor(private readonly options: MaterialHoleOptions) {\n    super({\n      uniforms: {\n        texAbedo: "sampler2D",\n        texHoles: "sampler2D",\n        uniLightDir: "vec3",\n      },\n      varyings: {\n        varNormal: "vec3",\n        varUV: "vec2",\n      },\n      fragmentShaderCode: [\n        "vec3 normal = normalize(varNormal);",\n        `float light = abs(dot(normal, uniLightDir));`,\n        `light = pow(light, 9.0) * 0.9;`,\n        `light += 0.2;`,\n        `vec3 color = texture(texAbedo, varUV).rgb;`,\n        `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n        `spec = pow(spec, 20.0);`,\n        `vec3 holes = texture(texHoles, varUV).rgb;`,\n        `if (holes.r > 0.99) discard;`,\n        `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n      ],\n      vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n      setUniforms: ({ program }: { program: TgdProgram }): void => {\n        program.uniform3fv("uniLightDir", this.lightDirection);\n\n        this.options.abedo.activate(0, program, "texAbedo");\n        this.options.holes.activate(1, program, "texHoles");\n      },\n    });\n  }\n}',
};
const FULL = 'import * as React from "react";\nimport {\n  tgdCanvasCreateWithContext2D,\n  TgdContext,\n  TgdControllerCameraOrbit,\n  TgdMaterial,\n  TgdPainterBackground,\n  TgdPainterClear,\n  TgdPainterMeshGltf,\n  TgdPainterState,\n  TgdProgram,\n  TgdTexture2D,\n  TgdVec3,\n  TgdVec4,\n  webglPresetBlend,\n  webglPresetDepth,\n} from "@tolokoban/tgd";\n\nimport View, { Assets } from "@/components/demo/Tgd";\nimport AssetGlb from "../assets/shield.glb";\nimport AssetBackground from "../assets/background.png";\n\nexport default function ViewShield() {\n  return (\n    <View\n      onReady={init}\n      assets={{\n        image: {\n          background: AssetBackground,\n        },\n        glb: {\n          shield: AssetGlb,\n        },\n      }}\n    />\n  );\n}\n\nfunction init(context: TgdContext, assets: Assets) {\n  const asset = assets.glb.shield;\n  const background = assets.image.background;\n\n  const w = 4096;\n  const h = w;\n  const { canvas, ctx } = tgdCanvasCreateWithContext2D(w, h);\n  const holes = new TgdTexture2D(context).loadBitmap(canvas);\n  ctx.clearRect(0, 0, w, h);\n  let count = 0;\n  window.setInterval(() => {\n    if (count > 59) {\n      ctx.clearRect(0, 0, w, h);\n      count = 0;\n      return;\n    }\n\n    count++;\n    ctx.fillStyle = "#fff";\n    const x = Math.random() * w;\n    const y = Math.random() * h;\n    const r = 50 + 400 * Math.random();\n    ctx.beginPath();\n    ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);\n    ctx.fill();\n    holes.loadBitmap(canvas);\n    context.paint();\n  }, 500);\n  context.camera.transfo.distance = 2.5;\n  const painter = new TgdPainterMeshGltf(context, {\n    asset,\n    material: ({ color }) => {\n      if (!(color instanceof TgdTexture2D)) throw Error("No abedo provided!");\n\n      return new MaterialHole({ abedo: color, holes });\n    },\n  });\n  const orbiter = new TgdControllerCameraOrbit(context, {\n    inertiaOrbit: 500,\n  });\n  context.add(\n    new TgdPainterState(context, {\n      depth: webglPresetDepth.less,\n      blend: webglPresetBlend.alpha,\n      children: [\n        new TgdPainterClear(context, {\n          color: new TgdVec4(0.5, 0.5, 0.5, 1),\n          depth: 1,\n        }),\n        new TgdPainterBackground(context, {\n          texture: new TgdTexture2D(context).loadBitmap(background),\n        }),\n        painter,\n      ],\n    }),\n  );\n  context.paint();\n  context.canvas.addEventListener("dblclick", () => {\n    orbiter.reset(300);\n  });\n}\n\ninterface MaterialHoleOptions {\n  abedo: TgdTexture2D;\n  holes: TgdTexture2D;\n}\n\nclass MaterialHole extends TgdMaterial {\n  private readonly lightDirection = new TgdVec3(0.1, 0.2, 1);\n\n  constructor(private readonly options: MaterialHoleOptions) {\n    super({\n      uniforms: {\n        texAbedo: "sampler2D",\n        texHoles: "sampler2D",\n        uniLightDir: "vec3",\n      },\n      varyings: {\n        varNormal: "vec3",\n        varUV: "vec2",\n      },\n      fragmentShaderCode: [\n        "vec3 normal = normalize(varNormal);",\n        `float light = abs(dot(normal, uniLightDir));`,\n        `light = pow(light, 9.0) * 0.9;`,\n        `light += 0.2;`,\n        `vec3 color = texture(texAbedo, varUV).rgb;`,\n        `float spec = max(0.0, reflect(uniLightDir, normal).z);`,\n        `spec = pow(spec, 20.0);`,\n        `vec3 holes = texture(texHoles, varUV).rgb;`,\n        `if (holes.r > 0.99) discard;`,\n        `return vec4(color * light + spec + holes * 0.25, 1.0 - holes.r);`,\n      ],\n      vertexShaderCode: ["varNormal = mat3(uniModelViewMatrix) * NORMAL;", "varUV = TEXCOORD_0;"],\n      setUniforms: ({ program }: { program: TgdProgram }): void => {\n        program.uniform3fv("uniLightDir", this.lightDirection);\n\n        this.options.abedo.activate(0, program, "texAbedo");\n        this.options.holes.activate(1, program, "texHoles");\n      },\n    });\n  }\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_Shield_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
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
67496(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.208b55e8a2b87b4d.png";

},
67467(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/shield.01e1d6d9a55620b3.glb";

},
76272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _Shield__rspack_import_1 = __webpack_require__(13423);
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
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Punching holes in a shield"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this example, we randomly punch some holes in a mesh. For this, we use two\ntextures: one for the abedo of the mesh, and another one for the holes."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "As usual, you can move the shield with your pointer."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_Shield__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/custom-shader/holes/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfY3VzdG9tLXNoYWRlcl9ob2xlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC01MGQ4MjcuOGIyMDUxYTI3ZTJmNThiZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9jdXN0b20tc2hhZGVyL2hvbGVzL18vU2hpZWxkL1NoaWVsZC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9fL1NoaWVsZC9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvZ3JhbW1hci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvY3VzdG9tLXNoYWRlci9ob2xlcy9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtcbiAgICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZE1hdGVyaWFsLFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlYzMsXG4gICAgVGdkVmVjNCxcbiAgICB3ZWJnbFByZXNldEJsZW5kLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IEFzc2V0R2xiIGZyb20gXCIuLi9hc3NldHMvc2hpZWxkLmdsYlwiXG5pbXBvcnQgQXNzZXRCYWNrZ3JvdW5kIGZyb20gXCIuLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3U2hpZWxkKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQXNzZXRCYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIHNoaWVsZDogQXNzZXRHbGIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG4vLyAjcmVnaW9uIEluaXRpYWxpc2luZyBXZWJHTFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnN0IGFzc2V0ID0gYXNzZXRzLmdsYi5zaGllbGRcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmRcblxuICAgIGNvbnN0IHcgPSA0MDk2XG4gICAgY29uc3QgaCA9IHdcbiAgICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpXG4gICAgY29uc3QgaG9sZXMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcbiAgICBsZXQgY291bnQgPSAwXG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKGNvdW50ID4gNTkpIHtcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaClcbiAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb3VudCsrXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIlxuICAgICAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHdcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucmFuZG9tKCkgKiBoXG4gICAgICAgIGNvbnN0IHIgPSA1MCArIDQwMCAqIE1hdGgucmFuZG9tKClcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5lbGxpcHNlKHgsIHksIHIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIGhvbGVzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9LCA1MDApXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDIuNVxuICAgIGNvbnN0IHBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgYXNzZXQsXG4gICAgICAgIG1hdGVyaWFsOiAoeyBjb2xvciB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpXG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxIb2xlKHsgYWJlZG86IGNvbG9yLCBob2xlcyB9KVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDUwMCxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjUsIDAuNSwgMC41LCAxKSxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZTogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGJhY2tncm91bmQpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIHBhaW50ZXIsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICApXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgb3JiaXRlci5yZXNldCgzMDApXG4gICAgfSlcbn1cbi8vICNlbmRyZWdpb25cblxuLy8gI3JlZ2lvbiBDbGFzcyBNYXRlcmlhbEhvbGVcbmludGVyZmFjZSBNYXRlcmlhbEhvbGVPcHRpb25zIHtcbiAgICBhYmVkbzogVGdkVGV4dHVyZTJEXG4gICAgaG9sZXM6IFRnZFRleHR1cmUyRFxufVxuXG5jbGFzcyBNYXRlcmlhbEhvbGUgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBsaWdodERpcmVjdGlvbiA9IG5ldyBUZ2RWZWMzKDAuMSwgMC4yLCAxKVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBNYXRlcmlhbEhvbGVPcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdGV4QWJlZG86IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICAgICAgdGV4SG9sZXM6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICAgICAgdW5pTGlnaHREaXI6IFwidmVjM1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmdzOiB7XG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICAgICAgXCJ2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YXJOb3JtYWwpO1wiLFxuICAgICAgICAgICAgICAgIGBmbG9hdCBsaWdodCA9IGFicyhkb3Qobm9ybWFsLCB1bmlMaWdodERpcikpO2AsXG4gICAgICAgICAgICAgICAgYGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXG4gICAgICAgICAgICAgICAgYGxpZ2h0ICs9IDAuMjtgLFxuICAgICAgICAgICAgICAgIGB2ZWMzIGNvbG9yID0gdGV4dHVyZSh0ZXhBYmVkbywgdmFyVVYpLnJnYjtgLFxuICAgICAgICAgICAgICAgIGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxuICAgICAgICAgICAgICAgIGBzcGVjID0gcG93KHNwZWMsIDIwLjApO2AsXG4gICAgICAgICAgICAgICAgYHZlYzMgaG9sZXMgPSB0ZXh0dXJlKHRleEhvbGVzLCB2YXJVVikucmdiO2AsXG4gICAgICAgICAgICAgICAgYGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxuICAgICAgICAgICAgICAgIGByZXR1cm4gdmVjNChjb2xvciAqIGxpZ2h0ICsgc3BlYyArIGhvbGVzICogMC4yNSwgMS4wIC0gaG9sZXMucik7YCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBOT1JNQUw7XCIsIFwidmFyVVYgPSBURVhDT09SRF8wO1wiXSxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2Z2KFwidW5pTGlnaHREaXJcIiwgdGhpcy5saWdodERpcmVjdGlvbilcblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hYmVkby5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleEFiZWRvXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmhvbGVzLmFjdGl2YXRlKDEsIHByb2dyYW0sIFwidGV4SG9sZXNcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxufVxuLy8jZW5kcmVnaW9uXG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vU2hpZWxkLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcbiAgICBcIkluaXRpYWxpc2luZyBXZWJHTFwiOlxuICAgICAgICAnZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgY29uc3QgYXNzZXQgPSBhc3NldHMuZ2xiLnNoaWVsZDtcXG4gIGNvbnN0IGJhY2tncm91bmQgPSBhc3NldHMuaW1hZ2UuYmFja2dyb3VuZDtcXG5cXG4gIGNvbnN0IHcgPSA0MDk2O1xcbiAgY29uc3QgaCA9IHc7XFxuICBjb25zdCB7IGNhbnZhcywgY3R4IH0gPSB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEKHcsIGgpO1xcbiAgY29uc3QgaG9sZXMgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoY2FudmFzKTtcXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XFxuICBsZXQgY291bnQgPSAwO1xcbiAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcXG4gICAgaWYgKGNvdW50ID4gNTkpIHtcXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xcbiAgICAgIGNvdW50ID0gMDtcXG4gICAgICByZXR1cm47XFxuICAgIH1cXG5cXG4gICAgY291bnQrKztcXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xcbiAgICBjb25zdCB4ID0gTWF0aC5yYW5kb20oKSAqIHc7XFxuICAgIGNvbnN0IHkgPSBNYXRoLnJhbmRvbSgpICogaDtcXG4gICAgY29uc3QgciA9IDUwICsgNDAwICogTWF0aC5yYW5kb20oKTtcXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xcbiAgICBjdHguZWxsaXBzZSh4LCB5LCByLCByLCAwLCAwLCBNYXRoLlBJICogMik7XFxuICAgIGN0eC5maWxsKCk7XFxuICAgIGhvbGVzLmxvYWRCaXRtYXAoY2FudmFzKTtcXG4gICAgY29udGV4dC5wYWludCgpO1xcbiAgfSwgNTAwKTtcXG4gIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAyLjU7XFxuICBjb25zdCBwYWludGVyID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgIGFzc2V0LFxcbiAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4ge1xcbiAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgVGdkVGV4dHVyZTJEKSkgdGhyb3cgRXJyb3IoXCJObyBhYmVkbyBwcm92aWRlZCFcIik7XFxuXFxuICAgICAgcmV0dXJuIG5ldyBNYXRlcmlhbEhvbGUoeyBhYmVkbzogY29sb3IsIGhvbGVzIH0pO1xcbiAgICB9LFxcbiAgfSk7XFxuICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgIGluZXJ0aWFPcmJpdDogNTAwLFxcbiAgfSk7XFxuICBjb250ZXh0LmFkZChcXG4gICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICBibGVuZDogd2ViZ2xQcmVzZXRCbGVuZC5hbHBoYSxcXG4gICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgIGNvbG9yOiBuZXcgVGdkVmVjNCgwLjUsIDAuNSwgMC41LCAxKSxcXG4gICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQmFja2dyb3VuZChjb250ZXh0LCB7XFxuICAgICAgICAgIHRleHR1cmU6IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChiYWNrZ3JvdW5kKSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgcGFpbnRlcixcXG4gICAgICBdLFxcbiAgICB9KSxcXG4gICk7XFxuICBjb250ZXh0LnBhaW50KCk7XFxuICBjb250ZXh0LmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xcbiAgICBvcmJpdGVyLnJlc2V0KDMwMCk7XFxuICB9KTtcXG59JyxcbiAgICBcIkNsYXNzIE1hdGVyaWFsSG9sZVwiOlxuICAgICAgICAnaW50ZXJmYWNlIE1hdGVyaWFsSG9sZU9wdGlvbnMge1xcbiAgYWJlZG86IFRnZFRleHR1cmUyRDtcXG4gIGhvbGVzOiBUZ2RUZXh0dXJlMkQ7XFxufVxcblxcbmNsYXNzIE1hdGVyaWFsSG9sZSBleHRlbmRzIFRnZE1hdGVyaWFsIHtcXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlnaHREaXJlY3Rpb24gPSBuZXcgVGdkVmVjMygwLjEsIDAuMiwgMSk7XFxuXFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IE1hdGVyaWFsSG9sZU9wdGlvbnMpIHtcXG4gICAgc3VwZXIoe1xcbiAgICAgIHVuaWZvcm1zOiB7XFxuICAgICAgICB0ZXhBYmVkbzogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgIHRleEhvbGVzOiBcInNhbXBsZXIyRFwiLFxcbiAgICAgICAgdW5pTGlnaHREaXI6IFwidmVjM1wiLFxcbiAgICAgIH0sXFxuICAgICAgdmFyeWluZ3M6IHtcXG4gICAgICAgIHZhck5vcm1hbDogXCJ2ZWMzXCIsXFxuICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXFxuICAgICAgfSxcXG4gICAgICBmcmFnbWVudFNoYWRlckNvZGU6IFtcXG4gICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcXG4gICAgICAgIGBmbG9hdCBsaWdodCA9IGFicyhkb3Qobm9ybWFsLCB1bmlMaWdodERpcikpO2AsXFxuICAgICAgICBgbGlnaHQgPSBwb3cobGlnaHQsIDkuMCkgKiAwLjk7YCxcXG4gICAgICAgIGBsaWdodCArPSAwLjI7YCxcXG4gICAgICAgIGB2ZWMzIGNvbG9yID0gdGV4dHVyZSh0ZXhBYmVkbywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwpLnopO2AsXFxuICAgICAgICBgc3BlYyA9IHBvdyhzcGVjLCAyMC4wKTtgLFxcbiAgICAgICAgYHZlYzMgaG9sZXMgPSB0ZXh0dXJlKHRleEhvbGVzLCB2YXJVVikucmdiO2AsXFxuICAgICAgICBgaWYgKGhvbGVzLnIgPiAwLjk5KSBkaXNjYXJkO2AsXFxuICAgICAgICBgcmV0dXJuIHZlYzQoY29sb3IgKiBsaWdodCArIHNwZWMgKyBob2xlcyAqIDAuMjUsIDEuMCAtIGhvbGVzLnIpO2AsXFxuICAgICAgXSxcXG4gICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBOT1JNQUw7XCIsIFwidmFyVVYgPSBURVhDT09SRF8wO1wiXSxcXG4gICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xcbiAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2Z2KFwidW5pTGlnaHREaXJcIiwgdGhpcy5saWdodERpcmVjdGlvbik7XFxuXFxuICAgICAgICB0aGlzLm9wdGlvbnMuYWJlZG8uYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhBYmVkb1wiKTtcXG4gICAgICAgIHRoaXMub3B0aW9ucy5ob2xlcy5hY3RpdmF0ZSgxLCBwcm9ncmFtLCBcInRleEhvbGVzXCIpO1xcbiAgICAgIH0sXFxuICAgIH0pO1xcbiAgfVxcbn0nLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xcbmltcG9ydCB7XFxuICB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJELFxcbiAgVGdkQ29udGV4dCxcXG4gIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gIFRnZE1hdGVyaWFsLFxcbiAgVGdkUGFpbnRlckJhY2tncm91bmQsXFxuICBUZ2RQYWludGVyQ2xlYXIsXFxuICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICBUZ2RQYWludGVyU3RhdGUsXFxuICBUZ2RQcm9ncmFtLFxcbiAgVGdkVGV4dHVyZTJELFxcbiAgVGdkVmVjMyxcXG4gIFRnZFZlYzQsXFxuICB3ZWJnbFByZXNldEJsZW5kLFxcbiAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcXG5pbXBvcnQgQXNzZXRHbGIgZnJvbSBcIi4uL2Fzc2V0cy9zaGllbGQuZ2xiXCI7XFxuaW1wb3J0IEFzc2V0QmFja2dyb3VuZCBmcm9tIFwiLi4vYXNzZXRzL2JhY2tncm91bmQucG5nXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1NoaWVsZCgpIHtcXG4gIHJldHVybiAoXFxuICAgIDxWaWV3XFxuICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICBhc3NldHM9e3tcXG4gICAgICAgIGltYWdlOiB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IEFzc2V0QmFja2dyb3VuZCxcXG4gICAgICAgIH0sXFxuICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgc2hpZWxkOiBBc3NldEdsYixcXG4gICAgICAgIH0sXFxuICAgICAgfX1cXG4gICAgLz5cXG4gICk7XFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gIGNvbnN0IGFzc2V0ID0gYXNzZXRzLmdsYi5zaGllbGQ7XFxuICBjb25zdCBiYWNrZ3JvdW5kID0gYXNzZXRzLmltYWdlLmJhY2tncm91bmQ7XFxuXFxuICBjb25zdCB3ID0gNDA5NjtcXG4gIGNvbnN0IGggPSB3O1xcbiAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3LCBoKTtcXG4gIGNvbnN0IGhvbGVzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGNhbnZhcyk7XFxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xcbiAgbGV0IGNvdW50ID0gMDtcXG4gIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XFxuICAgIGlmIChjb3VudCA+IDU5KSB7XFxuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcXG4gICAgICBjb3VudCA9IDA7XFxuICAgICAgcmV0dXJuO1xcbiAgICB9XFxuXFxuICAgIGNvdW50Kys7XFxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcXG4gICAgY29uc3QgeCA9IE1hdGgucmFuZG9tKCkgKiB3O1xcbiAgICBjb25zdCB5ID0gTWF0aC5yYW5kb20oKSAqIGg7XFxuICAgIGNvbnN0IHIgPSA1MCArIDQwMCAqIE1hdGgucmFuZG9tKCk7XFxuICAgIGN0eC5iZWdpblBhdGgoKTtcXG4gICAgY3R4LmVsbGlwc2UoeCwgeSwgciwgciwgMCwgMCwgTWF0aC5QSSAqIDIpO1xcbiAgICBjdHguZmlsbCgpO1xcbiAgICBob2xlcy5sb2FkQml0bWFwKGNhbnZhcyk7XFxuICAgIGNvbnRleHQucGFpbnQoKTtcXG4gIH0sIDUwMCk7XFxuICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMi41O1xcbiAgY29uc3QgcGFpbnRlciA9IG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICBhc3NldCxcXG4gICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IHtcXG4gICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCkpIHRocm93IEVycm9yKFwiTm8gYWJlZG8gcHJvdmlkZWQhXCIpO1xcblxcbiAgICAgIHJldHVybiBuZXcgTWF0ZXJpYWxIb2xlKHsgYWJlZG86IGNvbG9yLCBob2xlcyB9KTtcXG4gICAgfSxcXG4gIH0pO1xcbiAgY29uc3Qgb3JiaXRlciA9IG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICBpbmVydGlhT3JiaXQ6IDUwMCxcXG4gIH0pO1xcbiAgY29udGV4dC5hZGQoXFxuICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgYmxlbmQ6IHdlYmdsUHJlc2V0QmxlbmQuYWxwaGEsXFxuICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMC41LCAwLjUsIDAuNSwgMSksXFxuICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckJhY2tncm91bmQoY29udGV4dCwge1xcbiAgICAgICAgICB0ZXh0dXJlOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYmFja2dyb3VuZCksXFxuICAgICAgICB9KSxcXG4gICAgICAgIHBhaW50ZXIsXFxuICAgICAgXSxcXG4gICAgfSksXFxuICApO1xcbiAgY29udGV4dC5wYWludCgpO1xcbiAgY29udGV4dC5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcXG4gICAgb3JiaXRlci5yZXNldCgzMDApO1xcbiAgfSk7XFxufVxcblxcbmludGVyZmFjZSBNYXRlcmlhbEhvbGVPcHRpb25zIHtcXG4gIGFiZWRvOiBUZ2RUZXh0dXJlMkQ7XFxuICBob2xlczogVGdkVGV4dHVyZTJEO1xcbn1cXG5cXG5jbGFzcyBNYXRlcmlhbEhvbGUgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XFxuICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0RGlyZWN0aW9uID0gbmV3IFRnZFZlYzMoMC4xLCAwLjIsIDEpO1xcblxcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBNYXRlcmlhbEhvbGVPcHRpb25zKSB7XFxuICAgIHN1cGVyKHtcXG4gICAgICB1bmlmb3Jtczoge1xcbiAgICAgICAgdGV4QWJlZG86IFwic2FtcGxlcjJEXCIsXFxuICAgICAgICB0ZXhIb2xlczogXCJzYW1wbGVyMkRcIixcXG4gICAgICAgIHVuaUxpZ2h0RGlyOiBcInZlYzNcIixcXG4gICAgICB9LFxcbiAgICAgIHZhcnlpbmdzOiB7XFxuICAgICAgICB2YXJOb3JtYWw6IFwidmVjM1wiLFxcbiAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxcbiAgICAgIH0sXFxuICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuICAgICAgICBcInZlYzMgbm9ybWFsID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXFxuICAgICAgICBgZmxvYXQgbGlnaHQgPSBhYnMoZG90KG5vcm1hbCwgdW5pTGlnaHREaXIpKTtgLFxcbiAgICAgICAgYGxpZ2h0ID0gcG93KGxpZ2h0LCA5LjApICogMC45O2AsXFxuICAgICAgICBgbGlnaHQgKz0gMC4yO2AsXFxuICAgICAgICBgdmVjMyBjb2xvciA9IHRleHR1cmUodGV4QWJlZG8sIHZhclVWKS5yZ2I7YCxcXG4gICAgICAgIGBmbG9hdCBzcGVjID0gbWF4KDAuMCwgcmVmbGVjdCh1bmlMaWdodERpciwgbm9ybWFsKS56KTtgLFxcbiAgICAgICAgYHNwZWMgPSBwb3coc3BlYywgMjAuMCk7YCxcXG4gICAgICAgIGB2ZWMzIGhvbGVzID0gdGV4dHVyZSh0ZXhIb2xlcywgdmFyVVYpLnJnYjtgLFxcbiAgICAgICAgYGlmIChob2xlcy5yID4gMC45OSkgZGlzY2FyZDtgLFxcbiAgICAgICAgYHJldHVybiB2ZWM0KGNvbG9yICogbGlnaHQgKyBzcGVjICsgaG9sZXMgKiAwLjI1LCAxLjAgLSBob2xlcy5yKTtgLFxcbiAgICAgIF0sXFxuICAgICAgdmVydGV4U2hhZGVyQ29kZTogW1widmFyTm9ybWFsID0gbWF0Myh1bmlNb2RlbFZpZXdNYXRyaXgpICogTk9STUFMO1wiLCBcInZhclVWID0gVEVYQ09PUkRfMDtcIl0sXFxuICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfTogeyBwcm9ncmFtOiBUZ2RQcm9ncmFtIH0pOiB2b2lkID0+IHtcXG4gICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHREaXJlY3Rpb24pO1xcblxcbiAgICAgICAgdGhpcy5vcHRpb25zLmFiZWRvLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidGV4QWJlZG9cIik7XFxuICAgICAgICB0aGlzLm9wdGlvbnMuaG9sZXMuYWN0aXZhdGUoMSwgcHJvZ3JhbSwgXCJ0ZXhIb2xlc1wiKTtcXG4gICAgICB9LFxcbiAgICB9KTtcXG4gIH1cXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbi8vIGltcG9ydCBcInByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3NcIlxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL0NvZGVWaWV3ZXIubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UgfSBmcm9tIFwiLi9ncmFtbWFyXCJcblxuZXhwb3J0IGludGVyZmFjZSBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICBpZD86IHN0cmluZ1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIHZhbHVlOiBzdHJpbmcgfCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gICAgbGFuZ3VhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlVmlld2VyVmlldyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHByb3BzXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBzaW5nbGVQcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxTaW5nbGVDb2RlVmlld2VyVmlldyB7Li4uc2luZ2xlUHJvcHN9IC8+XG4gICAgfVxuICAgIGNvbnN0IG11bHRpUHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyA9IHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlLFxuICAgIH1cbiAgICByZXR1cm4gPE11bHRpQ29kZVZpZXdlclZpZXcgey4uLm11bHRpUHJvcHN9IC8+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gU2luZ2xlQ29kZVZpZXdlclZpZXcocHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCByZWZUaW1lb3V0ID0gUmVhY3QudXNlUmVmKDApXG4gICAgY29uc3QgW3BvcHVwLCBzZXRQb3B1cF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb2RlID0gUmVhY3QudXNlUmVmPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbClcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gcmVmQ29kZS5jdXJyZW50XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHJldHVyblxuXG4gICAgICAgICAgICBjb25zdCBodG1sID0gUHJpc20uaGlnaGxpZ2h0KHByb3BzLnZhbHVlLCBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UocHJvcHMubGFuZ3VhZ2UpLCBwcm9wcy5sYW5ndWFnZSlcbiAgICAgICAgICAgIGNvZGUuaW5uZXJIVE1MID0gaHRtbFxuICAgICAgICB9LCAxMDApXG4gICAgfSwgW3Byb3BzLnZhbHVlLCBwcm9wcy5sYW5ndWFnZSwgcmVmQ29kZS5jdXJyZW50XSlcbiAgICBjb25zdCBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocHJvcHMudmFsdWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0UG9wdXAodHJ1ZSlcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0UG9wdXAoZmFsc2UpLCA3MDAwKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQb3B1cENsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRQb3B1cChmYWxzZSlcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IDBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2dldENsYXNzTmFtZXMocHJvcHMpfSBvbkRvdWJsZUNsaWNrPXtoYW5kbGVEb3VibGVDbGlja30gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgPGNvZGUgcmVmPXtyZWZDb2RlfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke3Byb3BzLmxhbmd1YWdlfWB9IC8+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIHtwb3B1cCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1N0eWxlLnBvcHVwfSBvbkNsaWNrPXtoYW5kbGVQb3B1cENsaWNrfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGhpcyBjb2RlIGhhcyBiZWVuIGNvcGllZCB0byB0aGUgY2xpcGJvYXJkITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc05hbWVzKHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKTogc3RyaW5nIHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1N0eWxlLkNvZGVWaWV3ZXJdXG4gICAgaWYgKHR5cGVvZiBwcm9wcy5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKHByb3BzLmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcyBleHRlbmRzIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmZ1bmN0aW9uIE11bHRpQ29kZVZpZXdlclZpZXcocHJvcHM6IE11bHRpQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IGNhcHRpb25zID0gT2JqZWN0LmtleXMocHJvcHMudmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjYXB0aW9ucy5tYXAoKGNhcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRldGFpbHMga2V5PXtjYXB0aW9ufSBvcGVuPXtmYWxzZX0gaWQ9e3Byb3BzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHN1bW1hcnk+e2NhcHRpb259PC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8U2luZ2xlQ29kZVZpZXdlclZpZXcgdmFsdWU9e3Byb3BzLnZhbHVlW2NhcHRpb25dfSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10c3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdsc2xcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhbW1hckZvckxhbmd1YWdlKGxhbmd1YWdlOiBzdHJpbmcpOiBQcmlzbS5HcmFtbWFyIHtcbiAgICBzd2l0Y2ggKGxhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ0c1wiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG4gICAgICAgIGNhc2UgXCJ0c3hcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHN4XG4gICAgICAgIGNhc2UgXCJmcmFnXCI6XG4gICAgICAgIGNhc2UgXCJ2ZXJ0XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLmdsc2xcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBHTFNMXG4gICAgfVxufVxuXG5jb25zdCBUWVBFUyA9IFtcbiAgICBcImJ2ZWMyXCIsXG4gICAgXCJidmVjM1wiLFxuICAgIFwiYnZlYzRcIixcbiAgICBcImRtYXQyXCIsXG4gICAgXCJkbWF0MngyXCIsXG4gICAgXCJkbWF0MngzXCIsXG4gICAgXCJkbWF0Mng0XCIsXG4gICAgXCJkbWF0M1wiLFxuICAgIFwiZG1hdDN4MlwiLFxuICAgIFwiZG1hdDN4M1wiLFxuICAgIFwiZG1hdDN4NFwiLFxuICAgIFwiZG1hdDRcIixcbiAgICBcImRtYXQ0eDJcIixcbiAgICBcImRtYXQ0eDNcIixcbiAgICBcImRtYXQ0eDRcIixcbiAgICBcImR2ZWMyXCIsXG4gICAgXCJkdmVjM1wiLFxuICAgIFwiZHZlYzRcIixcbiAgICBcImZsb2F0XCIsXG4gICAgXCJmdmVjMlwiLFxuICAgIFwiZnZlYzNcIixcbiAgICBcImZ2ZWM0XCIsXG4gICAgXCJpc2FtcGxlcjFEXCIsXG4gICAgXCJpc2FtcGxlcjFEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRcIixcbiAgICBcImlzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRE1TXCIsXG4gICAgXCJpc2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFJlY3RcIixcbiAgICBcImlzYW1wbGVyM0RcIixcbiAgICBcImlzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJpc2FtcGxlckN1YmVcIixcbiAgICBcImlzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJpdmVjMlwiLFxuICAgIFwiaXZlYzNcIixcbiAgICBcIml2ZWM0XCIsXG4gICAgXCJtYXQyXCIsXG4gICAgXCJtYXQyeDJcIixcbiAgICBcIm1hdDJ4M1wiLFxuICAgIFwibWF0Mng0XCIsXG4gICAgXCJtYXQzXCIsXG4gICAgXCJtYXQzeDJcIixcbiAgICBcIm1hdDN4M1wiLFxuICAgIFwibWF0M3g0XCIsXG4gICAgXCJtYXQ0XCIsXG4gICAgXCJtYXQ0eDJcIixcbiAgICBcIm1hdDR4M1wiLFxuICAgIFwibWF0NHg0XCIsXG4gICAgXCJzYW1wbGVcIixcbiAgICBcInNhbXBsZXIxRFwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInNhbXBsZXIxREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMURTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInNhbXBsZXIyREFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRNU1wiLFxuICAgIFwic2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFwiLFxuICAgIFwic2FtcGxlcjJEUmVjdFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyM0RcIixcbiAgICBcInNhbXBsZXJCdWZmZXJcIixcbiAgICBcInNhbXBsZXJDdWJlXCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJzYW1wbGVyQ3ViZUFycmF5U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyQ3ViZVNoYWRvd1wiLFxuICAgIFwidXNhbXBsZXIxRFwiLFxuICAgIFwidXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEXCIsXG4gICAgXCJ1c2FtcGxlcjJEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRNU1wiLFxuICAgIFwidXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJ1c2FtcGxlcjNEXCIsXG4gICAgXCJ1c2FtcGxlckJ1ZmZlclwiLFxuICAgIFwidXNhbXBsZXJDdWJlXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwidXZlYzJcIixcbiAgICBcInV2ZWMzXCIsXG4gICAgXCJ1dmVjNFwiLFxuICAgIFwidmVjMlwiLFxuICAgIFwidmVjM1wiLFxuICAgIFwidmVjNFwiLFxuICAgIFwidm9pZFwiLFxuXVxuXG5jb25zdCBLRVlXT1JEUyA9IFtcbiAgICBcImNlbnRyb2lkXCIsXG4gICAgXCJjb25zdFwiLFxuICAgIFwiZGlzY2FyZFwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmxhdFwiLFxuICAgIFwiaGlnaHBcIixcbiAgICBcImlmXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5vdXRcIixcbiAgICBcImludmFyaWFudFwiLFxuICAgIFwibGF5b3V0XCIsXG4gICAgXCJsb3dwXCIsXG4gICAgXCJtZWRpdW1wXCIsXG4gICAgXCJub3BlcnNwZWN0aXZlXCIsXG4gICAgXCJvdXRcIixcbiAgICBcInBhdGNoXCIsXG4gICAgXCJwcmVjaXNpb25cIixcbiAgICBcInNtb290aFwiLFxuICAgIFwic3Vicm91dGluZVwiLFxuICAgIFwidW5pZm9ybVwiLFxuICAgIC8vIFJlc2VydmVkIGZvciBmdXR1cmUuXG4gICAgXCJhY3RpdmVcIixcbiAgICBcImFzbVwiLFxuICAgIFwiY2FzdFwiLFxuICAgIFwiY2xhc3NcIixcbiAgICBcImNvbW1vblwiLFxuICAgIFwiZW51bVwiLFxuICAgIFwiZXh0ZXJuXCIsXG4gICAgXCJleHRlcm5hbFwiLFxuICAgIFwiZmlsdGVyXCIsXG4gICAgXCJmaXhlZFwiLFxuICAgIFwiZ290b1wiLFxuICAgIFwiaGFsZlwiLFxuICAgIFwiaHZlYzJcIixcbiAgICBcImh2ZWMzXCIsXG4gICAgXCJodmVjNFwiLFxuICAgIFwiaWltYWdlMURcIixcbiAgICBcImlpbWFnZTFEQXJyYXlcIixcbiAgICBcImlpbWFnZTJEXCIsXG4gICAgXCJpaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpaW1hZ2UzRFwiLFxuICAgIFwiaWltYWdlQnVmZmVyXCIsXG4gICAgXCJpaW1hZ2VDdWJlXCIsXG4gICAgXCJpbWFnZTFEXCIsXG4gICAgXCJpbWFnZTFEQXJyYXlcIixcbiAgICBcImltYWdlMURBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UxRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFwiLFxuICAgIFwiaW1hZ2UyREFycmF5XCIsXG4gICAgXCJpbWFnZTJEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMkRTaGFkb3dcIixcbiAgICBcImltYWdlM0RcIixcbiAgICBcImltYWdlQnVmZmVyXCIsXG4gICAgXCJpbWFnZUN1YmVcIixcbiAgICBcImlubGluZVwiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibG9uZ1wiLFxuICAgIFwibmFtZXNwYWNlXCIsXG4gICAgXCJub2lubGluZVwiLFxuICAgIFwib3V0cHV0XCIsXG4gICAgXCJwYWNrZWRcIixcbiAgICBcInBhcnRpdGlvblwiLFxuICAgIFwicHVibGljXCIsXG4gICAgXCJyb3dfbWFqb3JcIixcbiAgICBcInNhbXBsZXIzRFJlY3RcIixcbiAgICBcInNob3J0XCIsXG4gICAgXCJzaXplb2ZcIixcbiAgICBcInN0YXRpY1wiLFxuICAgIFwic3VwZXJwXCIsXG4gICAgXCJ0ZW1wbGF0ZVwiLFxuICAgIFwidGhpc1wiLFxuICAgIFwidHlwZWRlZlwiLFxuICAgIFwidWltYWdlMURcIixcbiAgICBcInVpbWFnZTFEQXJyYXlcIixcbiAgICBcInVpbWFnZTJEXCIsXG4gICAgXCJ1aW1hZ2UyREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UzRFwiLFxuICAgIFwidWltYWdlQnVmZmVyXCIsXG4gICAgXCJ1aW1hZ2VDdWJlXCIsXG4gICAgXCJ1bmlvblwiLFxuICAgIFwidW5zaWduZWRcIixcbiAgICBcInVzaW5nXCIsXG4gICAgXCJ2b2xhdGlsZVwiLFxuXVxuXG5jb25zdCBHTE9CQUxTID0gW1xuICAgIFwiZ2xfRGVwdGhSYW5nZVwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5kaWZmXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmZhclwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5uZWFyXCIsXG4gICAgXCJnbF9GcmFnQ29vcmRcIixcbiAgICBcImdsX0ZyYWdEZXB0aFwiLFxuICAgIFwiZ2xfRnJvbnRGYWNpbmdcIixcbiAgICBcImdsX0luc3RhbmNlSURcIixcbiAgICBcImdsX1BvaW50Q29vcmRcIixcbiAgICBcImdsX1BvaW50U2l6ZVwiLFxuICAgIFwiZ2xfUG9zaXRpb25cIixcbiAgICBcImdsX1ZlcnRleElEXCIsXG5dXG5cbmNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgICBcImFic1wiLFxuICAgIFwiYWNvc1wiLFxuICAgIFwiYWNvc2hcIixcbiAgICBcImFsbFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJhc2luXCIsXG4gICAgXCJhc2luaFwiLFxuICAgIFwiYXRhblwiLFxuICAgIFwiYXRhbmhcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNsYW1wXCIsXG4gICAgXCJjb3NcIixcbiAgICBcImNvc2hcIixcbiAgICBcImNyb3NzXCIsXG4gICAgXCJkZWdyZWVzXCIsXG4gICAgXCJkZXRlcm1pbmFudFwiLFxuICAgIFwiZEZkeFwiLFxuICAgIFwiZEZkeVwiLFxuICAgIFwiZGlzdGFuY2VcIixcbiAgICBcImRvdFwiLFxuICAgIFwiZXF1YWxcIixcbiAgICBcImV4cFwiLFxuICAgIFwiZXhwMlwiLFxuICAgIFwiZmFjZWZvcndhcmRcIixcbiAgICBcImZsb2F0Qml0c1RvSW50XCIsXG4gICAgXCJmbG9hdEJpdHNUb1VpbnRcIixcbiAgICBcImZsb29yXCIsXG4gICAgXCJmcmFjdFwiLFxuICAgIFwiZndpZHRoXCIsXG4gICAgXCJncmVhdGVyVGhhblwiLFxuICAgIFwiZ3JlYXRlclRoYW5FcXVhbFwiLFxuICAgIFwiaW50Qml0c1RvRmxvYXRcIixcbiAgICBcImludmVyc2VcIixcbiAgICBcImludmVyc2VzcXJ0XCIsXG4gICAgXCJpc2luZlwiLFxuICAgIFwiaXNuYW5cIixcbiAgICBcImxlbmd0aFwiLFxuICAgIFwibGVzc1RoYW5cIixcbiAgICBcImxlc3NUaGFuRXF1YWxcIixcbiAgICBcImxvZ1wiLFxuICAgIFwibG9nMlwiLFxuICAgIFwibWF0cml4Q29tcE11bHRcIixcbiAgICBcIm1heFwiLFxuICAgIFwibWluXCIsXG4gICAgXCJtaXhcIixcbiAgICBcIm1vZFwiLFxuICAgIFwibW9kZlwiLFxuICAgIFwibm9ybWFsaXplXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm5vdEVxdWFsXCIsXG4gICAgXCJvdXRlclByb2R1Y3RcIixcbiAgICBcInBhY2tIYWxmMngxNlwiLFxuICAgIFwicGFja1Nub3JtMngxNlwiLFxuICAgIFwicGFja1Vub3JtMngxNlwiLFxuICAgIFwicG93XCIsXG4gICAgXCJyYWRpYW5zXCIsXG4gICAgXCJyZWZsZWN0XCIsXG4gICAgXCJyZWZyYWN0XCIsXG4gICAgXCJyb3VuZFwiLFxuICAgIFwicm91bmRFdmVuXCIsXG4gICAgXCJzaWduXCIsXG4gICAgXCJzaW5cIixcbiAgICBcInNpbmhcIixcbiAgICBcInNtb290aHN0ZXBcIixcbiAgICBcInNxcnRcIixcbiAgICBcInN0ZXBcIixcbiAgICBcInRhblwiLFxuICAgIFwidGFuaFwiLFxuICAgIFwidGV4ZWxGZXRjaFwiLFxuICAgIFwidGV4ZWxGZXRjaE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVwiLFxuICAgIFwidGV4dHVyZUdyYWRcIixcbiAgICBcInRleHR1cmVHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlTG9kXCIsXG4gICAgXCJ0ZXh0dXJlTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvalwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qTG9kXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pPZmZzZXRcIixcbiAgICBcInRleHR1cmVTaXplXCIsXG4gICAgXCJ0cmFuc3Bvc2VcIixcbiAgICBcInRydW5jXCIsXG4gICAgXCJ1aW50Qml0c1RvRmxvYXRcIixcbiAgICBcInVucGFja0hhbGYyeDE2XCIsXG4gICAgXCJ1bnBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInVucGFja1Vub3JtMngxNlwiLFxuXVxuXG5jb25zdCBHTFNMOiBQcmlzbS5HcmFtbWFyID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiMuKyQvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgICAvKF58W15cXHckXSkoPzpOYU58SW5maW5pdHl8MFtiQl1bMDFdKyg/Ol9bMDFdKykqbj98MFtvT11bMC03XSsoPzpfWzAtN10rKSpuP3wwW3hYXVtcXGRBLUZhLWZdKyg/Ol9bXFxkQS1GYS1mXSspKm4/fFxcZCsoPzpfXFxkKykqbnwoPzpcXGQrKD86X1xcZCspKig/OlxcLig/OlxcZCsoPzpfXFxkKykqKT8pP3xcXC5cXGQrKD86X1xcZCspKikoPzpbRWVdWystXT9cXGQrKD86X1xcZCspKik/KSg/IVtcXHckXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIH0sXG4gICAgdHlwZTogbWFrZUlkZW50aWZpZXJzUlgoVFlQRVMpLFxuICAgIGtleXdvcmQ6IG1ha2VJZGVudGlmaWVyc1JYKEtFWVdPUkRTKSxcbiAgICBnbG9iYWw6IG1ha2VJZGVudGlmaWVyc1JYKEdMT0JBTFMpLFxuICAgIGZ1bmN0aW9uOiBtYWtlSWRlbnRpZmllcnNSWChGVU5DVElPTlMpLFxufVxuXG5mdW5jdGlvbiBtYWtlSWRlbnRpZmllcnNSWCh3b3Jkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAoPzpbXmEtekEtWjAtOV9dKSgke3dvcmRzLmpvaW4oXCJ8XCIpfSkoPz1bXmEtekEtWjAtOV9dKWApLFxuICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgIH1cbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Db2RlVmlld2VyXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLDBKQUEwSixFOzs7Ozs7Ozs7Ozs7OztBQ2VuSjtBQUU2QjtBQUNUO0FBQ1c7QUFFdkMsU0FBUyxVQUFVO0lBQzlCLE9BQU8sQ0FDSCwyQ0FBQyxnREFBSSxJQUNELE9BQU8sRUFBRSxJQUFJLEVBQ2IsTUFBTSxFQUFFO1lBQ0osS0FBSyxFQUFFO2dCQUNILFVBQVUsRUFBRSx1Q0FBZTthQUM5QjtZQUNELEdBQUcsRUFBRTtnQkFDRCxNQUFNLEVBQUUsbUNBQVE7YUFDbkI7U0FDSixHQUNILENBQ0w7QUFDTCxDQUFDO0FBR0QsU0FBUyxJQUFJLENBQUMsT0FBbUIsRUFBRSxNQUFjO0lBQzdDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTTtJQUMvQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVU7SUFFMUMsTUFBTSxDQUFDLEdBQUcsSUFBSTtJQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDWCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLGdFQUE0QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsTUFBTSxLQUFLLEdBQUcsSUFBSSw0Q0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDMUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQztJQUNiLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ3BCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ2Is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TTtJQUNOLFlBQVk7SUFDWixNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7Q0FDcEI7QUFFRCxNQUFNLElBQUksR0FBa0I7SUFDeEIsT0FBTyxFQUFFO1FBQ0w7WUFDSSxPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2Y7UUFDRDtZQUNJLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsVUFBVSxFQUFFLElBQUk7WUFDaEIsTUFBTSxFQUFFLElBQUk7U0FDZjtRQUNEO1lBQ0ksT0FBTyxFQUFFLFFBQVE7WUFDakIsVUFBVSxFQUFFLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUk7U0FDZjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osT0FBTyxFQUNILDJOQUEyTjtRQUMvTixVQUFVLEVBQUUsSUFBSTtLQUNuQjtJQUNELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7SUFDOUIsT0FBTyxFQUFFLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztJQUNwQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQ2xDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7Q0FDekM7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEtBQWU7SUFDdEMsT0FBTztRQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsVUFBVSxFQUFFLEtBQUs7UUFDakIsTUFBTSxFQUFFLElBQUk7S0FDZjtBQUNMLENBQUM7Ozs7Ozs7Ozs7QUNuVnFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7Ozs7MEJBRXJCOzs7Ozs7OzswQkFFRjs7Ozs7Ozs7MEJBR0EifQ==