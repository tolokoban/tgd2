"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_marching-cubes_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-170941"], {
92788(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DemoContainer)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _tolokoban_ui__rspack_import_2 = __webpack_require__(62430);
/* import */ var _components_demo_CodeViewer__rspack_import_3 = __webpack_require__(16391);
/* import */ var _marching_cubes_demo__rspack_import_4 = __webpack_require__(37221);
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
    "Initializing WebGL": "    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()"
};
var FULL = "import {\n    type ArrayNumber3,\n    type ArrayNumber4,\n    type MakeGeometryFromVolumeOptions,\n    type TgdContext,\n    TgdControllerCameraOrbit,\n    TgdMaterialFaceOrientation,\n    TgdPainterAxes,\n    TgdPainterClear,\n    TgdPainterMesh,\n    TgdPainterState,\n    tgdCalcDegToRad,\n    tgdCalcRandom,\n    tgdMakeGeometryFromVolume,\n    tgdSdfCapsule,\n    tgdSdfSphere,\n    webglPresetDepth,\n} from \"@tolokoban/tgd\"\n\nimport View from \"@/components/demo/Tgd\"\n\ntype Tree = {\n    point: ArrayNumber4\n    children?: Tree[]\n}\n\nfunction init(ctx: TgdContext) {\n    ctx.camera.fitSpaceAtTarget(12, 12)\n    new TgdControllerCameraOrbit(ctx, {\n        inertiaOrbit: 1000,\n    })\n    const tree: Tree = {\n        point: [0, 0.5, 0, 0.5],\n        children: [\n            dendrite(1, 0.5, 85, 0),\n            dendrite(1, 0.5, -60, 0),\n            dendrite(1, 0.5, -60, 120),\n            dendrite(1, 0.5, -60, 240),\n        ],\n    }\n    const bbox = computeBBox(tree)\n    const bboxCorner = bbox.min\n    const bboxSize: ArrayNumber3 = [bbox.max[0] - bbox.min[0], bbox.max[1] - bbox.min[1], bbox.max[2] - bbox.min[2]]\n    console.log(\"🐞 [marching-cubes.demo@61] bbox =\", bbox) // @FIXME: Remove this line written on 2026-02-10 at 15:57\n    console.log(\"🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =\", bboxCorner, bboxSize) // @FIXME: Remove this line written on 2026-02-10 at 15:56\n    const sdfList: Array<(p: ArrayNumber3) => number> = makeListOfSDF(tree)\n    const options: MakeGeometryFromVolumeOptions = {\n        bboxCorner,\n        bboxSize,\n        voxelSize: 1 / 16,\n        sdfPoint(x, y, z) {\n            const p: ArrayNumber3 = [x, y, z]\n            const o: ArrayNumber3 = [0, 0.5, 0]\n            let distance = tgdSdfSphere(p, [0, 0, 0], 0.8)\n            for (const sdf of sdfList) {\n                distance = Math.min(distance, sdf(p))\n            }\n            return distance\n        },\n        smoothingLevel: 2,\n    }\n    const geometry = tgdMakeGeometryFromVolume(options)\n    const mesh = new TgdPainterMesh(ctx, {\n        geometry,\n        material: new TgdMaterialFaceOrientation(),\n    })\n    const state = new TgdPainterState(ctx, {\n        depth: webglPresetDepth.less,\n        children: [mesh],\n    })\n    ctx.add(new TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }), state)\n    ctx.paint()\n    state.add(new TgdPainterAxes(ctx, { scale: 2 }))\n}\n\nexport default function Demo() {\n    return <View onReady={init} gizmo options={{ alpha: false }} />\n}\n\nfunction makeListOfSDF(tree: Tree): ((p: ArrayNumber3) => number)[] {\n    const sdfList: ((p: ArrayNumber3) => number)[] = []\n    recursiveListOfSDF(tree, sdfList)\n    return sdfList\n}\n\nfunction recursiveListOfSDF({ point, children }: Tree, sdfList: ((p: ArrayNumber3) => number)[]) {\n    if (!children) return\n\n    const [x0, y0, z0, r0] = point\n    for (const child of children) {\n        const [x1, y1, z1, r1] = child.point\n        const sdf = (p: ArrayNumber3) => tgdSdfCapsule(p, [x0, y0, z0], [x1, y1, z1], r0, r1)\n        sdfList.push(sdf)\n        recursiveListOfSDF(child, sdfList)\n    }\n}\n\ninterface BBox {\n    min: ArrayNumber3\n    max: ArrayNumber3\n}\n\nfunction computeBBox(tree: Tree): BBox {\n    const fringe = [tree]\n    const min: ArrayNumber3 = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]\n    const max: ArrayNumber3 = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]\n    while (fringe.length > 0) {\n        const item = fringe.pop()\n        if (!item) continue\n\n        const [x, y, z, r0] = item.point\n        console.log(\"🐞 [marching-cubes.demo@150] x, y, z =\", x, y, z) // @FIXME: Remove this line written on 2026-02-10 at 16:02\n        const r = r0 * 1.1\n        min[0] = Math.min(min[0], x - r)\n        max[0] = Math.max(min[0], x + r)\n        min[1] = Math.min(min[1], y - r)\n        max[1] = Math.max(min[1], y + r)\n        min[2] = Math.min(min[2], z - r)\n        max[2] = Math.max(min[2], z + r)\n        if (item.children) fringe.push(...item.children)\n    }\n    return { min, max }\n}\n\nfunction dendrite(length: number, radius: number, lat: number, lng: number, x = 0, y = 0, z = 0): Tree {\n    const radius2 = radius * tgdCalcRandom(0.5, 1.1)\n    const lat0 = lat + tgdCalcRandom(-30, 30)\n    const lng0 = lng + tgdCalcRandom(-30, 30)\n    const latAng = tgdCalcDegToRad(lat0)\n    const lngAng = tgdCalcDegToRad(lng0)\n    const vy = Math.sin(latAng)\n    const r = Math.cos(latAng)\n    const vx = r * Math.cos(lngAng)\n    const vz = r * Math.sin(lngAng)\n    const x2 = x + vx * length\n    const y2 = y + vy * length\n    const z2 = z + vz * length\n    const tree: Tree = {\n        point: [x, y, z, radius],\n        children: [],\n    }\n    if (radius2 > 0.1) {\n        const count = Math.max(1, Math.floor(tgdCalcRandom(0, 3)))\n        for (let loop = 0; loop < count; loop++) {\n            tree.children?.push(\n                dendrite(\n                    length * tgdCalcRandom(0.5, 1.1),\n                    radius2,\n                    lat0 + tgdCalcRandom(-30, 30),\n                    lng0 + tgdCalcRandom(-30, 30),\n                    x2,\n                    y2,\n                    z2,\n                ),\n            )\n        }\n    }\n    return tree\n}\n";
function DemoContainer() {
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(false), 2), full = _React_useState[0], setFull = _React_useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                className: "half-left",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marching_cubes_demo__rspack_import_4["default"], {}, void 0, false, {
                    fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
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
                            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}


},
37221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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



function init(ctx) {
    ctx.camera.fitSpaceAtTarget(12, 12);
    new _tolokoban_tgd__rspack_import_1.TgdControllerCameraOrbit(ctx, {
        inertiaOrbit: 1000
    });
    var tree = {
        point: [
            0,
            0.5,
            0,
            0.5
        ],
        children: [
            dendrite(1, 0.5, 85, 0),
            dendrite(1, 0.5, -60, 0),
            dendrite(1, 0.5, -60, 120),
            dendrite(1, 0.5, -60, 240)
        ]
    };
    var bbox = computeBBox(tree);
    var bboxCorner = bbox.min;
    var bboxSize = [
        bbox.max[0] - bbox.min[0],
        bbox.max[1] - bbox.min[1],
        bbox.max[2] - bbox.min[2]
    ];
    console.log("🐞 [marching-cubes.demo@61] bbox =", bbox); // @FIXME: Remove this line written on 2026-02-10 at 15:57
    console.log("🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =", bboxCorner, bboxSize); // @FIXME: Remove this line written on 2026-02-10 at 15:56
    var sdfList = makeListOfSDF(tree);
    // #begin Initializing WebGL
    var options = {
        bboxCorner: bboxCorner,
        bboxSize: bboxSize,
        voxelSize: 1 / 16,
        sdfPoint: function sdfPoint(x, y, z) {
            var p = [
                x,
                y,
                z
            ];
            var o = [
                0,
                0.5,
                0
            ];
            var distance = (0,_tolokoban_tgd__rspack_import_1.tgdSdfSphere)(p, [
                0,
                0,
                0
            ], 0.8);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = sdfList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var sdf = _step.value;
                    distance = Math.min(distance, sdf(p));
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
            return distance;
        },
        smoothingLevel: 2
    };
    var geometry = (0,_tolokoban_tgd__rspack_import_1.tgdMakeGeometryFromVolume)(options);
    var mesh = new _tolokoban_tgd__rspack_import_1.TgdPainterMesh(ctx, {
        geometry: geometry,
        material: new _tolokoban_tgd__rspack_import_1.TgdMaterialFaceOrientation()
    });
    var state = new _tolokoban_tgd__rspack_import_1.TgdPainterState(ctx, {
        depth: _tolokoban_tgd__rspack_import_1.webglPresetDepth.less,
        children: [
            mesh
        ]
    });
    ctx.add(new _tolokoban_tgd__rspack_import_1.TgdPainterClear(ctx, {
        color: [
            0.2,
            0.2,
            0.2,
            1
        ],
        depth: 1
    }), state);
    ctx.paint();
    // #end
    state.add(new _tolokoban_tgd__rspack_import_1.TgdPainterAxes(ctx, {
        scale: 2
    }));
}
function Demo() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
        onReady: init,
        gizmo: true,
        options: {
            alpha: false
        }
    }, void 0, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/marching-cubes.demo.tsx",
        lineNumber: 79,
        columnNumber: 12
    }, this);
}
function makeListOfSDF(tree) {
    var sdfList = [];
    recursiveListOfSDF(tree, sdfList);
    return sdfList;
}
function recursiveListOfSDF(param, sdfList) {
    var point = param.point, children = param.children;
    if (!children) return;
    var _point = _sliced_to_array(point, 4), x0 = _point[0], y0 = _point[1], z0 = _point[2], r0 = _point[3];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var child = _step.value;
            var _child_point = _sliced_to_array(child.point, 4), x1 = _child_point[0], y1 = _child_point[1], z1 = _child_point[2], r1 = _child_point[3];
            var sdf = function sdf(p) {
                return (0,_tolokoban_tgd__rspack_import_1.tgdSdfCapsule)(p, [
                    x0,
                    y0,
                    z0
                ], [
                    x1,
                    y1,
                    z1
                ], r0, r1);
            };
            sdfList.push(sdf);
            recursiveListOfSDF(child, sdfList);
        };
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
}
function computeBBox(tree) {
    var fringe = [
        tree
    ];
    var min = [
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY
    ];
    var max = [
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY
    ];
    while(fringe.length > 0){
        var _fringe;
        var item = fringe.pop();
        if (!item) continue;
        var _item_point = _sliced_to_array(item.point, 4), x = _item_point[0], y = _item_point[1], z = _item_point[2], r0 = _item_point[3];
        console.log("🐞 [marching-cubes.demo@150] x, y, z =", x, y, z); // @FIXME: Remove this line written on 2026-02-10 at 16:02
        var r = r0 * 1.1;
        min[0] = Math.min(min[0], x - r);
        max[0] = Math.max(min[0], x + r);
        min[1] = Math.min(min[1], y - r);
        max[1] = Math.max(min[1], y + r);
        min[2] = Math.min(min[2], z - r);
        max[2] = Math.max(min[2], z + r);
        if (item.children) (_fringe = fringe).push.apply(_fringe, _to_consumable_array(item.children));
    }
    return {
        min: min,
        max: max
    };
}
function dendrite(length, radius, lat, lng) {
    var x = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, y = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, z = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
    var radius2 = radius * (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0.5, 1.1);
    var lat0 = lat + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30);
    var lng0 = lng + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30);
    var latAng = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(lat0);
    var lngAng = (0,_tolokoban_tgd__rspack_import_1.tgdCalcDegToRad)(lng0);
    var vy = Math.sin(latAng);
    var r = Math.cos(latAng);
    var vx = r * Math.cos(lngAng);
    var vz = r * Math.sin(lngAng);
    var x2 = x + vx * length;
    var y2 = y + vy * length;
    var z2 = z + vz * length;
    var tree = {
        point: [
            x,
            y,
            z,
            radius
        ],
        children: []
    };
    if (radius2 > 0.1) {
        var count = Math.max(1, Math.floor((0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0, 3)));
        for(var loop = 0; loop < count; loop++){
            var _tree_children;
            (_tree_children = tree.children) === null || _tree_children === void 0 ? void 0 : _tree_children.push(dendrite(length * (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(0.5, 1.1), radius2, lat0 + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30), lng0 + (0,_tolokoban_tgd__rspack_import_1.tgdCalcRandom)(-30, 30), x2, y2, z2));
        }
    }
    return tree;
}


},
68859(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (MDXContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(28453);
/* import */ var _marching_cubes__rspack_import_1 = __webpack_require__(92788);
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
        hr: "hr",
        p: "p"
    }, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components);
    return (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.h1, {
                children: "Marching cubes"
            }, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marching_cubes__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 7,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.p, {
                children: [
                    "You can see how to create the 256 configurations for marching cubes\n",
                    (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.a, {
                        href: "#/articles/mesh/volume-to-mesh",
                        children: "here"
                    }, undefined, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC0xNzA5NDEuYTU5ZTE2ZTYxY2IwODVhNi5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXJjaGluZy1jdWJlcy9fL21hcmNoaW5nLWN1YmVzL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvXy9tYXJjaGluZy1jdWJlcy9tYXJjaGluZy1jdWJlcy5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJjaGluZy1jdWJlcy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIiAgICBjb25zdCBvcHRpb25zOiBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyA9IHtcXG4gICAgICAgIGJib3hDb3JuZXIsXFxuICAgICAgICBiYm94U2l6ZSxcXG4gICAgICAgIHZveGVsU2l6ZTogMSAvIDE2LFxcbiAgICAgICAgc2RmUG9pbnQoeCwgeSwgeikge1xcbiAgICAgICAgICAgIGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XVxcbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXFxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KVxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcXG4gICAgICAgIH0sXFxuICAgICAgICBzbW9vdGhpbmdMZXZlbDogMixcXG4gICAgfVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXFxuICAgIGN0eC5wYWludCgpXCJ9XG5jb25zdCBGVUxMID0gXCJpbXBvcnQge1xcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXFxuICAgIHR5cGUgTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMsXFxuICAgIHR5cGUgVGdkQ29udGV4dCxcXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcbiAgICBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcXG4gICAgVGdkUGFpbnRlckF4ZXMsXFxuICAgIFRnZFBhaW50ZXJDbGVhcixcXG4gICAgVGdkUGFpbnRlck1lc2gsXFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxcbiAgICB0Z2RDYWxjUmFuZG9tLFxcbiAgICB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lLFxcbiAgICB0Z2RTZGZDYXBzdWxlLFxcbiAgICB0Z2RTZGZTcGhlcmUsXFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCJcXG5cXG5pbXBvcnQgVmlldyBmcm9tIFxcXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcXFwiXFxuXFxudHlwZSBUcmVlID0ge1xcbiAgICBwb2ludDogQXJyYXlOdW1iZXI0XFxuICAgIGNoaWxkcmVuPzogVHJlZVtdXFxufVxcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuICAgIGN0eC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxMiwgMTIpXFxuICAgIG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XFxuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXFxuICAgIH0pXFxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuICAgICAgICBwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcXG4gICAgICAgIGNoaWxkcmVuOiBbXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCA4NSwgMCksXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDApLFxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAxMjApLFxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAyNDApLFxcbiAgICAgICAgXSxcXG4gICAgfVxcbiAgICBjb25zdCBiYm94ID0gY29tcHV0ZUJCb3godHJlZSlcXG4gICAgY29uc3QgYmJveENvcm5lciA9IGJib3gubWluXFxuICAgIGNvbnN0IGJib3hTaXplOiBBcnJheU51bWJlcjMgPSBbYmJveC5tYXhbMF0gLSBiYm94Lm1pblswXSwgYmJveC5tYXhbMV0gLSBiYm94Lm1pblsxXSwgYmJveC5tYXhbMl0gLSBiYm94Lm1pblsyXV1cXG4gICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3ggPVxcXCIsIGJib3gpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTdcXG4gICAgY29uc29sZS5sb2coXFxcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3hDb3JuZXIsIGJib3hTaXplID1cXFwiLCBiYm94Q29ybmVyLCBiYm94U2l6ZSkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1NlxcbiAgICBjb25zdCBzZGZMaXN0OiBBcnJheTwocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXI+ID0gbWFrZUxpc3RPZlNERih0cmVlKVxcbiAgICBjb25zdCBvcHRpb25zOiBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyA9IHtcXG4gICAgICAgIGJib3hDb3JuZXIsXFxuICAgICAgICBiYm94U2l6ZSxcXG4gICAgICAgIHZveGVsU2l6ZTogMSAvIDE2LFxcbiAgICAgICAgc2RmUG9pbnQoeCwgeSwgeikge1xcbiAgICAgICAgICAgIGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XVxcbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXFxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KVxcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2VcXG4gICAgICAgIH0sXFxuICAgICAgICBzbW9vdGhpbmdMZXZlbDogMixcXG4gICAgfVxcbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG4gICAgICAgIGdlb21ldHJ5LFxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcbiAgICB9KVxcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcXG4gICAgfSlcXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXFxuICAgIGN0eC5wYWludCgpXFxuICAgIHN0YXRlLmFkZChuZXcgVGdkUGFpbnRlckF4ZXMoY3R4LCB7IHNjYWxlOiAyIH0pKVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcbiAgICByZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gZ2l6bW8gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz5cXG59XFxuXFxuZnVuY3Rpb24gbWFrZUxpc3RPZlNERih0cmVlOiBUcmVlKTogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSB7XFxuICAgIGNvbnN0IHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10gPSBbXVxcbiAgICByZWN1cnNpdmVMaXN0T2ZTREYodHJlZSwgc2RmTGlzdClcXG4gICAgcmV0dXJuIHNkZkxpc3RcXG59XFxuXFxuZnVuY3Rpb24gcmVjdXJzaXZlTGlzdE9mU0RGKHsgcG9pbnQsIGNoaWxkcmVuIH06IFRyZWUsIHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10pIHtcXG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuXFxuXFxuICAgIGNvbnN0IFt4MCwgeTAsIHowLCByMF0gPSBwb2ludFxcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XFxuICAgICAgICBjb25zdCBbeDEsIHkxLCB6MSwgcjFdID0gY2hpbGQucG9pbnRcXG4gICAgICAgIGNvbnN0IHNkZiA9IChwOiBBcnJheU51bWJlcjMpID0+IHRnZFNkZkNhcHN1bGUocCwgW3gwLCB5MCwgejBdLCBbeDEsIHkxLCB6MV0sIHIwLCByMSlcXG4gICAgICAgIHNkZkxpc3QucHVzaChzZGYpXFxuICAgICAgICByZWN1cnNpdmVMaXN0T2ZTREYoY2hpbGQsIHNkZkxpc3QpXFxuICAgIH1cXG59XFxuXFxuaW50ZXJmYWNlIEJCb3gge1xcbiAgICBtaW46IEFycmF5TnVtYmVyM1xcbiAgICBtYXg6IEFycmF5TnVtYmVyM1xcbn1cXG5cXG5mdW5jdGlvbiBjb21wdXRlQkJveCh0cmVlOiBUcmVlKTogQkJveCB7XFxuICAgIGNvbnN0IGZyaW5nZSA9IFt0cmVlXVxcbiAgICBjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXVxcbiAgICBjb25zdCBtYXg6IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXVxcbiAgICB3aGlsZSAoZnJpbmdlLmxlbmd0aCA+IDApIHtcXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKClcXG4gICAgICAgIGlmICghaXRlbSkgY29udGludWVcXG5cXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50XFxuICAgICAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVxcXCIsIHgsIHksIHopIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTY6MDJcXG4gICAgICAgIGNvbnN0IHIgPSByMCAqIDEuMVxcbiAgICAgICAgbWluWzBdID0gTWF0aC5taW4obWluWzBdLCB4IC0gcilcXG4gICAgICAgIG1heFswXSA9IE1hdGgubWF4KG1pblswXSwgeCArIHIpXFxuICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIHkgLSByKVxcbiAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWluWzFdLCB5ICsgcilcXG4gICAgICAgIG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgeiAtIHIpXFxuICAgICAgICBtYXhbMl0gPSBNYXRoLm1heChtaW5bMl0sIHogKyByKVxcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIGZyaW5nZS5wdXNoKC4uLml0ZW0uY2hpbGRyZW4pXFxuICAgIH1cXG4gICAgcmV0dXJuIHsgbWluLCBtYXggfVxcbn1cXG5cXG5mdW5jdGlvbiBkZW5kcml0ZShsZW5ndGg6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgeCA9IDAsIHkgPSAwLCB6ID0gMCk6IFRyZWUge1xcbiAgICBjb25zdCByYWRpdXMyID0gcmFkaXVzICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSlcXG4gICAgY29uc3QgbGF0MCA9IGxhdCArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcXG4gICAgY29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcXG4gICAgY29uc3QgbGF0QW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxhdDApXFxuICAgIGNvbnN0IGxuZ0FuZyA9IHRnZENhbGNEZWdUb1JhZChsbmcwKVxcbiAgICBjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZylcXG4gICAgY29uc3QgciA9IE1hdGguY29zKGxhdEFuZylcXG4gICAgY29uc3QgdnggPSByICogTWF0aC5jb3MobG5nQW5nKVxcbiAgICBjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpXFxuICAgIGNvbnN0IHgyID0geCArIHZ4ICogbGVuZ3RoXFxuICAgIGNvbnN0IHkyID0geSArIHZ5ICogbGVuZ3RoXFxuICAgIGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoXFxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuICAgICAgICBwb2ludDogW3gsIHksIHosIHJhZGl1c10sXFxuICAgICAgICBjaGlsZHJlbjogW10sXFxuICAgIH1cXG4gICAgaWYgKHJhZGl1czIgPiAwLjEpIHtcXG4gICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSlcXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgY291bnQ7IGxvb3ArKykge1xcbiAgICAgICAgICAgIHRyZWUuY2hpbGRyZW4/LnB1c2goXFxuICAgICAgICAgICAgICAgIGRlbmRyaXRlKFxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSksXFxuICAgICAgICAgICAgICAgICAgICByYWRpdXMyLFxcbiAgICAgICAgICAgICAgICAgICAgbGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXFxuICAgICAgICAgICAgICAgICAgICBsbmcwICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKSxcXG4gICAgICAgICAgICAgICAgICAgIHgyLFxcbiAgICAgICAgICAgICAgICAgICAgeTIsXFxuICAgICAgICAgICAgICAgICAgICB6MixcXG4gICAgICAgICAgICAgICAgKSxcXG4gICAgICAgICAgICApXFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIHRyZWVcXG59XFxuXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVtb0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLWxlZnRcIj48RGVtbyAvPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFZpZXdCdXR0b24gdmFyaWFudD1cImVsZXZhdGVkXCIgb25DbGljaz17KCkgPT4gc2V0RnVsbCghZnVsbCl9PlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbCA/IFwiU2hvdyBjb2RlIGRldGFpbHNcIiA6IFwiU2hvdyBmdWxsIGNvZGVcIn1cbiAgICAgICAgICAgICAgICA8L1ZpZXdCdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2RlVmlld2VyIGxhbmd1YWdlPVwidHN4XCIgdmFsdWU9e2Z1bGwgPyBGVUxMIDogRk9DVVN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxufSIsImltcG9ydCB7XG4gICAgdHlwZSBBcnJheU51bWJlcjMsXG4gICAgdHlwZSBBcnJheU51bWJlcjQsXG4gICAgdHlwZSBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyxcbiAgICB0eXBlIFRnZENvbnRleHQsXG4gICAgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxuICAgIFRnZFBhaW50ZXJBeGVzLFxuICAgIFRnZFBhaW50ZXJDbGVhcixcbiAgICBUZ2RQYWludGVyTWVzaCxcbiAgICBUZ2RQYWludGVyU3RhdGUsXG4gICAgdGdkQ2FsY0RlZ1RvUmFkLFxuICAgIHRnZENhbGNSYW5kb20sXG4gICAgdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZSxcbiAgICB0Z2RTZGZDYXBzdWxlLFxuICAgIHRnZFNkZlNwaGVyZSxcbiAgICB3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIlxuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCJcblxudHlwZSBUcmVlID0ge1xuICAgIHBvaW50OiBBcnJheU51bWJlcjRcbiAgICBjaGlsZHJlbj86IFRyZWVbXVxufVxuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuICAgIGN0eC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxMiwgMTIpXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcbiAgICAgICAgaW5lcnRpYU9yYml0OiAxMDAwLFxuICAgIH0pXG4gICAgY29uc3QgdHJlZTogVHJlZSA9IHtcbiAgICAgICAgcG9pbnQ6IFswLCAwLjUsIDAsIDAuNV0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIDg1LCAwKSxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAwKSxcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAxMjApLFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDI0MCksXG4gICAgICAgIF0sXG4gICAgfVxuICAgIGNvbnN0IGJib3ggPSBjb21wdXRlQkJveCh0cmVlKVxuICAgIGNvbnN0IGJib3hDb3JuZXIgPSBiYm94Lm1pblxuICAgIGNvbnN0IGJib3hTaXplOiBBcnJheU51bWJlcjMgPSBbYmJveC5tYXhbMF0gLSBiYm94Lm1pblswXSwgYmJveC5tYXhbMV0gLSBiYm94Lm1pblsxXSwgYmJveC5tYXhbMl0gLSBiYm94Lm1pblsyXV1cbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3ggPVwiLCBiYm94KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XG4gICAgY29uc29sZS5sb2coXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94Q29ybmVyLCBiYm94U2l6ZSA9XCIsIGJib3hDb3JuZXIsIGJib3hTaXplKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU2XG4gICAgY29uc3Qgc2RmTGlzdDogQXJyYXk8KHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyPiA9IG1ha2VMaXN0T2ZTREYodHJlZSlcbiAgICAvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG4gICAgY29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XG4gICAgICAgIGJib3hDb3JuZXIsXG4gICAgICAgIGJib3hTaXplLFxuICAgICAgICB2b3hlbFNpemU6IDEgLyAxNixcbiAgICAgICAgc2RmUG9pbnQoeCwgeSwgeikge1xuICAgICAgICAgICAgY29uc3QgcDogQXJyYXlOdW1iZXIzID0gW3gsIHksIHpdXG4gICAgICAgICAgICBjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXVxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KVxuICAgICAgICAgICAgZm9yIChjb25zdCBzZGYgb2Ygc2RmTGlzdCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIHNkZihwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZVxuICAgICAgICB9LFxuICAgICAgICBzbW9vdGhpbmdMZXZlbDogMixcbiAgICB9XG4gICAgY29uc3QgZ2VvbWV0cnkgPSB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lKG9wdGlvbnMpXG4gICAgY29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcbiAgICAgICAgZ2VvbWV0cnksXG4gICAgICAgIG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcbiAgICB9KVxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcbiAgICAgICAgZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcbiAgICAgICAgY2hpbGRyZW46IFttZXNoXSxcbiAgICB9KVxuICAgIGN0eC5hZGQobmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksIHN0YXRlKVxuICAgIGN0eC5wYWludCgpXG4gICAgLy8gI2VuZFxuICAgIHN0YXRlLmFkZChuZXcgVGdkUGFpbnRlckF4ZXMoY3R4LCB7IHNjYWxlOiAyIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPlxufVxuXG5mdW5jdGlvbiBtYWtlTGlzdE9mU0RGKHRyZWU6IFRyZWUpOiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdIHtcbiAgICBjb25zdCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdID0gW11cbiAgICByZWN1cnNpdmVMaXN0T2ZTREYodHJlZSwgc2RmTGlzdClcbiAgICByZXR1cm4gc2RmTGlzdFxufVxuXG5mdW5jdGlvbiByZWN1cnNpdmVMaXN0T2ZTREYoeyBwb2ludCwgY2hpbGRyZW4gfTogVHJlZSwgc2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSkge1xuICAgIGlmICghY2hpbGRyZW4pIHJldHVyblxuXG4gICAgY29uc3QgW3gwLCB5MCwgejAsIHIwXSA9IHBvaW50XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCBbeDEsIHkxLCB6MSwgcjFdID0gY2hpbGQucG9pbnRcbiAgICAgICAgY29uc3Qgc2RmID0gKHA6IEFycmF5TnVtYmVyMykgPT4gdGdkU2RmQ2Fwc3VsZShwLCBbeDAsIHkwLCB6MF0sIFt4MSwgeTEsIHoxXSwgcjAsIHIxKVxuICAgICAgICBzZGZMaXN0LnB1c2goc2RmKVxuICAgICAgICByZWN1cnNpdmVMaXN0T2ZTREYoY2hpbGQsIHNkZkxpc3QpXG4gICAgfVxufVxuXG5pbnRlcmZhY2UgQkJveCB7XG4gICAgbWluOiBBcnJheU51bWJlcjNcbiAgICBtYXg6IEFycmF5TnVtYmVyM1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQkJveCh0cmVlOiBUcmVlKTogQkJveCB7XG4gICAgY29uc3QgZnJpbmdlID0gW3RyZWVdXG4gICAgY29uc3QgbWluOiBBcnJheU51bWJlcjMgPSBbTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWV1cbiAgICBjb25zdCBtYXg6IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZXVxuICAgIHdoaWxlIChmcmluZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBpdGVtID0gZnJpbmdlLnBvcCgpXG4gICAgICAgIGlmICghaXRlbSkgY29udGludWVcblxuICAgICAgICBjb25zdCBbeCwgeSwgeiwgcjBdID0gaXRlbS5wb2ludFxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9AMTUwXSB4LCB5LCB6ID1cIiwgeCwgeSwgeikgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNjowMlxuICAgICAgICBjb25zdCByID0gcjAgKiAxLjFcbiAgICAgICAgbWluWzBdID0gTWF0aC5taW4obWluWzBdLCB4IC0gcilcbiAgICAgICAgbWF4WzBdID0gTWF0aC5tYXgobWluWzBdLCB4ICsgcilcbiAgICAgICAgbWluWzFdID0gTWF0aC5taW4obWluWzFdLCB5IC0gcilcbiAgICAgICAgbWF4WzFdID0gTWF0aC5tYXgobWluWzFdLCB5ICsgcilcbiAgICAgICAgbWluWzJdID0gTWF0aC5taW4obWluWzJdLCB6IC0gcilcbiAgICAgICAgbWF4WzJdID0gTWF0aC5tYXgobWluWzJdLCB6ICsgcilcbiAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4pIGZyaW5nZS5wdXNoKC4uLml0ZW0uY2hpbGRyZW4pXG4gICAgfVxuICAgIHJldHVybiB7IG1pbiwgbWF4IH1cbn1cblxuZnVuY3Rpb24gZGVuZHJpdGUobGVuZ3RoOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIsIHggPSAwLCB5ID0gMCwgeiA9IDApOiBUcmVlIHtcbiAgICBjb25zdCByYWRpdXMyID0gcmFkaXVzICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSlcbiAgICBjb25zdCBsYXQwID0gbGF0ICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKVxuICAgIGNvbnN0IGxuZzAgPSBsbmcgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApXG4gICAgY29uc3QgbGF0QW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxhdDApXG4gICAgY29uc3QgbG5nQW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxuZzApXG4gICAgY29uc3QgdnkgPSBNYXRoLnNpbihsYXRBbmcpXG4gICAgY29uc3QgciA9IE1hdGguY29zKGxhdEFuZylcbiAgICBjb25zdCB2eCA9IHIgKiBNYXRoLmNvcyhsbmdBbmcpXG4gICAgY29uc3QgdnogPSByICogTWF0aC5zaW4obG5nQW5nKVxuICAgIGNvbnN0IHgyID0geCArIHZ4ICogbGVuZ3RoXG4gICAgY29uc3QgeTIgPSB5ICsgdnkgKiBsZW5ndGhcbiAgICBjb25zdCB6MiA9IHogKyB2eiAqIGxlbmd0aFxuICAgIGNvbnN0IHRyZWU6IFRyZWUgPSB7XG4gICAgICAgIHBvaW50OiBbeCwgeSwgeiwgcmFkaXVzXSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH1cbiAgICBpZiAocmFkaXVzMiA+IDAuMSkge1xuICAgICAgICBjb25zdCBjb3VudCA9IE1hdGgubWF4KDEsIE1hdGguZmxvb3IodGdkQ2FsY1JhbmRvbSgwLCAzKSkpXG4gICAgICAgIGZvciAobGV0IGxvb3AgPSAwOyBsb29wIDwgY291bnQ7IGxvb3ArKykge1xuICAgICAgICAgICAgdHJlZS5jaGlsZHJlbj8ucHVzaChcbiAgICAgICAgICAgICAgICBkZW5kcml0ZShcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSksXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czIsXG4gICAgICAgICAgICAgICAgICAgIGxhdDAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxuICAgICAgICAgICAgICAgICAgICBsbmcwICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKSxcbiAgICAgICAgICAgICAgICAgICAgeDIsXG4gICAgICAgICAgICAgICAgICAgIHkyLFxuICAgICAgICAgICAgICAgICAgICB6MixcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlXG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uIiwiVGdkUGFpbnRlckF4ZXMiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbGNSYW5kb20iLCJ0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lIiwidGdkU2RmQ2Fwc3VsZSIsInRnZFNkZlNwaGVyZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiaW5pdCIsImN0eCIsInRyZWUiLCJkZW5kcml0ZSIsImJib3giLCJjb21wdXRlQkJveCIsImJib3hDb3JuZXIiLCJiYm94U2l6ZSIsImNvbnNvbGUiLCJzZGZMaXN0IiwibWFrZUxpc3RPZlNERiIsIm9wdGlvbnMiLCJzZGZQb2ludCIsIngiLCJ5IiwieiIsInAiLCJvIiwiZGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvciIsInNkZiIsIk1hdGgiLCJnZW9tZXRyeSIsIm1lc2giLCJzdGF0ZSIsInJlY3Vyc2l2ZUxpc3RPZlNERiIsInBhcmFtIiwicG9pbnQiLCJjaGlsZHJlbiIsIl9wb2ludCIsIngwIiwieTAiLCJ6MCIsInIwIiwiY2hpbGQiLCJfY2hpbGRfcG9pbnQiLCJ4MSIsInkxIiwiejEiLCJyMSIsImZyaW5nZSIsIm1pbiIsIk51bWJlciIsIm1heCIsIl9mcmluZ2UiLCJpdGVtIiwiX2l0ZW1fcG9pbnQiLCJyIiwibGVuZ3RoIiwicmFkaXVzIiwibGF0IiwibG5nIiwicmFkaXVzMiIsImxhdDAiLCJsbmcwIiwibGF0QW5nIiwibG5nQW5nIiwidnkiLCJ2eCIsInZ6IiwieDIiLCJ5MiIsInoyIiwiY291bnQiLCJsb29wIiwiX3RyZWVfY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDYjtBQUV4QyxJQUFNSSxRQUFRO0lBQUMsc0JBQXFCO0FBQW80QjtBQUN4NkIsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osZ0RBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEs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