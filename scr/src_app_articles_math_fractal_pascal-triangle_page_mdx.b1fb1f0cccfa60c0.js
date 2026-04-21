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
    modulo;
    current = [];
    constructor(modulo = 256) {
        this.modulo = modulo;
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                        lineNumber: 6,
                        columnNumber: 5
                    }, this),
                    " has\nmany properties. One of them deals with fractals."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Look at this triangle below. We have set colors depending on the oddness of the\nvalue (orange for odd, blue for even)."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_triangle__rspack_import_1.PascalTriangle, {
                rows: 11,
                modulo: 2
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "You can see triangles appearing. But it would be better to have a view from far\nand that's we will do in this example."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_test__rspack_import_2.Test, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
                lineNumber: 17,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_3.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWF0aF9mcmFjdGFsX3Bhc2NhbC10cmlhbmdsZV9wYWdlX21keC5iMWZiMWYwY2NjZmE2MGMwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS5tb2R1bGUuY3NzPzQ0YWIiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9DYW52YXMyZC9DYW52YXMyZC5tb2R1bGUuY3NzPzQzMmYiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vY2FudmFzLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9fL3Jvdy1nZW5lcmF0b3IudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdGVzdC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdHJpYW5nbGUudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9fL3V0aWwudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvQ2FudmFzMmQudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL0NhbnZhczJkL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wibWFpblwiOlwic3JjLWFwcC1hcnRpY2xlcy1tYXRoLWZyYWN0YWwtcGFzY2FsLXRyaWFuZ2xlLV8tdHJpYW5nbGUtbW9kdWxlX21haW5fa3Npa1gwXCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBjc3MtZXh0cmFjdC1yc3BhY2stcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjYW52YXMyZFwiOlwic3JjLWNvbXBvbmVudHMtQ2FudmFzMmQtQ2FudmFzMmQtbW9kdWxlX2NhbnZhczJkX2tteUpwN1wifTsiLCJpbXBvcnQgeyB0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IHsgbWFrZUNvbG9ycyB9IGZyb20gXCIuL3V0aWxcIlxuaW1wb3J0IHsgUm93R2VuZXJhdG9yIH0gZnJvbSBcIi4vcm93LWdlbmVyYXRvclwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2FudmFzVHJpYW5nbGVTbG93KHNpemU6IG51bWJlciwgbW9kdWxvOiBudW1iZXIpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBtYWtlQ29sb3JzKG1vZHVsbywgNTApXG4gICAgY29uc3QgeyBjYW52YXMsIGN0eCB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRChzaXplLCBzaXplKVxuICAgIGNvbnN0IGdlbmVyYXRvciA9IG5ldyBSb3dHZW5lcmF0b3IoKVxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBnZW5lcmF0b3IubmV4dCgpXG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8PSByb3c7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxpbmVbY29sXSAlIG1vZHVsb1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbdmFsdWVdXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjb2wsIHJvdywgMSwgMSlcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FudmFzXG59XG4iLCJpbXBvcnQgeyByYW5nZSB9IGZyb20gXCIuL3V0aWxcIlxuXG5leHBvcnQgY2xhc3MgUm93R2VuZXJhdG9yIHtcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlcltdID0gW11cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBtb2R1bG8gPSAyNTYpIHt9XG5cbiAgICBuZXh0KCk6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzXG4gICAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gWzFdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDdXJyZW50OiBudW1iZXJbXSA9IHJhbmdlKHRoaXMuY3VycmVudC5sZW5ndGggKyAxKS5tYXAoXG4gICAgICAgICAgICAgICAgKGluZGV4KSA9PiAoKGN1cnJlbnRbaW5kZXggLSAxXSA/PyAwKSArIChjdXJyZW50W2luZGV4XSA/PyAwKSkgJSB0aGlzLm1vZHVsbyxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IG5ld0N1cnJlbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQuc2xpY2UoKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZpZXdDYW52YXMyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FudmFzMmRcIlxuaW1wb3J0IHsgbWFrZUNhbnZhc1RyaWFuZ2xlU2xvdyB9IGZyb20gXCIuL2NhbnZhc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0KCkge1xuICAgIHJldHVybiA8Vmlld0NhbnZhczJkIGZhY3Rvcnk9eygpID0+IG1ha2VDYW52YXNUcmlhbmdsZVNsb3coMTAyNCwgMTMpfSAvPlxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdHJpYW5nbGUubW9kdWxlLmNzc1wiXG5pbXBvcnQgeyBtYWtlQ29sb3JzLCByYW5nZSB9IGZyb20gXCIuL3V0aWxcIlxuaW1wb3J0IHsgUm93R2VuZXJhdG9yIH0gZnJvbSBcIi4vcm93LWdlbmVyYXRvclwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzY2FsVHJpYW5nbGVQcm9wcyB7XG4gICAgcm93czogbnVtYmVyXG4gICAgbW9kdWxvOiBudW1iZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBhc2NhbFRyaWFuZ2xlKHsgcm93cywgbW9kdWxvIH06IFBhc2NhbFRyaWFuZ2xlUHJvcHMpIHtcbiAgICBjb25zdCBjb2xvcnM6IHN0cmluZ1tdID0gdXNlQ29sb3JzKG1vZHVsbylcbiAgICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUm93R2VuZXJhdG9yKClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAge3JhbmdlKHJvd3MpLm1hcCgocm93KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd30+XG4gICAgICAgICAgICAgICAgICAgIHtnZW5lcmF0b3IubmV4dCgpLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IGJhY2tncm91bmQ6IGNvbG9yc1t2YWx1ZSAlIG1vZHVsb10gfX0gdGl0bGU9e2Ake3ZhbHVlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIHVzZUNvbG9ycyhtb2R1bG86IG51bWJlcik6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYWtlQ29sb3JzKG1vZHVsbyksIFttb2R1bG9dKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKGNvdW50OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoY291bnQpLmtleXMoKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb2xvcnMoY291bnQ6IG51bWJlciwgbGlnaHRuZXNzID0gMzMpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHJhbmdlKGNvdW50ICsgMSkubWFwKFxuICAgICAgICAoaW5kZXgpID0+IGBsY2goJHtsaWdodG5lc3N9JSAxMzAlICR7TWF0aC5yb3VuZCgyNjAgKyAoaW5kZXggKiAzNjApIC8gY291bnQpICUgMzYwfWRlZykgLyogaW5kZXggPSAke2luZGV4fSAqL2AsXG4gICAgKVxufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaW1wb3J0IHsgVGhlbWUsIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcblxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi9DYW52YXMyZC5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IHR5cGUgVmlld0NhbnZhczJkUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcbiAgICBmYWN0b3J5KCk6IEhUTUxDYW52YXNFbGVtZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3Q2FudmFzMmQocHJvcHM6IFZpZXdDYW52YXMyZFByb3BzKSB7XG4gICAgY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTW91bnQgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgICBpZiAoIWltZykgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gcHJvcHMuZmFjdG9yeSgpXG4gICAgICAgIGltZy53aWR0aCA9IGNhbnZhcy53aWR0aFxuICAgICAgICBpbWcuaGVpZ2h0ID0gY2FudmFzLmhlaWdodFxuICAgICAgICBpbWcuc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXskLmpvaW4ocHJvcHMuY2xhc3NOYW1lLCBTdHlsZXMuY2FudmFzMmQpfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPGltZyByZWY9e2hhbmRsZU1vdW50fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9DYW52YXMyZFwiXG4iLCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0Esc0RBQWUsQ0FBQyxxRkFBcUYsRTs7Ozs7Ozs7QUNEckc7QUFDQSxzREFBZSxDQUFDLHFFQUFxRSxFOzs7Ozs7Ozs7OztBQ0R4QjtBQUUxQjtBQUNXO0FBRXZDLFNBQVMsc0JBQXNCLENBQUMsSUFBWSxFQUFFLE1BQWM7SUFDL0QsTUFBTSxNQUFNLEdBQUcscUNBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0lBQ3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsZ0VBQTRCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNo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