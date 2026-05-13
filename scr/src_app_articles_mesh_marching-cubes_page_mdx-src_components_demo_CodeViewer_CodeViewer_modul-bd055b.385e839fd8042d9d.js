"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_marching-cubes_page_mdx-src_components_demo_CodeViewer_CodeViewer_modul-bd055b"], {
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
                    fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                    lineNumber: 15,
                    columnNumber: 36
                }, this)
            }, void 0, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
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
                            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                        lineNumber: 17,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_CodeViewer__rspack_import_3["default"], {
                        language: "tsx",
                        value: full ? FULL : FOCUS
                    }, void 0, false, {
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/index.tsx",
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
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/_/marching-cubes/marching-cubes.demo.tsx",
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
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 3,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_marching_cubes__rspack_import_1["default"], {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 5,
                columnNumber: 1
            }, this),
            "\n",
            (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components.hr, {}, undefined, false, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
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
                        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                        lineNumber: 10,
                        columnNumber: 1
                    }, this),
                    "."
                ]
            }, undefined, true, {
                fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
                lineNumber: 9,
                columnNumber: 1
            }, this)
        ]
    }, undefined, true, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx",
        lineNumber: 1,
        columnNumber: 1
    }, this);
}
function MDXContent() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$_object_spread = _object_spread({}, (0,_mdx_js_react__rspack_import_2.useMDXComponents)(), props.components), MDXLayout = _$_object_spread.wrapper;
    return MDXLayout ? (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(MDXLayout, _object_spread_props(_object_spread({}, props), {
        children: (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_createMdxContent, _object_spread({}, props), undefined, false, {
            fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
        }, this)
    }), undefined, false, {
        fileName: "/home/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/marching-cubes/page.mdx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1iZDA1NWIuMzg1ZTgzOWZkODA0MmQ5ZC5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvbWFyY2hpbmctY3ViZXMuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hcmNoaW5nLWN1YmVzLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiICAgIGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xcbiAgICAgICAgYmJveENvcm5lcixcXG4gICAgICAgIGJib3hTaXplLFxcbiAgICAgICAgdm94ZWxTaXplOiAxIC8gMTYsXFxuICAgICAgICBzZGZQb2ludCh4LCB5LCB6KSB7XFxuICAgICAgICAgICAgY29uc3QgcDogQXJyYXlOdW1iZXIzID0gW3gsIHksIHpdXFxuICAgICAgICAgICAgY29uc3QgbzogQXJyYXlOdW1iZXIzID0gWzAsIDAuNSwgMF1cXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpXFxuICAgICAgICAgICAgZm9yIChjb25zdCBzZGYgb2Ygc2RmTGlzdCkge1xcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNtb290aGluZ0xldmVsOiAyLFxcbiAgICB9XFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KVxcbiAgICBjdHguYWRkKG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjIsIDAuMiwgMV0sIGRlcHRoOiAxIH0pLCBzdGF0ZSlcXG4gICAgY3R4LnBhaW50KClcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuICAgIHR5cGUgQXJyYXlOdW1iZXIzLFxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcXG4gICAgdHlwZSBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyxcXG4gICAgdHlwZSBUZ2RDb250ZXh0LFxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuICAgIFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcbiAgICBUZ2RQYWludGVyQXhlcyxcXG4gICAgVGdkUGFpbnRlckNsZWFyLFxcbiAgICBUZ2RQYWludGVyTWVzaCxcXG4gICAgVGdkUGFpbnRlclN0YXRlLFxcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXFxuICAgIHRnZENhbGNSYW5kb20sXFxuICAgIHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUsXFxuICAgIHRnZFNkZkNhcHN1bGUsXFxuICAgIHRnZFNkZlNwaGVyZSxcXG4gICAgd2ViZ2xQcmVzZXREZXB0aCxcXG59IGZyb20gXFxcIkB0b2xva29iYW4vdGdkXFxcIlxcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCJcXG5cXG50eXBlIFRyZWUgPSB7XFxuICAgIHBvaW50OiBBcnJheU51bWJlcjRcXG4gICAgY2hpbGRyZW4/OiBUcmVlW11cXG59XFxuXFxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcXG4gICAgY3R4LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEyLCAxMilcXG4gICAgbmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG4gICAgICAgIGluZXJ0aWFPcmJpdDogMTAwMCxcXG4gICAgfSlcXG4gICAgY29uc3QgdHJlZTogVHJlZSA9IHtcXG4gICAgICAgIHBvaW50OiBbMCwgMC41LCAwLCAwLjVdLFxcbiAgICAgICAgY2hpbGRyZW46IFtcXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIDg1LCAwKSxcXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMCksXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDEyMCksXFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDI0MCksXFxuICAgICAgICBdLFxcbiAgICB9XFxuICAgIGNvbnN0IGJib3ggPSBjb21wdXRlQkJveCh0cmVlKVxcbiAgICBjb25zdCBiYm94Q29ybmVyID0gYmJveC5taW5cXG4gICAgY29uc3QgYmJveFNpemU6IEFycmF5TnVtYmVyMyA9IFtiYm94Lm1heFswXSAtIGJib3gubWluWzBdLCBiYm94Lm1heFsxXSAtIGJib3gubWluWzFdLCBiYm94Lm1heFsyXSAtIGJib3gubWluWzJdXVxcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveCA9XFxcIiwgYmJveCkgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1N1xcbiAgICBjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveENvcm5lciwgYmJveFNpemUgPVxcXCIsIGJib3hDb3JuZXIsIGJib3hTaXplKSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU2XFxuICAgIGNvbnN0IHNkZkxpc3Q6IEFycmF5PChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcj4gPSBtYWtlTGlzdE9mU0RGKHRyZWUpXFxuICAgIGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xcbiAgICAgICAgYmJveENvcm5lcixcXG4gICAgICAgIGJib3hTaXplLFxcbiAgICAgICAgdm94ZWxTaXplOiAxIC8gMTYsXFxuICAgICAgICBzZGZQb2ludCh4LCB5LCB6KSB7XFxuICAgICAgICAgICAgY29uc3QgcDogQXJyYXlOdW1iZXIzID0gW3gsIHksIHpdXFxuICAgICAgICAgICAgY29uc3QgbzogQXJyYXlOdW1iZXIzID0gWzAsIDAuNSwgMF1cXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpXFxuICAgICAgICAgICAgZm9yIChjb25zdCBzZGYgb2Ygc2RmTGlzdCkge1xcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHJldHVybiBkaXN0YW5jZVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNtb290aGluZ0xldmVsOiAyLFxcbiAgICB9XFxuICAgIGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKVxcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcbiAgICAgICAgZ2VvbWV0cnksXFxuICAgICAgICBtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuICAgIH0pXFxuICAgIGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG4gICAgICAgIGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxcbiAgICB9KVxcbiAgICBjdHguYWRkKG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjIsIDAuMiwgMV0sIGRlcHRoOiAxIH0pLCBzdGF0ZSlcXG4gICAgY3R4LnBhaW50KClcXG4gICAgc3RhdGUuYWRkKG5ldyBUZ2RQYWludGVyQXhlcyhjdHgsIHsgc2NhbGU6IDIgfSkpXFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuICAgIHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPlxcbn1cXG5cXG5mdW5jdGlvbiBtYWtlTGlzdE9mU0RGKHRyZWU6IFRyZWUpOiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdIHtcXG4gICAgY29uc3Qgc2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSA9IFtdXFxuICAgIHJlY3Vyc2l2ZUxpc3RPZlNERih0cmVlLCBzZGZMaXN0KVxcbiAgICByZXR1cm4gc2RmTGlzdFxcbn1cXG5cXG5mdW5jdGlvbiByZWN1cnNpdmVMaXN0T2ZTREYoeyBwb2ludCwgY2hpbGRyZW4gfTogVHJlZSwgc2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSkge1xcbiAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm5cXG5cXG4gICAgY29uc3QgW3gwLCB5MCwgejAsIHIwXSA9IHBvaW50XFxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcXG4gICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxLCByMV0gPSBjaGlsZC5wb2ludFxcbiAgICAgICAgY29uc3Qgc2RmID0gKHA6IEFycmF5TnVtYmVyMykgPT4gdGdkU2RmQ2Fwc3VsZShwLCBbeDAsIHkwLCB6MF0sIFt4MSwgeTEsIHoxXSwgcjAsIHIxKVxcbiAgICAgICAgc2RmTGlzdC5wdXNoKHNkZilcXG4gICAgICAgIHJlY3Vyc2l2ZUxpc3RPZlNERihjaGlsZCwgc2RmTGlzdClcXG4gICAgfVxcbn1cXG5cXG5pbnRlcmZhY2UgQkJveCB7XFxuICAgIG1pbjogQXJyYXlOdW1iZXIzXFxuICAgIG1heDogQXJyYXlOdW1iZXIzXFxufVxcblxcbmZ1bmN0aW9uIGNvbXB1dGVCQm94KHRyZWU6IFRyZWUpOiBCQm94IHtcXG4gICAgY29uc3QgZnJpbmdlID0gW3RyZWVdXFxuICAgIGNvbnN0IG1pbjogQXJyYXlOdW1iZXIzID0gW051bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFldXFxuICAgIGNvbnN0IG1heDogQXJyYXlOdW1iZXIzID0gW051bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFldXFxuICAgIHdoaWxlIChmcmluZ2UubGVuZ3RoID4gMCkge1xcbiAgICAgICAgY29uc3QgaXRlbSA9IGZyaW5nZS5wb3AoKVxcbiAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxcblxcbiAgICAgICAgY29uc3QgW3gsIHksIHosIHIwXSA9IGl0ZW0ucG9pbnRcXG4gICAgICAgIGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDE1MF0geCwgeSwgeiA9XFxcIiwgeCwgeSwgeikgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNjowMlxcbiAgICAgICAgY29uc3QgciA9IHIwICogMS4xXFxuICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIHggLSByKVxcbiAgICAgICAgbWF4WzBdID0gTWF0aC5tYXgobWluWzBdLCB4ICsgcilcXG4gICAgICAgIG1pblsxXSA9IE1hdGgubWluKG1pblsxXSwgeSAtIHIpXFxuICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChtaW5bMV0sIHkgKyByKVxcbiAgICAgICAgbWluWzJdID0gTWF0aC5taW4obWluWzJdLCB6IC0gcilcXG4gICAgICAgIG1heFsyXSA9IE1hdGgubWF4KG1pblsyXSwgeiArIHIpXFxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikgZnJpbmdlLnB1c2goLi4uaXRlbS5jaGlsZHJlbilcXG4gICAgfVxcbiAgICByZXR1cm4geyBtaW4sIG1heCB9XFxufVxcblxcbmZ1bmN0aW9uIGRlbmRyaXRlKGxlbmd0aDogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgbGF0OiBudW1iZXIsIGxuZzogbnVtYmVyLCB4ID0gMCwgeSA9IDAsIHogPSAwKTogVHJlZSB7XFxuICAgIGNvbnN0IHJhZGl1czIgPSByYWRpdXMgKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKVxcbiAgICBjb25zdCBsYXQwID0gbGF0ICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKVxcbiAgICBjb25zdCBsbmcwID0gbG5nICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKVxcbiAgICBjb25zdCBsYXRBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobGF0MClcXG4gICAgY29uc3QgbG5nQW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxuZzApXFxuICAgIGNvbnN0IHZ5ID0gTWF0aC5zaW4obGF0QW5nKVxcbiAgICBjb25zdCByID0gTWF0aC5jb3MobGF0QW5nKVxcbiAgICBjb25zdCB2eCA9IHIgKiBNYXRoLmNvcyhsbmdBbmcpXFxuICAgIGNvbnN0IHZ6ID0gciAqIE1hdGguc2luKGxuZ0FuZylcXG4gICAgY29uc3QgeDIgPSB4ICsgdnggKiBsZW5ndGhcXG4gICAgY29uc3QgeTIgPSB5ICsgdnkgKiBsZW5ndGhcXG4gICAgY29uc3QgejIgPSB6ICsgdnogKiBsZW5ndGhcXG4gICAgY29uc3QgdHJlZTogVHJlZSA9IHtcXG4gICAgICAgIHBvaW50OiBbeCwgeSwgeiwgcmFkaXVzXSxcXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcXG4gICAgfVxcbiAgICBpZiAocmFkaXVzMiA+IDAuMSkge1xcbiAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgMykpKVxcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBjb3VudDsgbG9vcCsrKSB7XFxuICAgICAgICAgICAgdHJlZS5jaGlsZHJlbj8ucHVzaChcXG4gICAgICAgICAgICAgICAgZGVuZHJpdGUoXFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKSxcXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czIsXFxuICAgICAgICAgICAgICAgICAgICBsYXQwICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKSxcXG4gICAgICAgICAgICAgICAgICAgIGxuZzAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxcbiAgICAgICAgICAgICAgICAgICAgeDIsXFxuICAgICAgICAgICAgICAgICAgICB5MixcXG4gICAgICAgICAgICAgICAgICAgIHoyLFxcbiAgICAgICAgICAgICAgICApLFxcbiAgICAgICAgICAgIClcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICByZXR1cm4gdHJlZVxcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcbiAgICB0eXBlIEFycmF5TnVtYmVyMyxcbiAgICB0eXBlIEFycmF5TnVtYmVyNCxcbiAgICB0eXBlIE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zLFxuICAgIHR5cGUgVGdkQ29udGV4dCxcbiAgICBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXG4gICAgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG4gICAgVGdkUGFpbnRlckF4ZXMsXG4gICAgVGdkUGFpbnRlckNsZWFyLFxuICAgIFRnZFBhaW50ZXJNZXNoLFxuICAgIFRnZFBhaW50ZXJTdGF0ZSxcbiAgICB0Z2RDYWxjRGVnVG9SYWQsXG4gICAgdGdkQ2FsY1JhbmRvbSxcbiAgICB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lLFxuICAgIHRnZFNkZkNhcHN1bGUsXG4gICAgdGdkU2RmU3BoZXJlLFxuICAgIHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiXG5cbmltcG9ydCBWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9UZ2RcIlxuXG50eXBlIFRyZWUgPSB7XG4gICAgcG9pbnQ6IEFycmF5TnVtYmVyNFxuICAgIGNoaWxkcmVuPzogVHJlZVtdXG59XG5cbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XG4gICAgY3R4LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEyLCAxMilcbiAgICBuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGN0eCwge1xuICAgICAgICBpbmVydGlhT3JiaXQ6IDEwMDAsXG4gICAgfSlcbiAgICBjb25zdCB0cmVlOiBUcmVlID0ge1xuICAgICAgICBwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIGRlbmRyaXRlKDEsIDAuNSwgODUsIDApLFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDApLFxuICAgICAgICAgICAgZGVuZHJpdGUoMSwgMC41LCAtNjAsIDEyMCksXG4gICAgICAgICAgICBkZW5kcml0ZSgxLCAwLjUsIC02MCwgMjQwKSxcbiAgICAgICAgXSxcbiAgICB9XG4gICAgY29uc3QgYmJveCA9IGNvbXB1dGVCQm94KHRyZWUpXG4gICAgY29uc3QgYmJveENvcm5lciA9IGJib3gubWluXG4gICAgY29uc3QgYmJveFNpemU6IEFycmF5TnVtYmVyMyA9IFtiYm94Lm1heFswXSAtIGJib3gubWluWzBdLCBiYm94Lm1heFsxXSAtIGJib3gubWluWzFdLCBiYm94Lm1heFsyXSAtIGJib3gubWluWzJdXVxuICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveCA9XCIsIGJib3gpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTdcbiAgICBjb25zb2xlLmxvZyhcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3hDb3JuZXIsIGJib3hTaXplID1cIiwgYmJveENvcm5lciwgYmJveFNpemUpIC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTZcbiAgICBjb25zdCBzZGZMaXN0OiBBcnJheTwocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXI+ID0gbWFrZUxpc3RPZlNERih0cmVlKVxuICAgIC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcbiAgICBjb25zdCBvcHRpb25zOiBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyA9IHtcbiAgICAgICAgYmJveENvcm5lcixcbiAgICAgICAgYmJveFNpemUsXG4gICAgICAgIHZveGVsU2l6ZTogMSAvIDE2LFxuICAgICAgICBzZGZQb2ludCh4LCB5LCB6KSB7XG4gICAgICAgICAgICBjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel1cbiAgICAgICAgICAgIGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRpc3RhbmNlXG4gICAgICAgIH0sXG4gICAgICAgIHNtb290aGluZ0xldmVsOiAyLFxuICAgIH1cbiAgICBjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucylcbiAgICBjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xuICAgICAgICBnZW9tZXRyeSxcbiAgICAgICAgbWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxuICAgIH0pXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xuICAgICAgICBkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuICAgICAgICBjaGlsZHJlbjogW21lc2hdLFxuICAgIH0pXG4gICAgY3R4LmFkZChuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSwgc3RhdGUpXG4gICAgY3R4LnBhaW50KClcbiAgICAvLyAjZW5kXG4gICAgc3RhdGUuYWRkKG5ldyBUZ2RQYWludGVyQXhlcyhjdHgsIHsgc2NhbGU6IDIgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG4gICAgcmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+XG59XG5cbmZ1bmN0aW9uIG1ha2VMaXN0T2ZTREYodHJlZTogVHJlZSk6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10ge1xuICAgIGNvbnN0IHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10gPSBbXVxuICAgIHJlY3Vyc2l2ZUxpc3RPZlNERih0cmVlLCBzZGZMaXN0KVxuICAgIHJldHVybiBzZGZMaXN0XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUxpc3RPZlNERih7IHBvaW50LCBjaGlsZHJlbiB9OiBUcmVlLCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdKSB7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuXG5cbiAgICBjb25zdCBbeDAsIHkwLCB6MCwgcjBdID0gcG9pbnRcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IFt4MSwgeTEsIHoxLCByMV0gPSBjaGlsZC5wb2ludFxuICAgICAgICBjb25zdCBzZGYgPSAocDogQXJyYXlOdW1iZXIzKSA9PiB0Z2RTZGZDYXBzdWxlKHAsIFt4MCwgeTAsIHowXSwgW3gxLCB5MSwgejFdLCByMCwgcjEpXG4gICAgICAgIHNkZkxpc3QucHVzaChzZGYpXG4gICAgICAgIHJlY3Vyc2l2ZUxpc3RPZlNERihjaGlsZCwgc2RmTGlzdClcbiAgICB9XG59XG5cbmludGVyZmFjZSBCQm94IHtcbiAgICBtaW46IEFycmF5TnVtYmVyM1xuICAgIG1heDogQXJyYXlOdW1iZXIzXG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVCQm94KHRyZWU6IFRyZWUpOiBCQm94IHtcbiAgICBjb25zdCBmcmluZ2UgPSBbdHJlZV1cbiAgICBjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXVxuICAgIGNvbnN0IG1heDogQXJyYXlOdW1iZXIzID0gW051bWJlci5ORUdBVElWRV9JTkZJTklUWSwgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFldXG4gICAgd2hpbGUgKGZyaW5nZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKClcbiAgICAgICAgaWYgKCFpdGVtKSBjb250aW51ZVxuXG4gICAgICAgIGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVwiLCB4LCB5LCB6KSAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE2OjAyXG4gICAgICAgIGNvbnN0IHIgPSByMCAqIDEuMVxuICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIHggLSByKVxuICAgICAgICBtYXhbMF0gPSBNYXRoLm1heChtaW5bMF0sIHggKyByKVxuICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIHkgLSByKVxuICAgICAgICBtYXhbMV0gPSBNYXRoLm1heChtaW5bMV0sIHkgKyByKVxuICAgICAgICBtaW5bMl0gPSBNYXRoLm1pbihtaW5bMl0sIHogLSByKVxuICAgICAgICBtYXhbMl0gPSBNYXRoLm1heChtaW5bMl0sIHogKyByKVxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikgZnJpbmdlLnB1c2goLi4uaXRlbS5jaGlsZHJlbilcbiAgICB9XG4gICAgcmV0dXJuIHsgbWluLCBtYXggfVxufVxuXG5mdW5jdGlvbiBkZW5kcml0ZShsZW5ndGg6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlciwgeCA9IDAsIHkgPSAwLCB6ID0gMCk6IFRyZWUge1xuICAgIGNvbnN0IHJhZGl1czIgPSByYWRpdXMgKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKVxuICAgIGNvbnN0IGxhdDAgPSBsYXQgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApXG4gICAgY29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMClcbiAgICBjb25zdCBsYXRBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobGF0MClcbiAgICBjb25zdCBsbmdBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobG5nMClcbiAgICBjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZylcbiAgICBjb25zdCByID0gTWF0aC5jb3MobGF0QW5nKVxuICAgIGNvbnN0IHZ4ID0gciAqIE1hdGguY29zKGxuZ0FuZylcbiAgICBjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpXG4gICAgY29uc3QgeDIgPSB4ICsgdnggKiBsZW5ndGhcbiAgICBjb25zdCB5MiA9IHkgKyB2eSAqIGxlbmd0aFxuICAgIGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoXG4gICAgY29uc3QgdHJlZTogVHJlZSA9IHtcbiAgICAgICAgcG9pbnQ6IFt4LCB5LCB6LCByYWRpdXNdLFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgfVxuICAgIGlmIChyYWRpdXMyID4gMC4xKSB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSlcbiAgICAgICAgZm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBjb3VudDsgbG9vcCsrKSB7XG4gICAgICAgICAgICB0cmVlLmNoaWxkcmVuPy5wdXNoKFxuICAgICAgICAgICAgICAgIGRlbmRyaXRlKFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzMixcbiAgICAgICAgICAgICAgICAgICAgbGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXG4gICAgICAgICAgICAgICAgICAgIGxuZzAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxuICAgICAgICAgICAgICAgICAgICB4MixcbiAgICAgICAgICAgICAgICAgICAgeTIsXG4gICAgICAgICAgICAgICAgICAgIHoyLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWVcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24iLCJUZ2RQYWludGVyQXhlcyIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwidGdkQ2FsY0RlZ1RvUmFkIiwidGdkQ2FsY1JhbmRvbSIsInRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUiLCJ0Z2RTZGZDYXBzdWxlIiwidGdkU2RmU3BoZXJlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJpbml0IiwiY3R4IiwidHJlZSIsImRlbmRyaXRlIiwiYmJveCIsImNvbXB1dGVCQm94IiwiYmJveENvcm5lciIsImJib3hTaXplIiwiY29uc29sZSIsInNkZkxpc3QiLCJtYWtlTGlzdE9mU0RGIiwib3B0aW9ucyIsInNkZlBvaW50IiwieCIsInkiLCJ6IiwicCIsIm8iLCJkaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yIiwic2RmIiwiTWF0aCIsImdlb21ldHJ5IiwibWVzaCIsInN0YXRlIiwicmVjdXJzaXZlTGlzdE9mU0RGIiwicGFyYW0iLCJwb2ludCIsImNoaWxkcmVuIiwiX3BvaW50IiwieDAiLCJ5MCIsInowIiwicjAiLCJjaGlsZCIsIl9jaGlsZF9wb2ludCIsIngxIiwieTEiLCJ6MSIsInIxIiwiZnJpbmdlIiwibWluIiwiTnVtYmVyIiwibWF4IiwiX2ZyaW5nZSIsIml0ZW0iLCJfaXRlbV9wb2ludCIsInIiLCJsZW5ndGgiLCJyYWRpdXMiLCJsYXQiLCJsbmciLCJyYWRpdXMyIiwibGF0MCIsImxuZzAiLCJsYXRBbmciLCJsbmdBbmciLCJ2eSIsInZ4IiwidnoiLCJ4MiIsInkyIiwiejIiLCJjb3VudCIsImxvb3AiLCJfdHJlZV9jaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNiO0FBRXhDLElBQU1JLFFBQVE7SUFBQyxzQkFBcUI7QUFBbzRCO0FBQ3g2QixJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixnREFBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFD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