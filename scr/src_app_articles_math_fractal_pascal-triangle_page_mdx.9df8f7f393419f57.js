"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_math_fractal_pascal-triangle_page_mdx"], {
55632(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"main":"src-app-articles-math-fractal-pascal-triangle-_-triangle-module_main_ksikX0"});

},
33793(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"canvas2d":"src-components-Canvas2d-Canvas2d-module_canvas2d_kmyJp7"});

},
7702(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeCanvasTriangleSlow: () => (makeCanvasTriangleSlow)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _util__rspack_import_1 = __webpack_require__(70910);
/* import */ var _row_generator__rspack_import_2 = __webpack_require__(22440);



function makeCanvasTriangleSlow(size, modulo) {
    const colors = (0,_util__rspack_import_1.makeColors)(modulo, 50);
    const { canvas, ctx } = (0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreateWithContext2D)(size, size);
    const generator = new _row_generator__rspack_import_2.RowGenerator();
    for (let row = 0; row < size; row++) {
        const line = generator.next();
        for (let col = 0; col <= row; col++) {
            const value = line[col] % modulo;
            const color = colors[value];
            ctx.fillStyle = color;
            ctx.fillRect(col, row, 1, 1);
        }
    }
    return canvas;
}


},
22440(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RowGenerator: () => (RowGenerator)
});
/* import */ var _util__rspack_import_0 = __webpack_require__(70910);

class RowGenerator {
    constructor(modulo = 256) {
        this.modulo = modulo;
        this.current = [];
    }
    next() {
        const { current } = this;
        if (current.length === 0) {
            this.current = [1];
        }
        else {
            const newCurrent = (0,_util__rspack_import_0.range)(this.current.length + 1).map((index) => ((current[index - 1] ?? 0) + (current[index] ?? 0)) % this.modulo);
            this.current = newCurrent;
        }
        return this.current.slice();
    }
}


},
52562(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Test: () => (Test)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _components_Canvas2d__rspack_import_1 = __webpack_require__(24317);
/* import */ var _canvas__rspack_import_2 = __webpack_require__(7702);



function Test() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)(_components_Canvas2d__rspack_import_1.ViewCanvas2d, { factory: () => (0,_canvas__rspack_import_2.makeCanvasTriangleSlow)(1024, 13) });
}


},
65194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PascalTriangle: () => (PascalTriangle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _triangle_module_css__rspack_import_2 = __webpack_require__(55632);
/* import */ var _util__rspack_import_3 = __webpack_require__(70910);
/* import */ var _row_generator__rspack_import_4 = __webpack_require__(22440);





function PascalTriangle({ rows, modulo }) {
    const colors = useColors(modulo);
    const generator = new _row_generator__rspack_import_4.RowGenerator();
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: _triangle_module_css__rspack_import_2["default"].main, children: (0,_util__rspack_import_3.range)(rows).map((row) => ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { children: generator.next().map((value, index) => ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { style: { background: colors[value % modulo] }, title: `${value}`, children: value }, index))) }, row))) }));
}
function useColors(modulo) {
    return react__rspack_import_1_default().useMemo(() => (0,_util__rspack_import_3.makeColors)(modulo), [modulo]);
}


},
70910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeColors: () => (makeColors),
  range: () => (range)
});
function range(count) {
    return Array.from(Array(count).keys());
}
function makeColors(count, lightness = 33) {
    return range(count + 1).map((index) => `lch(${lightness}% 130% ${Math.round(260 + (index * 360) / count) % 360}deg) /* index = ${index} */`);
}


},
30929(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewCanvas2d: () => (ViewCanvas2d)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _Canvas2d_module_css__rspack_import_2 = __webpack_require__(33793);



const $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewCanvas2d(props) {
    const style = {
        ...(0,_tolokoban_ui__rspack_import_1.styleCommon)(props),
    };
    const handleMount = (img) => {
        if (!img)
            return;
        const canvas = props.factory();
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL();
    };
    return ((0,react_jsx_runtime__rspack_import_0.jsx)("div", { className: $.join(props.className, _Canvas2d_module_css__rspack_import_2["default"].canvas2d), style: style, children: (0,react_jsx_runtime__rspack_import_0.jsx)("img", { ref: handleMount }) }));
}


},
24317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewCanvas2d: () => (/* reexport safe */ _Canvas2d__rspack_import_0.ViewCanvas2d)
});
/* import */ var _Canvas2d__rspack_import_0 = __webpack_require__(30929);



},
95787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _triangle__rspack_import_1 = __webpack_require__(65194);
/* import */ var _test__rspack_import_2 = __webpack_require__(52562);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Pascal triangle and fractals"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 4,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://en.wikipedia.org/wiki/Pascal%27s_triangle",
                        children: "pascal triangle"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                        lineNumber: 6,
                        columnNumber: 5
                    }, this),
                    " has\nmany properties. One of them deals with fractals."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Look at this triangle below. We have set colors depending on the oddness of the\nvalue (orange for odd, blue for even)."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_triangle__rspack_import_1.PascalTriangle, {
                rows: 11,
                modulo: 2
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You can see triangles appearing. But it would be better to have a view from far\nand that's we will do in this example."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_test__rspack_import_2.Test, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWF0aF9mcmFjdGFsX3Bhc2NhbC10cmlhbmdsZV9wYWdlX21keC45ZGY4ZjdmMzkzNDE5ZjU3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS5tb2R1bGUuY3NzPzQ0YWIiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9DYW52YXMyZC9DYW52YXMyZC5tb2R1bGUuY3NzPzQzMmYiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy9jYW52YXMudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy9yb3ctZ2VuZXJhdG9yLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdGVzdC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy91dGlsLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvQ2FudmFzMmQudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvcGFnZS5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1haW5cIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWF0aC1mcmFjdGFsLXBhc2NhbC10cmlhbmdsZS1fLXRyaWFuZ2xlLW1vZHVsZV9tYWluX2tzaWtYMFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY2FudmFzMmRcIjpcInNyYy1jb21wb25lbnRzLUNhbnZhczJkLUNhbnZhczJkLW1vZHVsZV9jYW52YXMyZF9rbXlKcDdcIn07IiwiaW1wb3J0IHsgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCB7IG1ha2VDb2xvcnMgfSBmcm9tIFwiLi91dGlsXCJcbmltcG9ydCB7IFJvd0dlbmVyYXRvciB9IGZyb20gXCIuL3Jvdy1nZW5lcmF0b3JcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhc1RyaWFuZ2xlU2xvdyhzaXplOiBudW1iZXIsIG1vZHVsbzogbnVtYmVyKSB7XG4gICAgY29uc3QgY29sb3JzID0gbWFrZUNvbG9ycyhtb2R1bG8sIDUwKVxuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoc2l6ZSwgc2l6ZSlcbiAgICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUm93R2VuZXJhdG9yKClcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICBjb25zdCBsaW5lID0gZ2VuZXJhdG9yLm5leHQoKVxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gcm93OyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lW2NvbF0gJSBtb2R1bG9cbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW3ZhbHVlXVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY29sLCByb3csIDEsIDEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbnZhc1xufVxuIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCJcblxuZXhwb3J0IGNsYXNzIFJvd0dlbmVyYXRvciB7XG4gICAgcHJpdmF0ZSBjdXJyZW50OiBudW1iZXJbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbW9kdWxvID0gMjU2KSB7fVxuXG4gICAgbmV4dCgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpc1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IFsxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Q3VycmVudDogbnVtYmVyW10gPSByYW5nZSh0aGlzLmN1cnJlbnQubGVuZ3RoICsgMSkubWFwKFxuICAgICAgICAgICAgICAgIChpbmRleCkgPT4gKChjdXJyZW50W2luZGV4IC0gMV0gPz8gMCkgKyAoY3VycmVudFtpbmRleF0gPz8gMCkpICUgdGhpcy5tb2R1bG8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdDdXJyZW50XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50LnNsaWNlKClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3Q2FudmFzMmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhbnZhczJkXCJcbmltcG9ydCB7IG1ha2VDYW52YXNUcmlhbmdsZVNsb3cgfSBmcm9tIFwiLi9jYW52YXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gVGVzdCgpIHtcbiAgICByZXR1cm4gPFZpZXdDYW52YXMyZCBmYWN0b3J5PXsoKSA9PiBtYWtlQ2FudmFzVHJpYW5nbGVTbG93KDEwMjQsIDEzKX0gLz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RyaWFuZ2xlLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgbWFrZUNvbG9ycywgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCJcbmltcG9ydCB7IFJvd0dlbmVyYXRvciB9IGZyb20gXCIuL3Jvdy1nZW5lcmF0b3JcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFBhc2NhbFRyaWFuZ2xlUHJvcHMge1xuICAgIHJvd3M6IG51bWJlclxuICAgIG1vZHVsbzogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYXNjYWxUcmlhbmdsZSh7IHJvd3MsIG1vZHVsbyB9OiBQYXNjYWxUcmlhbmdsZVByb3BzKSB7XG4gICAgY29uc3QgY29sb3JzOiBzdHJpbmdbXSA9IHVzZUNvbG9ycyhtb2R1bG8pXG4gICAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IFJvd0dlbmVyYXRvcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIHtyYW5nZShyb3dzKS5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3d9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VuZXJhdG9yLm5leHQoKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvcnNbdmFsdWUgJSBtb2R1bG9dIH19IHRpdGxlPXtgJHt2YWx1ZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VDb2xvcnMobW9kdWxvOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWFrZUNvbG9ycyhtb2R1bG8pLCBbbW9kdWxvXSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShjb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KGNvdW50KS5rZXlzKCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3JzKGNvdW50OiBudW1iZXIsIGxpZ2h0bmVzcyA9IDMzKTogc3RyaW5nW10ge1xuICAgIHJldHVybiByYW5nZShjb3VudCArIDEpLm1hcChcbiAgICAgICAgKGluZGV4KSA9PiBgbGNoKCR7bGlnaHRuZXNzfSUgMTMwJSAke01hdGgucm91bmQoMjYwICsgKGluZGV4ICogMzYwKSAvIGNvdW50KSAlIDM2MH1kZWcpIC8qIGluZGV4ID0gJHtpbmRleH0gKi9gLFxuICAgIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vQ2FudmFzMmQubW9kdWxlLmNzc1wiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdDYW52YXMyZFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgZmFjdG9yeSgpOiBIVE1MQ2FudmFzRWxlbWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld0NhbnZhczJkKHByb3BzOiBWaWV3Q2FudmFzMmRQcm9wcykge1xuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU1vdW50ID0gKGltZzogSFRNTEltYWdlRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKCFpbWcpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHByb3BzLmZhY3RvcnkoKVxuICAgICAgICBpbWcud2lkdGggPSBjYW52YXMud2lkdGhcbiAgICAgICAgaW1nLmhlaWdodCA9IGNhbnZhcy5oZWlnaHRcbiAgICAgICAgaW1nLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLmNhbnZhczJkKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxpbWcgcmVmPXtoYW5kbGVNb3VudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vQ2FudmFzMmRcIlxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMscUZBQXFGLEU7Ozs7Ozs7O0FDRHJHO0FBQ0Esc0RBQWUsQ0FBQyxxRUFBcUUsRTs7Ozs7Ozs7Ozs7QUNEeEI7QUFFMUI7QUFDVztBQUV2QyxTQUFTLHNCQUFzQixDQUFDLElBQVksRUFBRSxNQUFjO0lBQy9ELE1BQU0sTUFBTSxHQUFHLHFDQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQUNyQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLGdFQUE0QixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDaEUsTUFBTSxT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