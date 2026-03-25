"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_test_page_mdx-src_components_demo_Tgd_tgd_module_css-src_components_settings-20a5f0"], {
44416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(18712);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_3 = __webpack_require__(21278);




function DemoContainer() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_Tgd__rspack_import_2["default"], { onReady: init, gizmo: true });
}
function init(context) {
    const camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: { distance: 5 },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 2,
        zoom: 1,
    });
    context.camera = camera;
    camera.transfo.orientation.face("+X+Y+Z");
    camera.transfo.setPosition(0, 0, 0);
    camera.spaceHeightAtTarget = 6;
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
        inertiaOrbit: 900,
        geo: {
            lat: 0,
            lng: 0,
            minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-60),
            maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(+60),
        },
    });
    context.paint();
    const action = async () => {
        const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(_assets_mesh_suzanne_glb__rspack_import_3);
        if (!asset)
            return;
        console.log("Suzanne has been loaded!");
        const axes = new _tolokoban_tgd__rspack_import_1.TgdPainterAxes(context, { scale: 10 });
        const segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegmentsData();
        for (let loop = 0; loop < 12; loop++) {
            const tip = new _tolokoban_tgd__rspack_import_1.TgdVec3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
                .normalize()
                .scale((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(1, 3));
            segments.add([0, 0, 0, 0.5], [tip.x, tip.y, tip.z, (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 0.5)]);
        }
        const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
            depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
            cull: _tolokoban_tgd__rspack_import_1.webglPresetCull.back,
            children: [
                new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                    color: [0.2, 0.1, 0, 1],
                    depth: 1,
                }),
                axes,
                new _tolokoban_tgd__rspack_import_1.TgdPainterSegments(context, {
                    dataset: segments.makeDataset,
                    roundness: 4,
                }),
            ],
        });
        context.add(state);
        context.paint();
        document.addEventListener("keydown", (evt) => {
            const step = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(15);
            let angX = 0;
            let angY = 0;
            switch (evt.key) {
                case "0":
                    context.camera.transfo.orientation.face("+X+Y+Z");
                    context.camera.zoom = 1;
                    context.camera.transfo.setPosition(0, 0, 0).setDistance(15);
                    break;
                case ".":
                    context.camera.zoom = 1;
                    break;
                case "6":
                    angY = step;
                    break;
                case "4":
                    angY = -step;
                    break;
                case "8":
                    angX = -step;
                    break;
                case "2":
                    angX = step;
                    break;
                case " ":
                    context.camera.transfo.debug("SPACE");
                    context.paint();
                    return;
            }
            context.camera.transfo.orbitAroundX(angX);
            context.camera.transfo.orbitAroundY(angY);
            context.camera.debug("Camera");
            context.paint();
        });
    };
    void action();
}


},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
35175(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var ___rspack_import_1 = __webpack_require__(44416);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Test"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGVzdF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZXR0aW5ncy0yMGE1ZjAuNDhlZmJiMmZiYjkyZmQ0ZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXN0L18vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXN0L3BhZ2UubWR4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxuICAgIHRnZENhbGNSYW5kb20sXG4gICAgVGdkQ2FtZXJhUGVyc3BlY3RpdmUsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkRmlsdGVySHVlUm90YXRpb24sXG4gICAgVGdkR2VvbWV0cnlCb3gsXG4gICAgdGdkTG9hZEdsYixcbiAgICBUZ2RNYXQzLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbEdob3N0LFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcbiAgICBUZ2RQYWludGVyQXhlcyxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckZpbHRlcixcbiAgICBUZ2RQYWludGVyRnJhbWVidWZmZXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyTm9kZSxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgVGdkVmVjMyxcbiAgICB3ZWJnbFByZXNldEN1bGwsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXG5cbmltcG9ydCBTdXphbmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyAvPlxufVxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVGdkQ2FtZXJhUGVyc3BlY3RpdmUoe1xuICAgICAgICB0cmFuc2ZvOiB7IGRpc3RhbmNlOiA1IH0sXG4gICAgICAgIGZhcjogMTAwLFxuICAgICAgICBuZWFyOiAwLjEsXG4gICAgICAgIGZvdnk6IE1hdGguUEkgLyAyLFxuICAgICAgICB6b29tOiAxLFxuICAgIH0pXG4gICAgY29udGV4dC5jYW1lcmEgPSBjYW1lcmFcbiAgICBjYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbi5mYWNlKFwiK1grWStaXCIpXG4gICAgY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgMClcbiAgICBjYW1lcmEuc3BhY2VIZWlnaHRBdFRhcmdldCA9IDZcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiA5MDAsXG4gICAgICAgIGdlbzoge1xuICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgbG5nOiAwLFxuICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcbiAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKCs2MCksXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBjb250ZXh0LnBhaW50KClcbiAgICBjb25zdCBhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYihTdXphbmVVUkwpXG4gICAgICAgIGlmICghYXNzZXQpIHJldHVyblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3V6YW5uZSBoYXMgYmVlbiBsb2FkZWQhXCIpXG4gICAgICAgIGNvbnN0IGF4ZXMgPSBuZXcgVGdkUGFpbnRlckF4ZXMoY29udGV4dCwgeyBzY2FsZTogMTAgfSlcbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgMTI7IGxvb3ArKykge1xuICAgICAgICAgICAgY29uc3QgdGlwID0gbmV3IFRnZFZlYzMoTWF0aC5yYW5kb20oKSAtIDAuNSwgTWF0aC5yYW5kb20oKSAtIDAuNSwgTWF0aC5yYW5kb20oKSAtIDAuNSlcbiAgICAgICAgICAgICAgICAubm9ybWFsaXplKClcbiAgICAgICAgICAgICAgICAuc2NhbGUodGdkQ2FsY1JhbmRvbSgxLCAzKSlcbiAgICAgICAgICAgIHNlZ21lbnRzLmFkZChbMCwgMCwgMCwgMC41XSwgW3RpcC54LCB0aXAueSwgdGlwLnosIHRnZENhbGNSYW5kb20oMCwgMC41KV0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgICAgICAgICBjdWxsOiB3ZWJnbFByZXNldEN1bGwuYmFjayxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLFxuICAgICAgICAgICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBheGVzLFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0OiBzZWdtZW50cy5tYWtlRGF0YXNldCxcbiAgICAgICAgICAgICAgICAgICAgcm91bmRuZXNzOiA0LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5hZGQoc3RhdGUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gdGdkQ2FsY0RlZ1RvUmFkKDE1KVxuICAgICAgICAgICAgbGV0IGFuZ1ggPSAwXG4gICAgICAgICAgICBsZXQgYW5nWSA9IDBcbiAgICAgICAgICAgIHN3aXRjaCAoZXZ0LmtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JpZW50YXRpb24uZmFjZShcIitYK1krWlwiKVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNhbWVyYS56b29tID0gMVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnNldFBvc2l0aW9uKDAsIDAsIDApLnNldERpc3RhbmNlKDE1KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSAxXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIjZcIjpcbiAgICAgICAgICAgICAgICAgICAgYW5nWSA9IHN0ZXBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxuICAgICAgICAgICAgICAgICAgICBhbmdZID0gLXN0ZXBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiOFwiOlxuICAgICAgICAgICAgICAgICAgICBhbmdYID0gLXN0ZXBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgICAgICBhbmdYID0gc3RlcFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGVidWcoXCJTUEFDRVwiKVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWChhbmdYKVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmJpdEFyb3VuZFkoYW5nWSlcbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLmRlYnVnKFwiQ2FtZXJhXCIpXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdm9pZCBhY3Rpb24oKVxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTJCdUI7QUFFaUI7QUFFUztBQUVsQyxTQUFTLGFBQWE7SUFDakMsT0FBTywyQ0FBQyxnREFBSSxJQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxTQUFHO0FBQ3hDLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxPQUFtQjtJQUM3QixNQUFNLE1BQU0sR0FBRyxJQUFJLG9EQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVB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