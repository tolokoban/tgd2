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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF9tYXJjaGluZy1jdWJlc19wYWdlX21keC1zcmNfY29tcG9uZW50c19kZW1vX0NvZGVWaWV3ZXJfQ29kZVZpZXdlcl9tb2R1bC1iZDA1NWIuZTRhMDk1M2Y0YTg1ZGQzYi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvaW5kZXgudHN4IiwiL2hvbWUvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL21hcmNoaW5nLWN1YmVzL18vbWFyY2hpbmctY3ViZXMvbWFyY2hpbmctY3ViZXMuZGVtby50c3giLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvbWFyY2hpbmctY3ViZXMvcGFnZS5tZHgiLCIvaG9tZS90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXYXJuaW5nISBUaGlzIGNvZGUgaGFzIGJlZW4gZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVmlld0J1dHRvbiB9IGZyb20gXCJAdG9sb2tvYmFuL3VpXCJcbmltcG9ydCBDb2RlVmlld2VyIGZyb20gXCJAL2NvbXBvbmVudHMvZGVtby9Db2RlVmlld2VyXCJcbmltcG9ydCBEZW1vIGZyb20gXCIuL21hcmNoaW5nLWN1YmVzLmRlbW9cIlxuXG5jb25zdCBGT0NVUyA9IHtcIkluaXRpYWxpemluZyBXZWJHTFwiOlwiXFx0Y29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XFxuXFx0XFx0YmJveENvcm5lcixcXG5cXHRcXHRiYm94U2l6ZSxcXG5cXHRcXHR2b3hlbFNpemU6IDEgLyAxNixcXG5cXHRcXHRzZGZQb2ludCh4LCB5LCB6KSB7XFxuXFx0XFx0XFx0Y29uc3QgcDogQXJyYXlOdW1iZXIzID0gW3gsIHksIHpdO1xcblxcdFxcdFxcdGNvbnN0IG86IEFycmF5TnVtYmVyMyA9IFswLCAwLjUsIDBdO1xcblxcdFxcdFxcdGxldCBkaXN0YW5jZSA9IHRnZFNkZlNwaGVyZShwLCBbMCwgMCwgMF0sIDAuOCk7XFxuXFx0XFx0XFx0Zm9yIChjb25zdCBzZGYgb2Ygc2RmTGlzdCkge1xcblxcdFxcdFxcdFxcdGRpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIHNkZihwKSk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdHJldHVybiBkaXN0YW5jZTtcXG5cXHRcXHR9LFxcblxcdFxcdHNtb290aGluZ0xldmVsOiAyLFxcblxcdH07XFxuXFx0Y29uc3QgZ2VvbWV0cnkgPSB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lKG9wdGlvbnMpO1xcblxcdGNvbnN0IG1lc2ggPSBuZXcgVGdkUGFpbnRlck1lc2goY3R4LCB7XFxuXFx0XFx0Z2VvbWV0cnksXFxuXFx0XFx0bWF0ZXJpYWw6IG5ldyBUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbigpLFxcblxcdH0pO1xcblxcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcXG5cXHRcXHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxcblxcdFxcdGNoaWxkcmVuOiBbbWVzaF0sXFxuXFx0fSk7XFxuXFx0Y3R4LmFkZChcXG5cXHRcXHRuZXcgVGdkUGFpbnRlckNsZWFyKGN0eCwgeyBjb2xvcjogWzAuMiwgMC4yLCAwLjIsIDFdLCBkZXB0aDogMSB9KSxcXG5cXHRcXHRzdGF0ZSxcXG5cXHQpO1xcblxcdGN0eC5wYWludCgpO1wifVxuY29uc3QgRlVMTCA9IFwiaW1wb3J0IHtcXG5cXHR0eXBlIEFycmF5TnVtYmVyMyxcXG5cXHR0eXBlIEFycmF5TnVtYmVyNCxcXG5cXHR0eXBlIE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zLFxcblxcdHR5cGUgVGdkQ29udGV4dCxcXG5cXHRUZ2RDb250cm9sbGVyQ2FtZXJhT3JiaXQsXFxuXFx0VGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24sXFxuXFx0VGdkUGFpbnRlckF4ZXMsXFxuXFx0VGdkUGFpbnRlckNsZWFyLFxcblxcdFRnZFBhaW50ZXJNZXNoLFxcblxcdFRnZFBhaW50ZXJTdGF0ZSxcXG5cXHR0Z2RDYWxjRGVnVG9SYWQsXFxuXFx0dGdkQ2FsY1JhbmRvbSxcXG5cXHR0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lLFxcblxcdHRnZFNkZkNhcHN1bGUsXFxuXFx0dGdkU2RmU3BoZXJlLFxcblxcdHdlYmdsUHJlc2V0RGVwdGgsXFxufSBmcm9tIFxcXCJAdG9sb2tvYmFuL3RnZFxcXCI7XFxuXFxuaW1wb3J0IFZpZXcgZnJvbSBcXFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXFxcIjtcXG5cXG50eXBlIFRyZWUgPSB7XFxuXFx0cG9pbnQ6IEFycmF5TnVtYmVyNDtcXG5cXHRjaGlsZHJlbj86IFRyZWVbXTtcXG59O1xcblxcbmZ1bmN0aW9uIGluaXQoY3R4OiBUZ2RDb250ZXh0KSB7XFxuXFx0Y3R4LmNhbWVyYS5maXRTcGFjZUF0VGFyZ2V0KDEyLCAxMik7XFxuXFx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcXG5cXHRcXHRpbmVydGlhT3JiaXQ6IDEwMDAsXFxuXFx0fSk7XFxuXFx0Y29uc3QgdHJlZTogVHJlZSA9IHtcXG5cXHRcXHRwb2ludDogWzAsIDAuNSwgMCwgMC41XSxcXG5cXHRcXHRjaGlsZHJlbjogW1xcblxcdFxcdFxcdGRlbmRyaXRlKDEsIDAuNSwgODUsIDApLFxcblxcdFxcdFxcdGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAwKSxcXG5cXHRcXHRcXHRkZW5kcml0ZSgxLCAwLjUsIC02MCwgMTIwKSxcXG5cXHRcXHRcXHRkZW5kcml0ZSgxLCAwLjUsIC02MCwgMjQwKSxcXG5cXHRcXHRdLFxcblxcdH07XFxuXFx0Y29uc3QgYmJveCA9IGNvbXB1dGVCQm94KHRyZWUpO1xcblxcdGNvbnN0IGJib3hDb3JuZXIgPSBiYm94Lm1pbjtcXG5cXHRjb25zdCBiYm94U2l6ZTogQXJyYXlOdW1iZXIzID0gW1xcblxcdFxcdGJib3gubWF4WzBdIC0gYmJveC5taW5bMF0sXFxuXFx0XFx0YmJveC5tYXhbMV0gLSBiYm94Lm1pblsxXSxcXG5cXHRcXHRiYm94Lm1heFsyXSAtIGJib3gubWluWzJdLFxcblxcdF07XFxuXFx0Y29uc29sZS5sb2coXFxcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3ggPVxcXCIsIGJib3gpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XFxuXFx0Y29uc29sZS5sb2coXFxuXFx0XFx0XFxcIvCfkJ4gW21hcmNoaW5nLWN1YmVzLmRlbW9ANjFdIGJib3hDb3JuZXIsIGJib3hTaXplID1cXFwiLFxcblxcdFxcdGJib3hDb3JuZXIsXFxuXFx0XFx0YmJveFNpemUsXFxuXFx0KTsgLy8gQEZJWE1FOiBSZW1vdmUgdGhpcyBsaW5lIHdyaXR0ZW4gb24gMjAyNi0wMi0xMCBhdCAxNTo1NlxcblxcdGNvbnN0IHNkZkxpc3Q6IEFycmF5PChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcj4gPSBtYWtlTGlzdE9mU0RGKHRyZWUpO1xcblxcdGNvbnN0IG9wdGlvbnM6IE1ha2VHZW9tZXRyeUZyb21Wb2x1bWVPcHRpb25zID0ge1xcblxcdFxcdGJib3hDb3JuZXIsXFxuXFx0XFx0YmJveFNpemUsXFxuXFx0XFx0dm94ZWxTaXplOiAxIC8gMTYsXFxuXFx0XFx0c2RmUG9pbnQoeCwgeSwgeikge1xcblxcdFxcdFxcdGNvbnN0IHA6IEFycmF5TnVtYmVyMyA9IFt4LCB5LCB6XTtcXG5cXHRcXHRcXHRjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXTtcXG5cXHRcXHRcXHRsZXQgZGlzdGFuY2UgPSB0Z2RTZGZTcGhlcmUocCwgWzAsIDAsIDBdLCAwLjgpO1xcblxcdFxcdFxcdGZvciAoY29uc3Qgc2RmIG9mIHNkZkxpc3QpIHtcXG5cXHRcXHRcXHRcXHRkaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlLCBzZGYocCkpO1xcblxcdFxcdFxcdH1cXG5cXHRcXHRcXHRyZXR1cm4gZGlzdGFuY2U7XFxuXFx0XFx0fSxcXG5cXHRcXHRzbW9vdGhpbmdMZXZlbDogMixcXG5cXHR9O1xcblxcdGNvbnN0IGdlb21ldHJ5ID0gdGdkTWFrZUdlb21ldHJ5RnJvbVZvbHVtZShvcHRpb25zKTtcXG5cXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xcblxcdFxcdGdlb21ldHJ5LFxcblxcdFxcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcXG5cXHR9KTtcXG5cXHRjb25zdCBzdGF0ZSA9IG5ldyBUZ2RQYWludGVyU3RhdGUoY3R4LCB7XFxuXFx0XFx0ZGVwdGg6IHdlYmdsUHJlc2V0RGVwdGgubGVzcyxcXG5cXHRcXHRjaGlsZHJlbjogW21lc2hdLFxcblxcdH0pO1xcblxcdGN0eC5hZGQoXFxuXFx0XFx0bmV3IFRnZFBhaW50ZXJDbGVhcihjdHgsIHsgY29sb3I6IFswLjIsIDAuMiwgMC4yLCAxXSwgZGVwdGg6IDEgfSksXFxuXFx0XFx0c3RhdGUsXFxuXFx0KTtcXG5cXHRjdHgucGFpbnQoKTtcXG5cXHRzdGF0ZS5hZGQobmV3IFRnZFBhaW50ZXJBeGVzKGN0eCwgeyBzY2FsZTogMiB9KSk7XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XFxuXFx0cmV0dXJuIDxWaWV3IG9uUmVhZHk9e2luaXR9IGdpem1vIG9wdGlvbnM9e3sgYWxwaGE6IGZhbHNlIH19IC8+O1xcbn1cXG5cXG5mdW5jdGlvbiBtYWtlTGlzdE9mU0RGKHRyZWU6IFRyZWUpOiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdIHtcXG5cXHRjb25zdCBzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdID0gW107XFxuXFx0cmVjdXJzaXZlTGlzdE9mU0RGKHRyZWUsIHNkZkxpc3QpO1xcblxcdHJldHVybiBzZGZMaXN0O1xcbn1cXG5cXG5mdW5jdGlvbiByZWN1cnNpdmVMaXN0T2ZTREYoXFxuXFx0eyBwb2ludCwgY2hpbGRyZW4gfTogVHJlZSxcXG5cXHRzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdLFxcbikge1xcblxcdGlmICghY2hpbGRyZW4pIHJldHVybjtcXG5cXG5cXHRjb25zdCBbeDAsIHkwLCB6MCwgcjBdID0gcG9pbnQ7XFxuXFx0Zm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xcblxcdFxcdGNvbnN0IFt4MSwgeTEsIHoxLCByMV0gPSBjaGlsZC5wb2ludDtcXG5cXHRcXHRjb25zdCBzZGYgPSAocDogQXJyYXlOdW1iZXIzKSA9PlxcblxcdFxcdFxcdHRnZFNkZkNhcHN1bGUocCwgW3gwLCB5MCwgejBdLCBbeDEsIHkxLCB6MV0sIHIwLCByMSk7XFxuXFx0XFx0c2RmTGlzdC5wdXNoKHNkZik7XFxuXFx0XFx0cmVjdXJzaXZlTGlzdE9mU0RGKGNoaWxkLCBzZGZMaXN0KTtcXG5cXHR9XFxufVxcblxcbmludGVyZmFjZSBCQm94IHtcXG5cXHRtaW46IEFycmF5TnVtYmVyMztcXG5cXHRtYXg6IEFycmF5TnVtYmVyMztcXG59XFxuXFxuZnVuY3Rpb24gY29tcHV0ZUJCb3godHJlZTogVHJlZSk6IEJCb3gge1xcblxcdGNvbnN0IGZyaW5nZSA9IFt0cmVlXTtcXG5cXHRjb25zdCBtaW46IEFycmF5TnVtYmVyMyA9IFtcXG5cXHRcXHROdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXFxuXFx0XFx0TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxcblxcdFxcdE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcXG5cXHRdO1xcblxcdGNvbnN0IG1heDogQXJyYXlOdW1iZXIzID0gW1xcblxcdFxcdE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcXG5cXHRcXHROdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXFxuXFx0XFx0TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxcblxcdF07XFxuXFx0d2hpbGUgKGZyaW5nZS5sZW5ndGggPiAwKSB7XFxuXFx0XFx0Y29uc3QgaXRlbSA9IGZyaW5nZS5wb3AoKTtcXG5cXHRcXHRpZiAoIWl0ZW0pIGNvbnRpbnVlO1xcblxcblxcdFxcdGNvbnN0IFt4LCB5LCB6LCByMF0gPSBpdGVtLnBvaW50O1xcblxcdFxcdGNvbnNvbGUubG9nKFxcXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDE1MF0geCwgeSwgeiA9XFxcIiwgeCwgeSwgeik7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTY6MDJcXG5cXHRcXHRjb25zdCByID0gcjAgKiAxLjE7XFxuXFx0XFx0bWluWzBdID0gTWF0aC5taW4obWluWzBdLCB4IC0gcik7XFxuXFx0XFx0bWF4WzBdID0gTWF0aC5tYXgobWluWzBdLCB4ICsgcik7XFxuXFx0XFx0bWluWzFdID0gTWF0aC5taW4obWluWzFdLCB5IC0gcik7XFxuXFx0XFx0bWF4WzFdID0gTWF0aC5tYXgobWluWzFdLCB5ICsgcik7XFxuXFx0XFx0bWluWzJdID0gTWF0aC5taW4obWluWzJdLCB6IC0gcik7XFxuXFx0XFx0bWF4WzJdID0gTWF0aC5tYXgobWluWzJdLCB6ICsgcik7XFxuXFx0XFx0aWYgKGl0ZW0uY2hpbGRyZW4pIGZyaW5nZS5wdXNoKC4uLml0ZW0uY2hpbGRyZW4pO1xcblxcdH1cXG5cXHRyZXR1cm4geyBtaW4sIG1heCB9O1xcbn1cXG5cXG5mdW5jdGlvbiBkZW5kcml0ZShcXG5cXHRsZW5ndGg6IG51bWJlcixcXG5cXHRyYWRpdXM6IG51bWJlcixcXG5cXHRsYXQ6IG51bWJlcixcXG5cXHRsbmc6IG51bWJlcixcXG5cXHR4ID0gMCxcXG5cXHR5ID0gMCxcXG5cXHR6ID0gMCxcXG4pOiBUcmVlIHtcXG5cXHRjb25zdCByYWRpdXMyID0gcmFkaXVzICogdGdkQ2FsY1JhbmRvbSgwLjUsIDEuMSk7XFxuXFx0Y29uc3QgbGF0MCA9IGxhdCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCk7XFxuXFx0Y29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMCk7XFxuXFx0Y29uc3QgbGF0QW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxhdDApO1xcblxcdGNvbnN0IGxuZ0FuZyA9IHRnZENhbGNEZWdUb1JhZChsbmcwKTtcXG5cXHRjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZyk7XFxuXFx0Y29uc3QgciA9IE1hdGguY29zKGxhdEFuZyk7XFxuXFx0Y29uc3QgdnggPSByICogTWF0aC5jb3MobG5nQW5nKTtcXG5cXHRjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpO1xcblxcdGNvbnN0IHgyID0geCArIHZ4ICogbGVuZ3RoO1xcblxcdGNvbnN0IHkyID0geSArIHZ5ICogbGVuZ3RoO1xcblxcdGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoO1xcblxcdGNvbnN0IHRyZWU6IFRyZWUgPSB7XFxuXFx0XFx0cG9pbnQ6IFt4LCB5LCB6LCByYWRpdXNdLFxcblxcdFxcdGNoaWxkcmVuOiBbXSxcXG5cXHR9O1xcblxcdGlmIChyYWRpdXMyID4gMC4xKSB7XFxuXFx0XFx0Y29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgMykpKTtcXG5cXHRcXHRmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IGNvdW50OyBsb29wKyspIHtcXG5cXHRcXHRcXHR0cmVlLmNoaWxkcmVuPy5wdXNoKFxcblxcdFxcdFxcdFxcdGRlbmRyaXRlKFxcblxcdFxcdFxcdFxcdFxcdGxlbmd0aCAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpLFxcblxcdFxcdFxcdFxcdFxcdHJhZGl1czIsXFxuXFx0XFx0XFx0XFx0XFx0bGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXFxuXFx0XFx0XFx0XFx0XFx0bG5nMCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXFxuXFx0XFx0XFx0XFx0XFx0eDIsXFxuXFx0XFx0XFx0XFx0XFx0eTIsXFxuXFx0XFx0XFx0XFx0XFx0ejIsXFxuXFx0XFx0XFx0XFx0KSxcXG5cXHRcXHRcXHQpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0cmV0dXJuIHRyZWU7XFxufVxcblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW9Db250YWluZXIoKSB7XG4gICAgY29uc3QgW2Z1bGwsIHNldEZ1bGxdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFsZi1sZWZ0XCI+PERlbW8gLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYWxmLXJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxWaWV3QnV0dG9uIHZhcmlhbnQ9XCJlbGV2YXRlZFwiIG9uQ2xpY2s9eygpID0+IHNldEZ1bGwoIWZ1bGwpfT5cbiAgICAgICAgICAgICAgICAgICAge2Z1bGwgPyBcIlNob3cgY29kZSBkZXRhaWxzXCIgOiBcIlNob3cgZnVsbCBjb2RlXCJ9XG4gICAgICAgICAgICAgICAgPC9WaWV3QnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29kZVZpZXdlciBsYW5ndWFnZT1cInRzeFwiIHZhbHVlPXtmdWxsID8gRlVMTCA6IEZPQ1VTfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbn0iLCJpbXBvcnQge1xuXHR0eXBlIEFycmF5TnVtYmVyMyxcblx0dHlwZSBBcnJheU51bWJlcjQsXG5cdHR5cGUgTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMsXG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkQ29udHJvbGxlckNhbWVyYU9yYml0LFxuXHRUZ2RNYXRlcmlhbEZhY2VPcmllbnRhdGlvbixcblx0VGdkUGFpbnRlckF4ZXMsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlck1lc2gsXG5cdFRnZFBhaW50ZXJTdGF0ZSxcblx0dGdkQ2FsY0RlZ1RvUmFkLFxuXHR0Z2RDYWxjUmFuZG9tLFxuXHR0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lLFxuXHR0Z2RTZGZDYXBzdWxlLFxuXHR0Z2RTZGZTcGhlcmUsXG5cdHdlYmdsUHJlc2V0RGVwdGgsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5cbnR5cGUgVHJlZSA9IHtcblx0cG9pbnQ6IEFycmF5TnVtYmVyNDtcblx0Y2hpbGRyZW4/OiBUcmVlW107XG59O1xuXG5mdW5jdGlvbiBpbml0KGN0eDogVGdkQ29udGV4dCkge1xuXHRjdHguY2FtZXJhLmZpdFNwYWNlQXRUYXJnZXQoMTIsIDEyKTtcblx0bmV3IFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdChjdHgsIHtcblx0XHRpbmVydGlhT3JiaXQ6IDEwMDAsXG5cdH0pO1xuXHRjb25zdCB0cmVlOiBUcmVlID0ge1xuXHRcdHBvaW50OiBbMCwgMC41LCAwLCAwLjVdLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRkZW5kcml0ZSgxLCAwLjUsIDg1LCAwKSxcblx0XHRcdGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAwKSxcblx0XHRcdGRlbmRyaXRlKDEsIDAuNSwgLTYwLCAxMjApLFxuXHRcdFx0ZGVuZHJpdGUoMSwgMC41LCAtNjAsIDI0MCksXG5cdFx0XSxcblx0fTtcblx0Y29uc3QgYmJveCA9IGNvbXB1dGVCQm94KHRyZWUpO1xuXHRjb25zdCBiYm94Q29ybmVyID0gYmJveC5taW47XG5cdGNvbnN0IGJib3hTaXplOiBBcnJheU51bWJlcjMgPSBbXG5cdFx0YmJveC5tYXhbMF0gLSBiYm94Lm1pblswXSxcblx0XHRiYm94Lm1heFsxXSAtIGJib3gubWluWzFdLFxuXHRcdGJib3gubWF4WzJdIC0gYmJveC5taW5bMl0sXG5cdF07XG5cdGNvbnNvbGUubG9nKFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveCA9XCIsIGJib3gpOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE1OjU3XG5cdGNvbnNvbGUubG9nKFxuXHRcdFwi8J+QniBbbWFyY2hpbmctY3ViZXMuZGVtb0A2MV0gYmJveENvcm5lciwgYmJveFNpemUgPVwiLFxuXHRcdGJib3hDb3JuZXIsXG5cdFx0YmJveFNpemUsXG5cdCk7IC8vIEBGSVhNRTogUmVtb3ZlIHRoaXMgbGluZSB3cml0dGVuIG9uIDIwMjYtMDItMTAgYXQgMTU6NTZcblx0Y29uc3Qgc2RmTGlzdDogQXJyYXk8KHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyPiA9IG1ha2VMaXN0T2ZTREYodHJlZSk7XG5cdC8vICNiZWdpbiBJbml0aWFsaXppbmcgV2ViR0xcblx0Y29uc3Qgb3B0aW9uczogTWFrZUdlb21ldHJ5RnJvbVZvbHVtZU9wdGlvbnMgPSB7XG5cdFx0YmJveENvcm5lcixcblx0XHRiYm94U2l6ZSxcblx0XHR2b3hlbFNpemU6IDEgLyAxNixcblx0XHRzZGZQb2ludCh4LCB5LCB6KSB7XG5cdFx0XHRjb25zdCBwOiBBcnJheU51bWJlcjMgPSBbeCwgeSwgel07XG5cdFx0XHRjb25zdCBvOiBBcnJheU51bWJlcjMgPSBbMCwgMC41LCAwXTtcblx0XHRcdGxldCBkaXN0YW5jZSA9IHRnZFNkZlNwaGVyZShwLCBbMCwgMCwgMF0sIDAuOCk7XG5cdFx0XHRmb3IgKGNvbnN0IHNkZiBvZiBzZGZMaXN0KSB7XG5cdFx0XHRcdGRpc3RhbmNlID0gTWF0aC5taW4oZGlzdGFuY2UsIHNkZihwKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGlzdGFuY2U7XG5cdFx0fSxcblx0XHRzbW9vdGhpbmdMZXZlbDogMixcblx0fTtcblx0Y29uc3QgZ2VvbWV0cnkgPSB0Z2RNYWtlR2VvbWV0cnlGcm9tVm9sdW1lKG9wdGlvbnMpO1xuXHRjb25zdCBtZXNoID0gbmV3IFRnZFBhaW50ZXJNZXNoKGN0eCwge1xuXHRcdGdlb21ldHJ5LFxuXHRcdG1hdGVyaWFsOiBuZXcgVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24oKSxcblx0fSk7XG5cdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjdHgsIHtcblx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdGNoaWxkcmVuOiBbbWVzaF0sXG5cdH0pO1xuXHRjdHguYWRkKFxuXHRcdG5ldyBUZ2RQYWludGVyQ2xlYXIoY3R4LCB7IGNvbG9yOiBbMC4yLCAwLjIsIDAuMiwgMV0sIGRlcHRoOiAxIH0pLFxuXHRcdHN0YXRlLFxuXHQpO1xuXHRjdHgucGFpbnQoKTtcblx0Ly8gI2VuZFxuXHRzdGF0ZS5hZGQobmV3IFRnZFBhaW50ZXJBeGVzKGN0eCwgeyBzY2FsZTogMiB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbW8oKSB7XG5cdHJldHVybiA8VmlldyBvblJlYWR5PXtpbml0fSBnaXptbyBvcHRpb25zPXt7IGFscGhhOiBmYWxzZSB9fSAvPjtcbn1cblxuZnVuY3Rpb24gbWFrZUxpc3RPZlNERih0cmVlOiBUcmVlKTogKChwOiBBcnJheU51bWJlcjMpID0+IG51bWJlcilbXSB7XG5cdGNvbnN0IHNkZkxpc3Q6ICgocDogQXJyYXlOdW1iZXIzKSA9PiBudW1iZXIpW10gPSBbXTtcblx0cmVjdXJzaXZlTGlzdE9mU0RGKHRyZWUsIHNkZkxpc3QpO1xuXHRyZXR1cm4gc2RmTGlzdDtcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlTGlzdE9mU0RGKFxuXHR7IHBvaW50LCBjaGlsZHJlbiB9OiBUcmVlLFxuXHRzZGZMaXN0OiAoKHA6IEFycmF5TnVtYmVyMykgPT4gbnVtYmVyKVtdLFxuKSB7XG5cdGlmICghY2hpbGRyZW4pIHJldHVybjtcblxuXHRjb25zdCBbeDAsIHkwLCB6MCwgcjBdID0gcG9pbnQ7XG5cdGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcblx0XHRjb25zdCBbeDEsIHkxLCB6MSwgcjFdID0gY2hpbGQucG9pbnQ7XG5cdFx0Y29uc3Qgc2RmID0gKHA6IEFycmF5TnVtYmVyMykgPT5cblx0XHRcdHRnZFNkZkNhcHN1bGUocCwgW3gwLCB5MCwgejBdLCBbeDEsIHkxLCB6MV0sIHIwLCByMSk7XG5cdFx0c2RmTGlzdC5wdXNoKHNkZik7XG5cdFx0cmVjdXJzaXZlTGlzdE9mU0RGKGNoaWxkLCBzZGZMaXN0KTtcblx0fVxufVxuXG5pbnRlcmZhY2UgQkJveCB7XG5cdG1pbjogQXJyYXlOdW1iZXIzO1xuXHRtYXg6IEFycmF5TnVtYmVyMztcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUJCb3godHJlZTogVHJlZSk6IEJCb3gge1xuXHRjb25zdCBmcmluZ2UgPSBbdHJlZV07XG5cdGNvbnN0IG1pbjogQXJyYXlOdW1iZXIzID0gW1xuXHRcdE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcblx0XHROdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG5cdFx0TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuXHRdO1xuXHRjb25zdCBtYXg6IEFycmF5TnVtYmVyMyA9IFtcblx0XHROdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG5cdFx0TnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuXHRcdE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcblx0XTtcblx0d2hpbGUgKGZyaW5nZS5sZW5ndGggPiAwKSB7XG5cdFx0Y29uc3QgaXRlbSA9IGZyaW5nZS5wb3AoKTtcblx0XHRpZiAoIWl0ZW0pIGNvbnRpbnVlO1xuXG5cdFx0Y29uc3QgW3gsIHksIHosIHIwXSA9IGl0ZW0ucG9pbnQ7XG5cdFx0Y29uc29sZS5sb2coXCLwn5CeIFttYXJjaGluZy1jdWJlcy5kZW1vQDE1MF0geCwgeSwgeiA9XCIsIHgsIHksIHopOyAvLyBARklYTUU6IFJlbW92ZSB0aGlzIGxpbmUgd3JpdHRlbiBvbiAyMDI2LTAyLTEwIGF0IDE2OjAyXG5cdFx0Y29uc3QgciA9IHIwICogMS4xO1xuXHRcdG1pblswXSA9IE1hdGgubWluKG1pblswXSwgeCAtIHIpO1xuXHRcdG1heFswXSA9IE1hdGgubWF4KG1pblswXSwgeCArIHIpO1xuXHRcdG1pblsxXSA9IE1hdGgubWluKG1pblsxXSwgeSAtIHIpO1xuXHRcdG1heFsxXSA9IE1hdGgubWF4KG1pblsxXSwgeSArIHIpO1xuXHRcdG1pblsyXSA9IE1hdGgubWluKG1pblsyXSwgeiAtIHIpO1xuXHRcdG1heFsyXSA9IE1hdGgubWF4KG1pblsyXSwgeiArIHIpO1xuXHRcdGlmIChpdGVtLmNoaWxkcmVuKSBmcmluZ2UucHVzaCguLi5pdGVtLmNoaWxkcmVuKTtcblx0fVxuXHRyZXR1cm4geyBtaW4sIG1heCB9O1xufVxuXG5mdW5jdGlvbiBkZW5kcml0ZShcblx0bGVuZ3RoOiBudW1iZXIsXG5cdHJhZGl1czogbnVtYmVyLFxuXHRsYXQ6IG51bWJlcixcblx0bG5nOiBudW1iZXIsXG5cdHggPSAwLFxuXHR5ID0gMCxcblx0eiA9IDAsXG4pOiBUcmVlIHtcblx0Y29uc3QgcmFkaXVzMiA9IHJhZGl1cyAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpO1xuXHRjb25zdCBsYXQwID0gbGF0ICsgdGdkQ2FsY1JhbmRvbSgtMzAsIDMwKTtcblx0Y29uc3QgbG5nMCA9IGxuZyArIHRnZENhbGNSYW5kb20oLTMwLCAzMCk7XG5cdGNvbnN0IGxhdEFuZyA9IHRnZENhbGNEZWdUb1JhZChsYXQwKTtcblx0Y29uc3QgbG5nQW5nID0gdGdkQ2FsY0RlZ1RvUmFkKGxuZzApO1xuXHRjb25zdCB2eSA9IE1hdGguc2luKGxhdEFuZyk7XG5cdGNvbnN0IHIgPSBNYXRoLmNvcyhsYXRBbmcpO1xuXHRjb25zdCB2eCA9IHIgKiBNYXRoLmNvcyhsbmdBbmcpO1xuXHRjb25zdCB2eiA9IHIgKiBNYXRoLnNpbihsbmdBbmcpO1xuXHRjb25zdCB4MiA9IHggKyB2eCAqIGxlbmd0aDtcblx0Y29uc3QgeTIgPSB5ICsgdnkgKiBsZW5ndGg7XG5cdGNvbnN0IHoyID0geiArIHZ6ICogbGVuZ3RoO1xuXHRjb25zdCB0cmVlOiBUcmVlID0ge1xuXHRcdHBvaW50OiBbeCwgeSwgeiwgcmFkaXVzXSxcblx0XHRjaGlsZHJlbjogW10sXG5cdH07XG5cdGlmIChyYWRpdXMyID4gMC4xKSB7XG5cdFx0Y29uc3QgY291bnQgPSBNYXRoLm1heCgxLCBNYXRoLmZsb29yKHRnZENhbGNSYW5kb20oMCwgMykpKTtcblx0XHRmb3IgKGxldCBsb29wID0gMDsgbG9vcCA8IGNvdW50OyBsb29wKyspIHtcblx0XHRcdHRyZWUuY2hpbGRyZW4/LnB1c2goXG5cdFx0XHRcdGRlbmRyaXRlKFxuXHRcdFx0XHRcdGxlbmd0aCAqIHRnZENhbGNSYW5kb20oMC41LCAxLjEpLFxuXHRcdFx0XHRcdHJhZGl1czIsXG5cdFx0XHRcdFx0bGF0MCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXG5cdFx0XHRcdFx0bG5nMCArIHRnZENhbGNSYW5kb20oLTMwLCAzMCksXG5cdFx0XHRcdFx0eDIsXG5cdFx0XHRcdFx0eTIsXG5cdFx0XHRcdFx0ejIsXG5cdFx0XHRcdCksXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJlZTtcbn1cbiIsIiIsIi8qKlxuICogQGltcG9ydCB7TURYQ29tcG9uZW50c30gZnJvbSAnbWR4L3R5cGVzLmpzJ1xuICogQGltcG9ydCB7Q29tcG9uZW50LCBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgTWVyZ2VDb21wb25lbnRzXG4gKiAgIEN1c3RvbSBtZXJnZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59IGN1cnJlbnRDb21wb25lbnRzXG4gKiAgIEN1cnJlbnQgY29tcG9uZW50cyBmcm9tIHRoZSBjb250ZXh0LlxuICogQHJldHVybnMge01EWENvbXBvbmVudHN9XG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cy5cbiAqXG4gKiBAdHlwZWRlZiBQcm9wc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgTURYUHJvdmlkZXJgLlxuICogQHByb3BlcnR5IHtSZWFjdE5vZGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbY2hpbGRyZW5dXG4gKiAgIENoaWxkcmVuIChvcHRpb25hbCkuXG4gKiBAcHJvcGVydHkge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+IHwgTWVyZ2VDb21wb25lbnRzIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2NvbXBvbmVudHNdXG4gKiAgIEFkZGl0aW9uYWwgY29tcG9uZW50cyB0byB1c2Ugb3IgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlbSAob3B0aW9uYWwpLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rpc2FibGVQYXJlbnRDb250ZXh0PWZhbHNlXVxuICogICBUdXJuIG9mZiBvdXRlciBjb21wb25lbnQgY29udGV4dCAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PE1EWENvbXBvbmVudHM+fSAqL1xuY29uc3QgZW1wdHlDb21wb25lbnRzID0ge31cblxuY29uc3QgTURYQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZW1wdHlDb21wb25lbnRzKVxuXG4vKipcbiAqIEdldCBjdXJyZW50IGNvbXBvbmVudHMgZnJvbSB0aGUgTURYIENvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxNRFhDb21wb25lbnRzPiB8IE1lcmdlQ29tcG9uZW50cyB8IG51bGwgfCB1bmRlZmluZWR9IFtjb21wb25lbnRzXVxuICogICBBZGRpdGlvbmFsIGNvbXBvbmVudHMgdG8gdXNlIG9yIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZW0gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHtNRFhDb21wb25lbnRzfVxuICogICBDdXJyZW50IGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VNRFhDb21wb25lbnRzKGNvbXBvbmVudHMpIHtcbiAgY29uc3QgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpXG5cbiAgLy8gTWVtb2l6ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB0b3AtbGV2ZWwgY29udGV4dCBjaGFuZ2VzXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEN1c3RvbSBtZXJnZSB2aWEgYSBmdW5jdGlvbiBwcm9wXG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHMoY29udGV4dENvbXBvbmVudHMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7Li4uY29udGV4dENvbXBvbmVudHMsIC4uLmNvbXBvbmVudHN9XG4gICAgfSxcbiAgICBbY29udGV4dENvbXBvbmVudHMsIGNvbXBvbmVudHNdXG4gIClcbn1cblxuLyoqXG4gKiBQcm92aWRlciBmb3IgTURYIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seTxQcm9wcz59IHByb3BlcnRpZXNcbiAqICAgUHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR9XG4gKiAgIEVsZW1lbnQuXG4gKiBAc2F0aXNmaWVzIHtDb21wb25lbnR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBNRFhQcm92aWRlcihwcm9wZXJ0aWVzKSB7XG4gIC8qKiBAdHlwZSB7UmVhZG9ubHk8TURYQ29tcG9uZW50cz59ICovXG4gIGxldCBhbGxDb21wb25lbnRzXG5cbiAgaWYgKHByb3BlcnRpZXMuZGlzYWJsZVBhcmVudENvbnRleHQpIHtcbiAgICBhbGxDb21wb25lbnRzID1cbiAgICAgIHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBvbmVudHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wZXJ0aWVzLmNvbXBvbmVudHMoZW1wdHlDb21wb25lbnRzKVxuICAgICAgICA6IHByb3BlcnRpZXMuY29tcG9uZW50cyB8fCBlbXB0eUNvbXBvbmVudHNcbiAgfSBlbHNlIHtcbiAgICBhbGxDb21wb25lbnRzID0gdXNlTURYQ29tcG9uZW50cyhwcm9wZXJ0aWVzLmNvbXBvbmVudHMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBNRFhDb250ZXh0LlByb3ZpZGVyLFxuICAgIHt2YWx1ZTogYWxsQ29tcG9uZW50c30sXG4gICAgcHJvcGVydGllcy5jaGlsZHJlblxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJWaWV3QnV0dG9uIiwiQ29kZVZpZXdlciIsIkRlbW8iLCJGT0NVUyIsIkZVTEwiLCJEZW1vQ29udGFpbmVyIiwiX1JlYWN0X3VzZVN0YXRlIiwiZnVsbCIsInNldEZ1bGwiLCJvbkNsaWNrIiwiVGdkQ29udHJvbGxlckNhbWVyYU9yYml0IiwiVGdkTWF0ZXJpYWxGYWNlT3JpZW50YXRpb24iLCJUZ2RQYWludGVyQXhlcyIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJNZXNoIiwiVGdkUGFpbnRlclN0YXRlIiwidGdkQ2FsY0RlZ1RvUmFkIiwidGdkQ2FsY1JhbmRvbSIsInRnZE1ha2VHZW9tZXRyeUZyb21Wb2x1bWUiLCJ0Z2RTZGZDYXBzdWxlIiwidGdkU2RmU3BoZXJlIiwid2ViZ2xQcmVzZXREZXB0aCIsIlZpZXciLCJpbml0IiwiY3R4IiwidHJlZSIsImRlbmRyaXRlIiwiYmJveCIsImNvbXB1dGVCQm94IiwiYmJveENvcm5lciIsImJib3hTaXplIiwiY29uc29sZSIsInNkZkxpc3QiLCJtYWtlTGlzdE9mU0RGIiwib3B0aW9ucyIsInNkZlBvaW50IiwieCIsInkiLCJ6IiwicCIsIm8iLCJkaXN0YW5jZSIsIl9pdGVyYXRvckVycm9yIiwic2RmIiwiTWF0aCIsImdlb21ldHJ5IiwibWVzaCIsInN0YXRlIiwicmVjdXJzaXZlTGlzdE9mU0RGIiwicGFyYW0iLCJwb2ludCIsImNoaWxkcmVuIiwiX3BvaW50IiwieDAiLCJ5MCIsInowIiwicjAiLCJjaGlsZCIsIl9jaGlsZF9wb2ludCIsIngxIiwieTEiLCJ6MSIsInIxIiwiZnJpbmdlIiwibWluIiwiTnVtYmVyIiwibWF4IiwiX2ZyaW5nZSIsIml0ZW0iLCJfaXRlbV9wb2ludCIsInIiLCJsZW5ndGgiLCJyYWRpdXMiLCJsYXQiLCJsbmciLCJyYWRpdXMyIiwibGF0MCIsImxuZzAiLCJsYXRBbmciLCJsbmdBbmciLCJ2eSIsInZ4IiwidnoiLCJ4MiIsInkyIiwiejIiLCJjb3VudCIsImxvb3AiLCJfdHJlZV9jaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0NBRUMsR0FDd0I7QUFDaUI7QUFDVztBQUNiO0FBRXhDLElBQU1JLFFBQVE7SUFBQyxzQkFBcUI7QUFBeXpCO0FBQzcxQixJQUFNQyxPQUFPO0FBRUUsU0FBU0M7SUFDcEIsSUFBd0JDLG1DQUFBQSx5Q0FBYyxDQUFDLFlBQWhDQyxPQUFpQkQsb0JBQVhFLFVBQVdGO0lBQ3hCLHFCQUFPOzswQkFDSCxrREFBQztnQkFBSSxXQUFVOzBCQUFZLGdFQUFDSixnREFBSUE7Ozs7Ozs7Ozs7MEJBQ2hDLGtEQUFDO2dCQUFJLFdBQVU7O2tDQUNYLGtEQUFDO2tDQUNHLGdFQUFDRix5Q0FBVUE7NEJBQUMsU0FBUTs0QkFBV1MsU0FBUyxTQUFUQTt1Q0FBZUQsUUFBUSxDQUFDRDs7c0NBQ2xEQSxPQUFPLHNCQUFzQjs7Ozs7Ozs7Ozs7a0NBR3RDLGtEQUFDTix1REFBVUE7d0JBQUMsVUFBUzt3QkFBTSxPQUFPTSxPQUFPSCxPQUFPRDs7Ozs7Ozs7Ozs7Ozs7QUFHNUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdCO0FBRWlCO0FBT3pDLFNBQVNvQixLQUFLQyxHQUFlO0lBQzVCQSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJO0lBQ2hDLElBQUlkLHdEQUF3QkEsQ0FBQ2MsS0FBSztRQUNqQyxjQUFjO0lBQ2Y7SUFDQSxJQUFNQyxPQUFhO1FBQ2xCLE9BQU87WUFBQztZQUFHO1lBQUs7WUFBRztTQUFJO1FBQ3ZCLFVBQVU7WUFDVEMsU0FBUyxHQUFHLEtBQUssSUFBSTtZQUNyQkEsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJO1lBQ3RCQSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUk7WUFDdEJBLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSTtTQUN0QjtJQUNGO0lBQ0EsSUFBTUMsT0FBT0MsWUFBWUg7SUFDekIsSUFBTUksYUFBYUYsS0FBSyxHQUFHO0lBQzNCLElBQU1HLFdBQXlCO1FBQzlCSCxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUdBLEtBQUssR0FBRyxDQUFDLEVBQUU7UUFDekJBLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBR0EsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUN6QkEsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHQSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0tBQ3pCO0lBQ0RJLFFBQVEsR0FBRyxDQUFDLHNDQUFzQ0osT0FBTywwREFBMEQ7SUFDbkhJLFFBQVEsR0FBRyxDQUNWLHNEQUNBRixZQUNBQyxXQUNFLDBEQUEwRDtJQUM3RCxJQUFNRSxVQUE4Q0MsY0FBY1I7SUFDbEUsNEJBQTRCO0lBQzVCLElBQU1TLFVBQXlDO1FBQzlDTCxZQUFBQTtRQUNBQyxVQUFBQTtRQUNBLFdBQVcsSUFBSTtRQUNmSyxVQUFBQSxTQUFBQSxTQUFTQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsQ0FBQztZQUNmLElBQU1DLElBQWtCO2dCQUFDSDtnQkFBR0M7Z0JBQUdDO2FBQUU7WUFDakMsSUFBTUUsSUFBa0I7Z0JBQUM7Z0JBQUc7Z0JBQUs7YUFBRTtZQUNuQyxJQUFJQyxXQUFXckIsZ0RBQVlBLENBQUNtQixHQUFHO2dCQUFDO2dCQUFHO2dCQUFHO2FBQUUsRUFBRTtnQkFDckNHLGtDQUFBQSwyQkFBQUE7O2dCQUFMLFFBQUtBLFlBQWFWLDRCQUFiVSxTQUFBQSw2QkFBQUEsUUFBQUEseUJBQUFBLGlDQUFzQjtvQkFBdEJBLElBQU1DLE1BQU5EO29CQUNKRCxXQUFXRyxLQUFLLEdBQUcsQ0FBQ0gsVUFBVUUsSUFBSUo7Z0JBQ25DOztnQkFGS0c7Z0JBQUFBOzs7eUJBQUFBLDZCQUFBQTt3QkFBQUE7Ozt3QkFBQUE7OEJBQUFBOzs7O1lBR0wsT0FBT0Q7UUFDUjtRQUNBLGdCQUFnQjtJQUNqQjtJQUNBLElBQU1JLFdBQVczQiw2REFBeUJBLENBQUNnQjtJQUMzQyxJQUFNWSxPQUFPLElBQUloQyw4Q0FBY0EsQ0FBQ1UsS0FBSztRQUNwQ3FCLFVBQUFBO1FBQ0EsVUFBVSxJQUFJbEMsMERBQTBCQTtJQUN6QztJQUNBLElBQU1vQyxRQUFRLElBQUloQywrQ0FBZUEsQ0FBQ1MsS0FBSztRQUN0QyxPQUFPSCxxREFBcUI7UUFDNUIsVUFBVTtZQUFDeUI7U0FBSztJQUNqQjtJQUNBdEIsSUFBSSxHQUFHLENBQ04sSUFBSVgsK0NBQWVBLENBQUNXLEtBQUs7UUFBRSxPQUFPO1lBQUM7WUFBSztZQUFLO1lBQUs7U0FBRTtRQUFFLE9BQU87SUFBRSxJQUMvRHVCO0lBRUR2QixJQUFJLEtBQUs7SUFDVCxPQUFPO0lBQ1B1QixNQUFNLEdBQUcsQ0FBQyxJQUFJbkMsOENBQWNBLENBQUNZLEtBQUs7UUFBRSxPQUFPO0lBQUU7QUFDOUM7QUFFZSxTQUFTdEI7SUFDdkIscUJBQU8sa0RBQUNvQixnREFBSUE7UUFBQyxTQUFTQztRQUFNLEtBQUs7UUFBQyxTQUFTO1lBQUUsT0FBTztRQUFNOzs7Ozs7QUFDM0Q7QUFFQSxTQUFTVSxjQUFjUixJQUFVO0lBQ2hDLElBQU1PLFVBQTJDLEVBQUU7SUFDbkRnQixtQkFBbUJ2QixNQUFNTztJQUN6QixPQUFPQTtBQUNSO0FBRUEsU0FBU2dCLG1CQUNSQyxLQUF5QixFQUN6QmpCLE9BQXdDO1FBRHRDa0IsUUFBRkQsTUFBRUMsT0FBT0MsV0FBVEYsTUFBU0U7SUFHVCxJQUFJLENBQUNBLFVBQVU7SUFFZixJQUF5QkMsMEJBQUFBLFdBQWxCQyxLQUFrQkQsV0FBZEUsS0FBY0YsV0FBVkcsS0FBVUgsV0FBTkksS0FBTUo7UUFDcEJWLGtDQUFBQSwyQkFBQUE7OztZQUFBQSxJQUFNZSxRQUFOZjtZQUNKLElBQXlCZ0IsZ0NBQUFBLE1BQU0sS0FBSyxNQUE3QkMsS0FBa0JELGlCQUFkRSxLQUFjRixpQkFBVkcsS0FBVUgsaUJBQU5JLEtBQU1KO1lBQ3pCLElBQU1mLE1BQU0sYUFBQ0o7dUJBQ1pwQixpREFBYUEsQ0FBQ29CLEdBQUc7b0JBQUNjO29CQUFJQztvQkFBSUM7aUJBQUcsRUFBRTtvQkFBQ0k7b0JBQUlDO29CQUFJQztpQkFBRyxFQUFFTCxJQUFJTTs7WUFDbEQ5QixRQUFRLElBQUksQ0FBQ1c7WUFDYkssbUJBQW1CUyxPQUFPekI7UUFDM0I7UUFOQSxRQUFLVSxZQUFlUyw2QkFBZlQsU0FBQUEsNkJBQUFBLFFBQUFBLHlCQUFBQTs7UUFBQUE7UUFBQUE7OztpQkFBQUEsNkJBQUFBO2dCQUFBQTs7O2dCQUFBQTtzQkFBQUE7Ozs7QUFPTjtBQU9BLFNBQVNkLFlBQVlILElBQVU7SUFDOUIsSUFBTXNDLFNBQVM7UUFBQ3RDO0tBQUs7SUFDckIsSUFBTXVDLE1BQW9CO1FBQ3pCQyxPQUFPLGlCQUFpQjtRQUN4QkEsT0FBTyxpQkFBaUI7UUFDeEJBLE9BQU8saUJBQWlCO0tBQ3hCO0lBQ0QsSUFBTUMsTUFBb0I7UUFDekJELE9BQU8saUJBQWlCO1FBQ3hCQSxPQUFPLGlCQUFpQjtRQUN4QkEsT0FBTyxpQkFBaUI7S0FDeEI7SUFDRCxNQUFPRixPQUFPLE1BQU0sR0FBRyxFQUFHO1lBYU5JO1FBWm5CLElBQU1DLE9BQU9MLE9BQU8sR0FBRztRQUN2QixJQUFJLENBQUNLLE1BQU07UUFFWCxJQUFzQkMsK0JBQUFBLEtBQUssS0FBSyxNQUF6QmpDLElBQWVpQyxnQkFBWmhDLElBQVlnQyxnQkFBVC9CLElBQVMrQixnQkFBTmIsS0FBTWE7UUFDdEJ0QyxRQUFRLEdBQUcsQ0FBQywwQ0FBMENLLEdBQUdDLEdBQUdDLElBQUksMERBQTBEO1FBQzFILElBQU1nQyxJQUFJZCxLQUFLO1FBQ2ZRLEdBQUcsQ0FBQyxFQUFFLEdBQUdwQixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUU1QixJQUFJa0M7UUFDOUJKLEdBQUcsQ0FBQyxFQUFFLEdBQUd0QixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUU1QixJQUFJa0M7UUFDOUJOLEdBQUcsQ0FBQyxFQUFFLEdBQUdwQixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUUzQixJQUFJaUM7UUFDOUJKLEdBQUcsQ0FBQyxFQUFFLEdBQUd0QixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUUzQixJQUFJaUM7UUFDOUJOLEdBQUcsQ0FBQyxFQUFFLEdBQUdwQixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUUxQixJQUFJZ0M7UUFDOUJKLEdBQUcsQ0FBQyxFQUFFLEdBQUd0QixLQUFLLEdBQUcsQ0FBQ29CLEdBQUcsQ0FBQyxFQUFFLEVBQUUxQixJQUFJZ0M7UUFDOUIsSUFBSUYsS0FBSyxRQUFRLEVBQUVELENBQUFBLFVBQUFBLFFBQU8sSUFBSSxPQUFYQSxTQUFZLHFCQUFHQyxLQUFLLFFBQVE7SUFDaEQ7SUFDQSxPQUFPO1FBQUVKLEtBQUFBO1FBQUtFLEtBQUFBO0lBQUk7QUFDbkI7QUFFQSxTQUFTeEMsU0FDUjZDLE1BQWMsRUFDZEMsTUFBYyxFQUNkQyxHQUFXLEVBQ1hDLEdBQVc7UUFDWHRDLElBQUFBLGlFQUFJLEdBQ0pDLElBQUFBLGlFQUFJLEdBQ0pDLElBQUFBLGlFQUFJO0lBRUosSUFBTXFDLFVBQVVILFNBQVN2RCxpREFBYUEsQ0FBQyxLQUFLO0lBQzVDLElBQU0yRCxPQUFPSCxNQUFNeEQsaURBQWFBLENBQUMsQ0FBQyxJQUFJO0lBQ3RDLElBQU00RCxPQUFPSCxNQUFNekQsaURBQWFBLENBQUMsQ0FBQyxJQUFJO0lBQ3RDLElBQU02RCxTQUFTOUQsbURBQWVBLENBQUM0RDtJQUMvQixJQUFNRyxTQUFTL0QsbURBQWVBLENBQUM2RDtJQUMvQixJQUFNRyxLQUFLcEMsS0FBSyxHQUFHLENBQUNrQztJQUNwQixJQUFNUixJQUFJMUIsS0FBSyxHQUFHLENBQUNrQztJQUNuQixJQUFNRyxLQUFLWCxJQUFJMUIsS0FBSyxHQUFHLENBQUNtQztJQUN4QixJQUFNRyxLQUFLWixJQUFJMUIsS0FBSyxHQUFHLENBQUNtQztJQUN4QixJQUFNSSxLQUFLL0MsSUFBSTZDLEtBQUtWO0lBQ3BCLElBQU1hLEtBQUsvQyxJQUFJMkMsS0FBS1Q7SUFDcEIsSUFBTWMsS0FBSy9DLElBQUk0QyxLQUFLWDtJQUNwQixJQUFNOUMsT0FBYTtRQUNsQixPQUFPO1lBQUNXO1lBQUdDO1lBQUdDO1lBQUdrQztTQUFPO1FBQ3hCLFVBQVUsRUFBRTtJQUNiO0lBQ0EsSUFBSUcsVUFBVSxLQUFLO1FBQ2xCLElBQU1XLFFBQVExQyxLQUFLLEdBQUcsQ0FBQyxHQUFHQSxLQUFLLEtBQUssQ0FBQzNCLGlEQUFhQSxDQUFDLEdBQUc7UUFDdEQsSUFBSyxJQUFJc0UsT0FBTyxHQUFHQSxPQUFPRCxPQUFPQyxPQUFRO2dCQUN4Q0M7YUFBQUEsaUJBQUFBLEtBQUssUUFBUSxjQUFiQSxxQ0FBQUEsZUFBZSxJQUFJLENBQ2xCOUQsU0FDQzZDLFNBQVN0RCxpREFBYUEsQ0FBQyxLQUFLLE1BQzVCMEQsU0FDQUMsT0FBTzNELGlEQUFhQSxDQUFDLENBQUMsSUFBSSxLQUMxQjRELE9BQU81RCxpREFBYUEsQ0FBQyxDQUFDLElBQUksS0FDMUJrRSxJQUNBQyxJQUNBQztRQUdIO0lBQ0Q7SUFDQSxPQUFPNUQ7QUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0xpQjs7Ozs7Ozs7Ozs7MEJBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFNRjtvQkFBQTs7a0NBQ0M7Ozs7OztvQkFBcUM7aUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdEM7QUFDQSxZQUFZLGVBQWU7QUFDM0IsWUFBWSxvQ0FBb0M7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5QkFBeUI7QUFDcEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDhCQUE4QjtBQUM1QztBQUNBLGNBQWMsOERBQThEO0FBQzVFO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTs7QUFFeUI7O0FBRXpCLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBLG1CQUFtQixvQ0FBbUI7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOERBQThEO0FBQ3pFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLDRCQUE0QixpQ0FBZ0I7O0FBRTVDO0FBQ0EsU0FBUyw4QkFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZTtBQUNmO0FBQ087QUFDUCxhQUFhLHlCQUF5QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsU0FBUyxvQ0FBbUI7QUFDNUI7QUFDQSxLQUFLLHFCQUFxQjtBQUMxQjtBQUNBO0FBQ0EifQ==