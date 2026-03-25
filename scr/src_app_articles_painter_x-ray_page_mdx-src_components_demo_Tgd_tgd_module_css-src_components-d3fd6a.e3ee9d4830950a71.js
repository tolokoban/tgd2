"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_x-ray_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components-d3fd6a"], {
31770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_brain_glb__rspack_import_3 = __webpack_require__(48522);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_4 = __webpack_require__(21278);





function init(context, assets) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0, 0, 0, 1],
        depth: 1,
    });
    const brain = new _tolokoban_tgd__rspack_import_1.TgdPainterXRay(context, {
        color: [0.1, 0.2, 1, 1],
        exponent: 1.2,
        intensity: 4,
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryGltf({ data: assets.glb.brain }),
    });
    const suzanne = new _tolokoban_tgd__rspack_import_1.TgdPainterXRay(context, {
        color: [1, 0.333, 0.1, 1],
        exponent: 5,
        intensity: 20,
        geometry: new _tolokoban_tgd__rspack_import_1.TgdGeometryGltf({
            data: assets.glb.suzanne,
        }),
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        children: [brain, suzanne],
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
    });
    context.add(clear, state);
    context.paint();
    context.camera.transfo.distance = 5;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 2000,
    });
    return (uniforms) => {
        const exponent1 = uniforms.exponent1 ?? 1.2;
        const intensity1 = uniforms.intensity1 ?? 4;
        brain.exponent = exponent1;
        brain.intensity = intensity1;
        const exponent2 = uniforms.exponent2 ?? 5;
        const intensity2 = uniforms.intensity2 ?? 20;
        suzanne.exponent = exponent2;
        suzanne.intensity = intensity2;
        context.paint();
    };
}
function Demo() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, assets: {
            glb: {
                brain: _assets_mesh_brain_glb__rspack_import_3,
                suzanne: _assets_mesh_suzanne_glb__rspack_import_4,
            },
        }, settings: {
            exponent1: {
                label: "exponent (brain)",
                value: 1.2,
                min: -20,
                max: 20,
            },
            intensity1: {
                label: "intentity (brain)",
                value: 4,
                min: 0,
                max: 20,
            },
            exponent2: {
                label: "exponent (monkey)",
                value: 5,
                min: -20,
                max: 20,
            },
            intensity2: {
                label: "intentity (monkey)",
                value: 20,
                min: 0,
                max: 20,
            },
        } }));
}


},
48522(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/brain.ac181199172af1fc.glb";

},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
63330(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _x_ray_x_ray_demo__rspack_import_1 = __webpack_require__(31770);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterXRay.html",
                    children: "TgdPainterXRay"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray_x_ray_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl94LXJheV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50cy1kM2ZkNmEuZTNlZTlkNDgzMDk1MGE3MS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L194LXJheS94LXJheS5kZW1vLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci94LXJheS9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZEdlb21ldHJ5R2x0ZixcbiAgICBUZ2RQYWludGVyWFJheSxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IEJyYWluVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL2JyYWluLmdsYlwiXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBicmFpbiA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDEsIDFdLFxuICAgICAgICBleHBvbmVudDogMS4yLFxuICAgICAgICBpbnRlbnNpdHk6IDQsXG4gICAgICAgIGdlb21ldHJ5OiBuZXcgVGdkR2VvbWV0cnlHbHRmKHsgZGF0YTogYXNzZXRzLmdsYi5icmFpbiB9KSxcbiAgICB9KVxuICAgIGNvbnN0IHN1emFubmUgPSBuZXcgVGdkUGFpbnRlclhSYXkoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzEsIDAuMzMzLCAwLjEsIDFdLFxuICAgICAgICBleHBvbmVudDogNSxcbiAgICAgICAgaW50ZW5zaXR5OiAyMCxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdsdGYoe1xuICAgICAgICAgICAgZGF0YTogYXNzZXRzLmdsYi5zdXphbm5lLFxuICAgICAgICB9KSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGNoaWxkcmVuOiBbYnJhaW4sIHN1emFubmVdLFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSA1XG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgIGluZXJ0aWFPcmJpdDogMjAwMCxcbiAgICB9KVxuICAgIC8vICNlbmRcbiAgICByZXR1cm4gKHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+KSA9PiB7XG4gICAgICAgIGNvbnN0IGV4cG9uZW50MSA9IHVuaWZvcm1zLmV4cG9uZW50MSA/PyAxLjJcbiAgICAgICAgY29uc3QgaW50ZW5zaXR5MSA9IHVuaWZvcm1zLmludGVuc2l0eTEgPz8gNFxuICAgICAgICBicmFpbi5leHBvbmVudCA9IGV4cG9uZW50MVxuICAgICAgICBicmFpbi5pbnRlbnNpdHkgPSBpbnRlbnNpdHkxXG4gICAgICAgIGNvbnN0IGV4cG9uZW50MiA9IHVuaWZvcm1zLmV4cG9uZW50MiA/PyA1XG4gICAgICAgIGNvbnN0IGludGVuc2l0eTIgPSB1bmlmb3Jtcy5pbnRlbnNpdHkyID8/IDIwXG4gICAgICAgIHN1emFubmUuZXhwb25lbnQgPSBleHBvbmVudDJcbiAgICAgICAgc3V6YW5uZS5pbnRlbnNpdHkgPSBpbnRlbnNpdHkyXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIGdsYjoge1xuICAgICAgICAgICAgICAgICAgICBicmFpbjogQnJhaW5VUkwsXG4gICAgICAgICAgICAgICAgICAgIHN1emFubmU6IFN1emFubmVVUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzZXR0aW5ncz17e1xuICAgICAgICAgICAgICAgIGV4cG9uZW50MToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJleHBvbmVudCAoYnJhaW4pXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLjIsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5MToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJpbnRlbnRpdHkgKGJyYWluKVwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwb25lbnQyOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImV4cG9uZW50IChtb25rZXkpXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgICAgICAgICBtaW46IC0yMCxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGludGVuc2l0eTI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiaW50ZW50aXR5IChtb25rZXkpXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgIClcbn1cbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBUXVCO0FBQzZCO0FBRU47QUFDSTtBQUVsRCxTQUFTLElBQUksQ0FBQyxPQUFtQixFQUFFLE1BQWM7SUFFN0MsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLE9BQU8sRUFBRTtRQUN2QyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDO0lBQ0YsTUFBTSxLQUFLLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sRUFBRTtRQUN0QyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsUUFBUSxFQUFFLEdBQUc7UUFDYixTQUFTLEVBQUUs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