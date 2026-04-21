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
    context;
    data = new Float32Array([
        X0, Y0, Z0, 1,
        X0, Y1, Z0, 1,
        X1, Y0, Z0, 1,
        X1, Y1, Z0, 1,
        X0, Y0, Z1, 1,
        X0, Y1, Z1, 1,
        X1, Y0, Z1, 1,
        X1, Y1, Z1, 1,
    ]);
    prg;
    dataset;
    vao;
    constructor(context) {
        super();
        this.context = context;
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " (second demo)"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Dynamic level of details."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move the camera around to see how the mesh reacts."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
                lineNumber: 11,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/lod/detail/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9sb2RfZGV0YWlsX3BhZ2VfbWR4LXNyY19jb21wb25lbnRzX2RlbW9fQ29kZVZpZXdlcl9Db2RlVmlld2VyX21vZHVsZS1jMTkyZTQuZGEzMWE1ZjRmYWVmNWQ0Mi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9fL21haW4uZGVtby9tYWluLmRlbW8udHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9sb2QvZGV0YWlsL18vbWFpbi5kZW1vL3dpcmUtY3ViZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvbG9kL2RldGFpbC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDE0XFxuICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0yXFxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXFxuICAgIGNvbnN0IGNvbG9yOiBBcnJheU51bWJlcjQgPSBbMC45LCAwLjUsIDAuMSwgMV1cXG4gICAgY29uc3Qgc2t5Ym94ID0gbmV3IFRnZFRleHR1cmVDdWJlKGNvbnRleHQsIHtcXG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5wb3NZLFxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UucG9zWixcXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5uZWdZLFxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UubmVnWixcXG4gICAgfSlcXG4gICAgY29uc3QgQ09MT1JTOiBBcnJheU51bWJlcjRbXSA9IHRnZENvbG9yTWFrZUh1ZVdoZWVsKHtcXG4gICAgICAgIHN0ZXBzOiA4LFxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxcbiAgICBjb25zdCBtYXRlcmlhbHMgPSBbMCwgMSwgMiwgMywgNCwgNV0ubWFwKFxcbiAgICAgICAgKGxldmVsKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlNbbGV2ZWxdLFxcbiAgICAgICAgICAgICAgICBhbWJpZW50Q29sb3I6IHNreWJveCxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAuMywgMC4zLCAwLjMsIDFdIH0pXFxuICAgIGNvbnN0IGJib3g6IHtcXG4gICAgICAgIG1pbjogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcbiAgICAgICAgbWF4OiBSZWFkb25seTxBcnJheU51bWJlcjM+XFxuICAgIH0gPSB7XFxuICAgICAgICBtaW46IFstMS4zMTE5NSwgLTEuMzk3NDcsIC0xLjA2MDkzXSxcXG4gICAgICAgIG1heDogWzEuMzEyLCAxLjIyNjUsIDEuNTYzXSxcXG4gICAgfVxcbiAgICBjb25zdCBsb2QgPSBuZXcgVGdkUGFpbnRlckxPRChjb250ZXh0LCB7XFxuICAgICAgICBiYm94LFxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XFxuICAgICAgICAgICAgY29uc3QgYXNzZXQ6IFRnZERhdGFHbGIgfCBudWxsID0gYXdhaXQgbG9hZEdMQih4LCB5LCB6LCBsZXZlbClcXG4gICAgICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm4gbnVsbFxcblxcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgYXNzZXQsXFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxcbiAgICAgICAgLy8gc3ViZGl2aXNpb25zOiAzLFxcbiAgICAgICAgLy8gc3VyZmFjZVRocmVzaG9sZDogMC44LFxcbiAgICB9KVxcbiAgICBjb25zdCBwb2ludHMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10ubWFwKChpKSA9PiB7XFxuICAgICAgICBjb25zdCBwb2ludCA9IG5ldyBUZ2RQYWludGVyRGVidWdQb2ludChjb250ZXh0KVxcbiAgICAgICAgY29uc3QgW1IsIEcsIEIsIEFdID0gQ09MT1JTW2ldXFxuICAgICAgICBwb2ludC5jb2xvci54ID0gUlxcbiAgICAgICAgcG9pbnQuY29sb3IueSA9IEdcXG4gICAgICAgIHBvaW50LmNvbG9yLnogPSBCXFxuICAgICAgICBwb2ludC5jb2xvci53ID0gQVxcbiAgICAgICAgcmV0dXJuIHBvaW50XFxuICAgIH0pXFxuICAgIGNvbnN0IGdyb3VwID0gbmV3IFRnZFBhaW50ZXJHcm91cChwb2ludHMpXFxuICAgIGNvbnN0IHdpcmVDdWJlID0gbmV3IFdpcmVDdWJlKGNvbnRleHQpXFxuICAgIGdyb3VwLmFkZCh3aXJlQ3ViZSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBjbGVhcixcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbbG9kLCBncm91cF0sXFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSkgPT4ge1xcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcXG4gICAgICAgICAgICAvLyB0cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oXFxuICAgICAgICAgICAgLy8gXFx0TWF0aC5zaW4odGltZSkgKiAzMCxcXG4gICAgICAgICAgICAvLyBcXHRNYXRoLnNpbih0aW1lICogMS4xODIpICogNDAsXFxuICAgICAgICAgICAgLy8gXFx0MCxcXG4gICAgICAgICAgICAvLyApXFxuICAgICAgICAgICAgY29uc3QgYmJveCA9IHtcXG4gICAgICAgICAgICAgICAgbWluOiBbMC4wMDAwMjUwMDAwMDAwMDAwNTI3NTgsIC0xLjM5NzQ3LCAwLjI1MTAzNV0sXFxuICAgICAgICAgICAgICAgIG1heDogWzEuMzEyLCAtMC4wODU0ODUwMDAwMDAwMDAwMywgMS41NjNdLFxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBjb25zdCBbeDAsIHkwLCB6MF0gPSBiYm94Lm1pblxcbiAgICAgICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxXSA9IGJib3gubWF4XFxuICAgICAgICAgICAgY29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTAsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejFdLFxcbiAgICAgICAgICAgIF1cXG4gICAgICAgICAgICBsZXQgcHRyID0gMFxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pXFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhaW50ZXIgPSBwb2ludHNbaV1cXG4gICAgICAgICAgICAgICAgcGFpbnRlci54ID0geFxcbiAgICAgICAgICAgICAgICBwYWludGVyLnkgPSB5XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueiA9IHpcXG4gICAgICAgICAgICAgICAgcGFpbnRlci53ID0gd1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlXFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0geFxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHlcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB6XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gd1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnRleHQuaW5wdXRzLmtleWJvYXJkLmV2ZW50S2V5UHJlc3MuYWRkTGlzdGVuZXIoKGV2dCkgPT4ge1xcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFxcXCJkXFxcIikge1xcbiAgICAgICAgICAgIGxvZC5kZWJ1ZygpXFxuICAgICAgICB9XFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICB0eXBlIFRnZERhdGFHbGIsXFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJEZWJ1Z1BvaW50LFxcbiAgICBUZ2RQYWludGVyR3JvdXAsXFxuICAgIFRnZFBhaW50ZXJMT0QsXFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmVDdWJlLFxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcXG4gICAgdGdkTG9hZEdsYixcXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiXFxuXFxuaW1wb3J0IE5lZ1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXFxcIlxcbmltcG9ydCBOZWdZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1kud2VicFxcXCJcXG5pbXBvcnQgTmVnWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdaLndlYnBcXFwiXFxuaW1wb3J0IFBvc1ggZnJvbSBcXFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXFxcIlxcbmltcG9ydCBQb3NZIGZyb20gXFxcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1kud2VicFxcXCJcXG5pbXBvcnQgUG9zWiBmcm9tIFxcXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NaLndlYnBcXFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuaW1wb3J0IHsgV2lyZUN1YmUgfSBmcm9tIFxcXCIuL3dpcmUtY3ViZVxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAxNFxcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMlxcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAyMFxcbiAgICBjb25zdCBjb2xvcjogQXJyYXlOdW1iZXI0ID0gWzAuOSwgMC41LCAwLjEsIDFdXFxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XFxuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5wb3NYLFxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UucG9zWSxcXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5uZWdYLFxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UubmVnWSxcXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXFxuICAgIH0pXFxuICAgIGNvbnN0IENPTE9SUzogQXJyYXlOdW1iZXI0W10gPSB0Z2RDb2xvck1ha2VIdWVXaGVlbCh7XFxuICAgICAgICBzdGVwczogOCxcXG4gICAgfSkubWFwKChjb2xvcikgPT4gW2NvbG9yLlIsIGNvbG9yLkcsIGNvbG9yLkIsIDFdIGFzIEFycmF5TnVtYmVyNClcXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gWzAsIDEsIDIsIDMsIDQsIDVdLm1hcChcXG4gICAgICAgIChsZXZlbCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxHbG9iYWwoe1xcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2xldmVsXSxcXG4gICAgICAgICAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxcbiAgICBjb25zdCBiYm94OiB7XFxuICAgICAgICBtaW46IFJlYWRvbmx5PEFycmF5TnVtYmVyMz5cXG4gICAgICAgIG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxcbiAgICB9ID0ge1xcbiAgICAgICAgbWluOiBbLTEuMzExOTUsIC0xLjM5NzQ3LCAtMS4wNjA5M10sXFxuICAgICAgICBtYXg6IFsxLjMxMiwgMS4yMjY1LCAxLjU2M10sXFxuICAgIH1cXG4gICAgY29uc3QgbG9kID0gbmV3IFRnZFBhaW50ZXJMT0QoY29udGV4dCwge1xcbiAgICAgICAgYmJveCxcXG4gICAgICAgIGFzeW5jIGZhY3RvcnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0OiBUZ2REYXRhR2xiIHwgbnVsbCA9IGF3YWl0IGxvYWRHTEIoeCwgeSwgeiwgbGV2ZWwpXFxuICAgICAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuIG51bGxcXG5cXG4gICAgICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGFzc2V0LFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxzW2xldmVsXSxcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHN1YmRpdmlzaW9uczogMSxcXG4gICAgICAgIC8vIHN1YmRpdmlzaW9uczogMyxcXG4gICAgICAgIC8vIHN1cmZhY2VUaHJlc2hvbGQ6IDAuOCxcXG4gICAgfSlcXG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDddLm1hcCgoaSkgPT4ge1xcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVGdkUGFpbnRlckRlYnVnUG9pbnQoY29udGV4dClcXG4gICAgICAgIGNvbnN0IFtSLCBHLCBCLCBBXSA9IENPTE9SU1tpXVxcbiAgICAgICAgcG9pbnQuY29sb3IueCA9IFJcXG4gICAgICAgIHBvaW50LmNvbG9yLnkgPSBHXFxuICAgICAgICBwb2ludC5jb2xvci56ID0gQlxcbiAgICAgICAgcG9pbnQuY29sb3IudyA9IEFcXG4gICAgICAgIHJldHVybiBwb2ludFxcbiAgICB9KVxcbiAgICBjb25zdCBncm91cCA9IG5ldyBUZ2RQYWludGVyR3JvdXAocG9pbnRzKVxcbiAgICBjb25zdCB3aXJlQ3ViZSA9IG5ldyBXaXJlQ3ViZShjb250ZXh0KVxcbiAgICBncm91cC5hZGQod2lyZUN1YmUpXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgY2xlYXIsXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2xvZCwgZ3JvdXBdLFxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXFxuICAgICAgICB9KSxcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcXG4gICAgICAgICAgICAvLyBjb25zdCB7IHRyYW5zZm8gfSA9IGNvbnRleHQuY2FtZXJhXFxuICAgICAgICAgICAgLy8gdHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKFxcbiAgICAgICAgICAgIC8vIFxcdE1hdGguc2luKHRpbWUpICogMzAsXFxuICAgICAgICAgICAgLy8gXFx0TWF0aC5zaW4odGltZSAqIDEuMTgyKSAqIDQwLFxcbiAgICAgICAgICAgIC8vIFxcdDAsXFxuICAgICAgICAgICAgLy8gKVxcbiAgICAgICAgICAgIGNvbnN0IGJib3ggPSB7XFxuICAgICAgICAgICAgICAgIG1pbjogWzAuMDAwMDI1MDAwMDAwMDAwMDUyNzU4LCAtMS4zOTc0NywgMC4yNTEwMzVdLFxcbiAgICAgICAgICAgICAgICBtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgY29uc3QgW3gwLCB5MCwgejBdID0gYmJveC5taW5cXG4gICAgICAgICAgICBjb25zdCBbeDEsIHkxLCB6MV0gPSBiYm94Lm1heFxcbiAgICAgICAgICAgIGNvbnN0IGNvcm5lcnM6IEFycmF5TnVtYmVyM1tdID0gW1xcbiAgICAgICAgICAgICAgICBbeDAsIHkwLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHowXSxcXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejBdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkxLCB6MF0sXFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHoxXSxcXG4gICAgICAgICAgICAgICAgW3gwLCB5MSwgejFdLFxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MV0sXFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHoxXSxcXG4gICAgICAgICAgICBdXFxuICAgICAgICAgICAgbGV0IHB0ciA9IDBcXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeSwgeiwgd10gPSBjb250ZXh0LmNhbWVyYS5hcHBseShjb3JuZXJzW2ldKVxcbiAgICAgICAgICAgICAgICBjb25zdCBwYWludGVyID0gcG9pbnRzW2ldXFxuICAgICAgICAgICAgICAgIHBhaW50ZXIueCA9IHhcXG4gICAgICAgICAgICAgICAgcGFpbnRlci55ID0geVxcbiAgICAgICAgICAgICAgICBwYWludGVyLnogPSB6XFxuICAgICAgICAgICAgICAgIHBhaW50ZXIudyA9IHdcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB3aXJlQ3ViZVxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHhcXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB5XFxuICAgICAgICAgICAgICAgIGRhdGFbcHRyKytdID0gelxcbiAgICAgICAgICAgICAgICBkYXRhW3B0cisrXSA9IHdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb250ZXh0LmlucHV0cy5rZXlib2FyZC5ldmVudEtleVByZXNzLmFkZExpc3RlbmVyKChldnQpID0+IHtcXG4gICAgICAgIGlmIChldnQua2V5ID09PSBcXFwiZFxcXCIpIHtcXG4gICAgICAgICAgICBsb2QuZGVidWcoKVxcbiAgICAgICAgfVxcbiAgICB9KVxcbiAgICBjb250ZXh0LnBhaW50KClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXFxuICAgICAgICAgICAgICAgICAgICBwb3NZOiBQb3NZLFxcbiAgICAgICAgICAgICAgICAgICAgcG9zWjogUG9zWixcXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXFxuICAgICAgICAgICAgICAgICAgICBuZWdZOiBOZWdZLFxcbiAgICAgICAgICAgICAgICAgICAgbmVnWjogTmVnWixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgY29udHJvbGxlcj17e1xcbiAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiAxMDAwLFxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAuOCxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG5cXG5mdW5jdGlvbiB0b0Jpbih2YWx1ZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDIpLnBhZFN0YXJ0KGxldmVsLCBcXFwiMFxcXCIpXFxufVxcblxcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHTEIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgbGV2ZWw6IG51bWJlcik6IFByb21pc2U8VGdkRGF0YUdsYiB8IG51bGw+IHtcXG4gICAgY29uc3QgdXJsID1cXG4gICAgICAgIGxldmVsID09PSAwXFxuICAgICAgICAgICAgPyBcXFwiLi9hc3NldHMvbG9kL09jdHJlZS5nbGJcXFwiXFxuICAgICAgICAgICAgOiBgLi9hc3NldHMvbG9kL09jdHJlZSR7dG9CaW4oeCwgbGV2ZWwpfSR7dG9CaW4oeSwgbGV2ZWwpfSR7dG9CaW4oeiwgbGV2ZWwpfS5nbGJgXFxuICAgIGNvbnNvbGUubG9nKFxcXCJMb2FkaW5nIExPRCBibG9jazpcXFwiLCB1cmwpXFxuICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXFxuICAgIHJldHVybiBhc3NldFxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRGVidWdQb2ludCxcbiAgICBUZ2RQYWludGVyR3JvdXAsXG4gICAgVGdkUGFpbnRlckxPRCxcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlQ3ViZSxcbiAgICB0Z2RDb2xvck1ha2VIdWVXaGVlbCxcbiAgICB0Z2RMb2FkR2xiLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvbmVnWC53ZWJwXCJcbmltcG9ydCBOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9uZWdZLndlYnBcIlxuaW1wb3J0IE5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L25lZ1oud2VicFwiXG5pbXBvcnQgUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC9za3kvY29udHJhc3QvcG9zWC53ZWJwXCJcbmltcG9ydCBQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwL3NreS9jb250cmFzdC9wb3NZLndlYnBcIlxuaW1wb3J0IFBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvc2t5L2NvbnRyYXN0L3Bvc1oud2VicFwiXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuaW1wb3J0IHsgV2lyZUN1YmUgfSBmcm9tIFwiLi93aXJlLWN1YmVcIlxuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gMTRcbiAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMlxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDIwXG4gICAgY29uc3QgY29sb3I6IEFycmF5TnVtYmVyNCA9IFswLjksIDAuNSwgMC4xLCAxXVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLnBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLnBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLnBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLm5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLm5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLm5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBDT0xPUlM6IEFycmF5TnVtYmVyNFtdID0gdGdkQ29sb3JNYWtlSHVlV2hlZWwoe1xuICAgICAgICBzdGVwczogOCxcbiAgICB9KS5tYXAoKGNvbG9yKSA9PiBbY29sb3IuUiwgY29sb3IuRywgY29sb3IuQiwgMV0gYXMgQXJyYXlOdW1iZXI0KVxuICAgIGNvbnN0IG1hdGVyaWFscyA9IFswLCAxLCAyLCAzLCA0LCA1XS5tYXAoXG4gICAgICAgIChsZXZlbCkgPT5cbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SU1tsZXZlbF0sXG4gICAgICAgICAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXG4gICAgICAgICAgICB9KSxcbiAgICApXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLjMsIDAuMywgMC4zLCAxXSB9KVxuICAgIGNvbnN0IGJib3g6IHtcbiAgICAgICAgbWluOiBSZWFkb25seTxBcnJheU51bWJlcjM+XG4gICAgICAgIG1heDogUmVhZG9ubHk8QXJyYXlOdW1iZXIzPlxuICAgIH0gPSB7XG4gICAgICAgIG1pbjogWy0xLjMxMTk1LCAtMS4zOTc0NywgLTEuMDYwOTNdLFxuICAgICAgICBtYXg6IFsxLjMxMiwgMS4yMjY1LCAxLjU2M10sXG4gICAgfVxuICAgIGNvbnN0IGxvZCA9IG5ldyBUZ2RQYWludGVyTE9EKGNvbnRleHQsIHtcbiAgICAgICAgYmJveCxcbiAgICAgICAgYXN5bmMgZmFjdG9yeSh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldDogVGdkRGF0YUdsYiB8IG51bGwgPSBhd2FpdCBsb2FkR0xCKHgsIHksIHosIGxldmVsKVxuICAgICAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuIG51bGxcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaEdsdGYoY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbHNbbGV2ZWxdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc3ViZGl2aXNpb25zOiAxLFxuICAgICAgICAvLyBzdWJkaXZpc2lvbnM6IDMsXG4gICAgICAgIC8vIHN1cmZhY2VUaHJlc2hvbGQ6IDAuOCxcbiAgICB9KVxuICAgIGNvbnN0IHBvaW50cyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XS5tYXAoKGkpID0+IHtcbiAgICAgICAgY29uc3QgcG9pbnQgPSBuZXcgVGdkUGFpbnRlckRlYnVnUG9pbnQoY29udGV4dClcbiAgICAgICAgY29uc3QgW1IsIEcsIEIsIEFdID0gQ09MT1JTW2ldXG4gICAgICAgIHBvaW50LmNvbG9yLnggPSBSXG4gICAgICAgIHBvaW50LmNvbG9yLnkgPSBHXG4gICAgICAgIHBvaW50LmNvbG9yLnogPSBCXG4gICAgICAgIHBvaW50LmNvbG9yLncgPSBBXG4gICAgICAgIHJldHVybiBwb2ludFxuICAgIH0pXG4gICAgY29uc3QgZ3JvdXAgPSBuZXcgVGdkUGFpbnRlckdyb3VwKHBvaW50cylcbiAgICBjb25zdCB3aXJlQ3ViZSA9IG5ldyBXaXJlQ3ViZShjb250ZXh0KVxuICAgIGdyb3VwLmFkZCh3aXJlQ3ViZSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgY2xlYXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRyZW46IFtsb2QsIGdyb3VwXSxcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHsgdHJhbnNmbyB9ID0gY29udGV4dC5jYW1lcmFcbiAgICAgICAgICAgIC8vIHRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihcbiAgICAgICAgICAgIC8vIFx0TWF0aC5zaW4odGltZSkgKiAzMCxcbiAgICAgICAgICAgIC8vIFx0TWF0aC5zaW4odGltZSAqIDEuMTgyKSAqIDQwLFxuICAgICAgICAgICAgLy8gXHQwLFxuICAgICAgICAgICAgLy8gKVxuICAgICAgICAgICAgY29uc3QgYmJveCA9IHtcbiAgICAgICAgICAgICAgICBtaW46IFswLjAwMDAyNTAwMDAwMDAwMDA1Mjc1OCwgLTEuMzk3NDcsIDAuMjUxMDM1XSxcbiAgICAgICAgICAgICAgICBtYXg6IFsxLjMxMiwgLTAuMDg1NDg1MDAwMDAwMDAwMDMsIDEuNTYzXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFt4MCwgeTAsIHowXSA9IGJib3gubWluXG4gICAgICAgICAgICBjb25zdCBbeDEsIHkxLCB6MV0gPSBiYm94Lm1heFxuICAgICAgICAgICAgY29uc3QgY29ybmVyczogQXJyYXlOdW1iZXIzW10gPSBbXG4gICAgICAgICAgICAgICAgW3gwLCB5MCwgejBdLFxuICAgICAgICAgICAgICAgIFt4MCwgeTEsIHowXSxcbiAgICAgICAgICAgICAgICBbeDEsIHkwLCB6MF0sXG4gICAgICAgICAgICAgICAgW3gxLCB5MSwgejBdLFxuICAgICAgICAgICAgICAgIFt4MCwgeTAsIHoxXSxcbiAgICAgICAgICAgICAgICBbeDAsIHkxLCB6MV0sXG4gICAgICAgICAgICAgICAgW3gxLCB5MCwgejFdLFxuICAgICAgICAgICAgICAgIFt4MSwgeTEsIHoxXSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIGxldCBwdHIgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IGNvbnRleHQuY2FtZXJhLmFwcGx5KGNvcm5lcnNbaV0pXG4gICAgICAgICAgICAgICAgY29uc3QgcGFpbnRlciA9IHBvaW50c1tpXVxuICAgICAgICAgICAgICAgIHBhaW50ZXIueCA9IHhcbiAgICAgICAgICAgICAgICBwYWludGVyLnkgPSB5XG4gICAgICAgICAgICAgICAgcGFpbnRlci56ID0gelxuICAgICAgICAgICAgICAgIHBhaW50ZXIudyA9IHdcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IHdpcmVDdWJlXG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB4XG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB5XG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB6XG4gICAgICAgICAgICAgICAgZGF0YVtwdHIrK10gPSB3XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LmlucHV0cy5rZXlib2FyZC5ldmVudEtleVByZXNzLmFkZExpc3RlbmVyKChldnQpID0+IHtcbiAgICAgICAgaWYgKGV2dC5rZXkgPT09IFwiZFwiKSB7XG4gICAgICAgICAgICBsb2QuZGVidWcoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb250ZXh0LnBhaW50KClcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1g6IFBvc1gsXG4gICAgICAgICAgICAgICAgICAgIHBvc1k6IFBvc1ksXG4gICAgICAgICAgICAgICAgICAgIHBvc1o6IFBvc1osXG4gICAgICAgICAgICAgICAgICAgIG5lZ1g6IE5lZ1gsXG4gICAgICAgICAgICAgICAgICAgIG5lZ1k6IE5lZ1ksXG4gICAgICAgICAgICAgICAgICAgIG5lZ1o6IE5lZ1osXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcbiAgICAgICAgICAgICAgICBpbmVydGlhWm9vbTogMTAwMCxcbiAgICAgICAgICAgICAgICBzcGVlZFpvb206IDAuOCxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB0b0Jpbih2YWx1ZTogbnVtYmVyLCBsZXZlbDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMikucGFkU3RhcnQobGV2ZWwsIFwiMFwiKVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkR0xCKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGxldmVsOiBudW1iZXIpOiBQcm9taXNlPFRnZERhdGFHbGIgfCBudWxsPiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgICAgbGV2ZWwgPT09IDBcbiAgICAgICAgICAgID8gXCIuL2Fzc2V0cy9sb2QvT2N0cmVlLmdsYlwiXG4gICAgICAgICAgICA6IGAuL2Fzc2V0cy9sb2QvT2N0cmVlJHt0b0Jpbih4LCBsZXZlbCl9JHt0b0Jpbih5LCBsZXZlbCl9JHt0b0Jpbih6LCBsZXZlbCl9LmdsYmBcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgTE9EIGJsb2NrOlwiLCB1cmwpXG4gICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKHVybClcbiAgICByZXR1cm4gYXNzZXRcbn1cbiIsImltcG9ydCB7XG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFzZXQsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQcm9ncmFtLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIFRnZFNoYWRlclZlcnRleCxcbiAgICBUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuY29uc3QgRVBTSUxPTiA9IDFlLTEgLy8gMWUtM1xuY29uc3QgWDAgPSAtMSArIEVQU0lMT05cbmNvbnN0IFgxID0gKzEgLSBFUFNJTE9OXG5jb25zdCBZMCA9IC0xICsgRVBTSUxPTlxuY29uc3QgWTEgPSArMSAtIEVQU0lMT05cbmNvbnN0IFowID0gMCArIEVQU0lMT05cbmNvbnN0IFoxID0gKzEgLSBFUFNJTE9OXG5cbmV4cG9ydCBjbGFzcyBXaXJlQ3ViZSBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgIHB1YmxpYyBkYXRhID0gbmV3IEZsb2F0MzJBcnJheShbXG5cdFx0WDAsIFkwLCBaMCwgMSwgIC8vIDBcblx0XHRYMCwgWTEsIFowLCAxLCAgLy8gMVxuXHRcdFgxLCBZMCwgWjAsIDEsICAvLyAyXG5cdFx0WDEsIFkxLCBaMCwgMSwgIC8vIDNcblx0XHRYMCwgWTAsIFoxLCAxLCAgLy8gNFxuXHRcdFgwLCBZMSwgWjEsIDEsICAvLyA1XG5cdFx0WDEsIFkwLCBaMSwgMSwgIC8vIDZcblx0XHRYMSwgWTEsIFoxLCAxLCAgLy8gN1xuICAgIF0pXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZzogVGdkUHJvZ3JhbVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY29uc3QgcHJnID0gbmV3IFRnZFByb2dyYW0oY29udGV4dC5nbCwge1xuICAgICAgICAgICAgdmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICBhdHRQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1wiZ2xfUG9zaXRpb24gPSBhdHRQb3NpdGlvbjtcIl0sXG4gICAgICAgICAgICB9KS5jb2RlLFxuICAgICAgICAgICAgZnJhZzogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgIEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogXCJGcmFnQ29sb3IgPSB2ZWM0KDEsIDEsIDEsIDAuNSk7XCIsXG4gICAgICAgICAgICB9KS5jb2RlLFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnByZyA9IHByZ1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0UG9zaXRpb246IFwidmVjNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJEWU5BTUlDX0RSQVdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIClcbiAgICAgICAgZGF0YXNldC5jb3VudCA9IDhcbiAgICAgICAgdGhpcy5kYXRhc2V0ID0gZGF0YXNldFxuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAgICAgICAwLCAxLCAwLCAyLCAwLCA0LFxuICAgICAgICAgICAgMSwgMywgMSwgNSxcbiAgICAgICAgICAgIDIsIDMsIDIsIDYsXG4gICAgICAgICAgICAzLCA3LFxuICAgICAgICAgICAgNCwgNSwgNCwgNixcbiAgICAgICAgICAgIDUsIDcsXG4gICAgICAgICAgICA2LCA3XG4gICAgICAgIF0pXG4gICAgICAgIGNvbnN0IHZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCBwcmcsIFtkYXRhc2V0XSwgZWxlbWVudHMpXG4gICAgICAgIHRoaXMudmFvID0gdmFvXG4gICAgICAgIHByZy5kZWJ1ZygpXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnByZy5kZWxldGUoKVxuICAgICAgICB0aGlzLnZhby5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQsIGRhdGEsIHByZywgdmFvLCBkYXRhc2V0IH0gPSB0aGlzXG4gICAgICAgIHByZy51c2UoKVxuICAgICAgICBjb25zdCB7IGdsIH0gPSBjb250ZXh0XG4gICAgICAgIGRhdGFzZXQuZGF0YSA9IGRhdGEuYnVmZmVyXG4gICAgICAgIHZhby51cGRhdGVEYXRhc2V0KGRhdGFzZXQpXG4gICAgICAgIHZhby5iaW5kKClcbiAgICAgICAgZ2wuZHJhd0VsZW1lbnRzKGdsLkxJTkVTLCAyNCwgZ2wuVU5TSUdORURfQllURSwgMClcbiAgICAgICAgdmFvLnVuYmluZCgpXG4gICAgfVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR3lCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsTUFBTSxLQUFLLEdBQUcsRUFBQyxXQUFXLEVBQUMsNHFIQUE0cUgsRUFBQztBQUN4c0gsTUFBTSxJQUFJLEdBQUcsZ21MQUFnbUw7QUFFOWxMLFNBQVMsYUFBYTtJQUNqQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHlDQUFjLENBQUMsS0FBSyxDQUFDO0lBQzdDLE9BQU8sc0dBQ0gsb0RBQUssU0FBUyxFQUFDLFdBQVcsWUFBQywyQ0FBQyxzQ0FBSSxLQUFHLEdBQU0sRUFDekMscURBQUssU0FBUyxFQUFDLFlBQVksYUFDdkIsOERBQ0ksMkNBQUMseUNBQVUsSUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FB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