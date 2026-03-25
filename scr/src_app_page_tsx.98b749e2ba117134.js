"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_page_tsx"], {
87687(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"article":"src-components-Article-Article-module_article_hDgXcT"});

},
78582(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _components_Article__rspack_import_1 = __webpack_require__(74647);
/* import */ var _content_mdx__rspack_import_2 = __webpack_require__(13086);



function Page() {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_components_Article__rspack_import_1["default"], { children: (0,react_jsx_runtime__rspack_import_0.jsx)(_content_mdx__rspack_import_2["default"], {}) }));
}


},
83355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Article)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_ui__rspack_import_1 = __webpack_require__(62430);
/* import */ var _Article_module_css__rspack_import_2 = __webpack_require__(87687);



const $ = _tolokoban_ui__rspack_import_1.Theme.classNames;
function Article({ className, children }) {
    return ((0,react_jsx_runtime__rspack_import_0.jsx)(_tolokoban_ui__rspack_import_1.ViewPanel, { className: $.join(className, _Article_module_css__rspack_import_2["default"].article), display: "grid", gridTemplateColumns: "1fr min(48vw, 400px) min(48vw, 400px) 1fr", gap: "0", children: children }));
}


},
74647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport safe */ _Article__rspack_import_0["default"])
});
/* import */ var _Article__rspack_import_0 = __webpack_require__(83355);



},
13086(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        hr: "hr",
        li: "li",
        p: "p",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "ToloGameDev Library for WebGL2"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Check out the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/",
                        children: "API documentation"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 3,
                        columnNumber: 15
                    }, this),
                    ", or try the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/quick-start",
                        children: "tutorial"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 3,
                        columnNumber: 54
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "For those who prefer to learn from examples, you will find a lot here."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/context",
                                children: "Context"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 9,
                                columnNumber: 3
                            }, this),
                            ": the main class of TGD."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 9,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/camera",
                                children: "Camera"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 10,
                                columnNumber: 3
                            }, this),
                            ": everything is show through a Camera."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/painter",
                                children: "Painters"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 11,
                                columnNumber: 3
                            }, this),
                            ": demos of most of the painters."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 11,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/animation",
                                children: "Animations"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 12,
                                columnNumber: 3
                            }, this),
                            ": a bunch of tools to deal with animations."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 12,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/texture",
                                children: "Textures"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 13,
                                columnNumber: 3
                            }, this),
                            ": how to play with textures."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 13,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/state",
                                children: "States"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 14,
                                columnNumber: 3
                            }, this),
                            ": states are helpers for depth, blend, cull and stencil."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 14,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/mesh",
                                children: "Mesh"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 15,
                                columnNumber: 3
                            }, this),
                            ": how to create a mesh."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 15,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/time",
                                children: "Time"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 16,
                                columnNumber: 3
                            }, this),
                            ": how to deal with virtual times."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/utils",
                                children: "Utils"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 17,
                                columnNumber: 3
                            }, this),
                            ": ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "tgd*()"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 17,
                                columnNumber: 30
                            }, this),
                            " functions with examples."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/articles/gltf",
                                children: "glTF/glB"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 18,
                                columnNumber: 3
                            }, this),
                            ": how to parse glTF/glB data."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 18,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/tricks",
                                children: "Tricks"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                                lineNumber: 19,
                                columnNumber: 3
                            }, this),
                            ": optimization tricks as the ones you can see in video games."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 19,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Useful links about WebGL2:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 23,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "https://docs.gl/el3/gl_PointCoord",
                            children: "GLSL ES 3.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                            lineNumber: 25,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 25,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "https://www.youtube.com/@osakaandrew/videos",
                            children: "Andrew Adamson YouTube"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                            lineNumber: 26,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 26,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "https://github.com/scriptfoundry/WebGL2-Videos-Materials",
                            children: "Andrew Adamson Github"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                            lineNumber: 27,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 27,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "https://iquilezles.org/articles/",
                            children: "Inigo Quilez"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                            lineNumber: 28,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 28,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                            href: "https://www.khronos.org/files/webgl20-reference-guide.pdf",
                            children: "WebGL2 Quick Reference Guide"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                            lineNumber: 29,
                            columnNumber: 3
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                        lineNumber: 29,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
                lineNumber: 25,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/content.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfcGFnZV90c3guOThiNzQ5ZTJiYTExNzEzNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlLm1vZHVsZS5jc3M/Y2YxMSIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvcGFnZS50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvY29tcG9uZW50cy9BcnRpY2xlL0FydGljbGUudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS9pbmRleC50cyIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvY29udGVudC5tZHgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IGNzcy1leHRyYWN0LXJzcGFjay1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImFydGljbGVcIjpcInNyYy1jb21wb25lbnRzLUFydGljbGUtQXJ0aWNsZS1tb2R1bGVfYXJ0aWNsZV9oRGdYY1RcIn07IiwiaW1wb3J0IEFydGljbGUgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRpY2xlXCJcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbnRlbnQubWR4XCJcblxuaW1wb3J0IFN0eWxlIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFydGljbGU+XG4gICAgICAgICAgICA8Q29udGVudCAvPlxuICAgICAgICA8L0FydGljbGU+XG4gICAgKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBUaGVtZSwgVmlld1BhbmVsIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIlxuXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vQXJ0aWNsZS5tb2R1bGUuY3NzXCJcblxuY29uc3QgJCA9IFRoZW1lLmNsYXNzTmFtZXNcblxuZXhwb3J0IGludGVyZmFjZSBBcnRpY2xlUHJvcHMge1xuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJ0aWNsZSh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfTogQXJ0aWNsZVByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdQYW5lbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXskLmpvaW4oY2xhc3NOYW1lLCBTdHlsZS5hcnRpY2xlKX1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcbiAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCIxZnIgbWluKDQ4dncsIDQwMHB4KSBtaW4oNDh2dywgNDAwcHgpIDFmclwiXG4gICAgICAgICAgICBnYXA9XCIwXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVmlld1BhbmVsPlxuICAgIClcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9BcnRpY2xlXCJcbiIsIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxzREFBZSxDQUFDLGlFQUFpRSxFOzs7Ozs7Ozs7Ozs7QUNEdkM7QUFDUDtBQUlwQixTQUFTLElBQUk7SUFDeEIsT0FBTyxDQUNILDJDQUFDLCtDQUFPLGNBQ0osMkNBQUMsd0NBQU8sS0FBRyxHQUNMLENBQ2I7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVitDO0FBRVI7QUFFeEMsTUFBTSxDQUFDLEdBQUcsK0NBQWdCO0FBT1gsU0FBUyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFnQjtJQUNqRSxPQUFPLENBQ0gsMkNBQUMsd0NBQVMsSUFDTixTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsdURBQWEsQ0FBQyxFQUMzQyxPQUFPLEVBQUMsTUFBTSxFQUNkLG1CQUFtQixFQUFDLDJDQUEyQyxFQUMvRCxHQUFHLEVBQUMsR0FBRyxZQUNOLFFBQVEsR0FDRCxDQUNmO0FBQ0wsQ0FBQzs7Ozs7Ozs7OztBQ3RCa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNBakM7Ozs7Ozs7OztvQkFFRjtvQkFBQTs7a0NBQWU7Ozs7OztvQkFBeUI7b0JBQUE7O2tDQUFjOzs7Ozs7b0JBQXdCO2lCQUFBOzs7Ozs7Ozs7Ozs7OzswQkFJOUU7Ozs7Ozs7Ozs7Ozs7OzBDQUVHOzs7Ozs7NEJBQTRCO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDNUI7Ozs7Ozs0QkFBMEI7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUMxQjs7Ozs7OzRCQUE2Qjt5QkFBQTs7Ozs7Ozs7Ozs7MENBQzdCOzs7Ozs7NEJBQWlDO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDakM7Ozs7Ozs0QkFBNkI7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUM3Qjs7Ozs7OzRCQUF5Qjt5QkFBQTs7Ozs7Ozs7Ozs7MENBQ3pCOzs7Ozs7NEJBQXNCO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDdEI7Ozs7Ozs0QkFBc0I7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUN0Qjs7Ozs7OzRCQUF3Qjs0QkFBQTswQ0FBRTs7Ozs7OzRCQUFRO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDbEM7Ozs7Ozs0QkFBMEI7eUJBQUE7Ozs7Ozs7Ozs7OzBDQUMxQjs7Ozs7OzRCQUFpQjt5QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlwQjs7Ozs7Ozs7Ozs7OztzQ0FFRzs7Ozs7Ozs7Ozs7Ozs7O3NDQUNBOzs7Ozs7Ozs7Ozs7Ozs7c0NBQ0E7Ozs7Ozs7Ozs7Ozs7OztzQ0FDQTs7Ozs7Ozs7Ozs7Ozs7O3NDQUNBIn0=