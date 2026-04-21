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
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_x_ray_x_ray_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/painter",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                    lineNumber: 9,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/x-ray/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl94LXJheV9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50cy1kM2ZkNmEuNjUwMjA5NGM0N2NlZWEzNC5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci94LXJheS9feC1yYXkveC1yYXkuZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3gtcmF5L3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkR2VvbWV0cnlHbHRmLFxuICAgIFRnZFBhaW50ZXJYUmF5LFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgQnJhaW5VUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvYnJhaW4uZ2xiXCJcbmltcG9ydCBTdXphbm5lVVJMIGZyb20gXCJAL2Fzc2V0cy9tZXNoL3N1emFubmUuZ2xiXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IGJyYWluID0gbmV3IFRnZFBhaW50ZXJYUmF5KGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMSwgMV0sXG4gICAgICAgIGV4cG9uZW50OiAxLjIsXG4gICAgICAgIGludGVuc2l0eTogNCxcbiAgICAgICAgZ2VvbWV0cnk6IG5ldyBUZ2RHZW9tZXRyeUdsdGYoeyBkYXRhOiBhc3NldHMuZ2xiLmJyYWluIH0pLFxuICAgIH0pXG4gICAgY29uc3Qgc3V6YW5uZSA9IG5ldyBUZ2RQYWludGVyWFJheShjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMSwgMC4zMzMsIDAuMSwgMV0sXG4gICAgICAgIGV4cG9uZW50OiA1LFxuICAgICAgICBpbnRlbnNpdHk6IDIwLFxuICAgICAgICBnZW9tZXRyeTogbmV3IFRnZEdlb21ldHJ5R2x0Zih7XG4gICAgICAgICAgICBkYXRhOiBhc3NldHMuZ2xiLnN1emFubmUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgY2hpbGRyZW46IFticmFpbiwgc3V6YW5uZV0sXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IDVcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAyMDAwLFxuICAgIH0pXG4gICAgLy8gI2VuZFxuICAgIHJldHVybiAodW5pZm9ybXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4pID0+IHtcbiAgICAgICAgY29uc3QgZXhwb25lbnQxID0gdW5pZm9ybXMuZXhwb25lbnQxID8/IDEuMlxuICAgICAgICBjb25zdCBpbnRlbnNpdHkxID0gdW5pZm9ybXMuaW50ZW5zaXR5MSA/PyA0XG4gICAgICAgIGJyYWluLmV4cG9uZW50ID0gZXhwb25lbnQxXG4gICAgICAgIGJyYWluLmludGVuc2l0eSA9IGludGVuc2l0eTFcbiAgICAgICAgY29uc3QgZXhwb25lbnQyID0gdW5pZm9ybXMuZXhwb25lbnQyID8/IDVcbiAgICAgICAgY29uc3QgaW50ZW5zaXR5MiA9IHVuaWZvcm1zLmludGVuc2l0eTIgPz8gMjBcbiAgICAgICAgc3V6YW5uZS5leHBvbmVudCA9IGV4cG9uZW50MlxuICAgICAgICBzdXphbm5lLmludGVuc2l0eSA9IGludGVuc2l0eTJcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgZ2xiOiB7XG4gICAgICAgICAgICAgICAgICAgIGJyYWluOiBCcmFpblVSTCxcbiAgICAgICAgICAgICAgICAgICAgc3V6YW5uZTogU3V6YW5uZVVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNldHRpbmdzPXt7XG4gICAgICAgICAgICAgICAgZXhwb25lbnQxOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImV4cG9uZW50IChicmFpbilcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEuMixcbiAgICAgICAgICAgICAgICAgICAgbWluOiAtMjAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnRlbnNpdHkxOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImludGVudGl0eSAoYnJhaW4pXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA0LFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHBvbmVudDI6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiZXhwb25lbnQgKG1vbmtleSlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDUsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogLTIwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW50ZW5zaXR5Mjoge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJpbnRlbnRpdHkgKG1vbmtleSlcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRdUI7QUFDNkI7QUFFTjtBQUNJO0FBRWxELFNBQVMsSUFBSSxDQUFDLE9BQW1CLEVBQUUsTUFBYztJQUU3QyxNQUFNLEtBQUssR0FBRyxJQUFJLCtDQUFlLENBQUMsT0FBTyxFQUFFO1FBQ3ZDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUM7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLDhDQUFjLENBQUMsT0FBTyxFQUFFO1FBQ3RDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixRQUFRLEVBQUUsR0FBRztRQUNiLFNBQVMsRUFB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