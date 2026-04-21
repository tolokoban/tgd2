"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["default-src_components_demo_Tgd_index_ts"], {
84385(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"Tgd":"src-components-demo-Tgd-tgd-module_Tgd_MESVmx","screen":"src-components-demo-Tgd-tgd-module_screen_NwIHvu","fullscreen":"src-components-demo-Tgd-tgd-module_fullscreen_aGa00I","relative":"src-components-demo-Tgd-tgd-module_relative_IctJ7L","overlay":"src-components-demo-Tgd-tgd-module_overlay_w7EXka","loading":"src-components-demo-Tgd-tgd-module_loading_c4TMDj","canvas":"src-components-demo-Tgd-tgd-module_canvas_OvO7uX","gizmo":"src-components-demo-Tgd-tgd-module_gizmo_r0e5Ca","actions":"src-components-demo-Tgd-tgd-module_actions_OBhA17","enabled":"src-components-demo-Tgd-tgd-module_enabled_dxtnW6","error":"src-components-demo-Tgd-tgd-module_error_qgsDNU"});

},
70743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"settings":"src-components-settings-settings-module_settings_O3eUw2","show":"src-components-settings-settings-module_show_fh6L2a","hide":"src-components-settings-settings-module_hide_LFyaXn"});

},
88223(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"slider":"src-components-settings-slider-slider-module_slider_u8Haym"});

},
18712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _tgd__rspack_import_0["default"])
});
/* import */ var _tgd__rspack_import_0 = __webpack_require__(75501);




},
75501(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Tgd)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var react__rspack_import_3 = __webpack_require__(96540);
/* import */ var react__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_3);
/* import */ var _components_settings__rspack_import_4 = __webpack_require__(63770);
/* import */ var _Spinner__rspack_import_5 = __webpack_require__(9472);
/* import */ var _tgd_module_css__rspack_import_6 = __webpack_require__(84385);







function Tgd({ className, options, onReady, gizmo = false, width = "640px", height = "480px", noBorder = false, assets, controller, settings, children, disableDefaultDoubleTap = false, fullscreen = false, }) {
    const refUpdateSettings = react__rspack_import_3_default().useRef(null);
    const [settingValues, setSettingValues] = react__rspack_import_3_default().useState(settings);
    const reduceSettings = react__rspack_import_3_default().useCallback(() => {
        if (!settingValues)
            return {};
        const values = {};
        for (const key of Object.keys(settingValues)) {
            values[key] = settingValues[key].value;
        }
        return values;
    }, [settingValues]);
    react__rspack_import_3_default().useEffect(() => {
        if (settingValues) {
            const values = {};
            for (const key of Object.keys(settingValues)) {
                values[key] = settingValues[key].value;
            }
            refUpdateSettings.current?.(reduceSettings());
        }
    }, [settingValues, reduceSettings]);
    const [error, setError] = react__rspack_import_3_default().useState(null);
    const [landscape, setLandscape] = react__rspack_import_3_default().useState(true);
    const [fullscreenAvailable, setFullscreenAvailable] = react__rspack_import_3_default().useState(false);
    const refContext = react__rspack_import_3_default().useRef(null);
    const refCanvas = react__rspack_import_3_default().useRef(null);
    const refScreen = react__rspack_import_3_default().useRef(null);
    const refOrbiter = react__rspack_import_3_default().useRef(null);
    const [loading, setLoading] = react__rspack_import_3_default().useState(true);
    const mountCanvas = (canvas) => {
        if (!canvas)
            return;
        if (refCanvas.current)
            return;
        refCanvas.current = canvas;
        if (gizmo && options)
            options.alpha = false;
        const context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas, options);
        const depthBits = context.gl.getParameter(context.gl.DEPTH_BITS);
        console.log("Depth buffer bits:", depthBits);
        refContext.current = context;
        setLoading(true);
        loadAssets(assets)
            .then((loadedAssets) => {
            try {
                if (controller) {
                    const orbiter = new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
                        debug: true,
                        inertiaOrbit: 1000,
                        inertiaZoom: 500,
                        inertiaPanning: 500,
                        ...controller,
                    });
                    refOrbiter.current = orbiter;
                    context.inputs.pointer.eventTapMultiple.addListener((evt) => {
                        console.log("🚀 [tgd] evt.tapsCount =", evt.tapsCount);
                        evt.preventTap();
                        if (evt.tapsCount === 2 && !disableDefaultDoubleTap) {
                            orbiter.reset((controller.inertiaOrbit ?? 500) * 1e-3);
                        }
                    });
                }
                refUpdateSettings.current = onReady(context, loadedAssets);
                refUpdateSettings.current?.(reduceSettings());
                if (gizmo) {
                    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterGizmo(context));
                }
                context.debugHierarchy();
                context.paint();
            }
            catch (ex) {
                setError(ex instanceof Error ? ex.message : JSON.stringify(ex));
                console.error(ex);
            }
            setLoading(false);
        })
            .catch((ex) => {
            console.error("Unable to initialize the scene!", ex);
            setLoading(false);
        });
    };
    const handleFullscreen = () => {
        const div = refScreen.current;
        if (!div)
            return;
        div.requestFullscreen();
    };
    const handleScreenshot = () => {
        const context = refContext.current;
        if (!context)
            return;
        context.takeSnapshot().then((img) => {
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style.display = "none";
            a.href = img.src;
            a.download = "snapshot.png";
            a.click();
            window.setTimeout(() => document.body.removeChild(a), 30000);
        });
    };
    const handleSetCameraRestPosition = () => {
        const orbiter = refOrbiter.current;
        const context = refContext.current;
        if (!context || !orbiter)
            return;
        orbiter.cameraInitialState = context.camera.getCurrentState();
        orbiter.zoom = 1;
    };
    react__rspack_import_3_default().useEffect(() => {
        const canvas = refCanvas.current;
        const scene = refContext.current;
        if (!canvas || !scene)
            return;
        const observer = new ResizeObserver(() => scene.paint());
        observer.observe(canvas);
        if (!canvas.requestFullscreen) {
            canvas.requestFullscreen = canvas["webkitRequestFullscreen"];
        }
        setFullscreenAvailable(Boolean(canvas.requestFullscreen));
        return () => observer.unobserve(canvas);
    }, [refContext.current, refCanvas.current]);
    if (noBorder || fullscreen) {
        const style = fullscreen
            ? {}
            : {
                width: landscape ? width : height,
                height: landscape ? height : width,
            };
        return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { ref: refScreen, className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].screen, fullscreen && _tgd_module_css__rspack_import_6["default"].fullscreen), style: style, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { className: _tgd_module_css__rspack_import_6["default"].canvas, ref: mountCanvas }), settingValues && (0,react_jsx_runtime__rspack_import_0.jsx)(_components_settings__rspack_import_4.Settings, { values: settingValues, onChange: setSettingValues }), error && (0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: _tgd_module_css__rspack_import_6["default"].error, children: error })] }));
    }
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(className, _tgd_module_css__rspack_import_6["default"].Tgd), children: [(0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].actions, !loading && _tgd_module_css__rspack_import_6["default"].enabled), children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconOrientation, { onClick: () => setLandscape(!landscape) }) }), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconSnapshot, { onClick: handleScreenshot }) }), fullscreenAvailable && ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconFullscreen, { onClick: handleFullscreen }) })), controller && ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconPin, { onClick: handleSetCameraRestPosition }) }))] }), (0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _tgd_module_css__rspack_import_6["default"].relative, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)("div", { ref: refScreen, className: _tgd_module_css__rspack_import_6["default"].screen, style: {
                            width: landscape ? width : height,
                            height: landscape ? height : width,
                        }, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { className: _tgd_module_css__rspack_import_6["default"].canvas, ref: mountCanvas }), settingValues && (0,react_jsx_runtime__rspack_import_0.jsx)(_components_settings__rspack_import_4.Settings, { values: settingValues, onChange: setSettingValues }), error && (0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: _tgd_module_css__rspack_import_6["default"].error, children: error })] }), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(_tgd_module_css__rspack_import_6["default"].overlay, loading && _tgd_module_css__rspack_import_6["default"].loading), children: (0,react_jsx_runtime__rspack_import_0.jsx)(_Spinner__rspack_import_5["default"], {}) }), children] })] }));
}
async function loadAssets({ glb, data, text, image } = {}) {
    const assets = {
        glb: {},
        data: {},
        text: {},
        image: {},
    };
    const loaders = [];
    if (image) {
        Object.keys(image).forEach((key) => {
            loaders.push(async () => {
                const url = image[key];
                console.log("Loading image:", url);
                const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadImage)(url);
                if (asset)
                    assets.image[key] = asset;
            });
        });
    }
    if (glb) {
        Object.keys(glb).forEach((key) => {
            loaders.push(async () => {
                const url = glb[key];
                console.log("Loading GLB:", url);
                const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(url);
                if (asset)
                    assets.glb[key] = asset;
            });
        });
    }
    if (data) {
        Object.keys(data).forEach((key) => {
            loaders.push(async () => {
                const url = data[key];
                const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadArrayBuffer)(url);
                if (asset)
                    assets.data[key] = asset;
            });
        });
    }
    if (text) {
        Object.keys(text).forEach((key) => {
            loaders.push(async () => {
                const url = text[key];
                const asset = await (0,_tolokoban_tgd__rspack_import_1.tgdLoadText)(url);
                if (asset)
                    assets.text[key] = asset;
            });
        });
    }
    await Promise.all(loaders.map((loader) => loader()));
    return assets;
}


},
63770(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Settings: () => (/* reexport safe */ _settings__rspack_import_0.Settings)
});
/* import */ var _settings__rspack_import_0 = __webpack_require__(65227);



},
65227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Settings: () => (Settings)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _slider__rspack_import_3 = __webpack_require__(99806);
/* import */ var _settings_module_css__rspack_import_4 = __webpack_require__(70743);





function Settings({ className, values, onChange }) {
    const [show, setShow] = react__rspack_import_1_default().useState(false);
    const update = (key, value) => {
        const newValues = {
            ...values,
            [key]: {
                ...values[key],
                value,
            },
        };
        onChange(newValues);
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _tolokoban_ui__rspack_import_2.Theme.classNames.join(className, _settings_module_css__rspack_import_4["default"].settings, show ? _settings_module_css__rspack_import_4["default"].show : _settings_module_css__rspack_import_4["default"].hide), children: [(0,react_jsx_runtime__rspack_import_0.jsx)("button", { type: "button", onClick: () => setShow(!show), children: (0,react_jsx_runtime__rspack_import_0.jsx)("svg", { style: { width: "1.5em", height: "1.5em" }, viewBox: "0 0 24 24", preserveAspectRatio: "xMidYMid meet", "stroke-width": "1.5", children: (0,react_jsx_runtime__rspack_import_0.jsx)("path", { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z", stroke: "none", fill: "#fff" }) }) }), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: Object.keys(values).map((key) => {
                    const item = values[key];
                    if (!item)
                        return null;
                    const min = item.min ?? 0;
                    const max = item.max ?? 1;
                    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_slider__rspack_import_3["default"], { label: item.label, min: min, max: max, step: item.step ?? (max - min) / 100, value: item.value, onChange: (value) => update(key, value) }, key));
                }) })] }));
}


},
99806(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _slider__rspack_import_0["default"])
});
/* import */ var _slider__rspack_import_0 = __webpack_require__(5435);



},
5435(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Slider)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _slider_module_css__rspack_import_2 = __webpack_require__(88223);



function Slider({ className, label, min, max, step, value, onChange }) {
    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value);
        onChange(newValue);
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _tolokoban_ui__rspack_import_1.Theme.classNames.join(className, _slider_module_css__rspack_import_2["default"].slider), children: [(0,react_jsx_runtime__rspack_import_0.jsxs)("div", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: label }), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("strong", { children: value.toFixed(2) }) })] }), (0,react_jsx_runtime__rspack_import_0.jsx)("input", { type: "range", step: step, min: min, max: max, value: value, onChange: handleChange })] }));
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL2RlZmF1bHQtc3JjX2NvbXBvbmVudHNfZGVtb19UZ2RfaW5kZXhfdHMuMzY3YjY0YTg4NDc0YjczZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvZGVtby9UZ2QvdGdkLm1vZHVsZS5jc3M/Yjc4NyIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS5jc3M/MTE5ZSIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NsaWRlci9zbGlkZXIubW9kdWxlLmNzcz8zMmNiIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vVGdkL3RnZC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL3NldHRpbmdzL3NsaWRlci9pbmRleC50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9zZXR0aW5ncy9zbGlkZXIvc2xpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiVGdkXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX1RnZF9NRVNWbXhcIixcInNjcmVlblwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9zY3JlZW5fTndJSHZ1XCIsXCJmdWxsc2NyZWVuXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2Z1bGxzY3JlZW5fYUdhMDBJXCIsXCJyZWxhdGl2ZVwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9yZWxhdGl2ZV9JY3RKN0xcIixcIm92ZXJsYXlcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfb3ZlcmxheV93N0VYa2FcIixcImxvYWRpbmdcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfbG9hZGluZ19jNFRNRGpcIixcImNhbnZhc1wiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9jYW52YXNfT3ZPN3VYXCIsXCJnaXptb1wiOlwic3JjLWNvbXBvbmVudHMtZGVtby1UZ2QtdGdkLW1vZHVsZV9naXptb19yMGU1Q2FcIixcImFjdGlvbnNcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfYWN0aW9uc19PQmhBMTdcIixcImVuYWJsZWRcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tVGdkLXRnZC1tb2R1bGVfZW5hYmxlZF9keHRuVzZcIixcImVycm9yXCI6XCJzcmMtY29tcG9uZW50cy1kZW1vLVRnZC10Z2QtbW9kdWxlX2Vycm9yX3Fnc0ROVVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2V0dGluZ3NcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zZXR0aW5nc19PM2VVdzJcIixcInNob3dcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNldHRpbmdzLW1vZHVsZV9zaG93X2ZoNkwyYVwiLFwiaGlkZVwiOlwic3JjLWNvbXBvbmVudHMtc2V0dGluZ3Mtc2V0dGluZ3MtbW9kdWxlX2hpZGVfTEZ5YVhuXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJcIjpcInNyYy1jb21wb25lbnRzLXNldHRpbmdzLXNsaWRlci1zbGlkZXItbW9kdWxlX3NsaWRlcl91OEhheW1cIn07IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3RnZFwiXG5leHBvcnQgKiBmcm9tIFwiLi90Z2RcIlxuIiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICB0eXBlIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdE9wdGlvbnMsXG4gICAgdHlwZSBUZ2REYXRhR2xiLFxuICAgIFRnZFBhaW50ZXJHaXptbyxcbiAgICB0Z2RMb2FkQXJyYXlCdWZmZXIsXG4gICAgdGdkTG9hZEdsYixcbiAgICB0Z2RMb2FkSW1hZ2UsXG4gICAgdGdkTG9hZFRleHQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgeyBJY29uRnVsbHNjcmVlbiwgSWNvbk9yaWVudGF0aW9uLCBJY29uUGluLCBJY29uU25hcHNob3QsIFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgU2V0dGluZ3MsIHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2V0dGluZ3NcIlxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uLy4uL1NwaW5uZXJcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90Z2QubW9kdWxlLmNzc1wiXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0cyB7XG4gICAgaW1hZ2U6IFJlY29yZDxzdHJpbmcsIEhUTUxJbWFnZUVsZW1lbnQ+XG4gICAgZ2xiOiBSZWNvcmQ8c3RyaW5nLCBUZ2REYXRhR2xiPlxuICAgIGRhdGE6IFJlY29yZDxzdHJpbmcsIEFycmF5QnVmZmVyPlxuICAgIHRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxudHlwZSBBc3NldHNUb0xvYWQgPSB7XG4gICAgW2tleSBpbiBrZXlvZiBBc3NldHNdOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG59XG5cbmludGVyZmFjZSBUZ2RQcm9wczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4ge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIG9wdGlvbnM/OiBXZWJHTENvbnRleHRBdHRyaWJ1dGVzXG4gICAgb25SZWFkeShzY2VuZTogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpOiB2b2lkIHwgdW5kZWZpbmVkIHwgKChzZXR0aW5nczogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4pID0+IHZvaWQpXG4gICAgd2lkdGg/OiBzdHJpbmdcbiAgICBoZWlnaHQ/OiBzdHJpbmdcbiAgICBub0JvcmRlcj86IGJvb2xlYW5cbiAgICBnaXptbz86IGJvb2xlYW5cbiAgICBhc3NldHM/OiBQYXJ0aWFsPEFzc2V0c1RvTG9hZD5cbiAgICBjb250cm9sbGVyPzogUGFydGlhbDxUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXRPcHRpb25zPlxuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gICAgZGlzYWJsZURlZmF1bHREb3VibGVUYXA/OiBib29sZWFuXG4gICAgc2V0dGluZ3M/OiBUXG4gICAgZnVsbHNjcmVlbj86IGJvb2xlYW5cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRnZDxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oe1xuICAgIGNsYXNzTmFtZSxcbiAgICBvcHRpb25zLFxuICAgIG9uUmVhZHksXG4gICAgZ2l6bW8gPSBmYWxzZSxcbiAgICB3aWR0aCA9IFwiNjQwcHhcIixcbiAgICBoZWlnaHQgPSBcIjQ4MHB4XCIsXG4gICAgbm9Cb3JkZXIgPSBmYWxzZSxcbiAgICBhc3NldHMsXG4gICAgY29udHJvbGxlcixcbiAgICBzZXR0aW5ncyxcbiAgICBjaGlsZHJlbixcbiAgICBkaXNhYmxlRGVmYXVsdERvdWJsZVRhcCA9IGZhbHNlLFxuICAgIGZ1bGxzY3JlZW4gPSBmYWxzZSxcbn06IFRnZFByb3BzPFQ+KSB7XG4gICAgY29uc3QgcmVmVXBkYXRlU2V0dGluZ3MgPSBSZWFjdC51c2VSZWY8dm9pZCB8IG51bGwgfCAoKHNldHRpbmdzOiBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPikgPT4gdm9pZCk+KG51bGwpXG4gICAgY29uc3QgW3NldHRpbmdWYWx1ZXMsIHNldFNldHRpbmdWYWx1ZXNdID0gUmVhY3QudXNlU3RhdGUoc2V0dGluZ3MpXG4gICAgY29uc3QgcmVkdWNlU2V0dGluZ3MgPSBSZWFjdC51c2VDYWxsYmFjaygoKTogUmVjb3JkPGtleW9mIFQsIG51bWJlcj4gPT4ge1xuICAgICAgICBpZiAoIXNldHRpbmdWYWx1ZXMpIHJldHVybiB7fSBhcyBSZWNvcmQ8a2V5b2YgVCwgbnVtYmVyPlxuICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzZXR0aW5nVmFsdWVzKSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSBzZXR0aW5nVmFsdWVzW2tleV0udmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzIGFzIFJlY29yZDxrZXlvZiBULCBudW1iZXI+XG4gICAgfSwgW3NldHRpbmdWYWx1ZXNdKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzZXR0aW5nVmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZ1ZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHNldHRpbmdWYWx1ZXNba2V5XS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudD8uKHJlZHVjZVNldHRpbmdzKCkpXG4gICAgICAgIH1cbiAgICB9LCBbc2V0dGluZ1ZhbHVlcywgcmVkdWNlU2V0dGluZ3NdKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgICBjb25zdCBbbGFuZHNjYXBlLCBzZXRMYW5kc2NhcGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbZnVsbHNjcmVlbkF2YWlsYWJsZSwgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCByZWZDb250ZXh0ID0gUmVhY3QudXNlUmVmPFRnZENvbnRleHQgfCBudWxsPihudWxsKVxuICAgIGNvbnN0IHJlZkNhbnZhcyA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgcmVmU2NyZWVuID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbClcbiAgICBjb25zdCByZWZPcmJpdGVyID0gUmVhY3QudXNlUmVmPFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCB8IG51bGw+KG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBtb3VudENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgICAgICBpZiAocmVmQ2FudmFzLmN1cnJlbnQpIHJldHVyblxuXG4gICAgICAgIHJlZkNhbnZhcy5jdXJyZW50ID0gY2FudmFzXG4gICAgICAgIGlmIChnaXptbyAmJiBvcHRpb25zKSBvcHRpb25zLmFscGhhID0gZmFsc2VcbiAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgb3B0aW9ucylcbiAgICAgICAgY29uc3QgZGVwdGhCaXRzID0gY29udGV4dC5nbC5nZXRQYXJhbWV0ZXIoY29udGV4dC5nbC5ERVBUSF9CSVRTKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlcHRoIGJ1ZmZlciBiaXRzOlwiLCBkZXB0aEJpdHMpXG4gICAgICAgIHJlZkNvbnRleHQuY3VycmVudCA9IGNvbnRleHRcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBsb2FkQXNzZXRzKGFzc2V0cylcbiAgICAgICAgICAgIC50aGVuKChsb2FkZWRBc3NldHM6IEFzc2V0cykgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmJpdGVyID0gbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZXJ0aWFab29tOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5lcnRpYVBhbm5pbmc6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb250cm9sbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk9yYml0ZXIuY3VycmVudCA9IG9yYml0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW5wdXRzLnBvaW50ZXIuZXZlbnRUYXBNdWx0aXBsZS5hZGRMaXN0ZW5lcigoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5qAIFt0Z2RdIGV2dC50YXBzQ291bnQgPVwiLCBldnQudGFwc0NvdW50KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI1LTExLTEwIGF0IDEzOjM2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnRUYXAoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnQudGFwc0NvdW50ID09PSAyICYmICFkaXNhYmxlRGVmYXVsdERvdWJsZVRhcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmJpdGVyLnJlc2V0KChjb250cm9sbGVyLmluZXJ0aWFPcmJpdCA/PyA1MDApICogMWUtMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZlVwZGF0ZVNldHRpbmdzLmN1cnJlbnQgPSBvblJlYWR5KGNvbnRleHQsIGxvYWRlZEFzc2V0cylcbiAgICAgICAgICAgICAgICAgICAgcmVmVXBkYXRlU2V0dGluZ3MuY3VycmVudD8uKHJlZHVjZVNldHRpbmdzKCkpXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaXptbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5hZGQobmV3IFRnZFBhaW50ZXJHaXptbyhjb250ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnSGllcmFyY2h5KClcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXggaW5zdGFuY2VvZiBFcnJvciA/IGV4Lm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShleCkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSB0aGUgc2NlbmUhXCIsIGV4KVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSByZWZTY3JlZW4uY3VycmVudFxuICAgICAgICBpZiAoIWRpdikgcmV0dXJuXG5cbiAgICAgICAgZGl2LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU2NyZWVuc2hvdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHJlZkNvbnRleHQuY3VycmVudFxuICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVyblxuXG4gICAgICAgIGNvbnRleHQudGFrZVNuYXBzaG90KCkudGhlbigoaW1nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSlcbiAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgICBhLmhyZWYgPSBpbWcuc3JjXG4gICAgICAgICAgICBhLmRvd25sb2FkID0gXCJzbmFwc2hvdC5wbmdcIlxuICAgICAgICAgICAgYS5jbGljaygpXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpLCAzMDAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlU2V0Q2FtZXJhUmVzdFBvc2l0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBvcmJpdGVyID0gcmVmT3JiaXRlci5jdXJyZW50XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjb250ZXh0IHx8ICFvcmJpdGVyKSByZXR1cm5cblxuICAgICAgICBvcmJpdGVyLmNhbWVyYUluaXRpYWxTdGF0ZSA9IGNvbnRleHQuY2FtZXJhLmdldEN1cnJlbnRTdGF0ZSgpXG4gICAgICAgIG9yYml0ZXIuem9vbSA9IDFcbiAgICB9XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gcmVmQ2FudmFzLmN1cnJlbnRcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByZWZDb250ZXh0LmN1cnJlbnRcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIXNjZW5lKSByZXR1cm5cblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiBzY2VuZS5wYWludCgpKVxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGNhbnZhcylcbiAgICAgICAgaWYgKCFjYW52YXMucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbiA9IChjYW52YXMgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbXCJ3ZWJraXRSZXF1ZXN0RnVsbHNjcmVlblwiXSBhcyAoXG4gICAgICAgICAgICAgICAgb3B0aW9ucz86IEZ1bGxzY3JlZW5PcHRpb25zLFxuICAgICAgICAgICAgKSA9PiBQcm9taXNlPHZvaWQ+XG4gICAgICAgIH1cbiAgICAgICAgc2V0RnVsbHNjcmVlbkF2YWlsYWJsZShCb29sZWFuKGNhbnZhcy5yZXF1ZXN0RnVsbHNjcmVlbikpXG4gICAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoY2FudmFzKVxuICAgIH0sIFtyZWZDb250ZXh0LmN1cnJlbnQsIHJlZkNhbnZhcy5jdXJyZW50XSlcblxuICAgIGlmIChub0JvcmRlciB8fCBmdWxsc2NyZWVuKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlOiBDU1NQcm9wZXJ0aWVzID0gZnVsbHNjcmVlblxuICAgICAgICAgICAgPyB7fVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogbGFuZHNjYXBlID8gd2lkdGggOiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGxhbmRzY2FwZSA/IGhlaWdodCA6IHdpZHRoLFxuICAgICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZTY3JlZW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oc3R5bGVzLnNjcmVlbiwgZnVsbHNjcmVlbiAmJiBzdHlsZXMuZnVsbHNjcmVlbil9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXttb3VudENhbnZhc30gLz5cbiAgICAgICAgICAgICAgICB7c2V0dGluZ1ZhbHVlcyAmJiA8U2V0dGluZ3M8VD4gdmFsdWVzPXtzZXR0aW5nVmFsdWVzfSBvbkNoYW5nZT17c2V0U2V0dGluZ1ZhbHVlc30gLz59XG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PntlcnJvcn08L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtUaGVtZS5jbGFzc05hbWVzLmpvaW4oY2xhc3NOYW1lLCBzdHlsZXMuVGdkKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKHN0eWxlcy5hY3Rpb25zLCAhbG9hZGluZyAmJiBzdHlsZXMuZW5hYmxlZCl9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uT3JpZW50YXRpb24gb25DbGljaz17KCkgPT4gc2V0TGFuZHNjYXBlKCFsYW5kc2NhcGUpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uU25hcHNob3Qgb25DbGljaz17aGFuZGxlU2NyZWVuc2hvdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ZnVsbHNjcmVlbkF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkZ1bGxzY3JlZW4gb25DbGljaz17aGFuZGxlRnVsbHNjcmVlbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y29udHJvbGxlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblBpbiBvbkNsaWNrPXtoYW5kbGVTZXRDYW1lcmFSZXN0UG9zaXRpb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWZTY3JlZW59XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNjcmVlbn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBsYW5kc2NhcGUgPyB3aWR0aCA6IGhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbGFuZHNjYXBlID8gaGVpZ2h0IDogd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gcmVmPXttb3VudENhbnZhc30gLz5cbiAgICAgICAgICAgICAgICAgICAge3NldHRpbmdWYWx1ZXMgJiYgPFNldHRpbmdzPFQ+IHZhbHVlcz17c2V0dGluZ1ZhbHVlc30gb25DaGFuZ2U9e3NldFNldHRpbmdWYWx1ZXN9IC8+fVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17VGhlbWUuY2xhc3NOYW1lcy5qb2luKHN0eWxlcy5vdmVybGF5LCBsb2FkaW5nICYmIHN0eWxlcy5sb2FkaW5nKX0+XG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFzc2V0cyh7IGdsYiwgZGF0YSwgdGV4dCwgaW1hZ2UgfTogUGFydGlhbDxBc3NldHNUb0xvYWQ+ID0ge30pOiBQcm9taXNlPEFzc2V0cz4ge1xuICAgIGNvbnN0IGFzc2V0czogQXNzZXRzID0ge1xuICAgICAgICBnbGI6IHt9LFxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgdGV4dDoge30sXG4gICAgICAgIGltYWdlOiB7fSxcbiAgICB9XG4gICAgY29uc3QgbG9hZGVyczogQXJyYXk8KCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBbXVxuICAgIGlmIChpbWFnZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhpbWFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGltYWdlW2tleV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgaW1hZ2U6XCIsIHVybClcbiAgICAgICAgICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IHRnZExvYWRJbWFnZSh1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMuaW1hZ2Vba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBpZiAoZ2xiKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGdsYikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGdsYltrZXldXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkaW5nIEdMQjpcIiwgdXJsKVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEdsYih1cmwpXG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0KSBhc3NldHMuZ2xiW2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGRhdGFba2V5XVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZEFycmF5QnVmZmVyKHVybClcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQpIGFzc2V0cy5kYXRhW2tleV0gPSBhc3NldFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsb2FkZXJzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRleHRba2V5XVxuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgdGdkTG9hZFRleHQodXJsKVxuICAgICAgICAgICAgICAgIGlmIChhc3NldCkgYXNzZXRzLnRleHRba2V5XSA9IGFzc2V0XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICBhd2FpdCBQcm9taXNlLmFsbChsb2FkZXJzLm1hcCgobG9hZGVyKSA9PiBsb2FkZXIoKSkpXG4gICAgcmV0dXJuIGFzc2V0c1xufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3NcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBJY29uR2VhciwgVGhlbWUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4vc2xpZGVyXCJcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zZXR0aW5ncy5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IHR5cGUgU2V0dGluZ3NEZWZpbml0aW9ucyA9IFJlY29yZDxcbiAgICBzdHJpbmcsXG4gICAge1xuICAgICAgICB2YWx1ZTogbnVtYmVyXG4gICAgICAgIGxhYmVsOiBzdHJpbmdcbiAgICAgICAgbWluPzogbnVtYmVyXG4gICAgICAgIG1heD86IG51bWJlclxuICAgICAgICBzdGVwPzogbnVtYmVyXG4gICAgfVxuPlxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzUHJvcHM8VCBleHRlbmRzIFNldHRpbmdzRGVmaW5pdGlvbnM+IHtcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZXM6IFRcbiAgICBvbkNoYW5nZSh2YWx1ZXM6IFQpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nczxUIGV4dGVuZHMgU2V0dGluZ3NEZWZpbml0aW9ucz4oeyBjbGFzc05hbWUsIHZhbHVlcywgb25DaGFuZ2UgfTogU2V0dGluZ3NQcm9wczxUPikge1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHVwZGF0ZSA9IChrZXk6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSB7XG4gICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICBba2V5XToge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShuZXdWYWx1ZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5zZXR0aW5ncywgc2hvdyA/IHN0eWxlcy5zaG93IDogc3R5bGVzLmhpZGUpfT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEuNWVtXCIsIGhlaWdodDogXCIxLjVlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiwxNS41QTMuNSwzLjUgMCAwLDEgOC41LDEyQTMuNSwzLjUgMCAwLDEgMTIsOC41QTMuNSwzLjUgMCAwLDEgMTUuNSwxMkEzLjUsMy41IDAgMCwxIDEyLDE1LjVNMTkuNDMsMTIuOTdDMTkuNDcsMTIuNjUgMTkuNSwxMi4zMyAxOS41LDEyQzE5LjUsMTEuNjcgMTkuNDcsMTEuMzQgMTkuNDMsMTFMMjEuNTQsOS4zN0MyMS43Myw5LjIyIDIxLjc4LDguOTUgMjEuNjYsOC43M0wxOS42Niw1LjI3QzE5LjU0LDUuMDUgMTkuMjcsNC45NiAxOS4wNSw1LjA1TDE2LjU2LDYuMDVDMTYuMDQsNS42NiAxNS41LDUuMzIgMTQuODcsNS4wN0wxNC41LDIuNDJDMTQuNDYsMi4xOCAxNC4yNSwyIDE0LDJIMTBDOS43NSwyIDkuNTQsMi4xOCA5LjUsMi40Mkw5LjEzLDUuMDdDOC41LDUuMzIgNy45Niw1LjY2IDcuNDQsNi4wNUw0Ljk1LDUuMDVDNC43Myw0Ljk2IDQuNDYsNS4wNSA0LjM0LDUuMjdMMi4zNCw4LjczQzIuMjEsOC45NSAyLjI3LDkuMjIgMi40Niw5LjM3TDQuNTcsMTFDNC41MywxMS4zNCA0LjUsMTEuNjcgNC41LDEyQzQuNSwxMi4zMyA0LjUzLDEyLjY1IDQuNTcsMTIuOTdMMi40NiwxNC42M0MyLjI3LDE0Ljc4IDIuMjEsMTUuMDUgMi4zNCwxNS4yN0w0LjM0LDE4LjczQzQuNDYsMTguOTUgNC43MywxOS4wMyA0Ljk1LDE4Ljk1TDcuNDQsMTcuOTRDNy45NiwxOC4zNCA4LjUsMTguNjggOS4xMywxOC45M0w5LjUsMjEuNThDOS41NCwyMS44MiA5Ljc1LDIyIDEwLDIySDE0QzE0LjI1LDIyIDE0LjQ2LDIxLjgyIDE0LjUsMjEuNThMMTQuODcsMTguOTNDMTUuNSwxOC42NyAxNi4wNCwxOC4zNCAxNi41NiwxNy45NEwxOS4wNSwxOC45NUMxOS4yNywxOS4wMyAxOS41NCwxOC45NSAxOS42NiwxOC43M0wyMS42NiwxNS4yN0MyMS43OCwxNS4wNSAyMS43MywxNC43OCAyMS41NCwxNC42M0wxOS40MywxMi45N1pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXModmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdmFsdWVzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IGl0ZW0ubWluID8/IDBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gaXRlbS5tYXggPz8gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e2l0ZW0uc3RlcCA/PyAobWF4IC0gbWluKSAvIDEwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGUoa2V5LCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL3NsaWRlclwiXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NsaWRlci5tb2R1bGUuY3NzXCJcblxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJQcm9wcyB7XG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIG1pbjogbnVtYmVyXG4gICAgbWF4OiBudW1iZXJcbiAgICBzdGVwOiBudW1iZXJcbiAgICB2YWx1ZTogbnVtYmVyXG4gICAgb25DaGFuZ2UodmFsdWU6IG51bWJlcik6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgY2xhc3NOYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN0ZXAsIHZhbHVlLCBvbkNoYW5nZSB9OiBTbGlkZXJQcm9wcykge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgb25DaGFuZ2UobmV3VmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1RoZW1lLmNsYXNzTmFtZXMuam9pbihjbGFzc05hbWUsIHN0eWxlcy5zbGlkZXIpfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dmFsdWUudG9GaXhlZCgyKX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIHN0ZXA9e3N0ZXB9IG1pbj17bWlufSBtYXg9e21heH0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyw4cEJBQThwQixFOzs7Ozs7OztBQ0Q5cUI7QUFDQSxzREFBZSxDQUFDLCtMQUErTCxFOzs7Ozs7OztBQ0QvTTtBQUNBLHNEQUFlLENBQUMsc0VBQXNFLEU7Ozs7Ozs7OztBQ0R2RDtBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTRTtBQUNzRTtBQUNqRDtBQUM4QjtBQUN2QztBQUNFO0FBMkJ0QixTQUFTLEdBQUcsQ0FBZ0MsRUFDdkQsU0FBUyxFQUNULE9BQU8sRUFDUCxPQUFPLEVBQ1AsS0FBSyxHQUFHLEtBQUssRUFDYixLQUFLLEdBQUcsT0FBTyxFQUNmLE1BQU0sR0FBRyxPQUFPLEVBQ2hCLFFBQVEsR0FBRyxLQUFLLEVBQ2hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLFFBQVEsRUFDUix1QkFBdUIsR0FBRyxLQUFLLEVBQy9CLFVBQVUsR0FBRyxLQUFLLEdBQ1I7SUFDVixNQUFNLGlCQUFpQixHQUFHLHVDQUFZLENBQThELElBQUksQ0FBQztJQUN6RyxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcseUNBQWMsQ0FBQyxRQUFRLENBQUM7SUFDbEUsTUFBTSxjQUFjLEdBQUcsNENBQWlCLENBQUMsR0FBNEIsRUFBRTtRQUNuRSxJQUFJLENBQUMsYUFBYTtZQUFFLE9BQU8s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