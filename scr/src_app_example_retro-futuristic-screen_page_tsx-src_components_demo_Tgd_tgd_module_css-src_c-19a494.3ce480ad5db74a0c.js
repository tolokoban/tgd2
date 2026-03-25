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












const COLOR = "#5e9";
function init(context, assets) {
    context.camera.transfo.setPosition(0, 2, 0);
    context.camera.fitSpaceAtTarget(9, 7);
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
    });
    const uniformCamera = new _tolokoban_tgd__rspack_import_1.TgdUniformBufferObjectCamera(context);
    const imageLetters = assets.image.letters;
    const imageDust = assets.image.dust;
    const cameraSkybox = context.camera.clone();
    const painterSkybox = new _tolokoban_tgd__rspack_import_1.TgdPainterSkybox(context, {
        tint: [0.4, 0.4, 0.4, 1],
        camera: cameraSkybox,
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const skybox = new _tolokoban_tgd__rspack_import_1.TgdTextureCube(context, {
        imagePosX: assets.image.imagePosX,
        imagePosY: assets.image.imagePosY,
        imagePosZ: assets.image.imagePosZ,
        imageNegX: assets.image.imageNegX,
        imageNegY: assets.image.imageNegY,
        imageNegZ: assets.image.imageNegZ,
    });
    const painterScreen = new PainterScreen(context, {
        uniformCamera,
        imageLetters,
        imageDust,
        assetScreen: assets.glb.screen,
        skybox,
    });
    const geometry = assets.glb.screen.makeGeometry({
        meshIndex: "Mesh",
    });
    const material = new _tolokoban_tgd__rspack_import_1.TgdMaterialGlobal({
        ambientColor: skybox,
    });
    const foot = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry,
        material,
    });
    context.add(painterSkybox, new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [clear, foot, painterScreen],
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
    constructor(context, { uniformCamera, imageDust, assetScreen, skybox }) {
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
                blend: "add",
                cull: "off",
            },
            uniforms: { uniformCamera, uniformBlock },
            dataset,
            elements,
            textures: {
                uniTextureLetters: this.textureLetters,
                uniTextureDust: this.textureDust,
                uniTextureSkybox: skybox,
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
                    "vec3 specular = textureLod(uniTextureSkybox, -R, 0.0).rgb;",
                    "specular = pow(specular, vec3(5.0));",
                    "FragColor.rgb += specular * .5;",
                    "FragColor.rgb += vec3(-.1, .05, -.1);",
                ],
            },
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfZXhhbXBsZV9yZXRyby1mdXR1cmlzdGljLXNjcmVlbl9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfYy0xOWE0OTQuM2NlNDgwYWQ1ZGI3NGEwYy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9leGFtcGxlL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuL3BhZ2UudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9leGFtcGxlL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuL3JldHJvLWZ1dHVyaXN0aWMtc2NyZWVuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVtbyBmcm9tIFwiLi9yZXRyby1mdXR1cmlzdGljLXNjcmVlblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgcmV0dXJuIDxEZW1vIC8+XG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxuICAgIFRnZERhdGFHbGIsXG4gICAgdGdkTG9hZEZvbnQsXG4gICAgVGdkTWF0ZXJpYWxHbG9iYWwsXG4gICAgVGdkUGFpbnRlcixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlclByb2dyYW0sXG4gICAgVGdkUGFpbnRlclNreWJveCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIFRnZFRleHR1cmVDdWJlLFxuICAgIFRnZFVuaWZvcm1CdWZmZXJPYmplY3QsXG4gICAgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYSxcbiAgICBXZWJnbEltYWdlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFNjcmVlblVSTCBmcm9tIFwiLi9zY3JlZW4uZ2xiXCJcbmltcG9ydCBEdXN0VVJMIGZyb20gXCIuL2R1c3Qud2VicFwiXG5pbXBvcnQgRnV6YXJGb250VVJMIGZyb20gXCIuL0Z1emFyX0dYLndvZmYyXCJcbmltcG9ydCBpbWFnZVBvc1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9wb3NYLndlYnBcIiAvLyArWFxuaW1wb3J0IGltYWdlUG9zWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL3Bvc1kud2VicFwiIC8vICtZXG5pbXBvcnQgaW1hZ2VQb3NaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvcG9zWi53ZWJwXCIgLy8gK1pcbmltcG9ydCBpbWFnZU5lZ1ggZnJvbSBcIkAvYXNzZXRzL2N1YmVtYXAvMTAyNC9lbGVjdHJpYy1ib2FyZC9uZWdYLndlYnBcIiAvLyAtWFxuaW1wb3J0IGltYWdlTmVnWSBmcm9tIFwiQC9hc3NldHMvY3ViZW1hcC8xMDI0L2VsZWN0cmljLWJvYXJkL25lZ1kud2VicFwiIC8vIC1ZXG5pbXBvcnQgaW1hZ2VOZWdaIGZyb20gXCJAL2Fzc2V0cy9jdWJlbWFwLzEwMjQvZWxlY3RyaWMtYm9hcmQvbmVnWi53ZWJwXCIgLy8gLVpcblxuY29uc3QgQ09MT1IgPSBcIiM1ZTlcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAyLCAwKVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoOSwgNylcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHVuaWZvcm1DYW1lcmEgPSBuZXcgVGdkVW5pZm9ybUJ1ZmZlck9iamVjdENhbWVyYShjb250ZXh0KVxuICAgIGNvbnN0IGltYWdlTGV0dGVycyA9IGFzc2V0cy5pbWFnZS5sZXR0ZXJzXG4gICAgY29uc3QgaW1hZ2VEdXN0ID0gYXNzZXRzLmltYWdlLmR1c3RcbiAgICBjb25zdCBjYW1lcmFTa3lib3ggPSBjb250ZXh0LmNhbWVyYS5jbG9uZSgpXG4gICAgY29uc3QgcGFpbnRlclNreWJveCA9IG5ldyBUZ2RQYWludGVyU2t5Ym94KGNvbnRleHQsIHtcbiAgICAgICAgdGludDogWzAuNCwgMC40LCAwLjQsIDFdLFxuICAgICAgICBjYW1lcmE6IGNhbWVyYVNreWJveCxcbiAgICAgICAgaW1hZ2VQb3NYOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NYLFxuICAgICAgICBpbWFnZVBvc1k6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1ksXG4gICAgICAgIGltYWdlUG9zWjogYXNzZXRzLmltYWdlLmltYWdlUG9zWixcbiAgICAgICAgaW1hZ2VOZWdYOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdYLFxuICAgICAgICBpbWFnZU5lZ1k6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1ksXG4gICAgICAgIGltYWdlTmVnWjogYXNzZXRzLmltYWdlLmltYWdlTmVnWixcbiAgICB9KVxuICAgIGNvbnN0IHNreWJveCA9IG5ldyBUZ2RUZXh0dXJlQ3ViZShjb250ZXh0LCB7XG4gICAgICAgIGltYWdlUG9zWDogYXNzZXRzLmltYWdlLmltYWdlUG9zWCxcbiAgICAgICAgaW1hZ2VQb3NZOiBhc3NldHMuaW1hZ2UuaW1hZ2VQb3NZLFxuICAgICAgICBpbWFnZVBvc1o6IGFzc2V0cy5pbWFnZS5pbWFnZVBvc1osXG4gICAgICAgIGltYWdlTmVnWDogYXNzZXRzLmltYWdlLmltYWdlTmVnWCxcbiAgICAgICAgaW1hZ2VOZWdZOiBhc3NldHMuaW1hZ2UuaW1hZ2VOZWdZLFxuICAgICAgICBpbWFnZU5lZ1o6IGFzc2V0cy5pbWFnZS5pbWFnZU5lZ1osXG4gICAgfSlcbiAgICBjb25zdCBwYWludGVyU2NyZWVuID0gbmV3IFBhaW50ZXJTY3JlZW4oY29udGV4dCwge1xuICAgICAgICB1bmlmb3JtQ2FtZXJhLFxuICAgICAgICBpbWFnZUxldHRlcnMsXG4gICAgICAgIGltYWdlRHVzdCxcbiAgICAgICAgYXNzZXRTY3JlZW46IGFzc2V0cy5nbGIuc2NyZWVuLFxuICAgICAgICBza3lib3gsXG4gICAgfSlcbiAgICBjb25zdCBnZW9tZXRyeSA9IGFzc2V0cy5nbGIuc2NyZWVuLm1ha2VHZW9tZXRyeSh7XG4gICAgICAgIG1lc2hJbmRleDogXCJNZXNoXCIsXG4gICAgfSlcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbEdsb2JhbCh7XG4gICAgICAgIGFtYmllbnRDb2xvcjogc2t5Ym94LFxuICAgIH0pXG4gICAgY29uc3QgZm9vdCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgIGdlb21ldHJ5LFxuICAgICAgICBtYXRlcmlhbCxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBwYWludGVyU2t5Ym94LFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiBcImxlc3NcIixcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIGZvb3QsIHBhaW50ZXJTY3JlZW5dLFxuICAgICAgICB9KSxcbiAgICAgICAgKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFuZ1ggPSBNYXRoLmFicygxMCAqIE1hdGguc2luKHRpbWUgKiAwLjM0MSkpXG4gICAgICAgICAgICBjb25zdCBhbmdZID0gMzAgKiBNYXRoLnNpbih0aW1lICogMC41KVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKGFuZ1gsIGFuZ1ksIDApXG4gICAgICAgICAgICBjYW1lcmFTa3lib3guem9vbSA9IDAuM1xuICAgICAgICAgICAgY2FtZXJhU2t5Ym94LnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbihhbmdYLCBhbmdZICsgMTYwLCAwKVxuICAgICAgICB9LFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV0cm9GdXR1cmlzdGljU2NyZWVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBmdWxsc2NyZWVuXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjogeyBzY3JlZW46IFNjcmVlblVSTCB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGR1c3Q6IER1c3RVUkwsIGltYWdlUG9zWCwgaW1hZ2VQb3NZLCBpbWFnZVBvc1osIGltYWdlTmVnWCwgaW1hZ2VOZWdZLCBpbWFnZU5lZ1ogfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuXG5pbnRlcmZhY2UgUGFpbnRlclNjcmVlbk9wdGlvbnMge1xuICAgIGltYWdlTGV0dGVyczogV2ViZ2xJbWFnZVxuICAgIGltYWdlRHVzdDogV2ViZ2xJbWFnZVxuICAgIHVuaWZvcm1DYW1lcmE6IFRnZFVuaWZvcm1CdWZmZXJPYmplY3RDYW1lcmFcbiAgICBhc3NldFNjcmVlbjogVGdkRGF0YUdsYlxuICAgIHNreWJveDogVGdkVGV4dHVyZUN1YmVcbn1cblxuY2xhc3MgUGFpbnRlclNjcmVlbiBleHRlbmRzIFRnZFBhaW50ZXIge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUxldHRlcnM6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZUR1c3Q6IFRnZFRleHR1cmUyRFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUGFpbnRlclByb2dyYW1cbiAgICBwcml2YXRlIHJlYWRvbmx5IHVuaWZvcm1CbG9jazogVGdkVW5pZm9ybUJ1ZmZlck9iamVjdDxcInVuaVRpbWVcIj5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCxcbiAgICAgICAgeyB1bmlmb3JtQ2FtZXJhLCBpbWFnZUR1c3QsIGFzc2V0U2NyZWVuLCBza3lib3ggfTogUGFpbnRlclNjcmVlbk9wdGlvbnMsXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgY29uc3QgVyA9IDNcbiAgICAgICAgY29uc3QgSCA9IDJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhc3NldFNjcmVlbi5nZXRNZXNoUHJpbWl0aXZlSW5kaWNlcyhcIlNjcmVlblwiKVxuICAgICAgICBjb25zdCBkYXRhc2V0ID0gYXNzZXRTY3JlZW4ubWFrZURhdGFzZXQoe1xuICAgICAgICAgICAgbWVzaEluZGV4OiBcIlNjcmVlblwiLFxuICAgICAgICB9KVxuICAgICAgICBkYXRhc2V0LmRlYnVnKClcbiAgICAgICAgY29uc3QgdW5pZm9ybUJsb2NrID0gbmV3IFRnZFVuaWZvcm1CdWZmZXJPYmplY3QoY29udGV4dCwge1xuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICB1bmlUaW1lOiBcImZsb2F0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnVuaWZvcm1CbG9jayA9IHVuaWZvcm1CbG9ja1xuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0LCB7XG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBtYWdGaWx0ZXI6IFwiTElORUFSXCIsXG4gICAgICAgICAgICAgICAgbWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuICAgICAgICAgICAgICAgIHdyYXBSOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBTOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgICAgIHdyYXBUOiBcIlJFUEVBVFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2NhbGUgPSA1MTJcbiAgICAgICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChXICogc2NhbGUsIEggKiBzY2FsZSAqIDIpXG4gICAgICAgIHRoaXMuaW5pdENhbnZhcyhjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy5sb2FkRm9udChjYW52YXMsIGN0eClcbiAgICAgICAgdGhpcy50ZXh0dXJlRHVzdCA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dCkubG9hZEJpdG1hcChpbWFnZUR1c3QpXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBUZ2RQYWludGVyUHJvZ3JhbShjb250ZXh0LCB7XG4gICAgICAgICAgICBkcmF3TW9kZTogXCJUUklBTkdMRVNcIixcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgYmxlbmQ6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgY3VsbDogXCJvZmZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmlmb3JtczogeyB1bmlmb3JtQ2FtZXJhLCB1bmlmb3JtQmxvY2sgfSxcbiAgICAgICAgICAgIGRhdGFzZXQsXG4gICAgICAgICAgICBlbGVtZW50cyxcbiAgICAgICAgICAgIHRleHR1cmVzOiB7XG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUxldHRlcnM6IHRoaXMudGV4dHVyZUxldHRlcnMsXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZUR1c3Q6IHRoaXMudGV4dHVyZUR1c3QsXG4gICAgICAgICAgICAgICAgdW5pVGV4dHVyZVNreWJveDogc2t5Ym94LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgdmFyTm9ybWFsOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICB2YXJQb3NpdGlvbjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmVydDoge1xuICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidmFyTm9ybWFsID0gTk9STUFMO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZhclVWID0gVEVYQ09PUkRfMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YXJQb3NpdGlvbiA9IHZlYzQoUE9TSVRJT04sIDEuMCk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogdmFyUG9zaXRpb247XCIsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmcmFnOiB7XG4gICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWM0IGNvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlTGV0dGVycywgdmVjMigxLjAsIC41KSAqIHZhclVWICsgdmVjMigwLCAwLjA1ICogdW5pVGltZSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGRpc3QgPSBmcmFjdCh1bmlUaW1lKSAtIGZyYWN0KHZhclVWLnkpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmIChkaXN0IDwgMC4wKSBkaXN0ICs9IDEuMDtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0ID0gMS4wIC8gKDYuMCAqIGRpc3QpO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yLnJnYiAqPSBkaXN0ICogKGdsX0Zyb250RmFjaW5nID8gMS4wIDogMC4xNSk7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3IucmdiICo9IHRleHR1cmUodW5pVGV4dHVyZUR1c3QsIHZhclVWKS5yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IGNvbG9yO1wiLFxuICAgICAgICAgICAgICAgICAgICBcImlmICghZ2xfRnJvbnRGYWNpbmcpIHJldHVybjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIE4gPSBub3JtYWxpemUodmFyTm9ybWFsKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZWMzIFYgPSBub3JtYWxpemUodW5pQ2FtZXJhUG9zaXRpb24gLSB2YXJQb3NpdGlvbi54eXopO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgUiA9IHJlZmxlY3QoLVYsIE4pO1wiLFxuICAgICAgICAgICAgICAgICAgICBcInZlYzMgc3BlY3VsYXIgPSB0ZXh0dXJlTG9kKHVuaVRleHR1cmVTa3lib3gsIC1SLCAwLjApLnJnYjtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcGVjdWxhciA9IHBvdyhzcGVjdWxhciwgdmVjMyg1LjApKTtcIixcbiAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IucmdiICs9IHNwZWN1bGFyICogLjU7XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yLnJnYiArPSB2ZWMzKC0uMSwgLjA1LCAtLjEpO1wiLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5kZWxldGUoKVxuICAgICAgICB0aGlzLnByb2dyYW0uZGVsZXRlKClcbiAgICB9XG5cbiAgICBwYWludCh0aW1lOiBudW1iZXIsIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51bmlmb3JtQmxvY2sudmFsdWVzLnVuaVRpbWUgPSB0aW1lXG4gICAgICAgIHRoaXMucHJvZ3JhbS5wYWludCh0aW1lLCBkZWx0YSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRDYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcbiAgICAgICAgY29uc3QgdGV4dCA9IFwiTG9hZGluZyBGVVpBUi4uLlwiXG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHt3aWR0aCAvIDEyfXB4IG1vbm9zcGFjZWBcbiAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gQ09MT1JcbiAgICAgICAgY29uc3QgaCA9IGhlaWdodCAvIDVcbiAgICAgICAgY29uc3QgeCA9ICh3aWR0aCAtIG1lYXN1cmUud2lkdGgpIC8gMlxuICAgICAgICBmb3IgKGxldCB5ID0gaDsgeSA8IGhlaWdodDsgeSArPSBoKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHR1cmVMZXR0ZXJzLmxvYWRCaXRtYXAoY2FudmFzKVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEZvbnQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGdkTG9hZEZvbnQoXCJGdXphclwiLCBGdXphckZvbnRVUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBjYW52YXNcbiAgICAgICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gd2lkdGggLyA4XG4gICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBmb250U2l6ZSAvIDNcbiAgICAgICAgICAgIGN0eC5mb250ID0gYGl0YWxpYyAke2ZvbnRTaXplfXB4IEZ1emFyYFxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IENPTE9SXG4gICAgICAgICAgICBsZXQgeCA9IG1hcmdpblxuICAgICAgICAgICAgbGV0IHkgPSBmb250U2l6ZSAqIDNcbiAgICAgICAgICAgIGxldCBib2xkID0gZmFsc2VcbiAgICAgICAgICAgIGxldCBpdGFsaWMgPSBmYWxzZVxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGAqRnV6YXIgaXMgdGhlIGJlc3QgZm9udCBldmVyIG1hZGUgaW4gdGhpcyB3b3JsZCBvZiBtYWRuZXNzLiBJdCB3YXMgZW5naW5lZXJlZCBieSBhbiB1bmtub3duIF9nZW5pdXMgaGlkZGVuIGluIGEgc3dpc3MgY2l0eSBjYWxsZWQgR2VuZXZhLiBcIjAxMjM0NTY3ODlcImBcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd29yZCBvZiB0ZXh0LnNwbGl0KFwiIFwiKSkge1xuICAgICAgICAgICAgICAgIGl0YWxpYyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgYm9sZCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKHdvcmQuc3RhcnRzV2l0aChcIl9cIikpIGl0YWxpYyA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAod29yZC5zdGFydHNXaXRoKFwiKlwiKSkgaXRhbGljID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhbldvcmQgPSByZW1vdmVTdHlsZSh3b3JkKVxuICAgICAgICAgICAgICAgIGN0eC5mb250ID0gYCR7Ym9sZCA/IFwiYm9sZCBcIiA6IFwiXCJ9JHtpdGFsaWMgPyBcIml0YWxpYyBcIiA6IFwiXCJ9ICR7Zm9udFNpemV9cHggRnV6YXJgXG4gICAgICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChgJHtjbGVhbldvcmR9IGApXG4gICAgICAgICAgICAgICAgaWYgKHggPiB3aWR0aCAtIG1lYXN1cmUud2lkdGggLSAyICogbWFyZ2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHggPSBtYXJnaW5cbiAgICAgICAgICAgICAgICAgICAgeSArPSBmb250U2l6ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdHguZmlsbFRleHQoY2xlYW5Xb3JkLCB4LCB5KVxuICAgICAgICAgICAgICAgIHggKz0gbWVhc3VyZS53aWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY3R4LmxpbmVXaWR0aCA9IDAuNVxuICAgICAgICAgICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gXCIjNWY1N1wiXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBoID0gMDsgaCA8IGhlaWdodDsgaCArPSBmb250U2l6ZSAvIDgpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihoKSArIDAuNVxuICAgICAgICAgICAgLy8gICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICAgICAgLy8gICAgIGN0eC5tb3ZlVG8oMCwgeSlcbiAgICAgICAgICAgIC8vICAgICBjdHgubGluZVRvKHdpZHRoLCB5KVxuICAgICAgICAgICAgLy8gICAgIGN0eC5zdHJva2UoKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlTGV0dGVycy5sb2FkQml0bWFwKGNhbnZhcylcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5wYWludCgpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZSh3b3JkOiBzdHJpbmcpIHtcbiAgICB3aGlsZSAoXCIqX1wiLmluY2x1ZGVzKHdvcmQuY2hhckF0KDApKSkgd29yZCA9IHdvcmQuc2xpY2UoMSlcbiAgICByZXR1cm4gd29yZFxufVxuIl0sIm5hbWVzIjpbXSwibWFw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