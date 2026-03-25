"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_palette_page_tsx"], {
96828(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palettePreviewHorizontal":"src-app-tools-palette-PalettePreviewHorizontal-PalettePreviewHorizontal-module_palettePreviewHorizontal_TA5I7W"});

},
48368(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"palette":"src-app-tools-palette-_Palette-Palette-module_palette_Rr1tLO","palettes":"src-app-tools-palette-_Palette-Palette-module_palettes_UQ7TtC"});

},
68439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"paletteButton":"src-app-tools-palette-_Palette-PaletteButton-PaletteButton-module_paletteButton_REhuK8","preview":"src-app-tools-palette-_Palette-PaletteButton-PaletteButton-module_preview_Q7eal0"});

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
88311(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalette: () => (ViewPalette)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _consts__rspack_import_2 = __webpack_require__(21912);
/* import */ var _PaletteButton__rspack_import_3 = __webpack_require__(5962);
/* import */ var _Palette_module_css__rspack_import_4 = __webpack_require__(48368);





const $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewPalette(props) {
    const style = {
        ...(0,_tolokoban_ui__rspack_import_1.styleCommon)(props),
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("div", { className: $.join(props.className, _Palette_module_css__rspack_import_4["default"].palette), style: style, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("h1", { children: "Palette function: f(t) = a + b \u22C5 cos( 2\u03C0(c\u22C5t+d) )" }), (0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: _Palette_module_css__rspack_import_4["default"].palettes, children: _consts__rspack_import_2.PALETTES.map(({ name, a, b, c, d }) => ((0,react_jsx_runtime__rspack_import_0.jsx)(_PaletteButton__rspack_import_3.ViewPaletteButton, { name: name, a: a, b: b, c: c, d: d }, name))) }), (0,react_jsx_runtime__rspack_import_0.jsx)("p", { children: "Click a palette to edit" })] }));
}


},
42991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteButton: () => (ViewPaletteButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _PalettePreviewHorizontal__rspack_import_2 = __webpack_require__(30783);
/* import */ var _PaletteButton_module_css__rspack_import_3 = __webpack_require__(68439);




const $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewPaletteButton(props) {
    const style = {
        ...(0,_tolokoban_ui__rspack_import_1.styleCommon)(props),
    };
    const handleClick = () => editPalette(props);
    return ((0,react_jsx_runtime__rspack_import_0.jsxs)("button", { className: $.join(props.className, _PaletteButton_module_css__rspack_import_3["default"].paletteButton), type: "button", style: style, onClick: handleClick, children: [(0,react_jsx_runtime__rspack_import_0.jsx)("h2", { children: props.name }), (0,react_jsx_runtime__rspack_import_0.jsx)(_PalettePreviewHorizontal__rspack_import_2.ViewPalettePreviewHorizontal, { className: _PaletteButton_module_css__rspack_import_3["default"].preview, a: props.a, b: props.b, c: props.c, d: props.d })] }));
}
function editPalette({ a, b, c, d }) {
    location.hash = `#/tools/palette/${hex(a)}${hex(b)}${hex(c)}${hex(d)}`;
}
function hex(arr) {
    return arr
        .map((v) => Math.round(0xff * v)
        .toString(16)
        .toUpperCase()
        .padStart(2, "0"))
        .join("");
}


},
5962(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPaletteButton: () => (/* reexport safe */ _PaletteButton__rspack_import_0.ViewPaletteButton)
});
/* import */ var _PaletteButton__rspack_import_0 = __webpack_require__(42991);



},
21912(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PALETTES: () => (PALETTES)
});
const PALETTES = [
    {
        name: "Hue Wheel",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0, 0.33, 0.67],
    },
    {
        name: "Brown to Blue",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0, 0.1, 0.2],
    },
    {
        name: "Greenish Pink",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 1],
        d: [0.3, 0.2, 0.2],
    },
    {
        name: "Yellow Power",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 1, 0.5],
        d: [0.8, 0.9, 0.3],
    },
    {
        name: "Purple and Orange",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [1, 0.7, 0.4],
        d: [0, 0.15, 0.2],
    },
    {
        name: "Fushia Column",
        a: [0.5, 0.5, 0.5],
        b: [0.5, 0.5, 0.5],
        c: [2, 1, 0],
        d: [0.5, 0.2, 0.25],
    },
    {
        name: "Flesh & Bones",
        a: [0.8, 0.5, 0.4],
        b: [0.2, 0.4, 0.2],
        c: [2, 1, 1],
        d: [0, 0.25, 0.25],
    },
    {
        name: "Gold & Copper",
        a: [0.62, 0.62, 0.62],
        b: [0.74, 0.502, 0.502],
        c: [1, 0.702, 0.35],
        d: [0, 0.149, 0.35],
    },
];


},
12790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewPalette: () => (/* reexport safe */ _Palette__rspack_import_0.ViewPalette)
});
/* import */ var _Palette__rspack_import_0 = __webpack_require__(88311);



},
89994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PageViewGLTF)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _Palette__rspack_import_1 = __webpack_require__(12790);


function PageViewGLTF() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_Palette__rspack_import_1.ViewPalette, {});
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFsZXR0ZV9wYWdlX3RzeC5lNWY4NzBiZjU3MzU5ZDBjLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzPzMzMmEiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZS5tb2R1bGUuY3NzPzdlN2YiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZUJ1dHRvbi9QYWxldHRlQnV0dG9uLm1vZHVsZS5jc3M/ZTY5NSIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9QYWxldHRlUHJldmlld0hvcml6b250YWwvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsL3BhaW50ZXIudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZS50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3Rvb2xzL3BhbGV0dGUvX1BhbGV0dGUvUGFsZXR0ZUJ1dHRvbi9QYWxldHRlQnV0dG9uLnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9QYWxldHRlQnV0dG9uL2luZGV4LnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWxldHRlL19QYWxldHRlL2NvbnN0cy50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9fUGFsZXR0ZS9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvdG9vbHMvcGFsZXR0ZS9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCI6XCJzcmMtYXBwLXRvb2xzLXBhbGV0dGUtUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsLVBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC1tb2R1bGVfcGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsX1RBNUk3V1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZVwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVfUnIxdExPXCIsXCJwYWxldHRlc1wiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGUtbW9kdWxlX3BhbGV0dGVzX1VRN1R0Q1wifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wicGFsZXR0ZUJ1dHRvblwiOlwic3JjLWFwcC10b29scy1wYWxldHRlLV9QYWxldHRlLVBhbGV0dGVCdXR0b24tUGFsZXR0ZUJ1dHRvbi1tb2R1bGVfcGFsZXR0ZUJ1dHRvbl9SRWh1SzhcIixcInByZXZpZXdcIjpcInNyYy1hcHAtdG9vbHMtcGFsZXR0ZS1fUGFsZXR0ZS1QYWxldHRlQnV0dG9uLVBhbGV0dGVCdXR0b24tbW9kdWxlX3ByZXZpZXdfUTdlYWwwXCJ9OyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMsIFRnZFZlYzMsIFRnZFZlYzQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbC5tb2R1bGUuY3NzXCJcbmltcG9ydCB7IFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfSBmcm9tIFwiLi9wYWludGVyXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgYTogQXJyYXlOdW1iZXIzXG4gICAgYjogQXJyYXlOdW1iZXIzXG4gICAgYzogQXJyYXlOdW1iZXIzXG4gICAgZDogQXJyYXlOdW1iZXIzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsKHByb3BzOiBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsUHJvcHMpIHtcbiAgICBjb25zdCBwYWludGVyID0gdXNlUGFpbnRlcigpXG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgY29uc3QgeyBhLCBiLCBkLCBjIH0gPSBwcm9wc1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHBhaW50ZXIuYSA9IGFcbiAgICAgICAgcGFpbnRlci5iID0gYlxuICAgICAgICBwYWludGVyLmMgPSBjXG4gICAgICAgIHBhaW50ZXIuZCA9IGRcbiAgICAgICAgcGFpbnRlci5wYWludCgpXG4gICAgfSwgW2EsIGIsIGMsIGRdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIHJlZj17cGFpbnRlci5zZXRDYW52YXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlUHJldmlld0hvcml6b250YWwpfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlfT48L2NhbnZhcz5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVzZVBhaW50ZXIoKSB7XG4gICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIgfCBudWxsPihudWxsKVxuICAgIGlmICghcmVmLmN1cnJlbnQpIHJlZi5jdXJyZW50ID0gbmV3IFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIoKVxuICAgIHJldHVybiByZWYuY3VycmVudFxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vUGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsXCJcbiIsImltcG9ydCB7IHR5cGUgQXJyYXlOdW1iZXIzLCBUZ2RDb250ZXh0LCBUZ2RQYWludGVyRnJhZ21lbnRTaGFkZXIsIFRnZFNoYWRlckZyYWdtZW50IH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGNsYXNzIFBhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFBhaW50ZXIge1xuICAgIHB1YmxpYyBhOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cbiAgICBwdWJsaWMgYjogQXJyYXlOdW1iZXIzID0gWzAuNSwgMC41LCAwLjVdXG4gICAgcHVibGljIGM6IEFycmF5TnVtYmVyMyA9IFswLjUsIDAuNSwgMC41XVxuICAgIHB1YmxpYyBkOiBBcnJheU51bWJlcjMgPSBbMC41LCAwLjUsIDAuNV1cblxuICAgIHByaXZhdGUgY29udGV4dDogVGdkQ29udGV4dCB8IG51bGwgPSBudWxsXG5cbiAgICByZWFkb25seSBzZXRDYW52YXMgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRlbGV0ZSgpXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcywgeyBhbnRpYWxpYXM6IGZhbHNlIH0pXG4gICAgICAgICAgICBjb250ZXh0LmFkZChcbiAgICAgICAgICAgICAgICBuZXcgVGdkUGFpbnRlckZyYWdtZW50U2hhZGVyKGNvbnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZGVyOiBuZXcgVGdkU2hhZGVyRnJhZ21lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlBOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlCOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlDOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlEOiBcInZlYzNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyVVY6IFwidmVjMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcmFnQ29sb3I6IFwidmVjNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2RlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdCB0ID0gdmFyVVYueDtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2B1bmlBICsgdW5pQipjb3MoJHsyICogTWF0aC5QSX0qKHVuaUMgKiB0ICsgdW5pRCkpLGAsIFwiMVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIik7XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc2V0VW5pZm9ybXM6ICh7IHByb2dyYW0gfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlBXCIsIC4uLnRoaXMuYSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyYW0udW5pZm9ybTNmKFwidW5pQlwiLCAuLi50aGlzLmIpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmFtLnVuaWZvcm0zZihcInVuaUNcIiwgLi4udGhpcy5jKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbS51bmlmb3JtM2YoXCJ1bmlEXCIsIC4uLnRoaXMuZClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFpbnQoKSB7XG4gICAgICAgIGNvbnN0IHsgY29udGV4dCB9ID0gdGhpc1xuICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVyblxuXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgIH1cbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCB7IFBBTEVUVEVTIH0gZnJvbSBcIi4vY29uc3RzXCJcbmltcG9ydCB7IFZpZXdQYWxldHRlQnV0dG9uIH0gZnJvbSBcIi4vUGFsZXR0ZUJ1dHRvblwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZS5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVQcm9wcyA9IENvbW1vblByb3BzICYge31cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZXdQYWxldHRlKHByb3BzOiBWaWV3UGFsZXR0ZVByb3BzKSB7XG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5wYWxldHRlKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxoMT5QYWxldHRlIGZ1bmN0aW9uOiBmKHQpID0gYSArIGIg4ouFIGNvcyggMs+AKGPii4V0K2QpICk8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5wYWxldHRlc30+XG4gICAgICAgICAgICAgICAge1BBTEVUVEVTLm1hcCgoeyBuYW1lLCBhLCBiLCBjLCBkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdQYWxldHRlQnV0dG9uIGtleT17bmFtZX0gbmFtZT17bmFtZX0gYT17YX0gYj17Yn0gYz17Y30gZD17ZH0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+Q2xpY2sgYSBwYWxldHRlIHRvIGVkaXQ8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgeyBBcnJheU51bWJlcjMgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgeyBWaWV3UGFsZXR0ZVByZXZpZXdIb3Jpem9udGFsIH0gZnJvbSBcIi4uLy4uL1BhbGV0dGVQcmV2aWV3SG9yaXpvbnRhbFwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vUGFsZXR0ZUJ1dHRvbi5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld1BhbGV0dGVCdXR0b25Qcm9wcyA9IENvbW1vblByb3BzICYge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGE6IEFycmF5TnVtYmVyM1xuICAgIGI6IEFycmF5TnVtYmVyM1xuICAgIGM6IEFycmF5TnVtYmVyM1xuICAgIGQ6IEFycmF5TnVtYmVyM1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld1BhbGV0dGVCdXR0b24ocHJvcHM6IFZpZXdQYWxldHRlQnV0dG9uUHJvcHMpIHtcbiAgICBjb25zdCBzdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgLi4uc3R5bGVDb21tb24ocHJvcHMpLFxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IGVkaXRQYWxldHRlKHByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMucGFsZXR0ZUJ1dHRvbil9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgIDxoMj57cHJvcHMubmFtZX08L2gyPlxuICAgICAgICAgICAgPFZpZXdQYWxldHRlUHJldmlld0hvcml6b250YWwgY2xhc3NOYW1lPXtTdHlsZXMucHJldmlld30gYT17cHJvcHMuYX0gYj17cHJvcHMuYn0gYz17cHJvcHMuY30gZD17cHJvcHMuZH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBlZGl0UGFsZXR0ZSh7IGEsIGIsIGMsIGQgfTogeyBhOiBBcnJheU51bWJlcjM7IGI6IEFycmF5TnVtYmVyMzsgYzogQXJyYXlOdW1iZXIzOyBkOiBBcnJheU51bWJlcjMgfSkge1xuICAgIGxvY2F0aW9uLmhhc2ggPSBgIy90b29scy9wYWxldHRlLyR7aGV4KGEpfSR7aGV4KGIpfSR7aGV4KGMpfSR7aGV4KGQpfWBcbn1cblxuZnVuY3Rpb24gaGV4KGFycjogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAgIC5tYXAoKHYpID0+XG4gICAgICAgICAgICBNYXRoLnJvdW5kKDB4ZmYgKiB2KVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgIC5wYWRTdGFydCgyLCBcIjBcIiksXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oXCJcIilcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVCdXR0b25cIlxuIiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIzIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZXhwb3J0IGludGVyZmFjZSBQYWxldHRlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhOiBBcnJheU51bWJlcjNcbiAgICBiOiBBcnJheU51bWJlcjNcbiAgICBjOiBBcnJheU51bWJlcjNcbiAgICBkOiBBcnJheU51bWJlcjNcbn1cblxuZXhwb3J0IGNvbnN0IFBBTEVUVEVTOiBSZWFkb25seTxQYWxldHRlW10+ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJIdWUgV2hlZWxcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAxXSxcbiAgICAgICAgZDogWzAsIDAuMzMsIDAuNjddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJyb3duIHRvIEJsdWVcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAxXSxcbiAgICAgICAgZDogWzAsIDAuMSwgMC4yXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHcmVlbmlzaCBQaW5rXCIsXG4gICAgICAgIGE6IFswLjUsIDAuNSwgMC41XSxcbiAgICAgICAgYjogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBjOiBbMSwgMSwgMV0sXG4gICAgICAgIGQ6IFswLjMsIDAuMiwgMC4yXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJZZWxsb3cgUG93ZXJcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAxLCAwLjVdLFxuICAgICAgICBkOiBbMC44LCAwLjksIDAuM10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUHVycGxlIGFuZCBPcmFuZ2VcIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsxLCAwLjcsIDAuNF0sXG4gICAgICAgIGQ6IFswLCAwLjE1LCAwLjJdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkZ1c2hpYSBDb2x1bW5cIixcbiAgICAgICAgYTogWzAuNSwgMC41LCAwLjVdLFxuICAgICAgICBiOiBbMC41LCAwLjUsIDAuNV0sXG4gICAgICAgIGM6IFsyLCAxLCAwXSxcbiAgICAgICAgZDogWzAuNSwgMC4yLCAwLjI1XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJGbGVzaCAmIEJvbmVzXCIsXG4gICAgICAgIGE6IFswLjgsIDAuNSwgMC40XSxcbiAgICAgICAgYjogWzAuMiwgMC40LCAwLjJdLFxuICAgICAgICBjOiBbMiwgMSwgMV0sXG4gICAgICAgIGQ6IFswLCAwLjI1LCAwLjI1XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHb2xkICYgQ29wcGVyXCIsXG4gICAgICAgIGE6IFswLjYyLCAwLjYyLCAwLjYyXSxcbiAgICAgICAgYjogWzAuNzQsIDAuNTAyLCAwLjUwMl0sXG4gICAgICAgIGM6IFsxLCAwLjcwMiwgMC4zNV0sXG4gICAgICAgIGQ6IFswLCAwLjE0OSwgMC4zNV0sXG4gICAgfSxcbl1cbiIsImV4cG9ydCAqIGZyb20gXCIuL1BhbGV0dGVcIlxuIiwiaW1wb3J0IHsgVmlld1BhbGV0dGUgfSBmcm9tIFwiLi9fUGFsZXR0ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VWaWV3R0xURigpIHtcbiAgICByZXR1cm4gPFZpZXdQYWxldHRlIC8+XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyw0SUFBNEksRTs7Ozs7Ozs7QUNENUo7QUFDQSxzREFBZSxDQUFDLG9KQUFvSixFOzs7Ozs7OztBQ0RwSztBQUNBLHNEQUFlLENBQUMsc01BQXNNLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0R4TDtBQUVpQztBQUdMO0FBQ0M7QUFFM0QsTUFBTSxDQUFDLEdBQUcsK0NBQWdCO0FBU25CLFNBQVMsNEJBQTRCLENBQUMsS0FBd0M7SUFDakYsTUFBTSxPQUFPLEdBQUcsVUFB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