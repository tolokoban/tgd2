"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_example3_page_mdx-src_components_demo_Tgd_tgd_module_css-df1bf1"], {
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
52658(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MaterialDiffuse: () => (MaterialDiffuse)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

const DEFAULT_COLOR = new _tolokoban_tgd__rspack_import_0.TgdVec4(0.8, 0.6, 0.1, 1);
class MaterialDiffuse extends _tolokoban_tgd__rspack_import_0.TgdMaterial {
    constructor(options = {}) {
        const color = options.color instanceof _tolokoban_tgd__rspack_import_0.TgdTexture2D ? options.color : new _tolokoban_tgd__rspack_import_0.TgdVec4(options.color ?? DEFAULT_COLOR);
        const hasTexture = !(color instanceof _tolokoban_tgd__rspack_import_0.TgdVec4);
        const uniforms = {
            uniLight: "vec3",
            uniLightDir: "vec3",
            uniAmbient: "vec3",
            uniSpecularExponent: "float",
            uniSpecularIntensity: "float",
            uniModelViewMatrix: "mat4",
        };
        const varyings = {
            varNormal: "vec3",
            varZ: "float",
        };
        const vertexShaderCode = [
            "varNormal = mat3(uniTransfoMatrix) * NORMAL;",
            "varZ = -.2 * (uniModelViewMatrix * uniTransfoMatrix * vec4(position, 1)).z;",
        ];
        if (hasTexture) {
            vertexShaderCode.push("varUV = TEXCOORD_0;");
            varyings.varUV = "vec2";
            uniforms.texDiffuse = "sampler2D";
        }
        super({
            uniforms,
            varyings,
            vertexShaderCode,
            fragmentShaderCode: [
                "vec3 normal = normalize(varNormal);",
                `float light = 1.0 - dot(normal, uniLightDir);`,
                hasTexture ? `vec4 color = texture(texDiffuse, varUV);` : `vec4 color = vec4(${color.join(", ")});`,
                `vec3 normal2 = mat3(uniModelViewMatrix) * normal;`,
                `float spec = max(0.0, reflect(uniLightDir, normal2).z);`,
                `spec = pow(spec, uniSpecularExponent) * uniSpecularIntensity;`,
                `color = vec4(`,
                `  color.rgb * (`,
                `    uniAmbient + uniLight * light`,
                `  ) + vec3(spec),`,
                `  varZ`,
                `);`,
                `return color;`,
            ],
            setUniforms: ({ program }) => {
                program.uniform3fv("uniLightDir", this.light.direction);
                this.lightColor.from(this.light.color).scale(this.light.color.w);
                program.uniform3fv("uniLight", this.lightColor);
                this.ambientColor.from(this.ambient.color).scale(this.ambient.color.w);
                program.uniform3fv("uniAmbient", this.ambientColor);
                program.uniform1f("uniSpecularExponent", this.specularExponent);
                program.uniform1f("uniSpecularIntensity", this.specularIntensity);
                const { texture } = this;
                if (texture)
                    texture.activate(0, program, "texDiffuse");
            },
        });
        this.light = new _tolokoban_tgd__rspack_import_0.TgdLight();
        this.ambient = new _tolokoban_tgd__rspack_import_0.TgdLight({ color: new _tolokoban_tgd__rspack_import_0.TgdVec4(0.2, 0.1, 0, 0) });
        this.specularExponent = 20;
        this.specularIntensity = 1;
        this.lightColor = new _tolokoban_tgd__rspack_import_0.TgdVec3();
        this.ambientColor = new _tolokoban_tgd__rspack_import_0.TgdVec3();
        if (options.light) {
            this.light = options.light;
        }
        if (options.ambient) {
            this.ambient = options.ambient;
        }
        if (typeof options.specularExponent === "number") {
            this.specularExponent = options.specularExponent;
        }
        if (typeof options.specularIntensity === "number") {
            this.specularIntensity = options.specularIntensity;
        }
        this.texture = hasTexture ? color : null;
    }
}


},
28694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_chinese_chandelier_glb__rspack_import_3 = __webpack_require__(83363);
/* import */ var _assets_mesh_grid_10x10_glb__rspack_import_4 = __webpack_require__(29629);
/* import */ var _sea__rspack_import_5 = __webpack_require__(88795);
/* import */ var _diffuse__rspack_import_6 = __webpack_require__(52658);







function init(context, assets) {
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: { distance: 2 },
        far: 100,
        near: 0.01,
        fovy: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(35),
        zoom: 1,
    });
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        speedPanning: 0,
        inertiaOrbit: 1000,
        geo: {
            lat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(50),
            minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-20),
            maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(80),
        },
    });
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: new _tolokoban_tgd__rspack_import_1.TgdVec4(0, 0, 0, 1),
        depth: 1,
        stencil: 0,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset: assets.glb.world,
                material: ({ color }) => new _diffuse__rspack_import_6.MaterialDiffuse({ color }),
            }),
        ],
    });
    const meshOpaque = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset: assets.glb.world,
                material: ({ color }) => new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({ color }),
            }),
        ],
    });
    const sea = new _sea__rspack_import_5.PainterSea(context);
    const scene = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup([clear, mesh]);
    const framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebufferWithAntiAliasing(context, {
        textureColor0: new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context),
        children: [scene],
    });
    if (framebuffer.textureColor0)
        sea.texture = framebuffer.textureColor0;
    context.add(framebuffer, clear, meshOpaque, sea);
    context.logic.add((time) => {
        sea.y = Math.sin(time * 0.4) * 0.5;
    });
    context.play();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { options: { antialias: true, stencil: true, depth: true }, onReady: init, assets: {
            glb: {
                world: _assets_mesh_chinese_chandelier_glb__rspack_import_3,
                see: _assets_mesh_grid_10x10_glb__rspack_import_4,
            },
        } }));
}


},
8272(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _framebuffer_demo__rspack_import_4 = __webpack_require__(28694);





const FOCUS = {
    "Detail #1": "    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 2 },\n        far: 100,\n        near: 0.01,\n        fovy: tgdCalcDegToRad(35),\n        zoom: 1,\n    })\n    new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n        geo: {\n            lat: tgdCalcDegToRad(50),\n            minLat: tgdCalcDegToRad(-20),\n            maxLat: tgdCalcDegToRad(80),\n        },\n    })\n    const clear = new TgdPainterClear(context, {\n        color: new TgdVec4(0, 0, 0, 1),\n        depth: 1,\n        stencil: 0,\n    })\n    const mesh = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n                material: ({ color }) => new MaterialDiffuse({ color }),\n            }),\n        ],\n    })\n    const meshOpaque = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n                material: ({ color }) => new TgdMaterialDiffuse({ color }),\n            }),\n        ],\n    })\n    const sea = new PainterSea(context)\n    const scene = new TgdPainterGroup([clear, mesh])\n    const framebuffer = new TgdPainterFramebufferWithAntiAliasing(context, {\n        textureColor0: new TgdTexture2D(context),\n        children: [scene],\n    })\n    if (framebuffer.textureColor0) sea.texture = framebuffer.textureColor0\n    context.add(framebuffer, clear, meshOpaque, sea)\n    context.logic.add((time) => {\n        sea.y = Math.sin(time * 0.4) * 0.5\n    })\n    context.play()",
};
const FULL = 'import {\n    tgdCalcDegToRad,\n    TgdCameraPerspective,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterFramebufferWithAntiAliasing,\n    TgdPainterGroup,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTexture2D,\n    TgdVec4,\n    webglPresetCull,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { Assets } from "@/components/demo/Tgd"\n\n// import WorldURL from "./world.glb"\nimport WorldURL from "@/assets/mesh/chinese-chandelier.glb"\nimport GridURL from "@/assets/mesh/grid-10x10.glb"\nimport { PainterSea } from "./sea"\nimport { MaterialDiffuse } from "./diffuse"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera = new TgdCameraPerspective({\n        transfo: { distance: 2 },\n        far: 100,\n        near: 0.01,\n        fovy: tgdCalcDegToRad(35),\n        zoom: 1,\n    })\n    new TgdControllerCameraOrbit(context, {\n        speedPanning: 0,\n        inertiaOrbit: 1000,\n        geo: {\n            lat: tgdCalcDegToRad(50),\n            minLat: tgdCalcDegToRad(-20),\n            maxLat: tgdCalcDegToRad(80),\n        },\n    })\n    const clear = new TgdPainterClear(context, {\n        color: new TgdVec4(0, 0, 0, 1),\n        depth: 1,\n        stencil: 0,\n    })\n    const mesh = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n                material: ({ color }) => new MaterialDiffuse({ color }),\n            }),\n        ],\n    })\n    const meshOpaque = new TgdPainterState(context, {\n        depth: webglPresetDepth.less,\n        cull: webglPresetCull.back,\n        children: [\n            new TgdPainterMeshGltf(context, {\n                asset: assets.glb.world,\n                material: ({ color }) => new TgdMaterialDiffuse({ color }),\n            }),\n        ],\n    })\n    const sea = new PainterSea(context)\n    const scene = new TgdPainterGroup([clear, mesh])\n    const framebuffer = new TgdPainterFramebufferWithAntiAliasing(context, {\n        textureColor0: new TgdTexture2D(context),\n        children: [scene],\n    })\n    if (framebuffer.textureColor0) sea.texture = framebuffer.textureColor0\n    context.add(framebuffer, clear, meshOpaque, sea)\n    context.logic.add((time) => {\n        sea.y = Math.sin(time * 0.4) * 0.5\n    })\n    context.play()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            options={{ antialias: true, stencil: true, depth: true }}\n            onReady={init}\n            assets={{\n                glb: {\n                    world: WorldURL,\n                    see: GridURL,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_framebuffer_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] }));
}


},
9(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SeaMaterial: () => (SeaMaterial)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class SeaMaterial extends _tolokoban_tgd__rspack_import_0.TgdMaterial {
    constructor(context) {
        super({
            uniforms: {
                uniInverseScreenSize: "vec2",
                texDiffuse: "sampler2D",
            },
            varyings: {
                varZ: "float",
                varNormal: "vec3",
            },
            vertexShaderCode: [
                "varNormal = mat3(uniModelViewMatrix) * mat3(uniTransfoMatrix) * NORMAL;",
                "varZ = -.2 * (uniModelViewMatrix * uniTransfoMatrix * POSITION).z;",
            ],
            fragmentShaderCode: [
                `vec2 uv = gl_FragCoord.xy * uniInverseScreenSize;`,
                `vec4 color = texture(texDiffuse, uv);`,
                "float dist = color.a - varZ;",
                "dist = clamp(dist * 10.0, 0.0, 0.9);",
                "color *= 4.0;",
                "float s = .01;",
                "color += texture(texDiffuse, uv + vec2(dist * s, 0));",
                "color += texture(texDiffuse, uv - vec2(dist * s, 0));",
                "color += texture(texDiffuse, uv + vec2(0, dist * s));",
                "color += texture(texDiffuse, uv - vec2(0, dist * s));",
                "color *= .125;",
                `vec3 result = mix(color.rgb, vec3(0, 0, .4), pow(dist, 0.5));`,
                `float specular = clamp(varNormal.z, 0.0, 1.0) * .3;`,
                "return vec4(result + vec3(specular), 1.0);",
            ],
            setUniforms: ({ program }) => {
                const { texture, context } = this;
                if (texture)
                    texture.activate(0, program, "texDiffuse");
                program.uniform2f("uniInverseScreenSize", 1 / context.width, 1 / context.height);
            },
        });
        this.context = context;
        this.texture = undefined;
    }
}


},
88795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterSea: () => (PainterSea)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _sea_material__rspack_import_1 = __webpack_require__(9);


class PainterSea extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this.material = new _sea_material__rspack_import_1.SeaMaterial(context);
        this.sea = new _tolokoban_tgd__rspack_import_0.TgdPainterNode({
            children: [
                new _tolokoban_tgd__rspack_import_0.TgdPainterMesh(context, {
                    geometry: new _tolokoban_tgd__rspack_import_0.TgdGeometryBox({
                        sizeX: 1,
                        sizeY: 0.5,
                        sizeZ: 1,
                    }),
                    material: this.material,
                }),
            ],
        });
    }
    set texture(texture) {
        this.material.texture = texture;
    }
    set y(y) {
        this.sea.transfo.setPosition(0, y, 0);
    }
    delete() {
        throw new Error("Method not implemented.");
    }
    paint(time, delay) {
        const { context, sea } = this;
        _tolokoban_tgd__rspack_import_0.TgdPainterState["do"](context, {
            depth: _tolokoban_tgd__rspack_import_0.webglPresetDepth.less,
            action: () => {
                sea.transfo.orbitAroundZ(delay * 0.8521).orbitAroundX(delay * 0.3764);
                sea.paint(time, delay);
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
83363(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/chinese-chandelier.28894a4b801e7243.glb";

},
29629(module) {
module.exports = "data:model/gltf-binary;base64,Z2xURgIAAADEEgAA4AIAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6Iktocm9ub3MgZ2xURiBCbGVuZGVyIEkvTyB2NC4zLjQ3IiwidmVyc2lvbiI6IjIuMCJ9LCJzY2VuZSI6MCwic2NlbmVzIjpbeyJuYW1lIjoiU2NlbmUiLCJub2RlcyI6WzBdfV0sIm5vZGVzIjpbeyJtZXNoIjowLCJuYW1lIjoiR3JpZCJ9XSwibWVzaGVzIjpbeyJuYW1lIjoiR3JpZCIsInByaW1pdGl2ZXMiOlt7ImF0dHJpYnV0ZXMiOnsiUE9TSVRJT04iOjAsIlRFWENPT1JEXzAiOjF9LCJpbmRpY2VzIjoyfV19XSwiYWNjZXNzb3JzIjpbeyJidWZmZXJWaWV3IjowLCJjb21wb25lbnRUeXBlIjo1MTI2LCJjb3VudCI6MTQyLCJtYXgiOlsxLDAsMV0sIm1pbiI6Wy0xLDAsLTFdLCJ0eXBlIjoiVkVDMyJ9LHsiYnVmZmVyVmlldyI6MSwiY29tcG9uZW50VHlwZSI6NTEyNiwiY291bnQiOjE0MiwidHlwZSI6IlZFQzIifSx7ImJ1ZmZlclZpZXciOjIsImNvbXBvbmVudFR5cGUiOjUxMjMsImNvdW50Ijo2MDAsInR5cGUiOiJTQ0FMQVIifV0sImJ1ZmZlclZpZXdzIjpbeyJidWZmZXIiOjAsImJ5dGVMZW5ndGgiOjE3MDQsImJ5dGVPZmZzZXQiOjAsInRhcmdldCI6MzQ5NjJ9LHsiYnVmZmVyIjowLCJieXRlTGVuZ3RoIjoxMTM2LCJieXRlT2Zmc2V0IjoxNzA0LCJ0YXJnZXQiOjM0OTYyfSx7ImJ1ZmZlciI6MCwiYnl0ZUxlbmd0aCI6MTIwMCwiYnl0ZU9mZnNldCI6Mjg0MCwidGFyZ2V0IjozNDk2M31dLCJidWZmZXJzIjpbeyJieXRlTGVuZ3RoIjo0MDQwfV19ICAgyA8AAEJJTgAAAIC/AAAAAAAAgD/NzEy/AAAAAAAAgD+amRm/AAAAAAAAgD/MzMy+AAAAAAAAgD/MzEy+AAAAAAAAgD8AAAAAAAAAAAAAgD/QzEw+AAAAAAAAgD/MzMw+AAAAAAAAgD+amRk/AAAAAAAAgD/OzEw/AAAAAAAAgD8AAIA/AAAAAAAAgD8AAIC/AAAAAM3MTD/NzEy/AAAAAM3MTD+amRm/AAAAAM3MTD+amRm/AAAAAM3MTD/MzMy+AAAAAM3MTD/MzEy+AAAAAM3MTD8AAAAAAAAAAM3MTD/QzEw+AAAAAM3MTD/MzMw+AAAAAM3MTD+amRk/AAAAAM3MTD/OzEw/AAAAAM3MTD8AAIA/AAAAAM3MTD8AAIC/AAAAAJqZGT8AAIC/AAAAAJqZGT/NzEy/AAAAAJqZGT/NzEy/AAAAAJqZGT+amRm/AAAAAJqZGT+amRm/AAAAAJqZGT+amRm/AAAAAJqZGT/MzMy+AAAAAJqZGT/MzMy+AAAAAJqZGT/MzEy+AAAAAJqZGT/MzEy+AAAAAJqZGT8AAAAAAAAAAJqZGT8AAAAAAAAAAJqZGT/QzEw+AAAAAJqZGT/QzEw+AAAAAJqZGT/MzMw+AAAAAJqZGT/MzMw+AAAAAJqZGT+amRk/AAAAAJqZGT+amRk/AAAAAJqZGT/OzEw/AAAAAJqZGT/OzEw/AAAAAJqZGT8AAIA/AAAAAJqZGT8AAIA/AAAAAJqZGT8AAIC/AAAAAMzMzD7NzEy/AAAAAMzMzD6amRm/AAAAAMzMzD6amRm/AAAAAMzMzD7MzMy+AAAAAMzMzD7MzEy+AAAAAMzMzD4AAAAAAAAAAMzMzD7QzEw+AAAAAMzMzD7MzMw+AAAAAMzMzD6amRk/AAAAAMzMzD7OzEw/AAAAAMzMzD4AAIA/AAAAAMzMzD4AAIC/AAAAAMzMTD7NzEy/AAAAAMzMTD6amRm/AAAAAMzMTD6amRm/AAAAAMzMTD7MzMy+AAAAAMzMTD7MzEy+AAAAAMzMTD4AAAAAAAAAAMzMTD7QzEw+AAAAAMzMTD7MzMw+AAAAAMzMTD6amRk/AAAAAMzMTD7OzEw/AAAAAMzMTD4AAIA/AAAAAMzMTD4AAIC/AAAAAAAAAIDNzEy/AAAAAAAAAICamRm/AAAAAAAAAICamRm/AAAAAAAAAIDMzMy+AAAAAAAAAIDMzEy+AAAAAAAAAIAAAAAAAAAAAAAAAIDQzEw+AAAAAAAAAIDMzMw+AAAAAAAAAICamRk/AAAAAAAAAIDOzEw/AAAAAAAAAIAAAIA/AAAAAAAAAIAAAIC/AAAAANDMTL7NzEy/AAAAANDMTL6amRm/AAAAANDMTL6amRm/AAAAANDMTL7MzMy+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AAAAtAAAAQAMAAAADAALAAEAAgANAAEADQAMAAIAAwAPAAIADwAOAAMABAAQAAMAEAAPAAQABQARAAQAEQAQAAUABgASAAUAEgARAAYABwATAAYAEwASAAcACAAUAAcAFAATAAgACQAVAAgAFQAUAAkACgAWAAkAFgAVAAsADAAaAAsAGgAYAAwADQAcAAwAHAAaAA0ADwAfAA0AHwAdAA8AEAAhAA8AIQAfABAAEQAjABAAIwAhABEAEgAlABEAJQAjABIAEwAnABIAJwAlABMAFAApABMAKQAnABQAFQArABQAKwApABUAFgAtABUALQArABcAGQAvABcALwAuABkAGwAwABkAMAAvABsAHgAyABsAMgAxAB4AIAAzAB4AMwAyACAAIgA0ACAANAAzACIAJAA1ACIANQA0ACQAJgA2ACQANgA1ACYAKAA3ACYANwA2ACgAKgA4ACgAOAA3ACoALAA5ACoAOQA4AC4ALwA7AC4AOwA6AC8AMAA8AC8APAA7ADAAMgA+ADAAPgA9ADIAMwA/ADIAPwA+ADMANABAADMAQAA/ADQANQBBADQAQQBAADUANgBCADUAQgBBADYANwBDADYAQwBCADcAOABEADcARABDADgAOQBFADgARQBEADoAOwBHADoARwBGADsAPABIADsASABHADwAPgBKADwASgBJAD4APwBLAD4ASwBKAD8AQABMAD8ATABLAEAAQQBNAEAATQBMAEEAQgBOAEEATgBNAEIAQwBPAEIATwBOAEMARABQAEMAUABPAEQARQBRAEQAUQBQAEYARwBTAEYAUwBSAEcASABUAEcAVABTAEgASgBWAEgAVgBVAEoASwBXAEoAVwBWAEsATABYAEsAWABXAEwATQBZAEwAWQBYAE0ATgBaAE0AWgBZAE4ATwBbAE4AWwBaAE8AUABcAE8AXABbAFAAUQBdAFAAXQBcAFIAUwBfAFIAXwBeAFMAVABgAFMAYABfAFQAVgBiAFQAYgBhAFYAVwBjAFYAYwBiAFcAWABkAFcAZABjAFgAWQBlAFgAZQBkAFkAWgBmAFkAZgBlAFoAWwBnAFoAZwBmAFsAXABoAFsAaABnAFwAXQBpAFwAaQBoAF4AXwBrAF4AawBqAF8AYABsAF8AbABrAGAAYgBuAGAAbgBtAGIAYwBvAGIAbwBuAGMAZABwAGMAcABvAGQAZQBxAGQAcQBwAGUAZgByAGUAcgBxAGYAZwBzAGYAcwByAGcAaAB0AGcAdABzAGgAaQB1AGgAdQB0AGoAawB3AGoAdwB2AGsAbAB4AGsAeAB3AGwAbgB6AGwAegB5AG4AbwB7AG4AewB6AG8AcAB8AG8AfAB7AHAAcQB9AHAAfQB8AHEAcgB+AHEAfgB9AHIAcwB/AHIAfwB+AHMAdACAAHMAgAB/AHQAdQCBAHQAgQCAAHYAdwCDAHYAgwCCAHcAeACEAHcAhACDAHgAegCGAHgAhgCFAHoAewCHAHoAhwCGAHsAfACIAHsAiACHAHwAfQCJAHwAiQCIAH0AfgCKAH0AigCJAH4AfwCLAH4AiwCKAH8AgACMAH8AjACLAIAAgQCNAIAAjQCMAA==";

},
73112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _framebuffer_demo__rspack_import_1 = __webpack_require__(8272);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterFramebuffer.html",
                        children: "TgdPainterFramebuffer"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " - Example 3"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's use the framebuffer to simulate water. We want the objects deeply flooded\nto be almost invisible. That's why we need to store the height of every rendered\npixels."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this demo, we store the distance from the camera on the alpha channel. That\nmeans, that w have only 1 byte for the resolution. You can see some weird lines\nin the texture under the water."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_framebuffer_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/example3/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9leGFtcGxlM19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1kZjFiZjEuZGZmMTcxODg5ZGI1MDUwZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIubW9kdWxlLmNzcz9hMmEzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUzL18vZnJhbWVidWZmZXIuZGVtby9kaWZmdXNlLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUzL18vZnJhbWVidWZmZXIuZGVtby9mcmFtZWJ1ZmZlci5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9mcmFtZWJ1ZmZlci9leGFtcGxlMy9fL2ZyYW1lYnVmZmVyLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUzL18vZnJhbWVidWZmZXIuZGVtby9zZWEtbWF0ZXJpYWwudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhbWVidWZmZXIvZXhhbXBsZTMvXy9mcmFtZWJ1ZmZlci5kZW1vL3NlYS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9Db2RlVmlld2VyLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2ZyYW1lYnVmZmVyL2V4YW1wbGUzL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJDb2RlVmlld2VyXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfQ29kZVZpZXdlcl9QdEw3TTVcIixcInBvcHVwXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLUNvZGVWaWV3ZXItQ29kZVZpZXdlci1tb2R1bGVfcG9wdXBfblNEWkNSXCJ9OyIsImltcG9ydCB7XG4gICAgQXJyYXlOdW1iZXI0LFxuICAgIFRnZENvZGVCbG9jLFxuICAgIFRnZExpZ2h0LFxuICAgIFRnZE1hdGVyaWFsLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFZlYzMsXG4gICAgVGdkVmVjNCxcbiAgICBXZWJnbEF0dHJpYnV0ZVR5cGUsXG4gICAgV2ViZ2xVbmlmb3JtVHlwZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IHR5cGUgTWF0ZXJpYWxEaWZmdXNlT3B0aW9ucyA9IFBhcnRpYWw8e1xuICAgIGNvbG9yOiBUZ2RWZWM0IHwgQXJyYXlOdW1iZXI0IHwgVGdkVGV4dHVyZTJEXG4gICAgbGlnaHQ6IFRnZExpZ2h0XG4gICAgYW1iaWVudDogVGdkTGlnaHRcbiAgICBzcGVjdWxhckV4cG9uZW50OiBudW1iZXJcbiAgICBzcGVjdWxhckludGVuc2l0eTogbnVtYmVyXG59PlxuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gbmV3IFRnZFZlYzQoMC44LCAwLjYsIDAuMSwgMSlcblxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRGlmZnVzZSBleHRlbmRzIFRnZE1hdGVyaWFsIHtcbiAgICBwdWJsaWMgbGlnaHQgPSBuZXcgVGdkTGlnaHQoKVxuICAgIHB1YmxpYyBhbWJpZW50ID0gbmV3IFRnZExpZ2h0KHsgY29sb3I6IG5ldyBUZ2RWZWM0KDAuMiwgMC4xLCAwLCAwKSB9KVxuICAgIHB1YmxpYyBzcGVjdWxhckV4cG9uZW50ID0gMjBcbiAgICBwdWJsaWMgc3BlY3VsYXJJbnRlbnNpdHkgPSAxXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRCB8IG51bGxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpZ2h0Q29sb3IgPSBuZXcgVGdkVmVjMygpXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbWJpZW50Q29sb3IgPSBuZXcgVGdkVmVjMygpXG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNYXRlcmlhbERpZmZ1c2VPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgY29sb3IgPVxuICAgICAgICAgICAgb3B0aW9ucy5jb2xvciBpbnN0YW5jZW9mIFRnZFRleHR1cmUyRCA/IG9wdGlvbnMuY29sb3IgOiBuZXcgVGdkVmVjNChvcHRpb25zLmNvbG9yID8/IERFRkFVTFRfQ09MT1IpXG4gICAgICAgIGNvbnN0IGhhc1RleHR1cmUgPSAhKGNvbG9yIGluc3RhbmNlb2YgVGdkVmVjNClcbiAgICAgICAgY29uc3QgdW5pZm9ybXM6IHsgW25hbWU6IHN0cmluZ106IFdlYmdsVW5pZm9ybVR5cGUgfSA9IHtcbiAgICAgICAgICAgIHVuaUxpZ2h0OiBcInZlYzNcIixcbiAgICAgICAgICAgIHVuaUxpZ2h0RGlyOiBcInZlYzNcIixcbiAgICAgICAgICAgIHVuaUFtYmllbnQ6IFwidmVjM1wiLFxuICAgICAgICAgICAgdW5pU3BlY3VsYXJFeHBvbmVudDogXCJmbG9hdFwiLFxuICAgICAgICAgICAgdW5pU3BlY3VsYXJJbnRlbnNpdHk6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFyeWluZ3M6IHsgW25hbWU6IHN0cmluZ106IFdlYmdsQXR0cmlidXRlVHlwZSB9ID0ge1xuICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgIHZhclo6IFwiZmxvYXRcIixcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXJDb2RlOiBUZ2RDb2RlQmxvYyA9IFtcbiAgICAgICAgICAgIFwidmFyTm9ybWFsID0gbWF0Myh1bmlUcmFuc2ZvTWF0cml4KSAqIE5PUk1BTDtcIixcbiAgICAgICAgICAgIFwidmFyWiA9IC0uMiAqICh1bmlNb2RlbFZpZXdNYXRyaXggKiB1bmlUcmFuc2ZvTWF0cml4ICogdmVjNChwb3NpdGlvbiwgMSkpLno7XCIsXG4gICAgICAgIF1cbiAgICAgICAgaWYgKGhhc1RleHR1cmUpIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlckNvZGUucHVzaChcInZhclVWID0gVEVYQ09PUkRfMDtcIilcbiAgICAgICAgICAgIHZhcnlpbmdzLnZhclVWID0gXCJ2ZWMyXCJcbiAgICAgICAgICAgIHVuaWZvcm1zLnRleERpZmZ1c2UgPSBcInNhbXBsZXIyRFwiXG4gICAgICAgIH1cblxuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICB1bmlmb3JtcyxcbiAgICAgICAgICAgIHZhcnlpbmdzLFxuICAgICAgICAgICAgdmVydGV4U2hhZGVyQ29kZSxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyQ29kZTogW1xuICAgICAgICAgICAgICAgIFwidmVjMyBub3JtYWwgPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcbiAgICAgICAgICAgICAgICBgZmxvYXQgbGlnaHQgPSAxLjAgLSBkb3Qobm9ybWFsLCB1bmlMaWdodERpcik7YCxcbiAgICAgICAgICAgICAgICBoYXNUZXh0dXJlID8gYHZlYzQgY29sb3IgPSB0ZXh0dXJlKHRleERpZmZ1c2UsIHZhclVWKTtgIDogYHZlYzQgY29sb3IgPSB2ZWM0KCR7Y29sb3Iuam9pbihcIiwgXCIpfSk7YCxcbiAgICAgICAgICAgICAgICBgdmVjMyBub3JtYWwyID0gbWF0Myh1bmlNb2RlbFZpZXdNYXRyaXgpICogbm9ybWFsO2AsXG4gICAgICAgICAgICAgICAgYGZsb2F0IHNwZWMgPSBtYXgoMC4wLCByZWZsZWN0KHVuaUxpZ2h0RGlyLCBub3JtYWwyKS56KTtgLFxuICAgICAgICAgICAgICAgIGBzcGVjID0gcG93KHNwZWMsIHVuaVNwZWN1bGFyRXhwb25lbnQpICogdW5pU3BlY3VsYXJJbnRlbnNpdHk7YCxcbiAgICAgICAgICAgICAgICBgY29sb3IgPSB2ZWM0KGAsXG4gICAgICAgICAgICAgICAgYCAgY29sb3IucmdiICogKGAsXG4gICAgICAgICAgICAgICAgYCAgICB1bmlBbWJpZW50ICsgdW5pTGlnaHQgKiBsaWdodGAsXG4gICAgICAgICAgICAgICAgYCAgKSArIHZlYzMoc3BlYyksYCxcbiAgICAgICAgICAgICAgICBgICB2YXJaYCxcbiAgICAgICAgICAgICAgICBgKTtgLFxuICAgICAgICAgICAgICAgIGByZXR1cm4gY29sb3I7YCxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9OiB7IHByb2dyYW06IFRnZFByb2dyYW0gfSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUxpZ2h0RGlyXCIsIHRoaXMubGlnaHQuZGlyZWN0aW9uKVxuICAgICAgICAgICAgICAgIHRoaXMubGlnaHRDb2xvci5mcm9tKHRoaXMubGlnaHQuY29sb3IpLnNjYWxlKHRoaXMubGlnaHQuY29sb3IudylcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZnYoXCJ1bmlMaWdodFwiLCB0aGlzLmxpZ2h0Q29sb3IpXG4gICAgICAgICAgICAgICAgdGhpcy5hbWJpZW50Q29sb3IuZnJvbSh0aGlzLmFtYmllbnQuY29sb3IpLnNjYWxlKHRoaXMuYW1iaWVudC5jb2xvci53KVxuICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmdihcInVuaUFtYmllbnRcIiwgdGhpcy5hbWJpZW50Q29sb3IpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlTcGVjdWxhckV4cG9uZW50XCIsIHRoaXMuc3BlY3VsYXJFeHBvbmVudClcbiAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaVNwZWN1bGFySW50ZW5zaXR5XCIsIHRoaXMuc3BlY3VsYXJJbnRlbnNpdHkpXG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHRleHR1cmUgfSA9IHRoaXNcbiAgICAgICAgICAgICAgICBpZiAodGV4dHVyZSkgdGV4dHVyZS5hY3RpdmF0ZSgwLCBwcm9ncmFtLCBcInRleERpZmZ1c2VcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG9wdGlvbnMubGlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMubGlnaHQgPSBvcHRpb25zLmxpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuYW1iaWVudCkge1xuICAgICAgICAgICAgdGhpcy5hbWJpZW50ID0gb3B0aW9ucy5hbWJpZW50XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnNwZWN1bGFyRXhwb25lbnQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlY3VsYXJFeHBvbmVudCA9IG9wdGlvbnMuc3BlY3VsYXJFeHBvbmVudFxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zcGVjdWxhckludGVuc2l0eSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zcGVjdWxhckludGVuc2l0eSA9IG9wdGlvbnMuc3BlY3VsYXJJbnRlbnNpdHlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHR1cmUgPSBoYXNUZXh0dXJlID8gY29sb3IgOiBudWxsXG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nLFxuICAgIFRnZFBhaW50ZXJHcm91cCxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmUyRCxcbiAgICBUZ2RWZWM0LFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbi8vIGltcG9ydCBXb3JsZFVSTCBmcm9tIFwiLi93b3JsZC5nbGJcIlxuaW1wb3J0IFdvcmxkVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2NoaW5lc2UtY2hhbmRlbGllci5nbGJcIlxuaW1wb3J0IEdyaWRVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvZ3JpZC0xMHgxMC5nbGJcIlxuaW1wb3J0IHsgUGFpbnRlclNlYSB9IGZyb20gXCIuL3NlYVwiXG5pbXBvcnQgeyBNYXRlcmlhbERpZmZ1c2UgfSBmcm9tIFwiLi9kaWZmdXNlXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpblxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcbiAgICAgICAgdHJhbnNmbzogeyBkaXN0YW5jZTogMiB9LFxuICAgICAgICBmYXI6IDEwMCxcbiAgICAgICAgbmVhcjogMC4wMSxcbiAgICAgICAgZm92eTogdGdkQ2FsY0RlZ1RvUmFkKDM1KSxcbiAgICAgICAgem9vbTogMSxcbiAgICB9KVxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBzcGVlZFBhbm5pbmc6IDAsXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICBsYXQ6IHRnZENhbGNEZWdUb1JhZCg1MCksXG4gICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtMjApLFxuICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoODApLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAsIDAsIDAsIDEpLFxuICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgc3RlbmNpbDogMCxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi53b3JsZCxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4gbmV3IE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yIH0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBtZXNoT3BhcXVlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIud29ybGQsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoeyBjb2xvciB9KSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29uc3Qgc2VhID0gbmV3IFBhaW50ZXJTZWEoY29udGV4dClcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2NsZWFyLCBtZXNoXSlcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXJXaXRoQW50aUFsaWFzaW5nKGNvbnRleHQsIHtcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcbiAgICAgICAgY2hpbGRyZW46IFtzY2VuZV0sXG4gICAgfSlcbiAgICBpZiAoZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCkgc2VhLnRleHR1cmUgPSBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwXG4gICAgY29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGNsZWFyLCBtZXNoT3BhcXVlLCBzZWEpXG4gICAgY29udGV4dC5sb2dpYy5hZGQoKHRpbWUpID0+IHtcbiAgICAgICAgc2VhLnkgPSBNYXRoLnNpbih0aW1lICogMC40KSAqIDAuNVxuICAgIH0pXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIG9wdGlvbnM9e3sgYW50aWFsaWFzOiB0cnVlLCBzdGVuY2lsOiB0cnVlLCBkZXB0aDogdHJ1ZSB9fVxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICB3b3JsZDogV29ybGRVUkwsXG4gICAgICAgICAgICAgICAgICAgIHNlZTogR3JpZFVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vZnJhbWVidWZmZXIuZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgIFwiICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDIgfSxcXG4gICAgICAgIGZhcjogMTAwLFxcbiAgICAgICAgbmVhcjogMC4wMSxcXG4gICAgICAgIGZvdnk6IHRnZENhbGNEZWdUb1JhZCgzNSksXFxuICAgICAgICB6b29tOiAxLFxcbiAgICB9KVxcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgIHNwZWVkUGFubmluZzogMCxcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgIGdlbzoge1xcbiAgICAgICAgICAgIGxhdDogdGdkQ2FsY0RlZ1RvUmFkKDUwKSxcXG4gICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtMjApLFxcbiAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDgwKSxcXG4gICAgICAgIH0sXFxuICAgIH0pXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICBjb2xvcjogbmV3IFRnZFZlYzQoMCwgMCwgMCwgMSksXFxuICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIHN0ZW5jaWw6IDAsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLndvcmxkLFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4gbmV3IE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yIH0pLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3QgbWVzaE9wYXF1ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQ6IGFzc2V0cy5nbGIud29ybGQsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiAoeyBjb2xvciB9KSA9PiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHsgY29sb3IgfSksXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb25zdCBzZWEgPSBuZXcgUGFpbnRlclNlYShjb250ZXh0KVxcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUZ2RQYWludGVyR3JvdXAoW2NsZWFyLCBtZXNoXSlcXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyV2l0aEFudGlBbGlhc2luZyhjb250ZXh0LCB7XFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLFxcbiAgICAgICAgY2hpbGRyZW46IFtzY2VuZV0sXFxuICAgIH0pXFxuICAgIGlmIChmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwKSBzZWEudGV4dHVyZSA9IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjBcXG4gICAgY29udGV4dC5hZGQoZnJhbWVidWZmZXIsIGNsZWFyLCBtZXNoT3BhcXVlLCBzZWEpXFxuICAgIGNvbnRleHQubG9naWMuYWRkKCh0aW1lKSA9PiB7XFxuICAgICAgICBzZWEueSA9IE1hdGguc2luKHRpbWUgKiAwLjQpICogMC41XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGxheSgpXCIsXG59XG5jb25zdCBGVUxMID1cbiAgICAnaW1wb3J0IHtcXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyV2l0aEFudGlBbGlhc2luZyxcXG4gICAgVGdkUGFpbnRlckdyb3VwLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZTJELFxcbiAgICBUZ2RWZWM0LFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbi8vIGltcG9ydCBXb3JsZFVSTCBmcm9tIFwiLi93b3JsZC5nbGJcIlxcbmltcG9ydCBXb3JsZFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9jaGluZXNlLWNoYW5kZWxpZXIuZ2xiXCJcXG5pbXBvcnQgR3JpZFVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9ncmlkLTEweDEwLmdsYlwiXFxuaW1wb3J0IHsgUGFpbnRlclNlYSB9IGZyb20gXCIuL3NlYVwiXFxuaW1wb3J0IHsgTWF0ZXJpYWxEaWZmdXNlIH0gZnJvbSBcIi4vZGlmZnVzZVwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XFxuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiAyIH0sXFxuICAgICAgICBmYXI6IDEwMCxcXG4gICAgICAgIG5lYXI6IDAuMDEsXFxuICAgICAgICBmb3Z5OiB0Z2RDYWxjRGVnVG9SYWQoMzUpLFxcbiAgICAgICAgem9vbTogMSxcXG4gICAgfSlcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICBzcGVlZFBhbm5pbmc6IDAsXFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICBsYXQ6IHRnZENhbGNEZWdUb1JhZCg1MCksXFxuICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTIwKSxcXG4gICAgICAgICAgICBtYXhMYXQ6IHRnZENhbGNEZWdUb1JhZCg4MCksXFxuICAgICAgICB9LFxcbiAgICB9KVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgY29sb3I6IG5ldyBUZ2RWZWM0KDAsIDAsIDAsIDEpLFxcbiAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICBzdGVuY2lsOiAwLFxcbiAgICB9KVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICBjaGlsZHJlbjogW1xcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBhc3NldDogYXNzZXRzLmdsYi53b3JsZCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6ICh7IGNvbG9yIH0pID0+IG5ldyBNYXRlcmlhbERpZmZ1c2UoeyBjb2xvciB9KSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgIF0sXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2hPcGFxdWUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0OiBhc3NldHMuZ2xiLndvcmxkLFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogKHsgY29sb3IgfSkgPT4gbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7IGNvbG9yIH0pLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgXSxcXG4gICAgfSlcXG4gICAgY29uc3Qgc2VhID0gbmV3IFBhaW50ZXJTZWEoY29udGV4dClcXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVGdkUGFpbnRlckdyb3VwKFtjbGVhciwgbWVzaF0pXFxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcldpdGhBbnRpQWxpYXNpbmcoY29udGV4dCwge1xcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KSxcXG4gICAgICAgIGNoaWxkcmVuOiBbc2NlbmVdLFxcbiAgICB9KVxcbiAgICBpZiAoZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCkgc2VhLnRleHR1cmUgPSBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwXFxuICAgIGNvbnRleHQuYWRkKGZyYW1lYnVmZmVyLCBjbGVhciwgbWVzaE9wYXF1ZSwgc2VhKVxcbiAgICBjb250ZXh0LmxvZ2ljLmFkZCgodGltZSkgPT4ge1xcbiAgICAgICAgc2VhLnkgPSBNYXRoLnNpbih0aW1lICogMC40KSAqIDAuNVxcbiAgICB9KVxcbiAgICBjb250ZXh0LnBsYXkoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvcHRpb25zPXt7IGFudGlhbGlhczogdHJ1ZSwgc3RlbmNpbDogdHJ1ZSwgZGVwdGg6IHRydWUgfX1cXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBnbGI6IHtcXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkOiBXb3JsZFVSTCxcXG4gICAgICAgICAgICAgICAgICAgIHNlZTogR3JpZFVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG4nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPERlbW8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7IFRnZENvbnRleHQsIFRnZE1hdGVyaWFsLCBUZ2RQcm9ncmFtLCBUZ2RUZXh0dXJlMkQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY2xhc3MgU2VhTWF0ZXJpYWwgZXh0ZW5kcyBUZ2RNYXRlcmlhbCB7XG4gICAgcHVibGljIHRleHR1cmU6IFRnZFRleHR1cmUyRCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pSW52ZXJzZVNjcmVlblNpemU6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgIHRleERpZmZ1c2U6IFwic2FtcGxlcjJEXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFyeWluZ3M6IHtcbiAgICAgICAgICAgICAgICB2YXJaOiBcImZsb2F0XCIsXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICAgICAgXCJ2YXJOb3JtYWwgPSBtYXQzKHVuaU1vZGVsVmlld01hdHJpeCkgKiBtYXQzKHVuaVRyYW5zZm9NYXRyaXgpICogTk9STUFMO1wiLFxuICAgICAgICAgICAgICAgIFwidmFyWiA9IC0uMiAqICh1bmlNb2RlbFZpZXdNYXRyaXggKiB1bmlUcmFuc2ZvTWF0cml4ICogUE9TSVRJT04pLno7XCIsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG4gICAgICAgICAgICAgICAgYHZlYzIgdXYgPSBnbF9GcmFnQ29vcmQueHkgKiB1bmlJbnZlcnNlU2NyZWVuU2l6ZTtgLFxuICAgICAgICAgICAgICAgIGB2ZWM0IGNvbG9yID0gdGV4dHVyZSh0ZXhEaWZmdXNlLCB1dik7YCxcbiAgICAgICAgICAgICAgICBcImZsb2F0IGRpc3QgPSBjb2xvci5hIC0gdmFyWjtcIixcbiAgICAgICAgICAgICAgICBcImRpc3QgPSBjbGFtcChkaXN0ICogMTAuMCwgMC4wLCAwLjkpO1wiLFxuICAgICAgICAgICAgICAgIFwiY29sb3IgKj0gNC4wO1wiLFxuICAgICAgICAgICAgICAgIFwiZmxvYXQgcyA9IC4wMTtcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yICs9IHRleHR1cmUodGV4RGlmZnVzZSwgdXYgKyB2ZWMyKGRpc3QgKiBzLCAwKSk7XCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvciArPSB0ZXh0dXJlKHRleERpZmZ1c2UsIHV2IC0gdmVjMihkaXN0ICogcywgMCkpO1wiLFxuICAgICAgICAgICAgICAgIFwiY29sb3IgKz0gdGV4dHVyZSh0ZXhEaWZmdXNlLCB1diArIHZlYzIoMCwgZGlzdCAqIHMpKTtcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yICs9IHRleHR1cmUodGV4RGlmZnVzZSwgdXYgLSB2ZWMyKDAsIGRpc3QgKiBzKSk7XCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvciAqPSAuMTI1O1wiLFxuICAgICAgICAgICAgICAgIGB2ZWMzIHJlc3VsdCA9IG1peChjb2xvci5yZ2IsIHZlYzMoMCwgMCwgLjQpLCBwb3coZGlzdCwgMC41KSk7YCxcbiAgICAgICAgICAgICAgICBgZmxvYXQgc3BlY3VsYXIgPSBjbGFtcCh2YXJOb3JtYWwueiwgMC4wLCAxLjApICogLjM7YCxcbiAgICAgICAgICAgICAgICBcInJldHVybiB2ZWM0KHJlc3VsdCArIHZlYzMoc3BlY3VsYXIpLCAxLjApO1wiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH06IHsgcHJvZ3JhbTogVGdkUHJvZ3JhbSB9KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyB0ZXh0dXJlLCBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgICAgICAgICAgaWYgKHRleHR1cmUpIHRleHR1cmUuYWN0aXZhdGUoMCwgcHJvZ3JhbSwgXCJ0ZXhEaWZmdXNlXCIpXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMmYoXCJ1bmlJbnZlcnNlU2NyZWVuU2l6ZVwiLCAxIC8gY29udGV4dC53aWR0aCwgMSAvIGNvbnRleHQuaGVpZ2h0KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB0eXBlIFRnZFRleHR1cmUyRCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgU2VhTWF0ZXJpYWwgfSBmcm9tIFwiLi9zZWEtbWF0ZXJpYWxcIlxuXG5leHBvcnQgY2xhc3MgUGFpbnRlclNlYSBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWF0ZXJpYWw6IFNlYU1hdGVyaWFsXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZWE6IFRnZFBhaW50ZXJOb2RlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNlYU1hdGVyaWFsKGNvbnRleHQpXG4gICAgICAgIHRoaXMuc2VhID0gbmV3IFRnZFBhaW50ZXJOb2RlKHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUJveCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplWDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVZOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplWjogMSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsOiB0aGlzLm1hdGVyaWFsLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXQgdGV4dHVyZSh0ZXh0dXJlOiBUZ2RUZXh0dXJlMkQpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbC50ZXh0dXJlID0gdGV4dHVyZVxuICAgIH1cblxuICAgIHNldCB5KHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIHksIDApXG4gICAgfVxuXG4gICAgZGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIHNlYSB9ID0gdGhpc1xuICAgICAgICBUZ2RQYWludGVyU3RhdGUuZG8oY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlYS50cmFuc2ZvLm9yYml0QXJvdW5kWihkZWxheSAqIDAuODUyMSkub3JiaXRBcm91bmRYKGRlbGF5ICogMC4zNzY0KVxuICAgICAgICAgICAgICAgIHNlYS5wYWludCh0aW1lLCBkZWxheSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29kZVZpZXdlclwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQywwSkFBMEosRTs7Ozs7Ozs7O0FDVW5KO0FBVXZCLE1BQU0sYUFBYSxHQUFHLElBQUksdUNBQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFFNUMsTUFBTSxlQUFnQixTQUFRLDJDQUFXO0lBVTVDLFlBQVksVUFBa0MsRUFBRTtRQUM1QyxNQUFNLEtBQUssR0FDUCxPQUFPLENBQUMsS0FBSyxZQUFZLDRDQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksdUNBQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQztRQUN2RyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLHVDQUFPLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQXlDO1lBQ25ELFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLG1CQUFtQixFQUFFLE9BQU87WUFDNUIsb0JBQW9CLEVB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