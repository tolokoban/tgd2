"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_quick-start_page_mdx"], {
80888(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    context.add(clear, mesh);
    context.paint();
}
function createContext(canvas) {
    if (!canvas)
        return;
    const context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    return () => context.delete();
}
/* export default */ function __rspack_default_export() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: createContext, width: 300, height: 300 });
}


},
83403(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
    });
    state.add(mesh);
    context.add(clear, state);
    context.paint();
}
function createContext(canvas) {
    if (!canvas)
        return;
    const context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    return () => context.delete();
}
/* export default */ function __rspack_default_export() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: createContext, width: 300, height: 300 });
}


},
28400(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _assets_mesh_suzanne_glb__rspack_import_2 = __webpack_require__(21278);



function init(context) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
    });
    context.add(clear, state);
    context.play();
    (0,_tolokoban_tgd__rspack_import_1.tgdLoadGlb)(_assets_mesh_suzanne_glb__rspack_import_2).then((asset) => {
        if (!asset)
            return;
        const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMeshGltf(context, {
            asset,
        });
        mesh.logic.add((time) => {
            mesh.transfo.setEulerRotation(100 * time, -37 * time, 0);
        });
        state.add(mesh);
    });
}
function createContext(canvas) {
    if (!canvas)
        return;
    const context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    return () => context.delete();
}
/* export default */ function __rspack_default_export() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: createContext, width: 300, height: 300 });
}


},
32699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* export default binding */ __rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(74848);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);


function init(context) {
    const clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [0.1, 0.2, 0.3, 1],
        depth: 1,
    });
    const mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context);
    mesh.logic.add((time) => {
        mesh.transfo.setEulerRotation(100 * time, -37 * time, 0);
    });
    const state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
    });
    state.add(mesh);
    context.add(clear, state);
    context.play();
}
function createContext(canvas) {
    if (!canvas)
        return;
    const context = new _tolokoban_tgd__rspack_import_1.TgdContext(canvas);
    init(context);
    return () => context.delete();
}
/* export default */ function __rspack_default_export() {
    return (0,react_jsx_runtime__rspack_import_0.jsx)("canvas", { ref: createContext, width: 300, height: 300 });
}


},
21278(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/suzanne.f1e9692cdd07ad81.glb";

},
63597(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_5 = __webpack_require__(28453);
/* import */ var _demo__rspack_import_1 = __webpack_require__(32699);
/* import */ var _demo_demo_1__rspack_import_2 = __webpack_require__(80888);
/* import */ var _demo_demo_2__rspack_import_3 = __webpack_require__(83403);
/* import */ var _demo_demo_glb__rspack_import_4 = __webpack_require__(28400);
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
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                                lineNumber: 8,
                                columnNumber: 49
                            }, this),
                            "."
                        ]
                    }, undefined, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 8,
                        columnNumber: 3
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Hello world!"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "In this tutorial, we want to animate a spinnig cube like this:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Let's install the library:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.pre, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                    className: "hljs language-sh",
                    children: "npm install --save @tolokoban/tgd\n"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 18,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 22,
                        columnNumber: 41
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// We will fill this function later..."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "canvas"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "HTMLCanvasElement"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                " | ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-literal",
                                    children: "null"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!canvas) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(canvas)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Return a cleanup function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: "() =>"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 24,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 42,
                        columnNumber: 31
                    }, this),
                    " constructor accepts a second argument of type ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/types/TgdContextOptions.html",
                        children: "TgdContextOptions"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 42,
                        columnNumber: 90
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 44,
                        columnNumber: 39
                    }, this),
                    " something."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 46,
                        columnNumber: 16
                    }, this),
                    ". They are classes starting with ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainter*"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 46,
                        columnNumber: 61
                    }, this),
                    ".\nThey will be executed for each frame of the animation, and in the order you add them to the context."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 49,
                            columnNumber: 35
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 49,
                        columnNumber: 34
                    }, this),
                    ".\nIt will clear the screen with a defined color (dark blue in oour example) and set the depth-buffer to 1,\nwhich is the far plane of the camera. The depth-buffer is needed if you deal with 3D objects."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Set all pixels a dark blue."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Z-buffer initialized to 1 for every pixel."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Paint on the canvas."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 53,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 69,
                        columnNumber: 19
                    }, this),
                    " with the canvas of you choice to see the result."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 69,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If you are using React, here is a way of binding the context to a component:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "MyComponentWithWebGL"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " <canvas ref={createContext} style={{ width: \"100%\", height: \"100%\" }}></canvas>\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 73,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 79,
                            columnNumber: 49
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 79,
                        columnNumber: 48
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContextMesh"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, mesh)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Paint on the canvas."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 81,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 81,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_1__rspack_import_2["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 96,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Oh! But what's this? By looking to a cube from its front side, one would expect to see a perfect square.\nBut we can see some borders now. Why is that?"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 101,
                        columnNumber: 18
                    }, this),
                    " (like WebGL) is not a 3D library. It's just a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.strong, {
                        children: "painting"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 101,
                        columnNumber: 72
                    }, this),
                    " library,\nand if you need something for the 3D, you have to say it explicitly."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 105,
                        columnNumber: 73
                    }, this),
                    ",\nbut we need now to tell WebGL to use it.\nThis is done with a multipurpose painter that acts as a group of painters: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdPainterState",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 107,
                            columnNumber: 77
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 107,
                        columnNumber: 76
                    }, this),
                    ".\nSo, instead of adding ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "mesh"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 108,
                        columnNumber: 23
                    }, this),
                    " to the context, you will add it to ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "state"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 108,
                        columnNumber: 65
                    }, this),
                    " which in turn will be added to the context:"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// This preset will only paint a pixel if its depth is less"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// than the last painted one (in the same position)."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Add the mesh to this state."
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "paint"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 110,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 110,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_2__rspack_import_3["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 129,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Much better!\nNow, we just need to animate the rotation of the cube."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 131,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "For now, we add a logic function that will be called before the mesh in painted:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n    mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 136,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 136,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "But wait! If you just test it now, the cube won't rotate."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 144,
                        columnNumber: 24
                    }, this),
                    " which will only paint the canvas once.\nTo paint for every frame, we need to do this instead: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "context.play()"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 145,
                        columnNumber: 55
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 144,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here is the full code:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " { ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", webglPresetDepth } ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "from"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"@tolokoban/tgd\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMesh"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n    mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "logic"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n        mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "play"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "canvas"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "HTMLCanvasElement"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                " | ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-literal",
                                    children: "null"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!canvas) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdContext"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(canvas)\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context)\n\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Return a cleanup function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-function",
                            children: "() =>"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "delete"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n}\n\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "export"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "default"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "function"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " <canvas ref={createContext} width={300} height={300}></canvas>\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 149,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 149,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Loading assets"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 186,
                        columnNumber: 46
                    }, this),
                    " files:"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 186,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_demo_demo_glb__rspack_import_4["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 190,
                            columnNumber: 38
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 190,
                        columnNumber: 37
                    }, this),
                    "\nintead of the more generic ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "TgdPainterMesh"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 191,
                        columnNumber: 28
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n    asset,\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 193,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                            lineNumber: 199,
                            columnNumber: 66
                        }, this)
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 199,
                        columnNumber: 65
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "SuzanneURL"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ").",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "then"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!asset) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 201,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 201,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "If the GLB file is big and/or your network connection is poor, you will see en empty background\nfor some time, then the mesh will appear and start rotating.\nTo reduce the file size of your GLB files, try to use Draco compression."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                        lineNumber: 211,
                        columnNumber: 25
                    }, this),
                    ":"
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "init"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-params",
                            children: [
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-attr",
                                    children: "context"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ": ",
                                (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                                    className: "hljs-title class_",
                                    children: "TgdContext"
                                }, undefined, false, {
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this)
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ") {\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " clear = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterClear"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "color"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": [",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.2"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0.3"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ", ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "],\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "1"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " state = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterState"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "depth"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ": webglPresetDepth.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "less"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ",\n    })\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(clear, state)\n    context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "play"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "()\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-comment",
                            children: "// Loading asset"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "SuzanneURL"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ").",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "then"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "if"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " (!asset) ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "return"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "\n\n        ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " mesh = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(context, {\n            asset,\n        })\n        mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "logic"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
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
                                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                                }, this),
                                ") =>"
                            ]
                        }, undefined, true, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " {\n            mesh.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "transfo"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ".",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setEulerRotation"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "100"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, -",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "37"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        " * time, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-number",
                            children: "0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        ")\n        })\n        state.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "add"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
                        }, this),
                        "(mesh)\n    })\n}\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                    lineNumber: 213,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
                lineNumber: 213,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_5.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/quick-start/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfcXVpY2stc3RhcnRfcGFnZV9tZHguYjAyZjI1MTg5MWUwNTFhNy5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvcXVpY2stc3RhcnQvX2RlbW8vZGVtby0xLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3F1aWNrLXN0YXJ0L19kZW1vL2RlbW8tMi50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9fZGVtby9kZW1vLWdsYi50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9fZGVtby9pbmRleC50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9xdWljay1zdGFydC9wYWdlLm1keCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZ2RDb250ZXh0LCBUZ2RQYWludGVyQ2xlYXIsIFRnZFBhaW50ZXJNZXNoIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIG1lc2gpXG4gICAgY29udGV4dC5wYWludCgpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoIWNhbnZhcykgcmV0dXJuXG5cbiAgICBjb25zdCBjb250ZXh0ID0gbmV3IFRnZENvbnRleHQoY2FudmFzKVxuICAgIGluaXQoY29udGV4dClcblxuICAgIC8vIFJldHVybiBhIGNsZWFudXAgZnVuY3Rpb25cbiAgICByZXR1cm4gKCkgPT4gY29udGV4dC5kZWxldGUoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDxjYW52YXMgcmVmPXtjcmVhdGVDb250ZXh0fSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cbn1cbiIsImltcG9ydCB7XG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlckxvZ2ljLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICBjb2xvcjogWzAuMSwgMC4yLCAwLjMsIDFdLFxuICAgICAgICBkZXB0aDogMSxcbiAgICB9KVxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dClcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgIH0pXG4gICAgc3RhdGUuYWRkKG1lc2gpXG4gICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgIGNvbnRleHQucGFpbnQoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKCFjYW52YXMpIHJldHVyblxuXG4gICAgY29uc3QgY29udGV4dCA9IG5ldyBUZ2RDb250ZXh0KGNhbnZhcylcbiAgICBpbml0KGNvbnRleHQpXG5cbiAgICAvLyBSZXR1cm4gYSBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgcmV0dXJuICgpID0+IGNvbnRleHQuZGVsZXRlKClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiA8Y2FudmFzIHJlZj17Y3JlYXRlQ29udGV4dH0gd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IC8+XG59XG4iLCJpbXBvcnQge1xuICAgIFRnZENvbnRleHQsXG4gICAgdGdkTG9hZEdsYixcbiAgICBUZ2RQYWludGVyQ2xlYXIsXG4gICAgVGdkUGFpbnRlck1lc2hHbHRmLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgU3V6YW5uZVVSTCBmcm9tIFwiQC9hc3NldHMvbWVzaC9zdXphbm5lLmdsYlwiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCkge1xuICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XG4gICAgICAgIGNvbG9yOiBbMC4xLCAwLjIsIDAuMywgMV0sXG4gICAgICAgIGRlcHRoOiAxLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICB9KVxuICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcbiAgICBjb250ZXh0LnBsYXkoKVxuICAgIC8vIExvYWRpbmcgYXNzZXRcbiAgICB0Z2RMb2FkR2xiKFN1emFubmVVUkwpLnRoZW4oKGFzc2V0KSA9PiB7XG4gICAgICAgIGlmICghYXNzZXQpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2hHbHRmKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGFzc2V0LFxuICAgICAgICB9KVxuICAgICAgICBtZXNoLmxvZ2ljLmFkZCgodGltZSkgPT4ge1xuICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMTAwICogdGltZSwgLTM3ICogdGltZSwgMClcbiAgICAgICAgfSlcbiAgICAgICAgc3RhdGUuYWRkKG1lc2gpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXG4gICAgaW5pdChjb250ZXh0KVxuXG4gICAgLy8gUmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LmRlbGV0ZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gPGNhbnZhcyByZWY9e2NyZWF0ZUNvbnRleHR9IHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxufVxuIiwiaW1wb3J0IHsgVGdkQ29udGV4dCwgVGdkUGFpbnRlckNsZWFyLCBUZ2RQYWludGVyTWVzaCwgVGdkUGFpbnRlclN0YXRlLCB3ZWJnbFByZXNldERlcHRoIH0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG4gICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgY29sb3I6IFswLjEsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgZGVwdGg6IDEsXG4gICAgfSlcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQpXG4gICAgbWVzaC5sb2dpYy5hZGQoKHRpbWUpID0+IHtcbiAgICAgICAgbWVzaC50cmFuc2ZvLnNldEV1bGVyUm90YXRpb24oMTAwICogdGltZSwgLTM3ICogdGltZSwgMClcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG4gICAgfSlcbiAgICBzdGF0ZS5hZGQobWVzaClcbiAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgY29udGV4dC5wbGF5KClcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkge1xuICAgIGlmICghY2FudmFzKSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRleHQgPSBuZXcgVGdkQ29udGV4dChjYW52YXMpXG4gICAgaW5pdChjb250ZXh0KVxuXG4gICAgLy8gUmV0dXJuIGEgY2xlYW51cCBmdW5jdGlvblxuICAgIHJldHVybiAoKSA9PiBjb250ZXh0LmRlbGV0ZSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gPGNhbnZhcyByZWY9e2NyZWF0ZUNvbnRleHR9IHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSAvPlxufVxuIiwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEU7QUFFNUUsU0FBUyxJQUFJLENBQUMsT0FBbUI7SUFDN0IsTUFBTSxLQUFLLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLE9BQU8sRUFBRTtRQUN2QyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDO0lBQ0YsTUFBTSxJQUFJLEdBQUcsSUFBSSw4Q0FBYyxDQUFDLE9BQU8sQ0FBQztJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7SUFDeEIsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUNuQixDQUFDO0FBRUQs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