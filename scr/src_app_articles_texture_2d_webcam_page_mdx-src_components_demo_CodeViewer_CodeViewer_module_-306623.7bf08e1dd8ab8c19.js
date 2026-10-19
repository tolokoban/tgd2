"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_texture_2d_webcam_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_-306623"], {
21766(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _webcam_demo__rspack_import_4 = __webpack_require__(14612);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

/**
 * Warning! This code has been generated automatically.
 */ 



var FOCUS = {
    "Detail #1": "\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0.2, 0.1, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context);\n\trefTexture.current = color;\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tcontext.add(meshPainter, (time) => {\n\t\tmesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);\n\t});\n\tcontext.play();\n\treturn ({ camera }: { camera: number }) => {\n\t\tcolor.loadWebcam({\n\t\t\tfacingMode: camera === 0 ? \"user\" : \"environment\",\n\t\t});\n\t};"
};
var FULL = "import {\n\ttype TgdContext,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\tTgdTexture2D,\n\tTgdMaterialDiffuse,\n} from \"@tolokoban/tgd\";\nimport React from \"react\";\nimport View from \"@/components/demo/Tgd\";\n\nfunction init(context: TgdContext, refTexture: React.RefObject<TgdTexture2D | null>) {\n\tcontext.camera.fitSpaceAtTarget(1.5, 1.5);\n\tconst clear = new TgdPainterClear(context, {\n\t\tdepth: 1,\n\t\tcolor: [0.2, 0.1, 0, 1],\n\t});\n\tconst color = new TgdTexture2D(context);\n\trefTexture.current = color;\n\tconst mesh = new TgdPainterMesh(context, {\n\t\tmaterial: new TgdMaterialDiffuse({\n\t\t\tcolor,\n\t\t\tlockLightsToCamera: true,\n\t\t}),\n\t});\n\tconst meshPainter = new TgdPainterState(context, {\n\t\tdepth: \"less\",\n\t\tchildren: [clear, mesh],\n\t});\n\tcontext.add(meshPainter, (time) => {\n\t\tmesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);\n\t});\n\tcontext.play();\n\treturn ({ camera }: { camera: number }) => {\n\t\tcolor.loadWebcam({\n\t\t\tfacingMode: camera === 0 ? \"user\" : \"environment\",\n\t\t});\n\t};\n}\n\nexport default function Demo() {\n\tconst refTexture = React.useRef<TgdTexture2D | null>(null);\n\t// Release the webcam when we leave the page.\n\tReact.useEffect(() => () => refTexture.current?.delete(), []);\n\treturn (\n\t\t<View\n\t\t\tonReady={(context) => init(context, refTexture)}\n\t\t\tcontroller={{ inertiaOrbit: 1000 }}\n\t\t\tsettings={{\n\t\t\t\tcamera: {\n\t\t\t\t\tlabel: \"camera\",\n\t\t\t\t\tvalue: 0,\n\t\t\t\t\tstep: [\"Front\", \"Back\"],\n\t\t\t\t},\n\t\t\t}}\n\t\t/>\n\t);\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_webcam_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-right",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_2.ViewButton, {
                            variant: "elevated",
                            onClick: function onClick() {
                                return setFull(!full);
                            },
                            children: full ? "Show code details" : "Show full code"
                        }, void 0, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
14612(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var react__rspack_import_2 = __webpack_require__(96540);
/* import */ var react__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_2);
/* import */ var _components_demo_Tgd__rspack_import_3 = __webpack_require__(43475);




function init(context, refTexture) {
    // #begin
    context.camera.fitSpaceAtTarget(1.5, 1.5);
    var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        depth: 1,
        color: [
            0.2,
            0.1,
            0,
            1
        ]
    });
    var color = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    refTexture.current = color;
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            color: color,
            lockLightsToCamera: true
        })
    });
    var meshPainter = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "less",
        children: [
            clear,
            mesh
        ]
    });
    context.add(meshPainter, function(time) {
        mesh.transfo.setEulerRotation(time * 4.4885, time * 6.1403, 0);
    });
    context.play();
    return function(param) {
        var camera = param.camera;
        color.loadWebcam({
            facingMode: camera === 0 ? "user" : "environment"
        });
    };
// #end
}
function Demo() {
    var refTexture = react__rspack_import_2_default().useRef(null);
    // Release the webcam when we leave the page.
    react__rspack_import_2_default().useEffect(function() {
        return function() {
            var _refTexture_current;
            return (_refTexture_current = refTexture.current) === null || _refTexture_current === void 0 ? void 0 : _refTexture_current.delete();
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_3["default"], {
        onReady: function onReady(context) {
            return init(context, refTexture);
        },
        controller: {
            inertiaOrbit: 1000
        },
        settings: {
            camera: {
                label: "camera",
                value: 0,
                step: [
                    "Front",
                    "Back"
                ]
            }
        }
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/_/webcam.demo/webcam.demo.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, this);
}


},
18097(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _webcam_demo__rspack_import_1 = __webpack_require__(21766);
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
        pre: "pre",
        span: "span",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Texture2D from webcam"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_webcam_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The browser asks for the permission to use the camera. This only works on a\nsecure origin (HTTPS or ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "localhost"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 8,
                        columnNumber: 25
                    }, this),
                    ")."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 7,
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        " texture = ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-keyword",
                            children: "new"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        " ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title class_",
                            children: "TgdTexture2D"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        "(context).",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-title function_",
                            children: "loadWebcam"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        "({\n    ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-attr",
                            children: "facingMode"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        ": ",
                        (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.span, {
                            className: "hljs-string",
                            children: "\"environment\""
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
                        }, this),
                        ",\n})\n"
                    ]
                }, undefined, true, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                    lineNumber: 10,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "loadWebcam()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 16,
                        columnNumber: 1
                    }, this),
                    " accepts all the standard\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints",
                        children: "MediaTrackConstraints"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 17,
                        columnNumber: 1
                    }, this),
                    "\n(",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "facingMode"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 18,
                        columnNumber: 2
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "deviceId"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 18,
                        columnNumber: 16
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "width"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 18,
                        columnNumber: 28
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "height"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 18,
                        columnNumber: 37
                    }, this),
                    ", ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "frameRate"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 18,
                        columnNumber: 47
                    }, this),
                    ", ...), plus the\noptional ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "onLoad()"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 19,
                        columnNumber: 10
                    }, this),
                    " and ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "onError(error)"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 19,
                        columnNumber: 25
                    }, this),
                    " callbacks."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "facingMode: \"user\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                                lineNumber: 21,
                                columnNumber: 3
                            }, this),
                            " is the front camera, ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "\"environment\""
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                                lineNumber: 21,
                                columnNumber: 45
                            }, this),
                            " the back camera."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 21,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "Calling ",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "loadWebcam()"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            " again releases the previous camera first."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 22,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "texture.delete()"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                                lineNumber: 23,
                                columnNumber: 3
                            }, this),
                            " turns the camera off."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 23,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            "The texture is updated on each frame, so the context must be playing (",
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                                children: "context.play()"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                                lineNumber: 24,
                                columnNumber: 73
                            }, this),
                            ")."
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                        lineNumber: 24,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 21,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 26,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "#/articles/texture",
                    children: "Back"
                }, undefined, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                    lineNumber: 28,
                    columnNumber: 1
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
                lineNumber: 28,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/texture/2d/webcam/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdGV4dHVyZV8yZF93ZWJjYW1fcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlXy0zMDY2MjMuN2JmMDhlMWRkOGFiOGMxOS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy90ZXh0dXJlLzJkL3dlYmNhbS9fL3dlYmNhbS5kZW1vL2luZGV4LnRzeCIsIi9ob21lL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvdGV4dHVyZS8yZC93ZWJjYW0vXy93ZWJjYW0uZGVtby93ZWJjYW0uZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3RleHR1cmUvMmQvd2ViY2FtL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi93ZWJjYW0uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1wiRGV0YWlsICMxXCI6XCJcXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuNSwgMS41KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLFxcblxcdH0pO1xcblxcdGNvbnN0IGNvbG9yID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KTtcXG5cXHRyZWZUZXh0dXJlLmN1cnJlbnQgPSBjb2xvcjtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0Y29sb3IsXFxuXFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdGNvbnN0IG1lc2hQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW2NsZWFyLCBtZXNoXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChtZXNoUGFpbnRlciwgKHRpbWUpID0+IHtcXG5cXHRcXHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNC40ODg1LCB0aW1lICogNi4xNDAzLCAwKTtcXG5cXHR9KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG5cXHRyZXR1cm4gKHsgY2FtZXJhIH06IHsgY2FtZXJhOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGNvbG9yLmxvYWRXZWJjYW0oe1xcblxcdFxcdFxcdGZhY2luZ01vZGU6IGNhbWVyYSA9PT0gMCA/IFxcXCJ1c2VyXFxcIiA6IFxcXCJlbnZpcm9ubWVudFxcXCIsXFxuXFx0XFx0fSk7XFxuXFx0fTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBUZ2RDb250ZXh0LFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0VGdkVGV4dHVyZTJELFxcblxcdFRnZE1hdGVyaWFsRGlmZnVzZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIjtcXG5pbXBvcnQgUmVhY3QgZnJvbSBcXFwicmVhY3RcXFwiO1xcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCByZWZUZXh0dXJlOiBSZWFjdC5SZWZPYmplY3Q8VGdkVGV4dHVyZTJEIHwgbnVsbD4pIHtcXG5cXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuNSwgMS41KTtcXG5cXHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcblxcdFxcdGRlcHRoOiAxLFxcblxcdFxcdGNvbG9yOiBbMC4yLCAwLjEsIDAsIDFdLFxcblxcdH0pO1xcblxcdGNvbnN0IGNvbG9yID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KTtcXG5cXHRyZWZUZXh0dXJlLmN1cnJlbnQgPSBjb2xvcjtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGNvbnRleHQsIHtcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XFxuXFx0XFx0XFx0Y29sb3IsXFxuXFx0XFx0XFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcblxcdFxcdH0pLFxcblxcdH0pO1xcblxcdGNvbnN0IG1lc2hQYWludGVyID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuXFx0XFx0ZGVwdGg6IFxcXCJsZXNzXFxcIixcXG5cXHRcXHRjaGlsZHJlbjogW2NsZWFyLCBtZXNoXSxcXG5cXHR9KTtcXG5cXHRjb250ZXh0LmFkZChtZXNoUGFpbnRlciwgKHRpbWUpID0+IHtcXG5cXHRcXHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNC40ODg1LCB0aW1lICogNi4xNDAzLCAwKTtcXG5cXHR9KTtcXG5cXHRjb250ZXh0LnBsYXkoKTtcXG5cXHRyZXR1cm4gKHsgY2FtZXJhIH06IHsgY2FtZXJhOiBudW1iZXIgfSkgPT4ge1xcblxcdFxcdGNvbG9yLmxvYWRXZWJjYW0oe1xcblxcdFxcdFxcdGZhY2luZ01vZGU6IGNhbWVyYSA9PT0gMCA/IFxcXCJ1c2VyXFxcIiA6IFxcXCJlbnZpcm9ubWVudFxcXCIsXFxuXFx0XFx0fSk7XFxuXFx0fTtcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG5cXHRjb25zdCByZWZUZXh0dXJlID0gUmVhY3QudXNlUmVmPFRnZFRleHR1cmUyRCB8IG51bGw+KG51bGwpO1xcblxcdC8vIFJlbGVhc2UgdGhlIHdlYmNhbSB3aGVuIHdlIGxlYXZlIHRoZSBwYWdlLlxcblxcdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiByZWZUZXh0dXJlLmN1cnJlbnQ/LmRlbGV0ZSgpLCBbXSk7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHQ8Vmlld1xcblxcdFxcdFxcdG9uUmVhZHk9eyhjb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlRleHR1cmUpfVxcblxcdFxcdFxcdGNvbnRyb2xsZXI9e3sgaW5lcnRpYU9yYml0OiAxMDAwIH19XFxuXFx0XFx0XFx0c2V0dGluZ3M9e3tcXG5cXHRcXHRcXHRcXHRjYW1lcmE6IHtcXG5cXHRcXHRcXHRcXHRcXHRsYWJlbDogXFxcImNhbWVyYVxcXCIsXFxuXFx0XFx0XFx0XFx0XFx0dmFsdWU6IDAsXFxuXFx0XFx0XFx0XFx0XFx0c3RlcDogW1xcXCJGcm9udFxcXCIsIFxcXCJCYWNrXFxcIl0sXFxuXFx0XFx0XFx0XFx0fSxcXG5cXHRcXHRcXHR9fVxcblxcdFxcdC8+XFxuXFx0KTtcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyTWVzaCxcblx0VGdkUGFpbnRlclN0YXRlLFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgcmVmVGV4dHVyZTogUmVhY3QuUmVmT2JqZWN0PFRnZFRleHR1cmUyRCB8IG51bGw+KSB7XG5cdC8vICNiZWdpblxuXHRjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEuNSwgMS41KTtcblx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRkZXB0aDogMSxcblx0XHRjb2xvcjogWzAuMiwgMC4xLCAwLCAxXSxcblx0fSk7XG5cdGNvbnN0IGNvbG9yID0gbmV3IFRnZFRleHR1cmUyRChjb250ZXh0KTtcblx0cmVmVGV4dHVyZS5jdXJyZW50ID0gY29sb3I7XG5cdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcblx0XHRcdGNvbG9yLFxuXHRcdFx0bG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuXHRcdH0pLFxuXHR9KTtcblx0Y29uc3QgbWVzaFBhaW50ZXIgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRkZXB0aDogXCJsZXNzXCIsXG5cdFx0Y2hpbGRyZW46IFtjbGVhciwgbWVzaF0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChtZXNoUGFpbnRlciwgKHRpbWUpID0+IHtcblx0XHRtZXNoLnRyYW5zZm8uc2V0RXVsZXJSb3RhdGlvbih0aW1lICogNC40ODg1LCB0aW1lICogNi4xNDAzLCAwKTtcblx0fSk7XG5cdGNvbnRleHQucGxheSgpO1xuXHRyZXR1cm4gKHsgY2FtZXJhIH06IHsgY2FtZXJhOiBudW1iZXIgfSkgPT4ge1xuXHRcdGNvbG9yLmxvYWRXZWJjYW0oe1xuXHRcdFx0ZmFjaW5nTW9kZTogY2FtZXJhID09PSAwID8gXCJ1c2VyXCIgOiBcImVudmlyb25tZW50XCIsXG5cdFx0fSk7XG5cdH07XG5cdC8vICNlbmRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0Y29uc3QgcmVmVGV4dHVyZSA9IFJlYWN0LnVzZVJlZjxUZ2RUZXh0dXJlMkQgfCBudWxsPihudWxsKTtcblx0Ly8gUmVsZWFzZSB0aGUgd2ViY2FtIHdoZW4gd2UgbGVhdmUgdGhlIHBhZ2UuXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiByZWZUZXh0dXJlLmN1cnJlbnQ/LmRlbGV0ZSgpLCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdG9uUmVhZHk9eyhjb250ZXh0KSA9PiBpbml0KGNvbnRleHQsIHJlZlRleHR1cmUpfVxuXHRcdFx0Y29udHJvbGxlcj17eyBpbmVydGlhT3JiaXQ6IDEwMDAgfX1cblx0XHRcdHNldHRpbmdzPXt7XG5cdFx0XHRcdGNhbWVyYToge1xuXHRcdFx0XHRcdGxhYmVsOiBcImNhbWVyYVwiLFxuXHRcdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0XHRcdHN0ZXA6IFtcIkZyb250XCIsIFwiQmFja1wiXSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJyZWZUZXh0dXJlIiwiY2xlYXIiLCJjb2xvciIsIm1lc2giLCJtZXNoUGFpbnRlciIsInRpbWUiLCJjYW1lcmEiLCJfcmVmVGV4dHVyZV9jdXJyZW50Iiwib25SZWFkeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNyQjtBQUVoQyxJQUFNSSxRQUFRO0lBQUMsYUFBWTtBQUErdkI7QUFDMXhCLElBQU1DLE9BQU87QUFFRSxTQUFTQztJQUNwQixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQU87OzBCQUNILGtEQUFDO2dCQUFJLFdBQVU7MEJBQVksZ0VBQUNKLHdDQUFJQTs7Ozs7Ozs7OzswQkFDaEMsa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ1gsa0RBQUM7a0NBQ0csZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDbERBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHdEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUc1RDs7Ozs7Ozs7Ozs7Ozs7O0FDakJ3QjtBQUNFO0FBQ2U7QUFFekMsU0FBU2EsS0FBS0MsT0FBbUIsRUFBRUMsVUFBZ0Q7SUFDbEYsU0FBUztJQUNURCxRQUFRLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLO0lBQ3JDLElB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