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
    constructor() {
        this.a = [0.5, 0.5, 0.5];
        this.b = [0.5, 0.5, 0.5];
        this.c = [0.5, 0.5, 0.5];
        this.d = [0.5, 0.5, 0.5];
        this.context = null;
        this.setCanvas = (canvas) => {
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
    }
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
    constructor() {
        this.a = [0.5, 0.5, 0.5];
        this.b = [0.5, 0.5, 0.5];
        this.c = [0.5, 0.5, 0.5];
        this.d = [0.5, 0.5, 0.5];
        this.context = null;
        this.setCanvas = (canvas) => {
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
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV92YWx1ZV9wYWdlX3RzeC40ZTA5ZjAxMDAxNGMzMzNmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL1BhbGV0dGVQcmV2aWV3RGlzay5tb2R1bGUuY3NzPzhjYWUiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzPzMzMmEiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9QYWxldHRlRWRpdG9yLm1vZHVsZS5jc3M/ZTczMiIsIndlYnBhY2s6Ly9AdG9sb2tvYmFuL3RnZC8uL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvU2xpZGVycy5tb2R1bGUuY3NzPzU5MzciLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvQ29kZVZpZXdlci5tb2R1bGUuY3NzP2EyYTMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL1BhbGV0dGVQcmV2aWV3RGlzay50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdEaXNrL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3RGlzay9wYWludGVyLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9QYWxldHRlUHJldmlld0hvcml6b250YWwudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvcGFpbnRlci50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1BhbGV0dGVFZGl0b3IudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL1t2YWx1ZV0vX1BhbGV0dGVFZGl0b3IvU2xpZGVycy9TbGlkZXJzLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL19QYWxldHRlRWRpdG9yL1NsaWRlcnMvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvW3ZhbHVlXS9fUGFsZXR0ZUVkaXRvci9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9bdmFsdWVdL3BhZ2UudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL0NvZGVWaWV3ZXIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyL2dyYW1tYXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3RGlza1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3RGlzay1QYWxldHRlUHJldmlld0Rpc2stbW9kdWxlX3BhbGV0dGVQcmV2aWV3RGlza19iTGlHTEFcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1QYWxldHRlUHJldmlld0hvcml6b250YWwtbW9kdWxlX3BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbF9UQTVJN1dcIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInBhbGV0dGVFZGl0b3JcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1bdmFsdWVdLV9QYWxldHRlRWRpdG9yLVBhbGV0dGVFZGl0b3ItbW9kdWxlX3BhbGV0dGVFZGl0b3JfTElVYzFvXCIsXCJkaXNrXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9kaXNrX0J6NlpDcFwiLFwiaG9yaXpvbnRhbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfaG9yaXpvbnRhbF9ES2RuejVcIixcImhvcml6b250YWxBXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQV9TUmdHdzBcIixcImhvcml6b250YWxCXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1QYWxldHRlRWRpdG9yLW1vZHVsZV9ob3Jpem9udGFsQl9ORE5FVTNcIixcInNjcm9sbFwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItUGFsZXR0ZUVkaXRvci1tb2R1bGVfc2Nyb2xsX1lrRWZ1X1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2xpZGVyc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLVt2YWx1ZV0tX1BhbGV0dGVFZGl0b3ItU2xpZGVycy1TbGlkZXJzLW1vZHVsZV9zbGlkZXJzX0hHMXBqaVwiLFwic2xpZGVyXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtW3ZhbHVlXS1fUGFsZXR0ZUVkaXRvci1TbGlkZXJzLVNsaWRlcnMtbW9kdWxlX3NsaWRlcl9Hc0dLa19cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIkNvZGVWaWV3ZXJcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9Db2RlVmlld2VyX1B0TDdNNVwiLFwicG9wdXBcIjpcInNyYy1jb21wb25lbnRzLWRlbW8tQ29kZVZpZXdlci1Db2RlVmlld2VyLW1vZHVsZV9wb3B1cF9uU0RaQ1JcIn07IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdEaXNrLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdEaXNrUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0Rpc2socHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0Rpc2tQcm9wcykge1xuICAgIGNvbnN0IHBhaW50ZXIgPSB1c2VQYWludGVyKClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFpbnRlci5hID0gYVxuICAgICAgICBwYWludGVyLmIgPSBiXG4gICAgICAgIHBhaW50ZXIuYyA9IGNcbiAgICAgICAgcGFpbnRlci5kID0gZFxuICAgICAgICBwYWludGVyLnBhaW50KClcbiAgICB9LCBbYSwgYiwgYywgZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtwYWludGVyLnNldENhbnZhc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3RGlzayl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9PjwvY2FudmFzPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdEaXNrUGFpbnRlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0Rpc2tcIlxuIiwiaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcixcbiAgICBUZ2RTaGFkZXJGcmFnbWVudCxcbiAgICB0Z2RDb2RlRnVuY3Rpb25fdXYycG9sYXIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBjbGFzcyBQYWxldHRlUHJldmlld0Rpc2tQYWludGVyIHtcbiAgICBwdWJsaWMgYTogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGI6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBjOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgZDogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG5cbiAgICBwcml2YXRlIGNvbnRleHQ6IFRnZENvbnRleHQgfCBudWxsID0gbnVsbFxuXG4gICAgcmVhZG9ubHkgc2V0Q2FudmFzID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWxldGUoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMsIHsgYW50aWFsaWFzOiBmYWxzZSB9KVxuICAgICAgICAgICAgY29udGV4dC5hZGQoXG4gICAgICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlcihjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRlcjogbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQTogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQjogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQzogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pRDogXCJ2ZWMzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pQXNwZWN0UmF0aW86IFwiZmxvYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFnQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRnZENvZGVGdW5jdGlvbl91djJwb2xhcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZWMyIHBvbGFyID0gdXYycG9sYXIodmFyVVYpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQgciA9IHBvbGFyLng7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZsb2F0IHQgPSBmcmFjdCgxLjAgKyAocG9sYXIueSArICR7TWF0aC5QSSAvIDJ9KSAqICR7MC41IC8gTWF0aC5QSX0pO2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCBsaWdodCA9IDEuMCAtIHNtb290aHN0ZXAoMC40LCAwLjQyLCBhYnMociAtIDAuNSkpO1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYGxpZ2h0ICogKHVuaUEgKyB1bmlCKmNvcygkezIgKiBNYXRoLlBJfSoodW5pQyAqIHQgKyB1bmlEKSkpLGAsIFwiMVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZiAodCA8IDAuMCkgRnJhZ0NvbG9yID0gdmVjNCgxKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSwgY29udGV4dCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUFcIiwgLi4udGhpcy5hKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaURcIiwgLi4udGhpcy5kKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtMWYoXCJ1bmlBc3BlY3RSYXRpb1wiLCBjb250ZXh0LmFzcGVjdFJhdGlvKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCB7IEFycmF5TnVtYmVyMywgVGdkVmVjMywgVGdkVmVjNCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB9IGZyb20gXCIuL3BhaW50ZXJcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwocHJvcHM6IFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWxQcm9wcykge1xuICAgIGNvbnN0IHBhaW50ZXIgPSB1c2VQYWludGVyKClcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCB7IGEsIGIsIGQsIGMgfSA9IHByb3BzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcGFpbnRlci5hID0gYVxuICAgICAgICBwYWludGVyLmIgPSBiXG4gICAgICAgIHBhaW50ZXIuYyA9IGNcbiAgICAgICAgcGFpbnRlci5kID0gZFxuICAgICAgICBwYWludGVyLnBhaW50KClcbiAgICB9LCBbYSwgYiwgYywgZF0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgcmVmPXtwYWludGVyLnNldENhbnZhc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLnBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9PjwvY2FudmFzPlxuICAgIClcbn1cblxuZnVuY3Rpb24gdXNlUGFpbnRlcigpIHtcbiAgICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB8IG51bGw+KG51bGwpXG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlcigpXG4gICAgcmV0dXJuIHJlZi5jdXJyZW50XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9QYWxldHRlUHJldmlld0hvcml6b250YWxcIlxuIiwiaW1wb3J0IHsgdHlwZSBBcnJheU51bWJlcjMsIFRnZENvbnRleHQsIFRnZFBhaW50ZXJGcmFnbWVudFNoYWRlciwgVGdkU2hhZGVyRnJhZ21lbnQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgY2xhc3MgUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUGFpbnRlciB7XG4gICAgcHVibGljIGE6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBiOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYzogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGQ6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGxcblxuICAgIHJlYWRvbmx5IHNldENhbnZhcyA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZGVsZXRlKClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FudmFzKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzLCB7IGFudGlhbGlhczogZmFsc2UgfSlcbiAgICAgICAgICAgIGNvbnRleHQuYWRkKFxuICAgICAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIoY29udGV4dCwge1xuICAgICAgICAgICAgICAgICAgICBzaGFkZXI6IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUE6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUI6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUM6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaUQ6IFwidmVjM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnlpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJVVjogXCJ2ZWMyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyYWdDb2xvcjogXCJ2ZWM0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvZGU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0IHQgPSB2YXJVVi54O1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJhZ0NvbG9yID0gdmVjNChcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYHVuaUEgKyB1bmlCKmNvcygkezIgKiBNYXRoLlBJfSoodW5pQyAqIHQgKyB1bmlEKSksYCwgXCIxXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBzZXRVbmlmb3JtczogKHsgcHJvZ3JhbSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUFcIiwgLi4udGhpcy5hKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlCXCIsIC4uLnRoaXMuYilcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQ1wiLCAuLi50aGlzLmMpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaURcIiwgLi4udGhpcy5kKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWludCgpIHtcbiAgICAgICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzXG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuXG5cbiAgICAgICAgY29udGV4dC5wYWludCgpXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24sIFZpZXdUYWJzLCBWaWV3VGFiLCBJY29uRml4LCBJY29uU2hhcmUgfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBDb2RlVmlld2VyVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgeyBWaWV3U2xpZGVycyB9IGZyb20gXCIuL1NsaWRlcnNcIlxuaW1wb3J0IHsgUGFsZXR0ZURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIlxuaW1wb3J0IHsgVmlld1BhbGV0dGVQcmV2aWV3RGlzayB9IGZyb20gXCIuLi8uLi9QYWxldHRlUHJldmlld0Rpc2tcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVFZGl0b3IubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdQYWxldHRlRWRpdG9yUHJvcHMgPSBDb21tb25Qcm9wcyAmIFBhbGV0dGVEZWZpbml0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZUVkaXRvcihwcm9wczogVmlld1BhbGV0dGVFZGl0b3JQcm9wcykge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGU8UGFsZXR0ZURlZmluaXRpb24+KHByb3BzKVxuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IHsgYSwgYiwgYywgZCB9ID0gdmFsdWVcbiAgICBjb25zdCB1cGRhdGUgPSAodjogUGFydGlhbDxQYWxldHRlRGVmaW5pdGlvbj4pID0+IHtcbiAgICAgICAgc2V0VmFsdWUoe1xuICAgICAgICAgICAgLi4udmFsdWUsXG4gICAgICAgICAgICAuLi52LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZUVkaXRvcil9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0Rpc2sgY2xhc3NOYW1lPXtTdHlsZXMuZGlza30gYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbiAgICAgICAgICAgICAgICA8Vmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbCBjbGFzc05hbWU9e1N0eWxlcy5ob3Jpem9udGFsfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWxBfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgICAgIDxWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIGNsYXNzTmFtZT17U3R5bGVzLmhvcml6b250YWxCfSBhPXthfSBiPXtifSBjPXtjfSBkPXtkfSAvPlxuICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIDxWaWV3VGFicyBtYXhIZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgPFZpZXdUYWJcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkZpeCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+Q29uZmlnPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlcy5zY3JvbGx9PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJMdW1pbmFuY2VcIiB2YWx1ZT17YX0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBhOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8Vmlld1NsaWRlcnMgbGFiZWw9XCJTYXR1cmF0aW9uXCIgdmFsdWU9e2J9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlKHsgYjogdiB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJzIGxhYmVsPVwiU3ByZWFkXCIgdmFsdWU9e2N9IG9uQ2hhbmdlPXsodikgPT4gdXBkYXRlKHsgYzogdiB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFZpZXdTbGlkZXJzIGxhYmVsPVwiU2hpZnRcIiB2YWx1ZT17ZH0gb25DaGFuZ2U9eyh2KSA9PiB1cGRhdGUoeyBkOiB2IH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgICAgICA8Vmlld1RhYlxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJzaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25TaGFyZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U2hhcmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICA8Q29kZVZpZXdlclZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlPVwiZ2xzbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YHZlYzMgcGFsZXR0ZShmbG9hdCB0KSB7XG4gICAgcmV0dXJuIHZlYzMoJHthcnIoYSl9KVxuICAgICAgICArIHZlYzMoJHthcnIoYil9KSAqIGNvcyhcbiAgICAgICAgICAgICR7MiAqIE1hdGguUEl9ICogKFxuICAgICAgICAgICAgICAgIHQgKiB2ZWMzKCR7YXJyKGMpfSlcbiAgICAgICAgICAgICAgICArIHZlYzMoJHthcnIoZCl9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG59YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENvZGVWaWV3ZXJWaWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZT1cInRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtgdGdkQ29kZUZ1bmN0aW9uX3BhbGV0dGUoe1xuICAgIGE6IFske2FycihhKX0sIDFdLFxuICAgIGI6IFske2FycihiKX0sIDFdLFxuICAgIGM6IFske2FycihjKX0sIDFdLFxuICAgIGQ6IFske2FycihkKX0sIDFdLFxufSlgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvVmlld1RhYj5cbiAgICAgICAgICAgIDwvVmlld1RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZnVuY3Rpb24gYXJyKGE6IG51bWJlcltdKSB7XG4gICAgcmV0dXJuIGAke2EubWFwKCh2KSA9PiB2LnRvRml4ZWQoMykpLmpvaW4oXCIsIFwiKX1gXG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24sIFZpZXdTbGlkZXIsIEljb25Mb2NrT3BlbiwgSWNvbkxvY2tDbG9zZSB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9TbGlkZXJzLm1vZHVsZS5jc3NcIlxuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lc1xuXG5leHBvcnQgdHlwZSBWaWV3U2xpZGVyc1Byb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgbGFiZWw6IHN0cmluZ1xuICAgIHZhbHVlOiBBcnJheU51bWJlcjNcbiAgICBvbkNoYW5nZSh2YWx1ZTogQXJyYXlOdW1iZXIzKTogdm9pZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1NsaWRlcnMocHJvcHM6IFZpZXdTbGlkZXJzUHJvcHMpIHtcbiAgICBjb25zdCBbbG9jaywgc2V0TG9ja10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCBbcmVkLCBncmVlbiwgYmx1ZV0gPSBwcm9wcy52YWx1ZVxuICAgIGNvbnN0IHNldFJlZCA9ICh2OiBudW1iZXIpID0+IHByb3BzLm9uQ2hhbmdlKFt2LCBncmVlbiwgYmx1ZV0pXG4gICAgY29uc3Qgc2V0R3JlZW4gPSAodjogbnVtYmVyKSA9PiBwcm9wcy5vbkNoYW5nZShbcmVkLCB2LCBibHVlXSlcbiAgICBjb25zdCBzZXRCbHVlID0gKHY6IG51bWJlcikgPT4gcHJvcHMub25DaGFuZ2UoW3JlZCwgZ3JlZW4sIHZdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5zbGlkZXJzKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdj57cHJvcHMubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICAgICAge2xvY2sgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uTG9ja0Nsb3NlIG9uQ2xpY2s9eygpID0+IHNldExvY2soZmFsc2UpfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uTG9ja09wZW4gb25DbGljaz17KCkgPT4gc2V0TG9jayh0cnVlKX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7bG9jayAmJiA8U2xpZGVyIGxhYmVsPVwiKlwiIHZhbHVlPXsocmVkICsgZ3JlZW4gKyBibHVlKSAvIDN9IG9uQ2hhbmdlPXsodikgPT4gcHJvcHMub25DaGFuZ2UoW3YsIHYsIHZdKX0gLz59XG4gICAgICAgICAgICB7IWxvY2sgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgbGFiZWw9XCJSXCIgdmFsdWU9e3JlZH0gb25DaGFuZ2U9e3NldFJlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIkdcIiB2YWx1ZT17Z3JlZW59IG9uQ2hhbmdlPXtzZXRHcmVlbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciBsYWJlbD1cIkJcIiB2YWx1ZT17Ymx1ZX0gb25DaGFuZ2U9e3NldEJsdWV9IC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNsaWRlcih7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UgfTogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyOyBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAgPGxhYmVsPntsYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgPFZpZXdTbGlkZXIgbWluPXswfSBtYXg9ezF9IHN0ZXA9ezAuMDF9IHRleHQ9e3ZhbHVlLnRvRml4ZWQoMil9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9TbGlkZXJzXCJcbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVFZGl0b3JcIlxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyB1c2VSb3V0ZVBhcmFtQXNTdHJpbmcgfSBmcm9tIFwiQC9hcHAvcm91dGVzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlRWRpdG9yIH0gZnJvbSBcIi4vX1BhbGV0dGVFZGl0b3JcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICAgIGNvbnN0IHsgYSwgYiwgZCwgYyB9ID0gdXNlUGFyYW1zKClcblxuICAgIHJldHVybiA8Vmlld1BhbGV0dGVFZGl0b3IgYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbn1cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCk6IHtcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn0ge1xuICAgIGNvbnN0IHZhbHVlID0gdXNlUm91dGVQYXJhbUFzU3RyaW5nKFwidmFsdWVcIilcbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZTI0KHZhbHVlKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gREVGQVVMVF9QQUxFVFRFXG4gICAgICAgIH1cbiAgICB9LCBbdmFsdWVdKSBhcyB7XG4gICAgICAgIGE6IEFycmF5TnVtYmVyM1xuICAgICAgICBiOiBBcnJheU51bWJlcjNcbiAgICAgICAgYzogQXJyYXlOdW1iZXIzXG4gICAgICAgIGQ6IEFycmF5TnVtYmVyM1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcGFyc2UyNCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCAhPT0gMjQpIHJldHVybiBERUZBVUxUX1BBTEVUVEVcblxuICAgIHJldHVybiB7XG4gICAgICAgIGE6IHBhcnNlKHZhbHVlLCAwKSxcbiAgICAgICAgYjogcGFyc2UodmFsdWUsIDEpLFxuICAgICAgICBjOiBwYXJzZSh2YWx1ZSwgMiksXG4gICAgICAgIGQ6IHBhcnNlKHZhbHVlLCAzKSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlOiBzdHJpbmcsIGFycklkeDogbnVtYmVyKTogQXJyYXlOdW1iZXIzIHtcbiAgICBjb25zdCBzdHJpZGUgPSBNYXRoLmZsb29yKHZhbHVlLmxlbmd0aCAvIDQpXG4gICAgY29uc3Qgd29yZCA9IE1hdGguZmxvb3Ioc3RyaWRlIC8gMylcbiAgICBjb25zdCBtYXggPSBNYXRoLnBvdygxNiwgd29yZCkgLSAxXG4gICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBhcnJJZHggKiBzdHJpZGUgKyB3b3JkICogaXRlbVxuICAgICAgICBjb25zdCBoZXggPSBgMHgke3ZhbHVlLnNsaWNlKGluZGV4LCBpbmRleCArIHdvcmQpfWBcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGhleCkgLyBtYXhcbiAgICB9KSBhcyBBcnJheU51bWJlcjNcbn1cblxuY29uc3QgREVGQVVMVF9QQUxFVFRFID0ge1xuICAgIGE6IFswLjUsIDAuNSwgMC41XSxcbiAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgYzogWzEsIDEsIDFdLFxuICAgIGQ6IFswLCAwLjMzLCAwLjY3XSxcbn1cbiIsImltcG9ydCBQcmlzbSBmcm9tIFwicHJpc21qc1wiXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuLy8gaW1wb3J0IFwicHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzc1wiXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQ29kZVZpZXdlci5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IGdldEdyYW1tYXJGb3JMYW5ndWFnZSB9IGZyb20gXCIuL2dyYW1tYXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENvZGVWaWV3ZXJWaWV3UHJvcHMge1xuICAgIGlkPzogc3RyaW5nXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG4gICAgdmFsdWU6IHN0cmluZyB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgICBsYW5ndWFnZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVWaWV3ZXJWaWV3KHByb3BzOiBDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gcHJvcHNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IHNpbmdsZVByb3BzOiBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFNpbmdsZUNvZGVWaWV3ZXJWaWV3IHsuLi5zaW5nbGVQcm9wc30gLz5cbiAgICB9XG4gICAgY29uc3QgbXVsdGlQcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdmFsdWUsXG4gICAgfVxuICAgIHJldHVybiA8TXVsdGlDb2RlVmlld2VyVmlldyB7Li4ubXVsdGlQcm9wc30gLz5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaW5nbGVDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBTaW5nbGVDb2RlVmlld2VyVmlldyhwcm9wczogU2luZ2xlQ29kZVZpZXdlclZpZXdQcm9wcykge1xuICAgIGNvbnN0IHJlZlRpbWVvdXQgPSBSZWFjdC51c2VSZWYoMClcbiAgICBjb25zdCBbcG9wdXAsIHNldFBvcHVwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHJlZkNvZGUgPSBSZWFjdC51c2VSZWY8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKVxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZWZDb2RlLmN1cnJlbnRcbiAgICAgICAgICAgIGlmICghY29kZSkgcmV0dXJuXG5cbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBQcmlzbS5oaWdobGlnaHQocHJvcHMudmFsdWUsIGdldEdyYW1tYXJGb3JMYW5ndWFnZShwcm9wcy5sYW5ndWFnZSksIHByb3BzLmxhbmd1YWdlKVxuICAgICAgICAgICAgY29kZS5pbm5lckhUTUwgPSBodG1sXG4gICAgICAgIH0sIDEwMClcbiAgICB9LCBbcHJvcHMudmFsdWUsIHByb3BzLmxhbmd1YWdlLCByZWZDb2RlLmN1cnJlbnRdKVxuICAgIGNvbnN0IGhhbmRsZURvdWJsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChwcm9wcy52YWx1ZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBzZXRQb3B1cCh0cnVlKVxuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChyZWZUaW1lb3V0LmN1cnJlbnQpXG4gICAgICAgICAgICByZWZUaW1lb3V0LmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzZXRQb3B1cChmYWxzZSksIDcwMDApXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZVBvcHVwQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldFBvcHVwKGZhbHNlKVxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHJlZlRpbWVvdXQuY3VycmVudClcbiAgICAgICAgcmVmVGltZW91dC5jdXJyZW50ID0gMFxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Z2V0Q2xhc3NOYW1lcyhwcm9wcyl9IG9uRG91YmxlQ2xpY2s9e2hhbmRsZURvdWJsZUNsaWNrfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICA8Y29kZSByZWY9e3JlZkNvZGV9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7cHJvcHMubGFuZ3VhZ2V9YH0gLz5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAge3BvcHVwICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17U3R5bGUucG9wdXB9IG9uQ2xpY2s9e2hhbmRsZVBvcHVwQ2xpY2t9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGNvZGUgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBjbGlwYm9hcmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZXMocHJvcHM6IENvZGVWaWV3ZXJWaWV3UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbU3R5bGUuQ29kZVZpZXdlcl1cbiAgICBpZiAodHlwZW9mIHByb3BzLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjbGFzc05hbWVzLnB1c2gocHJvcHMuY2xhc3NOYW1lKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzIGV4dGVuZHMgQ29kZVZpZXdlclZpZXdQcm9wcyB7XG4gICAgdmFsdWU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbn1cblxuZnVuY3Rpb24gTXVsdGlDb2RlVmlld2VyVmlldyhwcm9wczogTXVsdGlDb2RlVmlld2VyVmlld1Byb3BzKSB7XG4gICAgY29uc3QgY2FwdGlvbnMgPSBPYmplY3Qua2V5cyhwcm9wcy52YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2NhcHRpb25zLm1hcCgoY2FwdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGV0YWlscyBrZXk9e2NhcHRpb259IG9wZW49e2ZhbHNlfSBpZD17cHJvcHMuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8c3VtbWFyeT57Y2FwdGlvbn08L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxTaW5nbGVDb2RlVmlld2VyVmlldyB2YWx1ZT17cHJvcHMudmFsdWVbY2FwdGlvbl19IGxhbmd1YWdlPXtwcm9wcy5sYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IFByaXNtIGZyb20gXCJwcmlzbWpzXCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCJcbmltcG9ydCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIlxuaW1wb3J0IFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY1wiXG5pbXBvcnQgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ2xzbFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmFtbWFyRm9yTGFuZ3VhZ2UobGFuZ3VhZ2U6IHN0cmluZyk6IFByaXNtLkdyYW1tYXIge1xuICAgIHN3aXRjaCAobGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInRzXCI6XG4gICAgICAgICAgICByZXR1cm4gUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRcbiAgICAgICAgY2FzZSBcInRzeFwiOlxuICAgICAgICAgICAgcmV0dXJuIFByaXNtLmxhbmd1YWdlcy50c3hcbiAgICAgICAgY2FzZSBcImZyYWdcIjpcbiAgICAgICAgY2FzZSBcInZlcnRcIjpcbiAgICAgICAgICAgIHJldHVybiBQcmlzbS5sYW5ndWFnZXMuZ2xzbFxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIEdMU0xcbiAgICB9XG59XG5cbmNvbnN0IFRZUEVTID0gW1xuICAgIFwiYnZlYzJcIixcbiAgICBcImJ2ZWMzXCIsXG4gICAgXCJidmVjNFwiLFxuICAgIFwiZG1hdDJcIixcbiAgICBcImRtYXQyeDJcIixcbiAgICBcImRtYXQyeDNcIixcbiAgICBcImRtYXQyeDRcIixcbiAgICBcImRtYXQzXCIsXG4gICAgXCJkbWF0M3gyXCIsXG4gICAgXCJkbWF0M3gzXCIsXG4gICAgXCJkbWF0M3g0XCIsXG4gICAgXCJkbWF0NFwiLFxuICAgIFwiZG1hdDR4MlwiLFxuICAgIFwiZG1hdDR4M1wiLFxuICAgIFwiZG1hdDR4NFwiLFxuICAgIFwiZHZlYzJcIixcbiAgICBcImR2ZWMzXCIsXG4gICAgXCJkdmVjNFwiLFxuICAgIFwiZmxvYXRcIixcbiAgICBcImZ2ZWMyXCIsXG4gICAgXCJmdmVjM1wiLFxuICAgIFwiZnZlYzRcIixcbiAgICBcImlzYW1wbGVyMURcIixcbiAgICBcImlzYW1wbGVyMURBcnJheVwiLFxuICAgIFwiaXNhbXBsZXIyRFwiLFxuICAgIFwiaXNhbXBsZXIyREFycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJETVNcIixcbiAgICBcImlzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJpc2FtcGxlcjJEUmVjdFwiLFxuICAgIFwiaXNhbXBsZXIzRFwiLFxuICAgIFwiaXNhbXBsZXJCdWZmZXJcIixcbiAgICBcImlzYW1wbGVyQ3ViZVwiLFxuICAgIFwiaXNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcIml2ZWMyXCIsXG4gICAgXCJpdmVjM1wiLFxuICAgIFwiaXZlYzRcIixcbiAgICBcIm1hdDJcIixcbiAgICBcIm1hdDJ4MlwiLFxuICAgIFwibWF0MngzXCIsXG4gICAgXCJtYXQyeDRcIixcbiAgICBcIm1hdDNcIixcbiAgICBcIm1hdDN4MlwiLFxuICAgIFwibWF0M3gzXCIsXG4gICAgXCJtYXQzeDRcIixcbiAgICBcIm1hdDRcIixcbiAgICBcIm1hdDR4MlwiLFxuICAgIFwibWF0NHgzXCIsXG4gICAgXCJtYXQ0eDRcIixcbiAgICBcInNhbXBsZVwiLFxuICAgIFwic2FtcGxlcjFEXCIsXG4gICAgXCJzYW1wbGVyMURBcnJheVwiLFxuICAgIFwic2FtcGxlcjFEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIxRFNoYWRvd1wiLFxuICAgIFwic2FtcGxlcjJEXCIsXG4gICAgXCJzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwic2FtcGxlcjJEQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXIyRE1TXCIsXG4gICAgXCJzYW1wbGVyMkRNU0FycmF5XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0XCIsXG4gICAgXCJzYW1wbGVyMkRSZWN0U2hhZG93XCIsXG4gICAgXCJzYW1wbGVyMkRTaGFkb3dcIixcbiAgICBcInNhbXBsZXIzRFwiLFxuICAgIFwic2FtcGxlckJ1ZmZlclwiLFxuICAgIFwic2FtcGxlckN1YmVcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlcIixcbiAgICBcInNhbXBsZXJDdWJlQXJyYXlTaGFkb3dcIixcbiAgICBcInNhbXBsZXJDdWJlU2hhZG93XCIsXG4gICAgXCJ1c2FtcGxlcjFEXCIsXG4gICAgXCJ1c2FtcGxlcjFEQXJyYXlcIixcbiAgICBcInVzYW1wbGVyMkRcIixcbiAgICBcInVzYW1wbGVyMkRBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRE1TXCIsXG4gICAgXCJ1c2FtcGxlcjJETVNBcnJheVwiLFxuICAgIFwidXNhbXBsZXIyRFJlY3RcIixcbiAgICBcInVzYW1wbGVyM0RcIixcbiAgICBcInVzYW1wbGVyQnVmZmVyXCIsXG4gICAgXCJ1c2FtcGxlckN1YmVcIixcbiAgICBcInVzYW1wbGVyQ3ViZUFycmF5XCIsXG4gICAgXCJ1dmVjMlwiLFxuICAgIFwidXZlYzNcIixcbiAgICBcInV2ZWM0XCIsXG4gICAgXCJ2ZWMyXCIsXG4gICAgXCJ2ZWMzXCIsXG4gICAgXCJ2ZWM0XCIsXG4gICAgXCJ2b2lkXCIsXG5dXG5cbmNvbnN0IEtFWVdPUkRTID0gW1xuICAgIFwiY2VudHJvaWRcIixcbiAgICBcImNvbnN0XCIsXG4gICAgXCJkaXNjYXJkXCIsXG4gICAgXCJlbHNlXCIsXG4gICAgXCJmbGF0XCIsXG4gICAgXCJoaWdocFwiLFxuICAgIFwiaWZcIixcbiAgICBcImluXCIsXG4gICAgXCJpbm91dFwiLFxuICAgIFwiaW52YXJpYW50XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxvd3BcIixcbiAgICBcIm1lZGl1bXBcIixcbiAgICBcIm5vcGVyc3BlY3RpdmVcIixcbiAgICBcIm91dFwiLFxuICAgIFwicGF0Y2hcIixcbiAgICBcInByZWNpc2lvblwiLFxuICAgIFwic21vb3RoXCIsXG4gICAgXCJzdWJyb3V0aW5lXCIsXG4gICAgXCJ1bmlmb3JtXCIsXG4gICAgLy8gUmVzZXJ2ZWQgZm9yIGZ1dHVyZS5cbiAgICBcImFjdGl2ZVwiLFxuICAgIFwiYXNtXCIsXG4gICAgXCJjYXN0XCIsXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY29tbW9uXCIsXG4gICAgXCJlbnVtXCIsXG4gICAgXCJleHRlcm5cIixcbiAgICBcImV4dGVybmFsXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZpeGVkXCIsXG4gICAgXCJnb3RvXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJodmVjMlwiLFxuICAgIFwiaHZlYzNcIixcbiAgICBcImh2ZWM0XCIsXG4gICAgXCJpaW1hZ2UxRFwiLFxuICAgIFwiaWltYWdlMURBcnJheVwiLFxuICAgIFwiaWltYWdlMkRcIixcbiAgICBcImlpbWFnZTJEQXJyYXlcIixcbiAgICBcImlpbWFnZTNEXCIsXG4gICAgXCJpaW1hZ2VCdWZmZXJcIixcbiAgICBcImlpbWFnZUN1YmVcIixcbiAgICBcImltYWdlMURcIixcbiAgICBcImltYWdlMURBcnJheVwiLFxuICAgIFwiaW1hZ2UxREFycmF5U2hhZG93XCIsXG4gICAgXCJpbWFnZTFEU2hhZG93XCIsXG4gICAgXCJpbWFnZTJEXCIsXG4gICAgXCJpbWFnZTJEQXJyYXlcIixcbiAgICBcImltYWdlMkRBcnJheVNoYWRvd1wiLFxuICAgIFwiaW1hZ2UyRFNoYWRvd1wiLFxuICAgIFwiaW1hZ2UzRFwiLFxuICAgIFwiaW1hZ2VCdWZmZXJcIixcbiAgICBcImltYWdlQ3ViZVwiLFxuICAgIFwiaW5saW5lXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwiaW50ZXJmYWNlXCIsXG4gICAgXCJsb25nXCIsXG4gICAgXCJuYW1lc3BhY2VcIixcbiAgICBcIm5vaW5saW5lXCIsXG4gICAgXCJvdXRwdXRcIixcbiAgICBcInBhY2tlZFwiLFxuICAgIFwicGFydGl0aW9uXCIsXG4gICAgXCJwdWJsaWNcIixcbiAgICBcInJvd19tYWpvclwiLFxuICAgIFwic2FtcGxlcjNEUmVjdFwiLFxuICAgIFwic2hvcnRcIixcbiAgICBcInNpemVvZlwiLFxuICAgIFwic3RhdGljXCIsXG4gICAgXCJzdXBlcnBcIixcbiAgICBcInRlbXBsYXRlXCIsXG4gICAgXCJ0aGlzXCIsXG4gICAgXCJ0eXBlZGVmXCIsXG4gICAgXCJ1aW1hZ2UxRFwiLFxuICAgIFwidWltYWdlMURBcnJheVwiLFxuICAgIFwidWltYWdlMkRcIixcbiAgICBcInVpbWFnZTJEQXJyYXlcIixcbiAgICBcInVpbWFnZTNEXCIsXG4gICAgXCJ1aW1hZ2VCdWZmZXJcIixcbiAgICBcInVpbWFnZUN1YmVcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1bnNpZ25lZFwiLFxuICAgIFwidXNpbmdcIixcbiAgICBcInZvbGF0aWxlXCIsXG5dXG5cbmNvbnN0IEdMT0JBTFMgPSBbXG4gICAgXCJnbF9EZXB0aFJhbmdlXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLmRpZmZcIixcbiAgICBcImdsX0RlcHRoUmFuZ2UuZmFyXCIsXG4gICAgXCJnbF9EZXB0aFJhbmdlLm5lYXJcIixcbiAgICBcImdsX0ZyYWdDb29yZFwiLFxuICAgIFwiZ2xfRnJhZ0RlcHRoXCIsXG4gICAgXCJnbF9Gcm9udEZhY2luZ1wiLFxuICAgIFwiZ2xfSW5zdGFuY2VJRFwiLFxuICAgIFwiZ2xfUG9pbnRDb29yZFwiLFxuICAgIFwiZ2xfUG9pbnRTaXplXCIsXG4gICAgXCJnbF9Qb3NpdGlvblwiLFxuICAgIFwiZ2xfVmVydGV4SURcIixcbl1cblxuY29uc3QgRlVOQ1RJT05TID0gW1xuICAgIFwiYWJzXCIsXG4gICAgXCJhY29zXCIsXG4gICAgXCJhY29zaFwiLFxuICAgIFwiYWxsXCIsXG4gICAgXCJhbnlcIixcbiAgICBcImFzaW5cIixcbiAgICBcImFzaW5oXCIsXG4gICAgXCJhdGFuXCIsXG4gICAgXCJhdGFuaFwiLFxuICAgIFwiY2VpbFwiLFxuICAgIFwiY2xhbXBcIixcbiAgICBcImNvc1wiLFxuICAgIFwiY29zaFwiLFxuICAgIFwiY3Jvc3NcIixcbiAgICBcImRlZ3JlZXNcIixcbiAgICBcImRldGVybWluYW50XCIsXG4gICAgXCJkRmR4XCIsXG4gICAgXCJkRmR5XCIsXG4gICAgXCJkaXN0YW5jZVwiLFxuICAgIFwiZG90XCIsXG4gICAgXCJlcXVhbFwiLFxuICAgIFwiZXhwXCIsXG4gICAgXCJleHAyXCIsXG4gICAgXCJmYWNlZm9yd2FyZFwiLFxuICAgIFwiZmxvYXRCaXRzVG9JbnRcIixcbiAgICBcImZsb2F0Qml0c1RvVWludFwiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImZyYWN0XCIsXG4gICAgXCJmd2lkdGhcIixcbiAgICBcImdyZWF0ZXJUaGFuXCIsXG4gICAgXCJncmVhdGVyVGhhbkVxdWFsXCIsXG4gICAgXCJpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwiaW52ZXJzZVwiLFxuICAgIFwiaW52ZXJzZXNxcnRcIixcbiAgICBcImlzaW5mXCIsXG4gICAgXCJpc25hblwiLFxuICAgIFwibGVuZ3RoXCIsXG4gICAgXCJsZXNzVGhhblwiLFxuICAgIFwibGVzc1RoYW5FcXVhbFwiLFxuICAgIFwibG9nXCIsXG4gICAgXCJsb2cyXCIsXG4gICAgXCJtYXRyaXhDb21wTXVsdFwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtaW5cIixcbiAgICBcIm1peFwiLFxuICAgIFwibW9kXCIsXG4gICAgXCJtb2RmXCIsXG4gICAgXCJub3JtYWxpemVcIixcbiAgICBcIm5vdFwiLFxuICAgIFwibm90RXF1YWxcIixcbiAgICBcIm91dGVyUHJvZHVjdFwiLFxuICAgIFwicGFja0hhbGYyeDE2XCIsXG4gICAgXCJwYWNrU25vcm0yeDE2XCIsXG4gICAgXCJwYWNrVW5vcm0yeDE2XCIsXG4gICAgXCJwb3dcIixcbiAgICBcInJhZGlhbnNcIixcbiAgICBcInJlZmxlY3RcIixcbiAgICBcInJlZnJhY3RcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJyb3VuZEV2ZW5cIixcbiAgICBcInNpZ25cIixcbiAgICBcInNpblwiLFxuICAgIFwic2luaFwiLFxuICAgIFwic21vb3Roc3RlcFwiLFxuICAgIFwic3FydFwiLFxuICAgIFwic3RlcFwiLFxuICAgIFwidGFuXCIsXG4gICAgXCJ0YW5oXCIsXG4gICAgXCJ0ZXhlbEZldGNoXCIsXG4gICAgXCJ0ZXhlbEZldGNoT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlXCIsXG4gICAgXCJ0ZXh0dXJlR3JhZFwiLFxuICAgIFwidGV4dHVyZUdyYWRPZmZzZXRcIixcbiAgICBcInRleHR1cmVMb2RcIixcbiAgICBcInRleHR1cmVMb2RPZmZzZXRcIixcbiAgICBcInRleHR1cmVPZmZzZXRcIixcbiAgICBcInRleHR1cmVQcm9qXCIsXG4gICAgXCJ0ZXh0dXJlUHJvakdyYWRcIixcbiAgICBcInRleHR1cmVQcm9qR3JhZE9mZnNldFwiLFxuICAgIFwidGV4dHVyZVByb2pMb2RcIixcbiAgICBcInRleHR1cmVQcm9qTG9kT2Zmc2V0XCIsXG4gICAgXCJ0ZXh0dXJlUHJvak9mZnNldFwiLFxuICAgIFwidGV4dHVyZVNpemVcIixcbiAgICBcInRyYW5zcG9zZVwiLFxuICAgIFwidHJ1bmNcIixcbiAgICBcInVpbnRCaXRzVG9GbG9hdFwiLFxuICAgIFwidW5wYWNrSGFsZjJ4MTZcIixcbiAgICBcInVucGFja1Nub3JtMngxNlwiLFxuICAgIFwidW5wYWNrVW5vcm0yeDE2XCIsXG5dXG5cbmNvbnN0IEdMU0w6IFByaXNtLkdyYW1tYXIgPSB7XG4gICAgY29tbWVudDogW1xuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpL2csXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovZyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eIy4rJC9nLFxuICAgICAgICAgICAgbG9va2JlaGluZDogZmFsc2UsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBudW1iZXI6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC8oXnxbXlxcdyRdKSg/Ok5hTnxJbmZpbml0eXwwW2JCXVswMV0rKD86X1swMV0rKSpuP3wwW29PXVswLTddKyg/Ol9bMC03XSspKm4/fDBbeFhdW1xcZEEtRmEtZl0rKD86X1tcXGRBLUZhLWZdKykqbj98XFxkKyg/Ol9cXGQrKSpufCg/OlxcZCsoPzpfXFxkKykqKD86XFwuKD86XFxkKyg/Ol9cXGQrKSopPyk/fFxcLlxcZCsoPzpfXFxkKykqKSg/OltFZV1bKy1dP1xcZCsoPzpfXFxkKykqKT8pKD8hW1xcdyRdKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgfSxcbiAgICB0eXBlOiBtYWtlSWRlbnRpZmllcnNSWChUWVBFUyksXG4gICAga2V5d29yZDogbWFrZUlkZW50aWZpZXJzUlgoS0VZV09SRFMpLFxuICAgIGdsb2JhbDogbWFrZUlkZW50aWZpZXJzUlgoR0xPQkFMUyksXG4gICAgZnVuY3Rpb246IG1ha2VJZGVudGlmaWVyc1JYKEZVTkNUSU9OUyksXG59XG5cbmZ1bmN0aW9uIG1ha2VJZGVudGlmaWVyc1JYKHdvcmRzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoYCg/OlteYS16QS1aMC05X10pKCR7d29yZHMuam9pbihcInxcIil9KSg/PVteYS16QS1aMC05X10pYCksXG4gICAgICAgIGxvb2tiZWhpbmQ6IGZhbHNlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgfVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvZGVWaWV3ZXJcIlxuIl0s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