"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_02_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-9377b1"], {
30969(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "bin/AA0622.29f83c4eda8c72e4.swc";

},
71421(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _neuron_demo__rspack_import_4 = __webpack_require__(28301);
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
    "Detail #1": "        const { data, center, bbox } = makeSegmentsData(assets.text.swc);\n        context.camera.transfo.position = center;\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);\n        context.camera.far = 10 * context.camera.transfo.distance;\n        context.camera.near = 1e-3;\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        });\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        });\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: .2,\n            material: new TgdMaterialDiffuse(),\n        });\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        });\n        context.add(clear, state);\n        context.paint();"
};
var FULL = 'import {\n    tgdCalcDegToRad,\n    TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd";\nimport View, { Assets } from "@/components/demo/Tgd";\n\nimport NeuronURL from "./AA0622.swc";\nimport { makeSegmentsData } from "./swc";\n\nfunction init(context: TgdContext, assets: Assets) {\n    try {\n        const { data, center, bbox } = makeSegmentsData(assets.text.swc);\n        context.camera.transfo.position = center;\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);\n        context.camera.far = 10 * context.camera.transfo.distance;\n        context.camera.near = 1e-3;\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        });\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        });\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: .2,\n            material: new TgdMaterialDiffuse(),\n        });\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        });\n        context.add(clear, state);\n        context.paint();\n    } catch (ex) {\n        console.error("Error in neuron demo!", ex);\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            gizmo\n            onReady={init}\n            assets={{\n                text: {\n                    swc: NeuronURL,\n                },\n            }}\n        />\n    );\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_neuron_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                lineNumber: 20,
                columnNumber: 13
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}


},
28301(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Demo)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _tolokoban_tgd__rspack_import_1 = __webpack_require__(47578);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _AA0622_swc__rspack_import_3 = __webpack_require__(30969);
/* import */ var _swc__rspack_import_4 = __webpack_require__(2892);





function init(context, assets) {
    try {
        // #begin
        var _makeSegmentsData = (0,_swc__rspack_import_4.makeSegmentsData)(assets.text.swc), data = _makeSegmentsData.data, center = _makeSegmentsData.center, bbox = _makeSegmentsData.bbox;
        context.camera.transfo.position = center;
        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z);
        context.camera.far = 10 * context.camera.transfo.distance;
        context.camera.near = 1e-3;
        new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(context, {
            inertiaOrbit: 1000,
            speedZoom: context.camera.transfo.distance * 1e-3,
            geo: {
                minLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(-60),
                maxLat: (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(60)
            }
        });
        var clear = new _tolokoban_tgd__rspack_import_1.TgdPainterClear(context, {
            color: [
                0.3,
                0.35,
                0.4,
                1
            ],
            depth: 1
        });
        var segments = new _tolokoban_tgd__rspack_import_1.TgdPainterSegments(context, {
            dataset: data.makeDataset,
            roundness: 6,
            minRadius: 0.2,
            material: new _tolokoban_tgd__rspack_import_1.TgdMaterialDiffuse()
        });
        var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(context, {
            depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
            children: [
                clear,
                segments
            ]
        });
        context.add(clear, state);
        context.paint();
    // #end
    } catch (ex) {
        console.error("Error in neuron demo!", ex);
    }
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        gizmo: true,
        onReady: init,
        assets: {
            text: {
                swc: _AA0622_swc__rspack_import_3
            }
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/neuron.demo.tsx",
        lineNumber: 56,
        columnNumber: 9
    }, this);
}


},
2892(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  makeSegmentsData: () => (makeSegmentsData)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

function makeSegmentsData(swc) {
    var bbox = new _tolokoban_tgd__rspack_import_0.TgdVec3();
    var somaPoints = [];
    var data = new _tolokoban_tgd__rspack_import_0.TgdPainterSegmentsData();
    var points = new Map();
    var maxDistance = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = forEachLine(swc)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var rawLine = _step.value;
            var line = stripComment(rawLine);
            var items = line.split(/\s+/);
            if (items.length < 7) continue;
            var _items_map = _sliced_to_array(items.map(function(s) {
                return Number(s);
            }), 7), index = _items_map[0], type = _items_map[1], x = _items_map[2], y = _items_map[3], z = _items_map[4], radius = _items_map[5], parent = _items_map[6];
            var B = {
                xyzr: [
                    x,
                    y,
                    z,
                    radius * 0.2
                ],
                uv: [
                    normalizeType(type),
                    0
                ],
                influence: index === 0 ? 0 : 1,
                parent: parent
            };
            points.set(index, B);
            var A = points.get(parent);
            if (A) {
                var _A_xyzr = _sliced_to_array(A.xyzr, 3), xx = _A_xyzr[0], yy = _A_xyzr[1], zz = _A_xyzr[2];
                // Computing distance.
                var distance = Math.sqrt((x - xx) * (x - xx) + (y - yy) * (y - yy) + (z - zz) * (z - zz));
                B.uv[1] = A.uv[1] + distance;
                maxDistance = Math.max(maxDistance, B.uv[1]);
            } else {
                // B is part of the soma
                somaPoints.push(B);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var center = new _tolokoban_tgd__rspack_import_0.TgdVec3();
    if (somaPoints.length > 0) {
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = somaPoints[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var p = _step1.value;
                center.add(p.xyzr);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
        center.scale(1 / somaPoints.length);
    }
    var inverseMaxDistance = 1 / maxDistance;
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = points.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var B1 = _step2.value;
            B1.uv[1] *= inverseMaxDistance;
            var A1 = points.get(B1.parent);
            if (A1) {
                data.add(A1.xyzr, B1.xyzr, A1.uv, B1.uv, A1.influence, B1.influence);
                var _B_xyzr = _sliced_to_array(B1.xyzr, 3), x1 = _B_xyzr[0], y1 = _B_xyzr[1], z1 = _B_xyzr[2];
                bbox.x = Math.max(bbox.x, Math.abs(center.x - x1));
                bbox.y = Math.max(bbox.y, Math.abs(center.y - y1));
                bbox.z = Math.max(bbox.z, Math.abs(center.z - z1));
            } else {
            // This point is part of the soma.
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return {
        data: data,
        center: center,
        bbox: bbox
    };
}
/**
 * Generator to iterate on each lines of a big string content.
 */ var forEachLine = function forEachLine(content) {
    var len, index, cursor;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                len = content.length;
                index = 0;
                cursor = 0;
                _state.label = 1;
            case 1:
                if (!(index > -1 && index < len)) return [
                    3,
                    3
                ];
                index = content.indexOf("\n", cursor);
                if (index < 0) return [
                    3,
                    3
                ];
                return [
                    4,
                    content.substring(cursor, index).trim()
                ];
            case 2:
                _state.sent();
                cursor = index + 1;
                return [
                    3,
                    1
                ];
            case 3:
                return [
                    2,
                    content.substring(cursor).trim()
                ];
        }
    });
};
function stripComment(line) {
    var pos = line.indexOf("#");
    if (pos < 0) return line;
    return line.substring(0, pos).trim();
}
/**
 * There are 4 real types (soma, axon, apical dendrite and basal dendrite).
 * We use a fifth one for unknown types.
 */ function normalizeType(type) {
    var factor = 1 / 5;
    switch(type){
        case 1:
            return 0.5 * factor;
        case 2:
            return 1.5 * factor;
        case 3:
            return 2.5 * factor;
        case 4:
            return 3.5 * factor;
        default:
            return 4.5 * factor;
    }
}


},
40006(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _neuron_demo__rspack_import_1 = __webpack_require__(71421);
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
        h2: "h2"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                    href: "docs/classes/TgdPainterSegments.html",
                    children: "TgdPainterSegments"
                }, undefined, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Showing a neuron"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_neuron_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c18wMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC05Mzc3YjEuYTNiZDdkOTlmNDE2OTliOS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy8wMi9fL25ldXJvbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvMDIvXy9uZXVyb24uZGVtby9uZXVyb24uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vc3djLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy8wMi9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL25ldXJvbi5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XG4gICAgXCJEZXRhaWwgIzFcIjpcbiAgICAgICAgXCIgICAgICAgIGNvbnN0IHsgZGF0YSwgY2VudGVyLCBiYm94IH0gPSBtYWtlU2VnbWVudHNEYXRhKGFzc2V0cy50ZXh0LnN3Yyk7XFxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IE1hdGgubWF4KGJib3gueCwgYmJveC55LCBiYm94LnopO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAgKiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTM7XFxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgc3BlZWRab29tOiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICogMWUtMyxcXG4gICAgICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcXG4gICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMzUsIDAuNCwgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCxcXG4gICAgICAgICAgICByb3VuZG5lc3M6IDYsXFxuICAgICAgICAgICAgbWluUmFkaXVzOiAuMixcXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSgpLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgc2VnbWVudHNdLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcbiAgICAgICAgY29udGV4dC5wYWludCgpO1wiLFxufVxuY29uc3QgRlVMTCA9XG4gICAgJ2ltcG9ydCB7XFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlclNlZ21lbnRzLFxcbiAgICBUZ2RQYWludGVyU3RhdGUsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XFxuXFxuaW1wb3J0IE5ldXJvblVSTCBmcm9tIFwiLi9BQTA2MjIuc3djXCI7XFxuaW1wb3J0IHsgbWFrZVNlZ21lbnRzRGF0YSB9IGZyb20gXCIuL3N3Y1wiO1xcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgdHJ5IHtcXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY2VudGVyLCBiYm94IH0gPSBtYWtlU2VnbWVudHNEYXRhKGFzc2V0cy50ZXh0LnN3Yyk7XFxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IE1hdGgubWF4KGJib3gueCwgYmJveC55LCBiYm94LnopO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAgKiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTM7XFxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgc3BlZWRab29tOiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICogMWUtMyxcXG4gICAgICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcXG4gICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMzUsIDAuNCwgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KTtcXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCxcXG4gICAgICAgICAgICByb3VuZG5lc3M6IDYsXFxuICAgICAgICAgICAgbWluUmFkaXVzOiAuMixcXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSgpLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgc2VnbWVudHNdLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xcbiAgICAgICAgY29udGV4dC5wYWludCgpO1xcbiAgICB9IGNhdGNoIChleCkge1xcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG5ldXJvbiBkZW1vIVwiLCBleCk7XFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBzd2M6IE5ldXJvblVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKTtcXG59XFxuJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxEZW1vIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iLCJpbXBvcnQge1xuICAgIHRnZENhbGNEZWdUb1JhZCxcbiAgICBUZ2RDb250ZXh0LFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcbiAgICBUZ2RNYXRlcmlhbERpZmZ1c2UsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJTZWdtZW50cyxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcbmltcG9ydCBWaWV3LCB7IEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG5pbXBvcnQgTmV1cm9uVVJMIGZyb20gXCIuL0FBMDYyMi5zd2NcIlxuaW1wb3J0IHsgbWFrZVNlZ21lbnRzRGF0YSB9IGZyb20gXCIuL3N3Y1wiXG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyAjYmVnaW5cbiAgICAgICAgY29uc3QgeyBkYXRhLCBjZW50ZXIsIGJib3ggfSA9IG1ha2VTZWdtZW50c0RhdGEoYXNzZXRzLnRleHQuc3djKVxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSBNYXRoLm1heChiYm94LngsIGJib3gueSwgYmJveC56KVxuICAgICAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAxMCAqIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2VcbiAgICAgICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTNcbiAgICAgICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG4gICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgICAgICAgICBzcGVlZFpvb206IGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKiAxZS0zLFxuICAgICAgICAgICAgZ2VvOiB7XG4gICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcbiAgICAgICAgICAgICAgICBtYXhMYXQ6IHRnZENhbGNEZWdUb1JhZCg2MCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMzUsIDAuNCwgMV0sXG4gICAgICAgICAgICBkZXB0aDogMSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXG4gICAgICAgICAgICByb3VuZG5lc3M6IDYsXG4gICAgICAgICAgICBtaW5SYWRpdXM6IDAuMixcbiAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKCksXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgc2VnbWVudHNdLFxuICAgICAgICB9KVxuICAgICAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVxuICAgICAgICAvLyAjZW5kXG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIG5ldXJvbiBkZW1vIVwiLCBleClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdcbiAgICAgICAgICAgIGdpem1vXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxuICAgICAgICAgICAgYXNzZXRzPXt7XG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBzd2M6IE5ldXJvblVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBBcnJheU51bWJlcjIsIEFycmF5TnVtYmVyNCwgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSwgVGdkVmVjMywgVGdkVmVjNCB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2VnbWVudHNEYXRhKHN3Yzogc3RyaW5nKToge1xuICAgIGRhdGE6IFRnZFBhaW50ZXJTZWdtZW50c0RhdGFcbiAgICBjZW50ZXI6IFRnZFZlYzNcbiAgICBiYm94OiBUZ2RWZWMzXG59IHtcbiAgICBjb25zdCBiYm94ID0gbmV3IFRnZFZlYzMoKVxuICAgIGNvbnN0IHNvbWFQb2ludHM6IFBvaW50W10gPSBbXVxuICAgIGNvbnN0IGRhdGEgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzRGF0YSgpXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IE1hcDxudW1iZXIsIFBvaW50PigpXG4gICAgbGV0IG1heERpc3RhbmNlID0gMFxuICAgIGZvciAoY29uc3QgcmF3TGluZSBvZiBmb3JFYWNoTGluZShzd2MpKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBzdHJpcENvbW1lbnQocmF3TGluZSlcbiAgICAgICAgY29uc3QgaXRlbXMgPSBsaW5lLnNwbGl0KC9cXHMrLylcbiAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA8IDcpIGNvbnRpbnVlXG5cbiAgICAgICAgY29uc3QgW2luZGV4LCB0eXBlLCB4LCB5LCB6LCByYWRpdXMsIHBhcmVudF0gPSBpdGVtcy5tYXAoKHMpID0+IE51bWJlcihzKSlcbiAgICAgICAgY29uc3QgQjogUG9pbnQgPSB7XG4gICAgICAgICAgICB4eXpyOiBbeCwgeSwgeiwgcmFkaXVzICogMC4yXSxcbiAgICAgICAgICAgIHV2OiBbbm9ybWFsaXplVHlwZSh0eXBlKSwgMF0sXG4gICAgICAgICAgICBpbmZsdWVuY2U6IGluZGV4ID09PSAwID8gMCA6IDEsXG4gICAgICAgICAgICBwYXJlbnQsXG4gICAgICAgIH1cbiAgICAgICAgcG9pbnRzLnNldChpbmRleCwgQilcbiAgICAgICAgY29uc3QgQSA9IHBvaW50cy5nZXQocGFyZW50KVxuICAgICAgICBpZiAoQSkge1xuICAgICAgICAgICAgY29uc3QgW3h4LCB5eSwgenpdID0gQS54eXpyXG4gICAgICAgICAgICAvLyBDb21wdXRpbmcgZGlzdGFuY2UuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydCgoeCAtIHh4KSAqICh4IC0geHgpICsgKHkgLSB5eSkgKiAoeSAtIHl5KSArICh6IC0genopICogKHogLSB6eikpXG4gICAgICAgICAgICBCLnV2WzFdID0gQS51dlsxXSArIGRpc3RhbmNlXG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IE1hdGgubWF4KG1heERpc3RhbmNlLCBCLnV2WzFdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQiBpcyBwYXJ0IG9mIHRoZSBzb21hXG4gICAgICAgICAgICBzb21hUG9pbnRzLnB1c2goQilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMygpXG4gICAgaWYgKHNvbWFQb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2Ygc29tYVBvaW50cykge1xuICAgICAgICAgICAgY2VudGVyLmFkZChwLnh5enIpXG4gICAgICAgIH1cbiAgICAgICAgY2VudGVyLnNjYWxlKDEgLyBzb21hUG9pbnRzLmxlbmd0aClcbiAgICB9XG4gICAgY29uc3QgaW52ZXJzZU1heERpc3RhbmNlID0gMSAvIG1heERpc3RhbmNlXG4gICAgZm9yIChjb25zdCBCIG9mIHBvaW50cy52YWx1ZXMoKSkge1xuICAgICAgICBCLnV2WzFdICo9IGludmVyc2VNYXhEaXN0YW5jZVxuICAgICAgICBjb25zdCBBID0gcG9pbnRzLmdldChCLnBhcmVudClcbiAgICAgICAgaWYgKEEpIHtcbiAgICAgICAgICAgIGRhdGEuYWRkKEEueHl6ciwgQi54eXpyLCBBLnV2LCBCLnV2LCBBLmluZmx1ZW5jZSwgQi5pbmZsdWVuY2UpXG4gICAgICAgICAgICBjb25zdCBbeCwgeSwgel0gPSBCLnh5enJcbiAgICAgICAgICAgIGJib3gueCA9IE1hdGgubWF4KGJib3gueCwgTWF0aC5hYnMoY2VudGVyLnggLSB4KSlcbiAgICAgICAgICAgIGJib3gueSA9IE1hdGgubWF4KGJib3gueSwgTWF0aC5hYnMoY2VudGVyLnkgLSB5KSlcbiAgICAgICAgICAgIGJib3gueiA9IE1hdGgubWF4KGJib3gueiwgTWF0aC5hYnMoY2VudGVyLnogLSB6KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcG9pbnQgaXMgcGFydCBvZiB0aGUgc29tYS5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBkYXRhLCBjZW50ZXIsIGJib3ggfVxufVxuXG5pbnRlcmZhY2UgUG9pbnQge1xuICAgIHh5enI6IEFycmF5TnVtYmVyNFxuICAgIHV2OiBBcnJheU51bWJlcjJcbiAgICBpbmZsdWVuY2U6IG51bWJlclxuICAgIHBhcmVudDogbnVtYmVyXG59XG5cbi8qKlxuICogR2VuZXJhdG9yIHRvIGl0ZXJhdGUgb24gZWFjaCBsaW5lcyBvZiBhIGJpZyBzdHJpbmcgY29udGVudC5cbiAqL1xuY29uc3QgZm9yRWFjaExpbmUgPSBmdW5jdGlvbiogKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGxlbiA9IGNvbnRlbnQubGVuZ3RoXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBjdXJzb3IgPSAwXG4gICAgd2hpbGUgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBsZW4pIHtcbiAgICAgICAgaW5kZXggPSBjb250ZW50LmluZGV4T2YoXCJcXG5cIiwgY3Vyc29yKVxuICAgICAgICBpZiAoaW5kZXggPCAwKSBicmVha1xuXG4gICAgICAgIHlpZWxkIGNvbnRlbnQuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpLnRyaW0oKVxuICAgICAgICBjdXJzb3IgPSBpbmRleCArIDFcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnQuc3Vic3RyaW5nKGN1cnNvcikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHN0cmlwQ29tbWVudChsaW5lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBvcyA9IGxpbmUuaW5kZXhPZihcIiNcIilcbiAgICBpZiAocG9zIDwgMCkgcmV0dXJuIGxpbmVcblxuICAgIHJldHVybiBsaW5lLnN1YnN0cmluZygwLCBwb3MpLnRyaW0oKVxufVxuXG4vKipcbiAqIFRoZXJlIGFyZSA0IHJlYWwgdHlwZXMgKHNvbWEsIGF4b24sIGFwaWNhbCBkZW5kcml0ZSBhbmQgYmFzYWwgZGVuZHJpdGUpLlxuICogV2UgdXNlIGEgZmlmdGggb25lIGZvciB1bmtub3duIHR5cGVzLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVUeXBlKHR5cGU6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgZmFjdG9yID0gMSAvIDVcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIDAuNSAqIGZhY3RvclxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMS41ICogZmFjdG9yXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAyLjUgKiBmYWN0b3JcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIDMuNSAqIGZhY3RvclxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDQuNSAqIGZhY3RvclxuICAgIH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY0RlZ1RvUmFkIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclNlZ21lbnRzIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJOZXVyb25VUkwiLCJtYWtlU2VnbWVudHNEYXRhIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfbWFrZVNlZ21lbnRzRGF0YSIsImRhdGEiLCJjZW50ZXIiLCJiYm94IiwiTWF0aCIsImNsZWFyIiwic2VnbWVudHMiLCJzdGF0ZSIsImV4IiwiY29uc29sZSIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJUZ2RWZWMzIiwic3djIiwic29tYVBvaW50cyIsInBvaW50cyIsIk1hcCIsIm1heERpc3RhbmNlIiwiX2l0ZXJhdG9yRXJyb3IiLCJmb3JFYWNoTGluZSIsInJhd0xpbmUiLCJsaW5lIiwic3RyaXBDb21tZW50IiwiaXRlbXMiLCJfaXRlbXNfbWFwIiwicyIsIk51bWJlciIsImluZGV4IiwidHlwZSIsIngiLCJ5IiwieiIsInJhZGl1cyIsInBhcmVudCIsIkIiLCJub3JtYWxpemVUeXBlIiwiQSIsIl9BX3h5enIiLCJ4eCIsInl5IiwienoiLCJkaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yMSIsInAiLCJpbnZlcnNlTWF4RGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvcjIiLCJCMSIsIkExIiwiX0JfeHl6ciIsIngxIiwieTEiLCJ6MSIsImNvbnRlbnQiLCJsZW4iLCJjdXJzb3IiLCJwb3MiLCJmYWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN3QjtBQUNpQjtBQUNXO0FBQ3JCO0FB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