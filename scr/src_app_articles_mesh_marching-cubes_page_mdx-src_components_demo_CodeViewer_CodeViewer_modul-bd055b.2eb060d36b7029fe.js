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
    "Initializing WebGL": "\tconst options: MakeGeometryFromVolumeOptions = {\n\t\tbboxCorner,\n\t\tbboxSize,\n\t\tvoxelSize: 1 / 16,\n\t\tsdfPoint(x, y, z) {\n\t\t\tconst p: ArrayNumber3 = [x, y, z];\n\t\t\tconst o: ArrayNumber3 = [0, 0.5, 0];\n\t\t\tlet distance = tgdSdfSphere(p, [0, 0, 0], 0.8);\n\t\t\tfor (const sdf of sdfList) {\n\t\t\t\tdistance = Math.min(distance, sdf(p));\n\t\t\t}\n\t\t\treturn distance;\n\t\t},\n\t\tsmoothingLevel: 2,\n\t};\n\tconst geometry = tgdMakeGeometryFromVolume(options);\n\tconst mesh = new TgdPainterMesh(ctx, {\n\t\tgeometry,\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t});\n\tconst state = new TgdPainterState(ctx, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh],\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n\t\tstate,\n\t);\n\tctx.paint();"
};
var FULL = "import {\n\ttype ArrayNumber3,\n\ttype ArrayNumber4,\n\ttype MakeGeometryFromVolumeOptions,\n\ttype TgdContext,\n\tTgdControllerCameraOrbit,\n\tTgdMaterialFaceOrientation,\n\tTgdPainterAxes,\n\tTgdPainterClear,\n\tTgdPainterMesh,\n\tTgdPainterState,\n\ttgdCalcDegToRad,\n\ttgdCalcRandom,\n\ttgdMakeGeometryFromVolume,\n\ttgdSdfCapsule,\n\ttgdSdfSphere,\n\twebglPresetDepth,\n} from \"@tolokoban/tgd\";\n\nimport View from \"@/components/demo/Tgd\";\n\ntype Tree = {\n\tpoint: ArrayNumber4;\n\tchildren?: Tree[];\n};\n\nfunction init(ctx: TgdContext) {\n\tctx.camera.fitSpaceAtTarget(12, 12);\n\tnew TgdControllerCameraOrbit(ctx, {\n\t\tinertiaOrbit: 1000,\n\t});\n\tconst tree: Tree = {\n\t\tpoint: [0, 0.5, 0, 0.5],\n\t\tchildren: [\n\t\t\tdendrite(1, 0.5, 85, 0),\n\t\t\tdendrite(1, 0.5, -60, 0),\n\t\t\tdendrite(1, 0.5, -60, 120),\n\t\t\tdendrite(1, 0.5, -60, 240),\n\t\t],\n\t};\n\tconst bbox = computeBBox(tree);\n\tconst bboxCorner = bbox.min;\n\tconst bboxSize: ArrayNumber3 = [\n\t\tbbox.max[0] - bbox.min[0],\n\t\tbbox.max[1] - bbox.min[1],\n\t\tbbox.max[2] - bbox.min[2],\n\t];\n\tconsole.log(\"🐞 [marching-cubes.demo@61] bbox =\", bbox); // @FIXME: Remove this line written on 2026-02-10 at 15:57\n\tconsole.log(\n\t\t\"🐞 [marching-cubes.demo@61] bboxCorner, bboxSize =\",\n\t\tbboxCorner,\n\t\tbboxSize,\n\t); // @FIXME: Remove this line written on 2026-02-10 at 15:56\n\tconst sdfList: Array<(p: ArrayNumber3) => number> = makeListOfSDF(tree);\n\tconst options: MakeGeometryFromVolumeOptions = {\n\t\tbboxCorner,\n\t\tbboxSize,\n\t\tvoxelSize: 1 / 16,\n\t\tsdfPoint(x, y, z) {\n\t\t\tconst p: ArrayNumber3 = [x, y, z];\n\t\t\tconst o: ArrayNumber3 = [0, 0.5, 0];\n\t\t\tlet distance = tgdSdfSphere(p, [0, 0, 0], 0.8);\n\t\t\tfor (const sdf of sdfList) {\n\t\t\t\tdistance = Math.min(distance, sdf(p));\n\t\t\t}\n\t\t\treturn distance;\n\t\t},\n\t\tsmoothingLevel: 2,\n\t};\n\tconst geometry = tgdMakeGeometryFromVolume(options);\n\tconst mesh = new TgdPainterMesh(ctx, {\n\t\tgeometry,\n\t\tmaterial: new TgdMaterialFaceOrientation(),\n\t});\n\tconst state = new TgdPainterState(ctx, {\n\t\tdepth: webglPresetDepth.less,\n\t\tchildren: [mesh],\n\t});\n\tctx.add(\n\t\tnew TgdPainterClear(ctx, { color: [0.2, 0.2, 0.2, 1], depth: 1 }),\n\t\tstate,\n\t);\n\tctx.paint();\n\tstate.add(new TgdPainterAxes(ctx, { scale: 2 }));\n}\n\nexport default function Demo() {\n\treturn <View onReady={init} gizmo options={{ alpha: false }} />;\n}\n\nfunction makeListOfSDF(tree: Tree): ((p: ArrayNumber3) => number)[] {\n\tconst sdfList: ((p: ArrayNumber3) => number)[] = [];\n\trecursiveListOfSDF(tree, sdfList);\n\treturn sdfList;\n}\n\nfunction recursiveListOfSDF(\n\t{ point, children }: Tree,\n\tsdfList: ((p: ArrayNumber3) => number)[],\n) {\n\tif (!children) return;\n\n\tconst [x0, y0, z0, r0] = point;\n\tfor (const child of children) {\n\t\tconst [x1, y1, z1, r1] = child.point;\n\t\tconst sdf = (p: ArrayNumber3) =>\n\t\t\ttgdSdfCapsule(p, [x0, y0, z0], [x1, y1, z1], r0, r1);\n\t\tsdfList.push(sdf);\n\t\trecursiveListOfSDF(child, sdfList);\n\t}\n}\n\ninterface BBox {\n\tmin: ArrayNumber3;\n\tmax: ArrayNumber3;\n}\n\nfunction computeBBox(tree: Tree): BBox {\n\tconst fringe = [tree];\n\tconst min: ArrayNumber3 = [\n\t\tNumber.POSITIVE_INFINITY,\n\t\tNumber.POSITIVE_INFINITY,\n\t\tNumber.POSITIVE_INFINITY,\n\t];\n\tconst max: ArrayNumber3 = [\n\t\tNumber.NEGATIVE_INFINITY,\n\t\tNumber.NEGATIVE_INFINITY,\n\t\tNumber.NEGATIVE_INFINITY,\n\t];\n\twhile (fringe.length > 0) {\n\t\tconst item = fringe.pop();\n\t\tif (!item) continue;\n\n\t\tconst [x, y, z, r0] = item.point;\n\t\tconsole.log(\"🐞 [marching-cubes.demo@150] x, y, z =\", x, y, z); // @FIXME: Remove this line written on 2026-02-10 at 16:02\n\t\tconst r = r0 * 1.1;\n\t\tmin[0] = Math.min(min[0], x - r);\n\t\tmax[0] = Math.max(min[0], x + r);\n\t\tmin[1] = Math.min(min[1], y - r);\n\t\tmax[1] = Math.max(min[1], y + r);\n\t\tmin[2] = Math.min(min[2], z - r);\n\t\tmax[2] = Math.max(min[2], z + r);\n\t\tif (item.children) fringe.push(...item.children);\n\t}\n\treturn { min, max };\n}\n\nfunction dendrite(\n\tlength: number,\n\tradius: number,\n\tlat: number,\n\tlng: number,\n\tx = 0,\n\ty = 0,\n\tz = 0,\n): Tree {\n\tconst radius2 = radius * tgdCalcRandom(0.5, 1.1);\n\tconst lat0 = lat + tgdCalcRandom(-30, 30);\n\tconst lng0 = lng + tgdCalcRandom(-30, 30);\n\tconst latAng = tgdCalcDegToRad(lat0);\n\tconst lngAng = tgdCalcDegToRad(lng0);\n\tconst vy = Math.sin(latAng);\n\tconst r = Math.cos(latAng);\n\tconst vx = r * Math.cos(lngAng);\n\tconst vz = r * Math.sin(lngAng);\n\tconst x2 = x + vx * length;\n\tconst y2 = y + vy * length;\n\tconst z2 = z + vz * length;\n\tconst tree: Tree = {\n\t\tpoint: [x, y, z, radius],\n\t\tchildren: [],\n\t};\n\tif (radius2 > 0.1) {\n\t\tconst count = Math.max(1, Math.floor(tgdCalcRandom(0, 3)));\n\t\tfor (let loop = 0; loop < count; loop++) {\n\t\t\ttree.children?.push(\n\t\t\t\tdendrite(\n\t\t\t\t\tlength * tgdCalcRandom(0.5, 1.1),\n\t\t\t\t\tradius2,\n\t\t\t\t\tlat0 + tgdCalcRandom(-30, 30),\n\t\t\t\t\tlng0 + tgdCalcRandom(-30, 30),\n\t\t\t\t\tx2,\n\t\t\t\t\ty2,\n\t\t\t\t\tz2,\n\t\t\t\t),\n\t\t\t);\n\t\t}\n\t}\n\treturn tree;\n}\n";
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
        lineNumber: 90,
        columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1iZDA1NWIuMmViMDYwZDM2YjcwMjlmZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC9tYXJjaGluZy1jdWJlcy9fL21hcmNoaW5nLWN1YmVzL2luZGV4LnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvXy9tYXJjaGluZy1jdWJlcy9tYXJjaGluZy1jdWJlcy5kZW1vLnRzeCIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvcGFnZS5tZHgiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2FybmluZyEgVGhpcyBjb2RlIGhhcyBiZWVuIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFZpZXdCdXR0b24gfSBmcm9tIFwiQHRvbG9rb2Jhbi91aVwiXG5pbXBvcnQgQ29kZVZpZXdlciBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vQ29kZVZpZXdlclwiXG5pbXBvcnQgRGVtbyBmcm9tIFwiLi9tYXJjaGluZy1jdWJlcy5kZW1vXCJcblxuY29uc3QgRk9DVVMgPSB7XCJJbml0aWFsaXppbmcgV2ViR0xcIjpcIlxcdGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xcblxcdFxcdGJib3hDb3JuZXIsXFxuXFx0XFx0YmJveFNpemUsXFxuXFx0XFx0dm94ZWxTaXplOiAxIC8gMTYsXFxuXFx0XFx0c2RmUG9pbnQoeCwgeSwgeikge1xcblxcdFxcdFxcdGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XTtcXG5cXHRcXHRcXHRjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXTtcXG5cXHRcXHRcXHRsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpO1xcblxcdFxcdFxcdGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG5cXHRcXHRcXHRcXHRkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRyZXR1cm4gZGlzdGFuY2U7XFxuXFx0XFx0fSxcXG5cXHRcXHRzbW9vdGhpbmdMZXZlbDogMixcXG5cXHR9O1xcblxcdGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcblxcdFxcdGdlb21ldHJ5LFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW21lc2hdLFxcblxcdH0pO1xcblxcdGN0eC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksXFxuXFx0XFx0c3RhdGUsXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcIn1cbmNvbnN0IEZVTEwgPSBcImltcG9ydCB7XFxuXFx0dHlwZSBBcnJheU51bWJlcjMsXFxuXFx0dHlwZSBBcnJheU51bWJlcjQsXFxuXFx0dHlwZSBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyxcXG5cXHR0eXBlIFRnZENvbnRleHQsXFxuXFx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxcblxcdFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uLFxcblxcdFRnZFBhaW50ZXJBeGVzLFxcblxcdFRnZFBhaW50ZXJDbGVhcixcXG5cXHRUZ2RQYWludGVyTWVzaCxcXG5cXHRUZ2RQYWludGVyU3RhdGUsXFxuXFx0dGdkQ2FsY0RlZ1RvUmFkLFxcblxcdHRnZENhbGNSYW5kb20sXFxuXFx0dGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZSxcXG5cXHR0Z2RTZGZDYXBzdWxlLFxcblxcdHRnZFNkZlNwaGVyZSxcXG5cXHR3ZWJnbFByZXNldERlcHRoLFxcbn0gZnJvbSBcXFwiQHRvbG9rb2Jhbi90Z2RcXFwiO1xcblxcbmltcG9ydCBWaWV3IGZyb20gXFxcIkAvY29tcG9uZW50cy9kZW1vL1RnZFxcXCI7XFxuXFxudHlwZSBUcmVlID0ge1xcblxcdHBvaW50OiBBcnJheU51bWJlcjQ7XFxuXFx0Y2hpbGRyZW4/OiBUcmVlW107XFxufTtcXG5cXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xcblxcdGN0eC5jYW1lcmEuZml0U3BhY2VBdFRhcmdldCgxMiwgMTIpO1xcblxcdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XFxuXFx0XFx0aW5lcnRpYU9yYml0OiAxMDAwLFxcblxcdH0pO1xcblxcdGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuXFx0XFx0cG9pbnQ6IFswLCAwLjUsIDAsIDAuNV0sXFxuXFx0XFx0Y2hpbGRyZW46IFtcXG5cXHRcXHRcXHRkZW5kcml0ZSgxLCAwLjUsIDg1LCAwKSxcXG5cXHRcXHRcXHRkZW5kcml0ZSgxLCAwLjUsIC02MCwgMCksXFxuXFx0XFx0XFx0ZGVuZHJpdGUoMSwgMC41LCAtNjAsIDEyMCksXFxuXFx0XFx0XFx0ZGVuZHJpdGUoMSwgMC41LCAtNjAsIDI0MCksXFxuXFx0XFx0XSxcXG5cXHR9O1xcblxcdGNvbnN0IGJib3ggPSBjb21wdXRlQkJveCh0cmVlKTtcXG5cXHRjb25zdCBiYm94Q29ybmVyID0gYmJveC5taW47XFxuXFx0Y29uc3QgYmJveFNpemU6IEFycmF5TnVtYmVyMyA9IFtcXG5cXHRcXHRiYm94Lm1heFswXSAtIGJib3gubWluWzBdLFxcblxcdFxcdGJib3gubWF4WzFdIC0gYmJveC5taW5bMV0sXFxuXFx0XFx0YmJveC5tYXhbMl0gLSBiYm94Lm1pblsyXSxcXG5cXHRdO1xcblxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94ID1cXFwiLCBiYm94KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1N1xcblxcdGNvbnNvbGUubG9nKFxcblxcdFxcdFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDYxXSBiYm94Q29ybmVyLCBiYm94U2l6ZSA9XFxcIixcXG5cXHRcXHRiYm94Q29ybmVyLFxcblxcdFxcdGJib3hTaXplLFxcblxcdCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTZcXG5cXHRjb25zdCBzZGZMaXN0OiBBcnJheTwocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXI+ID0gbWFrZUxpc3RPZlNERih0cmVlKTtcXG5cXHRjb25zdCBvcHRpb25zOiBNYWtlR2VvbWV0cnlGcm9tVm9sdW1lT3B0aW9ucyA9IHtcXG5cXHRcXHRiYm94Q29ybmVyLFxcblxcdFxcdGJib3hTaXplLFxcblxcdFxcdHZveGVsU2l6ZTogMSAvIDE2LFxcblxcdFxcdHNkZlBvaW50KHgsIHksIHopIHtcXG5cXHRcXHRcXHRjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel07XFxuXFx0XFx0XFx0Y29uc3QgbzogQXJyYXlOdW1iZXIzID0gWzAsIDAuNSwgMF07XFxuXFx0XFx0XFx0bGV0IGRpc3RhbmNlID0gdGdkU2RmU3BoZXJlKHAsIFswLCAwLCAwXSwgMC44KTtcXG5cXHRcXHRcXHRmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XFxuXFx0XFx0XFx0XFx0ZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZSwgc2RmKHApKTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0XFx0cmV0dXJuIGRpc3RhbmNlO1xcblxcdFxcdH0sXFxuXFx0XFx0c21vb3RoaW5nTGV2ZWw6IDIsXFxuXFx0fTtcXG5cXHRjb25zdCBnZW9tZXRyeSA9IHRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUob3B0aW9ucyk7XFxuXFx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcXG5cXHRcXHRnZW9tZXRyeSxcXG5cXHRcXHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXFxuXFx0fSk7XFxuXFx0Y29uc3Qgc3RhdGUgPSBuZXcgVGdkUGFpbnRlclN0YXRlKGN0eCwge1xcblxcdFxcdGRlcHRoOiB3ZWJnbFByZXNldERlcHRoLmxlc3MsXFxuXFx0XFx0Y2hpbGRyZW46IFttZXNoXSxcXG5cXHR9KTtcXG5cXHRjdHguYWRkKFxcblxcdFxcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjIsIDAuMiwgMV0sIGRlcHRoOiAxIH0pLFxcblxcdFxcdHN0YXRlLFxcblxcdCk7XFxuXFx0Y3R4LnBhaW50KCk7XFxuXFx0c3RhdGUuYWRkKG5ldyBUZ2RQYWludGVyQXhlcyhjdHgsIHsgc2NhbGU6IDIgfSkpO1xcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xcblxcdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPjtcXG59XFxuXFxuZnVuY3Rpb24gbWFrZUxpc3RPZlNERih0cmVlOiBUcmVlKTogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSB7XFxuXFx0Y29uc3Qgc2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSA9IFtdO1xcblxcdHJlY3Vyc2l2ZUxpc3RPZlNERih0cmVlLCBzZGZMaXN0KTtcXG5cXHRyZXR1cm4gc2RmTGlzdDtcXG59XFxuXFxuZnVuY3Rpb24gcmVjdXJzaXZlTGlzdE9mU0RGKFxcblxcdHsgcG9pbnQsIGNoaWxkcmVuIH06IFRyZWUsXFxuXFx0c2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSxcXG4pIHtcXG5cXHRpZiAoIWNoaWxkcmVuKSByZXR1cm47XFxuXFxuXFx0Y29uc3QgW3gwLCB5MCwgejAsIHIwXSA9IHBvaW50O1xcblxcdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcXG5cXHRcXHRjb25zdCBbeDEsIHkxLCB6MSwgcjFdID0gY2hpbGQucG9pbnQ7XFxuXFx0XFx0Y29uc3Qgc2RmID0gKHA6IEFycmF5TnVtYmVyMykgPT5cXG5cXHRcXHRcXHR0Z2RTZGZDYXBzdWxlKHAsIFt4MCwgeTAsIHowXSwgW3gxLCB5MSwgejFdLCByMCwgcjEpO1xcblxcdFxcdHNkZkxpc3QucHVzaChzZGYpO1xcblxcdFxcdHJlY3Vyc2l2ZUxpc3RPZlNERihjaGlsZCwgc2RmTGlzdCk7XFxuXFx0fVxcbn1cXG5cXG5pbnRlcmZhY2UgQkJveCB7XFxuXFx0bWluOiBBcnJheU51bWJlcjM7XFxuXFx0bWF4OiBBcnJheU51bWJlcjM7XFxufVxcblxcbmZ1bmN0aW9uIGNvbXB1dGVCQm94KHRyZWU6IFRyZWUpOiBCQm94IHtcXG5cXHRjb25zdCBmcmluZ2UgPSBbdHJlZV07XFxuXFx0Y29uc3QgbWluOiBBcnJheU51bWJlcjMgPSBbXFxuXFx0XFx0TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxcblxcdFxcdE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcXG5cXHRcXHROdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXFxuXFx0XTtcXG5cXHRjb25zdCBtYXg6IEFycmF5TnVtYmVyMyA9IFtcXG5cXHRcXHROdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXFxuXFx0XFx0TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxcblxcdFxcdE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcXG5cXHRdO1xcblxcdHdoaWxlIChmcmluZ2UubGVuZ3RoID4gMCkge1xcblxcdFxcdGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKCk7XFxuXFx0XFx0aWYgKCFpdGVtKSBjb250aW51ZTtcXG5cXG5cXHRcXHRjb25zdCBbeCwgeSwgeiwgcjBdID0gaXRlbS5wb2ludDtcXG5cXHRcXHRjb25zb2xlLmxvZyhcXFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVxcXCIsIHgsIHksIHopOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE2OjAyXFxuXFx0XFx0Y29uc3QgciA9IHIwICogMS4xO1xcblxcdFxcdG1pblswXSA9IE1hdGgubWluKG1pblswXSwgeCAtIHIpO1xcblxcdFxcdG1heFswXSA9IE1hdGgubWF4KG1pblswXSwgeCArIHIpO1xcblxcdFxcdG1pblsxXSA9IE1hdGgubWluKG1pblsxXSwgeSAtIHIpO1xcblxcdFxcdG1heFsxXSA9IE1hdGgubWF4KG1pblsxXSwgeSArIHIpO1xcblxcdFxcdG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgeiAtIHIpO1xcblxcdFxcdG1heFsyXSA9IE1hdGgubWF4KG1pblsyXSwgeiArIHIpO1xcblxcdFxcdGlmIChpdGVtLmNoaWxkcmVuKSBmcmluZ2UucHVzaCguLi5pdGVtLmNoaWxkcmVuKTtcXG5cXHR9XFxuXFx0cmV0dXJuIHsgbWluLCBtYXggfTtcXG59XFxuXFxuZnVuY3Rpb24gZGVuZHJpdGUoXFxuXFx0bGVuZ3RoOiBudW1iZXIsXFxuXFx0cmFkaXVzOiBudW1iZXIsXFxuXFx0bGF0OiBudW1iZXIsXFxuXFx0bG5nOiBudW1iZXIsXFxuXFx0eCA9IDAsXFxuXFx0eSA9IDAsXFxuXFx0eiA9IDAsXFxuKTogVHJlZSB7XFxuXFx0Y29uc3QgcmFkaXVzMiA9IHJhZGl1cyAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpO1xcblxcdGNvbnN0IGxhdDAgPSBsYXQgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApO1xcblxcdGNvbnN0IGxuZzAgPSBsbmcgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApO1xcblxcdGNvbnN0IGxhdEFuZyA9IHRnZENhbGNEZWdUb1JhZChsYXQwKTtcXG5cXHRjb25zdCBsbmdBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobG5nMCk7XFxuXFx0Y29uc3QgdnkgPSBNYXRoLnNpbihsYXRBbmcpO1xcblxcdGNvbnN0IHIgPSBNYXRoLmNvcyhsYXRBbmcpO1xcblxcdGNvbnN0IHZ4ID0gciAqIE1hdGguY29zKGxuZ0FuZyk7XFxuXFx0Y29uc3QgdnogPSByICogTWF0aC5zaW4obG5nQW5nKTtcXG5cXHRjb25zdCB4MiA9IHggKyB2eCAqIGxlbmd0aDtcXG5cXHRjb25zdCB5MiA9IHkgKyB2eSAqIGxlbmd0aDtcXG5cXHRjb25zdCB6MiA9IHogKyB2eiAqIGxlbmd0aDtcXG5cXHRjb25zdCB0cmVlOiBUcmVlID0ge1xcblxcdFxcdHBvaW50OiBbeCwgeSwgeiwgcmFkaXVzXSxcXG5cXHRcXHRjaGlsZHJlbjogW10sXFxuXFx0fTtcXG5cXHRpZiAocmFkaXVzMiA+IDAuMSkge1xcblxcdFxcdGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSk7XFxuXFx0XFx0Zm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBjb3VudDsgbG9vcCsrKSB7XFxuXFx0XFx0XFx0dHJlZS5jaGlsZHJlbj8ucHVzaChcXG5cXHRcXHRcXHRcXHRkZW5kcml0ZShcXG5cXHRcXHRcXHRcXHRcXHRsZW5ndGggKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKSxcXG5cXHRcXHRcXHRcXHRcXHRyYWRpdXMyLFxcblxcdFxcdFxcdFxcdFxcdGxhdDAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxcblxcdFxcdFxcdFxcdFxcdGxuZzAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxcblxcdFxcdFxcdFxcdFxcdHgyLFxcblxcdFxcdFxcdFxcdFxcdHkyLFxcblxcdFxcdFxcdFxcdFxcdHoyLFxcblxcdFxcdFxcdFxcdCksXFxuXFx0XFx0XFx0KTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcdHJldHVybiB0cmVlO1xcbn1cXG5cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbGYtbGVmdFwiPjxEZW1vIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Vmlld0J1dHRvbiB2YXJpYW50PVwiZWxldmF0ZWRcIiBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsKCFmdWxsKX0+XG4gICAgICAgICAgICAgICAgICAgIHtmdWxsID8gXCJTaG93IGNvZGUgZGV0YWlsc1wiIDogXCJTaG93IGZ1bGwgY29kZVwifVxuICAgICAgICAgICAgICAgIDwvVmlld0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvZGVWaWV3ZXIgbGFuZ3VhZ2U9XCJ0c3hcIiB2YWx1ZT17ZnVsbCA/IEZVTEwgOiBGT0NVU30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG59IiwiaW1wb3J0IHtcblx0dHlwZSBBcnJheU51bWJlcjMsXG5cdHR5cGUgQXJyYXlOdW1iZXI0LFxuXHR0eXBlIE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXG5cdFRnZFBhaW50ZXJBeGVzLFxuXHRUZ2RQYWludGVyQ2xlYXIsXG5cdFRnZFBhaW50ZXJNZXNoLFxuXHRUZ2RQYWludGVyU3RhdGUsXG5cdHRnZENhbGNEZWdUb1JhZCxcblx0dGdkQ2FsY1JhbmRvbSxcblx0dGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZSxcblx0dGdkU2RmQ2Fwc3VsZSxcblx0dGdkU2RmU3BoZXJlLFxuXHR3ZWJnbFByZXNldERlcHRoLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIkAvY29tcG9uZW50cy9kZW1vL1RnZFwiO1xuXG50eXBlIFRyZWUgPSB7XG5cdHBvaW50OiBBcnJheU51bWJlcjQ7XG5cdGNoaWxkcmVuPzogVHJlZVtdO1xufTtcblxuZnVuY3Rpb24gaW5pdChjdHg6IFRnZENvbnRleHQpIHtcblx0Y3R4LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEyLCAxMik7XG5cdG5ldyBUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQoY3R4LCB7XG5cdFx0aW5lcnRpYU9yYml0OiAxMDAwLFxuXHR9KTtcblx0Y29uc3QgdHJlZTogVHJlZSA9IHtcblx0XHRwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcblx0XHRjaGlsZHJlbjogW1xuXHRcdFx0ZGVuZHJpdGUoMSwgMC41LCA4NSwgMCksXG5cdFx0XHRkZW5kcml0ZSgxLCAwLjUsIC02MCwgMCksXG5cdFx0XHRkZW5kcml0ZSgxLCAwLjUsIC02MCwgMTIwKSxcblx0XHRcdGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAyNDApLFxuXHRcdF0sXG5cdH07XG5cdGNvbnN0IGJib3ggPSBjb21wdXRlQkJveCh0cmVlKTtcblx0Y29uc3QgYmJveENvcm5lciA9IGJib3gubWluO1xuXHRjb25zdCBiYm94U2l6ZTogQXJyYXlOdW1iZXIzID0gW1xuXHRcdGJib3gubWF4WzBdIC0gYmJveC5taW5bMF0sXG5cdFx0YmJveC5tYXhbMV0gLSBiYm94Lm1pblsxXSxcblx0XHRiYm94Lm1heFsyXSAtIGJib3gubWluWzJdLFxuXHRdO1xuXHRjb25zb2xlLmxvZyhcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3ggPVwiLCBiYm94KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1N1xuXHRjb25zb2xlLmxvZyhcblx0XHRcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3hDb3JuZXIsIGJib3hTaXplID1cIixcblx0XHRiYm94Q29ybmVyLFxuXHRcdGJib3hTaXplLFxuXHQpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU2XG5cdGNvbnN0IHNkZkxpc3Q6IEFycmF5PChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcj4gPSBtYWtlTGlzdE9mU0RGKHRyZWUpO1xuXHQvLyAjYmVnaW4gSW5pdGlhbGl6aW5nIFdlYkdMXG5cdGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xuXHRcdGJib3hDb3JuZXIsXG5cdFx0YmJveFNpemUsXG5cdFx0dm94ZWxTaXplOiAxIC8gMTYsXG5cdFx0c2RmUG9pbnQoeCwgeSwgeikge1xuXHRcdFx0Y29uc3QgcDogQXJyYXlOdW1iZXIzID0gW3gsIHksIHpdO1xuXHRcdFx0Y29uc3QgbzogQXJyYXlOdW1iZXIzID0gWzAsIDAuNSwgMF07XG5cdFx0XHRsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpO1xuXHRcdFx0Zm9yIChjb25zdCBzZGYgb2Ygc2RmTGlzdCkge1xuXHRcdFx0XHRkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRpc3RhbmNlO1xuXHRcdH0sXG5cdFx0c21vb3RoaW5nTGV2ZWw6IDIsXG5cdH07XG5cdGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKTtcblx0Y29uc3QgbWVzaCA9IG5ldyBUZ2RQYWludGVyTWVzaChjdHgsIHtcblx0XHRnZW9tZXRyeSxcblx0XHRtYXRlcmlhbDogbmV3IFRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uKCksXG5cdH0pO1xuXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XG5cdFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcblx0XHRjaGlsZHJlbjogW21lc2hdLFxuXHR9KTtcblx0Y3R4LmFkZChcblx0XHRuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSxcblx0XHRzdGF0ZSxcblx0KTtcblx0Y3R4LnBhaW50KCk7XG5cdC8vICNlbmRcblx0c3RhdGUuYWRkKG5ldyBUZ2RQYWludGVyQXhlcyhjdHgsIHsgc2NhbGU6IDIgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZW1vKCkge1xuXHRyZXR1cm4gPFZpZXcgb25SZWFkeT17aW5pdH0gZ2l6bW8gb3B0aW9ucz17eyBhbHBoYTogZmFsc2UgfX0gLz47XG59XG5cbmZ1bmN0aW9uIG1ha2VMaXN0T2ZTREYodHJlZTogVHJlZSk6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10ge1xuXHRjb25zdCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdID0gW107XG5cdHJlY3Vyc2l2ZUxpc3RPZlNERih0cmVlLCBzZGZMaXN0KTtcblx0cmV0dXJuIHNkZkxpc3Q7XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUxpc3RPZlNERihcblx0eyBwb2ludCwgY2hpbGRyZW4gfTogVHJlZSxcblx0c2RmTGlzdDogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSxcbikge1xuXHRpZiAoIWNoaWxkcmVuKSByZXR1cm47XG5cblx0Y29uc3QgW3gwLCB5MCwgejAsIHIwXSA9IHBvaW50O1xuXHRmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG5cdFx0Y29uc3QgW3gxLCB5MSwgejEsIHIxXSA9IGNoaWxkLnBvaW50O1xuXHRcdGNvbnN0IHNkZiA9IChwOiBBcnJheU51bWJlcjMpID0+XG5cdFx0XHR0Z2RTZGZDYXBzdWxlKHAsIFt4MCwgeTAsIHowXSwgW3gxLCB5MSwgejFdLCByMCwgcjEpO1xuXHRcdHNkZkxpc3QucHVzaChzZGYpO1xuXHRcdHJlY3Vyc2l2ZUxpc3RPZlNERihjaGlsZCwgc2RmTGlzdCk7XG5cdH1cbn1cblxuaW50ZXJmYWNlIEJCb3gge1xuXHRtaW46IEFycmF5TnVtYmVyMztcblx0bWF4OiBBcnJheU51bWJlcjM7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVCQm94KHRyZWU6IFRyZWUpOiBCQm94IHtcblx0Y29uc3QgZnJpbmdlID0gW3RyZWVdO1xuXHRjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtcblx0XHROdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG5cdFx0TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRcdE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcblx0XTtcblx0Y29uc3QgbWF4OiBBcnJheU51bWJlcjMgPSBbXG5cdFx0TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuXHRcdE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcblx0XHROdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG5cdF07XG5cdHdoaWxlIChmcmluZ2UubGVuZ3RoID4gMCkge1xuXHRcdGNvbnN0IGl0ZW0gPSBmcmluZ2UucG9wKCk7XG5cdFx0aWYgKCFpdGVtKSBjb250aW51ZTtcblxuXHRcdGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50O1xuXHRcdGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0AxNTBdIHgsIHksIHogPVwiLCB4LCB5LCB6KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNjowMlxuXHRcdGNvbnN0IHIgPSByMCAqIDEuMTtcblx0XHRtaW5bMF0gPSBNYXRoLm1pbihtaW5bMF0sIHggLSByKTtcblx0XHRtYXhbMF0gPSBNYXRoLm1heChtaW5bMF0sIHggKyByKTtcblx0XHRtaW5bMV0gPSBNYXRoLm1pbihtaW5bMV0sIHkgLSByKTtcblx0XHRtYXhbMV0gPSBNYXRoLm1heChtaW5bMV0sIHkgKyByKTtcblx0XHRtaW5bMl0gPSBNYXRoLm1pbihtaW5bMl0sIHogLSByKTtcblx0XHRtYXhbMl0gPSBNYXRoLm1heChtaW5bMl0sIHogKyByKTtcblx0XHRpZiAoaXRlbS5jaGlsZHJlbikgZnJpbmdlLnB1c2goLi4uaXRlbS5jaGlsZHJlbik7XG5cdH1cblx0cmV0dXJuIHsgbWluLCBtYXggfTtcbn1cblxuZnVuY3Rpb24gZGVuZHJpdGUoXG5cdGxlbmd0aDogbnVtYmVyLFxuXHRyYWRpdXM6IG51bWJlcixcblx0bGF0OiBudW1iZXIsXG5cdGxuZzogbnVtYmVyLFxuXHR4ID0gMCxcblx0eSA9IDAsXG5cdHogPSAwLFxuKTogVHJlZSB7XG5cdGNvbnN0IHJhZGl1czIgPSByYWRpdXMgKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKTtcblx0Y29uc3QgbGF0MCA9IGxhdCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCk7XG5cdGNvbnN0IGxuZzAgPSBsbmcgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApO1xuXHRjb25zdCBsYXRBbmcgPSB0Z2RDYWxjRGVnVG9SYWQobGF0MCk7XG5cdGNvbnN0IGxuZ0FuZyA9IHRnZENhbGNEZWdUb1JhZChsbmcwKTtcblx0Y29uc3QgdnkgPSBNYXRoLnNpbihsYXRBbmcpO1xuXHRjb25zdCByID0gTWF0aC5jb3MobGF0QW5nKTtcblx0Y29uc3QgdnggPSByICogTWF0aC5jb3MobG5nQW5nKTtcblx0Y29uc3QgdnogPSByICogTWF0aC5zaW4obG5nQW5nKTtcblx0Y29uc3QgeDIgPSB4ICsgdnggKiBsZW5ndGg7XG5cdGNvbnN0IHkyID0geSArIHZ5ICogbGVuZ3RoO1xuXHRjb25zdCB6MiA9IHogKyB2eiAqIGxlbmd0aDtcblx0Y29uc3QgdHJlZTogVHJlZSA9IHtcblx0XHRwb2ludDogW3gsIHksIHosIHJhZGl1c10sXG5cdFx0Y2hpbGRyZW46IFtdLFxuXHR9O1xuXHRpZiAocmFkaXVzMiA+IDAuMSkge1xuXHRcdGNvbnN0IGNvdW50ID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcih0Z2RDYWxjUmFuZG9tKDAsIDMpKSk7XG5cdFx0Zm9yIChsZXQgbG9vcCA9IDA7IGxvb3AgPCBjb3VudDsgbG9vcCsrKSB7XG5cdFx0XHR0cmVlLmNoaWxkcmVuPy5wdXNoKFxuXHRcdFx0XHRkZW5kcml0ZShcblx0XHRcdFx0XHRsZW5ndGggKiB0Z2RDYWxjUmFuZG9tKDAuNSwgMS4xKSxcblx0XHRcdFx0XHRyYWRpdXMyLFxuXHRcdFx0XHRcdGxhdDAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxuXHRcdFx0XHRcdGxuZzAgKyB0Z2RDYWxjUmFuZG9tKC0zMCwgMzApLFxuXHRcdFx0XHRcdHgyLFxuXHRcdFx0XHRcdHkyLFxuXHRcdFx0XHRcdHoyLFxuXHRcdFx0XHQpLFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRyZWU7XG59XG4iLCIiLCIvKipcbiAqIEBpbXBvcnQge01EWENvbXBvbmVudHN9IGZyb20gJ21keC90eXBlcy5qcydcbiAqIEBpbXBvcnQge0NvbXBvbmVudCwgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0J1xuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIE1lcmdlQ29tcG9uZW50c1xuICogICBDdXN0b20gbWVyZ2UgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSBjdXJyZW50Q29tcG9uZW50c1xuICogICBDdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgY29udGV4dC5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMuXG4gKlxuICogQHR5cGVkZWYgUHJvcHNcbiAqICAgQ29uZmlndXJhdGlvbiBmb3IgYE1EWFByb3ZpZGVyYC5cbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NoaWxkcmVuXVxuICogICBDaGlsZHJlbiAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtkaXNhYmxlUGFyZW50Q29udGV4dD1mYWxzZV1cbiAqICAgVHVybiBvZmYgb3V0ZXIgY29tcG9uZW50IGNvbnRleHQgKGRlZmF1bHQ6IGBmYWxzZWApLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqIEB0eXBlIHtSZWFkb25seTxNRFhDb21wb25lbnRzPn0gKi9cbmNvbnN0IGVtcHR5Q29tcG9uZW50cyA9IHt9XG5cbmNvbnN0IE1EWENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KGVtcHR5Q29tcG9uZW50cylcblxuLyoqXG4gKiBHZXQgY3VycmVudCBjb21wb25lbnRzIGZyb20gdGhlIE1EWCBDb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz4gfCBNZXJnZUNvbXBvbmVudHMgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29tcG9uZW50c11cbiAqICAgQWRkaXRpb25hbCBjb21wb25lbnRzIHRvIHVzZSBvciBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGVtIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7TURYQ29tcG9uZW50c31cbiAqICAgQ3VycmVudCBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTURYQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gIGNvbnN0IGNvbnRleHRDb21wb25lbnRzID0gUmVhY3QudXNlQ29udGV4dChNRFhDb250ZXh0KVxuXG4gIC8vIE1lbW9pemUgdG8gYXZvaWQgdW5uZWNlc3NhcnkgdG9wLWxldmVsIGNvbnRleHQgY2hhbmdlc1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBDdXN0b20gbWVyZ2UgdmlhIGEgZnVuY3Rpb24gcHJvcFxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gey4uLmNvbnRleHRDb21wb25lbnRzLCAuLi5jb21wb25lbnRzfVxuICAgIH0sXG4gICAgW2NvbnRleHRDb21wb25lbnRzLCBjb21wb25lbnRzXVxuICApXG59XG5cbi8qKlxuICogUHJvdmlkZXIgZm9yIE1EWCBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHk8UHJvcHM+fSBwcm9wZXJ0aWVzXG4gKiAgIFByb3BlcnRpZXMuXG4gKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICogICBFbGVtZW50LlxuICogQHNhdGlzZmllcyB7Q29tcG9uZW50fVxuICovXG5leHBvcnQgZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcGVydGllcykge1xuICAvKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuICBsZXQgYWxsQ29tcG9uZW50c1xuXG4gIGlmIChwcm9wZXJ0aWVzLmRpc2FibGVQYXJlbnRDb250ZXh0KSB7XG4gICAgYWxsQ29tcG9uZW50cyA9XG4gICAgICB0eXBlb2YgcHJvcGVydGllcy5jb21wb25lbnRzID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcGVydGllcy5jb21wb25lbnRzKGVtcHR5Q29tcG9uZW50cylcbiAgICAgICAgOiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgfHwgZW1wdHlDb21wb25lbnRzXG4gIH0gZWxzZSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IHVzZU1EWENvbXBvbmVudHMocHJvcGVydGllcy5jb21wb25lbnRzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgTURYQ29udGV4dC5Qcm92aWRlcixcbiAgICB7dmFsdWU6IGFsbENvbXBvbmVudHN9LFxuICAgIHByb3BlcnRpZXMuY2hpbGRyZW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVmlld0J1dHRvbiIsIkNvZGVWaWV3ZXIiLCJEZW1vIiwiRk9DVVMiLCJGVUxMIiwiRGVtb0NvbnRhaW5lciIsIl9SZWFjdF91c2VTdGF0ZSIsImZ1bGwiLCJzZXRGdWxsIiwib25DbGljayIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZE1hdGVyaWFsRmFjZU9yaWVudGF0aW9uIiwiVGdkUGFpbnRlckF4ZXMiLCJUZ2RQYWludGVyQ2xlYXIiLCJUZ2RQYWludGVyTWVzaCIsIlRnZFBhaW50ZXJTdGF0ZSIsInRnZENhbGNEZWdUb1JhZCIsInRnZENhbGNSYW5kb20iLCJ0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lIiwidGdkU2RmQ2Fwc3VsZSIsInRnZFNkZlNwaGVyZSIsIndlYmdsUHJlc2V0RGVwdGgiLCJWaWV3IiwiaW5pdCIsImN0eCIsInRyZWUiLCJkZW5kcml0ZSIsImJib3giLCJjb21wdXRlQkJveCIsImJib3hDb3JuZXIiLCJiYm94U2l6ZSIsImNvbnNvbGUiLCJzZGZMaXN0IiwibWFrZUxpc3RPZlNERiIsIm9wdGlvbnMiLCJzZGZQb2ludCIsIngiLCJ5IiwieiIsInAiLCJvIiwiZGlzdGFuY2UiLCJfaXRlcmF0b3JFcnJvciIsInNkZiIsIk1hdGgiLCJnZW9tZXRyeSIsIm1lc2giLCJzdGF0ZSIsInJlY3Vyc2l2ZUxpc3RPZlNERiIsInBhcmFtIiwicG9pbnQiLCJjaGlsZHJlbiIsIl9wb2ludCIsIngwIiwieTAiLCJ6MCIsInIwIiwiY2hpbGQiLCJfY2hpbGRfcG9pbnQiLCJ4MSIsInkxIiwiejEiLCJyMSIsImZyaW5nZSIsIm1pbiIsIk51bWJlciIsIm1heCIsIl9mcmluZ2UiLCJpdGVtIiwiX2l0ZW1fcG9pbnQiLCJyIiwibGVuZ3RoIiwicmFkaXVzIiwibGF0IiwibG5nIiwicmFkaXVzMiIsImxhdDAiLCJsbmcwIiwibGF0QW5nIiwibG5nQW5nIiwidnkiLCJ2eCIsInZ6IiwieDIiLCJ5MiIsInoyIiwiY291bnQiLCJsb29wIiwiX3RyZWVfY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztDQUVDLEdBQ3dCO0FBQ2lCO0FBQ1c7QUFDYjtBQUV4QyxJQUFNSSxRQUFRO0lBQUMsc0JBQXFCO0FBQXl6QjtBQUM3MUIsSUFBTUMsT0FBTztBQUVFLFNBQVNDO0lBQ3BCLElBQXdCQyxtQ0FBQUEseUNBQWMsQ0FBQyxZQUFoQ0MsT0FBaUJELG9CQUFYRSxVQUFXRjtJQUN4QixxQkFBTzs7MEJBQ0gsa0RBQUM7Z0JBQUksV0FBVTswQkFBWSxnRUFBQ0osZ0RBQUlBOzs7Ozs7Ozs7OzBCQUNoQyxrREFBQztnQkFBSSxXQUFVOztrQ0FDWCxrREFBQztrQ0FDRyxnRUFBQ0YseUNBQVVBOzRCQUFDLFNBQVE7NEJBQVdTLFNBQVMsU0FBVEE7dUNBQWVELFFBQVEsQ0FBQ0Q7O3NDQUNsREEsT0FBTyxzQkFBc0I7Ozs7Ozs7Ozs7O2tDQUd0QyxrREFBQ04sdURBQVVBO3dCQUFDLFVBQVM7d0JBQU0sT0FBT00sT0FBT0gsT0FBT0Q7Ozs7Ozs7Ozs7Ozs7O0FBRzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3QjtBQUVpQjtB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