"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_example_retro-futuristic-screen_page_tsx-src_components_demo_Tgd_tgd_module_css-src_c-19a494"], {
44902(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _retro_futuristic_screen__rspack_import_1 = __webpack_require__(91217);


function DemoContainer() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_retro_futuristic_screen__rspack_import_1["default"], {});
}


},
91217(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (RetroFuturisticScreen)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _screen_glb__rspack_import_3 = __webpack_require__(3724);
/* import */ var _dust_webp__rspack_import_4 = __webpack_require__(39285);
/* import */ var _Fuzar_GX_woff2__rspack_import_5 = __webpack_require__(79074);
/* import */ var _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6 = __webpack_require__(43210);
/* import */ var _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7 = __webpack_require__(10741);
/* import */ var _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8 = __webpack_require__(71336);
/* import */ var _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9 = __webpack_require__(46046);
/* import */ var _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10 = __webpack_require__(87481);
/* import */ var _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11 = __webpack_require__(28092);












const COLOR = "#2e6";
function init(context, assets) {
    context.camera.transfo.setPosition(0, 2, 0);
    context.camera.fitSpaceAtTarget(9, 7);
    const clearDepth = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
    });
    const uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    const imageLetters = assets.image.letters;
    const imageDust = assets.image.dust;
    const cameraSkybox = context.camera.clone();
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const painterSkybox = new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        zoom: 0.5,
        tint: [0.6, 0.6, 0.6, 1],
        camera: cameraSkybox,
        texture: skybox,
    });
    const geometry = assets.glb.screen.makeGeometry({
        meshIndex: "Mesh",
    });
    const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        ambientColor: skybox,
    });
    const foot = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                geometry,
                material,
            }),
        ],
    });
    const background = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    const framebuffer = new _tolokoban_tgd__rspack_import_1.TgdPainterFramebuffer(context, {
        antiAliasing: true,
        textureColor0: background,
        children: [painterSkybox, clearDepth, foot],
    });
    const footHoldout = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        color: false,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
                geometry,
                material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat(),
            }),
        ],
    });
    const painterScreen = new PainterScreen(context, {
        uniformCamera,
        imageLetters,
        imageDust,
        assetScreen: assets.glb.screen,
        skybox,
        background,
    });
    context.add(framebuffer, new _tolokoban_tgd__rspack_import_1.TgdPainterFilter(context, { flipY: true, filters: [], texture: background }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [clearDepth, footHoldout, painterScreen],
    }), (time) => {
        const angX = Math.abs(10 * Math.sin(time * 0.341));
        const angY = 30 * Math.sin(time * 0.5);
        context.camera.transfo.setEulerRotation(angX, angY, 0);
        cameraSkybox.zoom = 0.3;
        cameraSkybox.transfo.setEulerRotation(angX, angY + 160, 0);
    });
    context.play();
}
function RetroFuturisticScreen() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { fullscreen: true, onReady: init, options: {
            antialias: true,
            alpha: false,
        }, assets: {
            glb: { screen: _screen_glb__rspack_import_3 },
            image: { dust: _dust_webp__rspack_import_4, imagePosX: _assets_cubemap_1024_electric_board_posX_webp__rspack_import_6, imagePosY: _assets_cubemap_1024_electric_board_posY_webp__rspack_import_7, imagePosZ: _assets_cubemap_1024_electric_board_posZ_webp__rspack_import_8, imageNegX: _assets_cubemap_1024_electric_board_negX_webp__rspack_import_9, imageNegY: _assets_cubemap_1024_electric_board_negY_webp__rspack_import_10, imageNegZ: _assets_cubemap_1024_electric_board_negZ_webp__rspack_import_11 },
        } }));
}
class PainterScreen extends _tolokoban_tgd__rspack_import_1.TgdPainter {
    context;
    textureLetters;
    textureDust;
    program;
    uniformBlock;
    constructor(context, { uniformCamera, imageDust, assetScreen, skybox, background }) {
        super();
        this.context = context;
        const W = 3;
        const H = 2;
        const elements = assetScreen.getMeshPrimitiveIndices("Screen");
        const dataset = assetScreen.makeDataset({
            meshIndex: "Screen",
        });
        dataset.debug();
        const uniformBlock = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObject(context, {
            uniforms: {
                uniTime: "float",
            },
        });
        this.uniformBlock = uniformBlock;
        this.textureLetters = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context, {
            params: {
                magFilter: "LINEAR",
                minFilter: "LINEAR",
                wrapR: "REPEAT",
                wrapS: "REPEAT",
                wrapT: "REPEAT",
            },
        });
        const scale = 512;
        const { ctx, canvas } = (0,_tolokoban_tgd__rspack_import_1.tgdCanvasCreateWithContext2D)(W * scale, H * scale * 2);
        this.initCanvas(canvas, ctx);
        this.loadFont(canvas, ctx);
        this.textureDust = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context).loadBitmap(imageDust);
        this.program = new _tolokoban_tgd__rspack_import_1.TgdPainterProgram(context, {
            drawMode: "TRIANGLES",
            state: {
                blend: "off",
                cull: "off",
            },
            uniforms: { uniformCamera, uniformBlock },
            dataset,
            elements,
            textures: {
                uniTextureDust: this.textureDust,
                uniTextureSkybox: skybox,
                uniTextureLetters: this.textureLetters,
                uniTextureBackground: background,
            },
            varying: {
                varUV: "vec2",
                varNormal: "vec3",
                varPosition: "vec4",
            },
            vert: {
                mainCode: [
                    "varNormal = NORMAL;",
                    "varUV = TEXCOORD_0;",
                    "varPosition = vec4(POSITION, 1.0);",
                    "gl_Position = uniProjectionMatrix * uniModelViewMatrix * varPosition;",
                ],
            },
            frag: {
                functions: {
                    ...(0,_tolokoban_tgd__rspack_import_1.tgdCodeFunction_perlinNoise)(),
                },
                mainCode: [
                    "vec4 color = texture(uniTextureLetters, vec2(1.0, .5) * varUV + vec2(0, 0.05 * uniTime));",
                    "float dist = fract(uniTime) - fract(varUV.y);",
                    "if (dist < 0.0) dist += 1.0;",
                    "dist = 1.0 / (6.0 * dist);",
                    "color.rgb *= dist * (gl_FrontFacing ? 1.0 : 0.15);",
                    "color.rgb *= texture(uniTextureDust, varUV).r;",
                    "FragColor = color;",
                    "if (!gl_FrontFacing) return;",
                    "vec3 N = normalize(varNormal);",
                    "vec3 V = normalize(uniCameraPosition - varPosition.xyz);",
                    "vec3 R = reflect(-V, N);",
                    "vec3 specular = textureLod(uniTextureSkybox, -R, 2.0).rgb;",
                    "specular = pow(specular, vec3(3.0));",
                    "FragColor.rgb += specular * .5;",
                    "FragColor.rgb += vec3(-.1, .05, -.1);",
                    "vec2 uv = gl_FragCoord.xy * uniPixel;",
                    "vec2 xy = varUV * 5.0;",
                    "vec2 shift = vec2(perlinNoise(vec3(xy, 1.0)), perlinNoise(vec3(xy, 2.0)));",
                    "uv += shift * .02;",
                    "FragColor.rgb += texture(uniTextureBackground, uv).rgb;",
                ],
            },
        });
        this.program.debug();
    }
    delete() {
        this.textureLetters.delete();
        this.program.delete();
    }
    paint(time, delta) {
        this.uniformBlock.values.uniTime = time;
        this.program.paint(time, delta);
    }
    initCanvas(canvas, ctx) {
        const { width, height } = canvas;
        const text = "Loading FUZAR...";
        ctx.font = `bold ${width / 12}px monospace`;
        const measure = ctx.measureText(text);
        ctx.fillStyle = COLOR;
        const h = height / 5;
        const x = (width - measure.width) / 2;
        for (let y = h; y < height; y += h) {
            ctx.fillText(text, x, y);
        }
        this.textureLetters.loadBitmap(canvas);
    }
    loadFont(canvas, ctx) {
        (0,_tolokoban_tgd__rspack_import_1.tgdLoadFont)("Fuzar", _Fuzar_GX_woff2__rspack_import_5).then(() => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);
            const fontSize = width / 8;
            const margin = fontSize / 3;
            ctx.font = `italic ${fontSize}px Fuzar`;
            ctx.fillStyle = COLOR;
            let x = margin;
            let y = fontSize * 3;
            let bold = false;
            let italic = false;
            const text = `*Fuzar is the best font ever made in this world of madness. It was engineered by an unknown _genius hidden in a swiss city called Geneva. "0123456789"`;
            for (const word of text.split(" ")) {
                italic = false;
                bold = false;
                if (word.startsWith("_"))
                    italic = true;
                if (word.startsWith("*"))
                    italic = false;
                const cleanWord = removeStyle(word);
                ctx.font = `${bold ? "bold " : ""}${italic ? "italic " : ""} ${fontSize}px Fuzar`;
                const measure = ctx.measureText(`${cleanWord} `);
                if (x > width - measure.width - 2 * margin) {
                    x = margin;
                    y += fontSize;
                }
                ctx.fillText(cleanWord, x, y);
                x += measure.width;
            }
            this.textureLetters.loadBitmap(canvas);
            this.context.paint();
        });
    }
}
function removeStyle(word) {
    while ("*_".includes(word.charAt(0)))
        word = word.slice(1);
    return word;
}


},
79074(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "fnt/Fuzar_GX.5512f2ffa5ec804b.woff2";

},
39285(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/dust.ed99f4c072b755ed.webp";

},
3724(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/screen.e72f494bd8231b3a.glb";

},
46046(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negX.06700db9529bcdaa.webp";

},
87481(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negY.0ad6cb962161f9c0.webp";

},
28092(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/negZ.c885d7942bfe9275.webp";

},
43210(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posX.0e7bfde54d53d335.webp";

},
10741(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posY.055e2c3215eea55e.webp";

},
71336(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/posZ.cf4d6e1fd96419ea.webp";

},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfZXhhbXBsZV9yZXRyby1mdXR1cmlzdGljLXNjcmVlbl9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfYy0xOWE0OTQuMDA4NWY0ZmI4ZTkwZDE2Zi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvZXhhbXBsZS9yZXRyby1mdXR1cmlzdGljLXNjcmVlbi9wYWdlLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2V4YW1wbGUvcmV0cm8tZnV0dXJpc3RpYy1zY3JlZW4vcmV0cm8tZnV0dXJpc3RpYy1zY3JlZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZW1vIGZyb20gXCIuL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gPERlbW8gLz5cbn1cbiIsImltcG9ydCB7XG4gICAgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fZmJtLFxuICAgIHRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkRGF0YUdsYixcbiAgICB0Z2RMb2FkRm9udCxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyV2l0aEFudGlBbGlhc2luZyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyUHJvZ3JhbSxcbiAgICBUZ2RQYWludGVyU2t5Ym94LFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgVGdkVGV4dHVyZUN1YmUsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdCxcbiAgICBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhLFxuICAgIFdlYmdsSW1hZ2UsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgU2NyZWVuVVJMIGZyb20gXCIuL3NjcmVlbi5nbGJcIlxuaW1wb3J0IER1c3RVUkwgZnJvbSBcIi4vZHVzdC53ZWJwXCJcbmltcG9ydCBGdXphckZvbnRVUkwgZnJvbSBcIi4vRnV6YXJfR1gud29mZjJcIlxuaW1wb3J0IGltYWdlUG9zWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1gud2VicFwiIC8vICtYXG5pbXBvcnQgaW1hZ2VQb3NZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWS53ZWJwXCIgLy8gK1lcbmltcG9ydCBpbWFnZVBvc1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NaLndlYnBcIiAvLyArWlxuaW1wb3J0IGltYWdlTmVnWCBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1gud2VicFwiIC8vIC1YXG5pbXBvcnQgaW1hZ2VOZWdZIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWS53ZWJwXCIgLy8gLVlcbmltcG9ydCBpbWFnZU5lZ1ogZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdaLndlYnBcIiAvLyAtWlxuXG5jb25zdCBDT0xPUiA9IFwiIzJlNlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDIsIDApXG4gICAgY29udGV4dC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCg5LCA3KVxuICAgIGNvbnN0IGNsZWFyRGVwdGggPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCB1bmlmb3JtQ2FtZXJhID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmEoY29udGV4dClcbiAgICBjb25zdCBpbWFnZUxldHRlcnMgPSBhc3NldHMuaW1hZ2UubGV0dGVyc1xuICAgIGNvbnN0IGltYWdlRHVzdCA9IGFzc2V0cy5pbWFnZS5kdXN0XG4gICAgY29uc3QgY2FtZXJhU2t5Ym94ID0gY29udGV4dC5jYW1lcmEuY2xvbmUoKVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyU2t5Ym94ID0gbmV3IFRnZFBhaW50ZXJTa3lib3goY29udGV4dCwge1xuICAgICAgICB6b29tOiAwLjUsXG4gICAgICAgIHRpbnQ6IFswLjYsIDAuNiwgMC42LCAxXSxcbiAgICAgICAgY2FtZXJhOiBjYW1lcmFTa3lib3gsXG4gICAgICAgIHRleHR1cmU6IHNreWJveCxcbiAgICB9KVxuICAgIGNvbnN0IGdlb21ldHJ5ID0gYXNzZXRzLmdsYi5zY3JlZW4ubWFrZUdlb21ldHJ5KHtcbiAgICAgICAgbWVzaEluZGV4OiBcIk1lc2hcIixcbiAgICB9KVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRnZE1hdGVyaWFsR2xvYmFsKHtcbiAgICAgICAgYW1iaWVudENvbG9yOiBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBmb290ID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpXG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBuZXcgVGdkUGFpbnRlckZyYW1lYnVmZmVyKGNvbnRleHQsIHtcbiAgICAgICAgYW50aUFsaWFzaW5nOiB0cnVlLFxuICAgICAgICB0ZXh0dXJlQ29sb3IwOiBiYWNrZ3JvdW5kLFxuICAgICAgICBjaGlsZHJlbjogW3BhaW50ZXJTa3lib3gsIGNsZWFyRGVwdGgsIGZvb3RdLFxuICAgIH0pXG4gICAgY29uc3QgZm9vdEhvbGRvdXQgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IGZhbHNlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyU2NyZWVuID0gbmV3IFBhaW50ZXJTY3JlZW4oY29udGV4dCwge1xuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICBpbWFnZUxldHRlcnMsXG4gICAgICAgIGltYWdlRHVzdCxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxuICAgICAgICBza3lib3gsXG4gICAgICAgIGJhY2tncm91bmQsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChcbiAgICAgICAgZnJhbWVidWZmZXIsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyRmlsdGVyKGNvbnRleHQsIHsgZmxpcFk6IHRydWUsIGZpbHRlcnM6IFtdLCB0ZXh0dXJlOiBiYWNrZ3JvdW5kIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXJEZXB0aCwgZm9vdEhvbGRvdXQsIHBhaW50ZXJTY3JlZW5dLFxuICAgICAgICB9KSxcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXG4gICAgICAgICAgICBjYW1lcmFTa3lib3guem9vbSA9IDAuM1xuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxuICAgICAgICAgICAgLy8gcGFpbnRlclNreWJveC50cmFuc2ZvLnNldFNjYWxlKE1hdGguY29zKHRpbWUpKVxuICAgICAgICB9LFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV0cm9GdXR1cmlzdGljU2NyZWVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBmdWxsc2NyZWVuXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBzY3JlZW46IFNjcmVlblVSTCB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGR1c3Q6IER1c3RVUkwsIGltYWdlUG9zWCwgaW1hZ2VQb3NZLCBpbWFnZVBvc1osIGltYWdlTmVnWCwgaW1hZ2VOZWdZLCBpbWFnZU5lZ1ogfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xuICAgIGltYWdlTGV0dGVyczogV2ViZ2xJbWFnZVxuICAgIGltYWdlRHVzdDogV2ViZ2xJbWFnZVxuICAgIHVuaWZvcm1DYW1lcmE6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmFcbiAgICBhc3NldFNjcmVlbjogVGdkRGF0YUdsYlxuICAgIHNreWJveDogVGdkVGV4dHVyZUN1YmVcbiAgICBiYWNrZ3JvdW5kOiBUZ2RUZXh0dXJlMkRcbn1cblxuY2xhc3MgUGFpbnRlclNjcmVlbiBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUxldHRlcnM6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUR1c3Q6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUGFpbnRlclByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHVuaWZvcm1CbG9jazogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdDxcInVuaVRpbWVcIj5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgeyB1bmlmb3JtQ2FtZXJhLCBpbWFnZUR1c3QsIGFzc2V0U2NyZWVuLCBza3lib3gsIGJhY2tncm91bmQgfTogUGFpbnRlclNjcmVlbk9wdGlvbnMsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY29uc3QgVyA9IDNcbiAgICAgICAgY29uc3QgSCA9IDJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcIlNjcmVlblwiKVxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXNzZXRTY3JlZW4ubWFrZURhdGFzZXQoe1xuICAgICAgICAgICAgbWVzaEluZGV4OiBcIlNjcmVlblwiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LmRlYnVnKClcbiAgICAgICAgY29uc3QgdW5pZm9ybUJsb2NrID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jayA9IHVuaWZvcm1CbG9ja1xuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2NhbGUgPSA1MTJcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXICogc2NhbGUsIEggKiBzY2FsZSAqIDIpXG4gICAgICAgIHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy5sb2FkRm9udChjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XG4gICAgICAgICAgICBkcmF3TW9kZTogXCJUUklBTkdMRVNcIixcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmlmb3JtczogeyB1bmlmb3JtQ2FtZXJhLCB1bmlmb3JtQmxvY2sgfSxcbiAgICAgICAgICAgIGRhdGFzZXQsXG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUR1c3Q6IHRoaXMudGV4dHVyZUR1c3QsXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZVNreWJveDogc2t5Ym94LFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVMZXR0ZXJzOiB0aGlzLnRleHR1cmVMZXR0ZXJzLFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVCYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICB2YXJQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVydDoge1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmFyTm9ybWFsID0gTk9STUFMO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclVWID0gVEVYQ09PUkRfMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmFyUG9zaXRpb247XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnOiB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl9wZXJsaW5Ob2lzZSgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGRpc3QgPSBmcmFjdCh1bmlUaW1lKSAtIGZyYWN0KHZhclVWLnkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmIChkaXN0IDwgMC4wKSBkaXN0ICs9IDEuMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLnJnYiAqPSBkaXN0ICogKGdsX0Zyb250RmFjaW5nID8gMS4wIDogMC4xNSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IucmdiICo9IHRleHR1cmUodW5pVGV4dHVyZUR1c3QsIHZhclVWKS5yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmICghZ2xfRnJvbnRGYWNpbmcpIHJldHVybjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIE4gPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgUiA9IHJlZmxlY3QoLVYsIE4pO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgc3BlY3VsYXIgPSB0ZXh0dXJlTG9kKHVuaVRleHR1cmVTa3lib3gsIC1SLCAyLjApLnJnYjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcGVjdWxhciA9IHBvdyhzcGVjdWxhciwgdmVjMygzLjApKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yLnJnYiArPSB2ZWMzKC0uMSwgLjA1LCAtLjEpO1wiLFxuICAgICAgICAgICAgICAgICAgICAvLyBCYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMiB1diA9IGdsX0ZyYWdDb29yZC54eSAqIHVuaVBpeGVsO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzIgeHkgPSB2YXJVViAqIDUuMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHNoaWZ0ID0gdmVjMihwZXJsaW5Ob2lzZSh2ZWMzKHh5LCAxLjApKSwgcGVybGluTm9pc2UodmVjMyh4eSwgMi4wKSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInV2ICs9IHNoaWZ0ICogLjAyO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvci5yZ2IgKz0gdGV4dHVyZSh1bmlUZXh0dXJlQmFja2dyb3VuZCwgdXYpLnJnYjtcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlYnVnKClcbiAgICB9XG5cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMuZGVsZXRlKClcbiAgICAgICAgdGhpcy5wcm9ncmFtLmRlbGV0ZSgpXG4gICAgfVxuXG4gICAgcGFpbnQodGltZTogbnVtYmVyLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudW5pZm9ybUJsb2NrLnZhbHVlcy51bmlUaW1lID0gdGltZVxuICAgICAgICB0aGlzLnByb2dyYW0ucGFpbnQodGltZSwgZGVsdGEpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0Q2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXG4gICAgICAgIGNvbnN0IHRleHQgPSBcIkxvYWRpbmcgRlVaQVIuLi5cIlxuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7d2lkdGggLyAxMn1weCBtb25vc3BhY2VgXG4gICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQodGV4dClcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTE9SXG4gICAgICAgIGNvbnN0IGggPSBoZWlnaHQgLyA1XG4gICAgICAgIGNvbnN0IHggPSAod2lkdGggLSBtZWFzdXJlLndpZHRoKSAvIDJcbiAgICAgICAgZm9yIChsZXQgeSA9IGg7IHkgPCBoZWlnaHQ7IHkgKz0gaCkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRGb250KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRnZExvYWRGb250KFwiRnV6YXJcIiwgRnV6YXJGb250VVJMKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzXG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IHdpZHRoIC8gOFxuICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gZm9udFNpemUgLyAzXG4gICAgICAgICAgICBjdHguZm9udCA9IGBpdGFsaWMgJHtmb250U2l6ZX1weCBGdXphcmBcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBDT0xPUlxuICAgICAgICAgICAgbGV0IHggPSBtYXJnaW5cbiAgICAgICAgICAgIGxldCB5ID0gZm9udFNpemUgKiAzXG4gICAgICAgICAgICBsZXQgYm9sZCA9IGZhbHNlXG4gICAgICAgICAgICBsZXQgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBgKkZ1emFyIGlzIHRoZSBiZXN0IGZvbnQgZXZlciBtYWRlIGluIHRoaXMgd29ybGQgb2YgbWFkbmVzcy4gSXQgd2FzIGVuZ2luZWVyZWQgYnkgYW4gdW5rbm93biBfZ2VuaXVzIGhpZGRlbiBpbiBhIHN3aXNzIGNpdHkgY2FsbGVkIEdlbmV2YS4gXCIwMTIzNDU2Nzg5XCJgXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdvcmQgb2YgdGV4dC5zcGxpdChcIiBcIikpIHtcbiAgICAgICAgICAgICAgICBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGJvbGQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCJfXCIpKSBpdGFsaWMgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcIipcIikpIGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5Xb3JkID0gcmVtb3ZlU3R5bGUod29yZClcbiAgICAgICAgICAgICAgICBjdHguZm9udCA9IGAke2JvbGQgPyBcImJvbGQgXCIgOiBcIlwifSR7aXRhbGljID8gXCJpdGFsaWMgXCIgOiBcIlwifSAke2ZvbnRTaXplfXB4IEZ1emFyYFxuICAgICAgICAgICAgICAgIGNvbnN0IG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQoYCR7Y2xlYW5Xb3JkfSBgKVxuICAgICAgICAgICAgICAgIGlmICh4ID4gd2lkdGggLSBtZWFzdXJlLndpZHRoIC0gMiAqIG1hcmdpbikge1xuICAgICAgICAgICAgICAgICAgICB4ID0gbWFyZ2luXG4gICAgICAgICAgICAgICAgICAgIHkgKz0gZm9udFNpemVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGNsZWFuV29yZCwgeCwgeSlcbiAgICAgICAgICAgICAgICB4ICs9IG1lYXN1cmUud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGN0eC5saW5lV2lkdGggPSAwLjVcbiAgICAgICAgICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9IFwiIzVmNTdcIlxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaCA9IDA7IGggPCBoZWlnaHQ7IGggKz0gZm9udFNpemUgLyA4KSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaCkgKyAwLjVcbiAgICAgICAgICAgIC8vICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgICAgIC8vICAgICBjdHgubW92ZVRvKDAsIHkpXG4gICAgICAgICAgICAvLyAgICAgY3R4LmxpbmVUbyh3aWR0aCwgeSlcbiAgICAgICAgICAgIC8vICAgICBjdHguc3Ryb2tlKClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQucGFpbnQoKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGUod29yZDogc3RyaW5nKSB7XG4gICAgd2hpbGUgKFwiKl9cIi5pbmNsdWRlcyh3b3JkLmNoYXJBdCgwKSkpIHdvcmQgPSB3b3JkLnNsaWNlKDEpXG4gICAgcmV0dXJuIHdvcmRcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBRTdCLFNBQVMsYUFBYTtJQUNqQyxPQUFPLDJDQUFDLG9EQUFJLEtBQUc7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ21Cc0I7QUFFNkI7QUFFaEI7QUFDSDtBQUNVO0FBQzJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUV0RSxNQUFNLEtBQUssR0FBRyxNQUFNO0FBRXBCLFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sVUFBVSxHQUFHLElBQUksK0NBQWUsQ0FBQyxPQUFPLEVBQUU7UUFDNUMsS0FB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