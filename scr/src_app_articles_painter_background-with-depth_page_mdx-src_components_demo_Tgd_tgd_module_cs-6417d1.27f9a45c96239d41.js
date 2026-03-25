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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In case you have a fixed camera and a complex environment you can optimize the\npainting by pre-rendering it in Blender and generating the depth buffer with simple/fast material."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "TgdPainterBackgroundWithDepth will paint the high definition image and fill the\ndepth buffer with the meshes you give it as children. If the canvas size doesn't change, then the\nmeshes won't even been rendered. That's why you can use high poly meshes if you need accuracy."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In the following example, we used a very low-poly mesh. You can see this when the left cube is on the top.\nThe hemi-sphere at the top of the tower is bulky, and the cube acts strange in this area."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But if you know where your moving objects will be, then you can have high definition in these places\nand low poly everywhere else."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Example"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_with_depth_background_with_depth_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/background-with-depth/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9iYWNrZ3JvdW5kLXdpdGgtZGVwdGhfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfdGdkX21vZHVsZV9jcy02NDE3ZDEuMjdmOWE0NWM5NjIzOWQ0MS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL2JhY2tncm91bmQtd2l0aC1kZXB0aC9fYmFja2dyb3VuZC13aXRoLWRlcHRoL2JhY2tncm91bmQtd2l0aC1kZXB0aC5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9iYWNrZ3JvdW5kLXdpdGgtZGVwdGgvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRFZmZlY3QsIFZpZXdJbnB1dE51bWJlciB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7XG4gICAgdGdkQ2FsY01vZHVsbyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIHRnZE1ha2VNZXNoR2xiUGFpbnRlcixcbiAgICBUZ2RNYXRlcmlhbERlcHRoLFxuICAgIFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVGV4dHVyZTJELFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJhY2tncm91bmRJTUcgZnJvbSBcIi4vYmFja2dyb3VuZC53ZWJwXCJcbmltcG9ydCBCYWNrZ3JvdW5kR0xCIGZyb20gXCIuL2JhY2tncm91bmQuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb250ZXh0LmNhbWVyYSA9IGFzc2V0cy5nbGIuYmFja2dyb3VuZC5jcmVhdGVDYW1lcmFCeU5hbWUoXCJDYW1lcmFcIilcbiAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAxMDBcbiAgICBjb25zdCBkZXB0aE1ha2VyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgdGdkTWFrZU1lc2hHbGJQYWludGVyKHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGRhdGE6IGFzc2V0cy5nbGIuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICBub2RlOiBcIkJ1aWxkaW5nXCIsXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVNYXRlcmlhbDogKCkgPT4gKCkgPT4gbmV3IFRnZE1hdGVyaWFsRGVwdGgoKSxcbiAgICAgICAgICAgIH0pLnBhaW50ZXIsXG4gICAgICAgIF0sXG4gICAgfSlcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IFRnZFBhaW50ZXJCYWNrZ3JvdW5kV2l0aERlcHRoKGNvbnRleHQsIHtcbiAgICAgICAgYmFja2dyb3VuZDogbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KS5sb2FkQml0bWFwKGFzc2V0cy5pbWFnZS5iYWNrZ3JvdW5kKSxcbiAgICAgICAgY2hpbGRyZW46IFtkZXB0aE1ha2VyXSxcbiAgICB9KVxuICAgIGNvbnN0IGN1YmUxID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbigxMS4wMiwgMCwgLTguNzUpLnNldFNjYWxlKDQpXG4gICAgY29uc3QgY3ViZTIgPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjdWJlMi50cmFuc2ZvLnNldFBvc2l0aW9uKDAuMDIsIDAsIC00KS5zZXRTY2FsZSg0KVxuICAgIGNvbnRleHQuYWRkKFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjaGlsZHJlbjogW2N1YmUxLCBjdWJlMl0sXG4gICAgICAgIH0pLFxuICAgICAgICBuZXcgVGdkUGFpbnRlckxvZ2ljKCh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2QgPSB0Z2RDYWxjTW9kdWxvKHRpbWUgKiAwLjEsIDAsIDIpXG4gICAgICAgICAgICBsZXQgeTEgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTEgPSBtb2QgKiAyNVxuICAgICAgICAgICAgZWxzZSB5MSA9IDI1ICogKDIgLSBtb2QpXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgxLCB6OiB6MSB9ID0gY3ViZTEudHJhbnNmby5wb3NpdGlvblxuICAgICAgICAgICAgY3ViZTEudHJhbnNmby5zZXRQb3NpdGlvbih4MSwgeTEsIHoxKVxuICAgICAgICAgICAgY3ViZTEudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA0NywgLXRpbWUgKiAxMjApXG4gICAgICAgICAgICBsZXQgeTIgPSAwXG4gICAgICAgICAgICBpZiAobW9kIDwgMSkgeTIgPSBtb2QgKiAzMFxuICAgICAgICAgICAgZWxzZSB5MiA9IDMwICogKDIgLSBtb2QpXG4gICAgICAgICAgICBjb25zdCB7IHg6IHgyLCB6OiB6MiB9ID0gY3ViZTIudHJhbnNmby5wb3NpdGlvblxuICAgICAgICAgICAgY3ViZTIudHJhbnNmby5zZXRQb3NpdGlvbih4MiwgeTIsIHoyKVxuICAgICAgICAgICAgY3ViZTIudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKHRpbWUsIHRpbWUgKiA1NywgLXRpbWUgKiAxMDMpXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gYmFja2dyb3VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIC8vICAgY29uc3QgW21hdGVyaWFsLCBzZXRNYXRlcmlhbF0gPSB1c2VNYXRlcmlhbCgpO1xuICAgIC8vICAgY29uc3QgW21pbiwgc2V0TWluXSA9IFJlYWN0LnVzZVN0YXRlKG1hdGVyaWFsLm1pbik7XG4gICAgLy8gICBjb25zdCBbbWF4LCBzZXRNYXhdID0gUmVhY3QudXNlU3RhdGUobWF0ZXJpYWwubWF4KTtcbiAgICAvLyAgIHVzZURlYm91bmNlZEVmZmVjdChcbiAgICAvLyAgICAgKCkgPT4ge1xuICAgIC8vICAgICAgIG1hdGVyaWFsLm1pbiA9IG1pbjtcbiAgICAvLyAgICAgICBtYXRlcmlhbC5tYXggPSBtYXg7XG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIFttaW4sIG1heF0sXG4gICAgLy8gICAgIDQwMFxuICAgIC8vICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17KGNvbnRleHQsIGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIGluaXQoY29udGV4dCwgYXNzZXRzKVxuICAgICAgICAgICAgICAgIC8vIHNldE1hdGVyaWFsKGluaXQoY29udGV4dCwgYXNzZXRzKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogZmFsc2UsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7IGJhY2tncm91bmQ6IEJhY2tncm91bmRHTEIgfSxcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kSU1HIH0sXG4gICAgICAgICAgICB9fT48L1ZpZXc+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VNYXRlcmlhbCgpOiBbeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSwgKG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gdm9pZF0ge1xuICAgIGNvbnN0IHJlZk1hdGVyaWFsID0gUmVhY3QudXNlUmVmPHsgbWluOiBudW1iZXI7IG1heDogbnVtYmVyIH0gfCBudWxsPihudWxsKVxuICAgIGlmICghcmVmTWF0ZXJpYWwuY3VycmVudCkgcmVmTWF0ZXJpYWwuY3VycmVudCA9IHsgbWluOiAwLjk5MiwgbWF4OiAxIH1cblxuICAgIHJldHVybiBbcmVmTWF0ZXJpYWwuY3VycmVudCwgKG1hdDogeyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXIgfSkgPT4gKHJlZk1hdGVyaWFsLmN1cnJlbnQgPSBtYXQpXVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQWNGO0FBRTZCO0FBRVA7QUFDRDtBQUU1QyxTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFFN0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDbkUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRztJQUN4QixNQUFNLFVBQVUsR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1FBQzVDLElBQUksRUFBRSxvREFBb0I7UUFDMUIsUUFBUSxFQUFFO1lBQ04seURBQXFCLENBQUM7Z0JBQ2xCLE9BQU87Z0JBQ1AsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDM0IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGdCQUFnQixFQUFFLEdBQUcsRUFB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