"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_quick-start_page_mdx"], {
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
58531(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    context.add(clear, mesh);
    context.paint();
}
function createContext(canvas) {
    if (!canvas) return;
    var context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    // Return a cleanup function
    return function() {
        return context.delete();
    };
}
/* export default */ function __rspack_default_export() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: createContext,
        width: 300,
        height: 300
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/_demo/demo-1.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, this);
}


},
52131(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    state.add(mesh);
    context.add(clear, state);
    context.paint();
}
function createContext(canvas) {
    if (!canvas) return;
    var context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    // Return a cleanup function
    return function() {
        return context.delete();
    };
}
/* export default */ function __rspack_default_export() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: createContext,
        width: 300,
        height: 300
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/_demo/demo-2.tsx",
        lineNumber: 35,
        columnNumber: 12
    }, this);
}


},
26683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_2 = __webpack_require__(21278);



function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    context.add(clear, state);
    context.play();
    // Loading asset
    (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(_assets_mesh_suzanne_glb__rspack_import_2).then(function(asset) {
        if (!asset) return;
        var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
            asset: asset
        });
        mesh.logic.add(function(time) {
            mesh.transfo.setEulerRotation(100 * time, -37 * time, 0);
        });
        state.add(mesh);
    });
}
function createContext(canvas) {
    if (!canvas) return;
    var context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    // Return a cleanup function
    return function() {
        return context.delete();
    };
}
/* export default */ function __rspack_default_export() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: createContext,
        width: 300,
        height: 300
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/_demo/demo-glb.tsx",
        lineNumber: 47,
        columnNumber: 12
    }, this);
}


},
17542(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.1,
            0.2,
            0.3,
            1
        ],
        depth: 1
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    mesh.logic.add(function(time) {
        mesh.transfo.setEulerRotation(100 * time, -37 * time, 0);
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less
    });
    state.add(mesh);
    context.add(clear, state);
    context.play();
}
function createContext(canvas) {
    if (!canvas) return;
    var context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    // Return a cleanup function
    return function() {
        return context.delete();
    };
}
/* export default */ function __rspack_default_export() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("canvas", {
        ref: createContext,
        width: 300,
        height: 300
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/_demo/index.tsx",
        lineNumber: 31,
        columnNumber: 12
    }, this);
}


},
63597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_5 = __webpack_require__(28453);
/* import */ var _demo__rspack_import_1 = __webpack_require__(17542);
/* import */ var _demo_demo_1__rspack_import_2 = __webpack_require__(58531);
/* import */ var _demo_demo_2__rspack_import_3 = __webpack_require__(52131);
/* import */ var _demo_demo_glb__rspack_import_4 = __webpack_require__(26683);
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
        blockquote: "blockquote",
        code: "code",
        h1: "h1",
        h2: "h2",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong"
    }, (0,_mdx_js_react__rspack_import_5.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Quick start"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 6,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.blockquote, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                        children: [
                            "Note: All the code that follows is written in ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "https://www.typescriptlang.org/",
                                children: "Typescript"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                                lineNumber: 8,
                                columnNumber: 49
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 8,
                        columnNumber: 3
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Hello world!"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this tutorial, we want to animate a spinnig cube like this:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's install the library:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-sh",
                    children: "npm install --save @tolokoban/tgd\n"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 18,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The first think you need is to create a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdContext.html",
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 22,
                        columnNumber: 41
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 22,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// We will fill this function later..."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "canvas"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "HTMLCanvasElement"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                " | ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-literal",
                                    children: "null"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!canvas) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(canvas)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Return a cleanup function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: "() =>"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 24,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 24,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "If you need more control, the ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdContext"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 42,
                        columnNumber: 31
                    }, this),
                    " constructor accepts a second argument of type ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/types/TgdContextOptions.html",
                        children: "TgdContextOptions"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 42,
                        columnNumber: 90
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 42,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "So, now that we have a context, let's ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "paint"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 44,
                        columnNumber: 39
                    }, this),
                    " something."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 44,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "TGD works with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "Painters"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 46,
                        columnNumber: 16
                    }, this),
                    ". They are classes starting with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainter*"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 46,
                        columnNumber: 61
                    }, this),
                    ".\nThey will be executed for each frame of the animation, and in the order you add them to the context."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 46,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "A simple one, but useful one, is ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterClear.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 49,
                            columnNumber: 35
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 49,
                        columnNumber: 34
                    }, this),
                    ".\nIt will clear the screen with a defined color (dark blue in oour example) and set the depth-buffer to 1,\nwhich is the far plane of the camera. The depth-buffer is needed if you deal with 3D objects."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 49,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Set all pixels a dark blue."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Z-buffer initialized to 1 for every pixel."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Paint on the canvas."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 53,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 53,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Now, you can call ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "createContext()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 69,
                        columnNumber: 19
                    }, this),
                    " with the canvas of you choice to see the result."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 69,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If you are using React, here is a way of binding the context to a component:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 71,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-tsx",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "export"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "MyComponentWithWebGL"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " <canvas ref={createContext} style={{ width: \"100%\", height: \"100%\" }}></canvas>\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 73,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 73,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Now, let's paint a cube. For this, we will use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterMesh.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 79,
                            columnNumber: 49
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 79,
                        columnNumber: 48
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 79,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContextMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, mesh)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Paint on the canvas."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 81,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 81,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_1__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 96,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Oh! But what's this? By looking to a cube from its front side, one would expect to see a perfect square.\nBut we can see some borders now. Why is that?"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 98,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The fact is that ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "TGD"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 101,
                        columnNumber: 18
                    }, this),
                    " (like WebGL) is not a 3D library. It's just a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "painting"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 101,
                        columnNumber: 72
                    }, this),
                    " library,\nand if you need something for the 3D, you have to say it explicitly."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 101,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The borders that we see here, are the side faces that are painted before the front one.\nIn 3D, the depth-buffer is what will fix this. We already reset it with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterClear"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 105,
                        columnNumber: 73
                    }, this),
                    ",\nbut we need now to tell WebGL to use it.\nThis is done with a multipurpose painter that acts as a group of painters: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterState",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 107,
                            columnNumber: 77
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 107,
                        columnNumber: 76
                    }, this),
                    ".\nSo, instead of adding ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "mesh"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 108,
                        columnNumber: 23
                    }, this),
                    " to the context, you will add it to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "state"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 108,
                        columnNumber: 65
                    }, this),
                    " which in turn will be added to the context:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 104,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// This preset will only paint a pixel if its depth is less"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// than the last painted one (in the same position)."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Add the mesh to this state."
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 110,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 110,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_2__rspack_import_3["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 129,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Much better!\nNow, we just need to animate the rotation of the cube."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 131,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "For now, we add a logic function that will be called before the mesh in painted:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 134,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        "mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "logic"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: [
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params",
                                    children: "time"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n    mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 136,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 136,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But wait! If you just test it now, the cube won't rotate."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 142,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "That's because we used ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "context.paint()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 144,
                        columnNumber: 24
                    }, this),
                    " which will only paint the canvas once.\nTo paint for every frame, we need to do this instead: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "context.play()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 145,
                        columnNumber: 55
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 144,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here is the full code:"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 147,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-tsx",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "import"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", webglPresetDepth } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "logic"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: [
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params",
                                    children: "time"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n        mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "play"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "canvas"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "HTMLCanvasElement"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                " | ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-literal",
                                    children: "null"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!canvas) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(canvas)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Return a cleanup function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: "() =>"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "export"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "default"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " <canvas ref={createContext} width={300} height={300}></canvas>\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 149,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 149,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Loading assets"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 184,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "We can use more complex 3D objects stored in ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://www.khronos.org/gltf/",
                        children: "GLB"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 186,
                        columnNumber: 46
                    }, this),
                    " files:"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 186,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_glb__rspack_import_4["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 188,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "To display a GLTF mesh, we will use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterMeshGltf.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 190,
                            columnNumber: 38
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 190,
                        columnNumber: 37
                    }, this),
                    "\nintead of the more generic ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterMesh"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 191,
                        columnNumber: 28
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 190,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n    asset,\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 193,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 193,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "And to load the asset asynchronously, TGD provides the function ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/functions/tgdLoadGlb.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 199,
                            columnNumber: 66
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 199,
                        columnNumber: 65
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 199,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "SuzanneURL"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ").",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "then"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: [
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params",
                                    children: "asset"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!asset) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 201,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 201,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If the GLB file is big and/or your network connection is poor, you will see en empty background\nfor some time, then the mesh will appear and start rotating.\nTo reduce the file size of your GLB files, try to use Draco compression."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 207,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Here is the ful code of ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "init()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 211,
                        columnNumber: 25
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 211,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-ts",
                    children: [
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "play"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Loading asset"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "SuzanneURL"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ").",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "then"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: [
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params",
                                    children: "asset"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!asset) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n            asset,\n        })\n        mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "logic"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: [
                                "(",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-params",
                                    children: "time"
                                }, undefined, false, {
                                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n            mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n        })\n        state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    })\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 213,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 213,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_5.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfcXVpY2stc3RhcnRfcGFnZV9tZHguNmY4ODcyN2ViYTc5YTA2NS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9fZGVtby9kZW1vLTEudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9fZGVtby9kZW1vLTIudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9fZGVtby9kZW1vLWdsYi50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3F1aWNrLXN0YXJ0L19kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvcXVpY2stc3RhcnQvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkUGFpbnRlckNsZWFyLCBUZ2RQYWludGVyTWVzaCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBtZXNoKVxuICAgIGNvbnRleHQucGFpbnQoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKCFjYW52YXMpIHJldHVyblxuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcylcbiAgICBpbml0KGNvbnRleHQpXG5cbiAgICAvLyBSZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgcmV0dXJuICgpID0+IGNvbnRleHQuZGVsZXRlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiA8Y2FudmFzIHJlZj17Y3JlYXRlQ29udGV4dH0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG59XG4iLCJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJMb2dpYyxcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICB9KVxuICAgIHN0YXRlLmFkZChtZXNoKVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBhaW50KClcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXG4gICAgaW5pdChjb250ZXh0KVxuXG4gICAgLy8gUmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LmRlbGV0ZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gPGNhbnZhcyByZWY9e2NyZWF0ZUNvbnRleHR9IHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxufVxuIiwiaW1wb3J0IHtcbiAgICBUZ2RDb250ZXh0LFxuICAgIHRnZExvYWRHbGIsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoR2x0ZixcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuaW1wb3J0IFN1emFubmVVUkwgZnJvbSBcIkAvYXNzZXRzL21lc2gvc3V6YW5uZS5nbGJcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgfSlcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wbGF5KClcbiAgICAvLyBMb2FkaW5nIGFzc2V0XG4gICAgdGdkTG9hZEdsYihTdXphbm5lVVJMKS50aGVuKChhc3NldCkgPT4ge1xuICAgICAgICBpZiAoIWFzc2V0KSByZXR1cm5cblxuICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoR2x0Zihjb250ZXh0LCB7XG4gICAgICAgICAgICBhc3NldCxcbiAgICAgICAgfSlcbiAgICAgICAgbWVzaC5sb2dpYy5hZGQoKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDEwMCAqIHRpbWUsIC0zNyAqIHRpbWUsIDApXG4gICAgICAgIH0pXG4gICAgICAgIHN0YXRlLmFkZChtZXNoKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoIWNhbnZhcykgcmV0dXJuXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxuICAgIGluaXQoY29udGV4dClcblxuICAgIC8vIFJldHVybiBhIGNsZWFudXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4gY29udGV4dC5kZWxldGUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxjYW52YXMgcmVmPXtjcmVhdGVDb250ZXh0fSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cbn1cbiIsImltcG9ydCB7IFRnZENvbnRleHQsIFRnZFBhaW50ZXJDbGVhciwgVGdkUGFpbnRlck1lc2gsIFRnZFBhaW50ZXJTdGF0ZSwgd2ViZ2xQcmVzZXREZXB0aCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0KVxuICAgIG1lc2gubG9naWMuYWRkKCh0aW1lKSA9PiB7XG4gICAgICAgIG1lc2gudHJhbnNmby5zZXRFdWxlclJvdGF0aW9uKDEwMCAqIHRpbWUsIC0zNyAqIHRpbWUsIDApXG4gICAgfSlcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgIH0pXG4gICAgc3RhdGUuYWRkKG1lc2gpXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGxheSgpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoIWNhbnZhcykgcmV0dXJuXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxuICAgIGluaXQoY29udGV4dClcblxuICAgIC8vIFJldHVybiBhIGNsZWFudXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4gY29udGV4dC5kZWxldGUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxjYW52YXMgcmVmPXtjcmVhdGVDb250ZXh0fSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiVGdkQ29udGV4dCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiaW5pdCIsImNvbnRleHQiLCJjbGVhciIsIm1lc2giLCJjcmVhdGVDb250ZXh0IiwiY2FudmFzIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsInN0YXRlIiwidGdkTG9hZEdsYiIsIlRnZFBhaW50ZXJNZXNoR2x0ZiIsIlN1emFubmVVUkwiLCJhc3NldCIsInRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRFO0FBRTVFLFNBQVNHLEtBQUtDLE9BQW1CO0lBQzdCLElBQU1DLFFBQVEsSUFBSUosK0NBQWVBLENBQUNHLFNBQVM7UUFDdkMsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7UUFDekIsT0FBTztJQUNYO0lBQ0EsSUFBTUUsT0FBTyxJQUFJSiw4Q0FBY0EsQ0FBQ0U7SUFDaENBLFFBQVEsR0FBRyxDQUFDQyxPQUFPQztJQUNuQkYsUUFBUSxLQUFLO0FBQ2pCO0FBRUEsU0FBU0csY0FBY0MsTUFBZ0M7SUFDbkQsSUFBSSxDQUFDQSxRQUFRO0lBRWIsSUFBTUosVUFBVSxJQUFJSiwwQ0FBVUEsQ0FBQ1E7SUFDL0JMLEtBQUtDO0lBRUwsNEJBQTRCO0lBQzVCLE9BQU87ZUFBTUEsUUFBUSxNQUFNOztBQUMvQjtBQUVBLHFCQUFlO0lBQ1gscUJBQU8sa0RBQUM7UUFBTyxLQUFLRztRQUFlLE9BQU87UUFBSyxRQUFROzs7Ozs7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ2pCdUI7QUFFdkIsU0FBU0osS0FBS0MsT0FBbUI7SUFDN0IsSUFBTUMsUUFBUSxJQUFJSiwrQ0FBZUEsQ0FBQ0csU0FBUztRQUN2QyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUN6QixPQUFPO0lBQ1g7SUFDQSxJQUFNRSxPQUFPLElBQUlKLDhDQUFjQSxDQUFDRTtJQUNoQyxJQUFNTyxRQUFRLElBQUlGLCtDQUFlQSxDQUFDTCxTQUFTO1FBQ3ZDLE9BQU9NLHFEQUFxQjtJQUNoQztJQUNBQyxNQUFNLEdBQUcsQ0FBQ0w7SUFDVkYsUUFBUSxHQUFHLENBQUNDLE9BQU9NO0lBQ25CUCxRQUFRLEtBQUs7QUFDakI7QUFFQSxTQUFTRyxjQUFjQyxNQUFnQztJQUNuRCxJQUFJLENBQUNBLFFBQVE7SUFFYixJQUFNSixVQUFVLElBQUlKLDBDQUFVQSxDQUFDUTtJQUMvQkwsS0FBS0M7SUFFTCw0QkFBNEI7SUFDNUIsT0FBTztlQUFNQSxRQUFRLE1BQU07O0FBQy9CO0FBRUEscUJBQWU7SUFDWCxxQkFBTyxrREFBQztRQUFPLEtBQUtHO1FBQWUsT0FBTztRQUFLLFFBQVE7Ozs7OztBQUMzRDs7Ozs7Ozs7Ozs7OztBQzVCdUI7QUFFMkI7QUFFbEQsU0FBU0osS0FBS0MsT0FBbUI7SUFDN0IsSUFBTUMsUUFBUSxJQUFJSiwrQ0FBZUEsQ0FBQ0csU0FBUztRQUN2QyxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUN6QixPQUFPO0lBQ1g7SUFDQSxJQUFNTyxRQUFRLElBQUlGLCtDQUFlQSxDQUFDTCxTQUFTO1FBQ3ZDLE9BQU9NLHFEQUFxQjtJQUNoQztJQUNBTixRQUFRLEdBQUcsQ0FBQ0MsT0FBT007SUFDbkJQLFFBQVEsSUFBSTtJQUNaLGdCQUFnQjtJQUNoQlEsOENBQVVBLENBQUNFLHlDQUFVQSxFQUFFLElBQUksQ0FBQyxTQUFDQztRQUN6QixJQUFJLENBQUNBLE9BQU87UUFFWixJQUFNVCxPQUFPLElBQUlPLGtEQUFrQkEsQ0FBQ1QsU0FBUztZQUN6Q1csT0FBQUE7UUFDSjtRQUNBVCxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBQ1U7WUFDWlYsS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTVUsTUFBTSxDQUFDLEtBQUtBLE1BQU07UUFDMUQ7UUFDQUwsTUFBTSxHQUFHLENBQUNMO0lBQ2Q7QUFDSjtBQUVBLFNBQVNDLGNBQWNDLE1BQWdDO0lBQ25ELElBQUksQ0FBQ0EsUUFBUTtJQUViLElBQU1KLFVBQVUsSUFBSUosMENBQVVBLENBQUNRO0lBQy9CTCxLQUFLQztJQUVMLDRCQUE0QjtJQUM1QixPQUFPO2VBQU1BLFFBQVEsTUFBTTs7QUFDL0I7QUFFQSxxQkFBZTtJQUNYLHFCQUFPLGtEQUFDO1FBQU8sS0FBS0c7UUFBZSxPQUFPO1FBQUssUUFBUTs7Ozs7O0FBQzNEOzs7Ozs7Ozs7Ozs7QUMvQytHO0FBRS9HLFNBQVNKLEtBQUtDLE9BQW1CO0lBQzdCLElBQU1DLFFBQVEsSUFBSUosK0NBQWVBLENBQUNHLFNBQVM7UUFDdkMsT0FBTztZQUFDO1lBQUs7WUFBSztZQUFLO1NBQUU7UUFDekIsT0FBTztJQUNYO0lBQ0EsSUFBTUUsT0FBTyxJQUFJSiw4Q0FBY0EsQ0FBQ0U7SUFDaENFLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFDVTtRQUNaVixLQUFLLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNVSxNQUFNLENBQUMsS0FBS0EsTUFBTTtJQUMxRDtJQUNBLElBQU1MLFFBQVEsSUFBSUYsK0NBQWVBLENBQUNMLFNBQVM7UUFDdkMsT0FBT00scURBQXFCO0lBQ2hDO0lBQ0FDLE1BQU0sR0FBRyxDQUFDTDtJQUNWRixRQUFRLEdBQUcsQ0FBQ0MsT0FBT007SUFDbkJQLFFBQVEsSUFBSTtBQUNoQjtBQUVBLFNBQVNHLGNBQWNDLE1BQWdDO0lBQ25ELElBQUksQ0FBQ0EsUUFBUTtJQUViLElBQU1KLFVBQVUsSUFBSUosMENBQVVBLENBQUNRO0lBQy9CTCxLQUFLQztJQUVMLDRCQUE0QjtJQUM1QixPQUFPO2VBQU1BLFFBQVEsTUFBTTs7QUFDL0I7QUFFQSxxQkFBZTtJQUNYLHFCQUFPLGtEQUFDO1FBQU8sS0FBS0c7UUFBZSxPQUFPO1FBQUssUUFBUTs7Ozs7O0FBQzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmlCO0FBQ0M7QUFDQTtBQUNFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUVsQjs7Ozs7Ozs7Ozs7OzRCQUVBOzRCQUFBOzswQ0FBK0M7Ozs7Ozs0QkFBNEM7eUJBQUE7Ozs7Ozs7Ozs7Ozs7OzswQkFFMUY7Ozs7Ozs7OzBCQUVIOzs7Ozs7Ozs7Ozs7OzswQkFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQU1BO29CQUFBOztrQ0FBeUM7Ozs7OztvQkFBeUM7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFvQmxGO29CQUFBO2tDQUE4Qjs7Ozs7O29CQUFZO29CQUFBOztrQ0FBZ0Q7Ozs7OztvQkFBcUQ7aUJBQUE7Ozs7Ozs7OztvQkFFL0k7b0JBQUE7a0NBQXdDOzs7Ozs7b0JBQU87aUJBQUE7Ozs7Ozs7OztvQkFFL0M7b0JBQUE7a0NBQWlCOzs7Ozs7b0JBQVU7b0JBQUE7a0NBQWlDOzs7Ozs7b0JBQWE7aUJBQUE7Ozs7Ozs7OztvQkFHekU7b0JBQUE7OztzQ0FBa0M7Ozs7Ozs7Ozs7O29CQUFxRDtpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBb0J2RjtvQkFBQTtrQ0FBa0I7Ozs7OztvQkFBaUI7aUJBQUE7Ozs7Ozs7OzBCQUVuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBUUE7b0JBQUE7OztzQ0FBZ0Q7Ozs7Ozs7Ozs7O29CQUFtRDtpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQW1Cbkc7Ozs7Ozs7OztvQkFHQTtvQkFBQTtrQ0FBbUI7Ozs7OztvQkFBSztvQkFBQTtrQ0FBaUQ7Ozs7OztvQkFBVTtpQkFBQTs7Ozs7Ozs7O29CQUduRjtvQkFBQTtrQ0FDd0U7Ozs7OztvQkFBaUI7b0JBQUE7OztzQ0FFYjs7Ozs7Ozs7Ozs7b0JBQWdEO29CQUFBO2tDQUN0Rzs7Ozs7O29CQUFNO29CQUFBO2tDQUFvQzs7Ozs7O29CQUFPO2lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkF1QnZFOzs7Ozs7OzswQkFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVFBOzs7Ozs7Ozs7b0JBRUE7b0JBQUE7a0NBQXVCOzs7Ozs7b0JBQWlCO29CQUFBO2tDQUNjOzs7Ozs7b0JBQWdCO2lCQUFBOzs7Ozs7OzswQkFFdEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBcUNHOzs7Ozs7Ozs7b0JBRUg7b0JBQUE7O2tDQUE4Qzs7Ozs7O29CQUFtQztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7O29CQUlqRjtvQkFBQTs7O3NDQUFxQzs7Ozs7Ozs7Ozs7b0JBQTJEO29CQUFBO2tDQUNyRTs7Ozs7O29CQUFnQjtpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRM0M7b0JBQUE7OztzQ0FBaUU7Ozs7Ozs7Ozs7O29CQUE2QztpQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVE5Rzs7Ozs7Ozs7O29CQUlBO29CQUFBO2tDQUF3Qjs7Ozs7O29CQUFRO2lCQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5oQztBQUNBLFlBQVksZUFBZTtBQUMzQixZQUFZLG9DQUFvQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlCQUF5QjtBQUNwQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0EsY0FBYyw4REFBOEQ7QUFDNUU7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBOztBQUV5Qjs7QUFFekIsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUEsbUJBQW1CLG9DQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBOEQ7QUFDekU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1AsNEJBQTRCLGlDQUFnQjs7QUFFNUM7QUFDQSxTQUFTLDhCQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxlQUFlO0FBQ2Y7QUFDTztBQUNQLGFBQWEseUJBQXlCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxTQUFTLG9DQUFtQjtBQUM1QjtBQUNBLEtBQUsscUJBQXFCO0FBQzFCO0FBQ0E7QUFDQSJ9