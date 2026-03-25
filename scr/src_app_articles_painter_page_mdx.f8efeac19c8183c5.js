"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_page_mdx"], {
37028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
                children: "Painters"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Painter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 3,
                        columnNumber: 3
                    }, this),
                    " is a class that paints the WebGL canvas. Yon can\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/painter/custom",
                        children: "create your own"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    " by inheriting the abstract class\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainter"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    ", or use an existing one."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can chain several painters in a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterGroup"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 7,
                        columnNumber: 37
                    }, this),
                    ". They will be called in\nthe order they are inserted."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    " has an internal ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterGroup"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 10,
                        columnNumber: 30
                    }, this),
                    ". That's why, you can see in many\nexamples that we add painters directly to it."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/background",
                                children: "Background"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            ": fill the background with an\nimage."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/background-with-depth",
                                children: "BackgroundWithDepth"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": fill the\nbackground and the depth buffer."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/clear",
                                children: "Clear"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            ": fill all the pixels of the canvas with a\nunique color."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/filter",
                                children: "Filter"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 19,
                                columnNumber: 3
                            }, this),
                            ": transform an image on pixel base."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/fragment-shader",
                                children: "FragmentShader"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 20,
                                columnNumber: 3
                            }, this),
                            ":paint the whole screen with a Fragment Shader."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 20,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/framebuffer",
                                children: "Framebuffer"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 21,
                                columnNumber: 3
                            }, this),
                            ":paint in a texture instead of\ndirectly to the screen."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 21,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/gizmo",
                                children: "Gizmo"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 23,
                                columnNumber: 3
                            }, this),
                            ": see and control the space axes."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 23,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/lod",
                                children: "LOD"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 24,
                                columnNumber: 3
                            }, this),
                            ": paint a mesh with levels of details depending on the camera proximity."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/logic",
                                children: "Logic"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 25,
                                columnNumber: 3
                            }, this),
                            ": update the status of your scene at every\nframe."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 25,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/node",
                                children: "Node"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 27,
                                columnNumber: 3
                            }, this),
                            ": allow you to compose local transformations."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 27,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/overlay",
                                children: "Overlay"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 28,
                                columnNumber: 3
                            }, this),
                            ": a rectangular overlay with a texture."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/points-cloud",
                                children: "PointsCloud"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 29,
                                columnNumber: 3
                            }, this),
                            ": display a cloud of 3D points."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/program",
                                children: "Program"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 30,
                                columnNumber: 3
                            }, this),
                            ": create a painter from a custom program and data."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 30,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/segments",
                                children: "Segments"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 31,
                                columnNumber: 3
                            }, this),
                            ": lines with variable thickness."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 31,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/sprites",
                                children: "Sprites"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 32,
                                columnNumber: 3
                            }, this),
                            ": fast paint of many atlas sprites."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 32,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter/x-ray",
                                children: "XRay"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                                lineNumber: 33,
                                columnNumber: 3
                            }, this),
                            ": X-Ray view."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                        lineNumber: 33,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
                lineNumber: 13,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9wYWdlX21keC5mOGVmZWFjMTljODE4M2M1LmpzIiwic291cmNlcyI6WyIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvcGFnZS5tZHgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFBRTs7Ozs7Ozs7O29CQUVGO29CQUFBO2tDQUFJOzs7Ozs7b0JBQVM7b0JBQUE7O2tDQUNaOzs7Ozs7b0JBQTJDO29CQUFBO2tDQUM1Qzs7Ozs7O29CQUFZO2lCQUFBOzs7Ozs7Ozs7b0JBRVo7b0JBQUE7a0NBQW9DOzs7Ozs7b0JBQWlCO2lCQUFBOzs7Ozs7Ozs7O2tDQUdyRDs7Ozs7O29CQUFZO29CQUFBO2tDQUFpQjs7Ozs7O29CQUFpQjtpQkFBQTs7Ozs7Ozs7Ozs7Ozs7MENBRzNDOzs7Ozs7NEJBQTBDO3lCQUFBOzs7Ozs7Ozs7OzswQ0FFMUM7Ozs7Ozs0QkFBOEQ7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUU5RDs7Ozs7OzRCQUFnQzt5QkFBQTs7Ozs7Ozs7Ozs7MENBRWhDOzs7Ozs7NEJBQWtDO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDbEM7Ozs7Ozs0QkFBbUQ7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUNuRDs7Ozs7OzRCQUE0Qzt5QkFBQTs7Ozs7Ozs7Ozs7MENBRTVDOzs7Ozs7NEJBQWdDO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDaEM7Ozs7Ozs0QkFBNEI7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUM1Qjs7Ozs7OzRCQUFnQzt5QkFBQTs7Ozs7Ozs7Ozs7MENBRWhDOzs7Ozs7NEJBQThCO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDOUI7Ozs7Ozs0QkFBb0M7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUNwQzs7Ozs7OzRCQUE2Qzt5QkFBQTs7Ozs7Ozs7Ozs7MENBQzdDOzs7Ozs7NEJBQW9DO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDcEM7Ozs7Ozs0QkFBc0M7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUN0Qzs7Ozs7OzRCQUFvQzt5QkFBQTs7Ozs7Ozs7Ozs7MENBQ3BDOzs7Ozs7NEJBQStCO3lCQUFBIn0=