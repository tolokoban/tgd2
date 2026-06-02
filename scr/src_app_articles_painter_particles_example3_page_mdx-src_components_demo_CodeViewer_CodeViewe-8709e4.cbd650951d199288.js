"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_particles_example3_page_mdx-src_components_demo_CodeViewer_CodeViewe-8709e4"], {
4975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _main_demo__rspack_import_4 = __webpack_require__(33329);
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
    "Detail #1": "function init(context: TgdContext, assets: Assets) {\n\tconst extensions = [\"EXT_color_buffer_float\", \"EXT_float_blend\"];\n\tfor (const name of extensions) {\n\t\tconst ext = context.gl.getExtension(name);\n\t\tif (!ext) throw new Error(`Extension ${name} not supported`);\n\t}\n\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\t// const is32bits = context.extensions.EXT_color_buffer_float\n\tconst is32bits = false;\n\tconst dataset: TgdDataset = makeDataset(is32bits ? 50000 : 80000, DURATION);\n\tconst virtualTime = new TgdTime({ context, speed: 0 });\n\tconst particles = new TgdPainterParticles(context, {\n\t\tdataset,\n\t\tdrawMode: \"POINTS\",\n\t\tshader: {\n\t\t\tvert: new TgdShaderVertex({\n\t\t\t\tfunctions: {\n\t\t\t\t\t...tgdCodeFunction_perlinNoise(),\n\t\t\t\t\tcomputeSize: [\n\t\t\t\t\t\t\"float computeSize(float x) {\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"// 1 - 4*((x-1)^2-0.5)^2\",\n\t\t\t\t\t\t\t\"float t = x - 1.0;\",\n\t\t\t\t\t\t\t\"float a = t * t - 0.5;\",\n\t\t\t\t\t\t\t\"return 1.0 - 4.0 * a * a;\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"}\",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniTime: \"float\",\n\t\t\t\t\tuniDelta: \"float\",\n\t\t\t\t\tuniCenter: \"vec2\",\n\t\t\t\t\tuniSpeed: \"vec2\",\n\t\t\t\t\tuniSize: \"float\",\n\t\t\t\t},\n\t\t\t\tattributes: dataset.getTypeRecord(),\n\t\t\t\tvarying: { varAlpha: \"float\" },\n\t\t\t\tmainCode: [\n\t\t\t\t\t`float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n\t\t\t\t\t\"varAlpha = 1.0 - life;\",\n\t\t\t\t\t\"gl_Position = vec4(attPosition, 0, 1);\",\n\t\t\t\t\t\"gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));\",\n\t\t\t\t\t\"varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);\",\n\t\t\t\t\t\"if (life >= 1.0) {\",\n\t\t\t\t\t[\n\t\t\t\t\t\t`varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n\t\t\t\t\t\t\"varPosition = uniCenter;\",\n\t\t\t\t\t\t\"varSpeed = uniSpeed * 1e2;\",\n\t\t\t\t\t\t\"vec2 shift = 0.3 * vec2(\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.xy, uniTime)),\",\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.yx, uniTime))\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\");\",\n\t\t\t\t\t\t\"varSpeed += shift;\",\n\t\t\t\t\t],\n\t\t\t\t\t\"}\",\n\t\t\t\t],\n\t\t\t}),\n\t\t\tfrag: new TgdShaderFragment({\n\t\t\t\tmainCode: [\n\t\t\t\t\t\"vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));\",\n\t\t\t\t\t\"float dist = dot(p, p);\",\n\t\t\t\t\t\"if (dist >= 1.0) discard;\",\n\t\t\t\t\t`float value = (1.0 / ${is32bits ? \"20.0\" : \"8.0\"}) / 255.0;`,\n\t\t\t\t\t\"value *= 1.0 - dist;\",\n\t\t\t\t\t\"value *= varAlpha;\",\n\t\t\t\t\t// \"float y = 0.5 * (1.0 + varPosition.y);\",\n\t\t\t\t\t// \"float h = 0.1;\",\n\t\t\t\t\t// \"y = h + (1.0 - h) * y;\",\n\t\t\t\t\t// \"value *= 1.0 - y;\",\n\t\t\t\t\t\"FragColor = vec4(value, 0.0, 0.0, 1.0);\",\n\t\t\t\t],\n\t\t\t}),\n\t\t},\n\t\tsetUniforms: ({ _time, delta, prg }) => {\n\t\t\tif (virtualTime.speed === 0) {\n\t\t\t\tvirtualTime.reset();\n\t\t\t\tvirtualTime.speed = 1;\n\t\t\t}\n\t\t\tprg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 4);\n\t\t\tprg.uniform1f(\"uniDelta\", delta);\n\t\t\tprg.uniform1f(\"uniTime\", virtualTime.seconds);\n\t\t\tlet { speedX, speedY } = context.inputs.pointer;\n\t\t\tconst factor = -1e5;\n\t\t\tspeedX *= factor;\n\t\t\tspeedY = factor * Math.abs(speedY);\n\t\t\tconst thresholdY = 0.1;\n\t\t\tconst thresholdX = thresholdY / 32;\n\t\t\tspeedX = -tgdCalcClamp(speedX, -thresholdX, +thresholdX);\n\t\t\tspeedY = tgdCalcClamp(speedY, 0, +thresholdY) + 0.01;\n\t\t\tprg.uniform2f(\"uniSpeed\", -speedX, -speedY);\n\t\t\tif (speedX === 0 && speedY === 0) {\n\t\t\t\tprg.uniform2f(\"uniCenter\", 9, 9);\n\t\t\t} else {\n\t\t\t\tlet x = context.inputs.pointer.x;\n\t\t\t\tif (x < 0) x = -x * x;\n\t\t\t\telse x *= x;\n\t\t\t\tx *= 0.125;\n\t\t\t\tprg.uniform2f(\"uniCenter\", x, -1.1);\n\t\t\t}\n\t\t},\n\t});\n\tconst textureFB = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t\tstorage: {\n\t\t\tformat: is32bits ? \"R32F / RED / FLOAT\" : \"R16F / RED / FLOAT\",\n\t\t},\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tantiAliasing: false,\n\t\ttextureColor0: textureFB,\n\t\tchildren: [\n\t\t\tnew TgdPainterState(context, {\n\t\t\t\tblend: \"add\",\n\t\t\t\tchildren: [clear, particles],\n\t\t\t}),\n\t\t],\n\t});\n\tconst palette = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapR: \"CLAMP_TO_EDGE\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]),\n\t);\n\tconst filters = new TgdPainterFilter(context, {\n\t\tflipY: true,\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [\n\t\t\tnew TgdFilter({\n\t\t\t\ttextures: {\n\t\t\t\t\ttexPalette: palette,\n\t\t\t\t},\n\t\t\t\tfragmentShaderCode: [\n\t\t\t\t\t\"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n\t\t\t\t\t// \"float u2 = u * u;\",\n\t\t\t\t\t// \"u = mix(u, u2, varUV.y * 1.0);\",\n\t\t\t\t\t\"FragColor = texture(texPalette, vec2(u, u));\",\n\t\t\t\t],\n\t\t\t}),\n\t\t],\n\t});\n\tcontext.add(clear, framebuffer, filters);\n\tcontext.play();\n}"
};
var FULL = "import {\n\ttgdCalcClamp,\n\ttgdCalcRandom,\n\ttgdCanvasCreatePalette,\n\ttgdCodeFunction_perlinNoise,\n\ttype TgdContext,\n\tTgdDataset,\n\tTgdFilter,\n\tTgdPainterClear,\n\tTgdPainterFilter,\n\tTgdPainterFramebuffer,\n\tTgdPainterParticles,\n\tTgdPainterState,\n\tTgdShaderFragment,\n\tTgdShaderVertex,\n\tTgdTexture2D,\n\tTgdTime,\n} from \"@tolokoban/tgd\";\n\nimport View, { type Assets } from \"@/components/demo/Tgd\";\n\nconst DURATION = 1;\n\nfunction init(context: TgdContext, assets: Assets) {\n\tconst extensions = [\"EXT_color_buffer_float\", \"EXT_float_blend\"];\n\tfor (const name of extensions) {\n\t\tconst ext = context.gl.getExtension(name);\n\t\tif (!ext) throw new Error(`Extension ${name} not supported`);\n\t}\n\n\tconst clear = new TgdPainterClear(context, { color: [0, 0, 0, 1], depth: 1 });\n\t// const is32bits = context.extensions.EXT_color_buffer_float\n\tconst is32bits = false;\n\tconst dataset: TgdDataset = makeDataset(is32bits ? 50000 : 80000, DURATION);\n\tconst virtualTime = new TgdTime({ context, speed: 0 });\n\tconst particles = new TgdPainterParticles(context, {\n\t\tdataset,\n\t\tdrawMode: \"POINTS\",\n\t\tshader: {\n\t\t\tvert: new TgdShaderVertex({\n\t\t\t\tfunctions: {\n\t\t\t\t\t...tgdCodeFunction_perlinNoise(),\n\t\t\t\t\tcomputeSize: [\n\t\t\t\t\t\t\"float computeSize(float x) {\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"// 1 - 4*((x-1)^2-0.5)^2\",\n\t\t\t\t\t\t\t\"float t = x - 1.0;\",\n\t\t\t\t\t\t\t\"float a = t * t - 0.5;\",\n\t\t\t\t\t\t\t\"return 1.0 - 4.0 * a * a;\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"}\",\n\t\t\t\t\t],\n\t\t\t\t},\n\t\t\t\tuniforms: {\n\t\t\t\t\tuniTime: \"float\",\n\t\t\t\t\tuniDelta: \"float\",\n\t\t\t\t\tuniCenter: \"vec2\",\n\t\t\t\t\tuniSpeed: \"vec2\",\n\t\t\t\t\tuniSize: \"float\",\n\t\t\t\t},\n\t\t\t\tattributes: dataset.getTypeRecord(),\n\t\t\t\tvarying: { varAlpha: \"float\" },\n\t\t\t\tmainCode: [\n\t\t\t\t\t`float life = clamp((uniTime - attBirth) * ${(1 / DURATION).toFixed(6)}, 0.0, 1.0);`,\n\t\t\t\t\t\"varAlpha = 1.0 - life;\",\n\t\t\t\t\t\"gl_Position = vec4(attPosition, 0, 1);\",\n\t\t\t\t\t\"gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));\",\n\t\t\t\t\t\"varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);\",\n\t\t\t\t\t\"if (life >= 1.0) {\",\n\t\t\t\t\t[\n\t\t\t\t\t\t`varBirth = uniTime + attRandom.x * ${DURATION.toFixed(3)};`,\n\t\t\t\t\t\t\"varPosition = uniCenter;\",\n\t\t\t\t\t\t\"varSpeed = uniSpeed * 1e2;\",\n\t\t\t\t\t\t\"vec2 shift = 0.3 * vec2(\",\n\t\t\t\t\t\t[\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.xy, uniTime)),\",\n\t\t\t\t\t\t\t\"perlinNoise(vec3(attRandom.yx, uniTime))\",\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\");\",\n\t\t\t\t\t\t\"varSpeed += shift;\",\n\t\t\t\t\t],\n\t\t\t\t\t\"}\",\n\t\t\t\t],\n\t\t\t}),\n\t\t\tfrag: new TgdShaderFragment({\n\t\t\t\tmainCode: [\n\t\t\t\t\t\"vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));\",\n\t\t\t\t\t\"float dist = dot(p, p);\",\n\t\t\t\t\t\"if (dist >= 1.0) discard;\",\n\t\t\t\t\t`float value = (1.0 / ${is32bits ? \"20.0\" : \"8.0\"}) / 255.0;`,\n\t\t\t\t\t\"value *= 1.0 - dist;\",\n\t\t\t\t\t\"value *= varAlpha;\",\n\t\t\t\t\t// \"float y = 0.5 * (1.0 + varPosition.y);\",\n\t\t\t\t\t// \"float h = 0.1;\",\n\t\t\t\t\t// \"y = h + (1.0 - h) * y;\",\n\t\t\t\t\t// \"value *= 1.0 - y;\",\n\t\t\t\t\t\"FragColor = vec4(value, 0.0, 0.0, 1.0);\",\n\t\t\t\t],\n\t\t\t}),\n\t\t},\n\t\tsetUniforms: ({ _time, delta, prg }) => {\n\t\t\tif (virtualTime.speed === 0) {\n\t\t\t\tvirtualTime.reset();\n\t\t\t\tvirtualTime.speed = 1;\n\t\t\t}\n\t\t\tprg.uniform1f(\"uniSize\", Math.min(context.width, context.height) / 4);\n\t\t\tprg.uniform1f(\"uniDelta\", delta);\n\t\t\tprg.uniform1f(\"uniTime\", virtualTime.seconds);\n\t\t\tlet { speedX, speedY } = context.inputs.pointer;\n\t\t\tconst factor = -1e5;\n\t\t\tspeedX *= factor;\n\t\t\tspeedY = factor * Math.abs(speedY);\n\t\t\tconst thresholdY = 0.1;\n\t\t\tconst thresholdX = thresholdY / 32;\n\t\t\tspeedX = -tgdCalcClamp(speedX, -thresholdX, +thresholdX);\n\t\t\tspeedY = tgdCalcClamp(speedY, 0, +thresholdY) + 0.01;\n\t\t\tprg.uniform2f(\"uniSpeed\", -speedX, -speedY);\n\t\t\tif (speedX === 0 && speedY === 0) {\n\t\t\t\tprg.uniform2f(\"uniCenter\", 9, 9);\n\t\t\t} else {\n\t\t\t\tlet x = context.inputs.pointer.x;\n\t\t\t\tif (x < 0) x = -x * x;\n\t\t\t\telse x *= x;\n\t\t\t\tx *= 0.125;\n\t\t\t\tprg.uniform2f(\"uniCenter\", x, -1.1);\n\t\t\t}\n\t\t},\n\t});\n\tconst textureFB = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"NEAREST\",\n\t\t\tmagFilter: \"NEAREST\",\n\t\t},\n\t\tstorage: {\n\t\t\tformat: is32bits ? \"R32F / RED / FLOAT\" : \"R16F / RED / FLOAT\",\n\t\t},\n\t});\n\tconst framebuffer = new TgdPainterFramebuffer(context, {\n\t\tantiAliasing: false,\n\t\ttextureColor0: textureFB,\n\t\tchildren: [\n\t\t\tnew TgdPainterState(context, {\n\t\t\t\tblend: \"add\",\n\t\t\t\tchildren: [clear, particles],\n\t\t\t}),\n\t\t],\n\t});\n\tconst palette = new TgdTexture2D(context, {\n\t\tparams: {\n\t\t\tminFilter: \"LINEAR\",\n\t\t\tmagFilter: \"LINEAR\",\n\t\t\twrapR: \"CLAMP_TO_EDGE\",\n\t\t\twrapS: \"CLAMP_TO_EDGE\",\n\t\t\twrapT: \"CLAMP_TO_EDGE\",\n\t\t},\n\t}).loadBitmap(\n\t\ttgdCanvasCreatePalette([\"#000\", \"#f00\", \"#f92\", \"#ee3\", \"#ff4\", \"#fff\"]),\n\t);\n\tconst filters = new TgdPainterFilter(context, {\n\t\tflipY: true,\n\t\ttexture: framebuffer.textureColor0,\n\t\tfilters: [\n\t\t\tnew TgdFilter({\n\t\t\t\ttextures: {\n\t\t\t\t\ttexPalette: palette,\n\t\t\t\t},\n\t\t\t\tfragmentShaderCode: [\n\t\t\t\t\t\"float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);\",\n\t\t\t\t\t// \"float u2 = u * u;\",\n\t\t\t\t\t// \"u = mix(u, u2, varUV.y * 1.0);\",\n\t\t\t\t\t\"FragColor = texture(texPalette, vec2(u, u));\",\n\t\t\t\t],\n\t\t\t}),\n\t\t],\n\t});\n\tcontext.add(clear, framebuffer, filters);\n\tcontext.play();\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} options={{ alpha: false }} />;\n}\n\nfunction makeDataset(count: number, duration: number): TgdDataset {\n\tconst dataset = new TgdDataset({\n\t\tattPosition: \"vec2\",\n\t\tattSpeed: \"vec2\",\n\t\tattBirth: \"float\",\n\t\tattRandom: \"vec2\",\n\t});\n\tconst attPosition: number[] = [];\n\tconst attSpeed: number[] = [];\n\tconst attBirth: number[] = [];\n\tconst attRandom: number[] = [];\n\tconst rnd = (min = 0, max = 1) => tgdCalcRandom(min, max);\n\tfor (let i = 0; i < count; i++) {\n\t\tattPosition.push(9, 9);\n\t\tattSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1));\n\t\tattBirth.push((-i / count) * duration);\n\t\tattRandom.push(rnd(), rnd());\n\t}\n\tdataset.set(\"attPosition\", new Float32Array(attPosition));\n\tdataset.set(\"attSpeed\", new Float32Array(attSpeed));\n\tdataset.set(\"attBirth\", new Float32Array(attBirth));\n\tdataset.set(\"attRandom\", new Float32Array(attRandom));\n\treturn dataset;\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
33329(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
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



var DURATION = 1;
// #begin
function init(context, assets) {
    var extensions = [
        "EXT_color_buffer_float",
        "EXT_float_blend"
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = extensions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var ext = context.gl.getExtension(name);
            if (!ext) throw new Error("Extension ".concat(name, " not supported"));
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
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    });
    // const is32bits = context.extensions.EXT_color_buffer_float
    var is32bits = false;
    var dataset = makeDataset(is32bits ? 50000 : 80000, DURATION);
    var virtualTime = new _tolokoban_tgd__rspack_import_1.TgdTime({
        context: context,
        speed: 0
    });
    var particles = new _tolokoban_tgd__rspack_import_1.TgdPainterParticles(context, {
        dataset: dataset,
        drawMode: "POINTS",
        shader: {
            vert: new _tolokoban_tgd__rspack_import_1.TgdShaderVertex({
                functions: _object_spread_props(_object_spread({}, (0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)()), {
                    computeSize: [
                        "float computeSize(float x) {",
                        [
                            "// 1 - 4*((x-1)^2-0.5)^2",
                            "float t = x - 1.0;",
                            "float a = t * t - 0.5;",
                            "return 1.0 - 4.0 * a * a;"
                        ],
                        "}"
                    ]
                }),
                uniforms: {
                    uniTime: "float",
                    uniDelta: "float",
                    uniCenter: "vec2",
                    uniSpeed: "vec2",
                    uniSize: "float"
                },
                attributes: dataset.getTypeRecord(),
                varying: {
                    varAlpha: "float"
                },
                mainCode: [
                    "float life = clamp((uniTime - attBirth) * ".concat((1 / DURATION).toFixed(6), ", 0.0, 1.0);"),
                    "varAlpha = 1.0 - life;",
                    "gl_Position = vec4(attPosition, 0, 1);",
                    "gl_PointSize = uniSize * (0.2 + .8 * computeSize(life));",
                    "varPosition -= attSpeed * uniDelta * 2.0 * (.75 + life);",
                    "if (life >= 1.0) {",
                    [
                        "varBirth = uniTime + attRandom.x * ".concat(DURATION.toFixed(3), ";"),
                        "varPosition = uniCenter;",
                        "varSpeed = uniSpeed * 1e2;",
                        "vec2 shift = 0.3 * vec2(",
                        [
                            "perlinNoise(vec3(attRandom.xy, uniTime)),",
                            "perlinNoise(vec3(attRandom.yx, uniTime))"
                        ],
                        ");",
                        "varSpeed += shift;"
                    ],
                    "}"
                ]
            }),
            frag: new _tolokoban_tgd__rspack_import_1.TgdShaderFragment({
                mainCode: [
                    "vec2 p = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                    "float dist = dot(p, p);",
                    "if (dist >= 1.0) discard;",
                    "float value = (1.0 / ".concat(is32bits ? "20.0" : "8.0", ") / 255.0;"),
                    "value *= 1.0 - dist;",
                    "value *= varAlpha;",
                    // "float y = 0.5 * (1.0 + varPosition.y);",
                    // "float h = 0.1;",
                    // "y = h + (1.0 - h) * y;",
                    // "value *= 1.0 - y;",
                    "FragColor = vec4(value, 0.0, 0.0, 1.0);"
                ]
            })
        },
        setUniforms: function setUniforms(param) {
            var _time = param._time, delta = param.delta, prg = param.prg;
            if (virtualTime.speed === 0) {
                virtualTime.reset();
                virtualTime.speed = 1;
            }
            prg.uniform1f("uniSize", Math.min(context.width, context.height) / 4);
            prg.uniform1f("uniDelta", delta);
            prg.uniform1f("uniTime", virtualTime.seconds);
            var _context_inputs_pointer = context.inputs.pointer, speedX = _context_inputs_pointer.speedX, speedY = _context_inputs_pointer.speedY;
            var factor = -1e5;
            speedX *= factor;
            speedY = factor * Math.abs(speedY);
            var thresholdY = 0.1;
            var thresholdX = thresholdY / 32;
            speedX = -(0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(speedX, -thresholdX, +thresholdX);
            speedY = (0,_tolokoban_tgd__rspack_import_1.tgdCalcClamp)(speedY, 0, +thresholdY) + 0.01;
            prg.uniform2f("uniSpeed", -speedX, -speedY);
            if (speedX === 0 && speedY === 0) {
                prg.uniform2f("uniCenter", 9, 9);
            } else {
                var x = context.inputs.pointer.x;
                if (x < 0) x = -x * x;
                else x *= x;
                x *= 0.125;
                prg.uniform2f("uniCenter", x, -1.1);
            }
        }
    });
    var textureFB = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "NEAREST",
            magFilter: "NEAREST"
        },
        storage: {
            format: is32bits ? "R32F / RED / FLOAT" : "R16F / RED / FLOAT"
        }
    });
    var framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        antiAliasing: false,
        textureColor0: textureFB,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
                blend: "add",
                children: [
                    clear,
                    particles
                ]
            })
        ]
    });
    var palette = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
        params: {
            minFilter: "LINEAR",
            magFilter: "LINEAR",
            wrapR: "CLAMP_TO_EDGE",
            wrapS: "CLAMP_TO_EDGE",
            wrapT: "CLAMP_TO_EDGE"
        }
    }).loadBitmap((0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreatePalette)([
        "#000",
        "#f00",
        "#f92",
        "#ee3",
        "#ff4",
        "#fff"
    ]));
    var filters = new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, {
        flipY: true,
        texture: framebuffer.textureColor0,
        filters: [
            new _tolokoban_tgd__rspack_import_1.TgdFilter({
                textures: {
                    texPalette: palette
                },
                fragmentShaderCode: [
                    "float u = clamp(texture(uniTexture, varUV).r, 0.0, 1.0);",
                    // "float u2 = u * u;",
                    // "u = mix(u, u2, varUV.y * 1.0);",
                    "FragColor = texture(texPalette, vec2(u, u));"
                ]
            })
        ]
    });
    context.add(clear, framebuffer, filters);
    context.play();
}
// #end
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        options: {
            alpha: false
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/main.demo.tsx",
        lineNumber: 183,
        columnNumber: 9
    }, this);
}
function makeDataset(count, duration) {
    var dataset = new _tolokoban_tgd__rspack_import_1.TgdDataset({
        attPosition: "vec2",
        attSpeed: "vec2",
        attBirth: "float",
        attRandom: "vec2"
    });
    var attPosition = [];
    var attSpeed = [];
    var attBirth = [];
    var attRandom = [];
    var rnd = function rnd() {
        var min = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(min, max);
    };
    for(var i = 0; i < count; i++){
        attPosition.push(9, 9);
        attSpeed.push(rnd(-0.1, +0.1), rnd(-0.1, +0.1));
        attBirth.push(-i / count * duration);
        attRandom.push(rnd(), rnd());
    }
    dataset.set("attPosition", new Float32Array(attPosition));
    dataset.set("attSpeed", new Float32Array(attSpeed));
    dataset.set("attBirth", new Float32Array(attBirth));
    dataset.set("attRandom", new Float32Array(attRandom));
    return dataset;
}


},
85020(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _main_demo__rspack_import_1 = __webpack_require__(4975);
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
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterParticles.html",
                    children: "TgdPainterParticles"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to start a fire."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS04NzA5ZTQuY2JkNjUwOTUxZDE5OTI4OC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTMvXy9tYWluLmRlbW8vaW5kZXgudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9wYXJ0aWNsZXMvZXhhbXBsZTMvXy9tYWluLmRlbW8vbWFpbi5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL3BhZ2UubWR4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL25vZGVfbW9kdWxlcy9AbWR4LWpzL3JlYWN0L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdhcm5pbmchIFRoaXMgY29kZSBoYXMgYmVlbiBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIlxuaW1wb3J0IERlbW8gZnJvbSBcIi4vbWFpbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJEZXRhaWwgIzFcIjpcImZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBleHRlbnNpb25zID0gW1xcXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxcIiwgXFxcIkVYVF9mbG9hdF9ibGVuZFxcXCJdO1xcblxcdGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XFxuXFx0XFx0Y29uc3QgZXh0ID0gY29udGV4dC5nbC5nZXRFeHRlbnNpb24obmFtZSk7XFxuXFx0XFx0aWYgKCFleHQpIHRocm93IG5ldyBFcnJvcihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IHN1cHBvcnRlZGApO1xcblxcdH1cXG5cXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcXG5cXHQvLyBjb25zdCBpczMyYml0cyA9IGNvbnRleHQuZXh0ZW5zaW9ucy5FWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxuXFx0Y29uc3QgaXMzMmJpdHMgPSBmYWxzZTtcXG5cXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTik7XFxuXFx0Y29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pO1xcblxcdGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhc2V0LFxcblxcdFxcdGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG5cXHRcXHRzaGFkZXI6IHtcXG5cXHRcXHRcXHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG5cXHRcXHRcXHRcXHRmdW5jdGlvbnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG5cXHRcXHRcXHRcXHRcXHRjb21wdXRlU2l6ZTogW1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJmbG9hdCBjb21wdXRlU2l6ZShmbG9hdCB4KSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IHQgPSB4IC0gMS4wO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGEgPSB0ICogdCAtIDAuNTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0dW5pZm9ybXM6IHtcXG5cXHRcXHRcXHRcXHRcXHR1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaURlbHRhOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU2l6ZTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcblxcdFxcdFxcdFxcdHZhcnlpbmc6IHsgdmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIgfSxcXG5cXHRcXHRcXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcdFxcdGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjIgKyAuOCAqIGNvbXB1dGVTaXplKGxpZmUpKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgPSB1bmlTcGVlZCAqIDFlMjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCIpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXFwifVxcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgcCA9IDIuMCAqIChnbF9Qb2ludENvb3JkLnh5IC0gdmVjMiguNSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGRpc3QgPSBkb3QocCwgcCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGRpc3QgPj0gMS4wKSBkaXNjYXJkO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0YGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcXFwiMjAuMFxcXCIgOiBcXFwiOC4wXFxcIn0pIC8gMjU1LjA7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YWx1ZSAqPSB2YXJBbHBoYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcImZsb2F0IGggPSAwLjE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwieSA9IGggKyAoMS4wIC0gaCkgKiB5O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcInZhbHVlICo9IDEuMCAtIHk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdH0sXFxuXFx0XFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG5cXHRcXHRcXHRpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcXG5cXHRcXHRcXHRcXHR2aXJ0dWFsVGltZS5yZXNldCgpO1xcblxcdFxcdFxcdFxcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDQpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKTtcXG5cXHRcXHRcXHRsZXQgeyBzcGVlZFgsIHNwZWVkWSB9ID0gY29udGV4dC5pbnB1dHMucG9pbnRlcjtcXG5cXHRcXHRcXHRjb25zdCBmYWN0b3IgPSAtMWU1O1xcblxcdFxcdFxcdHNwZWVkWCAqPSBmYWN0b3I7XFxuXFx0XFx0XFx0c3BlZWRZID0gZmFjdG9yICogTWF0aC5hYnMoc3BlZWRZKTtcXG5cXHRcXHRcXHRjb25zdCB0aHJlc2hvbGRZID0gMC4xO1xcblxcdFxcdFxcdGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzI7XFxuXFx0XFx0XFx0c3BlZWRYID0gLXRnZENhbGNDbGFtcChzcGVlZFgsIC10aHJlc2hvbGRYLCArdGhyZXNob2xkWCk7XFxuXFx0XFx0XFx0c3BlZWRZID0gdGdkQ2FsY0NsYW1wKHNwZWVkWSwgMCwgK3RocmVzaG9sZFkpICsgMC4wMTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIC1zcGVlZFgsIC1zcGVlZFkpO1xcblxcdFxcdFxcdGlmIChzcGVlZFggPT09IDAgJiYgc3BlZWRZID09PSAwKSB7XFxuXFx0XFx0XFx0XFx0cHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgOSwgOSk7XFxuXFx0XFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRcXHRsZXQgeCA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueDtcXG5cXHRcXHRcXHRcXHRpZiAoeCA8IDApIHggPSAteCAqIHg7XFxuXFx0XFx0XFx0XFx0ZWxzZSB4ICo9IHg7XFxuXFx0XFx0XFx0XFx0eCAqPSAwLjEyNTtcXG5cXHRcXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCB4LCAtMS4xKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdFxcdHN0b3JhZ2U6IHtcXG5cXHRcXHRcXHRmb3JtYXQ6IGlzMzJiaXRzID8gXFxcIlIzMkYgLyBSRUQgLyBGTE9BVFxcXCIgOiBcXFwiUjE2RiAvIFJFRCAvIEZMT0FUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0YW50aUFsaWFzaW5nOiBmYWxzZSxcXG5cXHRcXHR0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuXFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRibGVuZDogXFxcImFkZFxcXCIsXFxuXFx0XFx0XFx0XFx0Y2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0d3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKFxcblxcdFxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjMDAwXFxcIiwgXFxcIiNmMDBcXFwiLCBcXFwiI2Y5MlxcXCIsIFxcXCIjZWUzXFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG5cXHQpO1xcblxcdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG5cXHRcXHRmaWx0ZXJzOiBbXFxuXFx0XFx0XFx0bmV3IFRnZEZpbHRlcih7XFxuXFx0XFx0XFx0XFx0dGV4dHVyZXM6IHtcXG5cXHRcXHRcXHRcXHRcXHR0ZXhQYWxldHRlOiBwYWxldHRlLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwiZmxvYXQgdTIgPSB1ICogdTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJ1ID0gbWl4KHUsIHUyLCB2YXJVVi55ICogMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgdSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycyk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxufVwifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0Z2RDYWxjQ2xhbXAsXFxuXFx0dGdkQ2FsY1JhbmRvbSxcXG5cXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxcblxcdHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkRGF0YXNldCxcXG5cXHRUZ2RGaWx0ZXIsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJGaWx0ZXIsXFxuXFx0VGdkUGFpbnRlckZyYW1lYnVmZmVyLFxcblxcdFRnZFBhaW50ZXJQYXJ0aWNsZXMsXFxuXFx0VGdkUGFpbnRlclN0YXRlLFxcblxcdFRnZFNoYWRlckZyYWdtZW50LFxcblxcdFRnZFNoYWRlclZlcnRleCxcXG5cXHRUZ2RUZXh0dXJlMkQsXFxuXFx0VGdkVGltZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5cXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuY29uc3QgRFVSQVRJT04gPSAxO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG5cXHRjb25zdCBleHRlbnNpb25zID0gW1xcXCJFWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxcIiwgXFxcIkVYVF9mbG9hdF9ibGVuZFxcXCJdO1xcblxcdGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XFxuXFx0XFx0Y29uc3QgZXh0ID0gY29udGV4dC5nbC5nZXRFeHRlbnNpb24obmFtZSk7XFxuXFx0XFx0aWYgKCFleHQpIHRocm93IG5ldyBFcnJvcihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IHN1cHBvcnRlZGApO1xcblxcdH1cXG5cXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcXG5cXHQvLyBjb25zdCBpczMyYml0cyA9IGNvbnRleHQuZXh0ZW5zaW9ucy5FWFRfY29sb3JfYnVmZmVyX2Zsb2F0XFxuXFx0Y29uc3QgaXMzMmJpdHMgPSBmYWxzZTtcXG5cXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTik7XFxuXFx0Y29uc3QgdmlydHVhbFRpbWUgPSBuZXcgVGdkVGltZSh7IGNvbnRleHQsIHNwZWVkOiAwIH0pO1xcblxcdGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcXG5cXHRcXHRkYXRhc2V0LFxcblxcdFxcdGRyYXdNb2RlOiBcXFwiUE9JTlRTXFxcIixcXG5cXHRcXHRzaGFkZXI6IHtcXG5cXHRcXHRcXHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcXG5cXHRcXHRcXHRcXHRmdW5jdGlvbnM6IHtcXG5cXHRcXHRcXHRcXHRcXHQuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcXG5cXHRcXHRcXHRcXHRcXHRjb21wdXRlU2l6ZTogW1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJmbG9hdCBjb21wdXRlU2l6ZShmbG9hdCB4KSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IHQgPSB4IC0gMS4wO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGEgPSB0ICogdCAtIDAuNTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0dW5pZm9ybXM6IHtcXG5cXHRcXHRcXHRcXHRcXHR1bmlUaW1lOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaURlbHRhOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaUNlbnRlcjogXFxcInZlYzJcXFwiLFxcblxcdFxcdFxcdFxcdFxcdHVuaVNwZWVkOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU2l6ZTogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRcXHRcXHR9LFxcblxcdFxcdFxcdFxcdGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxcblxcdFxcdFxcdFxcdHZhcnlpbmc6IHsgdmFyQWxwaGE6IFxcXCJmbG9hdFxcXCIgfSxcXG5cXHRcXHRcXHRcXHRtYWluQ29kZTogW1xcblxcdFxcdFxcdFxcdFxcdGBmbG9hdCBsaWZlID0gY2xhbXAoKHVuaVRpbWUgLSBhdHRCaXJ0aCkgKiAkeygxIC8gRFVSQVRJT04pLnRvRml4ZWQoNil9LCAwLjAsIDEuMCk7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImdsX1Bvc2l0aW9uID0gdmVjNChhdHRQb3NpdGlvbiwgMCwgMSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjIgKyAuOCAqIGNvbXB1dGVTaXplKGxpZmUpKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImlmIChsaWZlID49IDEuMCkge1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdGB2YXJCaXJ0aCA9IHVuaVRpbWUgKyBhdHRSYW5kb20ueCAqICR7RFVSQVRJT04udG9GaXhlZCgzKX07YCxcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyUG9zaXRpb24gPSB1bmlDZW50ZXI7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgPSB1bmlTcGVlZCAqIDFlMjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCIpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZhclNwZWVkICs9IHNoaWZ0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHRcXHRcXHRcXFwifVxcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRcXHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgcCA9IDIuMCAqIChnbF9Qb2ludENvb3JkLnh5IC0gdmVjMiguNSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGRpc3QgPSBkb3QocCwgcCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGRpc3QgPj0gMS4wKSBkaXNjYXJkO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0YGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcXFwiMjAuMFxcXCIgOiBcXFwiOC4wXFxcIn0pIC8gMjU1LjA7YCxcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YWx1ZSAqPSB2YXJBbHBoYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcImZsb2F0IGggPSAwLjE7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwieSA9IGggKyAoMS4wIC0gaCkgKiB5O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcInZhbHVlICo9IDEuMCAtIHk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdH0sXFxuXFx0XFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcXG5cXHRcXHRcXHRpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcXG5cXHRcXHRcXHRcXHR2aXJ0dWFsVGltZS5yZXNldCgpO1xcblxcdFxcdFxcdFxcdHZpcnR1YWxUaW1lLnNwZWVkID0gMTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pU2l6ZVxcXCIsIE1hdGgubWluKGNvbnRleHQud2lkdGgsIGNvbnRleHQuaGVpZ2h0KSAvIDQpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaURlbHRhXFxcIiwgZGVsdGEpO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMWYoXFxcInVuaVRpbWVcXFwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKTtcXG5cXHRcXHRcXHRsZXQgeyBzcGVlZFgsIHNwZWVkWSB9ID0gY29udGV4dC5pbnB1dHMucG9pbnRlcjtcXG5cXHRcXHRcXHRjb25zdCBmYWN0b3IgPSAtMWU1O1xcblxcdFxcdFxcdHNwZWVkWCAqPSBmYWN0b3I7XFxuXFx0XFx0XFx0c3BlZWRZID0gZmFjdG9yICogTWF0aC5hYnMoc3BlZWRZKTtcXG5cXHRcXHRcXHRjb25zdCB0aHJlc2hvbGRZID0gMC4xO1xcblxcdFxcdFxcdGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzI7XFxuXFx0XFx0XFx0c3BlZWRYID0gLXRnZENhbGNDbGFtcChzcGVlZFgsIC10aHJlc2hvbGRYLCArdGhyZXNob2xkWCk7XFxuXFx0XFx0XFx0c3BlZWRZID0gdGdkQ2FsY0NsYW1wKHNwZWVkWSwgMCwgK3RocmVzaG9sZFkpICsgMC4wMTtcXG5cXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlTcGVlZFxcXCIsIC1zcGVlZFgsIC1zcGVlZFkpO1xcblxcdFxcdFxcdGlmIChzcGVlZFggPT09IDAgJiYgc3BlZWRZID09PSAwKSB7XFxuXFx0XFx0XFx0XFx0cHJnLnVuaWZvcm0yZihcXFwidW5pQ2VudGVyXFxcIiwgOSwgOSk7XFxuXFx0XFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRcXHRsZXQgeCA9IGNvbnRleHQuaW5wdXRzLnBvaW50ZXIueDtcXG5cXHRcXHRcXHRcXHRpZiAoeCA8IDApIHggPSAteCAqIHg7XFxuXFx0XFx0XFx0XFx0ZWxzZSB4ICo9IHg7XFxuXFx0XFx0XFx0XFx0eCAqPSAwLjEyNTtcXG5cXHRcXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCB4LCAtMS4xKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSxcXG5cXHR9KTtcXG5cXHRjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHRcXHRtYWdGaWx0ZXI6IFxcXCJORUFSRVNUXFxcIixcXG5cXHRcXHR9LFxcblxcdFxcdHN0b3JhZ2U6IHtcXG5cXHRcXHRcXHRmb3JtYXQ6IGlzMzJiaXRzID8gXFxcIlIzMkYgLyBSRUQgLyBGTE9BVFxcXCIgOiBcXFwiUjE2RiAvIFJFRCAvIEZMT0FUXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XFxuXFx0XFx0YW50aUFsaWFzaW5nOiBmYWxzZSxcXG5cXHRcXHR0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXFxuXFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG5cXHRcXHRcXHRcXHRibGVuZDogXFxcImFkZFxcXCIsXFxuXFx0XFx0XFx0XFx0Y2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnN0IHBhbGV0dGUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcXG5cXHRcXHRwYXJhbXM6IHtcXG5cXHRcXHRcXHRtaW5GaWx0ZXI6IFxcXCJMSU5FQVJcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0d3JhcFI6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHRcXHR3cmFwUzogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBUOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0fSxcXG5cXHR9KS5sb2FkQml0bWFwKFxcblxcdFxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUoW1xcXCIjMDAwXFxcIiwgXFxcIiNmMDBcXFwiLCBcXFwiI2Y5MlxcXCIsIFxcXCIjZWUzXFxcIiwgXFxcIiNmZjRcXFwiLCBcXFwiI2ZmZlxcXCJdKSxcXG5cXHQpO1xcblxcdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XFxuXFx0XFx0ZmxpcFk6IHRydWUsXFxuXFx0XFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcXG5cXHRcXHRmaWx0ZXJzOiBbXFxuXFx0XFx0XFx0bmV3IFRnZEZpbHRlcih7XFxuXFx0XFx0XFx0XFx0dGV4dHVyZXM6IHtcXG5cXHRcXHRcXHRcXHRcXHR0ZXhQYWxldHRlOiBwYWxldHRlLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwiZmxvYXQgdTIgPSB1ICogdTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJ1ID0gbWl4KHUsIHUyLCB2YXJVVi55ICogMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgdSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XSxcXG5cXHRcXHRcXHR9KSxcXG5cXHRcXHRdLFxcblxcdH0pO1xcblxcdGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycyk7XFxuXFx0Y29udGV4dC5wbGF5KCk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+O1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XFxuXFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcXG5cXHRcXHRhdHRQb3NpdGlvbjogXFxcInZlYzJcXFwiLFxcblxcdFxcdGF0dFNwZWVkOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0YXR0QmlydGg6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0YXR0UmFuZG9tOiBcXFwidmVjMlxcXCIsXFxuXFx0fSk7XFxuXFx0Y29uc3QgYXR0UG9zaXRpb246IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW107XFxuXFx0Y29uc3QgYXR0UmFuZG9tOiBudW1iZXJbXSA9IFtdO1xcblxcdGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KTtcXG5cXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcXG5cXHRcXHRhdHRQb3NpdGlvbi5wdXNoKDksIDkpO1xcblxcdFxcdGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpO1xcblxcdFxcdGF0dEJpcnRoLnB1c2goKC1pIC8gY291bnQpICogZHVyYXRpb24pO1xcblxcdFxcdGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSk7XFxuXFx0fVxcblxcdGRhdGFzZXQuc2V0KFxcXCJhdHRQb3NpdGlvblxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UG9zaXRpb24pKTtcXG5cXHRkYXRhc2V0LnNldChcXFwiYXR0U3BlZWRcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFNwZWVkKSk7XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dEJpcnRoXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRCaXJ0aCkpO1xcblxcdGRhdGFzZXQuc2V0KFxcXCJhdHRSYW5kb21cXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFJhbmRvbSkpO1xcblxcdHJldHVybiBkYXRhc2V0O1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dGdkQ2FsY0NsYW1wLFxuXHR0Z2RDYWxjUmFuZG9tLFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxuXHR0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkRmlsdGVyLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJGaWx0ZXIsXG5cdFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcblx0VGdkUGFpbnRlclBhcnRpY2xlcyxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RTaGFkZXJGcmFnbWVudCxcblx0VGdkU2hhZGVyVmVydGV4LFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFRpbWUsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuY29uc3QgRFVSQVRJT04gPSAxO1xuXG4vLyAjYmVnaW5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0Y29uc3QgZXh0ZW5zaW9ucyA9IFtcIkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcIiwgXCJFWFRfZmxvYXRfYmxlbmRcIl07XG5cdGZvciAoY29uc3QgbmFtZSBvZiBleHRlbnNpb25zKSB7XG5cdFx0Y29uc3QgZXh0ID0gY29udGV4dC5nbC5nZXRFeHRlbnNpb24obmFtZSk7XG5cdFx0aWYgKCFleHQpIHRocm93IG5ldyBFcnJvcihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IHN1cHBvcnRlZGApO1xuXHR9XG5cblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHsgY29sb3I6IFswLCAwLCAwLCAxXSwgZGVwdGg6IDEgfSk7XG5cdC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcblx0Y29uc3QgaXMzMmJpdHMgPSBmYWxzZTtcblx0Y29uc3QgZGF0YXNldDogVGdkRGF0YXNldCA9IG1ha2VEYXRhc2V0KGlzMzJiaXRzID8gNTAwMDAgOiA4MDAwMCwgRFVSQVRJT04pO1xuXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XG5cdGNvbnN0IHBhcnRpY2xlcyA9IG5ldyBUZ2RQYWludGVyUGFydGljbGVzKGNvbnRleHQsIHtcblx0XHRkYXRhc2V0LFxuXHRcdGRyYXdNb2RlOiBcIlBPSU5UU1wiLFxuXHRcdHNoYWRlcjoge1xuXHRcdFx0dmVydDogbmV3IFRnZFNoYWRlclZlcnRleCh7XG5cdFx0XHRcdGZ1bmN0aW9uczoge1xuXHRcdFx0XHRcdC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuXHRcdFx0XHRcdGNvbXB1dGVTaXplOiBbXG5cdFx0XHRcdFx0XHRcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcIixcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XCIvLyAxIC0gNCooKHgtMSleMi0wLjUpXjJcIixcblx0XHRcdFx0XHRcdFx0XCJmbG9hdCB0ID0geCAtIDEuMDtcIixcblx0XHRcdFx0XHRcdFx0XCJmbG9hdCBhID0gdCAqIHQgLSAwLjU7XCIsXG5cdFx0XHRcdFx0XHRcdFwicmV0dXJuIDEuMCAtIDQuMCAqIGEgKiBhO1wiLFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFwifVwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdFx0dW5pVGltZTogXCJmbG9hdFwiLFxuXHRcdFx0XHRcdHVuaURlbHRhOiBcImZsb2F0XCIsXG5cdFx0XHRcdFx0dW5pQ2VudGVyOiBcInZlYzJcIixcblx0XHRcdFx0XHR1bmlTcGVlZDogXCJ2ZWMyXCIsXG5cdFx0XHRcdFx0dW5pU2l6ZTogXCJmbG9hdFwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhdHRyaWJ1dGVzOiBkYXRhc2V0LmdldFR5cGVSZWNvcmQoKSxcblx0XHRcdFx0dmFyeWluZzogeyB2YXJBbHBoYTogXCJmbG9hdFwiIH0sXG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0YGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxuXHRcdFx0XHRcdFwidmFyQWxwaGEgPSAxLjAgLSBsaWZlO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcIixcblx0XHRcdFx0XHRcImdsX1BvaW50U2l6ZSA9IHVuaVNpemUgKiAoMC4yICsgLjggKiBjb21wdXRlU2l6ZShsaWZlKSk7XCIsXG5cdFx0XHRcdFx0XCJ2YXJQb3NpdGlvbiAtPSBhdHRTcGVlZCAqIHVuaURlbHRhICogMi4wICogKC43NSArIGxpZmUpO1wiLFxuXHRcdFx0XHRcdFwiaWYgKGxpZmUgPj0gMS4wKSB7XCIsXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0YHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxuXHRcdFx0XHRcdFx0XCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcIixcblx0XHRcdFx0XHRcdFwidmFyU3BlZWQgPSB1bmlTcGVlZCAqIDFlMjtcIixcblx0XHRcdFx0XHRcdFwidmVjMiBzaGlmdCA9IDAuMyAqIHZlYzIoXCIsXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFwicGVybGluTm9pc2UodmVjMyhhdHRSYW5kb20ueHksIHVuaVRpbWUpKSxcIixcblx0XHRcdFx0XHRcdFx0XCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS55eCwgdW5pVGltZSkpXCIsXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCIpO1wiLFxuXHRcdFx0XHRcdFx0XCJ2YXJTcGVlZCArPSBzaGlmdDtcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwifVwiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0XHRmcmFnOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuXHRcdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcdFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQueHkgLSB2ZWMyKC41KSk7XCIsXG5cdFx0XHRcdFx0XCJmbG9hdCBkaXN0ID0gZG90KHAsIHApO1wiLFxuXHRcdFx0XHRcdFwiaWYgKGRpc3QgPj0gMS4wKSBkaXNjYXJkO1wiLFxuXHRcdFx0XHRcdGBmbG9hdCB2YWx1ZSA9ICgxLjAgLyAke2lzMzJiaXRzID8gXCIyMC4wXCIgOiBcIjguMFwifSkgLyAyNTUuMDtgLFxuXHRcdFx0XHRcdFwidmFsdWUgKj0gMS4wIC0gZGlzdDtcIixcblx0XHRcdFx0XHRcInZhbHVlICo9IHZhckFscGhhO1wiLFxuXHRcdFx0XHRcdC8vIFwiZmxvYXQgeSA9IDAuNSAqICgxLjAgKyB2YXJQb3NpdGlvbi55KTtcIixcblx0XHRcdFx0XHQvLyBcImZsb2F0IGggPSAwLjE7XCIsXG5cdFx0XHRcdFx0Ly8gXCJ5ID0gaCArICgxLjAgLSBoKSAqIHk7XCIsXG5cdFx0XHRcdFx0Ly8gXCJ2YWx1ZSAqPSAxLjAgLSB5O1wiLFxuXHRcdFx0XHRcdFwiRnJhZ0NvbG9yID0gdmVjNCh2YWx1ZSwgMC4wLCAwLjAsIDEuMCk7XCIsXG5cdFx0XHRcdF0sXG5cdFx0XHR9KSxcblx0XHR9LFxuXHRcdHNldFVuaWZvcm1zOiAoeyBfdGltZSwgZGVsdGEsIHByZyB9KSA9PiB7XG5cdFx0XHRpZiAodmlydHVhbFRpbWUuc3BlZWQgPT09IDApIHtcblx0XHRcdFx0dmlydHVhbFRpbWUucmVzZXQoKTtcblx0XHRcdFx0dmlydHVhbFRpbWUuc3BlZWQgPSAxO1xuXHRcdFx0fVxuXHRcdFx0cHJnLnVuaWZvcm0xZihcInVuaVNpemVcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNCk7XG5cdFx0XHRwcmcudW5pZm9ybTFmKFwidW5pRGVsdGFcIiwgZGVsdGEpO1xuXHRcdFx0cHJnLnVuaWZvcm0xZihcInVuaVRpbWVcIiwgdmlydHVhbFRpbWUuc2Vjb25kcyk7XG5cdFx0XHRsZXQgeyBzcGVlZFgsIHNwZWVkWSB9ID0gY29udGV4dC5pbnB1dHMucG9pbnRlcjtcblx0XHRcdGNvbnN0IGZhY3RvciA9IC0xZTU7XG5cdFx0XHRzcGVlZFggKj0gZmFjdG9yO1xuXHRcdFx0c3BlZWRZID0gZmFjdG9yICogTWF0aC5hYnMoc3BlZWRZKTtcblx0XHRcdGNvbnN0IHRocmVzaG9sZFkgPSAwLjE7XG5cdFx0XHRjb25zdCB0aHJlc2hvbGRYID0gdGhyZXNob2xkWSAvIDMyO1xuXHRcdFx0c3BlZWRYID0gLXRnZENhbGNDbGFtcChzcGVlZFgsIC10aHJlc2hvbGRYLCArdGhyZXNob2xkWCk7XG5cdFx0XHRzcGVlZFkgPSB0Z2RDYWxjQ2xhbXAoc3BlZWRZLCAwLCArdGhyZXNob2xkWSkgKyAwLjAxO1xuXHRcdFx0cHJnLnVuaWZvcm0yZihcInVuaVNwZWVkXCIsIC1zcGVlZFgsIC1zcGVlZFkpO1xuXHRcdFx0aWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcblx0XHRcdFx0cHJnLnVuaWZvcm0yZihcInVuaUNlbnRlclwiLCA5LCA5KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54O1xuXHRcdFx0XHRpZiAoeCA8IDApIHggPSAteCAqIHg7XG5cdFx0XHRcdGVsc2UgeCAqPSB4O1xuXHRcdFx0XHR4ICo9IDAuMTI1O1xuXHRcdFx0XHRwcmcudW5pZm9ybTJmKFwidW5pQ2VudGVyXCIsIHgsIC0xLjEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCB0ZXh0dXJlRkIgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQsIHtcblx0XHRwYXJhbXM6IHtcblx0XHRcdG1pbkZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdH0sXG5cdFx0c3RvcmFnZToge1xuXHRcdFx0Zm9ybWF0OiBpczMyYml0cyA/IFwiUjMyRiAvIFJFRCAvIEZMT0FUXCIgOiBcIlIxNkYgLyBSRUQgLyBGTE9BVFwiLFxuXHRcdH0sXG5cdH0pO1xuXHRjb25zdCBmcmFtZWJ1ZmZlciA9IG5ldyBUZ2RQYWludGVyRnJhbWVidWZmZXIoY29udGV4dCwge1xuXHRcdGFudGlBbGlhc2luZzogZmFsc2UsXG5cdFx0dGV4dHVyZUNvbG9yMDogdGV4dHVyZUZCLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdFx0YmxlbmQ6IFwiYWRkXCIsXG5cdFx0XHRcdGNoaWxkcmVuOiBbY2xlYXIsIHBhcnRpY2xlc10sXG5cdFx0XHR9KSxcblx0XHRdLFxuXHR9KTtcblx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0d3JhcFI6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFM6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdFx0d3JhcFQ6IFwiQ0xBTVBfVE9fRURHRVwiLFxuXHRcdH0sXG5cdH0pLmxvYWRCaXRtYXAoXG5cdFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDAwXCIsIFwiI2YwMFwiLCBcIiNmOTJcIiwgXCIjZWUzXCIsIFwiI2ZmNFwiLCBcIiNmZmZcIl0pLFxuXHQpO1xuXHRjb25zdCBmaWx0ZXJzID0gbmV3IFRnZFBhaW50ZXJGaWx0ZXIoY29udGV4dCwge1xuXHRcdGZsaXBZOiB0cnVlLFxuXHRcdHRleHR1cmU6IGZyYW1lYnVmZmVyLnRleHR1cmVDb2xvcjAsXG5cdFx0ZmlsdGVyczogW1xuXHRcdFx0bmV3IFRnZEZpbHRlcih7XG5cdFx0XHRcdHRleHR1cmVzOiB7XG5cdFx0XHRcdFx0dGV4UGFsZXR0ZTogcGFsZXR0ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXJDb2RlOiBbXG5cdFx0XHRcdFx0XCJmbG9hdCB1ID0gY2xhbXAodGV4dHVyZSh1bmlUZXh0dXJlLCB2YXJVVikuciwgMC4wLCAxLjApO1wiLFxuXHRcdFx0XHRcdC8vIFwiZmxvYXQgdTIgPSB1ICogdTtcIixcblx0XHRcdFx0XHQvLyBcInUgPSBtaXgodSwgdTIsIHZhclVWLnkgKiAxLjApO1wiLFxuXHRcdFx0XHRcdFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh0ZXhQYWxldHRlLCB2ZWMyKHUsIHUpKTtcIixcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChjbGVhciwgZnJhbWVidWZmZXIsIGZpbHRlcnMpO1xuXHRjb250ZXh0LnBsYXkoKTtcbn1cbi8vICNlbmRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+O1xufVxuXG5mdW5jdGlvbiBtYWtlRGF0YXNldChjb3VudDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogVGdkRGF0YXNldCB7XG5cdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0YXR0UG9zaXRpb246IFwidmVjMlwiLFxuXHRcdGF0dFNwZWVkOiBcInZlYzJcIixcblx0XHRhdHRCaXJ0aDogXCJmbG9hdFwiLFxuXHRcdGF0dFJhbmRvbTogXCJ2ZWMyXCIsXG5cdH0pO1xuXHRjb25zdCBhdHRQb3NpdGlvbjogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgYXR0U3BlZWQ6IG51bWJlcltdID0gW107XG5cdGNvbnN0IGF0dEJpcnRoOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCBhdHRSYW5kb206IG51bWJlcltdID0gW107XG5cdGNvbnN0IHJuZCA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiB0Z2RDYWxjUmFuZG9tKG1pbiwgbWF4KTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0YXR0UG9zaXRpb24ucHVzaCg5LCA5KTtcblx0XHRhdHRTcGVlZC5wdXNoKHJuZCgtMC4xLCArMC4xKSwgcm5kKC0wLjEsICswLjEpKTtcblx0XHRhdHRCaXJ0aC5wdXNoKCgtaSAvIGNvdW50KSAqIGR1cmF0aW9uKTtcblx0XHRhdHRSYW5kb20ucHVzaChybmQoKSwgcm5kKCkpO1xuXHR9XG5cdGRhdGFzZXQuc2V0KFwiYXR0UG9zaXRpb25cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpO1xuXHRkYXRhc2V0LnNldChcImF0dFNwZWVkXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKTtcblx0ZGF0YXNldC5zZXQoXCJhdHRCaXJ0aFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSk7XG5cdGRhdGFzZXQuc2V0KFwiYXR0UmFuZG9tXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSk7XG5cdHJldHVybiBkYXRhc2V0O1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjQ2xhbXAiLCJ0Z2RDYWxjUmFuZG9tIiwidGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZSIsInRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSIsIlRnZERhdGFzZXQiLCJUZ2RGaWx0ZXIiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyRmlsdGVyIiwiVGdkUGFpbnRlckZyYW1lYnVmZmVyIiwiVGdkUGFpbnRlclBhcnRpY2xlcyIsIlRnZFBhaW50ZXJTdGF0ZSIsIlRnZFNoYWRlckZyYWdtZW50IiwiVGdkU2hhZGVyVmVydGV4IiwiVGdkVGV4dHVyZTJEIiwiVGdkVGltZSIsIlZpZXciLCJEVVJBVElPTiIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiZXh0ZW5zaW9ucyIsIl9pdGVyYXRvckVycm9yIiwibmFtZSIsImV4dCIsIkVycm9yIiwiY2xlYXIiLCJpczMyYml0cyIsImRhdGFzZXQiLCJtYWtlRGF0YXNldCIsInZpcnR1YWxUaW1lIiwicGFydGljbGVzIiwic2V0VW5pZm9ybXMiLCJfdGltZSIsImRlbHRhIiwicHJnIiwiTWF0aCIsIl9jb250ZXh0X2lucHV0c19wb2ludGVyIiwic3BlZWRYIiwic3BlZWRZIiwiZmFjdG9yIiwidGhyZXNob2xkWSIsInRocmVzaG9sZFgiLCJ4IiwidGV4dHVyZUZCIiwiZnJhbWVidWZmZXIiLCJwYWxldHRlIiwiZmlsdGVycyIsImNvdW50IiwiZHVyYXRpb24iLCJhdHRQb3NpdGlvbiIsImF0dFNwZWVkIiwiYXR0QmlydGgiLCJhdHRSYW5kb20iLCJybmQiLCJtaW4iLCJtYXgiLCJpIiwiRmxvYXQzMkFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3ZCO0FBRTlCLElBQU1JLFFBQVE7SUFBQyxhQUFZO0FBQTJ1SztBQUN0d0ssSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osc0NBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7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