"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tools_page_mdx"], {
77056(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Tools"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                lineNumber: 1,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/tools/gltf",
                                children: "GLTF"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                                lineNumber: 3,
                                columnNumber: 3
                            }, this),
                            ": Load and inspect GLTF files"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                        lineNumber: 3,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/tools/filter",
                                children: "Filter"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                                lineNumber: 4,
                                columnNumber: 3
                            }, this),
                            ": Create/edit fragment shaders"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                        lineNumber: 4,
                        columnNumber: 1
                    }, this),
                    "\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.li, {
                        children: [
                            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                                href: "#/tools/palette",
                                children: "Palette"
                            }, undefined, false, {
                                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                                lineNumber: 5,
                                columnNumber: 3
                            }, this),
                            ": Function that returns a color from a float between 0 and 1"
                        ]
                    }, undefined, true, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                        lineNumber: 5,
                        columnNumber: 1
                    }, this),
                    "\n"
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_1.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tools/page.mdx"
    }, this) : _createMdxContent(props);
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdG9vbHNfcGFnZV9tZHguMjVmZmQ4Y2VhMzQ0NGFkYi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90b29scy9wYWdlLm1keCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFFOzs7Ozs7Ozs7Ozs7OzswQ0FFQzs7Ozs7OzRCQUFtQjt5QkFBQTs7Ozs7Ozs7Ozs7MENBQ25COzs7Ozs7NEJBQXVCO3lCQUFBOzs7Ozs7Ozs7OzswQ0FDdkI7Ozs7Ozs0QkFBeUI7eUJBQUEifQ==