"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_lod_detail_page_mdx-src_components_demo_CodeViewer_CodeViewer_module-c192e4"], {
55852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(48098);





const FOCUS = { "Detail #1": "function init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 14\n    context.camera.near = 1e-2\n    context.camera.far = 20\n    const color: ArrayNumber4 = [0.9, 0.5, 0.1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 8,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialGlobal({\n                color: COLORS[level],\n                ambientColor: skybox,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox: {\n        min: Readonly<ArrayNumber3>\n        max: Readonly<ArrayNumber3>\n    } = {\n        min: [-1.31195, -1.39747, -1.06093],\n        max: [1.312, 1.2265, 1.563],\n    }\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const asset: TgdDataGlb | null = await loadGLB(x, y, z, level)\n            if (!asset) return null\n\n            return new TgdPainterMeshGltf(context, {\n                asset,\n                material: materials[level],\n            })\n        },\n        subdivisions: 1,\n        // subdivisions: 3,\n        // surfaceThreshold: 0.8,\n    })\n    const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n        const point = new TgdPainterDebugPoint(context)\n        const [R, G, B, A] = COLORS[i]\n        point.color.x = R\n        point.color.y = G\n        point.color.z = B\n        point.color.w = A\n        return point\n    })\n    const group = new TgdPainterGroup(points)\n    const wireCube = new WireCube(context)\n    group.add(wireCube)\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod, group],\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n        }),\n        new TgdPainterLogic((time) => {\n            // const { transfo } = context.camera\n            // transfo.setEulerRotation(\n            // \tMath.sin(time) * 30,\n            // \tMath.sin(time * 1.182) * 40,\n            // \t0,\n            // )\n            const bbox = {\n                min: [0.000025000000000052758, -1.39747, 0.251035],\n                max: [1.312, -0.08548500000000003, 1.563],\n            }\n            const [x0, y0, z0] = bbox.min\n            const [x1, y1, z1] = bbox.max\n            const corners: ArrayNumber3[] = [\n                [x0, y0, z0],\n                [x0, y1, z0],\n                [x1, y0, z0],\n                [x1, y1, z0],\n                [x0, y0, z1],\n                [x0, y1, z1],\n                [x1, y0, z1],\n                [x1, y1, z1],\n            ]\n            let ptr = 0\n            for (let i = 0; i < 8; i++) {\n                const [x, y, z, w] = context.camera.apply(corners[i])\n                const painter = points[i]\n                painter.x = x\n                painter.y = y\n                painter.z = z\n                painter.w = w\n                const { data } = wireCube\n                data[ptr++] = x\n                data[ptr++] = y\n                data[ptr++] = z\n                data[ptr++] = w\n            }\n        }),\n    )\n    context.inputs.keyboard.eventKeyPress.addListener((evt) => {\n        if (evt.key === \"d\") {\n            lod.debug()\n        }\n    })\n    context.paint()\n}" };
const FULL = "import {\n    type ArrayNumber3,\n    type ArrayNumber4,\n    type TgdContext,\n    type TgdDataGlb,\n    TgdMaterialGlobal,\n    TgdPainterClear,\n    TgdPainterDebugPoint,\n    TgdPainterGroup,\n    TgdPainterLOD,\n    TgdPainterLogic,\n    TgdPainterMeshGltf,\n    TgdPainterState,\n    TgdTextureCube,\n    tgdColorMakeHueWheel,\n    tgdLoadGlb,\n    webglPresetCull,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport NegX from \"@/assets/cubemap/sky/contrast/negX.webp\"\nimport NegY from \"@/assets/cubemap/sky/contrast/negY.webp\"\nimport NegZ from \"@/assets/cubemap/sky/contrast/negZ.webp\"\nimport PosX from \"@/assets/cubemap/sky/contrast/posX.webp\"\nimport PosY from \"@/assets/cubemap/sky/contrast/posY.webp\"\nimport PosZ from \"@/assets/cubemap/sky/contrast/posZ.webp\"\nimport View, { type Assets } from \"@/components/demo/Tgd\"\nimport { WireCube } from \"./wire-cube\"\n\nfunction init(context: TgdContext, assets: Assets) {\n    context.camera.transfo.distance = 14\n    context.camera.near = 1e-2\n    context.camera.far = 20\n    const color: ArrayNumber4 = [0.9, 0.5, 0.1, 1]\n    const skybox = new TgdTextureCube(context, {\n        imagePosX: assets.image.posX,\n        imagePosY: assets.image.posY,\n        imagePosZ: assets.image.posZ,\n        imageNegX: assets.image.negX,\n        imageNegY: assets.image.negY,\n        imageNegZ: assets.image.negZ,\n    })\n    const COLORS: ArrayNumber4[] = tgdColorMakeHueWheel({\n        steps: 8,\n    }).map((color) => [color.R, color.G, color.B, 1] as ArrayNumber4)\n    const materials = [0, 1, 2, 3, 4, 5].map(\n        (level) =>\n            new TgdMaterialGlobal({\n                color: COLORS[level],\n                ambientColor: skybox,\n            }),\n    )\n    const clear = new TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] })\n    const bbox: {\n        min: Readonly<ArrayNumber3>\n        max: Readonly<ArrayNumber3>\n    } = {\n        min: [-1.31195, -1.39747, -1.06093],\n        max: [1.312, 1.2265, 1.563],\n    }\n    const lod = new TgdPainterLOD(context, {\n        bbox,\n        async factory(x: number, y: number, z: number, level: number) {\n            const asset: TgdDataGlb | null = await loadGLB(x, y, z, level)\n            if (!asset) return null\n\n            return new TgdPainterMeshGltf(context, {\n                asset,\n                material: materials[level],\n            })\n        },\n        subdivisions: 1,\n        // subdivisions: 3,\n        // surfaceThreshold: 0.8,\n    })\n    const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {\n        const point = new TgdPainterDebugPoint(context)\n        const [R, G, B, A] = COLORS[i]\n        point.color.x = R\n        point.color.y = G\n        point.color.z = B\n        point.color.w = A\n        return point\n    })\n    const group = new TgdPainterGroup(points)\n    const wireCube = new WireCube(context)\n    group.add(wireCube)\n    context.add(\n        clear,\n        new TgdPainterState(context, {\n            children: [lod, group],\n            depth: webglPresetDepth.less,\n            cull: webglPresetCull.back,\n        }),\n        new TgdPainterLogic((time) => {\n            // const { transfo } = context.camera\n            // transfo.setEulerRotation(\n            // \tMath.sin(time) * 30,\n            // \tMath.sin(time * 1.182) * 40,\n            // \t0,\n            // )\n            const bbox = {\n                min: [0.000025000000000052758, -1.39747, 0.251035],\n                max: [1.312, -0.08548500000000003, 1.563],\n            }\n            const [x0, y0, z0] = bbox.min\n            const [x1, y1, z1] = bbox.max\n            const corners: ArrayNumber3[] = [\n                [x0, y0, z0],\n                [x0, y1, z0],\n                [x1, y0, z0],\n                [x1, y1, z0],\n                [x0, y0, z1],\n                [x0, y1, z1],\n                [x1, y0, z1],\n                [x1, y1, z1],\n            ]\n            let ptr = 0\n            for (let i = 0; i < 8; i++) {\n                const [x, y, z, w] = context.camera.apply(corners[i])\n                const painter = points[i]\n                painter.x = x\n                painter.y = y\n                painter.z = z\n                painter.w = w\n                const { data } = wireCube\n                data[ptr++] = x\n                data[ptr++] = y\n                data[ptr++] = z\n                data[ptr++] = w\n            }\n        }),\n    )\n    context.inputs.keyboard.eventKeyPress.addListener((evt) => {\n        if (evt.key === \"d\") {\n            lod.debug()\n        }\n    })\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <View\n            onReady={init}\n            assets={{\n                image: {\n                    posX: PosX,\n                    posY: PosY,\n                    posZ: PosZ,\n                    negX: NegX,\n                    negY: NegY,\n                    negZ: NegZ,\n                },\n            }}\n            gizmo\n            controller={{\n                inertiaOrbit: 1000,\n                inertiaZoom: 1000,\n                speedZoom: 0.8,\n            }}\n        />\n    )\n}\n\nfunction toBin(value: number, level: number): string {\n    return value.toString(2).padStart(level, \"0\")\n}\n\nasync function loadGLB(x: number, y: number, z: number, level: number): Promise<TgdDataGlb | null> {\n    const url =\n        level === 0\n            ? \"./assets/lod/Octree.glb\"\n            : `./assets/lod/Octree${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}.glb`\n    console.log(\"Loading LOD block:\", url)\n    const asset = await tgdLoadGlb(url)\n    return asset\n}\n";
function DemoContainer() {
    const [full, setFull] = react__rspack_import_1_default().useState(false);
    return (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: "half-left", children: (0,react_jsx_runtime__rspack_import_0.jsx)(_main_demo__rspack_import_4["default"], {}) }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: "half-right", children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewButton, { variant: "elevated", onClick: () => setFull(!full), children: full ? "Show code details" : "Show full code" }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "tsx", value: full ? FULL : FOCUS })] })] });
}


},
48098(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_cubemap_sky_contrast_negX_webp__rspack_import_2 = __webpack_require__(28814);
/* import */ var _assets_cubemap_sky_contrast_negY_webp__rspack_import_3 = __webpack_require__(51561);
/* import */ var _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4 = __webpack_require__(30892);
/* import */ var _assets_cubemap_sky_contrast_posX_webp__rspack_import_5 = __webpack_require__(10618);
/* import */ var _assets_cubemap_sky_contrast_posY_webp__rspack_import_6 = __webpack_require__(24645);
/* import */ var _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7 = __webpack_require__(85720);
/* import */ var _components_demo_Tgd__rspack_import_8 = __webpack_require__(18712);
/* import */ var _wire_cube__rspack_import_9 = __webpack_require__(69209);










function init(context, assets) {
    context.camera.transfo.distance = 14;
    context.camera.near = 1e-2;
    context.camera.far = 20;
    const color = [0.9, 0.5, 0.1, 1];
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.posX,
        imagePosY: assets.image.posY,
        imagePosZ: assets.image.posZ,
        imageNegX: assets.image.negX,
        imageNegY: assets.image.negY,
        imageNegZ: assets.image.negZ,
    });
    const COLORS = (0,_tolokoban_tgd__rspack_import_1.tgdColorMakeHueWheel)({
        steps: 8,
    }).map((color) => [color.R, color.G, color.B, 1]);
    const materials = [0, 1, 2, 3, 4, 5].map((level) => new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        color: COLORS[level],
        ambientColor: skybox,
    }));
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, { color: [0.3, 0.3, 0.3, 1] });
    const bbox = {
        min: [-1.31195, -1.39747, -1.06093],
        max: [1.312, 1.2265, 1.563],
    };
    const lod = new _tolokoban_tgd__rspack_import_1.TgdPainterLOD(context, {
        bbox,
        async factory(x, y, z, level) {
            const asset = await loadGLB(x, y, z, level);
            if (!asset)
                return null;
            return new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
                asset,
                material: materials[level],
            });
        },
        subdivisions: 1,
    });
    const points = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const point = new _tolokoban_tgd__rspack_import_1.TgdPainterDebugPoint(context);
        const [R, G, B, A] = COLORS[i];
        point.color.x = R;
        point.color.y = G;
        point.color.z = B;
        point.color.w = A;
        return point;
    });
    const group = new _tolokoban_tgd__rspack_import_1.TgdPainterGroup(points);
    const wireCube = new _wire_cube__rspack_import_9.WireCube(context);
    group.add(wireCube);
    context.add(clear, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [lod, group],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterLogic((time) => {
        const bbox = {
            min: [0.000025000000000052758, -1.39747, 0.251035],
            max: [1.312, -0.08548500000000003, 1.563],
        };
        const [x0, y0, z0] = bbox.min;
        const [x1, y1, z1] = bbox.max;
        const corners = [
            [x0, y0, z0],
            [x0, y1, z0],
            [x1, y0, z0],
            [x1, y1, z0],
            [x0, y0, z1],
            [x0, y1, z1],
            [x1, y0, z1],
            [x1, y1, z1],
        ];
        let ptr = 0;
        for (let i = 0; i < 8; i++) {
            const [x, y, z, w] = context.camera.apply(corners[i]);
            const painter = points[i];
            painter.x = x;
            painter.y = y;
            painter.z = z;
            painter.w = w;
            const { data } = wireCube;
            data[ptr++] = x;
            data[ptr++] = y;
            data[ptr++] = z;
            data[ptr++] = w;
        }
    }));
    context.inputs.keyboard.eventKeyPress.addListener((evt) => {
        if (evt.key === "d") {
            lod.debug();
        }
    });
    context.paint();
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_8["default"], { onReady: init, assets: {
            image: {
                posX: _assets_cubemap_sky_contrast_posX_webp__rspack_import_5,
                posY: _assets_cubemap_sky_contrast_posY_webp__rspack_import_6,
                posZ: _assets_cubemap_sky_contrast_posZ_webp__rspack_import_7,
                negX: _assets_cubemap_sky_contrast_negX_webp__rspack_import_2,
                negY: _assets_cubemap_sky_contrast_negY_webp__rspack_import_3,
                negZ: _assets_cubemap_sky_contrast_negZ_webp__rspack_import_4,
            },
        }, gizmo: true, controller: {
            inertiaOrbit: 1000,
            inertiaZoom: 1000,
            speedZoom: 0.8,
        } }));
}
function toBin(value, level) {
    return value.toString(2).padStart(level, "0");
}
async function loadGLB(x, y, z, level) {
    const url = level === 0
        ? "./assets/lod/Octree.glb"
        : `./assets/lod/Octree${toBin(x, level)}${toBin(y, level)}${toBin(z, level)}.glb`;
    console.log("Loading LOD block:", url);
    const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url);
    return asset;
}


},
69209(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WireCube: () => (WireCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

const EPSILON = 1e-1;
const X0 = -1 + EPSILON;
const X1 = +1 - EPSILON;
const Y0 = -1 + EPSILON;
const Y1 = +1 - EPSILON;
const Z0 = 0 + EPSILON;
const Z1 = +1 - EPSILON;
class WireCube extends _tolokoban_tgd__rspack_import_0.TgdPainter {
    constructor(context) {
        super();
        this.context = context;
        this.data = new Float32Array([
            X0, Y0, Z0, 1,
            X0, Y1, Z0, 1,
            X1, Y0, Z0, 1,
            X1, Y1, Z0, 1,
            X0, Y0, Z1, 1,
            X0, Y1, Z1, 1,
            X1, Y0, Z1, 1,
            X1, Y1, Z1, 1,
        ]);
        const prg = new _tolokoban_tgd__rspack_import_0.TgdProgram(context.gl, {
            vert: new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                attributes: {
                    attPosition: "vec4",
                },
                mainCode: ["gl_Position = attPosition;"],
            }).code,
            frag: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                outputs: {
                    FragColor: "vec4",
                },
                mainCode: "FragColor = vec4(1, 1, 1, 0.5);",
            }).code,
        });
        this.prg = prg;
        const dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
            attPosition: "vec4",
        }, {
            usage: "DYNAMIC_DRAW",
        });
        dataset.count = 8;
        this.dataset = dataset;
        const elements = new Uint8Array([
            0, 1, 0, 2, 0, 4,
            1, 3, 1, 5,
            2, 3, 2, 6,
            3, 7,
            4, 5, 4, 6,
            5, 7,
            6, 7
        ]);
        const vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, prg, [dataset], elements);
        this.vao = vao;
        prg.debug();
    }
    delete() {
        this.prg.delete();
        this.vao.delete();
    }
    paint() {
        const { context, data, prg, vao, dataset } = this;
        prg.use();
        const { gl } = context;
        dataset.data = data.buffer;
        vao.updateDataset(dataset);
        vao.bind();
        gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
        vao.unbind();
    }
}


},
20578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(55852);
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1jMTkyZTQuODNjYzRkNTg3ZGQzNjQ2Yy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2xvZC9kZXRhaWwvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTRcXG4gICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTJcXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMjBcXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXVxcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5wb3NaLFxcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5uZWdaLFxcbiAgICB9KVxcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xcbiAgICAgICAgc3RlcHM6IDgsXFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXFxuICAgICAgICAobGV2ZWwpID0+XFxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXFxuICAgICAgICAgICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMC4zLCAwLjMsIDAuMywgMV0gfSlcXG4gICAgY29uc3QgYmJveDoge1xcbiAgICAgICAgbWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgICAgICBtYXg6IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cXG4gICAgfSA9IHtcXG4gICAgICAgIG1pbjogWy0xLjMxMTk1LCAtMS4zOTc0NywgLTEuMDYwOTNdLFxcbiAgICAgICAgbWF4OiBbMS4zMTIsIDEuMjI2NSwgMS41NjNdLFxcbiAgICB9XFxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcXG4gICAgICAgIGJib3gsXFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcXG4gICAgICAgICAgICBjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKHgsIHksIHosIGxldmVsKVxcbiAgICAgICAgICAgIGlmICghYXNzZXQpIHJldHVybiBudWxsXFxuXFxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBhc3NldCxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDEsXFxuICAgICAgICAvLyBzdWJkaXZpc2lvbnM6IDMsXFxuICAgICAgICAvLyBzdXJmYWNlVGhyZXNob2xkOiAwLjgsXFxuICAgIH0pXFxuICAgIGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcXG4gICAgICAgIGNvbnN0IHBvaW50ID0gbmV3IFRnZFBhaW50ZXJEZWJ1Z1BvaW50KGNvbnRleHQpXFxuICAgICAgICBjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV1cXG4gICAgICAgIHBvaW50LmNvbG9yLnggPSBSXFxuICAgICAgICBwb2ludC5jb2xvci55ID0gR1xcbiAgICAgICAgcG9pbnQuY29sb3IueiA9IEJcXG4gICAgICAgIHBvaW50LmNvbG9yLncgPSBBXFxuICAgICAgICByZXR1cm4gcG9pbnRcXG4gICAgfSlcXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cylcXG4gICAgY29uc3Qgd2lyZUN1YmUgPSBuZXcgV2lyZUN1YmUoY29udGV4dClcXG4gICAgZ3JvdXAuYWRkKHdpcmVDdWJlKVxcbiAgICBjb250ZXh0LmFkZChcXG4gICAgICAgIGNsZWFyLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XFxuICAgICAgICAgICAgLy8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxcbiAgICAgICAgICAgIC8vIHRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxcbiAgICAgICAgICAgIC8vIFxcdE1hdGguc2luKHRpbWUgKiAxLjE4MikgKiA0MCxcXG4gICAgICAgICAgICAvLyBcXHQwLFxcbiAgICAgICAgICAgIC8vIClcXG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xcbiAgICAgICAgICAgICAgICBtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcXG4gICAgICAgICAgICAgICAgbWF4OiBbMS4zMTIsIC0wLjA4NTQ4NTAwMDAwMDAwMDAzLCAxLjU2M10sXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluXFxuICAgICAgICAgICAgY29uc3QgW3gxLCB5MSwgejFdID0gYmJveC5tYXhcXG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MV0sXFxuICAgICAgICAgICAgXVxcbiAgICAgICAgICAgIGxldCBwdHIgPSAwXFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSlcXG4gICAgICAgICAgICAgICAgY29uc3QgcGFpbnRlciA9IHBvaW50c1tpXVxcbiAgICAgICAgICAgICAgICBwYWludGVyLnggPSB4XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueSA9IHlcXG4gICAgICAgICAgICAgICAgcGFpbnRlci56ID0gelxcbiAgICAgICAgICAgICAgICBwYWludGVyLncgPSB3XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmVcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB4XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geVxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHpcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB3XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMua2V5Ym9hcmQuZXZlbnRLZXlQcmVzcy5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XFxuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXFxcImRcXFwiKSB7XFxuICAgICAgICAgICAgbG9kLmRlYnVnKClcXG4gICAgICAgIH1cXG4gICAgfSlcXG4gICAgY29udGV4dC5wYWludCgpXFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG4gICAgdHlwZSBBcnJheU51bWJlcjMsXFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIHR5cGUgVGdkRGF0YUdsYixcXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlckRlYnVnUG9pbnQsXFxuICAgIFRnZFBhaW50ZXJHcm91cCxcXG4gICAgVGdkUGFpbnRlckxPRCxcXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkVGV4dHVyZUN1YmUsXFxuICAgIHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxcbiAgICB0Z2RMb2FkR2xiLFxcbiAgICB3ZWJnbFByZXNldEN1bGwsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgTmVnWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcXFwiXFxuaW1wb3J0IE5lZ1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWS53ZWJwXFxcIlxcbmltcG9ydCBOZWdaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFxcXCJcXG5pbXBvcnQgUG9zWCBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcXFwiXFxuaW1wb3J0IFBvc1kgZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWS53ZWJwXFxcIlxcbmltcG9ydCBQb3NaIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFxcXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXFxcIi4vd2lyZS1jdWJlXFxcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0XFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG4gICAgICAgIHN0ZXBzOiA4LFxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcbiAgICAgICAgKGxldmVsKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuICAgIGNvbnN0IGJib3g6IHtcXG4gICAgICAgIG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgIH0gPSB7XFxuICAgICAgICBtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcXG4gICAgICAgIG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcXG4gICAgfVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbClcXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxcbiAgICAgICAgLy8gc3ViZGl2aXNpb25zOiAzLFxcbiAgICAgICAgLy8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxcbiAgICB9KVxcbiAgICBjb25zdCBwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10ubWFwKChpKSA9PiB7XFxuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KVxcbiAgICAgICAgY29uc3QgW1IsIEcsIEIsIEFdID0gQ09MT1JTW2ldXFxuICAgICAgICBwb2ludC5jb2xvci54ID0gUlxcbiAgICAgICAgcG9pbnQuY29sb3IueSA9IEdcXG4gICAgICAgIHBvaW50LmNvbG9yLnogPSBCXFxuICAgICAgICBwb2ludC5jb2xvci53ID0gQVxcbiAgICAgICAgcmV0dXJuIHBvaW50XFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChwb2ludHMpXFxuICAgIGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpXFxuICAgIGdyb3VwLmFkZCh3aXJlQ3ViZSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcXG4gICAgICAgICAgICAvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXFxuICAgICAgICAgICAgLy8gXFx0TWF0aC5zaW4odGltZSkgKiAzMCxcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXFxuICAgICAgICAgICAgLy8gXFx0MCxcXG4gICAgICAgICAgICAvLyApXFxuICAgICAgICAgICAgY29uc3QgYmJveCA9IHtcXG4gICAgICAgICAgICAgICAgbWluOiBbMC4wMDAwMjUwMDAwMDAwMDAwNTI3NTgsIC0xLjM5NzQ3LCAwLjI1MTAzNV0sXFxuICAgICAgICAgICAgICAgIG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pblxcbiAgICAgICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4XFxuICAgICAgICAgICAgY29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejFdLFxcbiAgICAgICAgICAgIF1cXG4gICAgICAgICAgICBsZXQgcHRyID0gMFxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pXFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV1cXG4gICAgICAgICAgICAgICAgcGFpbnRlci54ID0geFxcbiAgICAgICAgICAgICAgICBwYWludGVyLnkgPSB5XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueiA9IHpcXG4gICAgICAgICAgICAgICAgcGFpbnRlci53ID0gd1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlXFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geFxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHlcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB6XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gd1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFxcXCJkXFxcIikge1xcbiAgICAgICAgICAgIGxvZC5kZWJ1ZygpXFxuICAgICAgICB9XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPFZpZXdcXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICBpbWFnZToge1xcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXFxuICAgICAgICAgICAgICAgICAgICBwb3NaOiBQb3NaLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXFxuICAgICAgICAgICAgICAgICAgICBuZWdaOiBOZWdaLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICAgICAgaW5lcnRpYVpvb206IDEwMDAsXFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMC44LFxcbiAgICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICApXFxufVxcblxcbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFxcXCIwXFxcIilcXG59XFxuXFxuYXN5bmMgZnVuY3Rpb24gbG9hZEdMQih4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogUHJvbWlzZTxUZ2REYXRhR2xiIHwgbnVsbD4ge1xcbiAgICBjb25zdCB1cmwgPVxcbiAgICAgICAgbGV2ZWwgPT09IDBcXG4gICAgICAgICAgICA/IFxcXCIuL2Fzc2V0cy9sb2QvT2N0cmVlLmdsYlxcXCJcXG4gICAgICAgICAgICA6IGAuL2Fzc2V0cy9sb2QvT2N0cmVlJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9LmdsYmBcXG4gICAgY29uc29sZS5sb2coXFxcIkxvYWRpbmcgTE9EIGJsb2NrOlxcXCIsIHVybClcXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcXG4gICAgcmV0dXJuIGFzc2V0XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIHR5cGUgQXJyYXlOdW1iZXI0LFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICB0eXBlIFRnZERhdGFHbGIsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJEZWJ1Z1BvaW50LFxuICAgIFRnZFBhaW50ZXJHcm91cCxcbiAgICBUZ2RQYWludGVyTE9ELFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaEdsdGYsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIHRnZENvbG9yTWFrZUh1ZVdoZWVsLFxuICAgIHRnZExvYWRHbGIsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBOZWdYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdYLndlYnBcIlxuaW1wb3J0IE5lZ1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFwiXG5pbXBvcnQgTmVnWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWi53ZWJwXCJcbmltcG9ydCBQb3NYIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NYLndlYnBcIlxuaW1wb3J0IFBvc1kgZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFwiXG5pbXBvcnQgUG9zWiBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWi53ZWJwXCJcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5pbXBvcnQgeyBXaXJlQ3ViZSB9IGZyb20gXCIuL3dpcmUtY3ViZVwiXG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxNFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yXG4gICAgY29udGV4dC5jYW1lcmEuZmFyID0gMjBcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC41LCAwLjEsIDFdXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UucG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UubmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcbiAgICB9KVxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XG4gICAgICAgIHN0ZXBzOiA4LFxuICAgIH0pLm1hcCgoY29sb3IpID0+IFtjb2xvci5SLCBjb2xvci5HLCBjb2xvci5CLCAxXSBhcyBBcnJheU51bWJlcjQpXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcbiAgICAgICAgKGxldmVsKSA9PlxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcbiAgICAgICAgICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXG4gICAgY29uc3QgYmJveDoge1xuICAgICAgICBtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XG4gICAgfSA9IHtcbiAgICAgICAgbWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXG4gICAgICAgIG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcbiAgICB9XG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xuICAgICAgICBiYm94LFxuICAgICAgICBhc3luYyBmYWN0b3J5KHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgYXNzZXQsXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tsZXZlbF0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBzdWJkaXZpc2lvbnM6IDEsXG4gICAgICAgIC8vIHN1YmRpdmlzaW9uczogMyxcbiAgICAgICAgLy8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxuICAgIH0pXG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KVxuICAgICAgICBjb25zdCBbUiwgRywgQiwgQV0gPSBDT0xPUlNbaV1cbiAgICAgICAgcG9pbnQuY29sb3IueCA9IFJcbiAgICAgICAgcG9pbnQuY29sb3IueSA9IEdcbiAgICAgICAgcG9pbnQuY29sb3IueiA9IEJcbiAgICAgICAgcG9pbnQuY29sb3IudyA9IEFcbiAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgfSlcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKVxuICAgIGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpXG4gICAgZ3JvdXAuYWRkKHdpcmVDdWJlKVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBjbGVhcixcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3QgeyB0cmFuc2ZvIH0gPSBjb250ZXh0LmNhbWVyYVxuICAgICAgICAgICAgLy8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxuICAgICAgICAgICAgLy8gXHRNYXRoLnNpbih0aW1lKSAqIDMwLFxuICAgICAgICAgICAgLy8gXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXG4gICAgICAgICAgICAvLyBcdDAsXG4gICAgICAgICAgICAvLyApXG4gICAgICAgICAgICBjb25zdCBiYm94ID0ge1xuICAgICAgICAgICAgICAgIG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxuICAgICAgICAgICAgICAgIG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW5cbiAgICAgICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4XG4gICAgICAgICAgICBjb25zdCBjb3JuZXJzOiBBcnJheU51bWJlcjNbXSA9IFtcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejBdLFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHowXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejFdLFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHoxXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MV0sXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejFdLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgbGV0IHB0ciA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHksIHosIHddID0gY29udGV4dC5jYW1lcmEuYXBwbHkoY29ybmVyc1tpXSlcbiAgICAgICAgICAgICAgICBjb25zdCBwYWludGVyID0gcG9pbnRzW2ldXG4gICAgICAgICAgICAgICAgcGFpbnRlci54ID0geFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueSA9IHlcbiAgICAgICAgICAgICAgICBwYWludGVyLnogPSB6XG4gICAgICAgICAgICAgICAgcGFpbnRlci53ID0gd1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gd2lyZUN1YmVcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHhcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHlcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHpcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xuICAgICAgICBpZiAoZXZ0LmtleSA9PT0gXCJkXCIpIHtcbiAgICAgICAgICAgIGxvZC5kZWJ1ZygpXG4gICAgICAgIH1cbiAgICB9KVxuICAgIGNvbnRleHQucGFpbnQoKVxufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWDogUG9zWCxcbiAgICAgICAgICAgICAgICAgICAgcG9zWTogUG9zWSxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcbiAgICAgICAgICAgICAgICAgICAgbmVnWDogTmVnWCxcbiAgICAgICAgICAgICAgICAgICAgbmVnWTogTmVnWSxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBjb250cm9sbGVyPXt7XG4gICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxuICAgICAgICAgICAgICAgIHNwZWVkWm9vbTogMC44LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHRvQmluKHZhbHVlOiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygyKS5wYWRTdGFydChsZXZlbCwgXCIwXCIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgICBsZXZlbCA9PT0gMFxuICAgICAgICAgICAgPyBcIi4vYXNzZXRzL2xvZC9PY3RyZWUuZ2xiXCJcbiAgICAgICAgICAgIDogYC4vYXNzZXRzL2xvZC9PY3RyZWUke3RvQmluKHgsIGxldmVsKX0ke3RvQmluKHksIGxldmVsKX0ke3RvQmluKHosIGxldmVsKX0uZ2xiYFxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBMT0QgYmxvY2s6XCIsIHVybClcbiAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRHbGIodXJsKVxuICAgIHJldHVybiBhc3NldFxufVxuIiwiaW1wb3J0IHtcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YXNldCxcbiAgICBUZ2RQYWludGVyLFxuICAgIFRnZFByb2dyYW0sXG4gICAgVGdkU2hhZGVyRnJhZ21lbnQsXG4gICAgVGdkU2hhZGVyVmVydGV4LFxuICAgIFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5jb25zdCBFUFNJTE9OID0gMWUtMSAvLyAxZS0zXG5jb25zdCBYMCA9IC0xICsgRVBTSUxPTlxuY29uc3QgWDEgPSArMSAtIEVQU0lMT05cbmNvbnN0IFkwID0gLTEgKyBFUFNJTE9OXG5jb25zdCBZMSA9ICsxIC0gRVBTSUxPTlxuY29uc3QgWjAgPSAwICsgRVBTSUxPTlxuY29uc3QgWjEgPSArMSAtIEVQU0lMT05cblxuZXhwb3J0IGNsYXNzIFdpcmVDdWJlIGV4dGVuZHMgVGdkUGFpbnRlciB7XG4gICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgcHVibGljIGRhdGEgPSBuZXcgRmxvYXQzMkFycmF5KFtcblx0XHRYMCwgWTAsIFowLCAxLCAgLy8gMFxuXHRcdFgwLCBZMSwgWjAsIDEsICAvLyAxXG5cdFx0WDEsIFkwLCBaMCwgMSwgIC8vIDJcblx0XHRYMSwgWTEsIFowLCAxLCAgLy8gM1xuXHRcdFgwLCBZMCwgWjEsIDEsICAvLyA0XG5cdFx0WDAsIFkxLCBaMSwgMSwgIC8vIDVcblx0XHRYMSwgWTAsIFoxLCAxLCAgLy8gNlxuXHRcdFgxLCBZMSwgWjEsIDEsICAvLyA3XG4gICAgXSlcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJnOiBUZ2RQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0XG4gICAgcHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICBjb25zdCBwcmcgPSBuZXcgVGdkUHJvZ3JhbShjb250ZXh0LmdsLCB7XG4gICAgICAgICAgICB2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dFBvc2l0aW9uOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXCJnbF9Qb3NpdGlvbiA9IGF0dFBvc2l0aW9uO1wiXSxcbiAgICAgICAgICAgIH0pLmNvZGUsXG4gICAgICAgICAgICBmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgRnJhZ0NvbG9yOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBcIkZyYWdDb2xvciA9IHZlYzQoMSwgMSwgMSwgMC41KTtcIixcbiAgICAgICAgICAgIH0pLmNvZGUsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJnID0gcHJnXG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVzYWdlOiBcIkRZTkFNSUNfRFJBV1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgKVxuICAgICAgICBkYXRhc2V0LmNvdW50ID0gOFxuICAgICAgICB0aGlzLmRhdGFzZXQgPSBkYXRhc2V0XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDAsIDEsIDAsIDIsIDAsIDQsXG4gICAgICAgICAgICAxLCAzLCAxLCA1LFxuICAgICAgICAgICAgMiwgMywgMiwgNixcbiAgICAgICAgICAgIDMsIDcsXG4gICAgICAgICAgICA0LCA1LCA0LCA2LFxuICAgICAgICAgICAgNSwgNyxcbiAgICAgICAgICAgIDYsIDdcbiAgICAgICAgXSlcbiAgICAgICAgY29uc3QgdmFvID0gbmV3IFRnZFZlcnRleEFycmF5KGNvbnRleHQuZ2wsIHByZywgW2RhdGFzZXRdLCBlbGVtZW50cylcbiAgICAgICAgdGhpcy52YW8gPSB2YW9cbiAgICAgICAgcHJnLmRlYnVnKClcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMucHJnLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMudmFvLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCwgZGF0YSwgcHJnLCB2YW8sIGRhdGFzZXQgfSA9IHRoaXNcbiAgICAgICAgcHJnLnVzZSgpXG4gICAgICAgIGNvbnN0IHsgZ2wgfSA9IGNvbnRleHRcbiAgICAgICAgZGF0YXNldC5kYXRhID0gZGF0YS5idWZmZXJcbiAgICAgICAgdmFvLnVwZGF0ZURhdGFzZXQoZGF0YXNldClcbiAgICAgICAgdmFvLmJpbmQoKVxuICAgICAgICBnbC5kcmF3RWxlbWVudHMoZ2wuTElORVMsIDI0LCBnbC5VTlNJR05FRF9CWVRFLCAwKVxuICAgICAgICB2YW8udW5iaW5kKClcbiAgICB9XG59XG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFHeUI7QUFDaUI7QUFDVztBQUN2QjtBQUU5QixNQUFNLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyw0cUhBQTRxSCxFQUFDO0FBQ3hzSCxNQUFNLElBQUksR0FBRyxnbUxBQWdtTDtBQUU5bEwsU0FBUyxhQUFhO0lBQ2pDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcseUNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDN0MsT0FBTyxzR0FDSCxvREFBSyxTQUFTLEVBQUMsV0FBVyxZQUFDLDJDQUFDLHNDQUFJLEtBQUcsR0FBTSxFQUN6QyxxREFBSyxTQUFTLEVBQUMsWUFBWSxhQUN2Qiw4REFDSSwyQ0FBQyx5Q0FBVSxJQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9B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