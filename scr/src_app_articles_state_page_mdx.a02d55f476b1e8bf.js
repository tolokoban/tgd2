"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_state_page_mdx"], {
95278(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_1 = __webpack_require__(28453);
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
        code: "code",
        h1: "h1",
        li: "li",
        p: "p",
        strong: "strong",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "States"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The class ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdPainterState.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                            lineNumber: 3,
                            columnNumber: 12
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 3,
                        columnNumber: 11
                    }, this),
                    " help you\nmanage four WebGL concepts. It's a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Group"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 4,
                        columnNumber: 36
                    }, this),
                    " painter. The context for the 4\nconcepts will be restored once all the children have been painted."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/state/blend",
                                children: "Blend"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                                lineNumber: 7,
                                columnNumber: 3
                            }, this),
                            ": how you mix the color of your painting with\nwhat is already on screen."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/state/cull",
                                children: "Cull"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                                lineNumber: 9,
                                columnNumber: 3
                            }, this),
                            ": prevent the painting of triangles facing\nfront or back."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/state/depth",
                                children: "Depth"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                                lineNumber: 11,
                                columnNumber: 3
                            }, this),
                            ": precent fragments to be painted if farther\n(or nearer) that existing ones."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/state/stencil",
                                children: "Stencil"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            ": all sort of masking operations."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/state/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfc3RhdGVfcGFnZV9tZHguYTAyZDU1ZjQ3NmIxZThiZi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9zdGF0ZS9wYWdlLm1keCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFFOzs7Ozs7Ozs7b0JBRUY7b0JBQUE7OztzQ0FBVzs7Ozs7Ozs7Ozs7b0JBQXNEO29CQUFBO2tDQUM1Qjs7Ozs7O29CQUFPO2lCQUFBOzs7Ozs7Ozs7Ozs7OzswQ0FHekM7Ozs7Ozs0QkFBOEI7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUU5Qjs7Ozs7OzRCQUE0Qjt5QkFBQTs7Ozs7Ozs7Ozs7MENBRTVCOzs7Ozs7NEJBQThCO3lCQUFBOzs7Ozs7Ozs7OzswQ0FFOUI7Ozs7Ozs0QkFBa0M7eUJBQUEifQ==