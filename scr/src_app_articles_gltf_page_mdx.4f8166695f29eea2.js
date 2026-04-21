"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_gltf_page_mdx"], {
5386(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        h2: "h2",
        h3: "h3",
        p: "p",
        pre: "pre",
        span: "span"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Parsing GLB files"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "It is common to edit 3D objects in specialized softwares like\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://blender.org",
                        children: "Blender"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    ". And to get the most of it, the better is to\nexport your creating in a GLB file. This is the binary version of a\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.htm",
                        children: "GL Transfer Format"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Basic usage"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 8,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Here is how you can load such file in TGD:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 10,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " asset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 12,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Or you can use an ArrayBuffer like this:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 16,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " resp = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "fetch"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " data = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " resp.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "arrayBuffer"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "()\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " asset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdDataGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(data)\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 18,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "For a quick render of a node, you can use\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "/docs/classes/TgdPainterMeshGltf.html",
                        children: "TgdPainterMeshGltf"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                        lineNumber: 25,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 24,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " asset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " painter = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdPainterMeshGltf"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(context, {\n    asset,\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 27,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 27,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "This painter will display the primitive #0 of the mesh #0 of the GLB file."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 34,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Now, if you have a more complex mesh with parents/children relationships and\nmaybe several primitives per mesh, then you can use this function:"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 36,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " data = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " node = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdMakeMeshGlbPainter"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "({ context, data })\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 39,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 39,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Advanced usage"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 44,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Creating a Dataset"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 46,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " asset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgdLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " dataset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdDataset"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "({\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "POSITION"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"vec4\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "NORMAL"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"vec3\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ",\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "TEXCOORD_0"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"vec2\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ",\n})\nasset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setAttrib"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(dataset, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"POSITION\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ")\nasset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setAttrib"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(dataset, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"NORMAL\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ")\nasset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "setAttrib"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(dataset, ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"TEXCOORD_0\""
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ")\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " elements = asset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "getMeshPrimitiveIndices"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "()\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " vao = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdVertexArray"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(context.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "gl"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ", prg, [dataset], elements)\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 48,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 48,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h3, {
                children: "Extracting a texture"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 62,
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " asset = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "await"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "tgbLoadGlb"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(url)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " primitive = asset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "getMeshPrimitive"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(meshIndex, primitiveIndex)\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " material = asset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "getMaterial"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(primitive.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "material"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ")\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " pbr = material.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "pbrMetallicRoughness"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "\n",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "const"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        " texture = asset.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "createTexture2D"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "(context, pbr.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "baseColorTexture"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        "?.",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-property",
                            children: "index"
                        }, undefined, false, {
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
                        }, this),
                        ")\n"
                    ]
                }, undefined, true, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                    lineNumber: 64,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 64,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Just check if you the variables are all defined (we don't do this in the example\nto not clutter the code)."
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
                lineNumber: 72,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/gltf/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfZ2x0Zl9wYWdlX21keC40ZjgxNjY2OTVmMjllZWEyLmpzIiwic291cmNlcyI6WyIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9nbHRmL3BhZ2UubWR4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFFOzs7Ozs7Ozs7b0JBRUY7b0JBQUE7O2tDQUNDOzs7Ozs7b0JBQTZCO29CQUFBOztrQ0FFN0I7Ozs7OztvQkFBNkU7aUJBQUE7Ozs7Ozs7OzBCQUUzRTs7Ozs7Ozs7MEJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRQTtvQkFBQTs7a0NBQ0M7Ozs7OztvQkFBMEQ7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFTM0Q7Ozs7Ozs7OzBCQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRRzs7Ozs7Ozs7MEJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVVKIn0=