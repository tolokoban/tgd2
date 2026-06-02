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
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/test.tsx",
        lineNumber: 5,
        columnNumber: 9
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, _this);
                })
            }, row, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, _this);
        })
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/math/fractal/pascal-triangle/_/triangle.tsx",
        lineNumber: 16,
        columnNumber: 3
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
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _Canvas2d_module_css__rspack_import_2 = __webpack_require__(33793);
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



var $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function ViewCanvas2d(props) {
    var style = _object_spread({}, (0,_tolokoban_ui__rspack_import_1.styleCommon)(props));
    var handleMount = function handleMount(img) {
        if (!img) return;
        var canvas = props.factory();
        img.width = canvas.width;
        img.height = canvas.height;
        img.src = canvas.toDataURL();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        className: $.join(props.className, _Canvas2d_module_css__rspack_import_2["default"].canvas2d),
        style: style,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("img", {
            ref: handleMount
        }, void 0, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/Canvas2d/Canvas2d.tsx",
            lineNumber: 27,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/components/Canvas2d/Canvas2d.tsx",
        lineNumber: 26,
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWF0aF9mcmFjdGFsX3Bhc2NhbC10cmlhbmdsZV9wYWdlX21keC4xY2UzMTViMzM3ODg2OTUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvYXBwL2FydGljbGVzL21hdGgvZnJhY3RhbC9wYXNjYWwtdHJpYW5nbGUvXy90cmlhbmdsZS5tb2R1bGUuY3NzPzQ0YWIiLCJ3ZWJwYWNrOi8vQHRvbG9rb2Jhbi90Z2QvLi9zcmMvY29tcG9uZW50cy9DYW52YXMyZC9DYW52YXMyZC5tb2R1bGUuY3NzPzQzMmYiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vY2FudmFzLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9fL3Jvdy1nZW5lcmF0b3IudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdGVzdC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tYXRoL2ZyYWN0YWwvcGFzY2FsLXRyaWFuZ2xlL18vdHJpYW5nbGUudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9fL3V0aWwudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQ2FudmFzMmQvQ2FudmFzMmQudHN4IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9jb21wb25lbnRzL0NhbnZhczJkL2luZGV4LnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWF0aC9mcmFjdGFsL3Bhc2NhbC10cmlhbmdsZS9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcIm1haW5cIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWF0aC1mcmFjdGFsLXBhc2NhbC10cmlhbmdsZS1fLXRyaWFuZ2xlLW1vZHVsZV9tYWluX2tzaWtYMFwifTsiLCIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY2FudmFzMmRcIjpcInNyYy1jb21wb25lbnRzLUNhbnZhczJkLUNhbnZhczJkLW1vZHVsZV9jYW52YXMyZF9rbXlKcDdcIn07IiwiaW1wb3J0IHsgdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgeyBtYWtlQ29sb3JzIH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHsgUm93R2VuZXJhdG9yIH0gZnJvbSBcIi4vcm93LWdlbmVyYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNhbnZhc1RyaWFuZ2xlU2xvdyhzaXplOiBudW1iZXIsIG1vZHVsbzogbnVtYmVyKSB7XG5cdGNvbnN0IGNvbG9ycyA9IG1ha2VDb2xvcnMobW9kdWxvLCA1MCk7XG5cdGNvbnN0IHsgY2FudmFzLCBjdHggfSA9IHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQoc2l6ZSwgc2l6ZSk7XG5cdGNvbnN0IGdlbmVyYXRvciA9IG5ldyBSb3dHZW5lcmF0b3IoKTtcblx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcblx0XHRjb25zdCBsaW5lID0gZ2VuZXJhdG9yLm5leHQoKTtcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPD0gcm93OyBjb2wrKykge1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBsaW5lW2NvbF0gJSBtb2R1bG87XG5cdFx0XHRjb25zdCBjb2xvciA9IGNvbG9yc1t2YWx1ZV07XG5cdFx0XHRjdHguZmlsbFN0eWxlID0gY29sb3I7XG5cdFx0XHRjdHguZmlsbFJlY3QoY29sLCByb3csIDEsIDEpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2FudmFzO1xufVxuIiwiaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb3dHZW5lcmF0b3Ige1xuXHRwcml2YXRlIGN1cnJlbnQ6IG51bWJlcltdID0gW107XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG1vZHVsbyA9IDI1Nikge31cblxuXHRuZXh0KCk6IG51bWJlcltdIHtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXM7XG5cdFx0aWYgKGN1cnJlbnQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSBbMV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IG5ld0N1cnJlbnQ6IG51bWJlcltdID0gcmFuZ2UodGhpcy5jdXJyZW50Lmxlbmd0aCArIDEpLm1hcChcblx0XHRcdFx0KGluZGV4KSA9PlxuXHRcdFx0XHRcdCgoY3VycmVudFtpbmRleCAtIDFdID8/IDApICsgKGN1cnJlbnRbaW5kZXhdID8/IDApKSAlIHRoaXMubW9kdWxvLFxuXHRcdFx0KTtcblx0XHRcdHRoaXMuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudC5zbGljZSgpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBWaWV3Q2FudmFzMmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhbnZhczJkXCI7XG5pbXBvcnQgeyBtYWtlQ2FudmFzVHJpYW5nbGVTbG93IH0gZnJvbSBcIi4vY2FudmFzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXN0KCkge1xuXHRyZXR1cm4gPFZpZXdDYW52YXMyZCBmYWN0b3J5PXsoKSA9PiBtYWtlQ2FudmFzVHJpYW5nbGVTbG93KDEwMjQsIDEzKX0gLz47XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdHJpYW5nbGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgbWFrZUNvbG9ycywgcmFuZ2UgfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgeyBSb3dHZW5lcmF0b3IgfSBmcm9tIFwiLi9yb3ctZ2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFzY2FsVHJpYW5nbGVQcm9wcyB7XG5cdHJvd3M6IG51bWJlcjtcblx0bW9kdWxvOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYXNjYWxUcmlhbmdsZSh7IHJvd3MsIG1vZHVsbyB9OiBQYXNjYWxUcmlhbmdsZVByb3BzKSB7XG5cdGNvbnN0IGNvbG9yczogc3RyaW5nW10gPSB1c2VDb2xvcnMobW9kdWxvKTtcblx0Y29uc3QgZ2VuZXJhdG9yID0gbmV3IFJvd0dlbmVyYXRvcigpO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG5cdFx0XHR7cmFuZ2Uocm93cykubWFwKChyb3cpID0+IChcblx0XHRcdFx0PGRpdiBrZXk9e3Jvd30+XG5cdFx0XHRcdFx0e2dlbmVyYXRvci5uZXh0KCkubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgYmFja2dyb3VuZDogY29sb3JzW3ZhbHVlICUgbW9kdWxvXSB9fVxuXHRcdFx0XHRcdFx0XHR0aXRsZT17YCR7dmFsdWV9YH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbG9ycyhtb2R1bG86IG51bWJlcik6IHN0cmluZ1tdIHtcblx0cmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWFrZUNvbG9ycyhtb2R1bG8pLCBbbW9kdWxvXSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmFuZ2UoY291bnQ6IG51bWJlcik6IG51bWJlcltdIHtcblx0cmV0dXJuIEFycmF5LmZyb20oQXJyYXkoY291bnQpLmtleXMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3JzKGNvdW50OiBudW1iZXIsIGxpZ2h0bmVzcyA9IDMzKTogc3RyaW5nW10ge1xuXHRyZXR1cm4gcmFuZ2UoY291bnQgKyAxKS5tYXAoXG5cdFx0KGluZGV4KSA9PlxuXHRcdFx0YGxjaCgke2xpZ2h0bmVzc30lIDEzMCUgJHtNYXRoLnJvdW5kKDI2MCArIChpbmRleCAqIDM2MCkgLyBjb3VudCkgJSAzNjB9ZGVnKSAvKiBpbmRleCA9ICR7aW5kZXh9ICovYCxcblx0KTtcbn1cbiIsImltcG9ydCB0eXBlICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFRoZW1lLCB0eXBlIENvbW1vblByb3BzLCBzdHlsZUNvbW1vbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5cbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4vQ2FudmFzMmQubW9kdWxlLmNzc1wiO1xuXG5jb25zdCAkID0gVGhlbWUuY2xhc3NOYW1lcztcblxuZXhwb3J0IHR5cGUgVmlld0NhbnZhczJkUHJvcHMgPSBDb21tb25Qcm9wcyAmIHtcblx0ZmFjdG9yeSgpOiBIVE1MQ2FudmFzRWxlbWVudDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3Q2FudmFzMmQocHJvcHM6IFZpZXdDYW52YXMyZFByb3BzKSB7XG5cdGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXHRcdC4uLnN0eWxlQ29tbW9uKHByb3BzKSxcblx0fTtcblx0Y29uc3QgaGFuZGxlTW91bnQgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgbnVsbCkgPT4ge1xuXHRcdGlmICghaW1nKSByZXR1cm47XG5cblx0XHRjb25zdCBjYW52YXMgPSBwcm9wcy5mYWN0b3J5KCk7XG5cdFx0aW1nLndpZHRoID0gY2FudmFzLndpZHRoO1xuXHRcdGltZy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXHRcdGltZy5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XG5cdH07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9eyQuam9pbihwcm9wcy5jbGFzc05hbWUsIFN0eWxlcy5jYW52YXMyZCl9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHQ8aW1nIHJlZj17aGFuZGxlTW91bnR9IC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9DYW52YXMyZFwiO1xuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwibWFrZUNvbG9ycyIsIlJvd0dlbmVyYXRvciIsIm1ha2VDYW52YXNUcmlhbmdsZVNsb3ciLCJzaXplIiwibW9kdWxvIiwiY29sb3JzIiwiX3RnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQiLCJjYW52YXMiLCJjdHgiLCJnZW5lcmF0b3IiLCJyb3ciLCJsaW5lIiwiY29sIiwidmFsdWUiLCJjb2xvciIsInJhbmdlIiwibmV4dCIsImN1cnJlbnQiLCJuZXdDdXJyZW50IiwiaW5kZXgiLCJfY3VycmVudF8iLCJfY3VycmVudF9pbmRleCIsIlZpZXdDYW52YXMyZCIsIlRlc3QiLCJmYWN0b3J5IiwiUmVhY3QiLCJzdHlsZXMiLCJQYXNjYWxUcmlhbmdsZSIsInBhcmFtIiwicm93cyIsInVzZUNvbG9ycyIsImNvdW50IiwiQXJyYXkiLCJsaWdodG5lc3MiLCJNYXRoIiwiVGhlbWUiLCJzdHlsZUNvbW1vbiIsIlN0eWxlcyIsIiQiLCJwcm9wcyIsInN0eWxlIiwiaGFuZGxlTW91bnQiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMscUZBQXFGLEU7Ozs7Ozs7O0FDRHJHO0FBQ0Esc0RBQWUsQ0FBQyxxRUFBcUUsRTs7Ozs7Ozs7Ozs7QUNEdkI7QUFFMUI7QUFDVztBQUV4QyxTQUFTRyx1QkFBdUJDLElBQVksRUFBRUMsTUFBYztJQUNsRSxJQUFNQyxT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