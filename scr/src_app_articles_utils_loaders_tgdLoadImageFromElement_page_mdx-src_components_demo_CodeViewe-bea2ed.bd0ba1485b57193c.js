"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_utils_loaders_tgdLoadImageFromElement_page_mdx-src_components_demo_CodeViewe-bea2ed"], {
98409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);



function init(context) {
    context.camera = new _tolokoban_tgd__rspack_import_1.TgdCameraPerspective({
        transfo: {
            distance: 1.2,
            position: [
                0,
                0,
                0
            ]
        },
        far: 100,
        near: 0.1,
        fovy: Math.PI / 4
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.lessOrEqual,
        children: [
            new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
                color: [
                    0.3,
                    0.2,
                    0.1,
                    1
                ],
                depth: 1
            }),
            new _tolokoban_tgd__rspack_import_1.TgdPainterLogic(function(time, delta) {
                mesh.transfo.orbitAroundX(delta * 0.573);
                mesh.transfo.orbitAroundY(delta * 0.741);
            })
        ]
    });
    context.add(state);
    var texture = new _tolokoban_tgd__rspack_import_1.TgdTexture2D(context);
    var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometryBox();
    var material = new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
        color: texture
    });
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
        geometry: geometry,
        material: material
    });
    state.add(mesh);
    context.play();
    // #begin Loading element into texture
    var loadImage = function loadImage1() {
        var elem = document.body.querySelector("details > div > pre");
        if (!elem || elem.scrollWidth < 1) {
            setTimeout(loadImage, 500);
            return;
        }
        console.log(elem.innerHTML);
        (0,_tolokoban_tgd__rspack_import_1.tgdLoadCanvasFromElement)(elem).then(function(img) {
            document.body.appendChild(img);
            texture.loadBitmap(img);
        });
    };
    loadImage();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/element.demo.tsx",
        lineNumber: 71,
        columnNumber: 9
    }, this);
}


},
5336(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _element_demo__rspack_import_4 = __webpack_require__(98409);
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
    "Loading element into texture": '    const loadImage = () => {\n        const elem = document.body.querySelector("details > div > pre")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()'
};
var FULL = 'import {\n    TgdCameraPerspective,\n    type TgdContext,\n    TgdGeometryBox,\n    tgdLoadCanvasFromElement,\n    TgdMaterialDiffuse,\n    TgdMaterialNormals,\n    TgdPainterClear,\n    TgdPainterLogic,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdTexture2D,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View from "@/components/demo/Tgd"\n\nfunction init(context: TgdContext) {\n    context.camera = new TgdCameraPerspective({\n        transfo: {\n            distance: 1.2,\n            position: [0, 0, 0],\n        },\n        far: 100,\n        near: 0.1,\n        fovy: Math.PI / 4,\n    })\n    const state = new TgdPainterState(context, {\n        depth: webglPresetDepth.lessOrEqual,\n        children: [\n            new TgdPainterClear(context, {\n                color: [0.3, 0.2, 0.1, 1],\n                depth: 1,\n            }),\n            new TgdPainterLogic((time, delta) => {\n                mesh.transfo.orbitAroundX(delta * 0.573)\n                mesh.transfo.orbitAroundY(delta * 0.741)\n            }),\n        ],\n    })\n    context.add(state)\n    const texture = new TgdTexture2D(context)\n    const geometry = new TgdGeometryBox()\n    const material = new TgdMaterialDiffuse({\n        color: texture,\n    })\n    const mesh = new TgdPainterMesh(context, {\n        geometry,\n        material,\n    })\n    state.add(mesh)\n    context.play()\n\n    const loadImage = () => {\n        const elem = document.body.querySelector("details > div > pre")\n        if (!elem || elem.scrollWidth < 1) {\n            setTimeout(loadImage, 500)\n            return\n        }\n        console.log(elem.innerHTML)\n        tgdLoadCanvasFromElement(elem).then((img) => {\n            document.body.appendChild(img)\n            texture.loadBitmap(img)\n        })\n    }\n    loadImage()\n}\n\nexport default function Demo() {\n    return <View onReady={init} />\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                lineNumber: 20,
                columnNumber: 4
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/_element/index.tsx",
                lineNumber: 23,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}


},
78146(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _element__rspack_import_1 = __webpack_require__(5336);
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
        h1: "h1"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Create an image from a DOM element"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_element__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/utils/loaders/tgdLoadImageFromElement/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfdXRpbHNfbG9hZGVyc190Z2RMb2FkSW1hZ2VGcm9tRWxlbWVudF9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZS1iZWEyZWQuYmQwYmExNDg1YjU3MTkzYy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRJbWFnZUZyb21FbGVtZW50L19lbGVtZW50L2VsZW1lbnQuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3V0aWxzL2xvYWRlcnMvdGdkTG9hZEltYWdlRnJvbUVsZW1lbnQvX2VsZW1lbnQvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy91dGlscy9sb2FkZXJzL3RnZExvYWRJbWFnZUZyb21FbGVtZW50L3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZEdlb21ldHJ5Qm94LFxuXHR0Z2RMb2FkQ2FudmFzRnJvbUVsZW1lbnQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkTWF0ZXJpYWxOb3JtYWxzLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJMb2dpYyxcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0VGdkVGV4dHVyZTJELFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcblx0XHR0cmFuc2ZvOiB7XG5cdFx0XHRkaXN0YW5jZTogMS4yLFxuXHRcdFx0cG9zaXRpb246IFswLCAwLCAwXSxcblx0XHR9LFxuXHRcdGZhcjogMTAwLFxuXHRcdG5lYXI6IDAuMSxcblx0XHRmb3Z5OiBNYXRoLlBJIC8gNCxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzc09yRXF1YWwsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0XHRjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxuXHRcdFx0XHRkZXB0aDogMSxcblx0XHRcdH0pLFxuXHRcdFx0bmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcblx0XHRcdFx0bWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNTczKTtcblx0XHRcdFx0bWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWShkZWx0YSAqIDAuNzQxKTtcblx0XHRcdH0pLFxuXHRcdF0sXG5cdH0pO1xuXHRjb250ZXh0LmFkZChzdGF0ZSk7XG5cdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKGNvbnRleHQpO1xuXHRjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeUJveCgpO1xuXHRjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xuXHRcdGNvbG9yOiB0ZXh0dXJlLFxuXHR9KTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG5cdFx0Z2VvbWV0cnksXG5cdFx0bWF0ZXJpYWwsXG5cdH0pO1xuXHRzdGF0ZS5hZGQobWVzaCk7XG5cdGNvbnRleHQucGxheSgpO1xuXG5cdC8vICNiZWdpbiBMb2FkaW5nIGVsZW1lbnQgaW50byB0ZXh0dXJlXG5cdGNvbnN0IGxvYWRJbWFnZSA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiZGV0YWlscyA+IGRpdiA+IHByZVwiKTtcblx0XHRpZiAoIWVsZW0gfHwgZWxlbS5zY3JvbGxXaWR0aCA8IDEpIHtcblx0XHRcdHNldFRpbWVvdXQobG9hZEltYWdlLCA1MDApO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhlbGVtLmlubmVySFRNTCk7XG5cdFx0dGdkTG9hZENhbnZhc0Zyb21FbGVtZW50KGVsZW0pLnRoZW4oKGltZykgPT4ge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xuXHRcdFx0dGV4dHVyZS5sb2FkQml0bWFwKGltZyk7XG5cdFx0fSk7XG5cdH07XG5cdGxvYWRJbWFnZSgpO1xuXHQvLyAjZW5kXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSAvPjtcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9lbGVtZW50LmRlbW9cIjtcblxuY29uc3QgRk9DVVMgPSB7XG5cdFwiTG9hZGluZyBlbGVtZW50IGludG8gdGV4dHVyZVwiOlxuXHRcdCcgICAgY29uc3QgbG9hZEltYWdlID0gKCkgPT4ge1xcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcImRldGFpbHMgPiBkaXYgPiBwcmVcIilcXG4gICAgICAgIGlmICghZWxlbSB8fCBlbGVtLnNjcm9sbFdpZHRoIDwgMSkge1xcbiAgICAgICAgICAgIHNldFRpbWVvdXQobG9hZEltYWdlLCA1MDApXFxuICAgICAgICAgICAgcmV0dXJuXFxuICAgICAgICB9XFxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtLmlubmVySFRNTClcXG4gICAgICAgIHRnZExvYWRDYW52YXNGcm9tRWxlbWVudChlbGVtKS50aGVuKChpbWcpID0+IHtcXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcXG4gICAgICAgICAgICB0ZXh0dXJlLmxvYWRCaXRtYXAoaW1nKVxcbiAgICAgICAgfSlcXG4gICAgfVxcbiAgICBsb2FkSW1hZ2UoKScsXG59O1xuY29uc3QgRlVMTCA9XG5cdCdpbXBvcnQge1xcbiAgICBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RHZW9tZXRyeUJveCxcXG4gICAgdGdkTG9hZENhbnZhc0Zyb21FbGVtZW50LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZE1hdGVyaWFsTm9ybWFscyxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTG9naWMsXFxuICAgIFRnZFBhaW50ZXJNZXNoLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIFRnZFRleHR1cmUyRCxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0KSB7XFxuICAgIGNvbnRleHQuY2FtZXJhID0gbmV3IFRnZENhbWVyYVBlcnNwZWN0aXZlKHtcXG4gICAgICAgIHRyYW5zZm86IHtcXG4gICAgICAgICAgICBkaXN0YW5jZTogMS4yLFxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgMF0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZmFyOiAxMDAsXFxuICAgICAgICBuZWFyOiAwLjEsXFxuICAgICAgICBmb3Z5OiBNYXRoLlBJIC8gNCxcXG4gICAgfSlcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3NPckVxdWFsLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgbmV3IFRnZFBhaW50ZXJMb2dpYygodGltZSwgZGVsdGEpID0+IHtcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLm9yYml0QXJvdW5kWChkZWx0YSAqIDAuNTczKVxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8ub3JiaXRBcm91bmRZKGRlbHRhICogMC43NDEpXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICBdLFxcbiAgICB9KVxcbiAgICBjb250ZXh0LmFkZChzdGF0ZSlcXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQoY29udGV4dClcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlCb3goKVxcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgY29sb3I6IHRleHR1cmUsXFxuICAgIH0pXFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbCxcXG4gICAgfSlcXG4gICAgc3RhdGUuYWRkKG1lc2gpXFxuICAgIGNvbnRleHQucGxheSgpXFxuXFxuICAgIGNvbnN0IGxvYWRJbWFnZSA9ICgpID0+IHtcXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCJkZXRhaWxzID4gZGl2ID4gcHJlXCIpXFxuICAgICAgICBpZiAoIWVsZW0gfHwgZWxlbS5zY3JvbGxXaWR0aCA8IDEpIHtcXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRJbWFnZSwgNTAwKVxcbiAgICAgICAgICAgIHJldHVyblxcbiAgICAgICAgfVxcbiAgICAgICAgY29uc29sZS5sb2coZWxlbS5pbm5lckhUTUwpXFxuICAgICAgICB0Z2RMb2FkQ2FudmFzRnJvbUVsZW1lbnQoZWxlbSkudGhlbigoaW1nKSA9PiB7XFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpXFxuICAgICAgICAgICAgdGV4dHVyZS5sb2FkQml0bWFwKGltZylcXG4gICAgICAgIH0pXFxuICAgIH1cXG4gICAgbG9hZEltYWdlKClcXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IC8+XFxufVxcbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG5cdGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cblx0XHRcdFx0PERlbW8gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuXHRcdFx0XHRcdFx0e2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG5cdFx0XHRcdFx0PC9WaWV3QnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZEdlb21ldHJ5Qm94IiwidGdkTG9hZENhbnZhc0Zyb21FbGVtZW50IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlckxvZ2ljIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RUZXh0dXJlMkQiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsImluaXQiLCJjb250ZXh0IiwiTWF0aCIsInN0YXRlIiwidGltZSIsImRlbHRhIiwibWVzaCIsInRleHR1cmUiLCJnZW9tZXRyeSIsIm1hdGVyaWFsIiwibG9hZEltYWdlIiwiZWxlbSIsImRvY3VtZW50Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJpbWciLCJEZW1vIiwiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBYXdCO0FBQ2lCO0FBRXpDLFNBQVNXLEtBQUtDLE9BQW1CO0lBQ2hDQSxRQUFRLE1BQU0sR0FBRyxJQUFJWixvREFBb0JBLENBQUM7UUFDekMsU0FBUztZQUNSLFVBQVU7WUFDVixVQUFVO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUU7UUFDcEI7UUFDQSxLQUFLO1FBQ0wsTUFBTTtRQUNOLE1BQU1hLEtBQUssRUFBRSxHQUFHO0lBQ2pCO0lBQ0EsSUFBTUMsUUFBUSxJQUFJUCwrQ0FBZUEsQ0FBQ0ssU0FBUztRQUMxQyxPQUFPSCw0REFBNEI7UUFDbkMsVUFBVTtZQUNULElBQUlMLCtDQUFlQSxDQUFDUSxTQUFTO2dCQUM1QixPQUFPO29CQUFDO29CQUFLO29CQUFLO29CQUFLO2lCQUFFO2dCQUN6QixPQUFPO1lBQ1I7WUFDQSxJQUFJUCwrQ0FBZUEsQ0FBQyxTQUFDVSxNQUFNQztnQkFDMUJDLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQ0QsUUFBUTtnQkFDbENDLEtB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