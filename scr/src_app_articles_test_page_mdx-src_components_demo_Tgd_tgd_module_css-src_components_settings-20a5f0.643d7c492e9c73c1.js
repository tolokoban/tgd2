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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(___rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/test/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGVzdF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcG9uZW50c19zZXR0aW5ncy0yMGE1ZjAuNjQzZDdjNDkyZTljNzNjMS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGVzdC9fL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3Rlc3QvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RGaWx0ZXJIdWVSb3RhdGlvbixcbiAgICBUZ2RHZW9tZXRyeUJveCxcbiAgICB0Z2RMb2FkR2xiLFxuICAgIFRnZE1hdDMsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZE1hdGVyaWFsR2hvc3QsXG4gICAgVGdkTWF0ZXJpYWxOb3JtYWxzLFxuICAgIFRnZFBhaW50ZXJBeGVzLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyRmlsdGVyLFxuICAgIFRnZFBhaW50ZXJGcmFtZWJ1ZmZlcixcbiAgICBUZ2RQYWludGVyTG9naWMsXG4gICAgVGdkUGFpbnRlck1lc2gsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJOb2RlLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50cyxcbiAgICBUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RWZWMzLFxuICAgIHdlYmdsUHJlc2V0Q3VsbCxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IFN1emFuZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIC8+XG59XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSh7XG4gICAgICAgIHRyYW5zZm86IHsgZGlzdGFuY2U6IDUgfSxcbiAgICAgICAgZmFyOiAxMDAsXG4gICAgICAgIG5lYXI6IDAuMSxcbiAgICAgICAgZm92eTogTWF0aC5QSSAvIDIsXG4gICAgICAgIHpvb206IDEsXG4gICAgfSlcbiAgICBjb250ZXh0LmNhbWVyYSA9IGNhbWVyYVxuICAgIGNhbWVyYS50cmFuc2ZvLm9yaWVudGF0aW9uLmZhY2UoXCIrWCtZK1pcIilcbiAgICBjYW1lcmEudHJhbnNmby5zZXRQb3NpdGlvbigwLCAwLCAwKVxuICAgIGNhbWVyYS5zcGFjZUhlaWdodEF0VGFyZ2V0ID0gNlxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDkwMCxcbiAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICBsYXQ6IDAsXG4gICAgICAgICAgICBsbmc6IDAsXG4gICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtNjApLFxuICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoKzYwKSxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGNvbnRleHQucGFpbnQoKVxuICAgIGNvbnN0IGFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCB0Z2RMb2FkR2xiKFN1emFuZVVSTClcbiAgICAgICAgaWYgKCFhc3NldCkgcmV0dXJuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJTdXphbm5lIGhhcyBiZWVuIGxvYWRlZCFcIilcbiAgICAgICAgY29uc3QgYXhlcyA9IG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAxMCB9KVxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKClcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCAxMjsgbG9vcCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aXAgPSBuZXcgVGdkVmVjMyhNYXRoLnJhbmRvbSgpIC0gMC41LCBNYXRoLnJhbmRvbSgpIC0gMC41LCBNYXRoLnJhbmRvbSgpIC0gMC41KVxuICAgICAgICAgICAgICAgIC5ub3JtYWxpemUoKVxuICAgICAgICAgICAgICAgIC5zY2FsZSh0Z2RDYWxjUmFuZG9tKDEsIDMpKVxuICAgICAgICAgICAgc2VnbWVudHMuYWRkKFswLCAwLCAwLCAwLjVdLCBbdGlwLngsIHRpcC55LCB0aXAueiwgdGdkQ2FsY1JhbmRvbSgwLCAwLjUpXSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGN1bGw6IHdlYmdsUHJlc2V0Q3VsbC5iYWNrLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFswLjIsIDAuMSwgMCwgMV0sXG4gICAgICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGF4ZXMsXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXQ6IHNlZ21lbnRzLm1ha2VEYXRhc2V0LFxuICAgICAgICAgICAgICAgICAgICByb3VuZG5lc3M6IDQsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KVxuICAgICAgICBjb250ZXh0LmFkZChzdGF0ZSlcbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSB0Z2RDYWxjRGVnVG9SYWQoMTUpXG4gICAgICAgICAgICBsZXQgYW5nWCA9IDBcbiAgICAgICAgICAgIGxldCBhbmdZID0gMFxuICAgICAgICAgICAgc3dpdGNoIChldnQua2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5vcmllbnRhdGlvbi5mYWNlKFwiK1grWStaXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnpvb20gPSAxXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uc2V0UG9zaXRpb24oMCwgMCwgMCkuc2V0RGlzdGFuY2UoMTUpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuem9vbSA9IDFcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiNlwiOlxuICAgICAgICAgICAgICAgICAgICBhbmdZID0gc3RlcFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgICAgICAgICAgICAgIGFuZ1kgPSAtc3RlcFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6XG4gICAgICAgICAgICAgICAgICAgIGFuZ1ggPSAtc3RlcFxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgICAgICAgICAgICAgIGFuZ1ggPSBzdGVwXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIiBcIjpcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kZWJ1ZyhcIlNQQUNFXCIpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ub3JiaXRBcm91bmRYKGFuZ1gpXG4gICAgICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLm9yYml0QXJvdW5kWShhbmdZKVxuICAgICAgICAgICAgY29udGV4dC5jYW1lcmEuZGVidWcoXCJDYW1lcmFcIilcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICB9KVxuICAgIH1cbiAgICB2b2lkIGFjdGlvbigpXG59XG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBMkJ1QjtBQUVpQjtBQUVTO0FBRWxDLFNBQVMsYUFBYTtJQUNqQyxPQUFPLDJDQUFDLGdEQUFJLElBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLFNBQUc7QUFDeEMsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLE9BQW1CO0lBQzdCLE1BQU0sTUFBTSxHQUFHLElBQUksb0RBQW9CLENBQUM7UUFDcEMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMs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