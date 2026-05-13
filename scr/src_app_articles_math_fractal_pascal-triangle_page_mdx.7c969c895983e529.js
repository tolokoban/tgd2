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
17015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeCanvasTriangleSlow: () => (makeCanvasTriangleSlow)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _util__rspack_import_1 = __webpack_require__(79255);
/* import */ var _row_generator__rspack_import_2 = __webpack_require__(23663);



function makeCanvasTriangleSlow(size, modulo) {
    var colors = (0,_util__rspack_import_1.makeColors)(modulo, 50);
    var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreateWithContext2D)(size, size), canvas = _tgdCanvasCreateWithContext2D.canvas, ctx = _tgdCanvasCreateWithContext2D.ctx;
    var generator = new _row_generator__rspack_import_2.RowGenerator();
    for(var row = 0; row < size; row++){
        var line = generator.next();
        for(var col = 0; col <= row; col++){
            var value = line[col] % modulo;
            var color = colors[value];
            ctx.fillStyle = color;
            ctx.fillRect(col, row, 1, 1);
        }
    }
    return canvas;
}


},
23663(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RowGenerator: () => (RowGenerator)
});
/* import */ var _util__rspack_import_0 = __webpack_require__(79255);
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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

var RowGenerator = /*#__PURE__*/ function() {
    "use strict";
    function RowGenerator() {
        var modulo = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 256;
        _class_call_check(this, RowGenerator);
        _define_property(this, "modulo", void 0);
        _define_property(this, "current", void 0);
        this.modulo = modulo;
        this.current = [];
    }
    _create_class(RowGenerator, [
        {
            key: "next",
            value: function next() {
                var _this = this;
                var current = this.current;
                if (current.length === 0) {
                    this.current = [
                        1
                    ];
                } else {
                    var newCurrent = (0,_util__rspack_import_0.range)(this.current.length + 1).map(function(index) {
                        var _current_, _current_index;
                        return (((_current_ = current[index - 1]) !== null && _current_ !== void 0 ? _current_ : 0) + ((_current_index = current[index]) !== null && _current_index !== void 0 ? _current_index : 0)) % _this.modulo;
                    });
                    this.current = newCurrent;
                }
                return this.current.slice();
            }
        }
    ]);
    return RowGenerator;
}();


},
69777(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Test: () => (Test)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _components_Canvas2d__rspack_import_1 = __webpack_require__(83074);
/* import */ var _canvas__rspack_import_2 = __webpack_require__(17015);



function Test() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_Canvas2d__rspack_import_1.ViewCanvas2d, {
        factory: function factory() {
            return (0,_canvas__rspack_import_2.makeCanvasTriangleSlow)(1024, 13);
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/test.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}


},
84665(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PascalTriangle: () => (PascalTriangle)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _triangle_module_css__rspack_import_2 = __webpack_require__(55632);
/* import */ var _util__rspack_import_3 = __webpack_require__(79255);
/* import */ var _row_generator__rspack_import_4 = __webpack_require__(23663);





function PascalTriangle(param) {
    var _this = this;
    var rows = param.rows, modulo = param.modulo;
    var colors = useColors(modulo);
    var generator = new _row_generator__rspack_import_4.RowGenerator();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: _triangle_module_css__rspack_import_2["default"].main,
        children: (0,_util__rspack_import_3.range)(rows).map(function(row) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: generator.next().map(function(value, index) {
                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        style: {
                            background: colors[value % modulo]
                        },
                        title: "".concat(value),
                        children: value
                    }, index, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
                        lineNumber: 20,
                        columnNumber: 25
                    }, _this);
                })
            }, row, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
                lineNumber: 18,
                columnNumber: 17
            }, _this);
        })
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
function useColors(modulo) {
    return react__rspack_import_1_default().useMemo(function() {
        return (0,_util__rspack_import_3.makeColors)(modulo);
    }, [
        modulo
    ]);
}


},
79255(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeColors: () => (makeColors),
  range: () => (range)
});
function range(count) {
    return Array.from(Array(count).keys());
}
function makeColors(count) {
    var lightness = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 33;
    return range(count + 1).map(function(index) {
        return "lch(".concat(lightness, "% 130% ").concat(Math.round(260 + index * 360 / count) % 360, "deg) /* index = ").concat(index, " */");
    });
}


},
2178(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewCanvas2d: () => (ViewCanvas2d)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _Canvas2d_module_css__rspack_import_3 = __webpack_require__(33793);
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




var $ = _tolokoban_ui__rspack_import_2.Theme.classNames;
function ViewCanvas2d(props) {
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_2.styleCommon)(props));
    var handleMount = function handleMount(img) {
        if (!img) return;
        var canvas = props.factory();
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Canvas2d_module_css__rspack_import_3["default"].canvas2d),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("img", {
            ref: handleMount
        }, void 0, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/Canvas2d/Canvas2d.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/components/Canvas2d/Canvas2d.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}


},
83074(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ViewCanvas2d: () => (/* reexport safe */ _Canvas2d__rspack_import_0.ViewCanvas2d)
});
/* import */ var _Canvas2d__rspack_import_0 = __webpack_require__(2178);



},
95787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(28453);
/* import */ var _triangle__rspack_import_1 = __webpack_require__(84665);
/* import */ var _test__rspack_import_2 = __webpack_require__(69777);
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
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MDXProvider: () => (MDXProvider),
  useMDXComponents: () => (useMDXComponents)
});
/* import */ var react__rspack_import_0 = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWF0aF9mcmFjdGFsX3Bhc2NhbC10cmlhbmdsZV9wYWdlX21keC43Yzk2OWM4OTU5ODNlNTI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS5tb2R1bGUuY3NzPzQ0YWIiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9DYW52YXMyZC9DYW52YXMyZC5tb2R1bGUuY3NzPzQzMmYiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy9jYW52YXMudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy9yb3ctZ2VuZXJhdG9yLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdGVzdC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy91dGlsLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvQ2FudmFzMmQudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvaW5kZXgudHMiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1haW5cIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWF0aC1mcmFjdGFsLXBhc2NhbC10cmlhbmdsZS1fLXRyaWFuZ2xlLW1vZHVsZV9tYWluX2tzaWtYMFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY2FudmFzMmRcIjpcInNyYy1jb21wb25lbnRzLUNhbnZhczJkLUNhbnZhczJkLW1vZHVsZV9jYW52YXMyZF9rbXlKcDdcIn07IiwiaW1wb3J0IHsgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCB7IG1ha2VDb2xvcnMgfSBmcm9tIFwiLi91dGlsXCJcbmltcG9ydCB7IFJvd0dlbmVyYXRvciB9IGZyb20gXCIuL3Jvdy1nZW5lcmF0b3JcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhc1RyaWFuZ2xlU2xvdyhzaXplOiBudW1iZXIsIG1vZHVsbzogbnVtYmVyKSB7XG4gICAgY29uc3QgY29sb3JzID0gbWFrZUNvbG9ycyhtb2R1bG8sIDUwKVxuICAgIGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoc2l6ZSwgc2l6ZSlcbiAgICBjb25zdCBnZW5lcmF0b3IgPSBuZXcgUm93R2VuZXJhdG9yKClcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgICAgICBjb25zdCBsaW5lID0gZ2VuZXJhdG9yLm5leHQoKVxuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gcm93OyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsaW5lW2NvbF0gJSBtb2R1bG9cbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW3ZhbHVlXVxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY29sLCByb3csIDEsIDEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbnZhc1xufVxuIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCJcblxuZXhwb3J0IGNsYXNzIFJvd0dlbmVyYXRvciB7XG4gICAgcHJpdmF0ZSBjdXJyZW50OiBudW1iZXJbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbW9kdWxvID0gMjU2KSB7fVxuXG4gICAgbmV4dCgpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudCB9ID0gdGhpc1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IFsxXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3Q3VycmVudDogbnVtYmVyW10gPSByYW5nZSh0aGlzLmN1cnJlbnQubGVuZ3RoICsgMSkubWFwKFxuICAgICAgICAgICAgICAgIChpbmRleCkgPT4gKChjdXJyZW50W2luZGV4IC0gMV0gPz8gMCkgKyAoY3VycmVudFtpbmRleF0gPz8gMCkpICUgdGhpcy5tb2R1bG8sXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuZXdDdXJyZW50XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50LnNsaWNlKClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaWV3Q2FudmFzMmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhbnZhczJkXCJcbmltcG9ydCB7IG1ha2VDYW52YXNUcmlhbmdsZVNsb3cgfSBmcm9tIFwiLi9jYW52YXNcIlxuXG5leHBvcnQgZnVuY3Rpb24gVGVzdCgpIHtcbiAgICByZXR1cm4gPFZpZXdDYW52YXMyZCBmYWN0b3J5PXsoKSA9PiBtYWtlQ2FudmFzVHJpYW5nbGVTbG93KDEwMjQsIDEzKX0gLz5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RyaWFuZ2xlLm1vZHVsZS5jc3NcIlxuaW1wb3J0IHsgbWFrZUNvbG9ycywgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCJcbmltcG9ydCB7IFJvd0dlbmVyYXRvciB9IGZyb20gXCIuL3Jvdy1nZW5lcmF0b3JcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFBhc2NhbFRyaWFuZ2xlUHJvcHMge1xuICAgIHJvd3M6IG51bWJlclxuICAgIG1vZHVsbzogbnVtYmVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYXNjYWxUcmlhbmdsZSh7IHJvd3MsIG1vZHVsbyB9OiBQYXNjYWxUcmlhbmdsZVByb3BzKSB7XG4gICAgY29uc3QgY29sb3JzOiBzdHJpbmdbXSA9IHVzZUNvbG9ycyhtb2R1bG8pXG4gICAgY29uc3QgZ2VuZXJhdG9yID0gbmV3IFJvd0dlbmVyYXRvcigpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIHtyYW5nZShyb3dzKS5tYXAoKHJvdykgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3d9PlxuICAgICAgICAgICAgICAgICAgICB7Z2VuZXJhdG9yLm5leHQoKS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjb2xvcnNbdmFsdWUgJSBtb2R1bG9dIH19IHRpdGxlPXtgJHt2YWx1ZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiB1c2VDb2xvcnMobW9kdWxvOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWFrZUNvbG9ycyhtb2R1bG8pLCBbbW9kdWxvXSlcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByYW5nZShjb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KGNvdW50KS5rZXlzKCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3JzKGNvdW50OiBudW1iZXIsIGxpZ2h0bmVzcyA9IDMzKTogc3RyaW5nW10ge1xuICAgIHJldHVybiByYW5nZShjb3VudCArIDEpLm1hcChcbiAgICAgICAgKGluZGV4KSA9PiBgbGNoKCR7bGlnaHRuZXNzfSUgMTMwJSAke01hdGgucm91bmQoMjYwICsgKGluZGV4ICogMzYwKSAvIGNvdW50KSAlIDM2MH1kZWcpIC8qIGluZGV4ID0gJHtpbmRleH0gKi9gLFxuICAgIClcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCB7IFRoZW1lLCBDb21tb25Qcm9wcywgc3R5bGVDb21tb24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vQ2FudmFzMmQubW9kdWxlLmNzc1wiXG5cbmNvbnN0ICQgPSBUaGVtZS5jbGFzc05hbWVzXG5cbmV4cG9ydCB0eXBlIFZpZXdDYW52YXMyZFByb3BzID0gQ29tbW9uUHJvcHMgJiB7XG4gICAgZmFjdG9yeSgpOiBIVE1MQ2FudmFzRWxlbWVudFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlld0NhbnZhczJkKHByb3BzOiBWaWV3Q2FudmFzMmRQcm9wcykge1xuICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICAuLi5zdHlsZUNvbW1vbihwcm9wcyksXG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZU1vdW50ID0gKGltZzogSFRNTEltYWdlRWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKCFpbWcpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHByb3BzLmZhY3RvcnkoKVxuICAgICAgICBpbWcud2lkdGggPSBjYW52YXMud2lkdGhcbiAgICAgICAgaW1nLmhlaWdodCA9IGNhbnZhcy5oZWlnaHRcbiAgICAgICAgaW1nLnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JC5qb2luKHByb3BzLmNsYXNzTmFtZSwgU3R5bGVzLmNhbnZhczJkKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxpbWcgcmVmPXtoYW5kbGVNb3VudH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vQ2FudmFzMmRcIlxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwibWFrZUNvbG9ycyIsIlJvd0dlbmVyYXRvciIsIm1ha2VDYW52YXNUcmlhbmdsZVNsb3ciLCJzaXplIiwibW9kdWxvIiwiY29sb3JzIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjYW52YXMiLCJjdHgiLCJnZW5lcmF0b3IiLCJyb3ciLCJsaW5lIiwiY29sIiwidmFsdWUiLCJjb2xvciIsInJhbmdlIiwibmV4dCIsImN1cnJlbnQiLCJuZXdDdXJyZW50IiwiaW5kZXgiLCJfY3VycmVudF8iLCJfY3VycmVudF9pbmRleCIsIlZpZXdDYW52YXMyZCIsIlRlc3QiLCJmYWN0b3J5IiwiUmVhY3QiLCJzdHlsZXMiLCJQYXNjYWxUcmlhbmdsZSIsInBhcmFtIiwicm93cyIsInVzZUNvbG9ycyIsImNvdW50IiwiQXJyYXkiLCJsaWdodG5lc3MiLCJNYXRoIiwiVGhlbWUiLCJzdHlsZUNvbW1vbiIsIlN0eWxlcyIsIiQiLCJwcm9wcyIsInN0eWxlIiwiaGFuZGxlTW91bnQiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNB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