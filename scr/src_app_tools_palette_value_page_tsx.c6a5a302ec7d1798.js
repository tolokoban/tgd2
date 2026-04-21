"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_palette_value_page_tsx"], {
63594(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewDisk":"src-app-tools-palette-PalettePreviewDisk-PalettePreviewDisk-module_palettePreviewDisk_bLiGLA"});

},
96828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewHorizontal":"src-app-tools-palette-PalettePreviewHorizontal-PalettePreviewHorizontal-module_palettePreviewHorizontal_TA5I7W"});

},
7457(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"paletteEditor":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_paletteEditor_LIUc1o","disk":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_disk_Bz6ZCp","horizontal":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontal_DKdnz5","horizontalA":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontalA_SRgGw0","horizontalB":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_horizontalB_NDNEU3","scroll":"src-app-tools-palette-[value]-_PaletteEditor-PaletteEditor-module_scroll_YkEfu_"});

},
77704(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"sliders":"src-app-tools-palette-[value]-_PaletteEditor-Sliders-Sliders-module_sliders_HG1pji","slider":"src-app-tools-palette-[value]-_PaletteEditor-Sliders-Sliders-module_slider_GsGKk_"});

},
62169(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"CodeViewer":"src-components-demo-CodeViewer-CodeViewer-module_CodeViewer_PtL7M5","popup":"src-components-demo-CodeViewer-CodeViewer-module_popup_nSDZCR"});

},
56060(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewDisk: () => (ViewPalettePreviewDisk)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _PalettePreviewDisk_module_css__rspack_import_3 = __webpack_require__(63594);
/* import */ var _painter__rspack_import_4 = __webpack_require__(26877);





const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPalettePreviewDisk(props) {
    const painter = usePainter();
    const style = {
        ...(0,_tolokoban_ui__rspack_import_2.styleCommon)(props),
    };
    const { a, b, d, c } = props;
    react__rspack_import_1.useEffect(() => {
        painter.a = a;
        painter.b = b;
        painter.c = c;
        painter.d = d;
        painter.paint();
    }, [a, b, c, d]);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: painter.setCanvas, className: $.join(props.className, _PalettePreviewDisk_module_css__rspack_import_3["default"].palettePreviewDisk), style: style }));
}
function usePainter() {
    const ref = react__rspack_import_1.useRef(null);
    if (!ref.current)
        ref.current = new _painter__rspack_import_4.PalettePreviewDiskPainter();
    return ref.current;
}


},
27326(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewDisk: () => (/* reexport safe */ _PalettePreviewDisk__rspack_import_0.ViewPalettePreviewDisk)
});
/* import */ var _PalettePreviewDisk__rspack_import_0 = __webpack_require__(56060);



},
26877(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PalettePreviewDiskPainter: () => (PalettePreviewDiskPainter)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class PalettePreviewDiskPainter {
    a = [0.5, 0.5, 0.5];
    b = [0.5, 0.5, 0.5];
    c = [0.5, 0.5, 0.5];
    d = [0.5, 0.5, 0.5];
    context = null;
    setCanvas = (canvas) => {
        if (this.context) {
            this.context.delete();
            this.context = null;
        }
        if (canvas) {
            const context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas, { antialias: false });
            context.add(new _tolokoban_tgd__rspack_import_0.TgdPainterFragmentShader(context, {
                shader: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniA: "vec3",
                        uniB: "vec3",
                        uniC: "vec3",
                        uniD: "vec3",
                        uniAspectRatio: "float",
                    },
                    varying: {
                        varUV: "vec2",
                    },
                    outputs: {
                        FragColor: "vec4",
                    },
                    functions: {
                        ...(0,_tolokoban_tgd__rspack_import_0.tgdCodeFunction_uv2polar)(),
                    },
                    mainCode: [
                        "vec2 polar = uv2polar(varUV);",
                        "float r = polar.x;",
                        `float t = fract(1.0 + (polar.y + ${Math.PI / 2}) * ${0.5 / Math.PI});`,
                        "float light = 1.0 - smoothstep(0.4, 0.42, abs(r - 0.5));",
                        "FragColor = vec4(",
                        [`light * (uniA + uniB*cos(${2 * Math.PI}*(uniC * t + uniD))),`, "1"],
                        ");",
                        "if (t < 0.0) FragColor = vec4(1);",
                    ],
                }),
                setUniforms: ({ program, context }) => {
                    program.uniform3f("uniA", ...this.a);
                    program.uniform3f("uniB", ...this.b);
                    program.uniform3f("uniC", ...this.c);
                    program.uniform3f("uniD", ...this.d);
                    program.uniform1f("uniAspectRatio", context.aspectRatio);
                },
            }));
            context.paint();
            this.context = context;
        }
    };
    paint() {
        const { context } = this;
        if (!context)
            return;
        context.paint();
    }
}


},
170(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewHorizontal: () => (ViewPalettePreviewHorizontal)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _PalettePreviewHorizontal_module_css__rspack_import_3 = __webpack_require__(96828);
/* import */ var _painter__rspack_import_4 = __webpack_require__(11744);





const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPalettePreviewHorizontal(props) {
    const painter = usePainter();
    const style = {
        ...(0,_tolokoban_ui__rspack_import_2.styleCommon)(props),
    };
    const { a, b, d, c } = props;
    react__rspack_import_1.useEffect(() => {
        painter.a = a;
        painter.b = b;
        painter.c = c;
        painter.d = d;
        painter.paint();
    }, [a, b, c, d]);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: painter.setCanvas, className: $.join(props.className, _PalettePreviewHorizontal_module_css__rspack_import_3["default"].palettePreviewHorizontal), style: style }));
}
function usePainter() {
    const ref = react__rspack_import_1.useRef(null);
    if (!ref.current)
        ref.current = new _painter__rspack_import_4.PalettePreviewHorizontalPainter();
    return ref.current;
}


},
30783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalettePreviewHorizontal: () => (/* reexport safe */ _PalettePreviewHorizontal__rspack_import_0.ViewPalettePreviewHorizontal)
});
/* import */ var _PalettePreviewHorizontal__rspack_import_0 = __webpack_require__(170);



},
11744(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PalettePreviewHorizontalPainter: () => (PalettePreviewHorizontalPainter)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

class PalettePreviewHorizontalPainter {
    a = [0.5, 0.5, 0.5];
    b = [0.5, 0.5, 0.5];
    c = [0.5, 0.5, 0.5];
    d = [0.5, 0.5, 0.5];
    context = null;
    setCanvas = (canvas) => {
        if (this.context) {
            this.context.delete();
            this.context = null;
        }
        if (canvas) {
            const context = new _tolokoban_tgd__rspack_import_0.TgdContext(canvas, { antialias: false });
            context.add(new _tolokoban_tgd__rspack_import_0.TgdPainterFragmentShader(context, {
                shader: new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniA: "vec3",
                        uniB: "vec3",
                        uniC: "vec3",
                        uniD: "vec3",
                    },
                    varying: {
                        varUV: "vec2",
                    },
                    outputs: {
                        FragColor: "vec4",
                    },
                    mainCode: [
                        "float t = varUV.x;",
                        "FragColor = vec4(",
                        [`uniA + uniB*cos(${2 * Math.PI}*(uniC * t + uniD)),`, "1"],
                        ");",
                    ],
                }),
                setUniforms: ({ program }) => {
                    program.uniform3f("uniA", ...this.a);
                    program.uniform3f("uniB", ...this.b);
                    program.uniform3f("uniC", ...this.c);
                    program.uniform3f("uniD", ...this.d);
                },
            }));
            context.paint();
            this.context = context;
        }
    };
    paint() {
        const { context } = this;
        if (!context)
            return;
        context.paint();
    }
}


},
68245(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteEditor: () => (ViewPaletteEditor)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(99002);
/* import */ var _Sliders__rspack_import_4 = __webpack_require__(15960);
/* import */ var _PalettePreviewDisk__rspack_import_5 = __webpack_require__(27326);
/* import */ var _PaletteEditor_module_css__rspack_import_6 = __webpack_require__(7457);
/* import */ var _PalettePreviewHorizontal__rspack_import_7 = __webpack_require__(30783);








const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewPaletteEditor(props) {
    const [value, setValue] = react__rspack_import_1.useState(props);
    const style = {
        ...(0,_tolokoban_ui__rspack_import_2.styleCommon)(props),
    };
    const { a, b, c, d } = value;
    const update = (v) => {
        setValue({
            ...value,
            ...v,
        });
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: $.join(props.className, _PaletteEditor_module_css__rspack_import_6["default"].paletteEditor), style: style, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)("aside", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_PalettePreviewDisk__rspack_import_5.ViewPalettePreviewDisk, { className: _PaletteEditor_module_css__rspack_import_6["default"].disk, a: a, b: b, c: c, d: d }), (0,react_jsx_runtime__rspack_import_0.jsx)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, { className: _PaletteEditor_module_css__rspack_import_6["default"].horizontal, a: a, b: b, c: c, d: d }), (0,react_jsx_runtime__rspack_import_0.jsx)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, { className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalA, a: a, b: b, c: c, d: d }), (0,react_jsx_runtime__rspack_import_0.jsx)(_PalettePreviewHorizontal__rspack_import_7.ViewPalettePreviewHorizontal, { className: _PaletteEditor_module_css__rspack_import_6["default"].horizontalB, a: a, b: b, c: c, d: d })] }), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewTabs, { maxHeight: "100%", children: [(0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewTab, { label: (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconFix, {}), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "Config" })] }), className: _PaletteEditor_module_css__rspack_import_6["default"].scroll, children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_Sliders__rspack_import_4.ViewSliders, { label: "Luminance", value: a, onChange: (v) => update({ a: v }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_Sliders__rspack_import_4.ViewSliders, { label: "Saturation", value: b, onChange: (v) => update({ b: v }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_Sliders__rspack_import_4.ViewSliders, { label: "Spread", value: c, onChange: (v) => update({ c: v }) }), (0,react_jsx_runtime__rspack_import_0.jsx)(_Sliders__rspack_import_4.ViewSliders, { label: "Shift", value: d, onChange: (v) => update({ d: v }) })] }, "config"), (0,react_jsx_runtime__rspack_import_0.jsxs)(_tolokoban_ui__rspack_import_2.ViewTab, { label: (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconShare, {}), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "Share" })] }), children: [(0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "glsl", value: `vec3 palette(float t) {
    return vec3(${arr(a)})
        + vec3(${arr(b)}) * cos(
            ${2 * Math.PI} * (
                t * vec3(${arr(c)})
                + vec3(${arr(d)})
            )
        )
}` }), (0,react_jsx_runtime__rspack_import_0.jsx)(_components_demo_CodeViewer__rspack_import_3["default"], { language: "ts", value: `tgdCodeFunction_palette({
    a: [${arr(a)}, 1],
    b: [${arr(b)}, 1],
    c: [${arr(c)}, 1],
    d: [${arr(d)}, 1],
})` })] }, "share")] })] }));
}
function arr(a) {
    return `${a.map((v) => v.toFixed(3)).join(", ")}`;
}


},
20462(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewSliders: () => (ViewSliders)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _Sliders_module_css__rspack_import_3 = __webpack_require__(77704);




const $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewSliders(props) {
    const [lock, setLock] = react__rspack_import_1.useState(false);
    const style = {
        ...(0,_tolokoban_ui__rspack_import_2.styleCommon)(props),
    };
    const [red, green, blue] = props.value;
    const setRed = (v) => props.onChange([v, green, blue]);
    const setGreen = (v) => props.onChange([red, v, blue]);
    const setBlue = (v) => props.onChange([red, green, v]);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: $.join(props.className, _Sliders_module_css__rspack_import_3["default"].sliders), style: style, children: [(0,react_jsx_runtime__rspack_import_0.jsxs)("header", { children: [(0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: props.label }), lock ? ((0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconLockClose, { onClick: () => setLock(false) })) : ((0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.IconLockOpen, { onClick: () => setLock(true) }))] }), lock && (0,react_jsx_runtime__rspack_import_0.jsx)(Slider, { label: "*", value: (red + green + blue) / 3, onChange: (v) => props.onChange([v, v, v]) }), !lock && ((0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, { children: [(0,react_jsx_runtime__rspack_import_0.jsx)(Slider, { label: "R", value: red, onChange: setRed }), (0,react_jsx_runtime__rspack_import_0.jsx)(Slider, { label: "G", value: green, onChange: setGreen }), (0,react_jsx_runtime__rspack_import_0.jsx)(Slider, { label: "B", value: blue, onChange: setBlue })] }))] }));
}
function Slider({ label, value, onChange }) {
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: _Sliders_module_css__rspack_import_3["default"].slider, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("label", { children: label }), (0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_2.ViewSlider, { min: 0, max: 1, step: 0.01, text: value.toFixed(2), value: value, onChange: onChange })] }));
}


},
15960(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewSliders: () => (/* reexport safe */ _Sliders__rspack_import_0.ViewSliders)
});
/* import */ var _Sliders__rspack_import_0 = __webpack_require__(20462);



},
71361(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteEditor: () => (/* reexport safe */ _PaletteEditor__rspack_import_0.ViewPaletteEditor)
});
/* import */ var _PaletteEditor__rspack_import_0 = __webpack_require__(68245);



},
25588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _app_routes__rspack_import_2 = __webpack_require__(39419);
/* import */ var _PaletteEditor__rspack_import_3 = __webpack_require__(71361);




function Page() {
    const { a, b, d, c } = useParams();
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_PaletteEditor__rspack_import_3.ViewPaletteEditor, { a: a, b: b, c: c, d: d });
}
function useParams() {
    const value = (0,_app_routes__rspack_import_2.useRouteParamAsString)("value");
    return react__rspack_import_1_default().useMemo(() => {
        switch (value.length) {
            case 24:
                return parse24(value);
            default:
                return DEFAULT_PALETTE;
        }
    }, [value]);
}
function parse24(value) {
    if (value.length !== 24)
        return DEFAULT_PALETTE;
    return {
        a: parse(value, 0),
        b: parse(value, 1),
        c: parse(value, 2),
        d: parse(value, 3),
    };
}
function parse(value, arrIdx) {
    const stride = Math.floor(value.length / 4);
    const word = Math.floor(stride / 3);
    const max = Math.pow(16, word) - 1;
    return [0, 1, 2].map((item) => {
        const index = arrIdx * stride + word * item;
        const hex = `0x${value.slice(index, index + word)}`;
        return parseInt(hex) / max;
    });
}
const DEFAULT_PALETTE = {
    a: [0.5, 0.5, 0.5],
    b: [0.5, 0.5, 0.5],
    c: [1, 1, 1],
    d: [0, 0.33, 0.67],
};


},
5253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (CodeViewerView)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var prismjs__rspack_import_1 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_1);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _CodeViewer_module_css__rspack_import_3 = __webpack_require__(62169);
/* import */ var _grammar__rspack_import_4 = __webpack_require__(7439);





function CodeViewerView(props) {
    const { value } = props;
    if (typeof value === "string") {
        const singleProps = {
            ...props,
            value,
        };
        return (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { ...singleProps });
    }
    const multiProps = {
        ...props,
        value,
    };
    return (0,react_jsx_runtime__rspack_import_0.jsx)(MultiCodeViewerView, { ...multiProps });
}
function SingleCodeViewerView(props) {
    const refTimeout = react__rspack_import_2.useRef(0);
    const [popup, setPopup] = react__rspack_import_2.useState(false);
    const refCode = react__rspack_import_2.useRef(null);
    react__rspack_import_2.useEffect(() => {
        window.setTimeout(() => {
            const code = refCode.current;
            if (!code)
                return;
            const html = prismjs__rspack_import_1_default().highlight(props.value, (0,_grammar__rspack_import_4.getGrammarForLanguage)(props.language), props.language);
            code.innerHTML = html;
        }, 100);
    }, [props.value, props.language, refCode.current]);
    const handleDoubleClick = () => {
        navigator.clipboard.writeText(props.value).then(() => {
            setPopup(true);
            window.clearTimeout(refTimeout.current);
            refTimeout.current = window.setTimeout(() => setPopup(false), 7000);
        });
    };
    const handlePopupClick = () => {
        setPopup(false);
        window.clearTimeout(refTimeout.current);
        refTimeout.current = 0;
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: getClassNames(props), onDoubleClick: handleDoubleClick, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("pre", { children: (0,react_jsx_runtime__rspack_import_0.jsx)("code", { ref: refCode, className: `language-${props.language}` }) }), popup && ((0,react_jsx_runtime__rspack_import_0.jsx)("button", { className: _CodeViewer_module_css__rspack_import_3["default"].popup, onClick: handlePopupClick, type: "button", children: (0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: "This code has been copied to the clipboard!" }) }))] }));
}
function getClassNames(props) {
    const classNames = [_CodeViewer_module_css__rspack_import_3["default"].CodeViewer];
    if (typeof props.className === "string") {
        classNames.push(props.className);
    }
    return classNames.join(" ");
}
function MultiCodeViewerView(props) {
    const captions = Object.keys(props.value);
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, { children: captions.map((caption, index) => ((0,react_jsx_runtime__rspack_import_0.jsxs)("details", { open: false, id: props.id, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("summary", { children: caption }), (0,react_jsx_runtime__rspack_import_0.jsx)(SingleCodeViewerView, { value: props.value[caption], language: props.language })] }, caption))) }));
}


},
7439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getGrammarForLanguage: () => (getGrammarForLanguage)
});
/* import */ var prismjs__rspack_import_0 = __webpack_require__(28848);
/* import */ var prismjs__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(prismjs__rspack_import_0);
/* import */ var prismjs_components_prism_javascript__rspack_import_1 = __webpack_require__(25723);
/* import */ var prismjs_components_prism_javascript__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__rspack_import_1);
/* import */ var prismjs_components_prism_jsx__rspack_import_2 = __webpack_require__(65903);
/* import */ var prismjs_components_prism_jsx__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__rspack_import_2);
/* import */ var prismjs_components_prism_typescript__rspack_import_3 = __webpack_require__(59587);
/* import */ var prismjs_components_prism_typescript__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__rspack_import_3);
/* import */ var prismjs_components_prism_tsx__rspack_import_4 = __webpack_require__(82769);
/* import */ var prismjs_components_prism_tsx__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_tsx__rspack_import_4);
/* import */ var prismjs_components_prism_c__rspack_import_5 = __webpack_require__(50271);
/* import */ var prismjs_components_prism_c__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_c__rspack_import_5);
/* import */ var prismjs_components_prism_glsl__rspack_import_6 = __webpack_require__(73980);
/* import */ var prismjs_components_prism_glsl__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_glsl__rspack_import_6);







function getGrammarForLanguage(language) {
    switch (language) {
        case "ts":
            return (prismjs__rspack_import_0_default().languages.typescript);
        case "tsx":
            return (prismjs__rspack_import_0_default().languages.tsx);
        case "frag":
        case "vert":
            return (prismjs__rspack_import_0_default().languages.glsl);
        default:
            return GLSL;
    }
}
const TYPES = [
    "bvec2",
    "bvec3",
    "bvec4",
    "dmat2",
    "dmat2x2",
    "dmat2x3",
    "dmat2x4",
    "dmat3",
    "dmat3x2",
    "dmat3x3",
    "dmat3x4",
    "dmat4",
    "dmat4x2",
    "dmat4x3",
    "dmat4x4",
    "dvec2",
    "dvec3",
    "dvec4",
    "float",
    "fvec2",
    "fvec3",
    "fvec4",
    "isampler1D",
    "isampler1DArray",
    "isampler2D",
    "isampler2DArray",
    "isampler2DMS",
    "isampler2DMSArray",
    "isampler2DRect",
    "isampler3D",
    "isamplerBuffer",
    "isamplerCube",
    "isamplerCubeArray",
    "ivec2",
    "ivec3",
    "ivec4",
    "mat2",
    "mat2x2",
    "mat2x3",
    "mat2x4",
    "mat3",
    "mat3x2",
    "mat3x3",
    "mat3x4",
    "mat4",
    "mat4x2",
    "mat4x3",
    "mat4x4",
    "sample",
    "sampler1D",
    "sampler1DArray",
    "sampler1DArrayShadow",
    "sampler1DShadow",
    "sampler2D",
    "sampler2DArray",
    "sampler2DArrayShadow",
    "sampler2DMS",
    "sampler2DMSArray",
    "sampler2DRect",
    "sampler2DRectShadow",
    "sampler2DShadow",
    "sampler3D",
    "samplerBuffer",
    "samplerCube",
    "samplerCubeArray",
    "samplerCubeArrayShadow",
    "samplerCubeShadow",
    "usampler1D",
    "usampler1DArray",
    "usampler2D",
    "usampler2DArray",
    "usampler2DMS",
    "usampler2DMSArray",
    "usampler2DRect",
    "usampler3D",
    "usamplerBuffer",
    "usamplerCube",
    "usamplerCubeArray",
    "uvec2",
    "uvec3",
    "uvec4",
    "vec2",
    "vec3",
    "vec4",
    "void",
];
const KEYWORDS = [
    "centroid",
    "const",
    "discard",
    "else",
    "flat",
    "highp",
    "if",
    "in",
    "inout",
    "invariant",
    "layout",
    "lowp",
    "mediump",
    "noperspective",
    "out",
    "patch",
    "precision",
    "smooth",
    "subroutine",
    "uniform",
    "active",
    "asm",
    "cast",
    "class",
    "common",
    "enum",
    "extern",
    "external",
    "filter",
    "fixed",
    "goto",
    "half",
    "hvec2",
    "hvec3",
    "hvec4",
    "iimage1D",
    "iimage1DArray",
    "iimage2D",
    "iimage2DArray",
    "iimage3D",
    "iimageBuffer",
    "iimageCube",
    "image1D",
    "image1DArray",
    "image1DArrayShadow",
    "image1DShadow",
    "image2D",
    "image2DArray",
    "image2DArrayShadow",
    "image2DShadow",
    "image3D",
    "imageBuffer",
    "imageCube",
    "inline",
    "input",
    "interface",
    "long",
    "namespace",
    "noinline",
    "output",
    "packed",
    "partition",
    "public",
    "row_major",
    "sampler3DRect",
    "short",
    "sizeof",
    "static",
    "superp",
    "template",
    "this",
    "typedef",
    "uimage1D",
    "uimage1DArray",
    "uimage2D",
    "uimage2DArray",
    "uimage3D",
    "uimageBuffer",
    "uimageCube",
    "union",
    "unsigned",
    "using",
    "volatile",
];
const GLOBALS = [
    "gl_DepthRange",
    "gl_DepthRange.diff",
    "gl_DepthRange.far",
    "gl_DepthRange.near",
    "gl_FragCoord",
    "gl_FragDepth",
    "gl_FrontFacing",
    "gl_InstanceID",
    "gl_PointCoord",
    "gl_PointSize",
    "gl_Position",
    "gl_VertexID",
];
const FUNCTIONS = [
    "abs",
    "acos",
    "acosh",
    "all",
    "any",
    "asin",
    "asinh",
    "atan",
    "atanh",
    "ceil",
    "clamp",
    "cos",
    "cosh",
    "cross",
    "degrees",
    "determinant",
    "dFdx",
    "dFdy",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floatBitsToInt",
    "floatBitsToUint",
    "floor",
    "fract",
    "fwidth",
    "greaterThan",
    "greaterThanEqual",
    "intBitsToFloat",
    "inverse",
    "inversesqrt",
    "isinf",
    "isnan",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "modf",
    "normalize",
    "not",
    "notEqual",
    "outerProduct",
    "packHalf2x16",
    "packSnorm2x16",
    "packUnorm2x16",
    "pow",
    "radians",
    "reflect",
    "refract",
    "round",
    "roundEven",
    "sign",
    "sin",
    "sinh",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "tanh",
    "texelFetch",
    "texelFetchOffset",
    "texture",
    "textureGrad",
    "textureGradOffset",
    "textureLod",
    "textureLodOffset",
    "textureOffset",
    "textureProj",
    "textureProjGrad",
    "textureProjGradOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureProjOffset",
    "textureSize",
    "transpose",
    "trunc",
    "uintBitsToFloat",
    "unpackHalf2x16",
    "unpackSnorm2x16",
    "unpackUnorm2x16",
];
const GLSL = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /(^|[^\\:])\/\/.*/g,
            lookbehind: true,
            greedy: true,
        },
        {
            pattern: /^#.+$/g,
            lookbehind: false,
            greedy: true,
        },
    ],
    number: {
        pattern: /(^|[^\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?|\d+(?:_\d+)*n|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?)(?![\w$])/,
        lookbehind: true,
    },
    type: makeIdentifiersRX(TYPES),
    keyword: makeIdentifiersRX(KEYWORDS),
    global: makeIdentifiersRX(GLOBALS),
    function: makeIdentifiersRX(FUNCTIONS),
};
function makeIdentifiersRX(words) {
    return {
        pattern: new RegExp(`(?:[^a-zA-Z0-9_])(${words.join("|")})(?=[^a-zA-Z0-9_])`),
        lookbehind: false,
        greedy: true,
    };
}


},
99002(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _CodeViewer__rspack_import_0["default"])
});
/* import */ var _CodeViewer__rspack_import_0 = __webpack_require__(5253);



},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC5jNmE1YTMwMmVjN2QxNzk4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL1BhbGV0dGVQcmV2aWV3RGlzay5tb2R1bGUuY3NzPzhjYWUiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzPzMzMmEiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9QYWxldHRlRWRpdG9yLm1vZHVsZS5jc3M/ZTczMiIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvU2xpZGVycy5tb2R1bGUuY3NzPzU5MzciLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci5tb2R1bGUuY3NzP2EyYTMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3RGlzay9QYWxldHRlUHJldmlld0Rpc2sudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0Rpc2svaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3RGlzay9wYWludGVyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvcGFpbnRlci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9QYWxldHRlRWRpdG9yLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9TbGlkZXJzL1NsaWRlcnMudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvaW5kZXgudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vcGFnZS50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9ncmFtbWFyLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdEaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdEaXNrLVBhbGV0dGVQcmV2aWV3RGlzay1tb2R1bGVfcGFsZXR0ZVByZXZpZXdEaXNrX2JMaUdMQVwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUVkaXRvclwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfcGFsZXR0ZUVkaXRvcl9MSVVjMW9cIixcImRpc2tcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2Rpc2tfQno2WkNwXCIsXCJob3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsX0RLZG56NVwiLFwiaG9yaXpvbnRhbEFcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxBX1NSZ0d3MFwiLFwiaG9yaXpvbnRhbEJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX2hvcml6b250YWxCX05ETkVVM1wiLFwic2Nyb2xsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9zY3JvbGxfWWtFZnVfXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJzbGlkZXJzXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcnNfSEcxcGppXCIsXCJzbGlkZXJcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVNsaWRlcnMtU2xpZGVycy1tb2R1bGVfc2xpZGVyX0dzR0trX1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiQ29kZVZpZXdlclwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX0NvZGVWaWV3ZXJfUHRMN001XCIsXCJwb3B1cFwiOlwic3JjLWNvbXBvbmVudHMtZGVtby1Db2RlVmlld2VyLUNvZGVWaWV3ZXItbW9kdWxlX3BvcHVwX25TRFpDUlwifTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0Rpc2subW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0Rpc2tQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3RGlzayhwcm9wczogVmlld1BhbGV0dGVQcmV2aWV3RGlza1Byb3BzKSB7XG4gICAgY29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYWludGVyLmEgPSBhXG4gICAgICAgIHBhaW50ZXIuYiA9IGJcbiAgICAgICAgcGFpbnRlci5jID0gY1xuICAgICAgICBwYWludGVyLmQgPSBkXG4gICAgICAgIHBhaW50ZXIucGFpbnQoKVxuICAgIH0sIFthLCBiLCBjLCBkXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e3BhaW50ZXIuc2V0Q2FudmFzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZVByZXZpZXdEaXNrKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+PC9jYW52YXM+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIHwgbnVsbD4obnVsbClcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyKClcbiAgICByZXR1cm4gcmVmLmN1cnJlbnRcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3RGlza1wiXG4iLCJpbXBvcnQge1xuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLFxuICAgIFRnZFNoYWRlckZyYWdtZW50LFxuICAgIHRnZENvZGVGdW5jdGlvbl91djJwb2xhcixcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhbGV0dGVQcmV2aWV3RGlza1BhaW50ZXIge1xuICAgIHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYjogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGM6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cblxuICAgIHByaXZhdGUgY29udGV4dDogVGdkQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgICByZWFkb25seSBzZXRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZSgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgICAgICAgICBjb250ZXh0LmFkZChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlCOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlDOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlEOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBc3BlY3RSYXRpbzogXCJmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGdkQ29kZUZ1bmN0aW9uX3V2MnBvbGFyKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZlYzIgcG9sYXIgPSB1djJwb2xhcih2YXJVVik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCByID0gcG9sYXIueDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZmxvYXQgdCA9IGZyYWN0KDEuMCArIChwb2xhci55ICsgJHtNYXRoLlBJIC8gMn0pICogJHswLjUgLyBNYXRoLlBJfSk7YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IGxpZ2h0ID0gMS4wIC0gc21vb3Roc3RlcCgwLjQsIDAuNDIsIGFicyhyIC0gMC41KSk7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgbGlnaHQgKiAodW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSksYCwgXCIxXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlmICh0IDwgMC4wKSBGcmFnQ29sb3IgPSB2ZWM0KDEpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtLCBjb250ZXh0IH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlDXCIsIC4uLnRoaXMuYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0xZihcInVuaUFzcGVjdFJhdGlvXCIsIGNvbnRleHQuYXNwZWN0UmF0aW8pXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXNcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgeyBUaGVtZSwgQ29tbW9uUHJvcHMsIHN0eWxlQ29tbW9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzLCBUZ2RWZWMzLCBUZ2RWZWM0IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWwubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIH0gZnJvbSBcIi4vcGFpbnRlclwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbChwcm9wczogVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFByb3BzKSB7XG4gICAgY29uc3QgcGFpbnRlciA9IHVzZVBhaW50ZXIoKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gcHJvcHNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwYWludGVyLmEgPSBhXG4gICAgICAgIHBhaW50ZXIuYiA9IGJcbiAgICAgICAgcGFpbnRlci5jID0gY1xuICAgICAgICBwYWludGVyLmQgPSBkXG4gICAgICAgIHBhaW50ZXIucGFpbnQoKVxuICAgIH0sIFthLCBiLCBjLCBkXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICByZWY9e3BhaW50ZXIuc2V0Q2FudmFzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsKX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+PC9jYW52YXM+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VQYWludGVyKCkge1xuICAgIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIHwgbnVsbD4obnVsbClcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZWYuY3VycmVudCA9IG5ldyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyKClcbiAgICByZXR1cm4gcmVmLmN1cnJlbnRcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG4iLCJpbXBvcnQgeyB0eXBlIEFycmF5TnVtYmVyMywgVGdkQ29udGV4dCwgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyLCBUZ2RTaGFkZXJGcmFnbWVudCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWxldHRlUHJldmlld0hvcml6b250YWxQYWludGVyIHtcbiAgICBwdWJsaWMgYTogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGI6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgZDogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG5cbiAgICBwcml2YXRlIGNvbnRleHQ6IFRnZENvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gICAgcmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHsgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgICAgICAgICAgY29udGV4dC5hZGQoXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQzogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pRDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyeWluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhclVWOiBcInZlYzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnJhZ0NvbG9yOiBcInZlYzRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29kZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgdCA9IHZhclVWLng7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGcmFnQ29sb3IgPSB2ZWM0KFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgdW5pQSArIHVuaUIqY29zKCR7MiAqIE1hdGguUEl9Kih1bmlDICogdCArIHVuaUQpKSxgLCBcIjFcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHNldFVuaWZvcm1zOiAoeyBwcm9ncmFtIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQVwiLCAuLi50aGlzLmEpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUJcIiwgLi4udGhpcy5iKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlDXCIsIC4uLnRoaXMuYylcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pRFwiLCAuLi50aGlzLmQpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhaW50KCkge1xuICAgICAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXNcbiAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm5cblxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiwgVmlld1RhYnMsIFZpZXdUYWIsIEljb25GaXgsIEljb25TaGFyZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IENvZGVWaWV3ZXJWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCB7IFZpZXdTbGlkZXJzIH0gZnJvbSBcIi4vU2xpZGVyc1wiXG5pbXBvcnQgeyBQYWxldHRlRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlc1wiXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3RGlza1wiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZUVkaXRvci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgfSBmcm9tIFwiLi4vLi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVFZGl0b3JQcm9wcyA9IENvbW1vblByb3BzICYgUGFsZXR0ZURlZmluaXRpb25cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlRWRpdG9yKHByb3BzOiBWaWV3UGFsZXR0ZUVkaXRvclByb3BzKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxQYWxldHRlRGVmaW5pdGlvbj4ocHJvcHMpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgY29uc3QgeyBhLCBiLCBjLCBkIH0gPSB2YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZSA9ICh2OiBQYXJ0aWFsPFBhbGV0dGVEZWZpbml0aW9uPikgPT4ge1xuICAgICAgICBzZXRWYWx1ZSh7XG4gICAgICAgICAgICAuLi52YWx1ZSxcbiAgICAgICAgICAgIC4uLnYsXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlRWRpdG9yKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbGV0dGVQcmV2aWV3RGlzayBjbGFzc05hbWU9e1N0eWxlcy5kaXNrfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWx9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEF9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMuaG9yaXpvbnRhbEJ9IGE9e2F9IGI9e2J9IGM9e2N9IGQ9e2R9IC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgPFZpZXdUYWJzIG1heEhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYlxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJjb25maWdcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uRml4IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Db25maWc8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGVzLnNjcm9sbH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVycyBsYWJlbD1cIkx1bWluYW5jZVwiIHZhbHVlPXthfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGE6IHYgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3U2xpZGVycyBsYWJlbD1cIlNhdHVyYXRpb25cIiB2YWx1ZT17Yn0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBiOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTcHJlYWRcIiB2YWx1ZT17Y30gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBjOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTaGlmdFwiIHZhbHVlPXtkfSBvbkNoYW5nZT17KHYpID0+IHVwZGF0ZSh7IGQ6IHYgfSl9IC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgICAgIDxWaWV3VGFiXG4gICAgICAgICAgICAgICAgICAgIGtleT1cInNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvblNoYXJlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5TaGFyZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJnbHNsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgdmVjMyBwYWxldHRlKGZsb2F0IHQpIHtcbiAgICByZXR1cm4gdmVjMygke2FycihhKX0pXG4gICAgICAgICsgdmVjMygke2FycihiKX0pICogY29zKFxuICAgICAgICAgICAgJHsyICogTWF0aC5QSX0gKiAoXG4gICAgICAgICAgICAgICAgdCAqIHZlYzMoJHthcnIoYyl9KVxuICAgICAgICAgICAgICAgICsgdmVjMygke2FycihkKX0pXG4gICAgICAgICAgICApXG4gICAgICAgIClcbn1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q29kZVZpZXdlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwidHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2B0Z2RDb2RlRnVuY3Rpb25fcGFsZXR0ZSh7XG4gICAgYTogWyR7YXJyKGEpfSwgMV0sXG4gICAgYjogWyR7YXJyKGIpfSwgMV0sXG4gICAgYzogWyR7YXJyKGMpfSwgMV0sXG4gICAgZDogWyR7YXJyKGQpfSwgMV0sXG59KWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9WaWV3VGFiPlxuICAgICAgICAgICAgPC9WaWV3VGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBhcnIoYTogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gYCR7YS5tYXAoKHYpID0+IHYudG9GaXhlZCgzKSkuam9pbihcIiwgXCIpfWBcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiwgVmlld1NsaWRlciwgSWNvbkxvY2tPcGVuLCBJY29uTG9ja0Nsb3NlIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1NsaWRlcnMubW9kdWxlLmNzc1wiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdTbGlkZXJzUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBsYWJlbDogc3RyaW5nXG4gICAgdmFsdWU6IEFycmF5TnVtYmVyM1xuICAgIG9uQ2hhbmdlKHZhbHVlOiBBcnJheU51bWJlcjMpOiB2b2lkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3U2xpZGVycyhwcm9wczogVmlld1NsaWRlcnNQcm9wcykge1xuICAgIGNvbnN0IFtsb2NrLCBzZXRMb2NrXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IFtyZWQsIGdyZWVuLCBibHVlXSA9IHByb3BzLnZhbHVlXG4gICAgY29uc3Qgc2V0UmVkID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3YsIGdyZWVuLCBibHVlXSlcbiAgICBjb25zdCBzZXRHcmVlbiA9ICh2OiBudW1iZXIpID0+IHByb3BzLm9uQ2hhbmdlKFtyZWQsIHYsIGJsdWVdKVxuICAgIGNvbnN0IHNldEJsdWUgPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCBncmVlbiwgdl0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnNsaWRlcnMpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2Pntwcm9wcy5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgICAgICB7bG9jayA/IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25Mb2NrQ2xvc2Ugb25DbGljaz17KCkgPT4gc2V0TG9jayhmYWxzZSl9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEljb25Mb2NrT3BlbiBvbkNsaWNrPXsoKSA9PiBzZXRMb2NrKHRydWUpfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHtsb2NrICYmIDxTbGlkZXIgbGFiZWw9XCIqXCIgdmFsdWU9eyhyZWQgKyBncmVlbiArIGJsdWUpIC8gM30gb25DaGFuZ2U9eyh2KSA9PiBwcm9wcy5vbkNoYW5nZShbdiwgdiwgdl0pfSAvPn1cbiAgICAgICAgICAgIHshbG9jayAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIlJcIiB2YWx1ZT17cmVkfSBvbkNoYW5nZT17c2V0UmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGxhYmVsPVwiR1wiIHZhbHVlPXtncmVlbn0gb25DaGFuZ2U9e3NldEdyZWVufSAvPlxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGxhYmVsPVwiQlwiIHZhbHVlPXtibHVlfSBvbkNoYW5nZT17c2V0Qmx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gU2xpZGVyKHsgbGFiZWwsIHZhbHVlLCBvbkNoYW5nZSB9OiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXI7IG9uQ2hhbmdlKHZhbHVlOiBudW1iZXIpOiB2b2lkIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLnNsaWRlcn0+XG4gICAgICAgICAgICA8bGFiZWw+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8Vmlld1NsaWRlciBtaW49ezB9IG1heD17MX0gc3RlcD17MC4wMX0gdGV4dD17dmFsdWUudG9GaXhlZCgyKX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1NsaWRlcnNcIlxuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZUVkaXRvclwiXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCB7IHVzZVJvdXRlUGFyYW1Bc1N0cmluZyB9IGZyb20gXCJAL2FwcC9yb3V0ZXNcIlxuaW1wb3J0IHsgVmlld1BhbGV0dGVFZGl0b3IgfSBmcm9tIFwiLi9fUGFsZXR0ZUVkaXRvclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgeyBhLCBiLCBkLCBjIH0gPSB1c2VQYXJhbXMoKVxuXG4gICAgcmV0dXJuIDxWaWV3UGFsZXR0ZUVkaXRvciBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxufVxuXG5mdW5jdGlvbiB1c2VQYXJhbXMoKToge1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VSb3V0ZVBhcmFtQXNTdHJpbmcoXCJ2YWx1ZVwiKVxuICAgIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlMjQodmFsdWUpXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBERUZBVUxUX1BBTEVUVEVcbiAgICAgICAgfVxuICAgIH0sIFt2YWx1ZV0pIGFzIHtcbiAgICAgICAgYTogQXJyYXlOdW1iZXIzXG4gICAgICAgIGI6IEFycmF5TnVtYmVyM1xuICAgICAgICBjOiBBcnJheU51bWJlcjNcbiAgICAgICAgZDogQXJyYXlOdW1iZXIzXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZTI0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoICE9PSAyNCkgcmV0dXJuIERFRkFVTFRfUEFMRVRURVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYTogcGFyc2UodmFsdWUsIDApLFxuICAgICAgICBiOiBwYXJzZSh2YWx1ZSwgMSksXG4gICAgICAgIGM6IHBhcnNlKHZhbHVlLCAyKSxcbiAgICAgICAgZDogcGFyc2UodmFsdWUsIDMpLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2UodmFsdWU6IHN0cmluZywgYXJySWR4OiBudW1iZXIpOiBBcnJheU51bWJlcjMge1xuICAgIGNvbnN0IHN0cmlkZSA9IE1hdGguZmxvb3IodmFsdWUubGVuZ3RoIC8gNClcbiAgICBjb25zdCB3b3JkID0gTWF0aC5mbG9vcihzdHJpZGUgLyAzKVxuICAgIGNvbnN0IG1heCA9IE1hdGgucG93KDE2LCB3b3JkKSAtIDFcbiAgICByZXR1cm4gWzAsIDEsIDJdLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGFycklkeCAqIHN0cmlkZSArIHdvcmQgKiBpdGVtXG4gICAgICAgIGNvbnN0IGhleCA9IGAweCR7dmFsdWUuc2xpY2UoaW5kZXgsIGluZGV4ICsgd29yZCl9YFxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoaGV4KSAvIG1heFxuICAgIH0pIGFzIEFycmF5TnVtYmVyM1xufVxuXG5jb25zdCBERUZBVUxUX1BBTEVUVEUgPSB7XG4gICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgIGI6IFswLjUsIDAuNSwgMC41XSxcbiAgICBjOiBbMSwgMSwgMV0sXG4gICAgZDogWzAsIDAuMzMsIDAuNjddLFxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzXCJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Db2RlVmlld2VyLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgZ2V0R3JhbW1hckZvckxhbmd1YWdlIH0gZnJvbSBcIi4vZ3JhbW1hclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgaWQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgICB2YWx1ZTogc3RyaW5nIHwgUmVjb3JkPHN0cmluZywgc3RyaW5nPlxuICAgIGxhbmd1YWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVZpZXdlclZpZXcocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wc1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3Qgc2luZ2xlUHJvcHM6IFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiA8U2luZ2xlQ29kZVZpZXdlclZpZXcgey4uLnNpbmdsZVByb3BzfSAvPlxuICAgIH1cbiAgICBjb25zdCBtdWx0aVByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgPSB7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICB2YWx1ZSxcbiAgICB9XG4gICAgcmV0dXJuIDxNdWx0aUNvZGVWaWV3ZXJWaWV3IHsuLi5tdWx0aVByb3BzfSAvPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIFNpbmdsZUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgcmVmVGltZW91dCA9IFJlYWN0LnVzZVJlZigwKVxuICAgIGNvbnN0IFtwb3B1cCwgc2V0UG9wdXBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgcmVmQ29kZSA9IFJlYWN0LnVzZVJlZjxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9IHJlZkNvZGUuY3VycmVudFxuICAgICAgICAgICAgaWYgKCFjb2RlKSByZXR1cm5cblxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IFByaXNtLmhpZ2hsaWdodChwcm9wcy52YWx1ZSwgZ2V0R3JhbW1hckZvckxhbmd1YWdlKHByb3BzLmxhbmd1YWdlKSwgcHJvcHMubGFuZ3VhZ2UpXG4gICAgICAgICAgICBjb2RlLmlubmVySFRNTCA9IGh0bWxcbiAgICAgICAgfSwgMTAwKVxuICAgIH0sIFtwcm9wcy52YWx1ZSwgcHJvcHMubGFuZ3VhZ2UsIHJlZkNvZGUuY3VycmVudF0pXG4gICAgY29uc3QgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHByb3BzLnZhbHVlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHNldFBvcHVwKHRydWUpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgICAgIHJlZlRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHNldFBvcHVwKGZhbHNlKSwgNzAwMClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUG9wdXBDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0UG9wdXAoZmFsc2UpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmVGltZW91dC5jdXJyZW50KVxuICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSAwXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtnZXRDbGFzc05hbWVzKHByb3BzKX0gb25Eb3VibGVDbGljaz17aGFuZGxlRG91YmxlQ2xpY2t9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIDxjb2RlIHJlZj17cmVmQ29kZX0gY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtwcm9wcy5sYW5ndWFnZX1gfSAvPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICB7cG9wdXAgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtTdHlsZS5wb3B1cH0gb25DbGljaz17aGFuZGxlUG9wdXBDbGlja30gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRoaXMgY29kZSBoYXMgYmVlbiBjb3BpZWQgdG8gdGhlIGNsaXBib2FyZCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lcyhwcm9wczogQ29kZVZpZXdlclZpZXdQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtTdHlsZS5Db2RlVmlld2VyXVxuICAgIGlmICh0eXBlb2YgcHJvcHMuY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNsYXNzTmFtZXMucHVzaChwcm9wcy5jbGFzc05hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuam9pbihcIiBcIilcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMgZXh0ZW5kcyBDb2RlVmlld2VyVmlld1Byb3BzIHtcbiAgICB2YWx1ZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPlxufVxuXG5mdW5jdGlvbiBNdWx0aUNvZGVWaWV3ZXJWaWV3KHByb3BzOiBNdWx0aUNvZGVWaWV3ZXJWaWV3UHJvcHMpIHtcbiAgICBjb25zdCBjYXB0aW9ucyA9IE9iamVjdC5rZXlzKHByb3BzLnZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y2FwdGlvbnMubWFwKChjYXB0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkZXRhaWxzIGtleT17Y2FwdGlvbn0gb3Blbj17ZmFsc2V9IGlkPXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxzdW1tYXJ5PntjYXB0aW9ufTwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICAgICAgPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHZhbHVlPXtwcm9wcy52YWx1ZVtjYXB0aW9uXX0gbGFuZ3VhZ2U9e3Byb3BzLmxhbmd1YWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHN4XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1nbHNsXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyYW1tYXJGb3JMYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKTogUHJpc20uR3JhbW1hciB7XG4gICAgc3dpdGNoIChsYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidHNcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdFxuICAgICAgICBjYXNlIFwidHN4XCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnRzeFxuICAgICAgICBjYXNlIFwiZnJhZ1wiOlxuICAgICAgICBjYXNlIFwidmVydFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy5nbHNsXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gR0xTTFxuICAgIH1cbn1cblxuY29uc3QgVFlQRVMgPSBbXG4gICAgXCJidmVjMlwiLFxuICAgIFwiYnZlYzNcIixcbiAgICBcImJ2ZWM0XCIsXG4gICAgXCJkbWF0MlwiLFxuICAgIFwiZG1hdDJ4MlwiLFxuICAgIFwiZG1hdDJ4M1wiLFxuICAgIFwiZG1hdDJ4NFwiLFxuICAgIFwiZG1hdDNcIixcbiAgICBcImRtYXQzeDJcIixcbiAgICBcImRtYXQzeDNcIixcbiAgICBcImRtYXQzeDRcIixcbiAgICBcImRtYXQ0XCIsXG4gICAgXCJkbWF0NHgyXCIsXG4gICAgXCJkbWF0NHgzXCIsXG4gICAgXCJkbWF0NHg0XCIsXG4gICAgXCJkdmVjMlwiLFxuICAgIFwiZHZlYzNcIixcbiAgICBcImR2ZWM0XCIsXG4gICAgXCJmbG9hdFwiLFxuICAgIFwiZnZlYzJcIixcbiAgICBcImZ2ZWMzXCIsXG4gICAgXCJmdmVjNFwiLFxuICAgIFwiaXNhbXBsZXIxRFwiLFxuICAgIFwiaXNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEXCIsXG4gICAgXCJpc2FtcGxlcjJEQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRNU1wiLFxuICAgIFwiaXNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcImlzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJpc2FtcGxlcjNEXCIsXG4gICAgXCJpc2FtcGxlckJ1ZmZlclwiLFxuICAgIFwiaXNhbXBsZXJDdWJlXCIsXG4gICAgXCJpc2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwiaXZlYzJcIixcbiAgICBcIml2ZWMzXCIsXG4gICAgXCJpdmVjNFwiLFxuICAgIFwibWF0MlwiLFxuICAgIFwibWF0MngyXCIsXG4gICAgXCJtYXQyeDNcIixcbiAgICBcIm1hdDJ4NFwiLFxuICAgIFwibWF0M1wiLFxuICAgIFwibWF0M3gyXCIsXG4gICAgXCJtYXQzeDNcIixcbiAgICBcIm1hdDN4NFwiLFxuICAgIFwibWF0NFwiLFxuICAgIFwibWF0NHgyXCIsXG4gICAgXCJtYXQ0eDNcIixcbiAgICBcIm1hdDR4NFwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzYW1wbGVyMURcIixcbiAgICBcInNhbXBsZXIxREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjFEU2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRcIixcbiAgICBcInNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJETVNcIixcbiAgICBcInNhbXBsZXIyRE1TQXJyYXlcIixcbiAgICBcInNhbXBsZXIyRFJlY3RcIixcbiAgICBcInNhbXBsZXIyRFJlY3RTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjNEXCIsXG4gICAgXCJzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJzYW1wbGVyQ3ViZVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVwiLFxuICAgIFwic2FtcGxlckN1YmVBcnJheVNoYWRvd1wiLFxuICAgIFwic2FtcGxlckN1YmVTaGFkb3dcIixcbiAgICBcInVzYW1wbGVyMURcIixcbiAgICBcInVzYW1wbGVyMURBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFwiLFxuICAgIFwidXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJETVNcIixcbiAgICBcInVzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJ1c2FtcGxlcjJEUmVjdFwiLFxuICAgIFwidXNhbXBsZXIzRFwiLFxuICAgIFwidXNhbXBsZXJCdWZmZXJcIixcbiAgICBcInVzYW1wbGVyQ3ViZVwiLFxuICAgIFwidXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInV2ZWMyXCIsXG4gICAgXCJ1dmVjM1wiLFxuICAgIFwidXZlYzRcIixcbiAgICBcInZlYzJcIixcbiAgICBcInZlYzNcIixcbiAgICBcInZlYzRcIixcbiAgICBcInZvaWRcIixcbl1cblxuY29uc3QgS0VZV09SRFMgPSBbXG4gICAgXCJjZW50cm9pZFwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImRpc2NhcmRcIixcbiAgICBcImVsc2VcIixcbiAgICBcImZsYXRcIixcbiAgICBcImhpZ2hwXCIsXG4gICAgXCJpZlwiLFxuICAgIFwiaW5cIixcbiAgICBcImlub3V0XCIsXG4gICAgXCJpbnZhcmlhbnRcIixcbiAgICBcImxheW91dFwiLFxuICAgIFwibG93cFwiLFxuICAgIFwibWVkaXVtcFwiLFxuICAgIFwibm9wZXJzcGVjdGl2ZVwiLFxuICAgIFwib3V0XCIsXG4gICAgXCJwYXRjaFwiLFxuICAgIFwicHJlY2lzaW9uXCIsXG4gICAgXCJzbW9vdGhcIixcbiAgICBcInN1YnJvdXRpbmVcIixcbiAgICBcInVuaWZvcm1cIixcbiAgICAvLyBSZXNlcnZlZCBmb3IgZnV0dXJlLlxuICAgIFwiYWN0aXZlXCIsXG4gICAgXCJhc21cIixcbiAgICBcImNhc3RcIixcbiAgICBcImNsYXNzXCIsXG4gICAgXCJjb21tb25cIixcbiAgICBcImVudW1cIixcbiAgICBcImV4dGVyblwiLFxuICAgIFwiZXh0ZXJuYWxcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZml4ZWRcIixcbiAgICBcImdvdG9cIixcbiAgICBcImhhbGZcIixcbiAgICBcImh2ZWMyXCIsXG4gICAgXCJodmVjM1wiLFxuICAgIFwiaHZlYzRcIixcbiAgICBcImlpbWFnZTFEXCIsXG4gICAgXCJpaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpaW1hZ2UyRFwiLFxuICAgIFwiaWltYWdlMkRBcnJheVwiLFxuICAgIFwiaWltYWdlM0RcIixcbiAgICBcImlpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaWltYWdlQ3ViZVwiLFxuICAgIFwiaW1hZ2UxRFwiLFxuICAgIFwiaW1hZ2UxREFycmF5XCIsXG4gICAgXCJpbWFnZTFEQXJyYXlTaGFkb3dcIixcbiAgICBcImltYWdlMURTaGFkb3dcIixcbiAgICBcImltYWdlMkRcIixcbiAgICBcImltYWdlMkRBcnJheVwiLFxuICAgIFwiaW1hZ2UyREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTJEU2hhZG93XCIsXG4gICAgXCJpbWFnZTNEXCIsXG4gICAgXCJpbWFnZUJ1ZmZlclwiLFxuICAgIFwiaW1hZ2VDdWJlXCIsXG4gICAgXCJpbmxpbmVcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJpbnRlcmZhY2VcIixcbiAgICBcImxvbmdcIixcbiAgICBcIm5hbWVzcGFjZVwiLFxuICAgIFwibm9pbmxpbmVcIixcbiAgICBcIm91dHB1dFwiLFxuICAgIFwicGFja2VkXCIsXG4gICAgXCJwYXJ0aXRpb25cIixcbiAgICBcInB1YmxpY1wiLFxuICAgIFwicm93X21ham9yXCIsXG4gICAgXCJzYW1wbGVyM0RSZWN0XCIsXG4gICAgXCJzaG9ydFwiLFxuICAgIFwic2l6ZW9mXCIsXG4gICAgXCJzdGF0aWNcIixcbiAgICBcInN1cGVycFwiLFxuICAgIFwidGVtcGxhdGVcIixcbiAgICBcInRoaXNcIixcbiAgICBcInR5cGVkZWZcIixcbiAgICBcInVpbWFnZTFEXCIsXG4gICAgXCJ1aW1hZ2UxREFycmF5XCIsXG4gICAgXCJ1aW1hZ2UyRFwiLFxuICAgIFwidWltYWdlMkRBcnJheVwiLFxuICAgIFwidWltYWdlM0RcIixcbiAgICBcInVpbWFnZUJ1ZmZlclwiLFxuICAgIFwidWltYWdlQ3ViZVwiLFxuICAgIFwidW5pb25cIixcbiAgICBcInVuc2lnbmVkXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidm9sYXRpbGVcIixcbl1cblxuY29uc3QgR0xPQkFMUyA9IFtcbiAgICBcImdsX0RlcHRoUmFuZ2VcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZGlmZlwiLFxuICAgIFwiZ2xfRGVwdGhSYW5nZS5mYXJcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UubmVhclwiLFxuICAgIFwiZ2xfRnJhZ0Nvb3JkXCIsXG4gICAgXCJnbF9GcmFnRGVwdGhcIixcbiAgICBcImdsX0Zyb250RmFjaW5nXCIsXG4gICAgXCJnbF9JbnN0YW5jZUlEXCIsXG4gICAgXCJnbF9Qb2ludENvb3JkXCIsXG4gICAgXCJnbF9Qb2ludFNpemVcIixcbiAgICBcImdsX1Bvc2l0aW9uXCIsXG4gICAgXCJnbF9WZXJ0ZXhJRFwiLFxuXVxuXG5jb25zdCBGVU5DVElPTlMgPSBbXG4gICAgXCJhYnNcIixcbiAgICBcImFjb3NcIixcbiAgICBcImFjb3NoXCIsXG4gICAgXCJhbGxcIixcbiAgICBcImFueVwiLFxuICAgIFwiYXNpblwiLFxuICAgIFwiYXNpbmhcIixcbiAgICBcImF0YW5cIixcbiAgICBcImF0YW5oXCIsXG4gICAgXCJjZWlsXCIsXG4gICAgXCJjbGFtcFwiLFxuICAgIFwiY29zXCIsXG4gICAgXCJjb3NoXCIsXG4gICAgXCJjcm9zc1wiLFxuICAgIFwiZGVncmVlc1wiLFxuICAgIFwiZGV0ZXJtaW5hbnRcIixcbiAgICBcImRGZHhcIixcbiAgICBcImRGZHlcIixcbiAgICBcImRpc3RhbmNlXCIsXG4gICAgXCJkb3RcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJleHBcIixcbiAgICBcImV4cDJcIixcbiAgICBcImZhY2Vmb3J3YXJkXCIsXG4gICAgXCJmbG9hdEJpdHNUb0ludFwiLFxuICAgIFwiZmxvYXRCaXRzVG9VaW50XCIsXG4gICAgXCJmbG9vclwiLFxuICAgIFwiZnJhY3RcIixcbiAgICBcImZ3aWR0aFwiLFxuICAgIFwiZ3JlYXRlclRoYW5cIixcbiAgICBcImdyZWF0ZXJUaGFuRXF1YWxcIixcbiAgICBcImludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJpbnZlcnNlXCIsXG4gICAgXCJpbnZlcnNlc3FydFwiLFxuICAgIFwiaXNpbmZcIixcbiAgICBcImlzbmFuXCIsXG4gICAgXCJsZW5ndGhcIixcbiAgICBcImxlc3NUaGFuXCIsXG4gICAgXCJsZXNzVGhhbkVxdWFsXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImxvZzJcIixcbiAgICBcIm1hdHJpeENvbXBNdWx0XCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWl4XCIsXG4gICAgXCJtb2RcIixcbiAgICBcIm1vZGZcIixcbiAgICBcIm5vcm1hbGl6ZVwiLFxuICAgIFwibm90XCIsXG4gICAgXCJub3RFcXVhbFwiLFxuICAgIFwib3V0ZXJQcm9kdWN0XCIsXG4gICAgXCJwYWNrSGFsZjJ4MTZcIixcbiAgICBcInBhY2tTbm9ybTJ4MTZcIixcbiAgICBcInBhY2tVbm9ybTJ4MTZcIixcbiAgICBcInBvd1wiLFxuICAgIFwicmFkaWFuc1wiLFxuICAgIFwicmVmbGVjdFwiLFxuICAgIFwicmVmcmFjdFwiLFxuICAgIFwicm91bmRcIixcbiAgICBcInJvdW5kRXZlblwiLFxuICAgIFwic2lnblwiLFxuICAgIFwic2luXCIsXG4gICAgXCJzaW5oXCIsXG4gICAgXCJzbW9vdGhzdGVwXCIsXG4gICAgXCJzcXJ0XCIsXG4gICAgXCJzdGVwXCIsXG4gICAgXCJ0YW5cIixcbiAgICBcInRhbmhcIixcbiAgICBcInRleGVsRmV0Y2hcIixcbiAgICBcInRleGVsRmV0Y2hPZmZzZXRcIixcbiAgICBcInRleHR1cmVcIixcbiAgICBcInRleHR1cmVHcmFkXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZUxvZFwiLFxuICAgIFwidGV4dHVyZUxvZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZU9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZFwiLFxuICAgIFwidGV4dHVyZVByb2pHcmFkT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvakxvZFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlU2l6ZVwiLFxuICAgIFwidHJhbnNwb3NlXCIsXG4gICAgXCJ0cnVuY1wiLFxuICAgIFwidWludEJpdHNUb0Zsb2F0XCIsXG4gICAgXCJ1bnBhY2tIYWxmMngxNlwiLFxuICAgIFwidW5wYWNrU25vcm0yeDE2XCIsXG4gICAgXCJ1bnBhY2tVbm9ybTJ4MTZcIixcbl1cblxuY29uc3QgR0xTTDogUHJpc20uR3JhbW1hciA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcGF0dGVybjogL14jLiskL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIG51bWJlcjoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgICAgLyhefFteXFx3JF0pKD86TmFOfEluZmluaXR5fDBbYkJdWzAxXSsoPzpfWzAxXSspKm4/fDBbb09dWzAtN10rKD86X1swLTddKykqbj98MFt4WF1bXFxkQS1GYS1mXSsoPzpfW1xcZEEtRmEtZl0rKSpuP3xcXGQrKD86X1xcZCspKm58KD86XFxkKyg/Ol9cXGQrKSooPzpcXC4oPzpcXGQrKD86X1xcZCspKik/KT98XFwuXFxkKyg/Ol9cXGQrKSopKD86W0VlXVsrLV0/XFxkKyg/Ol9cXGQrKSopPykoPyFbXFx3JF0pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICB9LFxuICAgIHR5cGU6IG1ha2VJZGVudGlmaWVyc1JYKFRZUEVTKSxcbiAgICBrZXl3b3JkOiBtYWtlSWRlbnRpZmllcnNSWChLRVlXT1JEUyksXG4gICAgZ2xvYmFsOiBtYWtlSWRlbnRpZmllcnNSWChHTE9CQUxTKSxcbiAgICBmdW5jdGlvbjogbWFrZUlkZW50aWZpZXJzUlgoRlVOQ1RJT05TKSxcbn1cblxuZnVuY3Rpb24gbWFrZUlkZW50aWZpZXJzUlgod29yZHM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgKD86W15hLXpBLVowLTlfXSkoJHt3b3Jkcy5qb2luKFwifFwiKX0pKD89W15hLXpBLVowLTlfXSlgKSxcbiAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICB9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQ29k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