"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_framebuffer_page_mdx"], {
92724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        h1: "h1",
        h2: "h2",
        li: "li",
        ol: "ol",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterFramebuffer.html",
                    children: "TgdPainterFramebuffer"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                    lineNumber: 1,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Every painter in this Group will be renderer in a texture and not directly into\nthe screen. You can then use this texture for whatever you want."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/fixed-size/01",
                            children: "Framebuffer with fixed size"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 6,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example0/01",
                            children: "Using framebuffer as a filter"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 7,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/anti-alising",
                            children: "Anti-aliasing"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 8,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 8,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Advanced examples"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example1",
                            children: "Repainting on the same canvas"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 12,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example2",
                            children: "Fractal effect"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 13,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "#/articles/painter/framebuffer/example3",
                            children: "Water flood"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                            lineNumber: 14,
                            columnNumber: 4
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/framebuffer/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9mcmFtZWJ1ZmZlcl9wYWdlX21keC5jZWRiNzM0MDZjZmRiYThhLmpzIiwic291cmNlcyI6WyIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvZnJhbWVidWZmZXIvcGFnZS5tZHgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBQUc7Ozs7Ozs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7c0NBR0k7Ozs7Ozs7Ozs7Ozs7OztzQ0FDQTs7Ozs7Ozs7Ozs7Ozs7O3NDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFFRDs7Ozs7Ozs7Ozs7OztzQ0FFQzs7Ozs7Ozs7Ozs7Ozs7O3NDQUNBOzs7Ozs7Ozs7Ozs7Ozs7c0NBQ0EifQ==