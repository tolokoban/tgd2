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
    "Detail #1": "        const { data, center, bbox } = makeSegmentsData(assets.text.swc)\n        context.camera.transfo.position = center\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z)\n        context.camera.far = 10 * context.camera.transfo.distance\n        context.camera.near = 1e-3\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        })\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        })\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: 0.2,\n            material: new TgdMaterialDiffuse(),\n        })\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        })\n        context.add(clear, state)\n        context.paint()"
};
var FULL = 'import {\n    tgdCalcDegToRad,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialDiffuse,\n    TgdPainterClear,\n    TgdPainterSegments,\n    TgdPainterState,\n    webglPresetDepth,\n} from "@tolokoban/tgd"\nimport View, { type Assets } from "@/components/demo/Tgd"\n\nimport NeuronURL from "./AA0622.swc"\nimport { makeSegmentsData } from "./swc"\n\nfunction init(context: TgdContext, assets: Assets) {\n    try {\n        const { data, center, bbox } = makeSegmentsData(assets.text.swc)\n        context.camera.transfo.position = center\n        context.camera.transfo.distance = Math.max(bbox.x, bbox.y, bbox.z)\n        context.camera.far = 10 * context.camera.transfo.distance\n        context.camera.near = 1e-3\n        new TgdControllerCameraOrbit(context, {\n            inertiaOrbit: 1000,\n            speedZoom: context.camera.transfo.distance * 1e-3,\n            geo: {\n                minLat: tgdCalcDegToRad(-60),\n                maxLat: tgdCalcDegToRad(60),\n            },\n        })\n        const clear = new TgdPainterClear(context, {\n            color: [0.3, 0.35, 0.4, 1],\n            depth: 1,\n        })\n        const segments = new TgdPainterSegments(context, {\n            dataset: data.makeDataset,\n            roundness: 6,\n            minRadius: 0.2,\n            material: new TgdMaterialDiffuse(),\n        })\n        const state = new TgdPainterState(context, {\n            depth: webglPresetDepth.less,\n            children: [clear, segments],\n        })\n        context.add(clear, state)\n        context.paint()\n    } catch (ex) {\n        console.error("Error in neuron demo!", ex)\n    }\n}\n\nexport default function Demo() {\n    return (\n        <View\n            gizmo\n            onReady={init}\n            assets={{\n                text: {\n                    swc: NeuronURL,\n                },\n            }}\n        />\n    )\n}\n';
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_neuron_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                lineNumber: 23,
                columnNumber: 4
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
        columnNumber: 3
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c18wMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1mNGUwZjEuODhkOTQ3NDZkODIxY2YxZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy8wMi9fL25ldXJvbi5kZW1vL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL3BhaW50ZXIvc2VnbWVudHMvMDIvXy9uZXVyb24uZGVtby9uZXVyb24uZGVtby50c3giLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vc3djLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvcGFpbnRlci9zZWdtZW50cy8wMi9wYWdlLm1keCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiO1xuaW1wb3J0IENvZGVWaWV3ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL0NvZGVWaWV3ZXJcIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL25ldXJvbi5kZW1vXCI7XG5cbmNvbnN0IEZPQ1VTID0ge1xuXHRcIkRldGFpbCAjMVwiOlxuXHRcdFwiICAgICAgICBjb25zdCB7IGRhdGEsIGNlbnRlciwgYmJveCB9ID0gbWFrZVNlZ21lbnRzRGF0YShhc3NldHMudGV4dC5zd2MpXFxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyXFxuICAgICAgICBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlID0gTWF0aC5tYXgoYmJveC54LCBiYm94LnksIGJib3gueilcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLmZhciA9IDEwICogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZVxcbiAgICAgICAgY29udGV4dC5jYW1lcmEubmVhciA9IDFlLTNcXG4gICAgICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY29udGV4dCwge1xcbiAgICAgICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgICAgICAgICBzcGVlZFpvb206IGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKiAxZS0zLFxcbiAgICAgICAgICAgIGdlbzoge1xcbiAgICAgICAgICAgICAgICBtaW5MYXQ6IHRnZENhbGNEZWdUb1JhZCgtNjApLFxcbiAgICAgICAgICAgICAgICBtYXhMYXQ6IHRnZENhbGNEZWdUb1JhZCg2MCksXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xcbiAgICAgICAgICAgIGNvbG9yOiBbMC4zLCAwLjM1LCAwLjQsIDFdLFxcbiAgICAgICAgICAgIGRlcHRoOiAxLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IHNlZ21lbnRzID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50cyhjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCxcXG4gICAgICAgICAgICByb3VuZG5lc3M6IDYsXFxuICAgICAgICAgICAgbWluUmFkaXVzOiAwLjIsXFxuICAgICAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoKSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICAgICAgY2hpbGRyZW46IFtjbGVhciwgc2VnbWVudHNdLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSlcXG4gICAgICAgIGNvbnRleHQucGFpbnQoKVwiLFxufTtcbmNvbnN0IEZVTEwgPVxuXHQnaW1wb3J0IHtcXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxcbiAgICB0eXBlIFRnZENvbnRleHQsXFxuICAgIFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcXG4gICAgVGdkTWF0ZXJpYWxEaWZmdXNlLFxcbiAgICBUZ2RQYWludGVyQ2xlYXIsXFxuICAgIFRnZFBhaW50ZXJTZWdtZW50cyxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCJcXG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxcblxcbmltcG9ydCBOZXVyb25VUkwgZnJvbSBcIi4vQUEwNjIyLnN3Y1wiXFxuaW1wb3J0IHsgbWFrZVNlZ21lbnRzRGF0YSB9IGZyb20gXCIuL3N3Y1wiXFxuXFxuZnVuY3Rpb24gaW5pdChjb250ZXh0OiBUZ2RDb250ZXh0LCBhc3NldHM6IEFzc2V0cykge1xcbiAgICB0cnkge1xcbiAgICAgICAgY29uc3QgeyBkYXRhLCBjZW50ZXIsIGJib3ggfSA9IG1ha2VTZWdtZW50c0RhdGEoYXNzZXRzLnRleHQuc3djKVxcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IE1hdGgubWF4KGJib3gueCwgYmJveC55LCBiYm94LnopXFxuICAgICAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAxMCAqIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2VcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0zXFxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgc3BlZWRab29tOiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICogMWUtMyxcXG4gICAgICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcXG4gICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zNSwgMC40LCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXFxuICAgICAgICAgICAgcm91bmRuZXNzOiA2LFxcbiAgICAgICAgICAgIG1pblJhZGl1czogMC4yLFxcbiAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKCksXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcXG4gICAgfSBjYXRjaCAoZXgpIHtcXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBuZXVyb24gZGVtbyFcIiwgZXgpXFxuICAgIH1cXG59XFxuXFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICAgIDxWaWV3XFxuICAgICAgICAgICAgZ2l6bW9cXG4gICAgICAgICAgICBvblJlYWR5PXtpbml0fVxcbiAgICAgICAgICAgIGFzc2V0cz17e1xcbiAgICAgICAgICAgICAgICB0ZXh0OiB7XFxuICAgICAgICAgICAgICAgICAgICBzd2M6IE5ldXJvblVSTCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgKVxcbn1cXG4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuXHRjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+XG5cdFx0XHRcdDxEZW1vIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cblx0XHRcdFx0XHRcdHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuXHRcdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHRnZENhbGNEZWdUb1JhZCxcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG5cdFRnZE1hdGVyaWFsRGlmZnVzZSxcblx0VGdkUGFpbnRlckNsZWFyLFxuXHRUZ2RQYWludGVyU2VnbWVudHMsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgVmlldywgeyB0eXBlIEFzc2V0cyB9IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIjtcblxuaW1wb3J0IE5ldXJvblVSTCBmcm9tIFwiLi9BQTA2MjIuc3djXCI7XG5pbXBvcnQgeyBtYWtlU2VnbWVudHNEYXRhIH0gZnJvbSBcIi4vc3djXCI7XG5cbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcblx0dHJ5IHtcblx0XHQvLyAjYmVnaW5cblx0XHRjb25zdCB7IGRhdGEsIGNlbnRlciwgYmJveCB9ID0gbWFrZVNlZ21lbnRzRGF0YShhc3NldHMudGV4dC5zd2MpO1xuXHRcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXI7XG5cdFx0Y29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IE1hdGgubWF4KGJib3gueCwgYmJveC55LCBiYm94LnopO1xuXHRcdGNvbnRleHQuY2FtZXJhLmZhciA9IDEwICogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZTtcblx0XHRjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtMztcblx0XHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHRcdHNwZWVkWm9vbTogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSAqIDFlLTMsXG5cdFx0XHRnZW86IHtcblx0XHRcdFx0bWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcblx0XHRcdFx0bWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0Y29sb3I6IFswLjMsIDAuMzUsIDAuNCwgMV0sXG5cdFx0XHRkZXB0aDogMSxcblx0XHR9KTtcblx0XHRjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xuXHRcdFx0ZGF0YXNldDogZGF0YS5tYWtlRGF0YXNldCxcblx0XHRcdHJvdW5kbmVzczogNixcblx0XHRcdG1pblJhZGl1czogMC4yLFxuXHRcdFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbERpZmZ1c2UoKSxcblx0XHR9KTtcblx0XHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY29udGV4dCwge1xuXHRcdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRcdGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcblx0XHR9KTtcblx0XHRjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpO1xuXHRcdGNvbnRleHQucGFpbnQoKTtcblx0XHQvLyAjZW5kXG5cdH0gY2F0Y2ggKGV4KSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGluIG5ldXJvbiBkZW1vIVwiLCBleCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtbygpIHtcblx0cmV0dXJuIChcblx0XHQ8Vmlld1xuXHRcdFx0Z2l6bW9cblx0XHRcdG9uUmVhZHk9e2luaXR9XG5cdFx0XHRhc3NldHM9e3tcblx0XHRcdFx0dGV4dDoge1xuXHRcdFx0XHRcdHN3YzogTmV1cm9uVVJMLFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjIsXG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHRUZ2RQYWludGVyU2VnbWVudHNEYXRhLFxuXHRUZ2RWZWMzLFxuXHRUZ2RWZWM0LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTZWdtZW50c0RhdGEoc3djOiBzdHJpbmcpOiB7XG5cdGRhdGE6IFRnZFBhaW50ZXJTZWdtZW50c0RhdGE7XG5cdGNlbnRlcjogVGdkVmVjMztcblx0YmJveDogVGdkVmVjMztcbn0ge1xuXHRjb25zdCBiYm94ID0gbmV3IFRnZFZlYzMoKTtcblx0Y29uc3Qgc29tYVBvaW50czogUG9pbnRbXSA9IFtdO1xuXHRjb25zdCBkYXRhID0gbmV3IFRnZFBhaW50ZXJTZWdtZW50c0RhdGEoKTtcblx0Y29uc3QgcG9pbnRzID0gbmV3IE1hcDxudW1iZXIsIFBvaW50PigpO1xuXHRsZXQgbWF4RGlzdGFuY2UgPSAwO1xuXHRmb3IgKGNvbnN0IHJhd0xpbmUgb2YgZm9yRWFjaExpbmUoc3djKSkge1xuXHRcdGNvbnN0IGxpbmUgPSBzdHJpcENvbW1lbnQocmF3TGluZSk7XG5cdFx0Y29uc3QgaXRlbXMgPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCA8IDcpIGNvbnRpbnVlO1xuXG5cdFx0Y29uc3QgW2luZGV4LCB0eXBlLCB4LCB5LCB6LCByYWRpdXMsIHBhcmVudF0gPSBpdGVtcy5tYXAoKHMpID0+IE51bWJlcihzKSk7XG5cdFx0Y29uc3QgQjogUG9pbnQgPSB7XG5cdFx0XHR4eXpyOiBbeCwgeSwgeiwgcmFkaXVzICogMC4yXSxcblx0XHRcdHV2OiBbbm9ybWFsaXplVHlwZSh0eXBlKSwgMF0sXG5cdFx0XHRpbmZsdWVuY2U6IGluZGV4ID09PSAwID8gMCA6IDEsXG5cdFx0XHRwYXJlbnQsXG5cdFx0fTtcblx0XHRwb2ludHMuc2V0KGluZGV4LCBCKTtcblx0XHRjb25zdCBBID0gcG9pbnRzLmdldChwYXJlbnQpO1xuXHRcdGlmIChBKSB7XG5cdFx0XHRjb25zdCBbeHgsIHl5LCB6el0gPSBBLnh5enI7XG5cdFx0XHQvLyBDb21wdXRpbmcgZGlzdGFuY2UuXG5cdFx0XHRjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcblx0XHRcdFx0KHggLSB4eCkgKiAoeCAtIHh4KSArICh5IC0geXkpICogKHkgLSB5eSkgKyAoeiAtIHp6KSAqICh6IC0genopLFxuXHRcdFx0KTtcblx0XHRcdEIudXZbMV0gPSBBLnV2WzFdICsgZGlzdGFuY2U7XG5cdFx0XHRtYXhEaXN0YW5jZSA9IE1hdGgubWF4KG1heERpc3RhbmNlLCBCLnV2WzFdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQiBpcyBwYXJ0IG9mIHRoZSBzb21hXG5cdFx0XHRzb21hUG9pbnRzLnB1c2goQik7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGNlbnRlciA9IG5ldyBUZ2RWZWMzKCk7XG5cdGlmIChzb21hUG9pbnRzLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGNvbnN0IHAgb2Ygc29tYVBvaW50cykge1xuXHRcdFx0Y2VudGVyLmFkZChwLnh5enIpO1xuXHRcdH1cblx0XHRjZW50ZXIuc2NhbGUoMSAvIHNvbWFQb2ludHMubGVuZ3RoKTtcblx0fVxuXHRjb25zdCBpbnZlcnNlTWF4RGlzdGFuY2UgPSAxIC8gbWF4RGlzdGFuY2U7XG5cdGZvciAoY29uc3QgQiBvZiBwb2ludHMudmFsdWVzKCkpIHtcblx0XHRCLnV2WzFdICo9IGludmVyc2VNYXhEaXN0YW5jZTtcblx0XHRjb25zdCBBID0gcG9pbnRzLmdldChCLnBhcmVudCk7XG5cdFx0aWYgKEEpIHtcblx0XHRcdGRhdGEuYWRkKEEueHl6ciwgQi54eXpyLCBBLnV2LCBCLnV2LCBBLmluZmx1ZW5jZSwgQi5pbmZsdWVuY2UpO1xuXHRcdFx0Y29uc3QgW3gsIHksIHpdID0gQi54eXpyO1xuXHRcdFx0YmJveC54ID0gTWF0aC5tYXgoYmJveC54LCBNYXRoLmFicyhjZW50ZXIueCAtIHgpKTtcblx0XHRcdGJib3gueSA9IE1hdGgubWF4KGJib3gueSwgTWF0aC5hYnMoY2VudGVyLnkgLSB5KSk7XG5cdFx0XHRiYm94LnogPSBNYXRoLm1heChiYm94LnosIE1hdGguYWJzKGNlbnRlci56IC0geikpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBUaGlzIHBvaW50IGlzIHBhcnQgb2YgdGhlIHNvbWEuXG5cdFx0fVxuXHR9XG5cdHJldHVybiB7IGRhdGEsIGNlbnRlciwgYmJveCB9O1xufVxuXG5pbnRlcmZhY2UgUG9pbnQge1xuXHR4eXpyOiBBcnJheU51bWJlcjQ7XG5cdHV2OiBBcnJheU51bWJlcjI7XG5cdGluZmx1ZW5jZTogbnVtYmVyO1xuXHRwYXJlbnQ6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBHZW5lcmF0b3IgdG8gaXRlcmF0ZSBvbiBlYWNoIGxpbmVzIG9mIGEgYmlnIHN0cmluZyBjb250ZW50LlxuICovXG5jb25zdCBmb3JFYWNoTGluZSA9IGZ1bmN0aW9uKiAoY29udGVudDogc3RyaW5nKSB7XG5cdGNvbnN0IGxlbiA9IGNvbnRlbnQubGVuZ3RoO1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgY3Vyc29yID0gMDtcblx0d2hpbGUgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBsZW4pIHtcblx0XHRpbmRleCA9IGNvbnRlbnQuaW5kZXhPZihcIlxcblwiLCBjdXJzb3IpO1xuXHRcdGlmIChpbmRleCA8IDApIGJyZWFrO1xuXG5cdFx0eWllbGQgY29udGVudC5zdWJzdHJpbmcoY3Vyc29yLCBpbmRleCkudHJpbSgpO1xuXHRcdGN1cnNvciA9IGluZGV4ICsgMTtcblx0fVxuXHRyZXR1cm4gY29udGVudC5zdWJzdHJpbmcoY3Vyc29yKS50cmltKCk7XG59O1xuXG5mdW5jdGlvbiBzdHJpcENvbW1lbnQobGluZTogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgcG9zID0gbGluZS5pbmRleE9mKFwiI1wiKTtcblx0aWYgKHBvcyA8IDApIHJldHVybiBsaW5lO1xuXG5cdHJldHVybiBsaW5lLnN1YnN0cmluZygwLCBwb3MpLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBUaGVyZSBhcmUgNCByZWFsIHR5cGVzIChzb21hLCBheG9uLCBhcGljYWwgZGVuZHJpdGUgYW5kIGJhc2FsIGRlbmRyaXRlKS5cbiAqIFdlIHVzZSBhIGZpZnRoIG9uZSBmb3IgdW5rbm93biB0eXBlcy5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVHlwZSh0eXBlOiBudW1iZXIpOiBudW1iZXIge1xuXHRjb25zdCBmYWN0b3IgPSAxIC8gNTtcblx0c3dpdGNoICh0eXBlKSB7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIDAuNSAqIGZhY3Rvcjtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gMS41ICogZmFjdG9yO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiAyLjUgKiBmYWN0b3I7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIDMuNSAqIGZhY3Rvcjtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIDQuNSAqIGZhY3Rvcjtcblx0fVxufVxuIiwiIiwiLyoqXG4gKiBAaW1wb3J0IHtNRFhDb21wb25lbnRzfSBmcm9tICdtZHgvdHlwZXMuanMnXG4gKiBAaW1wb3J0IHtDb21wb25lbnQsIFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCdcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBNZXJnZUNvbXBvbmVudHNcbiAqICAgQ3VzdG9tIG1lcmdlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gY3VycmVudENvbXBvbmVudHNcbiAqICAgQ3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzLlxuICpcbiAqIEB0eXBlZGVmIFByb3BzXG4gKiAgIENvbmZpZ3VyYXRpb24gZm9yIGBNRFhQcm92aWRlcmAuXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZSB8IG51bGwgfCB1bmRlZmluZWR9IFtjaGlsZHJlbl1cbiAqICAgQ2hpbGRyZW4gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbZGlzYWJsZVBhcmVudENvbnRleHQ9ZmFsc2VdXG4gKiAgIFR1cm4gb2ZmIG91dGVyIGNvbXBvbmVudCBjb250ZXh0IChkZWZhdWx0OiBgZmFsc2VgKS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG5jb25zdCBlbXB0eUNvbXBvbmVudHMgPSB7fVxuXG5jb25zdCBNRFhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChlbXB0eUNvbXBvbmVudHMpXG5cbi8qKlxuICogR2V0IGN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBNRFggQ29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICBjb25zdCBjb250ZXh0Q29tcG9uZW50cyA9IFJlYWN0LnVzZUNvbnRleHQoTURYQ29udGV4dClcblxuICAvLyBNZW1vaXplIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHRvcC1sZXZlbCBjb250ZXh0IGNoYW5nZXNcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ3VzdG9tIG1lcmdlIHZpYSBhIGZ1bmN0aW9uIHByb3BcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cyhjb250ZXh0Q29tcG9uZW50cylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsuLi5jb250ZXh0Q29tcG9uZW50cywgLi4uY29tcG9uZW50c31cbiAgICB9LFxuICAgIFtjb250ZXh0Q29tcG9uZW50cywgY29tcG9uZW50c11cbiAgKVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBNRFggY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PFByb3BzPn0gcHJvcGVydGllc1xuICogICBQcm9wZXJ0aWVzLlxuICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAqICAgRWxlbWVudC5cbiAqIEBzYXRpc2ZpZXMge0NvbXBvbmVudH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1EWFByb3ZpZGVyKHByb3BlcnRpZXMpIHtcbiAgLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbiAgbGV0IGFsbENvbXBvbmVudHNcblxuICBpZiAocHJvcGVydGllcy5kaXNhYmxlUGFyZW50Q29udGV4dCkge1xuICAgIGFsbENvbXBvbmVudHMgPVxuICAgICAgdHlwZW9mIHByb3BlcnRpZXMuY29tcG9uZW50cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BlcnRpZXMuY29tcG9uZW50cyhlbXB0eUNvbXBvbmVudHMpXG4gICAgICAgIDogcHJvcGVydGllcy5jb21wb25lbnRzIHx8IGVtcHR5Q29tcG9uZW50c1xuICB9IGVsc2Uge1xuICAgIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BlcnRpZXMuY29tcG9uZW50cylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIE1EWENvbnRleHQuUHJvdmlkZXIsXG4gICAge3ZhbHVlOiBhbGxDb21wb25lbnRzfSxcbiAgICBwcm9wZXJ0aWVzLmNoaWxkcmVuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpZXdCdXR0b24iLCJDb2RlVmlld2VyIiwiRGVtbyIsIkZPQ1VTIiwiRlVMTCIsIkRlbW9Db250YWluZXIiLCJfUmVhY3RfdXNlU3RhdGUiLCJmdWxsIiwic2V0RnVsbCIsIm9uQ2xpY2siLCJ0Z2RDYWxjRGVnVG9SYWQiLCJUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQiLCJUZ2RNYXRlcmlhbERpZmZ1c2UiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyU2VnbWVudHMiLCJUZ2RQYWludGVyU3RhdGUiLCJ3ZWJnbFByZXNldERlcHRoIiwiVmlldyIsIk5ldXJvblVSTCIsIm1ha2VTZWdtZW50c0RhdGEiLCJpbml0IiwiY29udGV4dCIsImFzc2V0cyIsIl9tYWtlU2VnbWVudHNEYXRhIiwiZGF0YSIsImNlbnRlciIsImJib3giLCJNYXRoIiwiY2xlYXIiLCJzZWdtZW50cyIsInN0YXRlIiwiZXgiLCJjb25zb2xlIiwiVGdkUGFpbnRlclNlZ21lbnRzRGF0YSIsIlRnZFZlYzMiLCJzd2MiLCJzb21hUG9pbnRzIiwicG9pbnRzIiwiTWFwIiwibWF4RGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvciIsImZvckVhY2hMaW5lIiwicmF3TGluZSIsImxpbmUiLCJzdHJpcENvbW1lbnQiLCJpdGVtcyIsIl9pdGVtc19tYXAiLCJzIiwiTnVtYmVyIiwiaW5kZXgiLCJ0eXBlIiwieCIsInkiLCJ6IiwicmFkaXVzIiwicGFyZW50IiwiQiIsIm5vcm1hbGl6ZVR5cGUiLCJBIiwiX0FfeHl6ciIsInh4IiwieXkiLCJ6eiIsImRpc3RhbmNlIiwiX2l0ZXJhdG9yRXJyb3IxIiwicCIsImludmVyc2VNYXhEaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yMiIsIkIxIiwiQTEiLCJfQl94eXpyIiwieDEiLCJ5MSIsInoxIiwiY29udGVudCIsImxlbiIsImN1cnNvciIsInBvcyIsImZhY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3lCO0FBQ2lCO0FBQ1c7QUFDckI7QUFFakMsSUFBTUksUUFBUTtJQUNiLGFBQ0M7QUFDRjtBQUNBLElBQU1DLE9BQ0w7QUFFYyxTQUFTQztJQUN2QixJQUF3QkMsbUNBQUFBLHlDQUFjLENBQUMsWUFBaENDLE9BQWlCRCxvQkFBWEUsVUFBV0Y7SUFDeEIscUJBQ0M7OzBCQUNDLGtEQUFDO2dCQUFJLFdBQVU7MEJBQ2QsZ0VBQUNKLHdDQUFJQTs7Ozs7Ozs7OzswQkFFTixrREFBQztnQkFBSSxXQUFVOztrQ0FDZCxrREFBQztrQ0FDQSxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNyREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUdoQyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBSXBEOzs7Ozs7Ozs7Ozs7Ozs7QUN2QndCO0FBQ2tDO0FBRXJCO0FBQ0k7QUFFekMsU0FBU2lCLEtBQUtDLE9BQW1CLEVBQUVDLE1BQWM7SUFDaEQsSUFBSTtRQUNILFNBQVM7UUFDVCxJQUErQkMsb0JBQUFBLDBDQUFnQkEsQ0FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUF2REUsT0FBdUJE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