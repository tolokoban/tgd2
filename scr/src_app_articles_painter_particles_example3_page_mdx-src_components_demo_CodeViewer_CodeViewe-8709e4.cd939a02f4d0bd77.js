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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/_/main.demo/main.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Move your mouse around to start a fire."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_main_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/particles/example3/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYXJ0aWNsZXNfZXhhbXBsZTNfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZS04NzA5ZTQuY2Q5MzlhMDJmNGQwYmQ3Ny5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3BhcnRpY2xlcy9leGFtcGxlMy9fL21haW4uZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL18vbWFpbi5kZW1vL21haW4uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFydGljbGVzL2V4YW1wbGUzL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYWluLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IGV4dGVuc2lvbnMgPSBbXFxcIkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXFwiLCBcXFwiRVhUX2Zsb2F0X2JsZW5kXFxcIl07XFxuXFx0Zm9yIChjb25zdCBuYW1lIG9mIGV4dGVuc2lvbnMpIHtcXG5cXHRcXHRjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKTtcXG5cXHRcXHRpZiAoIWV4dCkgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb24gJHtuYW1lfSBub3Qgc3VwcG9ydGVkYCk7XFxuXFx0fVxcblxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXG5cXHRjb25zdCBpczMyYml0cyA9IGZhbHNlO1xcblxcdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChpczMyYml0cyA/IDUwMDAwIDogODAwMDAsIERVUkFUSU9OKTtcXG5cXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XFxuXFx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQsXFxuXFx0XFx0ZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcblxcdFxcdHNoYWRlcjoge1xcblxcdFxcdFxcdHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcblxcdFxcdFxcdFxcdGZ1bmN0aW9uczoge1xcblxcdFxcdFxcdFxcdFxcdC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcblxcdFxcdFxcdFxcdFxcdGNvbXB1dGVTaXplOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiLy8gMSAtIDQqKCh4LTEpXjItMC41KV4yXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgdCA9IHggLSAxLjA7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgYSA9IHQgKiB0IC0gMC41O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInJldHVybiAxLjAgLSA0LjAgKiBhICogYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIn1cXFwiLFxcblxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR1bmlmb3Jtczoge1xcblxcdFxcdFxcdFxcdFxcdHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuXFx0XFx0XFx0XFx0dmFyeWluZzogeyB2YXJBbHBoYTogXFxcImZsb2F0XFxcIiB9LFxcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0YGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMiArIC44ICogY29tcHV0ZVNpemUobGlmZSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiAyLjAgKiAoLjc1ICsgbGlmZSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0YHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIik7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQueHkgLSB2ZWMyKC41KSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgZGlzdCA9IGRvdChwLCBwKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRgZmxvYXQgdmFsdWUgPSAoMS4wIC8gJHtpczMyYml0cyA/IFxcXCIyMC4wXFxcIiA6IFxcXCI4LjBcXFwifSkgLyAyNTUuMDtgLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YWx1ZSAqPSAxLjAgLSBkaXN0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhbHVlICo9IHZhckFscGhhO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcImZsb2F0IHkgPSAwLjUgKiAoMS4wICsgdmFyUG9zaXRpb24ueSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwiZmxvYXQgaCA9IDAuMTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJ5ID0gaCArICgxLjAgLSBoKSAqIHk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwidmFsdWUgKj0gMS4wIC0geTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcblxcdFxcdFxcdGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcblxcdFxcdFxcdFxcdHZpcnR1YWxUaW1lLnJlc2V0KCk7XFxuXFx0XFx0XFx0XFx0dmlydHVhbFRpbWUuc3BlZWQgPSAxO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNCk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpO1xcblxcdFxcdFxcdGxldCB7IHNwZWVkWCwgc3BlZWRZIH0gPSBjb250ZXh0LmlucHV0cy5wb2ludGVyO1xcblxcdFxcdFxcdGNvbnN0IGZhY3RvciA9IC0xZTU7XFxuXFx0XFx0XFx0c3BlZWRYICo9IGZhY3RvcjtcXG5cXHRcXHRcXHRzcGVlZFkgPSBmYWN0b3IgKiBNYXRoLmFicyhzcGVlZFkpO1xcblxcdFxcdFxcdGNvbnN0IHRocmVzaG9sZFkgPSAwLjE7XFxuXFx0XFx0XFx0Y29uc3QgdGhyZXNob2xkWCA9IHRocmVzaG9sZFkgLyAzMjtcXG5cXHRcXHRcXHRzcGVlZFggPSAtdGdkQ2FsY0NsYW1wKHNwZWVkWCwgLXRocmVzaG9sZFgsICt0aHJlc2hvbGRYKTtcXG5cXHRcXHRcXHRzcGVlZFkgPSB0Z2RDYWxjQ2xhbXAoc3BlZWRZLCAwLCArdGhyZXNob2xkWSkgKyAwLjAxO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgLXNwZWVkWCwgLXNwZWVkWSk7XFxuXFx0XFx0XFx0aWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcXG5cXHRcXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCA5LCA5KTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54O1xcblxcdFxcdFxcdFxcdGlmICh4IDwgMCkgeCA9IC14ICogeDtcXG5cXHRcXHRcXHRcXHRlbHNlIHggKj0geDtcXG5cXHRcXHRcXHRcXHR4ICo9IDAuMTI1O1xcblxcdFxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIHgsIC0xLjEpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0XFx0c3RvcmFnZToge1xcblxcdFxcdFxcdGZvcm1hdDogaXMzMmJpdHMgPyBcXFwiUjMyRiAvIFJFRCAvIEZMT0FUXFxcIiA6IFxcXCJSMTZGIC8gUkVEIC8gRkxPQVRcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHRhbnRpQWxpYXNpbmc6IGZhbHNlLFxcblxcdFxcdHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGJsZW5kOiBcXFwiYWRkXFxcIixcXG5cXHRcXHRcXHRcXHRjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdF0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoXFxuXFx0XFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pLFxcblxcdCk7XFxuXFx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcblxcdFxcdGZpbHRlcnM6IFtcXG5cXHRcXHRcXHRuZXcgVGdkRmlsdGVyKHtcXG5cXHRcXHRcXHRcXHR0ZXh0dXJlczoge1xcblxcdFxcdFxcdFxcdFxcdHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRmcmFnbWVudFNoYWRlckNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJmbG9hdCB1MiA9IHUgKiB1O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcInUgPSBtaXgodSwgdTIsIHZhclVWLnkgKiAxLjApO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcIkZyYWdDb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCB1KSk7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdF0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG59XCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcblxcdHRnZENhbGNDbGFtcCxcXG5cXHR0Z2RDYWxjUmFuZG9tLFxcblxcdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXFxuXFx0dGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2REYXRhc2V0LFxcblxcdFRnZEZpbHRlcixcXG5cXHRUZ2RQYWludGVyQ2xlYXIsXFxuXFx0VGdkUGFpbnRlckZpbHRlcixcXG5cXHRUZ2RQYWludGVyRnJhbWVidWZmZXIsXFxuXFx0VGdkUGFpbnRlclBhcnRpY2xlcyxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkU2hhZGVyRnJhZ21lbnQsXFxuXFx0VGdkU2hhZGVyVmVydGV4LFxcblxcdFRnZFRleHR1cmUyRCxcXG5cXHRUZ2RUaW1lLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG5jb25zdCBEVVJBVElPTiA9IDE7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcblxcdGNvbnN0IGV4dGVuc2lvbnMgPSBbXFxcIkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXFwiLCBcXFwiRVhUX2Zsb2F0X2JsZW5kXFxcIl07XFxuXFx0Zm9yIChjb25zdCBuYW1lIG9mIGV4dGVuc2lvbnMpIHtcXG5cXHRcXHRjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKTtcXG5cXHRcXHRpZiAoIWV4dCkgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb24gJHtuYW1lfSBub3Qgc3VwcG9ydGVkYCk7XFxuXFx0fVxcblxcblxcdGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7IGNvbG9yOiBbMCwgMCwgMCwgMV0sIGRlcHRoOiAxIH0pO1xcblxcdC8vIGNvbnN0IGlzMzJiaXRzID0gY29udGV4dC5leHRlbnNpb25zLkVYVF9jb2xvcl9idWZmZXJfZmxvYXRcXG5cXHRjb25zdCBpczMyYml0cyA9IGZhbHNlO1xcblxcdGNvbnN0IGRhdGFzZXQ6IFRnZERhdGFzZXQgPSBtYWtlRGF0YXNldChpczMyYml0cyA/IDUwMDAwIDogODAwMDAsIERVUkFUSU9OKTtcXG5cXHRjb25zdCB2aXJ0dWFsVGltZSA9IG5ldyBUZ2RUaW1lKHsgY29udGV4dCwgc3BlZWQ6IDAgfSk7XFxuXFx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xcblxcdFxcdGRhdGFzZXQsXFxuXFx0XFx0ZHJhd01vZGU6IFxcXCJQT0lOVFNcXFwiLFxcblxcdFxcdHNoYWRlcjoge1xcblxcdFxcdFxcdHZlcnQ6IG5ldyBUZ2RTaGFkZXJWZXJ0ZXgoe1xcblxcdFxcdFxcdFxcdGZ1bmN0aW9uczoge1xcblxcdFxcdFxcdFxcdFxcdC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxcblxcdFxcdFxcdFxcdFxcdGNvbXB1dGVTaXplOiBbXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcImZsb2F0IGNvbXB1dGVTaXplKGZsb2F0IHgpIHtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFtcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiLy8gMSAtIDQqKCh4LTEpXjItMC41KV4yXFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgdCA9IHggLSAxLjA7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgYSA9IHQgKiB0IC0gMC41O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInJldHVybiAxLjAgLSA0LjAgKiBhICogYTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIn1cXFwiLFxcblxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHR1bmlmb3Jtczoge1xcblxcdFxcdFxcdFxcdFxcdHVuaVRpbWU6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pRGVsdGE6IFxcXCJmbG9hdFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pQ2VudGVyOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dW5pU3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRcXHRcXHRcXHR1bmlTaXplOiBcXFwiZmxvYXRcXFwiLFxcblxcdFxcdFxcdFxcdH0sXFxuXFx0XFx0XFx0XFx0YXR0cmlidXRlczogZGF0YXNldC5nZXRUeXBlUmVjb3JkKCksXFxuXFx0XFx0XFx0XFx0dmFyeWluZzogeyB2YXJBbHBoYTogXFxcImZsb2F0XFxcIiB9LFxcblxcdFxcdFxcdFxcdG1haW5Db2RlOiBbXFxuXFx0XFx0XFx0XFx0XFx0YGZsb2F0IGxpZmUgPSBjbGFtcCgodW5pVGltZSAtIGF0dEJpcnRoKSAqICR7KDEgLyBEVVJBVElPTikudG9GaXhlZCg2KX0sIDAuMCwgMS4wKTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZ2xfUG9zaXRpb24gPSB2ZWM0KGF0dFBvc2l0aW9uLCAwLCAxKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJnbF9Qb2ludFNpemUgPSB1bmlTaXplICogKDAuMiArIC44ICogY29tcHV0ZVNpemUobGlmZSkpO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiAyLjAgKiAoLjc1ICsgbGlmZSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiaWYgKGxpZmUgPj0gMS4wKSB7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRbXFxuXFx0XFx0XFx0XFx0XFx0XFx0YHZhckJpcnRoID0gdW5pVGltZSArIGF0dFJhbmRvbS54ICogJHtEVVJBVElPTi50b0ZpeGVkKDMpfTtgLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJQb3NpdGlvbiA9IHVuaUNlbnRlcjtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcXCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcInZlYzIgc2hpZnQgPSAwLjMgKiB2ZWMyKFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0W1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcXCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxcIik7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXFwidmFyU3BlZWQgKz0gc2hpZnQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ9XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdFxcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XFxuXFx0XFx0XFx0XFx0bWFpbkNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwidmVjMiBwID0gMi4wICogKGdsX1BvaW50Q29vcmQueHkgLSB2ZWMyKC41KSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgZGlzdCA9IGRvdChwLCBwKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHRgZmxvYXQgdmFsdWUgPSAoMS4wIC8gJHtpczMyYml0cyA/IFxcXCIyMC4wXFxcIiA6IFxcXCI4LjBcXFwifSkgLyAyNTUuMDtgLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJ2YWx1ZSAqPSAxLjAgLSBkaXN0O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcInZhbHVlICo9IHZhckFscGhhO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcImZsb2F0IHkgPSAwLjUgKiAoMS4wICsgdmFyUG9zaXRpb24ueSk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwiZmxvYXQgaCA9IDAuMTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJ5ID0gaCArICgxLjAgLSBoKSAqIHk7XFxcIixcXG5cXHRcXHRcXHRcXHRcXHQvLyBcXFwidmFsdWUgKj0gMS4wIC0geTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdFxcXCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdF0sXFxuXFx0XFx0XFx0fSksXFxuXFx0XFx0fSxcXG5cXHRcXHRzZXRVbmlmb3JtczogKHsgX3RpbWUsIGRlbHRhLCBwcmcgfSkgPT4ge1xcblxcdFxcdFxcdGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xcblxcdFxcdFxcdFxcdHZpcnR1YWxUaW1lLnJlc2V0KCk7XFxuXFx0XFx0XFx0XFx0dmlydHVhbFRpbWUuc3BlZWQgPSAxO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRwcmcudW5pZm9ybTFmKFxcXCJ1bmlTaXplXFxcIiwgTWF0aC5taW4oY29udGV4dC53aWR0aCwgY29udGV4dC5oZWlnaHQpIC8gNCk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pRGVsdGFcXFwiLCBkZWx0YSk7XFxuXFx0XFx0XFx0cHJnLnVuaWZvcm0xZihcXFwidW5pVGltZVxcXCIsIHZpcnR1YWxUaW1lLnNlY29uZHMpO1xcblxcdFxcdFxcdGxldCB7IHNwZWVkWCwgc3BlZWRZIH0gPSBjb250ZXh0LmlucHV0cy5wb2ludGVyO1xcblxcdFxcdFxcdGNvbnN0IGZhY3RvciA9IC0xZTU7XFxuXFx0XFx0XFx0c3BlZWRYICo9IGZhY3RvcjtcXG5cXHRcXHRcXHRzcGVlZFkgPSBmYWN0b3IgKiBNYXRoLmFicyhzcGVlZFkpO1xcblxcdFxcdFxcdGNvbnN0IHRocmVzaG9sZFkgPSAwLjE7XFxuXFx0XFx0XFx0Y29uc3QgdGhyZXNob2xkWCA9IHRocmVzaG9sZFkgLyAzMjtcXG5cXHRcXHRcXHRzcGVlZFggPSAtdGdkQ2FsY0NsYW1wKHNwZWVkWCwgLXRocmVzaG9sZFgsICt0aHJlc2hvbGRYKTtcXG5cXHRcXHRcXHRzcGVlZFkgPSB0Z2RDYWxjQ2xhbXAoc3BlZWRZLCAwLCArdGhyZXNob2xkWSkgKyAwLjAxO1xcblxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxcInVuaVNwZWVkXFxcIiwgLXNwZWVkWCwgLXNwZWVkWSk7XFxuXFx0XFx0XFx0aWYgKHNwZWVkWCA9PT0gMCAmJiBzcGVlZFkgPT09IDApIHtcXG5cXHRcXHRcXHRcXHRwcmcudW5pZm9ybTJmKFxcXCJ1bmlDZW50ZXJcXFwiLCA5LCA5KTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdGxldCB4ID0gY29udGV4dC5pbnB1dHMucG9pbnRlci54O1xcblxcdFxcdFxcdFxcdGlmICh4IDwgMCkgeCA9IC14ICogeDtcXG5cXHRcXHRcXHRcXHRlbHNlIHggKj0geDtcXG5cXHRcXHRcXHRcXHR4ICo9IDAuMTI1O1xcblxcdFxcdFxcdFxcdHByZy51bmlmb3JtMmYoXFxcInVuaUNlbnRlclxcXCIsIHgsIC0xLjEpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9LFxcblxcdH0pO1xcblxcdGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdFxcdG1hZ0ZpbHRlcjogXFxcIk5FQVJFU1RcXFwiLFxcblxcdFxcdH0sXFxuXFx0XFx0c3RvcmFnZToge1xcblxcdFxcdFxcdGZvcm1hdDogaXMzMmJpdHMgPyBcXFwiUjMyRiAvIFJFRCAvIEZMT0FUXFxcIiA6IFxcXCJSMTZGIC8gUkVEIC8gRkxPQVRcXFwiLFxcblxcdFxcdH0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcXG5cXHRcXHRhbnRpQWxpYXNpbmc6IGZhbHNlLFxcblxcdFxcdHRleHR1cmVDb2xvcjA6IHRleHR1cmVGQixcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcblxcdFxcdFxcdFxcdGJsZW5kOiBcXFwiYWRkXFxcIixcXG5cXHRcXHRcXHRcXHRjaGlsZHJlbjogW2NsZWFyLCBwYXJ0aWNsZXNdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdF0sXFxuXFx0fSk7XFxuXFx0Y29uc3QgcGFsZXR0ZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xcblxcdFxcdHBhcmFtczoge1xcblxcdFxcdFxcdG1pbkZpbHRlcjogXFxcIkxJTkVBUlxcXCIsXFxuXFx0XFx0XFx0bWFnRmlsdGVyOiBcXFwiTElORUFSXFxcIixcXG5cXHRcXHRcXHR3cmFwUjogXFxcIkNMQU1QX1RPX0VER0VcXFwiLFxcblxcdFxcdFxcdHdyYXBTOiBcXFwiQ0xBTVBfVE9fRURHRVxcXCIsXFxuXFx0XFx0XFx0d3JhcFQ6IFxcXCJDTEFNUF9UT19FREdFXFxcIixcXG5cXHRcXHR9LFxcblxcdH0pLmxvYWRCaXRtYXAoXFxuXFx0XFx0dGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXFxcIiMwMDBcXFwiLCBcXFwiI2YwMFxcXCIsIFxcXCIjZjkyXFxcIiwgXFxcIiNlZTNcXFwiLCBcXFwiI2ZmNFxcXCIsIFxcXCIjZmZmXFxcIl0pLFxcblxcdCk7XFxuXFx0Y29uc3QgZmlsdGVycyA9IG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHtcXG5cXHRcXHRmbGlwWTogdHJ1ZSxcXG5cXHRcXHR0ZXh0dXJlOiBmcmFtZWJ1ZmZlci50ZXh0dXJlQ29sb3IwLFxcblxcdFxcdGZpbHRlcnM6IFtcXG5cXHRcXHRcXHRuZXcgVGdkRmlsdGVyKHtcXG5cXHRcXHRcXHRcXHR0ZXh0dXJlczoge1xcblxcdFxcdFxcdFxcdFxcdHRleFBhbGV0dGU6IHBhbGV0dGUsXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHRcXHRmcmFnbWVudFNoYWRlckNvZGU6IFtcXG5cXHRcXHRcXHRcXHRcXHRcXFwiZmxvYXQgdSA9IGNsYW1wKHRleHR1cmUodW5pVGV4dHVyZSwgdmFyVVYpLnIsIDAuMCwgMS4wKTtcXFwiLFxcblxcdFxcdFxcdFxcdFxcdC8vIFxcXCJmbG9hdCB1MiA9IHUgKiB1O1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0Ly8gXFxcInUgPSBtaXgodSwgdTIsIHZhclVWLnkgKiAxLjApO1xcXCIsXFxuXFx0XFx0XFx0XFx0XFx0XFxcIkZyYWdDb2xvciA9IHRleHR1cmUodGV4UGFsZXR0ZSwgdmVjMih1LCB1KSk7XFxcIixcXG5cXHRcXHRcXHRcXHRdLFxcblxcdFxcdFxcdH0pLFxcblxcdFxcdF0sXFxuXFx0fSk7XFxuXFx0Y29udGV4dC5hZGQoY2xlYXIsIGZyYW1lYnVmZmVyLCBmaWx0ZXJzKTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz47XFxufVxcblxcbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcXG5cXHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xcblxcdFxcdGF0dFBvc2l0aW9uOiBcXFwidmVjMlxcXCIsXFxuXFx0XFx0YXR0U3BlZWQ6IFxcXCJ2ZWMyXFxcIixcXG5cXHRcXHRhdHRCaXJ0aDogXFxcImZsb2F0XFxcIixcXG5cXHRcXHRhdHRSYW5kb206IFxcXCJ2ZWMyXFxcIixcXG5cXHR9KTtcXG5cXHRjb25zdCBhdHRQb3NpdGlvbjogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBhdHRCaXJ0aDogbnVtYmVyW10gPSBbXTtcXG5cXHRjb25zdCBhdHRSYW5kb206IG51bWJlcltdID0gW107XFxuXFx0Y29uc3Qgcm5kID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpO1xcblxcdGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xcblxcdFxcdGF0dFBvc2l0aW9uLnB1c2goOSwgOSk7XFxuXFx0XFx0YXR0U3BlZWQucHVzaChybmQoLTAuMSwgKzAuMSksIHJuZCgtMC4xLCArMC4xKSk7XFxuXFx0XFx0YXR0QmlydGgucHVzaCgoLWkgLyBjb3VudCkgKiBkdXJhdGlvbik7XFxuXFx0XFx0YXR0UmFuZG9tLnB1c2gocm5kKCksIHJuZCgpKTtcXG5cXHR9XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dFBvc2l0aW9uXFxcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRQb3NpdGlvbikpO1xcblxcdGRhdGFzZXQuc2V0KFxcXCJhdHRTcGVlZFxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0U3BlZWQpKTtcXG5cXHRkYXRhc2V0LnNldChcXFwiYXR0QmlydGhcXFwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dEJpcnRoKSk7XFxuXFx0ZGF0YXNldC5zZXQoXFxcImF0dFJhbmRvbVxcXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0UmFuZG9tKSk7XFxuXFx0cmV0dXJuIGRhdGFzZXQ7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0Z2RDYWxjQ2xhbXAsXG5cdHRnZENhbGNSYW5kb20sXG5cdHRnZENhbnZhc0NyZWF0ZVBhbGV0dGUsXG5cdHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RGaWx0ZXIsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlckZpbHRlcixcblx0VGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuXHRUZ2RQYWludGVyUGFydGljbGVzLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHRUZ2RTaGFkZXJWZXJ0ZXgsXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVGltZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBWaWV3LCB7IHR5cGUgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG5jb25zdCBEVVJBVElPTiA9IDE7XG5cbi8vICNiZWdpblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuXHRjb25zdCBleHRlbnNpb25zID0gW1wiRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFwiLCBcIkVYVF9mbG9hdF9ibGVuZFwiXTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIGV4dGVuc2lvbnMpIHtcblx0XHRjb25zdCBleHQgPSBjb250ZXh0LmdsLmdldEV4dGVuc2lvbihuYW1lKTtcblx0XHRpZiAoIWV4dCkgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb24gJHtuYW1lfSBub3Qgc3VwcG9ydGVkYCk7XG5cdH1cblxuXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwgeyBjb2xvcjogWzAsIDAsIDAsIDFdLCBkZXB0aDogMSB9KTtcblx0Ly8gY29uc3QgaXMzMmJpdHMgPSBjb250ZXh0LmV4dGVuc2lvbnMuRVhUX2NvbG9yX2J1ZmZlcl9mbG9hdFxuXHRjb25zdCBpczMyYml0cyA9IGZhbHNlO1xuXHRjb25zdCBkYXRhc2V0OiBUZ2REYXRhc2V0ID0gbWFrZURhdGFzZXQoaXMzMmJpdHMgPyA1MDAwMCA6IDgwMDAwLCBEVVJBVElPTik7XG5cdGNvbnN0IHZpcnR1YWxUaW1lID0gbmV3IFRnZFRpbWUoeyBjb250ZXh0LCBzcGVlZDogMCB9KTtcblx0Y29uc3QgcGFydGljbGVzID0gbmV3IFRnZFBhaW50ZXJQYXJ0aWNsZXMoY29udGV4dCwge1xuXHRcdGRhdGFzZXQsXG5cdFx0ZHJhd01vZGU6IFwiUE9JTlRTXCIsXG5cdFx0c2hhZGVyOiB7XG5cdFx0XHR2ZXJ0OiBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdFx0ZnVuY3Rpb25zOiB7XG5cdFx0XHRcdFx0Li4udGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlKCksXG5cdFx0XHRcdFx0Y29tcHV0ZVNpemU6IFtcblx0XHRcdFx0XHRcdFwiZmxvYXQgY29tcHV0ZVNpemUoZmxvYXQgeCkge1wiLFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcIi8vIDEgLSA0KigoeC0xKV4yLTAuNSleMlwiLFxuXHRcdFx0XHRcdFx0XHRcImZsb2F0IHQgPSB4IC0gMS4wO1wiLFxuXHRcdFx0XHRcdFx0XHRcImZsb2F0IGEgPSB0ICogdCAtIDAuNTtcIixcblx0XHRcdFx0XHRcdFx0XCJyZXR1cm4gMS4wIC0gNC4wICogYSAqIGE7XCIsXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0XHR1bmlUaW1lOiBcImZsb2F0XCIsXG5cdFx0XHRcdFx0dW5pRGVsdGE6IFwiZmxvYXRcIixcblx0XHRcdFx0XHR1bmlDZW50ZXI6IFwidmVjMlwiLFxuXHRcdFx0XHRcdHVuaVNwZWVkOiBcInZlYzJcIixcblx0XHRcdFx0XHR1bmlTaXplOiBcImZsb2F0XCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGF0dHJpYnV0ZXM6IGRhdGFzZXQuZ2V0VHlwZVJlY29yZCgpLFxuXHRcdFx0XHR2YXJ5aW5nOiB7IHZhckFscGhhOiBcImZsb2F0XCIgfSxcblx0XHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XHRgZmxvYXQgbGlmZSA9IGNsYW1wKCh1bmlUaW1lIC0gYXR0QmlydGgpICogJHsoMSAvIERVUkFUSU9OKS50b0ZpeGVkKDYpfSwgMC4wLCAxLjApO2AsXG5cdFx0XHRcdFx0XCJ2YXJBbHBoYSA9IDEuMCAtIGxpZmU7XCIsXG5cdFx0XHRcdFx0XCJnbF9Qb3NpdGlvbiA9IHZlYzQoYXR0UG9zaXRpb24sIDAsIDEpO1wiLFxuXHRcdFx0XHRcdFwiZ2xfUG9pbnRTaXplID0gdW5pU2l6ZSAqICgwLjIgKyAuOCAqIGNvbXB1dGVTaXplKGxpZmUpKTtcIixcblx0XHRcdFx0XHRcInZhclBvc2l0aW9uIC09IGF0dFNwZWVkICogdW5pRGVsdGEgKiAyLjAgKiAoLjc1ICsgbGlmZSk7XCIsXG5cdFx0XHRcdFx0XCJpZiAobGlmZSA+PSAxLjApIHtcIixcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRgdmFyQmlydGggPSB1bmlUaW1lICsgYXR0UmFuZG9tLnggKiAke0RVUkFUSU9OLnRvRml4ZWQoMyl9O2AsXG5cdFx0XHRcdFx0XHRcInZhclBvc2l0aW9uID0gdW5pQ2VudGVyO1wiLFxuXHRcdFx0XHRcdFx0XCJ2YXJTcGVlZCA9IHVuaVNwZWVkICogMWUyO1wiLFxuXHRcdFx0XHRcdFx0XCJ2ZWMyIHNoaWZ0ID0gMC4zICogdmVjMihcIixcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XCJwZXJsaW5Ob2lzZSh2ZWMzKGF0dFJhbmRvbS54eSwgdW5pVGltZSkpLFwiLFxuXHRcdFx0XHRcdFx0XHRcInBlcmxpbk5vaXNlKHZlYzMoYXR0UmFuZG9tLnl4LCB1bmlUaW1lKSlcIixcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcIik7XCIsXG5cdFx0XHRcdFx0XHRcInZhclNwZWVkICs9IHNoaWZ0O1wiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJ9XCIsXG5cdFx0XHRcdF0sXG5cdFx0XHR9KSxcblx0XHRcdGZyYWc6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFx0XCJ2ZWMyIHAgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcIixcblx0XHRcdFx0XHRcImZsb2F0IGRpc3QgPSBkb3QocCwgcCk7XCIsXG5cdFx0XHRcdFx0XCJpZiAoZGlzdCA+PSAxLjApIGRpc2NhcmQ7XCIsXG5cdFx0XHRcdFx0YGZsb2F0IHZhbHVlID0gKDEuMCAvICR7aXMzMmJpdHMgPyBcIjIwLjBcIiA6IFwiOC4wXCJ9KSAvIDI1NS4wO2AsXG5cdFx0XHRcdFx0XCJ2YWx1ZSAqPSAxLjAgLSBkaXN0O1wiLFxuXHRcdFx0XHRcdFwidmFsdWUgKj0gdmFyQWxwaGE7XCIsXG5cdFx0XHRcdFx0Ly8gXCJmbG9hdCB5ID0gMC41ICogKDEuMCArIHZhclBvc2l0aW9uLnkpO1wiLFxuXHRcdFx0XHRcdC8vIFwiZmxvYXQgaCA9IDAuMTtcIixcblx0XHRcdFx0XHQvLyBcInkgPSBoICsgKDEuMCAtIGgpICogeTtcIixcblx0XHRcdFx0XHQvLyBcInZhbHVlICo9IDEuMCAtIHk7XCIsXG5cdFx0XHRcdFx0XCJGcmFnQ29sb3IgPSB2ZWM0KHZhbHVlLCAwLjAsIDAuMCwgMS4wKTtcIixcblx0XHRcdFx0XSxcblx0XHRcdH0pLFxuXHRcdH0sXG5cdFx0c2V0VW5pZm9ybXM6ICh7IF90aW1lLCBkZWx0YSwgcHJnIH0pID0+IHtcblx0XHRcdGlmICh2aXJ0dWFsVGltZS5zcGVlZCA9PT0gMCkge1xuXHRcdFx0XHR2aXJ0dWFsVGltZS5yZXNldCgpO1xuXHRcdFx0XHR2aXJ0dWFsVGltZS5zcGVlZCA9IDE7XG5cdFx0XHR9XG5cdFx0XHRwcmcudW5pZm9ybTFmKFwidW5pU2l6ZVwiLCBNYXRoLm1pbihjb250ZXh0LndpZHRoLCBjb250ZXh0LmhlaWdodCkgLyA0KTtcblx0XHRcdHByZy51bmlmb3JtMWYoXCJ1bmlEZWx0YVwiLCBkZWx0YSk7XG5cdFx0XHRwcmcudW5pZm9ybTFmKFwidW5pVGltZVwiLCB2aXJ0dWFsVGltZS5zZWNvbmRzKTtcblx0XHRcdGxldCB7IHNwZWVkWCwgc3BlZWRZIH0gPSBjb250ZXh0LmlucHV0cy5wb2ludGVyO1xuXHRcdFx0Y29uc3QgZmFjdG9yID0gLTFlNTtcblx0XHRcdHNwZWVkWCAqPSBmYWN0b3I7XG5cdFx0XHRzcGVlZFkgPSBmYWN0b3IgKiBNYXRoLmFicyhzcGVlZFkpO1xuXHRcdFx0Y29uc3QgdGhyZXNob2xkWSA9IDAuMTtcblx0XHRcdGNvbnN0IHRocmVzaG9sZFggPSB0aHJlc2hvbGRZIC8gMzI7XG5cdFx0XHRzcGVlZFggPSAtdGdkQ2FsY0NsYW1wKHNwZWVkWCwgLXRocmVzaG9sZFgsICt0aHJlc2hvbGRYKTtcblx0XHRcdHNwZWVkWSA9IHRnZENhbGNDbGFtcChzcGVlZFksIDAsICt0aHJlc2hvbGRZKSArIDAuMDE7XG5cdFx0XHRwcmcudW5pZm9ybTJmKFwidW5pU3BlZWRcIiwgLXNwZWVkWCwgLXNwZWVkWSk7XG5cdFx0XHRpZiAoc3BlZWRYID09PSAwICYmIHNwZWVkWSA9PT0gMCkge1xuXHRcdFx0XHRwcmcudW5pZm9ybTJmKFwidW5pQ2VudGVyXCIsIDksIDkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHggPSBjb250ZXh0LmlucHV0cy5wb2ludGVyLng7XG5cdFx0XHRcdGlmICh4IDwgMCkgeCA9IC14ICogeDtcblx0XHRcdFx0ZWxzZSB4ICo9IHg7XG5cdFx0XHRcdHggKj0gMC4xMjU7XG5cdFx0XHRcdHByZy51bmlmb3JtMmYoXCJ1bmlDZW50ZXJcIiwgeCwgLTEuMSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IHRleHR1cmVGQiA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuXHRcdHBhcmFtczoge1xuXHRcdFx0bWluRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdG1hZ0ZpbHRlcjogXCJORUFSRVNUXCIsXG5cdFx0fSxcblx0XHRzdG9yYWdlOiB7XG5cdFx0XHRmb3JtYXQ6IGlzMzJiaXRzID8gXCJSMzJGIC8gUkVEIC8gRkxPQVRcIiA6IFwiUjE2RiAvIFJFRCAvIEZMT0FUXCIsXG5cdFx0fSxcblx0fSk7XG5cdGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG5cdFx0YW50aUFsaWFzaW5nOiBmYWxzZSxcblx0XHR0ZXh0dXJlQ29sb3IwOiB0ZXh0dXJlRkIsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0XHRibGVuZDogXCJhZGRcIixcblx0XHRcdFx0Y2hpbGRyZW46IFtjbGVhciwgcGFydGljbGVzXSxcblx0XHRcdH0pLFxuXHRcdF0sXG5cdH0pO1xuXHRjb25zdCBwYWxldHRlID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG5cdFx0cGFyYW1zOiB7XG5cdFx0XHRtaW5GaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHRtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG5cdFx0XHR3cmFwUjogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHR3cmFwUzogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0XHR3cmFwVDogXCJDTEFNUF9UT19FREdFXCIsXG5cdFx0fSxcblx0fSkubG9hZEJpdG1hcChcblx0XHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlKFtcIiMwMDBcIiwgXCIjZjAwXCIsIFwiI2Y5MlwiLCBcIiNlZTNcIiwgXCIjZmY0XCIsIFwiI2ZmZlwiXSksXG5cdCk7XG5cdGNvbnN0IGZpbHRlcnMgPSBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7XG5cdFx0ZmxpcFk6IHRydWUsXG5cdFx0dGV4dHVyZTogZnJhbWVidWZmZXIudGV4dHVyZUNvbG9yMCxcblx0XHRmaWx0ZXJzOiBbXG5cdFx0XHRuZXcgVGdkRmlsdGVyKHtcblx0XHRcdFx0dGV4dHVyZXM6IHtcblx0XHRcdFx0XHR0ZXhQYWxldHRlOiBwYWxldHRlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmcmFnbWVudFNoYWRlckNvZGU6IFtcblx0XHRcdFx0XHRcImZsb2F0IHUgPSBjbGFtcCh0ZXh0dXJlKHVuaVRleHR1cmUsIHZhclVWKS5yLCAwLjAsIDEuMCk7XCIsXG5cdFx0XHRcdFx0Ly8gXCJmbG9hdCB1MiA9IHUgKiB1O1wiLFxuXHRcdFx0XHRcdC8vIFwidSA9IG1peCh1LCB1MiwgdmFyVVYueSAqIDEuMCk7XCIsXG5cdFx0XHRcdFx0XCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHRleFBhbGV0dGUsIHZlYzIodSwgdSkpO1wiLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSksXG5cdFx0XSxcblx0fSk7XG5cdGNvbnRleHQuYWRkKGNsZWFyLCBmcmFtZWJ1ZmZlciwgZmlsdGVycyk7XG5cdGNvbnRleHQucGxheSgpO1xufVxuLy8gI2VuZFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz47XG59XG5cbmZ1bmN0aW9uIG1ha2VEYXRhc2V0KGNvdW50OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiBUZ2REYXRhc2V0IHtcblx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRhdHRQb3NpdGlvbjogXCJ2ZWMyXCIsXG5cdFx0YXR0U3BlZWQ6IFwidmVjMlwiLFxuXHRcdGF0dEJpcnRoOiBcImZsb2F0XCIsXG5cdFx0YXR0UmFuZG9tOiBcInZlYzJcIixcblx0fSk7XG5cdGNvbnN0IGF0dFBvc2l0aW9uOiBudW1iZXJbXSA9IFtdO1xuXHRjb25zdCBhdHRTcGVlZDogbnVtYmVyW10gPSBbXTtcblx0Y29uc3QgYXR0QmlydGg6IG51bWJlcltdID0gW107XG5cdGNvbnN0IGF0dFJhbmRvbTogbnVtYmVyW10gPSBbXTtcblx0Y29uc3Qgcm5kID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IHRnZENhbGNSYW5kb20obWluLCBtYXgpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblx0XHRhdHRQb3NpdGlvbi5wdXNoKDksIDkpO1xuXHRcdGF0dFNwZWVkLnB1c2gocm5kKC0wLjEsICswLjEpLCBybmQoLTAuMSwgKzAuMSkpO1xuXHRcdGF0dEJpcnRoLnB1c2goKC1pIC8gY291bnQpICogZHVyYXRpb24pO1xuXHRcdGF0dFJhbmRvbS5wdXNoKHJuZCgpLCBybmQoKSk7XG5cdH1cblx0ZGF0YXNldC5zZXQoXCJhdHRQb3NpdGlvblwiLCBuZXcgRmxvYXQzMkFycmF5KGF0dFBvc2l0aW9uKSk7XG5cdGRhdGFzZXQuc2V0KFwiYXR0U3BlZWRcIiwgbmV3IEZsb2F0MzJBcnJheShhdHRTcGVlZCkpO1xuXHRkYXRhc2V0LnNldChcImF0dEJpcnRoXCIsIG5ldyBGbG9hdDMyQXJyYXkoYXR0QmlydGgpKTtcblx0ZGF0YXNldC5zZXQoXCJhdHRSYW5kb21cIiwgbmV3IEZsb2F0MzJBcnJheShhdHRSYW5kb20pKTtcblx0cmV0dXJuIGRhdGFzZXQ7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNDbGFtcCIsInRnZENhbGNSYW5kb20iLCJ0Z2RDYW52YXNDcmVhdGVQYWxldHRlIiwidGdkQ29kZUZ1bmN0aW9uX3Blcmxpbk5vaXNlIiwiVGdkRGF0YXNldCIsIlRnZEZpbHRlciIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJGaWx0ZXIiLCJUZ2RQYWludGVyRnJhbWVidWZmZXIiLCJUZ2RQYWludGVyUGFydGljbGVzIiwiVGdkUGFpbnRlclN0YXRlIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RUaW1lIiwiVmlldyIsIkRVUkFUSU9OIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJleHRlbnNpb25zIiwiX2l0ZXJhdG9yRXJyb3IiLCJuYW1lIiwiZXh0IiwiRXJyb3IiLCJjbGVhciIsImlzMzJiaXRzIiwiZGF0YXNldCIsIm1ha2VEYXRhc2V0IiwidmlydHVhbFRpbWUiLCJwYXJ0aWNsZXMiLCJzZXRVbmlmb3JtcyIsIl90aW1lIiwiZGVsdGEiLCJwcmciLCJNYXRoIiwiX2NvbnRleHRfaW5wdXRzX3BvaW50ZXIiLCJzcGVlZFgiLCJzcGVlZFkiLCJmYWN0b3IiLCJ0aHJlc2hvbGRZIiwidGhyZXNob2xkWCIsIngiLCJ0ZXh0dXJlRkIiLCJmcmFtZWJ1ZmZlciIsInBhbGV0dGUiLCJmaWx0ZXJzIiwiY291bnQiLCJkdXJhdGlvbiIsImF0dFBvc2l0aW9uIiwiYXR0U3BlZWQiLCJhdHRCaXJ0aCIsImF0dFJhbmRvbSIsInJuZCIsIm1pbiIsIm1heCIsImkiLCJGbG9hdDMyQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDdkI7QUFFOUIsSUFBTUksUUFBUTtJQUFDLGFBQVk7QUFBMnVLO0FBQ3R3SyxJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixzQ0FBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7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