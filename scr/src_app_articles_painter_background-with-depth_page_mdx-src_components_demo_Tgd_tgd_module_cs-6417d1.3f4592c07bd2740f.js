"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_background-with-depth_page_mdx-src_components_demo_Tgd_tgd_module_cs-6417d1"], {
54640(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_tgd__rspack_import_2 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(18712);
/* import */ var _background_webp__rspack_import_4 = __webpack_require__(14756);
/* import */ var _background_glb__rspack_import_5 = __webpack_require__(35875);






function init(context, assets) {
    context.camera = assets.glb.background.createCameraByName("Camera");
    context.camera.far = 100;
    const depthMaker = new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        cull: _tolokoban_tgd__rspack_import_2.webglPresetCull.back,
        children: [
            (0,_tolokoban_tgd__rspack_import_2.tgdMakeMeshGlbPainter)({
                context,
                data: assets.glb.background,
                node: "Building",
                overrideMaterial: () => () => new _tolokoban_tgd__rspack_import_2.TgdMaterialDepth(),
            }).painter,
        ],
    });
    const background = new _tolokoban_tgd__rspack_import_2.TgdPainterBackgroundWithDepth(context, {
        background: new _tolokoban_tgd__rspack_import_2.TgdTexture2D(context).loadBitmap(assets.image.background),
        children: [depthMaker],
    });
    const cube1 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube1.transfo.setPosition(11.02, 0, -8.75).setScale(4);
    const cube2 = new _tolokoban_tgd__rspack_import_2.TgdPainterMesh(context);
    cube2.transfo.setPosition(0.02, 0, -4).setScale(4);
    context.add(background, new _tolokoban_tgd__rspack_import_2.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_2.webglPresetDepth.less,
        children: [cube1, cube2],
    }), new _tolokoban_tgd__rspack_import_2.TgdPainterLogic((time) => {
        const mod = (0,_tolokoban_tgd__rspack_import_2.tgdCalcModulo)(time * 0.1, 0, 2);
        let y1 = 0;
        if (mod < 1)
            y1 = mod * 25;
        else
            y1 = 25 * (2 - mod);
        const { x: x1, z: z1 } = cube1.transfo.position;
        cube1.transfo.setPosition(x1, y1, z1);
        cube1.transfo.setEulerRotation(time, time * 47, -time * 120);
        let y2 = 0;
        if (mod < 1)
            y2 = mod * 30;
        else
            y2 = 30 * (2 - mod);
        const { x: x2, z: z2 } = cube2.transfo.position;
        cube2.transfo.setPosition(x2, y2, z2);
        cube2.transfo.setEulerRotation(time, time * 57, -time * 103);
    }));
    context.play();
    return background;
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_3["default"], { onReady: (context, assets) => {
            init(context, assets);
        }, options: {
            antialias: false,
        }, assets: {
            glb: { background: _background_glb__rspack_import_5 },
            image: { background: _background_webp__rspack_import_4 },
        } }));
}
function useMaterial() {
    const refMaterial = react__rspack_import_1_default().useRef(null);
    if (!refMaterial.current)
        refMaterial.current = { min: 0.992, max: 1 };
    return [refMaterial.current, (mat) => (refMaterial.current = mat)];
}


},
35875(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/background.49be5e8ef07a359b.glb";

},
14756(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "img/background.94860ce4a0297491.webp";

},
63799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _background_with_depth_background_with_depth_demo__rspack_import_1 = __webpack_require__(54640);
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
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterBackgroundWithDepth.html",
                    children: "TgdPainterBackgroundWithDepth"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In case you have a fixed camera and a complex environment you can optimize the\npainting by pre-rendering it in Blender and generating the depth buffer with simple/fast material."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "TgdPainterBackgroundWithDepth will paint the high definition image and fill the\ndepth buffer with the meshes you give it as children. If the canvas size doesn't change, then the\nmeshes won't even been rendered. That's why you can use high poly meshes if you need accuracy."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In the following example, we used a very low-poly mesh. You can see this when the left cube is on the top.\nThe hemi-sphere at the top of the tower is bulky, and the cube acts strange in this area."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But if you know where your moving objects will be, then you can have high definition in these places\nand low poly everywhere else."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth_background_with_depth_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9iYWNrZ3JvdW5kLXdpdGgtZGVwdGhfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jcy02NDE3ZDEuM2Y0NTkyYzA3YmQyNzQwZi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9iYWNrZ3JvdW5kLXdpdGgtZGVwdGgvX2JhY2tncm91bmQtd2l0aC1kZXB0aC9iYWNrZ3JvdW5kLXdpdGgtZGVwdGguZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2JhY2tncm91bmQtd2l0aC1kZXB0aC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURlYm91bmNlZEVmZmVjdCwgVmlld0lucHV0TnVtYmVyIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHtcbiAgICB0Z2RDYWxjTW9kdWxvLFxuICAgIFRnZENvbnRleHQsXG4gICAgdGdkTWFrZU1lc2hHbGJQYWludGVyLFxuICAgIFRnZE1hdGVyaWFsRGVwdGgsXG4gICAgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RUZXh0dXJlMkQsXG4gICAgd2ViZ2xQcmVzZXRDdWxsLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQmFja2dyb3VuZElNRyBmcm9tIFwiLi9iYWNrZ3JvdW5kLndlYnBcIlxuaW1wb3J0IEJhY2tncm91bmRHTEIgZnJvbSBcIi4vYmFja2dyb3VuZC5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgLy8gI2JlZ2luIEluaXRpYWxpemluZyBXZWJHTFxuICAgIGNvbnRleHQuY2FtZXJhID0gYXNzZXRzLmdsYi5iYWNrZ3JvdW5kLmNyZWF0ZUNhbWVyYUJ5TmFtZShcIkNhbWVyYVwiKVxuICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDEwMFxuICAgIGNvbnN0IGRlcHRoTWFrZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgY3VsbDogd2ViZ2xQcmVzZXRDdWxsLmJhY2ssXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB0Z2RNYWtlTWVzaEdsYlBhaW50ZXIoe1xuICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgIG5vZGU6IFwiQnVpbGRpbmdcIixcbiAgICAgICAgICAgICAgICBvdmVycmlkZU1hdGVyaWFsOiAoKSA9PiAoKSA9PiBuZXcgVGdkTWF0ZXJpYWxEZXB0aCgpLFxuICAgICAgICAgICAgfSkucGFpbnRlcixcbiAgICAgICAgXSxcbiAgICB9KVxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgVGdkUGFpbnRlckJhY2tncm91bmRXaXRoRGVwdGgoY29udGV4dCwge1xuICAgICAgICBiYWNrZ3JvdW5kOiBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpLmxvYWRCaXRtYXAoYXNzZXRzLmltYWdlLmJhY2tncm91bmQpLFxuICAgICAgICBjaGlsZHJlbjogW2RlcHRoTWFrZXJdLFxuICAgIH0pXG4gICAgY29uc3QgY3ViZTEgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlMS50cmFuc2ZvLnNldFBvc2l0aW9uKDExLjAyLCAwLCAtOC43NSkuc2V0U2NhbGUoNClcbiAgICBjb25zdCBjdWJlMiA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIGN1YmUyLnRyYW5zZm8uc2V0UG9zaXRpb24oMC4wMiwgMCwgLTQpLnNldFNjYWxlKDQpXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIGJhY2tncm91bmQsXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY3ViZTEsIGN1YmUyXSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyTG9naWMoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRnZENhbGNNb2R1bG8odGltZSAqIDAuMSwgMCwgMilcbiAgICAgICAgICAgIGxldCB5MSA9IDBcbiAgICAgICAgICAgIGlmIChtb2QgPCAxKSB5MSA9IG1vZCAqIDI1XG4gICAgICAgICAgICBlbHNlIHkxID0gMjUgKiAoMiAtIG1vZClcbiAgICAgICAgICAgIGNvbnN0IHsgeDogeDEsIHo6IHoxIH0gPSBjdWJlMS50cmFuc2ZvLnBvc2l0aW9uXG4gICAgICAgICAgICBjdWJlMS50cmFuc2ZvLnNldFBvc2l0aW9uKHgxLCB5MSwgejEpXG4gICAgICAgICAgICBjdWJlMS50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDQ3LCAtdGltZSAqIDEyMClcbiAgICAgICAgICAgIGxldCB5MiA9IDBcbiAgICAgICAgICAgIGlmIChtb2QgPCAxKSB5MiA9IG1vZCAqIDMwXG4gICAgICAgICAgICBlbHNlIHkyID0gMzAgKiAoMiAtIG1vZClcbiAgICAgICAgICAgIGNvbnN0IHsgeDogeDIsIHo6IHoyIH0gPSBjdWJlMi50cmFuc2ZvLnBvc2l0aW9uXG4gICAgICAgICAgICBjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKHgyLCB5MiwgejIpXG4gICAgICAgICAgICBjdWJlMi50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24odGltZSwgdGltZSAqIDU3LCAtdGltZSAqIDEwMylcbiAgICAgICAgfSksXG4gICAgKVxuICAgIGNvbnRleHQucGxheSgpXG4gICAgLy8gI2VuZFxuICAgIHJldHVybiBiYWNrZ3JvdW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgLy8gICBjb25zdCBbbWF0ZXJpYWwsIHNldE1hdGVyaWFsXSA9IHVzZU1hdGVyaWFsKCk7XG4gICAgLy8gICBjb25zdCBbbWluLCBzZXRNaW5dID0gUmVhY3QudXNlU3RhdGUobWF0ZXJpYWwubWluKTtcbiAgICAvLyAgIGNvbnN0IFttYXgsIHNldE1heF0gPSBSZWFjdC51c2VTdGF0ZShtYXRlcmlhbC5tYXgpO1xuICAgIC8vICAgdXNlRGVib3VuY2VkRWZmZWN0KFxuICAgIC8vICAgICAoKSA9PiB7XG4gICAgLy8gICAgICAgbWF0ZXJpYWwubWluID0gbWluO1xuICAgIC8vICAgICAgIG1hdGVyaWFsLm1heCA9IG1heDtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgW21pbiwgbWF4XSxcbiAgICAvLyAgICAgNDAwXG4gICAgLy8gICApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXsoY29udGV4dCwgYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaW5pdChjb250ZXh0LCBhc3NldHMpXG4gICAgICAgICAgICAgICAgLy8gc2V0TWF0ZXJpYWwoaW5pdChjb250ZXh0LCBhc3NldHMpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiBmYWxzZSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhc3NldHM9e3tcbiAgICAgICAgICAgICAgICBnbGI6IHsgYmFja2dyb3VuZDogQmFja2dyb3VuZEdMQiB9LFxuICAgICAgICAgICAgICAgIGltYWdlOiB7IGJhY2tncm91bmQ6IEJhY2tncm91bmRJTUcgfSxcbiAgICAgICAgICAgIH19PjwvVmlldz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVzZU1hdGVyaWFsKCk6IFt7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9LCAobWF0OiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9KSA9PiB2b2lkXSB7XG4gICAgY29uc3QgcmVmTWF0ZXJpYWwgPSBSZWFjdC51c2VSZWY8eyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWZNYXRlcmlhbC5jdXJyZW50KSByZWZNYXRlcmlhbC5jdXJyZW50ID0geyBtaW46IDAuOTkyLCBtYXg6IDEgfVxuXG4gICAgcmV0dXJuIFtyZWZNYXRlcmlhbC5jdXJyZW50LCAobWF0OiB7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9KSA9PiAocmVmTWF0ZXJpYWwuY3VycmVudCA9IG1hdCldXG59XG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBY0Y7QUFFNkI7QUFFUDtBQUNEO0FBRTVDLFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztJQUNuRSxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHO0lBQ3hCLE1BQU0sVUFBVSxHQUFHLElBQUksK0NBQWUsQ0FBQyxPQUFPLEVBQUU7UUFDNUMsSUFBSSxFQUFFLG9EQUFvQjtRQUMxQixRQUFRLEVBQUU7WUFDTix5REFBcUIsQ0FBQztnQkFDbEIsT0FBTztnQkFDUCxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUMzQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsZ0JBQWdCLEVBQUUsR0FBRyxF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