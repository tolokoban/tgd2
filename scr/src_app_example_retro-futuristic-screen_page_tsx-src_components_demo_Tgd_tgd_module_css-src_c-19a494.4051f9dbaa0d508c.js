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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfZXhhbXBsZV9yZXRyby1mdXR1cmlzdGljLXNjcmVlbl9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfYy0xOWE0OTQuNDA1MWY5ZGJhYTBkNTA4Yy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9leGFtcGxlL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuL3BhZ2UudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9leGFtcGxlL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVtbyBmcm9tIFwiLi9yZXRyby1mdXR1cmlzdGljLXNjcmVlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgcmV0dXJuIDxEZW1vIC8+XG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG4gICAgdGdkQ29kZUZ1bmN0aW9uX2ZibSxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFHbGIsXG4gICAgdGdkTG9hZEZvbnQsXG4gICAgVGdkTWF0ZXJpYWxGbGF0LFxuICAgIFRnZE1hdGVyaWFsR2xvYmFsLFxuICAgIFRnZFBhaW50ZXIsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJGaWx0ZXIsXG4gICAgVGdkUGFpbnRlckZyYW1lYnVmZmVyLFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcldpdGhBbnRpQWxpYXNpbmcsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbiAgICBXZWJnbEltYWdlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFwiLi9zY3JlZW4uZ2xiXCJcbmltcG9ydCBEdXN0VVJMIGZyb20gXCIuL2R1c3Qud2VicFwiXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXCIuL0Z1emFyX0dYLndvZmYyXCJcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcIiAvLyArWFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFwiIC8vICtZXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWi53ZWJwXCIgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcIiAvLyAtWFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFwiIC8vIC1ZXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWi53ZWJwXCIgLy8gLVpcblxuY29uc3QgQ09MT1IgPSBcIiMyZTZcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcbiAgICBjb25zdCBjbGVhckRlcHRoID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgdW5pZm9ybUNhbWVyYSA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhKGNvbnRleHQpXG4gICAgY29uc3QgaW1hZ2VMZXR0ZXJzID0gYXNzZXRzLmltYWdlLmxldHRlcnNcbiAgICBjb25zdCBpbWFnZUR1c3QgPSBhc3NldHMuaW1hZ2UuZHVzdFxuICAgIGNvbnN0IGNhbWVyYVNreWJveCA9IGNvbnRleHQuY2FtZXJhLmNsb25lKClcbiAgICBjb25zdCBza3lib3ggPSBuZXcgVGdkVGV4dHVyZUN1YmUoY29udGV4dCwge1xuICAgICAgICBpbWFnZVBvc1g6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1gsXG4gICAgICAgIGltYWdlUG9zWTogYXNzZXRzLmltYWdlLmltYWdlUG9zWSxcbiAgICAgICAgaW1hZ2VQb3NaOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NaLFxuICAgICAgICBpbWFnZU5lZ1g6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1gsXG4gICAgICAgIGltYWdlTmVnWTogYXNzZXRzLmltYWdlLmltYWdlTmVnWSxcbiAgICAgICAgaW1hZ2VOZWdaOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdaLFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcbiAgICAgICAgem9vbTogMC41LFxuICAgICAgICB0aW50OiBbMC42LCAwLjYsIDAuNiwgMV0sXG4gICAgICAgIGNhbWVyYTogY2FtZXJhU2t5Ym94LFxuICAgICAgICB0ZXh0dXJlOiBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XG4gICAgICAgIG1lc2hJbmRleDogXCJNZXNoXCIsXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KVxuICAgIGNvbnN0IGZyYW1lYnVmZmVyID0gbmV3IFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcihjb250ZXh0LCB7XG4gICAgICAgIGFudGlBbGlhc2luZzogdHJ1ZSxcbiAgICAgICAgdGV4dHVyZUNvbG9yMDogYmFja2dyb3VuZCxcbiAgICAgICAgY2hpbGRyZW46IFtwYWludGVyU2t5Ym94LCBjbGVhckRlcHRoLCBmb290XSxcbiAgICB9KVxuICAgIGNvbnN0IGZvb3RIb2xkb3V0ID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZsYXQoKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pXG4gICAgY29uc3QgcGFpbnRlclNjcmVlbiA9IG5ldyBQYWludGVyU2NyZWVuKGNvbnRleHQsIHtcbiAgICAgICAgdW5pZm9ybUNhbWVyYSxcbiAgICAgICAgaW1hZ2VMZXR0ZXJzLFxuICAgICAgICBpbWFnZUR1c3QsXG4gICAgICAgIGFzc2V0U2NyZWVuOiBhc3NldHMuZ2xiLnNjcmVlbixcbiAgICAgICAgc2t5Ym94LFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGZyYW1lYnVmZmVyLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckZpbHRlcihjb250ZXh0LCB7IGZsaXBZOiB0cnVlLCBmaWx0ZXJzOiBbXSwgdGV4dHVyZTogYmFja2dyb3VuZCB9KSxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzXCIsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyRGVwdGgsIGZvb3RIb2xkb3V0LCBwYWludGVyU2NyZWVuXSxcbiAgICAgICAgfSksXG4gICAgICAgICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbmdYID0gTWF0aC5hYnMoMTAgKiBNYXRoLnNpbih0aW1lICogMC4zNDEpKVxuICAgICAgICAgICAgY29uc3QgYW5nWSA9IDMwICogTWF0aC5zaW4odGltZSAqIDAuNSlcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZLCAwKVxuICAgICAgICAgICAgY2FtZXJhU2t5Ym94Lnpvb20gPSAwLjNcbiAgICAgICAgICAgIGNhbWVyYVNreWJveC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oYW5nWCwgYW5nWSArIDE2MCwgMClcbiAgICAgICAgICAgIC8vIHBhaW50ZXJTa3lib3gudHJhbnNmby5zZXRTY2FsZShNYXRoLmNvcyh0aW1lKSlcbiAgICAgICAgfSxcbiAgICApXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldHJvRnV0dXJpc3RpY1NjcmVlbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgZnVsbHNjcmVlblxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgc2NyZWVuOiBTY3JlZW5VUkwgfSxcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBkdXN0OiBEdXN0VVJMLCBpbWFnZVBvc1gsIGltYWdlUG9zWSwgaW1hZ2VQb3NaLCBpbWFnZU5lZ1gsIGltYWdlTmVnWSwgaW1hZ2VOZWdaIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cblxuaW50ZXJmYWNlIFBhaW50ZXJTY3JlZW5PcHRpb25zIHtcbiAgICBpbWFnZUxldHRlcnM6IFdlYmdsSW1hZ2VcbiAgICBpbWFnZUR1c3Q6IFdlYmdsSW1hZ2VcbiAgICB1bmlmb3JtQ2FtZXJhOiBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0Q2FtZXJhXG4gICAgYXNzZXRTY3JlZW46IFRnZERhdGFHbGJcbiAgICBza3lib3g6IFRnZFRleHR1cmVDdWJlXG4gICAgYmFja2dyb3VuZDogVGdkVGV4dHVyZTJEXG59XG5cbmNsYXNzIFBhaW50ZXJTY3JlZW4gZXh0ZW5kcyBUZ2RQYWludGVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVMZXR0ZXJzOiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVEdXN0OiBUZ2RUZXh0dXJlMkRcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFBhaW50ZXJQcm9ncmFtXG4gICAgcHJpdmF0ZSByZWFkb25seSB1bmlmb3JtQmxvY2s6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3Q8XCJ1bmlUaW1lXCI+XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbnRleHQ6IFRnZENvbnRleHQsXG4gICAgICAgIHsgdW5pZm9ybUNhbWVyYSwgaW1hZ2VEdXN0LCBhc3NldFNjcmVlbiwgc2t5Ym94LCBiYWNrZ3JvdW5kIH06IFBhaW50ZXJTY3JlZW5PcHRpb25zLFxuICAgICkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIGNvbnN0IFcgPSAzXG4gICAgICAgIGNvbnN0IEggPSAyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gYXNzZXRTY3JlZW4uZ2V0TWVzaFByaW1pdGl2ZUluZGljZXMoXCJTY3JlZW5cIilcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGFzc2V0U2NyZWVuLm1ha2VEYXRhc2V0KHtcbiAgICAgICAgICAgIG1lc2hJbmRleDogXCJTY3JlZW5cIixcbiAgICAgICAgfSlcbiAgICAgICAgZGF0YXNldC5kZWJ1ZygpXG4gICAgICAgIGNvbnN0IHVuaWZvcm1CbG9jayA9IG5ldyBUZ2RVbmlmb3JtQnVmZmVyT2JqZWN0KGNvbnRleHQsIHtcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgdW5pVGltZTogXCJmbG9hdFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sgPSB1bmlmb3JtQmxvY2tcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycyA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCwge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgbWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIG1pbkZpbHRlcjogXCJMSU5FQVJcIixcbiAgICAgICAgICAgICAgICB3cmFwUjogXCJSRVBFQVRcIixcbiAgICAgICAgICAgICAgICB3cmFwUzogXCJSRVBFQVRcIixcbiAgICAgICAgICAgICAgICB3cmFwVDogXCJSRVBFQVRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHNjYWxlID0gNTEyXG4gICAgICAgIGNvbnN0IHsgY3R4LCBjYW52YXMgfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoVyAqIHNjYWxlLCBIICogc2NhbGUgKiAyKVxuICAgICAgICB0aGlzLmluaXRDYW52YXMoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMubG9hZEZvbnQoY2FudmFzLCBjdHgpXG4gICAgICAgIHRoaXMudGV4dHVyZUR1c3QgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoaW1hZ2VEdXN0KVxuICAgICAgICB0aGlzLnByb2dyYW0gPSBuZXcgVGdkUGFpbnRlclByb2dyYW0oY29udGV4dCwge1xuICAgICAgICAgICAgZHJhd01vZGU6IFwiVFJJQU5HTEVTXCIsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIGJsZW5kOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgIGN1bGw6IFwib2ZmXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHsgdW5pZm9ybUNhbWVyYSwgdW5pZm9ybUJsb2NrIH0sXG4gICAgICAgICAgICBkYXRhc2V0LFxuICAgICAgICAgICAgZWxlbWVudHMsXG4gICAgICAgICAgICB0ZXh0dXJlczoge1xuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVEdXN0OiB0aGlzLnRleHR1cmVEdXN0LFxuICAgICAgICAgICAgICAgIHVuaVRleHR1cmVTa3lib3g6IHNreWJveCxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlTGV0dGVyczogdGhpcy50ZXh0dXJlTGV0dGVycyxcbiAgICAgICAgICAgICAgICB1bmlUZXh0dXJlQmFja2dyb3VuZDogYmFja2dyb3VuZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgIHZhck5vcm1hbDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgdmFyUG9zaXRpb246IFwidmVjNFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZlcnQ6IHtcbiAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICBcInZhck5vcm1hbCA9IE5PUk1BTDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJVViA9IFRFWENPT1JEXzA7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFyUG9zaXRpb24gPSB2ZWM0KFBPU0lUSU9OLCAxLjApO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIHZhclBvc2l0aW9uO1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJhZzoge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAuLi50Z2RDb2RlRnVuY3Rpb25fcGVybGluTm9pc2UoKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmVjNCBjb2xvciA9IHRleHR1cmUodW5pVGV4dHVyZUxldHRlcnMsIHZlYzIoMS4wLCAuNSkgKiB2YXJVViArIHZlYzIoMCwgMC4wNSAqIHVuaVRpbWUpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBkaXN0ID0gZnJhY3QodW5pVGltZSkgLSBmcmFjdCh2YXJVVi55KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoZGlzdCA8IDAuMCkgZGlzdCArPSAxLjA7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzdCA9IDEuMCAvICg2LjAgKiBkaXN0KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvci5yZ2IgKj0gZGlzdCAqIChnbF9Gcm9udEZhY2luZyA/IDEuMCA6IDAuMTUpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLnJnYiAqPSB0ZXh0dXJlKHVuaVRleHR1cmVEdXN0LCB2YXJVVikucjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSBjb2xvcjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZiAoIWdsX0Zyb250RmFjaW5nKSByZXR1cm47XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBOID0gbm9ybWFsaXplKHZhck5vcm1hbCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMyBWID0gbm9ybWFsaXplKHVuaUNhbWVyYVBvc2l0aW9uIC0gdmFyUG9zaXRpb24ueHl6KTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFIgPSByZWZsZWN0KC1WLCBOKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIHNwZWN1bGFyID0gdGV4dHVyZUxvZCh1bmlUZXh0dXJlU2t5Ym94LCAtUiwgMi4wKS5yZ2I7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3BlY3VsYXIgPSBwb3coc3BlY3VsYXIsIHZlYzMoMy4wKSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yLnJnYiArPSBzcGVjdWxhciAqIC41O1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvci5yZ2IgKz0gdmVjMygtLjEsIC4wNSwgLS4xKTtcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gQmFja2dyb3VuZFxuICAgICAgICAgICAgICAgICAgICBcInZlYzIgdXYgPSBnbF9GcmFnQ29vcmQueHkgKiB1bmlQaXhlbDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHh5ID0gdmFyVVYgKiA1LjA7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmVjMiBzaGlmdCA9IHZlYzIocGVybGluTm9pc2UodmVjMyh4eSwgMS4wKSksIHBlcmxpbk5vaXNlKHZlYzMoeHksIDIuMCkpKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1diArPSBzaGlmdCAqIC4wMjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IucmdiICs9IHRleHR1cmUodW5pVGV4dHVyZUJhY2tncm91bmQsIHV2KS5yZ2I7XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWJ1ZygpXG4gICAgfVxuXG4gICAgZGVsZXRlKCkge1xuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmRlbGV0ZSgpXG4gICAgICAgIHRoaXMucHJvZ3JhbS5kZWxldGUoKVxuICAgIH1cblxuICAgIHBhaW50KHRpbWU6IG51bWJlciwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jay52YWx1ZXMudW5pVGltZSA9IHRpbWVcbiAgICAgICAgdGhpcy5wcm9ncmFtLnBhaW50KHRpbWUsIGRlbHRhKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdENhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xuICAgICAgICBjb25zdCB0ZXh0ID0gXCJMb2FkaW5nIEZVWkFSLi4uXCJcbiAgICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke3dpZHRoIC8gMTJ9cHggbW9ub3NwYWNlYFxuICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBDT0xPUlxuICAgICAgICBjb25zdCBoID0gaGVpZ2h0IC8gNVxuICAgICAgICBjb25zdCB4ID0gKHdpZHRoIC0gbWVhc3VyZS53aWR0aCkgLyAyXG4gICAgICAgIGZvciAobGV0IHkgPSBoOyB5IDwgaGVpZ2h0OyB5ICs9IGgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0ZXh0LCB4LCB5KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dHVyZUxldHRlcnMubG9hZEJpdG1hcChjYW52YXMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRm9udChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0Z2RMb2FkRm9udChcIkZ1emFyXCIsIEZ1emFyRm9udFVSTCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhc1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSB3aWR0aCAvIDhcbiAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IGZvbnRTaXplIC8gM1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBgaXRhbGljICR7Zm9udFNpemV9cHggRnV6YXJgXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gQ09MT1JcbiAgICAgICAgICAgIGxldCB4ID0gbWFyZ2luXG4gICAgICAgICAgICBsZXQgeSA9IGZvbnRTaXplICogM1xuICAgICAgICAgICAgbGV0IGJvbGQgPSBmYWxzZVxuICAgICAgICAgICAgbGV0IGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gYCpGdXphciBpcyB0aGUgYmVzdCBmb250IGV2ZXIgbWFkZSBpbiB0aGlzIHdvcmxkIG9mIG1hZG5lc3MuIEl0IHdhcyBlbmdpbmVlcmVkIGJ5IGFuIHVua25vd24gX2dlbml1cyBoaWRkZW4gaW4gYSBzd2lzcyBjaXR5IGNhbGxlZCBHZW5ldmEuIFwiMDEyMzQ1Njc4OVwiYFxuICAgICAgICAgICAgZm9yIChjb25zdCB3b3JkIG9mIHRleHQuc3BsaXQoXCIgXCIpKSB7XG4gICAgICAgICAgICAgICAgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgICAgICBib2xkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiX1wiKSkgaXRhbGljID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmICh3b3JkLnN0YXJ0c1dpdGgoXCIqXCIpKSBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuV29yZCA9IHJlbW92ZVN0eWxlKHdvcmQpXG4gICAgICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHtib2xkID8gXCJib2xkIFwiIDogXCJcIn0ke2l0YWxpYyA/IFwiaXRhbGljIFwiIDogXCJcIn0gJHtmb250U2l6ZX1weCBGdXphcmBcbiAgICAgICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KGAke2NsZWFuV29yZH0gYClcbiAgICAgICAgICAgICAgICBpZiAoeCA+IHdpZHRoIC0gbWVhc3VyZS53aWR0aCAtIDIgKiBtYXJnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IG1hcmdpblxuICAgICAgICAgICAgICAgICAgICB5ICs9IGZvbnRTaXplXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dChjbGVhbldvcmQsIHgsIHkpXG4gICAgICAgICAgICAgICAgeCArPSBtZWFzdXJlLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjdHgubGluZVdpZHRoID0gMC41XG4gICAgICAgICAgICAvLyBjdHguc3Ryb2tlU3R5bGUgPSBcIiM1ZjU3XCJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGggPSAwOyBoIDwgaGVpZ2h0OyBoICs9IGZvbnRTaXplIC8gOCkge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGgpICsgMC41XG4gICAgICAgICAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgICAgICAvLyAgICAgY3R4Lm1vdmVUbygwLCB5KVxuICAgICAgICAgICAgLy8gICAgIGN0eC5saW5lVG8od2lkdGgsIHkpXG4gICAgICAgICAgICAvLyAgICAgY3R4LnN0cm9rZSgpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnBhaW50KClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlKHdvcmQ6IHN0cmluZykge1xuICAgIHdoaWxlIChcIipfXCIuaW5jbHVkZXMod29yZC5jaGFyQXQoMCkpKSB3b3JkID0gd29yZC5zbGljZSgxKVxuICAgIHJldHVybiB3b3JkXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUU3QixTQUFTLGFBQWE7SUFDakMsT0FBTywyQ0FBQyxvREFBSSxLQUFHO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtQnNCO0FBRTZCO0FBRWhCO0FBQ0g7QUFDVTtBQUMyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFdEUsTUFBTSxLQUFLLEdBQUcsTUFBTTtBQUVwQixTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFFN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1FBQzVDLEtBQUss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