"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_tricks_object-picker_page_mdx-src_components_demo_CodeViewer_CodeViewer_module_css-sr-f00dfe"], {
79795(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



function init(context) {
    // #begin
    var animations = new Set();
    var offscreen = new _tolokoban_tgd__rspack_import_1.TgdContextOffscreen(context);
    context.camera.fitSpaceAtTarget(6, 6);
    var indexes = Array.from({
        length: 64
    }).map(function(_, i) {
        return i;
    });
    var materials = indexes.map(function() {
        return new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse({
            lockLightsToCamera: true,
            color: _tolokoban_tgd__rspack_import_1.TgdColor.fromHSL(Math.random(), (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0.5, 1), 0.5).toVec4()
        });
    });
    var geometry = new _tolokoban_tgd__rspack_import_1.TgdGeometrySphereIco({
        radius: 0.5
    });
    var meshes = indexes.map(function(index) {
        return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(context, {
            geometry: geometry,
            material: materials[index],
            transfo: new _tolokoban_tgd__rspack_import_1.TgdTransfo({
                position: new _tolokoban_tgd__rspack_import_1.TgdVec3((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom3)(-3, +3)).normalize().scale(2),
                scale: [
                    1,
                    0.5,
                    0.5
                ],
                orientation: new _tolokoban_tgd__rspack_import_1.TgdQuat((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom4)(-2, +2)).normalize()
            })
        });
    });
    var meshes2 = indexes.map(function(index) {
        var mesh = meshes[index];
        return new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(offscreen, {
            geometry: geometry,
            material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFlat({
                color: _to_consumable_array((0,_tolokoban_tgd__rspack_import_1.tgdCalcIndexToRGB)(index + 1)).concat([
                    1
                ])
            }),
            transfo: mesh.transfo
        });
    });
    offscreen.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(offscreen, {
        color: [
            0,
            0,
            0,
            1
        ],
        depth: 1
    }), new _tolokoban_tgd__rspack_import_1.TgdPainterState(offscreen, {
        depth: "lessOrEqual",
        children: meshes2
    }));
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
        depth: "lessOrEqual",
        children: meshes
    });
    context.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
        color: [
            0.3,
            0.2,
            0.1,
            1
        ],
        depth: 1
    }), state, offscreen.paint);
    context.inputs.pointer.eventTap.addListener(function(event) {
        var x = event.x, y = event.y;
        var pixel = offscreen.readPixel(x, y);
        var index = (0,_tolokoban_tgd__rspack_import_1.tgdCalcPixelToIndex)(pixel);
        console.log("🐞 [background.demo@85] index =", index, x, y); // @FIXME: Remove this line written on 2026-09-03 at 11:41
        if (index < 1) return;
        var k = index - 1;
        if (animations.has(k)) return;
        animations.add(k);
        var mesh = meshes[k];
        if (!mesh) return;
        console.log("🐞 [background.demo@87] mesh =", mesh); // @FIXME: Remove this line written on 2026-09-02 at 17:03
        context.animSchedule({
            duration: 1,
            action: function action(alpha) {
                var s = 1 + alpha;
                mesh.transfo.setScale(s, s * 0.5, s * 0.5);
            },
            onEnd: function onEnd() {
                animations.delete(k);
            },
            easingFunction: _tolokoban_tgd__rspack_import_1.tgdEasingFunctionTriangle
        });
    });
    context.paint();
// #end
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
            onReady: init,
            controller: {
                inertiaOrbit: 2000
            }
        }, void 0, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/background.demo.tsx",
            lineNumber: 115,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/background.demo.tsx",
        lineNumber: 114,
        columnNumber: 9
    }, this);
}


},
78312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _background_demo__rspack_import_4 = __webpack_require__(79795);
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
    "Detail #1": "    const animations = new Set<number>()\n    const offscreen = new TgdContextOffscreen(context)\n    context.camera.fitSpaceAtTarget(6, 6)\n    const indexes = Array.from({ length: 64 }).map((_, i) => i)\n    const materials = indexes.map(\n        () =>\n            new TgdMaterialDiffuse({\n                lockLightsToCamera: true,\n                color: TgdColor.fromHSL(Math.random(), tgdCalcRandom(0.5, 1), 0.5).toVec4(),\n            }),\n    )\n    const geometry = new TgdGeometrySphereIco({ radius: 0.5 })\n    const meshes = indexes.map(\n        (index) =>\n            new TgdPainterMesh(context, {\n                geometry,\n                material: materials[index],\n                transfo: new TgdTransfo({\n                    position: new TgdVec3(tgdCalcRandom3(-3, +3)).normalize().scale(2),\n                    scale: [1, 0.5, 0.5],\n                    orientation: new TgdQuat(tgdCalcRandom4(-2, +2)).normalize(),\n                }),\n            }),\n    )\n    const meshes2 = indexes.map((index) => {\n        const mesh = meshes[index]\n        return new TgdPainterMesh(offscreen, {\n            geometry,\n            material: new TgdMaterialFlat({\n                color: [...tgdCalcIndexToRGB(index + 1), 1],\n            }),\n            transfo: mesh.transfo,\n        })\n    })\n    offscreen.add(\n        new TgdPainterClear(offscreen, {\n            color: [0, 0, 0, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(offscreen, {\n            depth: \"lessOrEqual\",\n            children: meshes2,\n        }),\n    )\n    const state = new TgdPainterState(context, {\n        depth: \"lessOrEqual\",\n        children: meshes,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.2, 0.1, 1],\n            depth: 1,\n        }),\n        state,\n        offscreen.paint,\n    )\n    context.inputs.pointer.eventTap.addListener((event) => {\n        const { x, y } = event\n        const pixel = offscreen.readPixel(x, y)\n        const index = tgdCalcPixelToIndex(pixel)\n        console.log(\"🐞 [background.demo@85] index =\", index, x, y) // @FIXME: Remove this line written on 2026-09-03 at 11:41\n        if (index < 1) return\n\n        const k = index - 1\n        if (animations.has(k)) return\n\n        animations.add(k)\n        const mesh = meshes[k]\n        if (!mesh) return\n\n        console.log(\"🐞 [background.demo@87] mesh =\", mesh) // @FIXME: Remove this line written on 2026-09-02 at 17:03\n        context.animSchedule({\n            duration: 1,\n            action: (alpha: number) => {\n                const s = 1 + alpha\n                mesh.transfo.setScale(s, s * 0.5, s * 0.5)\n            },\n            onEnd: () => {\n                animations.delete(k)\n            },\n            easingFunction: tgdEasingFunctionTriangle,\n        })\n    })\n    context.paint()"
};
var FULL = "import {\n    tgdCalcIndexToRGB,\n    tgdCalcRandom,\n    tgdCalcRandom3,\n    tgdCalcRandom4,\n    TgdColor,\n    TgdContext,\n    TgdGeometrySphereIco,\n    TgdMaterialDiffuse,\n    TgdMaterialFlat,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    TgdQuat,\n    TgdTransfo,\n    TgdVec3,\n    TgdContextOffscreen,\n    tgdCalcPixelToIndex,\n    tgdEasingFunctionTriangle,\n} from \"@tolokoban/tgd\"\nimport View from \"@/components/demo/Tgd\"\n\nfunction init(context: TgdContext) {\n    const animations = new Set<number>()\n    const offscreen = new TgdContextOffscreen(context)\n    context.camera.fitSpaceAtTarget(6, 6)\n    const indexes = Array.from({ length: 64 }).map((_, i) => i)\n    const materials = indexes.map(\n        () =>\n            new TgdMaterialDiffuse({\n                lockLightsToCamera: true,\n                color: TgdColor.fromHSL(Math.random(), tgdCalcRandom(0.5, 1), 0.5).toVec4(),\n            }),\n    )\n    const geometry = new TgdGeometrySphereIco({ radius: 0.5 })\n    const meshes = indexes.map(\n        (index) =>\n            new TgdPainterMesh(context, {\n                geometry,\n                material: materials[index],\n                transfo: new TgdTransfo({\n                    position: new TgdVec3(tgdCalcRandom3(-3, +3)).normalize().scale(2),\n                    scale: [1, 0.5, 0.5],\n                    orientation: new TgdQuat(tgdCalcRandom4(-2, +2)).normalize(),\n                }),\n            }),\n    )\n    const meshes2 = indexes.map((index) => {\n        const mesh = meshes[index]\n        return new TgdPainterMesh(offscreen, {\n            geometry,\n            material: new TgdMaterialFlat({\n                color: [...tgdCalcIndexToRGB(index + 1), 1],\n            }),\n            transfo: mesh.transfo,\n        })\n    })\n    offscreen.add(\n        new TgdPainterClear(offscreen, {\n            color: [0, 0, 0, 1],\n            depth: 1,\n        }),\n        new TgdPainterState(offscreen, {\n            depth: \"lessOrEqual\",\n            children: meshes2,\n        }),\n    )\n    const state = new TgdPainterState(context, {\n        depth: \"lessOrEqual\",\n        children: meshes,\n    })\n    context.add(\n        new TgdPainterClear(context, {\n            color: [0.3, 0.2, 0.1, 1],\n            depth: 1,\n        }),\n        state,\n        offscreen.paint,\n    )\n    context.inputs.pointer.eventTap.addListener((event) => {\n        const { x, y } = event\n        const pixel = offscreen.readPixel(x, y)\n        const index = tgdCalcPixelToIndex(pixel)\n        console.log(\"🐞 [background.demo@85] index =\", index, x, y) // @FIXME: Remove this line written on 2026-09-03 at 11:41\n        if (index < 1) return\n\n        const k = index - 1\n        if (animations.has(k)) return\n\n        animations.add(k)\n        const mesh = meshes[k]\n        if (!mesh) return\n\n        console.log(\"🐞 [background.demo@87] mesh =\", mesh) // @FIXME: Remove this line written on 2026-09-02 at 17:03\n        context.animSchedule({\n            duration: 1,\n            action: (alpha: number) => {\n                const s = 1 + alpha\n                mesh.transfo.setScale(s, s * 0.5, s * 0.5)\n            },\n            onEnd: () => {\n                animations.delete(k)\n            },\n            easingFunction: tgdEasingFunctionTriangle,\n        })\n    })\n    context.paint()\n}\n\nexport default function Demo() {\n    return (\n        <div>\n            <View\n                onReady={init}\n                controller={{\n                    inertiaOrbit: 2000,\n                }}\n            />\n        </div>\n    )\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/_/background.demo/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
48008(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _background_demo__rspack_import_1 = __webpack_require__(78312);
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
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Object picking"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Click on an object to start an animation on it."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_background_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The trick is to create a ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdContextOffscreen.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdContextOffscreen"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                            lineNumber: 9,
                            columnNumber: 27
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                        lineNumber: 9,
                        columnNumber: 26
                    }, this),
                    "\nand render the same objets with a different material: ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/classes/TgdMaterialFlat.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "TgdMaterialFlat"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                            lineNumber: 10,
                            columnNumber: 56
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                        lineNumber: 10,
                        columnNumber: 55
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "The color you use for each object must reflect its index.\nUse ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "docs/functions/tgdCalcIndexToRGB.html",
                        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                            children: "tgdCalcIndexToRGB"
                        }, undefined, false, {
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                            lineNumber: 13,
                            columnNumber: 6
                        }, this)
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                        lineNumber: 13,
                        columnNumber: 5
                    }, this),
                    " to create a color from an index."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "Now, the color of the pixel you click on is mapped to the index of the object.\nJust use ",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.code, {
                        children: "tgdCalcPixelToIndex(offscreen.readPixel(x, y))"
                    }, undefined, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                        lineNumber: 16,
                        columnNumber: 10
                    }, this),
                    " to get it back."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: "Look at the full code to get more details."
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
                lineNumber: 18,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/tricks/object-picker/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfdHJpY2tzX29iamVjdC1waWNrZXJfcGFnZV9tZHgtc3JjX2NvbXBvbmVudHNfZGVtb19Db2RlVmlld2VyX0NvZGVWaWV3ZXJfbW9kdWxlX2Nzcy1zci1mMDBkZmUuMTkwNTQ3MzQwM2VmNjliMS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3Mvb2JqZWN0LXBpY2tlci9fL2JhY2tncm91bmQuZGVtby9iYWNrZ3JvdW5kLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC90cmlja3Mvb2JqZWN0LXBpY2tlci9fL2JhY2tncm91bmQuZGVtby9pbmRleC50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL3RyaWNrcy9vYmplY3QtcGlja2VyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgdGdkQ2FsY0luZGV4VG9SR0IsXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcbiAgICB0Z2RDYWxjUmFuZG9tNCxcbiAgICBUZ2RDb2xvcixcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZEdlb21ldHJ5U3BoZXJlSWNvLFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICBUZ2RRdWF0LFxuICAgIFRnZFRyYW5zZm8sXG4gICAgVGdkVmVjMyxcbiAgICBUZ2RDb250ZXh0T2Zmc2NyZWVuLFxuICAgIHRnZENhbGNQaXhlbFRvSW5kZXgsXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcbiAgICAvLyAjYmVnaW5cbiAgICBjb25zdCBhbmltYXRpb25zID0gbmV3IFNldDxudW1iZXI+KClcbiAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgVGdkQ29udGV4dE9mZnNjcmVlbihjb250ZXh0KVxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNiwgNilcbiAgICBjb25zdCBpbmRleGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNjQgfSkubWFwKChfLCBpKSA9PiBpKVxuICAgIGNvbnN0IG1hdGVyaWFscyA9IGluZGV4ZXMubWFwKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSh7XG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBUZ2RDb2xvci5mcm9tSFNMKE1hdGgucmFuZG9tKCksIHRnZENhbGNSYW5kb20oMC41LCAxKSwgMC41KS50b1ZlYzQoKSxcbiAgICAgICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbyh7IHJhZGl1czogMC41IH0pXG4gICAgY29uc3QgbWVzaGVzID0gaW5kZXhlcy5tYXAoXG4gICAgICAgIChpbmRleCkgPT5cbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IFRnZFZlYzModGdkQ2FsY1JhbmRvbTMoLTMsICszKSkubm9ybWFsaXplKCkuc2NhbGUoMiksXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMSwgMC41LCAwLjVdLFxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogbmV3IFRnZFF1YXQodGdkQ2FsY1JhbmRvbTQoLTIsICsyKSkubm9ybWFsaXplKCksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9KSxcbiAgICApXG4gICAgY29uc3QgbWVzaGVzMiA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2luZGV4XVxuICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKG9mZnNjcmVlbiwge1xuICAgICAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XG4gICAgICAgICAgICAgICAgY29sb3I6IFsuLi50Z2RDYWxjSW5kZXhUb1JHQihpbmRleCArIDEpLCAxXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdHJhbnNmbzogbWVzaC50cmFuc2ZvLFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgb2Zmc2NyZWVuLmFkZChcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihvZmZzY3JlZW4sIHtcbiAgICAgICAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMV0sXG4gICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgfSksXG4gICAgICAgIG5ldyBUZ2RQYWludGVyU3RhdGUob2Zmc2NyZWVuLCB7XG4gICAgICAgICAgICBkZXB0aDogXCJsZXNzT3JFcXVhbFwiLFxuICAgICAgICAgICAgY2hpbGRyZW46IG1lc2hlczIsXG4gICAgICAgIH0pLFxuICAgIClcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICBkZXB0aDogXCJsZXNzT3JFcXVhbFwiLFxuICAgICAgICBjaGlsZHJlbjogbWVzaGVzLFxuICAgIH0pXG4gICAgY29udGV4dC5hZGQoXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIG9mZnNjcmVlbi5wYWludCxcbiAgICApXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBldmVudFxuICAgICAgICBjb25zdCBwaXhlbCA9IG9mZnNjcmVlbi5yZWFkUGl4ZWwoeCwgeSlcbiAgICAgICAgY29uc3QgaW5kZXggPSB0Z2RDYWxjUGl4ZWxUb0luZGV4KHBpeGVsKVxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW2JhY2tncm91bmQuZGVtb0A4NV0gaW5kZXggPVwiLCBpbmRleCwgeCwgeSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wOS0wMyBhdCAxMTo0MVxuICAgICAgICBpZiAoaW5kZXggPCAxKSByZXR1cm5cblxuICAgICAgICBjb25zdCBrID0gaW5kZXggLSAxXG4gICAgICAgIGlmIChhbmltYXRpb25zLmhhcyhrKSkgcmV0dXJuXG5cbiAgICAgICAgYW5pbWF0aW9ucy5hZGQoaylcbiAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1trXVxuICAgICAgICBpZiAoIW1lc2gpIHJldHVyblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+QniBbYmFja2dyb3VuZC5kZW1vQDg3XSBtZXNoID1cIiwgbWVzaCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wOS0wMiBhdCAxNzowM1xuICAgICAgICBjb250ZXh0LmFuaW1TY2hlZHVsZSh7XG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgIGFjdGlvbjogKGFscGhhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzID0gMSArIGFscGhhXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldFNjYWxlKHMsIHMgKiAwLjUsIHMgKiAwLjUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLmRlbGV0ZShrKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uOiB0Z2RFYXNpbmdGdW5jdGlvblRyaWFuZ2xlLFxuICAgICAgICB9KVxuICAgIH0pXG4gICAgY29udGV4dC5wYWludCgpXG4gICAgLy8gI2VuZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Vmlld1xuICAgICAgICAgICAgICAgIG9uUmVhZHk9e2luaXR9XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcj17e1xuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDIwMDAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9iYWNrZ3JvdW5kLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkRldGFpbCAjMVwiOlwiICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBuZXcgU2V0PG51bWJlcj4oKVxcbiAgICBjb25zdCBvZmZzY3JlZW4gPSBuZXcgVGdkQ29udGV4dE9mZnNjcmVlbihjb250ZXh0KVxcbiAgICBjb250ZXh0LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDYsIDYpXFxuICAgIGNvbnN0IGluZGV4ZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA2NCB9KS5tYXAoKF8sIGkpID0+IGkpXFxuICAgIGNvbnN0IG1hdGVyaWFscyA9IGluZGV4ZXMubWFwKFxcbiAgICAgICAgKCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKHtcXG4gICAgICAgICAgICAgICAgbG9ja0xpZ2h0c1RvQ2FtZXJhOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBjb2xvcjogVGdkQ29sb3IuZnJvbUhTTChNYXRoLnJhbmRvbSgpLCB0Z2RDYWxjUmFuZG9tKDAuNSwgMSksIDAuNSkudG9WZWM0KCksXFxuICAgICAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVGdkR2VvbWV0cnlTcGhlcmVJY28oeyByYWRpdXM6IDAuNSB9KVxcbiAgICBjb25zdCBtZXNoZXMgPSBpbmRleGVzLm1hcChcXG4gICAgICAgIChpbmRleCkgPT5cXG4gICAgICAgICAgICBuZXcgVGdkUGFpbnRlck1lc2goY29udGV4dCwge1xcbiAgICAgICAgICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IG1hdGVyaWFsc1tpbmRleF0sXFxuICAgICAgICAgICAgICAgIHRyYW5zZm86IG5ldyBUZ2RUcmFuc2ZvKHtcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVGdkVmVjMyh0Z2RDYWxjUmFuZG9tMygtMywgKzMpKS5ub3JtYWxpemUoKS5zY2FsZSgyKSxcXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMSwgMC41LCAwLjVdLFxcbiAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IG5ldyBUZ2RRdWF0KHRnZENhbGNSYW5kb200KC0yLCArMikpLm5vcm1hbGl6ZSgpLFxcbiAgICAgICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBtZXNoZXMyID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XFxuICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2luZGV4XVxcbiAgICAgICAgcmV0dXJuIG5ldyBUZ2RQYWludGVyTWVzaChvZmZzY3JlZW4sIHtcXG4gICAgICAgICAgICBnZW9tZXRyeSxcXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmxhdCh7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBbLi4udGdkQ2FsY0luZGV4VG9SR0IoaW5kZXggKyAxKSwgMV0sXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgdHJhbnNmbzogbWVzaC50cmFuc2ZvLFxcbiAgICAgICAgfSlcXG4gICAgfSlcXG4gICAgb2Zmc2NyZWVuLmFkZChcXG4gICAgICAgIG5ldyBUZ2RQYWludGVyQ2xlYXIob2Zmc2NyZWVuLCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLCAwLCAwLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJTdGF0ZShvZmZzY3JlZW4sIHtcXG4gICAgICAgICAgICBkZXB0aDogXFxcImxlc3NPckVxdWFsXFxcIixcXG4gICAgICAgICAgICBjaGlsZHJlbjogbWVzaGVzMixcXG4gICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICBkZXB0aDogXFxcImxlc3NPckVxdWFsXFxcIixcXG4gICAgICAgIGNoaWxkcmVuOiBtZXNoZXMsXFxuICAgIH0pXFxuICAgIGNvbnRleHQuYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMiwgMC4xLCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgc3RhdGUsXFxuICAgICAgICBvZmZzY3JlZW4ucGFpbnQsXFxuICAgIClcXG4gICAgY29udGV4dC5pbnB1dHMucG9pbnRlci5ldmVudFRhcC5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHtcXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnRcXG4gICAgICAgIGNvbnN0IHBpeGVsID0gb2Zmc2NyZWVuLnJlYWRQaXhlbCh4LCB5KVxcbiAgICAgICAgY29uc3QgaW5kZXggPSB0Z2RDYWxjUGl4ZWxUb0luZGV4KHBpeGVsKVxcbiAgICAgICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW2JhY2tncm91bmQuZGVtb0A4NV0gaW5kZXggPVxcXCIsIGluZGV4LCB4LCB5KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTA5LTAzIGF0IDExOjQxXFxuICAgICAgICBpZiAoaW5kZXggPCAxKSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnN0IGsgPSBpbmRleCAtIDFcXG4gICAgICAgIGlmIChhbmltYXRpb25zLmhhcyhrKSkgcmV0dXJuXFxuXFxuICAgICAgICBhbmltYXRpb25zLmFkZChrKVxcbiAgICAgICAgY29uc3QgbWVzaCA9IG1lc2hlc1trXVxcbiAgICAgICAgaWYgKCFtZXNoKSByZXR1cm5cXG5cXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFtiYWNrZ3JvdW5kLmRlbW9AODddIG1lc2ggPVxcXCIsIG1lc2gpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDktMDIgYXQgMTc6MDNcXG4gICAgICAgIGNvbnRleHQuYW5pbVNjaGVkdWxlKHtcXG4gICAgICAgICAgICBkdXJhdGlvbjogMSxcXG4gICAgICAgICAgICBhY3Rpb246IChhbHBoYTogbnVtYmVyKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHMgPSAxICsgYWxwaGFcXG4gICAgICAgICAgICAgICAgbWVzaC50cmFuc2ZvLnNldFNjYWxlKHMsIHMgKiAwLjUsIHMgKiAwLjUpXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBvbkVuZDogKCkgPT4ge1xcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zLmRlbGV0ZShrKVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb246IHRnZEVhc2luZ0Z1bmN0aW9uVHJpYW5nbGUsXFxuICAgICAgICB9KVxcbiAgICB9KVxcbiAgICBjb250ZXh0LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHRnZENhbGNJbmRleFRvUkdCLFxcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0Z2RDYWxjUmFuZG9tMyxcXG4gICAgdGdkQ2FsY1JhbmRvbTQsXFxuICAgIFRnZENvbG9yLFxcbiAgICBUZ2RDb250ZXh0LFxcbiAgICBUZ2RHZW9tZXRyeVNwaGVyZUljbyxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RNYXRlcmlhbEZsYXQsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgVGdkUXVhdCxcXG4gICAgVGdkVHJhbnNmbyxcXG4gICAgVGdkVmVjMyxcXG4gICAgVGdkQ29udGV4dE9mZnNjcmVlbixcXG4gICAgdGdkQ2FsY1BpeGVsVG9JbmRleCxcXG4gICAgdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZSxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQpIHtcXG4gICAgY29uc3QgYW5pbWF0aW9ucyA9IG5ldyBTZXQ8bnVtYmVyPigpXFxuICAgIGNvbnN0IG9mZnNjcmVlbiA9IG5ldyBUZ2RDb250ZXh0T2Zmc2NyZWVuKGNvbnRleHQpXFxuICAgIGNvbnRleHQuY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoNiwgNilcXG4gICAgY29uc3QgaW5kZXhlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDY0IH0pLm1hcCgoXywgaSkgPT4gaSlcXG4gICAgY29uc3QgbWF0ZXJpYWxzID0gaW5kZXhlcy5tYXAoXFxuICAgICAgICAoKSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2Uoe1xcbiAgICAgICAgICAgICAgICBsb2NrTGlnaHRzVG9DYW1lcmE6IHRydWUsXFxuICAgICAgICAgICAgICAgIGNvbG9yOiBUZ2RDb2xvci5mcm9tSFNMKE1hdGgucmFuZG9tKCksIHRnZENhbGNSYW5kb20oMC41LCAxKSwgMC41KS50b1ZlYzQoKSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgKVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUZ2RHZW9tZXRyeVNwaGVyZUljbyh7IHJhZGl1czogMC41IH0pXFxuICAgIGNvbnN0IG1lc2hlcyA9IGluZGV4ZXMubWFwKFxcbiAgICAgICAgKGluZGV4KSA9PlxcbiAgICAgICAgICAgIG5ldyBUZ2RQYWludGVyTWVzaChjb250ZXh0LCB7XFxuICAgICAgICAgICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDogbWF0ZXJpYWxzW2luZGV4XSxcXG4gICAgICAgICAgICAgICAgdHJhbnNmbzogbmV3IFRnZFRyYW5zZm8oe1xcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBUZ2RWZWMzKHRnZENhbGNSYW5kb20zKC0zLCArMykpLm5vcm1hbGl6ZSgpLnNjYWxlKDIpLFxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAwLjUsIDAuNV0sXFxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogbmV3IFRnZFF1YXQodGdkQ2FsY1JhbmRvbTQoLTIsICsyKSkubm9ybWFsaXplKCksXFxuICAgICAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIH0pLFxcbiAgICApXFxuICAgIGNvbnN0IG1lc2hlczIgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcXG4gICAgICAgIGNvbnN0IG1lc2ggPSBtZXNoZXNbaW5kZXhdXFxuICAgICAgICByZXR1cm4gbmV3IFRnZFBhaW50ZXJNZXNoKG9mZnNjcmVlbiwge1xcbiAgICAgICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGbGF0KHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IFsuLi50Z2RDYWxjSW5kZXhUb1JHQihpbmRleCArIDEpLCAxXSxcXG4gICAgICAgICAgICB9KSxcXG4gICAgICAgICAgICB0cmFuc2ZvOiBtZXNoLnRyYW5zZm8sXFxuICAgICAgICB9KVxcbiAgICB9KVxcbiAgICBvZmZzY3JlZW4uYWRkKFxcbiAgICAgICAgbmV3IFRnZFBhaW50ZXJDbGVhcihvZmZzY3JlZW4sIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAsIDAsIDAsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBuZXcgVGdkUGFpbnRlclN0YXRlKG9mZnNjcmVlbiwge1xcbiAgICAgICAgICAgIGRlcHRoOiBcXFwibGVzc09yRXF1YWxcXFwiLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBtZXNoZXMyLFxcbiAgICAgICAgfSksXFxuICAgIClcXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgIGRlcHRoOiBcXFwibGVzc09yRXF1YWxcXFwiLFxcbiAgICAgICAgY2hpbGRyZW46IG1lc2hlcyxcXG4gICAgfSlcXG4gICAgY29udGV4dC5hZGQoXFxuICAgICAgICBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4yLCAwLjEsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSksXFxuICAgICAgICBzdGF0ZSxcXG4gICAgICAgIG9mZnNjcmVlbi5wYWludCxcXG4gICAgKVxcbiAgICBjb250ZXh0LmlucHV0cy5wb2ludGVyLmV2ZW50VGFwLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xcbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBldmVudFxcbiAgICAgICAgY29uc3QgcGl4ZWwgPSBvZmZzY3JlZW4ucmVhZFBpeGVsKHgsIHkpXFxuICAgICAgICBjb25zdCBpbmRleCA9IHRnZENhbGNQaXhlbFRvSW5kZXgocGl4ZWwpXFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbYmFja2dyb3VuZC5kZW1vQDg1XSBpbmRleCA9XFxcIiwgaW5kZXgsIHgsIHkpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDktMDMgYXQgMTE6NDFcXG4gICAgICAgIGlmIChpbmRleCA8IDEpIHJldHVyblxcblxcbiAgICAgICAgY29uc3QgayA9IGluZGV4IC0gMVxcbiAgICAgICAgaWYgKGFuaW1hdGlvbnMuaGFzKGspKSByZXR1cm5cXG5cXG4gICAgICAgIGFuaW1hdGlvbnMuYWRkKGspXFxuICAgICAgICBjb25zdCBtZXNoID0gbWVzaGVzW2tdXFxuICAgICAgICBpZiAoIW1lc2gpIHJldHVyblxcblxcbiAgICAgICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW2JhY2tncm91bmQuZGVtb0A4N10gbWVzaCA9XFxcIiwgbWVzaCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wOS0wMiBhdCAxNzowM1xcbiAgICAgICAgY29udGV4dC5hbmltU2NoZWR1bGUoe1xcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxcbiAgICAgICAgICAgIGFjdGlvbjogKGFscGhhOiBudW1iZXIpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgcyA9IDEgKyBhbHBoYVxcbiAgICAgICAgICAgICAgICBtZXNoLnRyYW5zZm8uc2V0U2NhbGUocywgcyAqIDAuNSwgcyAqIDAuNSlcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIG9uRW5kOiAoKSA9PiB7XFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMuZGVsZXRlKGspXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbjogdGdkRWFzaW5nRnVuY3Rpb25UcmlhbmdsZSxcXG4gICAgICAgIH0pXFxuICAgIH0pXFxuICAgIGNvbnRleHQucGFpbnQoKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7XFxuICAgICAgICAgICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDIwMDAsXFxuICAgICAgICAgICAgICAgIH19XFxuICAgICAgICAgICAgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICApXFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInRnZENhbGNJbmRleFRvUkdCIiwidGdkQ2FsY1JhbmRvbSIsInRnZENhbGNSYW5kb20zIiwidGdkQ2FsY1JhbmRvbTQiLCJUZ2RDb2xvciIsIlRnZEdlb21ldHJ5U3BoZXJlSWNvIiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkTWF0ZXJpYWxGbGF0IiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlck1lc2giLCJUZ2RQYWludGVyU3RhdGUiLCJUZ2RRdWF0IiwiVGdkVHJhbnNmbyIsIlRnZFZlYzMiLCJUZ2RDb250ZXh0T2Zmc2NyZWVuIiwidGdkQ2FsY1BpeGVsVG9JbmRleCIsInRnZEVhc2luZ0Z1bmN0aW9uVHJpYW5nbGUiLCJWaWV3IiwiaW5pdCIsImNvbnRleHQiLCJhbmltYXRpb25zIiwiU2V0Iiwib2Zmc2NyZWVuIiwiaW5kZXhlcyIsIkFycmF5IiwiXyIsImkiLCJtYXRlcmlhbHMiLCJNYXRoIiwiZ2VvbWV0cnkiLCJtZXNoZXMiLCJpbmRleCIsIm1lc2hlczIiLCJtZXNoIiwic3RhdGUiLCJldmVudCIsIngiLCJ5IiwicGl4ZWwiLCJjb25zb2xlIiwiayIsImFjdGlvbiIsImFscGhhIiwicyIsIm9uRW5kIiwiRGVtbyIsIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnVCO0FBQ2lCO0FBRXhDLFNBQVNrQixLQUFLQyxPQUFtQjtJQUM3QixTQUFTO0lBQ1QsSUFBTUMsYUFBYSxJQUFJQztJQUN2QixJQUFNQyxZQUFZLElBQUlSLG1EQUFtQkEsQ0FBQ0s7SUFDMUNBLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7SUFDbkMsSUFBTUksVUFBVUMsTUFBTSxJQUFJLENBQUM7UUFBRSxRQUFRO0lBQUcsR0FBRyxHQUFHLENBQUMsU0FBQ0MsR0FBR0M7ZUFBTUE7O0lBQ3pELElBQU1DLFlBQVlKLFFBQVEsR0FBRyxDQUN6QjtlQUNJLElBQUlqQixrREFBa0JBLENBQUM7WUFDbkIsb0JBQW9CO1lBQ3BCLE9BQU9GLGdEQUFnQixDQUFDd0IsS0FBSyxNQUFNLElBQUkzQixpREFBYUEsQ0FBQyxLQUFLLElBQUksS0FBSyxNQUFNO1FBQzdFOztJQUVSLElBQU00QixXQUFXLElBQUl4QixvREFBb0JBLENBQUM7UUFBRSxRQUFRO0lBQUk7SUFDeEQsSUFBTXlCLFNBQVNQLFFBQVEsR0FBRyxDQUN0QixTQUFDUTtlQUNHLElBQUl0Qiw4Q0FBY0EsQ0FBQ1UsU0FBUztZQUN4QlUsVUFBQUE7WUFDQSxVQUFVRixTQUFTLENBQUNJLE1BQU07WUFDMUIsU0FBUyxJQUFJbkIsMENBQVVBLENBQUM7Z0JBQ3BCLFVBQVUsSUFBSUMsdUNBQU9BLENBQUNYLGtEQUFjQSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDaEUsT0FBTztvQkFBQztvQkFBRztvQkFBSztpQkFBSTtnQkFDcEIsYUFBYSxJQUFJUyx1Q0FBT0EsQ0FBQ1Isa0RBQWNBLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxTQUFTO1lBQzlEO1FBQ0o7O0lBRVIsSUFBTTZCLFVBQVVULFFBQVEsR0FBRyxDQUFDLFNBQUNRO1FBQ3pCLElBQU1FLE9BQU9ILE1BQU0sQ0FBQ0MsTUFBTTtRQUMxQixPQUFPLElBQUl0Qiw4Q0FBY0EsQ0FBQ2EsV0FBVztZQUNqQ08sVUFBQUE7WUFDQSxVQUFVLElBQUl0QiwrQ0FBZUEsQ0FBQztnQkFDMUIsT0FBUSxxQkFBR1AscURBQWlCQSxDQUFDK0IsUUFBUSxXQUE5QjtvQkFBa0M7aUJBQUU7WUFDL0M7WUFDQSxTQUFTRSxLQUFLLE9BQU87UUFDekI7SUFDSjtJQUNBWCxVQUFVLEdBQUcsQ0FDVCxJQUFJZCwrQ0FBZUEsQ0FBQ2MsV0FBVztRQUMzQixPQUFPO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtRQUNuQixPQUFPO0lBQ1gsSUFDQSxJQUFJWiwrQ0FBZUEsQ0FBQ1ksV0FBVztRQUMzQixPQUFPO1FBQ1AsVUFBVVU7SUFDZDtJQUVKLElBQU1FLFFBQVEsSUFBSXhCLCtDQUFlQSxDQUFDUyxTQUFTO1FBQ3ZDLE9BQU87UUFDUCxVQUFVVztJQUNkO0lBQ0FYLFFBQVEsR0FBRyxDQUNQLElBQUlYLCtDQUFlQSxDQUFDVyxTQUFTO1FBQ3pCLE9BQU87WUFBQztZQUFLO1lBQUs7WUFBSztTQUFFO1FBQ3pCLE9BQU87SUFDWCxJQUNBZSxPQUNBWixVQUFVLEtBQUs7SUFFbkJILFFBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQUNnQjtRQUN6QyxJQUFRQyxJQUFTRCxNQUFUQyxHQUFHQyxJQUFNRixNQUFORTtRQUNYLElBQU1DLFFBQVFoQixVQUFVLFNBQVMsQ0FBQ2MsR0FBR0M7UUFDckMsSUFBTU4sUUFBUWhCLHVEQUFtQkEsQ0FBQ3VCO1FBQ2xDQyxRQUFRLEdBQUcsQ0FBQyxtQ0FBbUNSLE9BQU9LLEdBQUdDLElBQUcsMERBQTBEO1FBQ3RILElBQUlOLFFBQVEsR0FBRztRQUVmLElBQU1TLElBQUlULFFBQVE7UUFDbEIsSUFBSVgsV0FBVyxHQUFHLENBQUNvQixJQUFJO1FBRXZCcEIsV0FBVyxHQUFHLENBQUNvQjtRQUNmLElBQU1QLE9BQU9ILE1BQU0sQ0FBQ1UsRUFBRTtRQUN0QixJQUFJLENBQUNQLE1BQU07UUFFWE0sUUFBUSxHQUFHLENBQUMsa0NBQWtDTixPQUFNLDBEQUEwRDtRQUM5R2QsUUFBUSxZQUFZLENBQUM7WUFDakIsVUFBVTtZQUNWc0IsUUFBUSxTQUFSQSxPQUFTQztnQkFDTCxJQUFNQyxJQUFJLElBQUlEO2dCQUNkVCxLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUNVLEdBQUdBLElBQUksS0FBS0EsSUFBSTtZQUMxQztZQUNBQyxPQUFPLFNBQVBBO2dCQUNJeEIsV0FBVyxNQUFNLENBQUNvQjtZQUN0QjtZQUNBLGdCQUFnQnhCLHlEQUF5QkE7UUFDN0M7SUFDSjtJQUNBRyxRQUFRLEtBQUs7QUFDYixPQUFPO0FBQ1g7QUFFZSxTQUFTMEI7SUFDcEIscUJBQ0ksa0RBQUM7a0JBQ0csZ0VBQUM1QixnREFBSUE7WUFDRCxTQUFTQztZQUNULFlBQVk7Z0JBQ1IsY0FBYztZQUNsQjs7Ozs7Ozs7Ozs7QUFJaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDakI7QUFFcEMsSUFBTStCLFFBQVE7SUFBQyxhQUFZO0FBQW8yRjtBQUMvM0YsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ1AsNENBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0UseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdRLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ0wsdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT0ssT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmlCOzs7Ozs7Ozs7OzswQkFFZjs7Ozs7Ozs7MEJBRUY7Ozs7Ozs7Ozs7Ozs7OztvQkFJQTtvQkFBQTs7O3NDQUEwQjs7Ozs7Ozs7Ozs7b0JBQTZEO29CQUFBOzs7c0NBQ2hDOzs7Ozs7Ozs7OztvQkFBcUQ7aUJBQUE7Ozs7Ozs7OztvQkFFNUc7b0JBQUE7OztzQ0FDSzs7Ozs7Ozs7Ozs7b0JBQTJEO2lCQUFBOzs7Ozs7Ozs7b0JBRWhFO29CQUFBO2tDQUNTOzs7Ozs7b0JBQWdEO2lCQUFBOzs7Ozs7OzswQkFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==