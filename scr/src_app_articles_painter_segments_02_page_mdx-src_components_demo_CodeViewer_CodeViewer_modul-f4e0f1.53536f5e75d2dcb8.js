"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_painter_segments_02_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-f4e0f1"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/neuron.demo.tsx",
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                    lineNumber: 3,
                    columnNumber: 3
                }, this)
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h2, {
                children: "Showing a neuron"
            }, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_neuron_demo__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c18wMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1mNGUwZjEuNTM1MzZmNWU3NWQyZGNiOC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vbmV1cm9uLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vc3djLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9uZXVyb24uZGVtb1wiXG5cbmNvbnN0IEZPQ1VTID0ge1xuICAgIFwiRGV0YWlsICMxXCI6XG4gICAgICAgIFwiICAgICAgICBjb25zdCB7IGRhdGEsIGNlbnRlciwgYmJveCB9ID0gbWFrZVNlZ21lbnRzRGF0YShhc3NldHMudGV4dC5zd2MpO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlcjtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSBNYXRoLm1heChiYm94LngsIGJib3gueSwgYmJveC56KTtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDEwICogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZTtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0zO1xcbiAgICAgICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIHNwZWVkWm9vbTogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSAqIDFlLTMsXFxuICAgICAgICAgICAgZ2VvOiB7XFxuICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC02MCksXFxuICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDYwKSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjM1LCAwLjQsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXFxuICAgICAgICAgICAgcm91bmRuZXNzOiA2LFxcbiAgICAgICAgICAgIG1pblJhZGl1czogLjIsXFxuICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoKSxcXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKTtcIixcbn1cbmNvbnN0IEZVTEwgPVxuICAgICdpbXBvcnQge1xcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXFxuICAgIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50cyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XFxuaW1wb3J0IFZpZXcsIHsgQXNzZXRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xcblxcbmltcG9ydCBOZXVyb25VUkwgZnJvbSBcIi4vQUEwNjIyLnN3Y1wiO1xcbmltcG9ydCB7IG1ha2VTZWdtZW50c0RhdGEgfSBmcm9tIFwiLi9zd2NcIjtcXG5cXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XFxuICAgIHRyeSB7XFxuICAgICAgICBjb25zdCB7IGRhdGEsIGNlbnRlciwgYmJveCB9ID0gbWFrZVNlZ21lbnRzRGF0YShhc3NldHMudGV4dC5zd2MpO1xcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlcjtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSBNYXRoLm1heChiYm94LngsIGJib3gueSwgYmJveC56KTtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDEwICogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZTtcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0zO1xcbiAgICAgICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIHNwZWVkWm9vbTogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSAqIDFlLTMsXFxuICAgICAgICAgICAgZ2VvOiB7XFxuICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC02MCksXFxuICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDYwKSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjM1LCAwLjQsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSk7XFxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXFxuICAgICAgICAgICAgcm91bmRuZXNzOiA2LFxcbiAgICAgICAgICAgIG1pblJhZGl1czogLjIsXFxuICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoKSxcXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcXG4gICAgICAgIH0pO1xcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKTtcXG4gICAgfSBjYXRjaCAoZXgpIHtcXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBuZXVyb24gZGVtbyFcIiwgZXgpO1xcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICAgICAgc3djOiBOZXVyb25VUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgICk7XFxufVxcbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8RGVtbyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHtcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXG4gICAgVGdkUGFpbnRlclN0YXRlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5pbXBvcnQgVmlldywgeyBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxuaW1wb3J0IE5ldXJvblVSTCBmcm9tIFwiLi9BQTA2MjIuc3djXCJcbmltcG9ydCB7IG1ha2VTZWdtZW50c0RhdGEgfSBmcm9tIFwiLi9zd2NcIlxuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gI2JlZ2luXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY2VudGVyLCBiYm94IH0gPSBtYWtlU2VnbWVudHNEYXRhKGFzc2V0cy50ZXh0LnN3YylcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gTWF0aC5tYXgoYmJveC54LCBiYm94LnksIGJib3gueilcbiAgICAgICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAgKiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0zXG4gICAgICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xuICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgICAgICAgICAgc3BlZWRab29tOiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICogMWUtMyxcbiAgICAgICAgICAgIGdlbzoge1xuICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC02MCksXG4gICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjM1LCAwLjQsIDFdLFxuICAgICAgICAgICAgZGVwdGg6IDEsXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XG4gICAgICAgICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0LFxuICAgICAgICAgICAgcm91bmRuZXNzOiA2LFxuICAgICAgICAgICAgbWluUmFkaXVzOiAwLjIsXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSgpLFxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxuICAgICAgICBjb250ZXh0LnBhaW50KClcbiAgICAgICAgLy8gI2VuZFxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBuZXVyb24gZGVtbyFcIiwgZXgpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3XG4gICAgICAgICAgICBnaXptb1xuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cbiAgICAgICAgICAgIGFzc2V0cz17e1xuICAgICAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3djOiBOZXVyb25VUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgQXJyYXlOdW1iZXIyLCBBcnJheU51bWJlcjQsIFRnZFBhaW50ZXJTZWdtZW50c0RhdGEsIFRnZFZlYzMsIFRnZFZlYzQgfSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlZ21lbnRzRGF0YShzd2M6IHN0cmluZyk6IHtcbiAgICBkYXRhOiBUZ2RQYWludGVyU2VnbWVudHNEYXRhXG4gICAgY2VudGVyOiBUZ2RWZWMzXG4gICAgYmJveDogVGdkVmVjM1xufSB7XG4gICAgY29uc3QgYmJveCA9IG5ldyBUZ2RWZWMzKClcbiAgICBjb25zdCBzb21hUG9pbnRzOiBQb2ludFtdID0gW11cbiAgICBjb25zdCBkYXRhID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKVxuICAgIGNvbnN0IHBvaW50cyA9IG5ldyBNYXA8bnVtYmVyLCBQb2ludD4oKVxuICAgIGxldCBtYXhEaXN0YW5jZSA9IDBcbiAgICBmb3IgKGNvbnN0IHJhd0xpbmUgb2YgZm9yRWFjaExpbmUoc3djKSkge1xuICAgICAgICBjb25zdCBsaW5lID0gc3RyaXBDb21tZW50KHJhd0xpbmUpXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gbGluZS5zcGxpdCgvXFxzKy8pXG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPCA3KSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IFtpbmRleCwgdHlwZSwgeCwgeSwgeiwgcmFkaXVzLCBwYXJlbnRdID0gaXRlbXMubWFwKChzKSA9PiBOdW1iZXIocykpXG4gICAgICAgIGNvbnN0IEI6IFBvaW50ID0ge1xuICAgICAgICAgICAgeHl6cjogW3gsIHksIHosIHJhZGl1cyAqIDAuMl0sXG4gICAgICAgICAgICB1djogW25vcm1hbGl6ZVR5cGUodHlwZSksIDBdLFxuICAgICAgICAgICAgaW5mbHVlbmNlOiBpbmRleCA9PT0gMCA/IDAgOiAxLFxuICAgICAgICAgICAgcGFyZW50LFxuICAgICAgICB9XG4gICAgICAgIHBvaW50cy5zZXQoaW5kZXgsIEIpXG4gICAgICAgIGNvbnN0IEEgPSBwb2ludHMuZ2V0KHBhcmVudClcbiAgICAgICAgaWYgKEEpIHtcbiAgICAgICAgICAgIGNvbnN0IFt4eCwgeXksIHp6XSA9IEEueHl6clxuICAgICAgICAgICAgLy8gQ29tcHV0aW5nIGRpc3RhbmNlLlxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoKHggLSB4eCkgKiAoeCAtIHh4KSArICh5IC0geXkpICogKHkgLSB5eSkgKyAoeiAtIHp6KSAqICh6IC0genopKVxuICAgICAgICAgICAgQi51dlsxXSA9IEEudXZbMV0gKyBkaXN0YW5jZVxuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSBNYXRoLm1heChtYXhEaXN0YW5jZSwgQi51dlsxXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEIgaXMgcGFydCBvZiB0aGUgc29tYVxuICAgICAgICAgICAgc29tYVBvaW50cy5wdXNoKEIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2VudGVyID0gbmV3IFRnZFZlYzMoKVxuICAgIGlmIChzb21hUG9pbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHNvbWFQb2ludHMpIHtcbiAgICAgICAgICAgIGNlbnRlci5hZGQocC54eXpyKVxuICAgICAgICB9XG4gICAgICAgIGNlbnRlci5zY2FsZSgxIC8gc29tYVBvaW50cy5sZW5ndGgpXG4gICAgfVxuICAgIGNvbnN0IGludmVyc2VNYXhEaXN0YW5jZSA9IDEgLyBtYXhEaXN0YW5jZVxuICAgIGZvciAoY29uc3QgQiBvZiBwb2ludHMudmFsdWVzKCkpIHtcbiAgICAgICAgQi51dlsxXSAqPSBpbnZlcnNlTWF4RGlzdGFuY2VcbiAgICAgICAgY29uc3QgQSA9IHBvaW50cy5nZXQoQi5wYXJlbnQpXG4gICAgICAgIGlmIChBKSB7XG4gICAgICAgICAgICBkYXRhLmFkZChBLnh5enIsIEIueHl6ciwgQS51diwgQi51diwgQS5pbmZsdWVuY2UsIEIuaW5mbHVlbmNlKVxuICAgICAgICAgICAgY29uc3QgW3gsIHksIHpdID0gQi54eXpyXG4gICAgICAgICAgICBiYm94LnggPSBNYXRoLm1heChiYm94LngsIE1hdGguYWJzKGNlbnRlci54IC0geCkpXG4gICAgICAgICAgICBiYm94LnkgPSBNYXRoLm1heChiYm94LnksIE1hdGguYWJzKGNlbnRlci55IC0geSkpXG4gICAgICAgICAgICBiYm94LnogPSBNYXRoLm1heChiYm94LnosIE1hdGguYWJzKGNlbnRlci56IC0geikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGlzIHBvaW50IGlzIHBhcnQgb2YgdGhlIHNvbWEuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZGF0YSwgY2VudGVyLCBiYm94IH1cbn1cblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4eXpyOiBBcnJheU51bWJlcjRcbiAgICB1djogQXJyYXlOdW1iZXIyXG4gICAgaW5mbHVlbmNlOiBudW1iZXJcbiAgICBwYXJlbnQ6IG51bWJlclxufVxuXG4vKipcbiAqIEdlbmVyYXRvciB0byBpdGVyYXRlIG9uIGVhY2ggbGluZXMgb2YgYSBiaWcgc3RyaW5nIGNvbnRlbnQuXG4gKi9cbmNvbnN0IGZvckVhY2hMaW5lID0gZnVuY3Rpb24qIChjb250ZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBsZW4gPSBjb250ZW50Lmxlbmd0aFxuICAgIGxldCBpbmRleCA9IDBcbiAgICBsZXQgY3Vyc29yID0gMFxuICAgIHdoaWxlIChpbmRleCA+IC0xICYmIGluZGV4IDwgbGVuKSB7XG4gICAgICAgIGluZGV4ID0gY29udGVudC5pbmRleE9mKFwiXFxuXCIsIGN1cnNvcilcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgYnJlYWtcblxuICAgICAgICB5aWVsZCBjb250ZW50LnN1YnN0cmluZyhjdXJzb3IsIGluZGV4KS50cmltKClcbiAgICAgICAgY3Vyc29yID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiBjb250ZW50LnN1YnN0cmluZyhjdXJzb3IpLnRyaW0oKVxufVxuXG5mdW5jdGlvbiBzdHJpcENvbW1lbnQobGluZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBwb3MgPSBsaW5lLmluZGV4T2YoXCIjXCIpXG4gICAgaWYgKHBvcyA8IDApIHJldHVybiBsaW5lXG5cbiAgICByZXR1cm4gbGluZS5zdWJzdHJpbmcoMCwgcG9zKS50cmltKClcbn1cblxuLyoqXG4gKiBUaGVyZSBhcmUgNCByZWFsIHR5cGVzIChzb21hLCBheG9uLCBhcGljYWwgZGVuZHJpdGUgYW5kIGJhc2FsIGRlbmRyaXRlKS5cbiAqIFdlIHVzZSBhIGZpZnRoIG9uZSBmb3IgdW5rbm93biB0eXBlcy5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IGZhY3RvciA9IDEgLyA1XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAwLjUgKiBmYWN0b3JcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDEuNSAqIGZhY3RvclxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gMi41ICogZmFjdG9yXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiAzLjUgKiBmYWN0b3JcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA0LjUgKiBmYWN0b3JcbiAgICB9XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsInRnZENhbGNEZWdUb1JhZCIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZE1hdGVyaWFsRGlmZnVzZSIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTZWdtZW50cyIsIlRnZFBhaW50ZXJTdGF0ZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiTmV1cm9uVVJMIiwibWFrZVNlZ21lbnRzRGF0YSIsImluaXQiLCJjb250ZXh0IiwiYXNzZXRzIiwiX21ha2VTZWdtZW50c0RhdGEiLCJkYXRhIiwiY2VudGVyIiwiYmJveCIsIk1hdGgiLCJjbGVhciIsInNlZ21lbnRzIiwic3RhdGUiLCJleCIsImNvbnNvbGUiLCJUZ2RQYWludGVyU2VnbWVudHNEYXRhIiwiVGdkVmVjMyIsInN3YyIsInNvbWFQb2ludHMiLCJwb2ludHMiLCJNYXAiLCJtYXhEaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yIiwiZm9yRWFjaExpbmUiLCJyYXdMaW5lIiwibGluZSIsInN0cmlwQ29tbWVudCIsIml0ZW1zIiwiX2l0ZW1zX21hcCIsInMiLCJOdW1iZXIiLCJpbmRleCIsInR5cGUiLCJ4IiwieSIsInoiLCJyYWRpdXMiLCJwYXJlbnQiLCJCIiwibm9ybWFsaXplVHlwZSIsIkEiLCJfQV94eXpyIiwieHgiLCJ5eSIsInp6IiwiZGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvcjEiLCJwIiwiaW52ZXJzZU1heERpc3RhbmNlIiwiX2l0ZXJhdG9yRXJyb3IyIiwiQjEiLCJBMSIsIl9CX3h5enIiLCJ4MSIsInkxIiwiejEiLCJjb250ZW50IiwibGVuIiwiY3Vyc29yIiwicG9zIiwiZmFjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNyQjtBQUVoQyxJ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