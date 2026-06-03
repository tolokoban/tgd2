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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                    lineNumber: 21,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                            lineNumber: 25,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 24,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/painter/segments/02/_/neuron.demo/neuron.demo.tsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfcGFpbnRlcl9zZWdtZW50c18wMl9wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1mNGUwZjEuMGY0ZTgwMWRmZDAwZTk1OS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vbmV1cm9uLmRlbW8udHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL18vbmV1cm9uLmRlbW8vc3djLnRzIiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9wYWludGVyL3NlZ21lbnRzLzAyL3BhZ2UubWR4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWV3QnV0dG9uIH0gZnJvbSBcIkB0b2xva29iYW4vdWlcIjtcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCI7XG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9uZXVyb24uZGVtb1wiO1xuXG5jb25zdCBGT0NVUyA9IHtcblx0XCJEZXRhaWwgIzFcIjpcblx0XHRcIiAgICAgICAgY29uc3QgeyBkYXRhLCBjZW50ZXIsIGJib3ggfSA9IG1ha2VTZWdtZW50c0RhdGEoYXNzZXRzLnRleHQuc3djKVxcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5wb3NpdGlvbiA9IGNlbnRlclxcbiAgICAgICAgY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSA9IE1hdGgubWF4KGJib3gueCwgYmJveC55LCBiYm94LnopXFxuICAgICAgICBjb250ZXh0LmNhbWVyYS5mYXIgPSAxMCAqIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2VcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLm5lYXIgPSAxZS0zXFxuICAgICAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcXG4gICAgICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgICAgICAgICAgc3BlZWRab29tOiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlICogMWUtMyxcXG4gICAgICAgICAgICBnZW86IHtcXG4gICAgICAgICAgICAgICAgbWluTGF0OiB0Z2RDYWxjRGVnVG9SYWQoLTYwKSxcXG4gICAgICAgICAgICAgICAgbWF4TGF0OiB0Z2RDYWxjRGVnVG9SYWQoNjApLFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBjb2xvcjogWzAuMywgMC4zNSwgMC40LCAxXSxcXG4gICAgICAgICAgICBkZXB0aDogMSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHMoY29udGV4dCwge1xcbiAgICAgICAgICAgIGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXFxuICAgICAgICAgICAgcm91bmRuZXNzOiA2LFxcbiAgICAgICAgICAgIG1pblJhZGl1czogMC4yLFxcbiAgICAgICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKCksXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbY2xlYXIsIHNlZ21lbnRzXSxcXG4gICAgICAgIH0pXFxuICAgICAgICBjb250ZXh0LmFkZChjbGVhciwgc3RhdGUpXFxuICAgICAgICBjb250ZXh0LnBhaW50KClcIixcbn07XG5jb25zdCBGVUxMID1cblx0J2ltcG9ydCB7XFxuICAgIHRnZENhbGNEZWdUb1JhZCxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZE1hdGVyaWFsRGlmZnVzZSxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyU2VnbWVudHMsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXFxuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcXG5cXG5pbXBvcnQgTmV1cm9uVVJMIGZyb20gXCIuL0FBMDYyMi5zd2NcIlxcbmltcG9ydCB7IG1ha2VTZWdtZW50c0RhdGEgfSBmcm9tIFwiLi9zd2NcIlxcblxcbmZ1bmN0aW9uIGluaXQoY29udGV4dDogVGdkQ29udGV4dCwgYXNzZXRzOiBBc3NldHMpIHtcXG4gICAgdHJ5IHtcXG4gICAgICAgIGNvbnN0IHsgZGF0YSwgY2VudGVyLCBiYm94IH0gPSBtYWtlU2VnbWVudHNEYXRhKGFzc2V0cy50ZXh0LnN3YylcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8ucG9zaXRpb24gPSBjZW50ZXJcXG4gICAgICAgIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSBNYXRoLm1heChiYm94LngsIGJib3gueSwgYmJveC56KVxcbiAgICAgICAgY29udGV4dC5jYW1lcmEuZmFyID0gMTAgKiBjb250ZXh0LmNhbWVyYS50cmFuc2ZvLmRpc3RhbmNlXFxuICAgICAgICBjb250ZXh0LmNhbWVyYS5uZWFyID0gMWUtM1xcbiAgICAgICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XFxuICAgICAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxcbiAgICAgICAgICAgIHNwZWVkWm9vbTogY29udGV4dC5jYW1lcmEudHJhbnNmby5kaXN0YW5jZSAqIDFlLTMsXFxuICAgICAgICAgICAgZ2VvOiB7XFxuICAgICAgICAgICAgICAgIG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC02MCksXFxuICAgICAgICAgICAgICAgIG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDYwKSxcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IGNsZWFyID0gbmV3IFRnZFBhaW50ZXJDbGVhcihjb250ZXh0LCB7XFxuICAgICAgICAgICAgY29sb3I6IFswLjMsIDAuMzUsIDAuNCwgMV0sXFxuICAgICAgICAgICAgZGVwdGg6IDEsXFxuICAgICAgICB9KVxcbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcXG4gICAgICAgICAgICBkYXRhc2V0OiBkYXRhLm1ha2VEYXRhc2V0LFxcbiAgICAgICAgICAgIHJvdW5kbmVzczogNixcXG4gICAgICAgICAgICBtaW5SYWRpdXM6IDAuMixcXG4gICAgICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRGlmZnVzZSgpLFxcbiAgICAgICAgfSlcXG4gICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XFxuICAgICAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG4gICAgICAgICAgICBjaGlsZHJlbjogW2NsZWFyLCBzZWdtZW50c10sXFxuICAgICAgICB9KVxcbiAgICAgICAgY29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKVxcbiAgICAgICAgY29udGV4dC5wYWludCgpXFxuICAgIH0gY2F0Y2ggKGV4KSB7XFxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gbmV1cm9uIGRlbW8hXCIsIGV4KVxcbiAgICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgICA8Vmlld1xcbiAgICAgICAgICAgIGdpem1vXFxuICAgICAgICAgICAgb25SZWFkeT17aW5pdH1cXG4gICAgICAgICAgICBhc3NldHM9e3tcXG4gICAgICAgICAgICAgICAgdGV4dDoge1xcbiAgICAgICAgICAgICAgICAgICAgc3djOiBOZXVyb25VUkwsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfX1cXG4gICAgICAgIC8+XFxuICAgIClcXG59XFxuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcblx0Y29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPlxuXHRcdFx0XHQ8RGVtbyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG5cdFx0XHRcdFx0XHR7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cblx0XHRcdFx0XHQ8L1ZpZXdCdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQge1xuXHR0Z2RDYWxjRGVnVG9SYWQsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2RNYXRlcmlhbERpZmZ1c2UsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclNlZ21lbnRzLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IFZpZXcsIHsgdHlwZSBBc3NldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbmltcG9ydCBOZXVyb25VUkwgZnJvbSBcIi4vQUEwNjIyLnN3Y1wiO1xuaW1wb3J0IHsgbWFrZVNlZ21lbnRzRGF0YSB9IGZyb20gXCIuL3N3Y1wiO1xuXG5mdW5jdGlvbiBpbml0KGNvbnRleHQ6IFRnZENvbnRleHQsIGFzc2V0czogQXNzZXRzKSB7XG5cdHRyeSB7XG5cdFx0Ly8gI2JlZ2luXG5cdFx0Y29uc3QgeyBkYXRhLCBjZW50ZXIsIGJib3ggfSA9IG1ha2VTZWdtZW50c0RhdGEoYXNzZXRzLnRleHQuc3djKTtcblx0XHRjb250ZXh0LmNhbWVyYS50cmFuc2ZvLnBvc2l0aW9uID0gY2VudGVyO1xuXHRcdGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSBNYXRoLm1heChiYm94LngsIGJib3gueSwgYmJveC56KTtcblx0XHRjb250ZXh0LmNhbWVyYS5mYXIgPSAxMCAqIGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2U7XG5cdFx0Y29udGV4dC5jYW1lcmEubmVhciA9IDFlLTM7XG5cdFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjb250ZXh0LCB7XG5cdFx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdFx0XHRzcGVlZFpvb206IGNvbnRleHQuY2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgKiAxZS0zLFxuXHRcdFx0Z2VvOiB7XG5cdFx0XHRcdG1pbkxhdDogdGdkQ2FsY0RlZ1RvUmFkKC02MCksXG5cdFx0XHRcdG1heExhdDogdGdkQ2FsY0RlZ1RvUmFkKDYwKSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgY2xlYXIgPSBuZXcgVGdkUGFpbnRlckNsZWFyKGNvbnRleHQsIHtcblx0XHRcdGNvbG9yOiBbMC4zLCAwLjM1LCAwLjQsIDFdLFxuXHRcdFx0ZGVwdGg6IDEsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc2VnbWVudHMgPSBuZXcgVGdkUGFpbnRlclNlZ21lbnRzKGNvbnRleHQsIHtcblx0XHRcdGRhdGFzZXQ6IGRhdGEubWFrZURhdGFzZXQsXG5cdFx0XHRyb3VuZG5lc3M6IDYsXG5cdFx0XHRtaW5SYWRpdXM6IDAuMixcblx0XHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxEaWZmdXNlKCksXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGNvbnRleHQsIHtcblx0XHRcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXG5cdFx0XHRjaGlsZHJlbjogW2NsZWFyLCBzZWdtZW50c10sXG5cdFx0fSk7XG5cdFx0Y29udGV4dC5hZGQoY2xlYXIsIHN0YXRlKTtcblx0XHRjb250ZXh0LnBhaW50KCk7XG5cdFx0Ly8gI2VuZFxuXHR9IGNhdGNoIChleCkge1xuXHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBuZXVyb24gZGVtbyFcIiwgZXgpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiAoXG5cdFx0PFZpZXdcblx0XHRcdGdpem1vXG5cdFx0XHRvblJlYWR5PXtpbml0fVxuXHRcdFx0YXNzZXRzPXt7XG5cdFx0XHRcdHRleHQ6IHtcblx0XHRcdFx0XHRzd2M6IE5ldXJvblVSTCxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgQXJyYXlOdW1iZXIyLFxuXHR0eXBlIEFycmF5TnVtYmVyNCxcblx0VGdkUGFpbnRlclNlZ21lbnRzRGF0YSxcblx0VGdkVmVjMyxcblx0VGdkVmVjNCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU2VnbWVudHNEYXRhKHN3Yzogc3RyaW5nKToge1xuXHRkYXRhOiBUZ2RQYWludGVyU2VnbWVudHNEYXRhO1xuXHRjZW50ZXI6IFRnZFZlYzM7XG5cdGJib3g6IFRnZFZlYzM7XG59IHtcblx0Y29uc3QgYmJveCA9IG5ldyBUZ2RWZWMzKCk7XG5cdGNvbnN0IHNvbWFQb2ludHM6IFBvaW50W10gPSBbXTtcblx0Y29uc3QgZGF0YSA9IG5ldyBUZ2RQYWludGVyU2VnbWVudHNEYXRhKCk7XG5cdGNvbnN0IHBvaW50cyA9IG5ldyBNYXA8bnVtYmVyLCBQb2ludD4oKTtcblx0bGV0IG1heERpc3RhbmNlID0gMDtcblx0Zm9yIChjb25zdCByYXdMaW5lIG9mIGZvckVhY2hMaW5lKHN3YykpIHtcblx0XHRjb25zdCBsaW5lID0gc3RyaXBDb21tZW50KHJhd0xpbmUpO1xuXHRcdGNvbnN0IGl0ZW1zID0gbGluZS5zcGxpdCgvXFxzKy8pO1xuXHRcdGlmIChpdGVtcy5sZW5ndGggPCA3KSBjb250aW51ZTtcblxuXHRcdGNvbnN0IFtpbmRleCwgdHlwZSwgeCwgeSwgeiwgcmFkaXVzLCBwYXJlbnRdID0gaXRlbXMubWFwKChzKSA9PiBOdW1iZXIocykpO1xuXHRcdGNvbnN0IEI6IFBvaW50ID0ge1xuXHRcdFx0eHl6cjogW3gsIHksIHosIHJhZGl1cyAqIDAuMl0sXG5cdFx0XHR1djogW25vcm1hbGl6ZVR5cGUodHlwZSksIDBdLFxuXHRcdFx0aW5mbHVlbmNlOiBpbmRleCA9PT0gMCA/IDAgOiAxLFxuXHRcdFx0cGFyZW50LFxuXHRcdH07XG5cdFx0cG9pbnRzLnNldChpbmRleCwgQik7XG5cdFx0Y29uc3QgQSA9IHBvaW50cy5nZXQocGFyZW50KTtcblx0XHRpZiAoQSkge1xuXHRcdFx0Y29uc3QgW3h4LCB5eSwgenpdID0gQS54eXpyO1xuXHRcdFx0Ly8gQ29tcHV0aW5nIGRpc3RhbmNlLlxuXHRcdFx0Y29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG5cdFx0XHRcdCh4IC0geHgpICogKHggLSB4eCkgKyAoeSAtIHl5KSAqICh5IC0geXkpICsgKHogLSB6eikgKiAoeiAtIHp6KSxcblx0XHRcdCk7XG5cdFx0XHRCLnV2WzFdID0gQS51dlsxXSArIGRpc3RhbmNlO1xuXHRcdFx0bWF4RGlzdGFuY2UgPSBNYXRoLm1heChtYXhEaXN0YW5jZSwgQi51dlsxXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEIgaXMgcGFydCBvZiB0aGUgc29tYVxuXHRcdFx0c29tYVBvaW50cy5wdXNoKEIpO1xuXHRcdH1cblx0fVxuXHRjb25zdCBjZW50ZXIgPSBuZXcgVGdkVmVjMygpO1xuXHRpZiAoc29tYVBvaW50cy5sZW5ndGggPiAwKSB7XG5cdFx0Zm9yIChjb25zdCBwIG9mIHNvbWFQb2ludHMpIHtcblx0XHRcdGNlbnRlci5hZGQocC54eXpyKTtcblx0XHR9XG5cdFx0Y2VudGVyLnNjYWxlKDEgLyBzb21hUG9pbnRzLmxlbmd0aCk7XG5cdH1cblx0Y29uc3QgaW52ZXJzZU1heERpc3RhbmNlID0gMSAvIG1heERpc3RhbmNlO1xuXHRmb3IgKGNvbnN0IEIgb2YgcG9pbnRzLnZhbHVlcygpKSB7XG5cdFx0Qi51dlsxXSAqPSBpbnZlcnNlTWF4RGlzdGFuY2U7XG5cdFx0Y29uc3QgQSA9IHBvaW50cy5nZXQoQi5wYXJlbnQpO1xuXHRcdGlmIChBKSB7XG5cdFx0XHRkYXRhLmFkZChBLnh5enIsIEIueHl6ciwgQS51diwgQi51diwgQS5pbmZsdWVuY2UsIEIuaW5mbHVlbmNlKTtcblx0XHRcdGNvbnN0IFt4LCB5LCB6XSA9IEIueHl6cjtcblx0XHRcdGJib3gueCA9IE1hdGgubWF4KGJib3gueCwgTWF0aC5hYnMoY2VudGVyLnggLSB4KSk7XG5cdFx0XHRiYm94LnkgPSBNYXRoLm1heChiYm94LnksIE1hdGguYWJzKGNlbnRlci55IC0geSkpO1xuXHRcdFx0YmJveC56ID0gTWF0aC5tYXgoYmJveC56LCBNYXRoLmFicyhjZW50ZXIueiAtIHopKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVGhpcyBwb2ludCBpcyBwYXJ0IG9mIHRoZSBzb21hLlxuXHRcdH1cblx0fVxuXHRyZXR1cm4geyBkYXRhLCBjZW50ZXIsIGJib3ggfTtcbn1cblxuaW50ZXJmYWNlIFBvaW50IHtcblx0eHl6cjogQXJyYXlOdW1iZXI0O1xuXHR1djogQXJyYXlOdW1iZXIyO1xuXHRpbmZsdWVuY2U6IG51bWJlcjtcblx0cGFyZW50OiBudW1iZXI7XG59XG5cbi8qKlxuICogR2VuZXJhdG9yIHRvIGl0ZXJhdGUgb24gZWFjaCBsaW5lcyBvZiBhIGJpZyBzdHJpbmcgY29udGVudC5cbiAqL1xuY29uc3QgZm9yRWFjaExpbmUgPSBmdW5jdGlvbiogKGNvbnRlbnQ6IHN0cmluZykge1xuXHRjb25zdCBsZW4gPSBjb250ZW50Lmxlbmd0aDtcblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGN1cnNvciA9IDA7XG5cdHdoaWxlIChpbmRleCA+IC0xICYmIGluZGV4IDwgbGVuKSB7XG5cdFx0aW5kZXggPSBjb250ZW50LmluZGV4T2YoXCJcXG5cIiwgY3Vyc29yKTtcblx0XHRpZiAoaW5kZXggPCAwKSBicmVhaztcblxuXHRcdHlpZWxkIGNvbnRlbnQuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpLnRyaW0oKTtcblx0XHRjdXJzb3IgPSBpbmRleCArIDE7XG5cdH1cblx0cmV0dXJuIGNvbnRlbnQuc3Vic3RyaW5nKGN1cnNvcikudHJpbSgpO1xufTtcblxuZnVuY3Rpb24gc3RyaXBDb21tZW50KGxpbmU6IHN0cmluZyk6IHN0cmluZyB7XG5cdGNvbnN0IHBvcyA9IGxpbmUuaW5kZXhPZihcIiNcIik7XG5cdGlmIChwb3MgPCAwKSByZXR1cm4gbGluZTtcblxuXHRyZXR1cm4gbGluZS5zdWJzdHJpbmcoMCwgcG9zKS50cmltKCk7XG59XG5cbi8qKlxuICogVGhlcmUgYXJlIDQgcmVhbCB0eXBlcyAoc29tYSwgYXhvbiwgYXBpY2FsIGRlbmRyaXRlIGFuZCBiYXNhbCBkZW5kcml0ZSkuXG4gKiBXZSB1c2UgYSBmaWZ0aCBvbmUgZm9yIHVua25vd24gdHlwZXMuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR5cGUodHlwZTogbnVtYmVyKTogbnVtYmVyIHtcblx0Y29uc3QgZmFjdG9yID0gMSAvIDU7XG5cdHN3aXRjaCAodHlwZSkge1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiAwLjUgKiBmYWN0b3I7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIDEuNSAqIGZhY3Rvcjtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gMi41ICogZmFjdG9yO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiAzLjUgKiBmYWN0b3I7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiA0LjUgKiBmYWN0b3I7XG5cdH1cbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwidGdkQ2FsY0RlZ1RvUmFkIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxEaWZmdXNlIiwiVGdkUGFpbnRlckNsZWFyIiwiVGdkUGFpbnRlclNlZ21lbnRzIiwiVGdkUGFpbnRlclN0YXRlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJOZXVyb25VUkwiLCJtYWtlU2VnbWVudHNEYXRhIiwiaW5pdCIsImNvbnRleHQiLCJhc3NldHMiLCJfbWFrZVNlZ21lbnRzRGF0YSIsImRhdGEiLCJjZW50ZXIiLCJiYm94IiwiTWF0aCIsImNsZWFyIiwic2VnbWVudHMiLCJzdGF0ZSIsImV4IiwiY29uc29sZSIsIlRnZFBhaW50ZXJTZWdtZW50c0RhdGEiLCJUZ2RWZWMzIiwic3djIiwic29tYVBvaW50cyIsInBvaW50cyIsIk1hcCIsIm1heERpc3RhbmNlIiwiX2l0ZXJhdG9yRXJyb3IiLCJmb3JFYWNoTGluZSIsInJhd0xpbmUiLCJsaW5lIiwic3RyaXBDb21tZW50IiwiaXRlbXMiLCJfaXRlbXNfbWFwIiwicyIsIk51bWJlciIsImluZGV4IiwidHlwZSIsIngiLCJ5IiwieiIsInJhZGl1cyIsInBhcmVudCIsIkIiLCJub3JtYWxpemVUeXBlIiwiQSIsIl9BX3h5enIiLCJ4eCIsInl5IiwienoiLCJkaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yMSIsInAiLCJpbnZlcnNlTWF4RGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvcjIiLCJCMSIsIkExIiwiX0JfeHl6ciIsIngxIiwieTEiLCJ6MSIsImNvbnRlbnQiLCJsZW4iLCJjdXJzb3IiLCJwb3MiLCJmYWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Q0FFQyxHQUN5QjtBQUNpQjtBQUNXO0FBQ3JCO0FBRWpDLElBQU1JLFFBQVE7SUFDYixhQUNDO0FBQ0Y7QUFDQSxJQUFNQyxPQUNMO0FBRWMsU0FBU0M7SUFDdkIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUNDOzswQkFDQyxrREFBQztnQkFBSSxXQUFVOzBCQUNkLGdFQUFDSix3Q0FBSUE7Ozs7Ozs7Ozs7MEJBRU4sa0RBQUM7Z0JBQUksV0FBVTs7a0NBQ2Qsa0RBQUM7a0NBQ0EsZ0VBQUNGLHlDQUFVQTs0QkFBQyxTQUFROzRCQUFXUyxTQUFTLFNBQVRBO3VDQUFlRCxRQUFRLENBQUNEOztzQ0FDckRBLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7OztrQ0FHaEMsa0RBQUNOLHVEQUFVQTt3QkFBQyxVQUFTO3dCQUFNLE9BQU9NLE9BQU9ILE9BQU9EOzs7Ozs7Ozs7Ozs7OztBQUlwRDs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QjtBQUNrQztBQUVyQjtBQUNJO0FBRXpDLFNBQVNpQixLQUFLQyxPQUFtQixFQUFFQyxNQUFjO0lBQ2hELElBQUk7UUFDSCxTQUFTO1FBQ1QsSUFBK0JDLG9CQUFBQSwwQ0FBZ0JBLENBQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBdkRFLE9BQXVCRCxrQkFB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