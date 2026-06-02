"use strict";
(self["webpackChunk_tolokoban_tgd"] = self["webpackChunk_tolokoban_tgd"] || []).push([["src_app_articles_mesh_volume-to-mesh_page_tsx-src_components_demo_Tgd_tgd_module_css-src_comp-c6f888"], {
43717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
// extracted by css-extract-rspack-plugin
/* export default */ const __rspack_default_export = ({"flex1":"src-app-articles-mesh-volume-to-mesh-page-module_flex1_EI0H1Q"});

},
5918(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CONFIGURATIONS: () => (CONFIGURATIONS)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);

/**
 * For each configuration, we create triangles.
 */ var CONFIGURATIONS = (0,_tolokoban_tgd__rspack_import_0.tgdDataMarchingCubesConfigurations)().map(function(arr) {
    return arr.map(function(i) {
        return "ABCDEFGHIJKL".charAt(i);
    }).join("");
});


},
77975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCorners: () => (PainterCorners)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterCorners = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterCorners, TgdPainter);
    function PainterCorners(context) {
        _class_call_check(this, PainterCorners);
        var _this;
        _this = _call_super(this, PainterCorners), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "_caseNumber", void 0), _this.context = context, _this._caseNumber = -1;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ]);
        _this.texture = _this.createTexture();
        _this.caseNumber = 0;
        return _this;
    }
    _create_class(PainterCorners, [
        {
            key: "caseNumber",
            get: function get() {
                return this._caseNumber;
            },
            set: function set(value) {
                if (value === this._caseNumber) return;
                this._caseNumber = value;
                var colors = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
                this.dataset.set("attColor", new Float32Array(colors));
                this.vao.updateDataset(this.dataset);
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.texture.delete();
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, texture = _this.texture;
                var gl = context.gl, camera = context.camera;
                program.use();
                texture.activate(0, program, "uniTexture");
                program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawArrays(gl.POINTS, 0, 8);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3",
                    attColor: "float"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
                dataset.set("attColor", new Float32Array(_geometry__rspack_import_1.cubeVertices.length));
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniHalfScreenHeightInPixels: "float"
                    },
                    attributes: {
                        attPoint: "vec4",
                        attColor: "float"
                    },
                    varying: {
                        varColor: "float"
                    },
                    mainCode: [
                        "varColor = attColor;",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                        "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varColor: "float"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "vec2 pos = 2.0 * (gl_PointCoord.xy - vec2(.5));",
                        "float radius = dot(pos, pos);",
                        "if (radius > 1.0) discard;",
                        "vec2 uv = vec2(varColor, .5);",
                        "FragColor = texture(uniTexture, uv);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        },
        {
            key: "createTexture",
            value: function createTexture() {
                var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
                texture.setParams({
                    magFilter: "NEAREST",
                    minFilter: "NEAREST",
                    wrapS: "CLAMP_TO_EDGE",
                    wrapT: "CLAMP_TO_EDGE"
                });
                texture.loadBitmap((0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreatePalette)([
                    "#07f",
                    "#f00"
                ]));
                return texture;
            }
        }
    ]);
    return PainterCorners;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
75506(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  caseNumberToColors: () => (caseNumberToColors),
  cubeEdges: () => (cubeEdges),
  cubeMidPoints: () => (cubeMidPoints),
  cubeVertices: () => (cubeVertices),
  trianglesStringToElements: () => (trianglesStringToElements)
});
// prettier-ignore
var cubeEdges = new Uint8Array([
    0,
    1,
    0,
    2,
    0,
    4,
    1,
    3,
    1,
    5,
    2,
    3,
    2,
    6,
    3,
    7,
    4,
    5,
    4,
    6,
    5,
    7,
    6,
    7
]);
var P = +1;
var N = -1;
// prettier-ignore
var cubeVertices = new Float32Array([
    N,
    N,
    N,
    N,
    N,
    P,
    N,
    P,
    N,
    N,
    P,
    P,
    P,
    N,
    N,
    P,
    N,
    P,
    P,
    P,
    N,
    P,
    P,
    P
]);
var midPoints = [];
for(var i = 0; i < cubeEdges.length; i += 2){
    var a = 3 * cubeEdges[i];
    var b = 3 * cubeEdges[i + 1];
    var x = 0.5 * (cubeVertices[a + 0] + cubeVertices[b + 0]);
    var y = 0.5 * (cubeVertices[a + 1] + cubeVertices[b + 1]);
    var z = 0.5 * (cubeVertices[a + 2] + cubeVertices[b + 2]);
    midPoints.push(x, y, z);
}
var cubeMidPoints = new Float32Array(midPoints);
function trianglesStringToElements(value) {
    var elements = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = value.trim().toUpperCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var C = _step.value;
            if (C < "A" || C > "L") continue;
            elements.push(C.charCodeAt(0) - "A".charCodeAt(0));
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
    return elements;
}
/**
 * A case number defines what corner is inside (1) or outside (0)
 * of the volume.
 * @returns An array of 8 elements with 1 if the corner is inside,
 * and 0 if it is outside.
 */ function caseNumberToColors(value) {
    var colors = [];
    for(var i = 0; i < 8; i++){
        var mask = 1 << i;
        colors.push(value & mask ? 1 : 0);
    }
    return colors;
}


},
18866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useVolumeToMeshManager: () => (useVolumeToMeshManager)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _corners__rspack_import_2 = __webpack_require__(77975);
/* import */ var _mid_points__rspack_import_3 = __webpack_require__(32659);
/* import */ var _painter_cube__rspack_import_4 = __webpack_require__(56890);
/* import */ var _triangles__rspack_import_5 = __webpack_require__(32864);
/* import */ var _wireframe__rspack_import_6 = __webpack_require__(49043);
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _instanceof(left, right) {
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}







var VolumeToMeshManager = /*#__PURE__*/ function() {
    "use strict";
    function VolumeToMeshManager() {
        _class_call_check(this, VolumeToMeshManager);
        _define_property(this, "_context", null);
        _define_property(this, "midPointsPainter", null);
        _define_property(this, "cornersPainter", null);
        _define_property(this, "trianglesPainter", null);
        _define_property(this, "wireframePainter", null);
    }
    _create_class(VolumeToMeshManager, [
        {
            key: "context",
            set: function set(context) {
                var camera = context.camera;
                if (_instanceof(camera, _tolokoban_tgd__rspack_import_0.TgdCameraPerspective)) {
                    camera.fovy = (0,_tolokoban_tgd__rspack_import_0.tgdCalcDegToRad)(90);
                    camera.transfo.distance = 3;
                }
                new _tolokoban_tgd__rspack_import_0.TgdControllerCameraOrbit(context, {
                    inertiaOrbit: 1000
                });
                if (this._context) this._context.delete();
                this._context = context;
                var clear = new _tolokoban_tgd__rspack_import_0.TgdPainterClear(context, {
                    color: [
                        0,
                        0,
                        0,
                        1
                    ],
                    depth: 1
                });
                var state = new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
                    depth: _tolokoban_tgd__rspack_import_0.webglPresetDepth.less,
                    cull: _tolokoban_tgd__rspack_import_0.webglPresetCull.off
                });
                var wireframe = new _wireframe__rspack_import_6.PainterWireframe(context);
                this.wireframePainter = wireframe;
                var midPoints = new _mid_points__rspack_import_3.PainterMidPoints(context);
                this.midPointsPainter = midPoints;
                var corners = new _corners__rspack_import_2.PainterCorners(context);
                this.cornersPainter = corners;
                var triangles = new _triangles__rspack_import_5.PainterTriangles(context);
                this.trianglesPainter = triangles;
                state.add(// new TgdPainterAxes(context, { scale: 2 }),
                new _painter_cube__rspack_import_4.PainterCube(context), wireframe, new _tolokoban_tgd__rspack_import_0.TgdPainterState(context, {
                    blend: _tolokoban_tgd__rspack_import_0.webglPresetBlend.premultipliedAlpha,
                    children: [
                        midPoints,
                        corners,
                        triangles
                    ]
                }));
                context.add(clear, state);
                context.paint();
            }
        },
        {
            key: "caseNumber",
            get: function get() {
                var _ref;
                var _this_cornersPainter;
                return (_ref = (_this_cornersPainter = this.cornersPainter) === null || _this_cornersPainter === void 0 ? void 0 : _this_cornersPainter.caseNumber) !== null && _ref !== void 0 ? _ref : 0;
            },
            set: /**
	 * There are 256 cases, ranging from 0 to 255.
	 */ function set(value) {
                var _this = this, corners = _this.cornersPainter, midPoints = _this.midPointsPainter;
                if (corners) corners.caseNumber = value;
                if (midPoints) midPoints.caseNumber = value;
            }
        },
        {
            key: "triangles",
            set: function set(value) {
                var _this = this, trianglesPainter = _this.trianglesPainter, wireframePainter = _this.wireframePainter;
                if (trianglesPainter) trianglesPainter.triangles = value;
                if (wireframePainter) wireframePainter.triangles = value;
            }
        }
    ]);
    return VolumeToMeshManager;
}();
function useVolumeToMeshManager() {
    var ref = react__rspack_import_1_default().useRef(null);
    if (!ref.current) ref.current = new VolumeToMeshManager();
    return ref.current;
}


},
32659(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterMidPoints: () => (PainterMidPoints)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterMidPoints = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterMidPoints, TgdPainter);
    function PainterMidPoints(context) {
        _class_call_check(this, PainterMidPoints);
        var _this;
        _this = _call_super(this, PainterMidPoints), _define_property(_this, "context", void 0), _define_property(_this, "texture", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "_caseNumber", void 0), _this.context = context, _this._caseNumber = 0;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ]);
        _this.texture = _this.createTexture();
        return _this;
    }
    _create_class(PainterMidPoints, [
        {
            key: "caseNumber",
            get: function get() {
                return this._caseNumber;
            },
            set: function set(value) {
                if (value === this._caseNumber) return;
                this._caseNumber = value;
                var corners = (0,_geometry__rspack_import_1.caseNumberToColors)(value);
                var visibles = [];
                for(var i = 0; i < 12; i++){
                    var a = corners[_geometry__rspack_import_1.cubeEdges[i * 2]];
                    var b = corners[_geometry__rspack_import_1.cubeEdges[i * 2 + 1]];
                    visibles.push(a === b ? 0 : 1);
                }
                this.dataset.set("attVisible", new Float32Array(visibles));
                this.vao.updateDataset(this.dataset);
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.texture.delete();
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, texture = _this.texture;
                var gl = context.gl, camera = context.camera;
                program.use();
                texture.activate(0, program, "uniTexture");
                program.uniform1f("uniHalfScreenHeightInPixels", context.height * 0.5);
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawArrays(gl.POINTS, 0, 12);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3",
                    attVisible: "float"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniHalfScreenHeightInPixels: "float"
                    },
                    attributes: {
                        attPoint: "vec4",
                        attVisible: "float"
                    },
                    varying: {
                        varU: "float"
                    },
                    mainCode: [
                        "varU = float(gl_VertexID) / 12.0;",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;",
                        "gl_PointSize = 0.2 * uniHalfScreenHeightInPixels / gl_Position.w;",
                        "gl_PointSize *= attVisible;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varU: "float"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "vec2 uv = vec2(varU, 0.0) + gl_PointCoord.xy * vec2(1.0 / 12.0, 1.0);",
                        "FragColor = texture(uniTexture, uv);",
                        "if (FragColor.a < .1) discard;"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        },
        {
            key: "createTexture",
            value: function createTexture() {
                var texture = new _tolokoban_tgd__rspack_import_0.TgdTexture2D(this.context);
                texture.setParams({
                    magFilter: "LINEAR",
                    minFilter: "LINEAR"
                });
                var letters = "ABCDEFGHIJKL";
                var count = letters.length;
                var size = 64;
                var width = size * count;
                var height = size;
                var _tgdCanvasCreateWithContext2D = (0,_tolokoban_tgd__rspack_import_0.tgdCanvasCreateWithContext2D)(width, height), ctx = _tgdCanvasCreateWithContext2D.ctx, canvas = _tgdCanvasCreateWithContext2D.canvas;
                ctx.font = "bold ".concat(size, "px sans-serif");
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#0f0";
                for(var i = 0; i < count; i++){
                    var letter = letters.charAt(i);
                    var x = (i + 0.5) / count;
                    var y = 0.5;
                    ctx.fillText(letter, x * width, y * height);
                }
                texture.loadBitmap(canvas);
                return texture;
            }
        }
    ]);
    return PainterMidPoints;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
56890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterCube: () => (PainterCube)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterCube = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterCube, TgdPainter);
    function PainterCube(context) {
        _class_call_check(this, PainterCube);
        var _this;
        _this = _call_super(this, PainterCube), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _this.context = context;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        // prettier-ignore
        var elements = _geometry__rspack_import_1.cubeEdges;
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterCube, [
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.LINES, 24, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeVertices);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    varying: {
                        varColor: "vec3"
                    },
                    mainCode: [
                        "varColor = abs(attPoint.xyz);",
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    varying: {
                        varColor: "vec3"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "FragColor = vec4(varColor, 1.0);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterCube;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
32864(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterTriangles: () => (PainterTriangles)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterTriangles = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterTriangles, TgdPainter);
    function PainterTriangles(context) {
        _class_call_check(this, PainterTriangles);
        var _this;
        _this = _call_super(this, PainterTriangles), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "elementsCount", void 0), _define_property(_this, "_triangles", void 0), _this.context = context, _this.elementsCount = 0, _this._triangles = "";
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        var elements = new Uint8Array();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterTriangles, [
        {
            key: "triangles",
            set: function set(value) {
                var elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
                this.vao.updateElements(elements);
                this.elementsCount = elements.length;
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, elementsCount = _this.elementsCount;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.TRIANGLES, elementsCount, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniLight: "float"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    mainCode: [
                        "gl_Position = uniProjectionMatrix * uniModelViewMatrix * attPoint;"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "float a = 1.0;",
                        "FragColor = vec4(",
                        "  .8 * (gl_FrontFacing ? vec3(0, .5, 1) : vec3(1, 0, 0)),",
                        "  a",
                        ");"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterTriangles;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
49043(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PainterWireframe: () => (PainterWireframe)
});
/* import */ var _tolokoban_tgd__rspack_import_0 = __webpack_require__(47578);
/* import */ var _geometry__rspack_import_1 = __webpack_require__(75506);
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}


var PainterWireframe = /*#__PURE__*/ function(TgdPainter) {
    "use strict";
    _inherits(PainterWireframe, TgdPainter);
    function PainterWireframe(context) {
        _class_call_check(this, PainterWireframe);
        var _this;
        _this = _call_super(this, PainterWireframe), _define_property(_this, "context", void 0), _define_property(_this, "dataset", void 0), _define_property(_this, "program", void 0), _define_property(_this, "vao", void 0), _define_property(_this, "elementsCount", void 0), _this.context = context, _this.elementsCount = 0;
        _this.dataset = _this.createDataset();
        _this.program = _this.createProgram();
        var elements = new Uint8Array();
        _this.vao = new _tolokoban_tgd__rspack_import_0.TgdVertexArray(context.gl, _this.program, [
            _this.dataset
        ], elements);
        return _this;
    }
    _create_class(PainterWireframe, [
        {
            key: "triangles",
            set: function set(value) {
                var elements = (0,_geometry__rspack_import_1.trianglesStringToElements)(value);
                var wireframe = [];
                for(var i = 0; i < elements.length; i += 3){
                    var a = elements[i];
                    var b = elements[i + 1];
                    var c = elements[i + 2];
                    wireframe.push(a, b, c, a);
                }
                this.vao.updateElements(wireframe);
                this.elementsCount = wireframe.length;
                this.context.paint();
            }
        },
        {
            key: "delete",
            value: function _delete() {
                this.program.delete();
                this.vao.delete();
            }
        },
        {
            key: "paint",
            value: function paint() {
                var _this = this, context = _this.context, program = _this.program, vao = _this.vao, elementsCount = _this.elementsCount;
                var gl = context.gl, camera = context.camera;
                program.use();
                program.uniformMatrix4fv("uniModelViewMatrix", camera.matrixModelView);
                program.uniformMatrix4fv("uniProjectionMatrix", camera.matrixProjection);
                vao.bind();
                gl.drawElements(gl.LINES, elementsCount, gl.UNSIGNED_BYTE, 0);
                vao.unbind();
            }
        },
        {
            key: "createDataset",
            value: function createDataset() {
                var dataset = new _tolokoban_tgd__rspack_import_0.TgdDataset({
                    attPoint: "vec3"
                });
                dataset.set("attPoint", _geometry__rspack_import_1.cubeMidPoints);
                return dataset;
            }
        },
        {
            key: "createProgram",
            value: function createProgram() {
                var vert = new _tolokoban_tgd__rspack_import_0.TgdShaderVertex({
                    uniforms: {
                        uniModelViewMatrix: "mat4",
                        uniProjectionMatrix: "mat4",
                        uniLight: "float"
                    },
                    attributes: {
                        attPoint: "vec4"
                    },
                    mainCode: [
                        "gl_Position = uniProjectionMatrix * ",
                        "  (uniModelViewMatrix * attPoint + vec4(0, 0, 0.02, 0));"
                    ]
                }).code;
                var frag = new _tolokoban_tgd__rspack_import_0.TgdShaderFragment({
                    uniforms: {
                        uniTexture: "sampler2D"
                    },
                    outputs: {
                        FragColor: "vec4"
                    },
                    mainCode: [
                        "FragColor = vec4(0,0,0,1);"
                    ]
                }).code;
                var program = new _tolokoban_tgd__rspack_import_0.TgdProgram(this.context.gl, {
                    vert: vert,
                    frag: frag
                });
                return program;
            }
        }
    ]);
    return PainterWireframe;
}(_tolokoban_tgd__rspack_import_0.TgdPainter);


},
88412(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Page)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__(85446);
/* import */ var react__rspack_import_1 = __webpack_require__(96540);
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _components_demo_Tgd__rspack_import_2 = __webpack_require__(43475);
/* import */ var _tolokoban_ui__rspack_import_3 = __webpack_require__(62430);
/* import */ var _tolokoban_tgd__rspack_import_4 = __webpack_require__(47578);
/* import */ var _manager__rspack_import_5 = __webpack_require__(18866);
/* import */ var _tolokoban_type_guards__rspack_import_6 = __webpack_require__(2197);
/* import */ var _page_module_css__rspack_import_7 = __webpack_require__(43717);
/* import */ var _geometry__rspack_import_8 = __webpack_require__(75506);
/* import */ var _configurations__rspack_import_9 = __webpack_require__(5918);
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










function Page() {
    var _useLocalStorageState = _sliced_to_array((0,_tolokoban_ui__rspack_import_3.useLocalStorageState)(0, "volume-to-mesh/caseNumber", function(value) {
        return (0,_tolokoban_tgd__rspack_import_4.tgdCalcClamp)(Math.floor((0,_tolokoban_type_guards__rspack_import_6.ensureNumber)(value, 0)), 0, 255);
    }), 2), caseNumber = _useLocalStorageState[0], setCaseNumber = _useLocalStorageState[1];
    var _React_useState = _sliced_to_array(react__rspack_import_1_default().useState(""), 2), triangles = _React_useState[0], setTriangles = _React_useState[1];
    var key = "volume-to-mesh/triangles/".concat(caseNumber);
    react__rspack_import_1_default().useEffect(function() {
        var _globalThis_localStorage_getItem;
        setTriangles((_globalThis_localStorage_getItem = globalThis.localStorage.getItem(key)) !== null && _globalThis_localStorage_getItem !== void 0 ? _globalThis_localStorage_getItem : _configurations__rspack_import_9.CONFIGURATIONS[caseNumber]);
        manager.caseNumber = caseNumber;
    }, [
        caseNumber
    ]);
    react__rspack_import_1_default().useEffect(function() {
        globalThis.localStorage.setItem(key, triangles.trim().toUpperCase());
        manager.triangles = triangles;
    }, [
        triangles
    ]);
    var handleLeft = function handleLeft() {
        setCaseNumber(caseNumber + 255 & 0xff);
    };
    var handleRight = function handleRight() {
        setCaseNumber(caseNumber + 1 & 0xff);
    };
    var manager = (0,_manager__rspack_import_5.useVolumeToMeshManager)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("h1", {
                children: "Marching cubes"
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 53,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("a", {
                        href: "https://en.wikipedia.org/wiki/Marching_cubes",
                        children: "Marching cubes"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 55,
                        columnNumber: 5
                    }, this),
                    " ",
                    "is a technique to generate meshes from a volume.",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 59,
                        columnNumber: 5
                    }, this),
                    "A volume is a function that tells you, for each point in a box, it you are inside or outside an object."
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 54,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: [
                    "A voxel is a unit cube. Each corner of a voxel is either inside the volume (",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("b", {
                        children: "red"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    ") or outside (",
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("b", {
                        children: "blue"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 64,
                        columnNumber: 37
                    }, this),
                    "). With triangles, touching the edges of the voxel, we need to separate the space between red and blue corners."
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 62,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("p", {
                children: "A voxel has 8 corners, so we have 256 configurations."
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 68,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_components_demo_Tgd__rspack_import_2["default"], {
                onReady: function onReady(context) {
                    manager.context = context;
                }
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewSlider, {
                className: _page_module_css__rspack_import_7["default"].flex1,
                wide: true,
                text: "".concat(caseNumber),
                value: caseNumber,
                onChange: setCaseNumber,
                min: 0,
                max: 255,
                step: 1
            }, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 84,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewPanel, {
                        display: "flex",
                        alignItems: "center",
                        fullwidth: true,
                        gap: "M",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewInputText, {
                                label: "Triangles (from mid points ABCDEFGHIJKL)",
                                value: triangles,
                                onChange: setTriangles
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 91,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, {
                                icon: _tolokoban_ui__rspack_import_3.IconArrowLeft,
                                onClick: handleLeft
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 96,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewFloatingButton, {
                                icon: _tolokoban_ui__rspack_import_3.IconArrowRight,
                                onClick: handleRight
                            }, void 0, false, {
                                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                                lineNumber: 97,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 90,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_tolokoban_ui__rspack_import_3.ViewButton, {
                        onClick: handleReset,
                        icon: _tolokoban_ui__rspack_import_3.IconReset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 99,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 85,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 103,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("br", {}, void 0, false, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 104,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("details", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("summary", {
                        children: "List of triangles per configuration"
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 106,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("pre", {
                        children: getTriangles()
                    }, void 0, false, {
                        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                        lineNumber: 107,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
                lineNumber: 105,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "/Users/tolokoban/Code/github/game/tgd2/doc/src/app/articles/mesh/volume-to-mesh/page.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
}
function handleReset() {
    var configurations = (0,_tolokoban_tgd__rspack_import_4.tgdDataMarchingCubesConfigurations)();
    for(var i = 0; i < configurations.length; i++){
        var config = configurations[i];
        var code = config.map(function(i) {
            return "ABCDEFGHIJKL".charAt(i);
        }).join("");
        globalThis.localStorage.setItem("volume-to-mesh/triangles/".concat(i), code);
    }
    location.reload();
}
function getTriangles() {
    var lines = [];
    for(var i = 0; i < 256; i++){
        var _globalThis_localStorage_getItem;
        var text = (_globalThis_localStorage_getItem = globalThis.localStorage.getItem("volume-to-mesh/triangles/".concat(i))) !== null && _globalThis_localStorage_getItem !== void 0 ? _globalThis_localStorage_getItem : "?";
        if (text === "?") lines.push("[ /* N/A /* ],");
        else {
            var elements = (0,_geometry__rspack_import_8.trianglesStringToElements)(text);
            lines.push("".concat(JSON.stringify(elements), ","));
        }
    }
    return lines.join("\n");
}


},

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyL3NyY19hcHBfYXJ0aWNsZXNfbWVzaF92b2x1bWUtdG8tbWVzaF9wYWdlX3RzeC1zcmNfY29tcG9uZW50c19kZW1vX1RnZF90Z2RfbW9kdWxlX2Nzcy1zcmNfY29tcC1jNmY4ODguMTJkZDkyYTZkYmU1NzQ4ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0B0b2xva29iYW4vdGdkLy4vc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL3BhZ2UubW9kdWxlLmNzcz9iOTY1IiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL2NvbmZpZ3VyYXRpb25zLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL2Nvcm5lcnMudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vZ2VvbWV0cnkudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vbWFuYWdlci50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy9taWQtcG9pbnRzLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9fL3BhaW50ZXItY3ViZS50cyIsIi9Vc2Vycy90b2xva29iYW4vQ29kZS9naXRodWIvZ2FtZS90Z2QyL2RvYy9zcmMvYXBwL2FydGljbGVzL21lc2gvdm9sdW1lLXRvLW1lc2gvXy90cmlhbmdsZXMudHMiLCIvVXNlcnMvdG9sb2tvYmFuL0NvZGUvZ2l0aHViL2dhbWUvdGdkMi9kb2Mvc3JjL2FwcC9hcnRpY2xlcy9tZXNoL3ZvbHVtZS10by1tZXNoL18vd2lyZWZyYW1lLnRzIiwiL1VzZXJzL3RvbG9rb2Jhbi9Db2RlL2dpdGh1Yi9nYW1lL3RnZDIvZG9jL3NyYy9hcHAvYXJ0aWNsZXMvbWVzaC92b2x1bWUtdG8tbWVzaC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgY3NzLWV4dHJhY3QtcnNwYWNrLXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZmxleDFcIjpcInNyYy1hcHAtYXJ0aWNsZXMtbWVzaC12b2x1bWUtdG8tbWVzaC1wYWdlLW1vZHVsZV9mbGV4MV9FSTBIMVFcIn07IiwiaW1wb3J0IHsgdGdkRGF0YU1hcmNoaW5nQ3ViZXNDb25maWd1cmF0aW9ucyB9IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG4vKipcbiAqIEZvciBlYWNoIGNvbmZpZ3VyYXRpb24sIHdlIGNyZWF0ZSB0cmlhbmdsZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBDT05GSUdVUkFUSU9OUzogUmVhZG9ubHk8c3RyaW5nW10+ID1cblx0dGdkRGF0YU1hcmNoaW5nQ3ViZXNDb25maWd1cmF0aW9ucygpLm1hcCgoYXJyKSA9PlxuXHRcdGFyci5tYXAoKGkpID0+IFwiQUJDREVGR0hJSktMXCIuY2hhckF0KGkpKS5qb2luKFwiXCIpLFxuXHQpO1xuIiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyLFxuXHRUZ2RQcm9ncmFtLFxuXHRUZ2RTaGFkZXJGcmFnbWVudCxcblx0VGdkU2hhZGVyVmVydGV4LFxuXHRUZ2RUZXh0dXJlMkQsXG5cdFRnZFZlcnRleEFycmF5LFxuXHR0Z2RDYW52YXNDcmVhdGVQYWxldHRlLFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCB7IGNhc2VOdW1iZXJUb0NvbG9ycywgY3ViZVZlcnRpY2VzIH0gZnJvbSBcIi4vZ2VvbWV0cnlcIjtcblxuZXhwb3J0IGNsYXNzIFBhaW50ZXJDb3JuZXJzIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgdGV4dHVyZTogVGdkVGV4dHVyZTJEO1xuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbTtcblx0cHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5O1xuXHRwcml2YXRlIF9jYXNlTnVtYmVyID0gLTE7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKTtcblx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcblx0XHR0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByb2dyYW0sIFt0aGlzLmRhdGFzZXRdKTtcblx0XHR0aGlzLnRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcblx0XHR0aGlzLmNhc2VOdW1iZXIgPSAwO1xuXHR9XG5cblx0Z2V0IGNhc2VOdW1iZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2Nhc2VOdW1iZXI7XG5cdH1cblx0c2V0IGNhc2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xuXHRcdGlmICh2YWx1ZSA9PT0gdGhpcy5fY2FzZU51bWJlcikgcmV0dXJuO1xuXG5cdFx0dGhpcy5fY2FzZU51bWJlciA9IHZhbHVlO1xuXHRcdGNvbnN0IGNvbG9ycyA9IGNhc2VOdW1iZXJUb0NvbG9ycyh2YWx1ZSk7XG5cdFx0dGhpcy5kYXRhc2V0LnNldChcImF0dENvbG9yXCIsIG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSk7XG5cdFx0dGhpcy52YW8udXBkYXRlRGF0YXNldCh0aGlzLmRhdGFzZXQpO1xuXHRcdHRoaXMuY29udGV4dC5wYWludCgpO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMudGV4dHVyZS5kZWxldGUoKTtcblx0XHR0aGlzLnByb2dyYW0uZGVsZXRlKCk7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCgpOiB2b2lkIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdFx0cHJvZ3JhbS51c2UoKTtcblx0XHR0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKTtcblx0XHRwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSk7XG5cdFx0cHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpO1xuXHRcdHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDgpO1xuXHRcdHZhby51bmJpbmQoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcblx0XHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFx0YXR0UG9pbnQ6IFwidmVjM1wiLFxuXHRcdFx0YXR0Q29sb3I6IFwiZmxvYXRcIixcblx0XHR9KTtcblx0XHRkYXRhc2V0LnNldChcImF0dFBvaW50XCIsIGN1YmVWZXJ0aWNlcyk7XG5cdFx0ZGF0YXNldC5zZXQoXCJhdHRDb2xvclwiLCBuZXcgRmxvYXQzMkFycmF5KGN1YmVWZXJ0aWNlcy5sZW5ndGgpKTtcblx0XHRyZXR1cm4gZGF0YXNldDtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUHJvZ3JhbSgpOiBUZ2RQcm9ncmFtIHtcblx0XHRjb25zdCB2ZXJ0ID0gbmV3IFRnZFNoYWRlclZlcnRleCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuXHRcdFx0XHR1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcblx0XHRcdFx0dW5pSGFsZlNjcmVlbkhlaWdodEluUGl4ZWxzOiBcImZsb2F0XCIsXG5cdFx0XHR9LFxuXHRcdFx0YXR0cmlidXRlczoge1xuXHRcdFx0XHRhdHRQb2ludDogXCJ2ZWM0XCIsXG5cdFx0XHRcdGF0dENvbG9yOiBcImZsb2F0XCIsXG5cdFx0XHR9LFxuXHRcdFx0dmFyeWluZzogeyB2YXJDb2xvcjogXCJmbG9hdFwiIH0sXG5cdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcInZhckNvbG9yID0gYXR0Q29sb3I7XCIsXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCIsXG5cdFx0XHRcdFwiZ2xfUG9pbnRTaXplID0gMC4yICogdW5pSGFsZlNjcmVlbkhlaWdodEluUGl4ZWxzIC8gZ2xfUG9zaXRpb24udztcIixcblx0XHRcdF0sXG5cdFx0fSkuY29kZTtcblx0XHRjb25zdCBmcmFnID0gbmV3IFRnZFNoYWRlckZyYWdtZW50KHtcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVuaVRleHR1cmU6IFwic2FtcGxlcjJEXCIsXG5cdFx0XHR9LFxuXHRcdFx0dmFyeWluZzogeyB2YXJDb2xvcjogXCJmbG9hdFwiIH0sXG5cdFx0XHRvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcblx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFwidmVjMiBwb3MgPSAyLjAgKiAoZ2xfUG9pbnRDb29yZC54eSAtIHZlYzIoLjUpKTtcIixcblx0XHRcdFx0XCJmbG9hdCByYWRpdXMgPSBkb3QocG9zLCBwb3MpO1wiLFxuXHRcdFx0XHRcImlmIChyYWRpdXMgPiAxLjApIGRpc2NhcmQ7XCIsXG5cdFx0XHRcdFwidmVjMiB1diA9IHZlYzIodmFyQ29sb3IsIC41KTtcIixcblx0XHRcdFx0XCJGcmFnQ29sb3IgPSB0ZXh0dXJlKHVuaVRleHR1cmUsIHV2KTtcIixcblx0XHRcdF0sXG5cdFx0fSkuY29kZTtcblx0XHRjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSk7XG5cdFx0cmV0dXJuIHByb2dyYW07XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCk6IFRnZFRleHR1cmUyRCB7XG5cdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZ2RUZXh0dXJlMkQodGhpcy5jb250ZXh0KTtcblx0XHR0ZXh0dXJlLnNldFBhcmFtcyh7XG5cdFx0XHRtYWdGaWx0ZXI6IFwiTkVBUkVTVFwiLFxuXHRcdFx0bWluRmlsdGVyOiBcIk5FQVJFU1RcIixcblx0XHRcdHdyYXBTOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHRcdHdyYXBUOiBcIkNMQU1QX1RPX0VER0VcIixcblx0XHR9KTtcblx0XHR0ZXh0dXJlLmxvYWRCaXRtYXAodGdkQ2FudmFzQ3JlYXRlUGFsZXR0ZShbXCIjMDdmXCIsIFwiI2YwMFwiXSkpO1xuXHRcdHJldHVybiB0ZXh0dXJlO1xuXHR9XG59XG4iLCIvLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBjdWJlRWRnZXMgPSBuZXcgVWludDhBcnJheShbXG5cdDAsIDEsIDAsIDIsIDAsIDQsIDEsIDMsIDEsIDUsIDIsIDMsIDIsIDYsIDMsIDcsIDQsIDUsIDQsIDYsIDUsIDcsIDYsIDcsXG5dKTtcblxuY29uc3QgUCA9ICsxO1xuY29uc3QgTiA9IC0xO1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBjdWJlVmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcblx0Tixcblx0Tixcblx0TiwgLy8gMFxuXHROLFxuXHROLFxuXHRQLCAvLyAxXG5cdE4sXG5cdFAsXG5cdE4sIC8vIDJcblx0Tixcblx0UCxcblx0UCwgLy8gM1xuXHRQLFxuXHROLFxuXHROLCAvLyA0XG5cdFAsXG5cdE4sXG5cdFAsIC8vIDVcblx0UCxcblx0UCxcblx0TiwgLy8gNlxuXHRQLFxuXHRQLFxuXHRQLCAvLyA3XG5dKTtcblxuY29uc3QgbWlkUG9pbnRzOiBudW1iZXJbXSA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBjdWJlRWRnZXMubGVuZ3RoOyBpICs9IDIpIHtcblx0Y29uc3QgYSA9IDMgKiBjdWJlRWRnZXNbaV07XG5cdGNvbnN0IGIgPSAzICogY3ViZUVkZ2VzW2kgKyAxXTtcblx0Y29uc3QgeCA9IDAuNSAqIChjdWJlVmVydGljZXNbYSArIDBdICsgY3ViZVZlcnRpY2VzW2IgKyAwXSk7XG5cdGNvbnN0IHkgPSAwLjUgKiAoY3ViZVZlcnRpY2VzW2EgKyAxXSArIGN1YmVWZXJ0aWNlc1tiICsgMV0pO1xuXHRjb25zdCB6ID0gMC41ICogKGN1YmVWZXJ0aWNlc1thICsgMl0gKyBjdWJlVmVydGljZXNbYiArIDJdKTtcblx0bWlkUG9pbnRzLnB1c2goeCwgeSwgeik7XG59XG5cbmV4cG9ydCBjb25zdCBjdWJlTWlkUG9pbnRzID0gbmV3IEZsb2F0MzJBcnJheShtaWRQb2ludHMpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZTogc3RyaW5nKSB7XG5cdGNvbnN0IGVsZW1lbnRzOiBudW1iZXJbXSA9IFtdO1xuXHRmb3IgKGNvbnN0IEMgb2YgdmFsdWUudHJpbSgpLnRvVXBwZXJDYXNlKCkpIHtcblx0XHRpZiAoQyA8IFwiQVwiIHx8IEMgPiBcIkxcIikgY29udGludWU7XG5cblx0XHRlbGVtZW50cy5wdXNoKEMuY2hhckNvZGVBdCgwKSAtIFwiQVwiLmNoYXJDb2RlQXQoMCkpO1xuXHR9XG5cdHJldHVybiBlbGVtZW50cztcbn1cblxuLyoqXG4gKiBBIGNhc2UgbnVtYmVyIGRlZmluZXMgd2hhdCBjb3JuZXIgaXMgaW5zaWRlICgxKSBvciBvdXRzaWRlICgwKVxuICogb2YgdGhlIHZvbHVtZS5cbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIDggZWxlbWVudHMgd2l0aCAxIGlmIHRoZSBjb3JuZXIgaXMgaW5zaWRlLFxuICogYW5kIDAgaWYgaXQgaXMgb3V0c2lkZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhc2VOdW1iZXJUb0NvbG9ycyh2YWx1ZTogbnVtYmVyKTogbnVtYmVyW10ge1xuXHRjb25zdCBjb2xvcnM6IG51bWJlcltdID0gW107XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdFx0Y29uc3QgbWFzayA9IDEgPDwgaTtcblx0XHRjb2xvcnMucHVzaCh2YWx1ZSAmIG1hc2sgPyAxIDogMCk7XG5cdH1cblx0cmV0dXJuIGNvbG9ycztcbn1cbiIsImltcG9ydCB7XG5cdFRnZENhbWVyYVBlcnNwZWN0aXZlLFxuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCxcblx0VGdkUGFpbnRlckF4ZXMsXG5cdFRnZFBhaW50ZXJDbGVhcixcblx0VGdkUGFpbnRlclN0YXRlLFxuXHR0Z2RDYWxjRGVnVG9SYWQsXG5cdHdlYmdsUHJlc2V0QmxlbmQsXG5cdHdlYmdsUHJlc2V0Q3VsbCxcblx0d2ViZ2xQcmVzZXREZXB0aCxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhaW50ZXJDb3JuZXJzIH0gZnJvbSBcIi4vY29ybmVyc1wiO1xuaW1wb3J0IHsgUGFpbnRlck1pZFBvaW50cyB9IGZyb20gXCIuL21pZC1wb2ludHNcIjtcbmltcG9ydCB7IFBhaW50ZXJDdWJlIH0gZnJvbSBcIi4vcGFpbnRlci1jdWJlXCI7XG5pbXBvcnQgeyBQYWludGVyVHJpYW5nbGVzIH0gZnJvbSBcIi4vdHJpYW5nbGVzXCI7XG5pbXBvcnQgeyBQYWludGVyV2lyZWZyYW1lIH0gZnJvbSBcIi4vd2lyZWZyYW1lXCI7XG5cbmNsYXNzIFZvbHVtZVRvTWVzaE1hbmFnZXIge1xuXHRwcml2YXRlIF9jb250ZXh0OiBUZ2RDb250ZXh0IHwgbnVsbCA9IG51bGw7XG5cdHByaXZhdGUgbWlkUG9pbnRzUGFpbnRlcjogUGFpbnRlck1pZFBvaW50cyB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIGNvcm5lcnNQYWludGVyOiBQYWludGVyQ29ybmVycyB8IG51bGwgPSBudWxsO1xuXHRwcml2YXRlIHRyaWFuZ2xlc1BhaW50ZXI6IFBhaW50ZXJUcmlhbmdsZXMgfCBudWxsID0gbnVsbDtcblx0cHJpdmF0ZSB3aXJlZnJhbWVQYWludGVyOiBQYWludGVyV2lyZWZyYW1lIHwgbnVsbCA9IG51bGw7XG5cblx0c2V0IGNvbnRleHQoY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRcdGNvbnN0IHsgY2FtZXJhIH0gPSBjb250ZXh0O1xuXHRcdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUZ2RDYW1lcmFQZXJzcGVjdGl2ZSkge1xuXHRcdFx0Y2FtZXJhLmZvdnkgPSB0Z2RDYWxjRGVnVG9SYWQoOTApO1xuXHRcdFx0Y2FtZXJhLnRyYW5zZm8uZGlzdGFuY2UgPSAzO1xuXHRcdH1cblx0XHRuZXcgVGdkQ29udHJvbGxlckNhbWVyYU9yYml0KGNvbnRleHQsIHtcblx0XHRcdGluZXJ0aWFPcmJpdDogMTAwMCxcblx0XHR9KTtcblx0XHRpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5kZWxldGUoKTtcblx0XHR0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcblx0XHRjb25zdCBjbGVhciA9IG5ldyBUZ2RQYWludGVyQ2xlYXIoY29udGV4dCwge1xuXHRcdFx0Y29sb3I6IFswLCAwLCAwLCAxXSxcblx0XHRcdGRlcHRoOiAxLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN0YXRlID0gbmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRkZXB0aDogd2ViZ2xQcmVzZXREZXB0aC5sZXNzLFxuXHRcdFx0Y3VsbDogd2ViZ2xQcmVzZXRDdWxsLm9mZixcblx0XHR9KTtcblx0XHRjb25zdCB3aXJlZnJhbWUgPSBuZXcgUGFpbnRlcldpcmVmcmFtZShjb250ZXh0KTtcblx0XHR0aGlzLndpcmVmcmFtZVBhaW50ZXIgPSB3aXJlZnJhbWU7XG5cdFx0Y29uc3QgbWlkUG9pbnRzID0gbmV3IFBhaW50ZXJNaWRQb2ludHMoY29udGV4dCk7XG5cdFx0dGhpcy5taWRQb2ludHNQYWludGVyID0gbWlkUG9pbnRzO1xuXHRcdGNvbnN0IGNvcm5lcnMgPSBuZXcgUGFpbnRlckNvcm5lcnMoY29udGV4dCk7XG5cdFx0dGhpcy5jb3JuZXJzUGFpbnRlciA9IGNvcm5lcnM7XG5cdFx0Y29uc3QgdHJpYW5nbGVzID0gbmV3IFBhaW50ZXJUcmlhbmdsZXMoY29udGV4dCk7XG5cdFx0dGhpcy50cmlhbmdsZXNQYWludGVyID0gdHJpYW5nbGVzO1xuXHRcdHN0YXRlLmFkZChcblx0XHRcdC8vIG5ldyBUZ2RQYWludGVyQXhlcyhjb250ZXh0LCB7IHNjYWxlOiAyIH0pLFxuXHRcdFx0bmV3IFBhaW50ZXJDdWJlKGNvbnRleHQpLFxuXHRcdFx0d2lyZWZyYW1lLFxuXHRcdFx0bmV3IFRnZFBhaW50ZXJTdGF0ZShjb250ZXh0LCB7XG5cdFx0XHRcdGJsZW5kOiB3ZWJnbFByZXNldEJsZW5kLnByZW11bHRpcGxpZWRBbHBoYSxcblx0XHRcdFx0Y2hpbGRyZW46IFttaWRQb2ludHMsIGNvcm5lcnMsIHRyaWFuZ2xlc10sXG5cdFx0XHR9KSxcblx0XHQpO1xuXHRcdGNvbnRleHQuYWRkKGNsZWFyLCBzdGF0ZSk7XG5cdFx0Y29udGV4dC5wYWludCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZXJlIGFyZSAyNTYgY2FzZXMsIHJhbmdpbmcgZnJvbSAwIHRvIDI1NS5cblx0ICovXG5cdHNldCBjYXNlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcblx0XHRjb25zdCB7IGNvcm5lcnNQYWludGVyOiBjb3JuZXJzLCBtaWRQb2ludHNQYWludGVyOiBtaWRQb2ludHMgfSA9IHRoaXM7XG5cdFx0aWYgKGNvcm5lcnMpIGNvcm5lcnMuY2FzZU51bWJlciA9IHZhbHVlO1xuXHRcdGlmIChtaWRQb2ludHMpIG1pZFBvaW50cy5jYXNlTnVtYmVyID0gdmFsdWU7XG5cdH1cblx0Z2V0IGNhc2VOdW1iZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29ybmVyc1BhaW50ZXI/LmNhc2VOdW1iZXIgPz8gMDtcblx0fVxuXG5cdHNldCB0cmlhbmdsZXModmFsdWU6IHN0cmluZykge1xuXHRcdGNvbnN0IHsgdHJpYW5nbGVzUGFpbnRlciwgd2lyZWZyYW1lUGFpbnRlciB9ID0gdGhpcztcblx0XHRpZiAodHJpYW5nbGVzUGFpbnRlcikgdHJpYW5nbGVzUGFpbnRlci50cmlhbmdsZXMgPSB2YWx1ZTtcblx0XHRpZiAod2lyZWZyYW1lUGFpbnRlcikgd2lyZWZyYW1lUGFpbnRlci50cmlhbmdsZXMgPSB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVm9sdW1lVG9NZXNoTWFuYWdlcigpOiBWb2x1bWVUb01lc2hNYW5hZ2VyIHtcblx0Y29uc3QgcmVmID0gUmVhY3QudXNlUmVmPFZvbHVtZVRvTWVzaE1hbmFnZXIgfCBudWxsPihudWxsKTtcblx0aWYgKCFyZWYuY3VycmVudCkgcmVmLmN1cnJlbnQgPSBuZXcgVm9sdW1lVG9NZXNoTWFuYWdlcigpO1xuXHRyZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXIsXG5cdFRnZFByb2dyYW0sXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHRUZ2RTaGFkZXJWZXJ0ZXgsXG5cdFRnZFRleHR1cmUyRCxcblx0VGdkVmVydGV4QXJyYXksXG5cdHRnZENhbnZhc0NyZWF0ZVdpdGhDb250ZXh0MkQsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IHsgY2FzZU51bWJlclRvQ29sb3JzLCBjdWJlRWRnZXMsIGN1YmVNaWRQb2ludHMgfSBmcm9tIFwiLi9nZW9tZXRyeVwiO1xuXG5leHBvcnQgY2xhc3MgUGFpbnRlck1pZFBvaW50cyBleHRlbmRzIFRnZFBhaW50ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IHRleHR1cmU6IFRnZFRleHR1cmUyRDtcblx0cHJpdmF0ZSByZWFkb25seSBkYXRhc2V0OiBUZ2REYXRhc2V0O1xuXHRwcml2YXRlIHJlYWRvbmx5IHByb2dyYW06IFRnZFByb2dyYW07XG5cdHByaXZhdGUgcmVhZG9ubHkgdmFvOiBUZ2RWZXJ0ZXhBcnJheTtcblx0cHJpdmF0ZSBfY2FzZU51bWJlciA9IDA7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKTtcblx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcblx0XHR0aGlzLnZhbyA9IG5ldyBUZ2RWZXJ0ZXhBcnJheShjb250ZXh0LmdsLCB0aGlzLnByb2dyYW0sIFt0aGlzLmRhdGFzZXRdKTtcblx0XHR0aGlzLnRleHR1cmUgPSB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcblx0fVxuXG5cdGdldCBjYXNlTnVtYmVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9jYXNlTnVtYmVyO1xuXHR9XG5cdHNldCBjYXNlTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcblx0XHRpZiAodmFsdWUgPT09IHRoaXMuX2Nhc2VOdW1iZXIpIHJldHVybjtcblxuXHRcdHRoaXMuX2Nhc2VOdW1iZXIgPSB2YWx1ZTtcblx0XHRjb25zdCBjb3JuZXJzID0gY2FzZU51bWJlclRvQ29sb3JzKHZhbHVlKTtcblx0XHRjb25zdCB2aXNpYmxlczogbnVtYmVyW10gPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcblx0XHRcdGNvbnN0IGEgPSBjb3JuZXJzW2N1YmVFZGdlc1tpICogMl1dO1xuXHRcdFx0Y29uc3QgYiA9IGNvcm5lcnNbY3ViZUVkZ2VzW2kgKiAyICsgMV1dO1xuXHRcdFx0dmlzaWJsZXMucHVzaChhID09PSBiID8gMCA6IDEpO1xuXHRcdH1cblx0XHR0aGlzLmRhdGFzZXQuc2V0KFwiYXR0VmlzaWJsZVwiLCBuZXcgRmxvYXQzMkFycmF5KHZpc2libGVzKSk7XG5cdFx0dGhpcy52YW8udXBkYXRlRGF0YXNldCh0aGlzLmRhdGFzZXQpO1xuXHRcdHRoaXMuY29udGV4dC5wYWludCgpO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMudGV4dHVyZS5kZWxldGUoKTtcblx0XHR0aGlzLnByb2dyYW0uZGVsZXRlKCk7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCgpOiB2b2lkIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgdGV4dHVyZSB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdFx0cHJvZ3JhbS51c2UoKTtcblx0XHR0ZXh0dXJlLmFjdGl2YXRlKDAsIHByb2dyYW0sIFwidW5pVGV4dHVyZVwiKTtcblx0XHRwcm9ncmFtLnVuaWZvcm0xZihcInVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVsc1wiLCBjb250ZXh0LmhlaWdodCAqIDAuNSk7XG5cdFx0cHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pTW9kZWxWaWV3TWF0cml4XCIsIGNhbWVyYS5tYXRyaXhNb2RlbFZpZXcpO1xuXHRcdHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaVByb2plY3Rpb25NYXRyaXhcIiwgY2FtZXJhLm1hdHJpeFByb2plY3Rpb24pO1xuXHRcdHZhby5iaW5kKCk7XG5cdFx0Z2wuZHJhd0FycmF5cyhnbC5QT0lOVFMsIDAsIDEyKTtcblx0XHR2YW8udW5iaW5kKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG5cdFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRcdGF0dFBvaW50OiBcInZlYzNcIixcblx0XHRcdGF0dFZpc2libGU6IFwiZmxvYXRcIixcblx0XHR9KTtcblx0XHRkYXRhc2V0LnNldChcImF0dFBvaW50XCIsIGN1YmVNaWRQb2ludHMpO1xuXHRcdHJldHVybiBkYXRhc2V0O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVQcm9ncmFtKCk6IFRnZFByb2dyYW0ge1xuXHRcdGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG5cdFx0XHRcdHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuXHRcdFx0XHR1bmlIYWxmU2NyZWVuSGVpZ2h0SW5QaXhlbHM6IFwiZmxvYXRcIixcblx0XHRcdH0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGF0dFBvaW50OiBcInZlYzRcIixcblx0XHRcdFx0YXR0VmlzaWJsZTogXCJmbG9hdFwiLFxuXHRcdFx0fSxcblx0XHRcdHZhcnlpbmc6IHsgdmFyVTogXCJmbG9hdFwiIH0sXG5cdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcInZhclUgPSBmbG9hdChnbF9WZXJ0ZXhJRCkgLyAxMi4wO1wiLFxuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIHVuaU1vZGVsVmlld01hdHJpeCAqIGF0dFBvaW50O1wiLFxuXHRcdFx0XHRcImdsX1BvaW50U2l6ZSA9IDAuMiAqIHVuaUhhbGZTY3JlZW5IZWlnaHRJblBpeGVscyAvIGdsX1Bvc2l0aW9uLnc7XCIsXG5cdFx0XHRcdFwiZ2xfUG9pbnRTaXplICo9IGF0dFZpc2libGU7XCIsXG5cdFx0XHRdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuXHRcdFx0fSxcblx0XHRcdHZhcnlpbmc6IHsgdmFyVTogXCJmbG9hdFwiIH0sXG5cdFx0XHRvdXRwdXRzOiB7IEZyYWdDb2xvcjogXCJ2ZWM0XCIgfSxcblx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFwidmVjMiB1diA9IHZlYzIodmFyVSwgMC4wKSArIGdsX1BvaW50Q29vcmQueHkgKiB2ZWMyKDEuMCAvIDEyLjAsIDEuMCk7XCIsXG5cdFx0XHRcdFwiRnJhZ0NvbG9yID0gdGV4dHVyZSh1bmlUZXh0dXJlLCB1dik7XCIsXG5cdFx0XHRcdFwiaWYgKEZyYWdDb2xvci5hIDwgLjEpIGRpc2NhcmQ7XCIsXG5cdFx0XHRdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgcHJvZ3JhbSA9IG5ldyBUZ2RQcm9ncmFtKHRoaXMuY29udGV4dC5nbCwgeyB2ZXJ0LCBmcmFnIH0pO1xuXHRcdHJldHVybiBwcm9ncmFtO1xuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpOiBUZ2RUZXh0dXJlMkQge1xuXHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGdkVGV4dHVyZTJEKHRoaXMuY29udGV4dCk7XG5cdFx0dGV4dHVyZS5zZXRQYXJhbXMoe1xuXHRcdFx0bWFnRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdFx0bWluRmlsdGVyOiBcIkxJTkVBUlwiLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGxldHRlcnMgPSBcIkFCQ0RFRkdISUpLTFwiO1xuXHRcdGNvbnN0IGNvdW50ID0gbGV0dGVycy5sZW5ndGg7XG5cdFx0Y29uc3Qgc2l6ZSA9IDY0O1xuXHRcdGNvbnN0IHdpZHRoID0gc2l6ZSAqIGNvdW50O1xuXHRcdGNvbnN0IGhlaWdodCA9IHNpemU7XG5cdFx0Y29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCh3aWR0aCwgaGVpZ2h0KTtcblx0XHRjdHguZm9udCA9IGBib2xkICR7c2l6ZX1weCBzYW5zLXNlcmlmYDtcblx0XHRjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblx0XHRjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjMGYwXCI7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG5cdFx0XHRjb25zdCBsZXR0ZXIgPSBsZXR0ZXJzLmNoYXJBdChpKTtcblx0XHRcdGNvbnN0IHggPSAoaSArIDAuNSkgLyBjb3VudDtcblx0XHRcdGNvbnN0IHkgPSAwLjU7XG5cdFx0XHRjdHguZmlsbFRleHQobGV0dGVyLCB4ICogd2lkdGgsIHkgKiBoZWlnaHQpO1xuXHRcdH1cblx0XHR0ZXh0dXJlLmxvYWRCaXRtYXAoY2FudmFzKTtcblx0XHRyZXR1cm4gdGV4dHVyZTtcblx0fVxufVxuIiwiaW1wb3J0IHtcblx0dHlwZSBUZ2RDb250ZXh0LFxuXHRUZ2REYXRhc2V0LFxuXHRUZ2RQYWludGVyLFxuXHRUZ2RQcm9ncmFtLFxuXHRUZ2RTaGFkZXJGcmFnbWVudCxcblx0VGdkU2hhZGVyVmVydGV4LFxuXHRUZ2RWZXJ0ZXhBcnJheSxcbn0gZnJvbSBcIkB0b2xva29iYW4vdGdkXCI7XG5pbXBvcnQgeyBjdWJlRWRnZXMsIGN1YmVWZXJ0aWNlcyB9IGZyb20gXCIuL2dlb21ldHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyQ3ViZSBleHRlbmRzIFRnZFBhaW50ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbTtcblx0cHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kYXRhc2V0ID0gdGhpcy5jcmVhdGVEYXRhc2V0KCk7XG5cdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG5cdFx0Ly8gcHJldHRpZXItaWdub3JlXG5cdFx0Y29uc3QgZWxlbWVudHMgPSBjdWJlRWRnZXM7XG5cdFx0dGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoXG5cdFx0XHRjb250ZXh0LmdsLFxuXHRcdFx0dGhpcy5wcm9ncmFtLFxuXHRcdFx0W3RoaXMuZGF0YXNldF0sXG5cdFx0XHRlbGVtZW50cyxcblx0XHQpO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMucHJvZ3JhbS5kZWxldGUoKTtcblx0XHR0aGlzLnZhby5kZWxldGUoKTtcblx0fVxuXG5cdHBhaW50KCk6IHZvaWQge1xuXHRcdGNvbnN0IHsgY29udGV4dCwgcHJvZ3JhbSwgdmFvIH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgZ2wsIGNhbWVyYSB9ID0gY29udGV4dDtcblx0XHRwcm9ncmFtLnVzZSgpO1xuXHRcdHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBjYW1lcmEubWF0cml4TW9kZWxWaWV3KTtcblx0XHRwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKTtcblx0XHR2YW8uYmluZCgpO1xuXHRcdGdsLmRyYXdFbGVtZW50cyhnbC5MSU5FUywgMjQsIGdsLlVOU0lHTkVEX0JZVEUsIDApO1xuXHRcdHZhby51bmJpbmQoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRGF0YXNldCgpIHtcblx0XHRjb25zdCBkYXRhc2V0ID0gbmV3IFRnZERhdGFzZXQoe1xuXHRcdFx0YXR0UG9pbnQ6IFwidmVjM1wiLFxuXHRcdH0pO1xuXHRcdGRhdGFzZXQuc2V0KFwiYXR0UG9pbnRcIiwgY3ViZVZlcnRpY2VzKTtcblx0XHRyZXR1cm4gZGF0YXNldDtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUHJvZ3JhbSgpOiBUZ2RQcm9ncmFtIHtcblx0XHRjb25zdCB2ZXJ0ID0gbmV3IFRnZFNoYWRlclZlcnRleCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuXHRcdFx0XHR1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcblx0XHRcdH0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGF0dFBvaW50OiBcInZlYzRcIixcblx0XHRcdH0sXG5cdFx0XHR2YXJ5aW5nOiB7XG5cdFx0XHRcdHZhckNvbG9yOiBcInZlYzNcIixcblx0XHRcdH0sXG5cdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcInZhckNvbG9yID0gYWJzKGF0dFBvaW50Lnh5eik7XCIsXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCIsXG5cdFx0XHRdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuXHRcdFx0fSxcblx0XHRcdHZhcnlpbmc6IHtcblx0XHRcdFx0dmFyQ29sb3I6IFwidmVjM1wiLFxuXHRcdFx0fSxcblx0XHRcdG91dHB1dHM6IHsgRnJhZ0NvbG9yOiBcInZlYzRcIiB9LFxuXHRcdFx0bWFpbkNvZGU6IFtcIkZyYWdDb2xvciA9IHZlYzQodmFyQ29sb3IsIDEuMCk7XCJdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgcHJvZ3JhbSA9IG5ldyBUZ2RQcm9ncmFtKHRoaXMuY29udGV4dC5nbCwgeyB2ZXJ0LCBmcmFnIH0pO1xuXHRcdHJldHVybiBwcm9ncmFtO1xuXHR9XG59XG4iLCJpbXBvcnQge1xuXHR0eXBlIFRnZENvbnRleHQsXG5cdFRnZERhdGFzZXQsXG5cdFRnZFBhaW50ZXIsXG5cdFRnZFByb2dyYW0sXG5cdFRnZFNoYWRlckZyYWdtZW50LFxuXHRUZ2RTaGFkZXJWZXJ0ZXgsXG5cdFRnZFZlcnRleEFycmF5LFxufSBmcm9tIFwiQHRvbG9rb2Jhbi90Z2RcIjtcbmltcG9ydCB7IGN1YmVNaWRQb2ludHMsIHRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMgfSBmcm9tIFwiLi9nZW9tZXRyeVwiO1xuXG5leHBvcnQgY2xhc3MgUGFpbnRlclRyaWFuZ2xlcyBleHRlbmRzIFRnZFBhaW50ZXIge1xuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFzZXQ6IFRnZERhdGFzZXQ7XG5cdHByaXZhdGUgcmVhZG9ubHkgcHJvZ3JhbTogVGdkUHJvZ3JhbTtcblx0cHJpdmF0ZSByZWFkb25seSB2YW86IFRnZFZlcnRleEFycmF5O1xuXHRwcml2YXRlIGVsZW1lbnRzQ291bnQgPSAwO1xuXHRwcml2YXRlIF90cmlhbmdsZXMgPSBcIlwiO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogVGdkQ29udGV4dCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5kYXRhc2V0ID0gdGhpcy5jcmVhdGVEYXRhc2V0KCk7XG5cdFx0dGhpcy5wcm9ncmFtID0gdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSBuZXcgVWludDhBcnJheSgpO1xuXHRcdHRoaXMudmFvID0gbmV3IFRnZFZlcnRleEFycmF5KFxuXHRcdFx0Y29udGV4dC5nbCxcblx0XHRcdHRoaXMucHJvZ3JhbSxcblx0XHRcdFt0aGlzLmRhdGFzZXRdLFxuXHRcdFx0ZWxlbWVudHMsXG5cdFx0KTtcblx0fVxuXG5cdHNldCB0cmlhbmdsZXModmFsdWU6IHN0cmluZykge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyh2YWx1ZSk7XG5cdFx0dGhpcy52YW8udXBkYXRlRWxlbWVudHMoZWxlbWVudHMpO1xuXHRcdHRoaXMuZWxlbWVudHNDb3VudCA9IGVsZW1lbnRzLmxlbmd0aDtcblx0XHR0aGlzLmNvbnRleHQucGFpbnQoKTtcblx0fVxuXG5cdGRlbGV0ZSgpOiB2b2lkIHtcblx0XHR0aGlzLnByb2dyYW0uZGVsZXRlKCk7XG5cdFx0dGhpcy52YW8uZGVsZXRlKCk7XG5cdH1cblxuXHRwYWludCgpOiB2b2lkIHtcblx0XHRjb25zdCB7IGNvbnRleHQsIHByb2dyYW0sIHZhbywgZWxlbWVudHNDb3VudCB9ID0gdGhpcztcblx0XHRjb25zdCB7IGdsLCBjYW1lcmEgfSA9IGNvbnRleHQ7XG5cdFx0cHJvZ3JhbS51c2UoKTtcblx0XHRwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlNb2RlbFZpZXdNYXRyaXhcIiwgY2FtZXJhLm1hdHJpeE1vZGVsVmlldyk7XG5cdFx0cHJvZ3JhbS51bmlmb3JtTWF0cml4NGZ2KFwidW5pUHJvamVjdGlvbk1hdHJpeFwiLCBjYW1lcmEubWF0cml4UHJvamVjdGlvbik7XG5cdFx0dmFvLmJpbmQoKTtcblx0XHRnbC5kcmF3RWxlbWVudHMoZ2wuVFJJQU5HTEVTLCBlbGVtZW50c0NvdW50LCBnbC5VTlNJR05FRF9CWVRFLCAwKTtcblx0XHR2YW8udW5iaW5kKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZURhdGFzZXQoKSB7XG5cdFx0Y29uc3QgZGF0YXNldCA9IG5ldyBUZ2REYXRhc2V0KHtcblx0XHRcdGF0dFBvaW50OiBcInZlYzNcIixcblx0XHR9KTtcblx0XHRkYXRhc2V0LnNldChcImF0dFBvaW50XCIsIGN1YmVNaWRQb2ludHMpO1xuXHRcdHJldHVybiBkYXRhc2V0O1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVQcm9ncmFtKCk6IFRnZFByb2dyYW0ge1xuXHRcdGNvbnN0IHZlcnQgPSBuZXcgVGdkU2hhZGVyVmVydGV4KHtcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVuaU1vZGVsVmlld01hdHJpeDogXCJtYXQ0XCIsXG5cdFx0XHRcdHVuaVByb2plY3Rpb25NYXRyaXg6IFwibWF0NFwiLFxuXHRcdFx0XHR1bmlMaWdodDogXCJmbG9hdFwiLFxuXHRcdFx0fSxcblx0XHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdFx0YXR0UG9pbnQ6IFwidmVjNFwiLFxuXHRcdFx0fSxcblx0XHRcdG1haW5Db2RlOiBbXG5cdFx0XHRcdFwiZ2xfUG9zaXRpb24gPSB1bmlQcm9qZWN0aW9uTWF0cml4ICogdW5pTW9kZWxWaWV3TWF0cml4ICogYXR0UG9pbnQ7XCIsXG5cdFx0XHRdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuXHRcdFx0fSxcblx0XHRcdG91dHB1dHM6IHsgRnJhZ0NvbG9yOiBcInZlYzRcIiB9LFxuXHRcdFx0bWFpbkNvZGU6IFtcblx0XHRcdFx0XCJmbG9hdCBhID0gMS4wO1wiLFxuXHRcdFx0XHRcIkZyYWdDb2xvciA9IHZlYzQoXCIsXG5cdFx0XHRcdFwiICAuOCAqIChnbF9Gcm9udEZhY2luZyA/IHZlYzMoMCwgLjUsIDEpIDogdmVjMygxLCAwLCAwKSksXCIsXG5cdFx0XHRcdFwiICBhXCIsXG5cdFx0XHRcdFwiKTtcIixcblx0XHRcdF0sXG5cdFx0fSkuY29kZTtcblx0XHRjb25zdCBwcm9ncmFtID0gbmV3IFRnZFByb2dyYW0odGhpcy5jb250ZXh0LmdsLCB7IHZlcnQsIGZyYWcgfSk7XG5cdFx0cmV0dXJuIHByb2dyYW07XG5cdH1cbn1cbiIsImltcG9ydCB7XG5cdHR5cGUgVGdkQ29udGV4dCxcblx0VGdkRGF0YXNldCxcblx0VGdkUGFpbnRlcixcblx0VGdkUHJvZ3JhbSxcblx0VGdkU2hhZGVyRnJhZ21lbnQsXG5cdFRnZFNoYWRlclZlcnRleCxcblx0VGdkVmVydGV4QXJyYXksXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuaW1wb3J0IHsgY3ViZU1pZFBvaW50cywgdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyB9IGZyb20gXCIuL2dlb21ldHJ5XCI7XG5cbmV4cG9ydCBjbGFzcyBQYWludGVyV2lyZWZyYW1lIGV4dGVuZHMgVGdkUGFpbnRlciB7XG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YXNldDogVGdkRGF0YXNldDtcblx0cHJpdmF0ZSByZWFkb25seSBwcm9ncmFtOiBUZ2RQcm9ncmFtO1xuXHRwcml2YXRlIHJlYWRvbmx5IHZhbzogVGdkVmVydGV4QXJyYXk7XG5cdHByaXZhdGUgZWxlbWVudHNDb3VudCA9IDA7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBUZ2RDb250ZXh0KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmRhdGFzZXQgPSB0aGlzLmNyZWF0ZURhdGFzZXQoKTtcblx0XHR0aGlzLnByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcblx0XHRjb25zdCBlbGVtZW50cyA9IG5ldyBVaW50OEFycmF5KCk7XG5cdFx0dGhpcy52YW8gPSBuZXcgVGdkVmVydGV4QXJyYXkoXG5cdFx0XHRjb250ZXh0LmdsLFxuXHRcdFx0dGhpcy5wcm9ncmFtLFxuXHRcdFx0W3RoaXMuZGF0YXNldF0sXG5cdFx0XHRlbGVtZW50cyxcblx0XHQpO1xuXHR9XG5cblx0c2V0IHRyaWFuZ2xlcyh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0cmlhbmdsZXNTdHJpbmdUb0VsZW1lbnRzKHZhbHVlKTtcblx0XHRjb25zdCB3aXJlZnJhbWU6IG51bWJlcltdID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0Y29uc3QgYSA9IGVsZW1lbnRzW2ldO1xuXHRcdFx0Y29uc3QgYiA9IGVsZW1lbnRzW2kgKyAxXTtcblx0XHRcdGNvbnN0IGMgPSBlbGVtZW50c1tpICsgMl07XG5cdFx0XHR3aXJlZnJhbWUucHVzaChhLCBiLCBjLCBhKTtcblx0XHR9XG5cdFx0dGhpcy52YW8udXBkYXRlRWxlbWVudHMod2lyZWZyYW1lKTtcblx0XHR0aGlzLmVsZW1lbnRzQ291bnQgPSB3aXJlZnJhbWUubGVuZ3RoO1xuXHRcdHRoaXMuY29udGV4dC5wYWludCgpO1xuXHR9XG5cblx0ZGVsZXRlKCk6IHZvaWQge1xuXHRcdHRoaXMucHJvZ3JhbS5kZWxldGUoKTtcblx0XHR0aGlzLnZhby5kZWxldGUoKTtcblx0fVxuXG5cdHBhaW50KCk6IHZvaWQge1xuXHRcdGNvbnN0IHsgY29udGV4dCwgcHJvZ3JhbSwgdmFvLCBlbGVtZW50c0NvdW50IH0gPSB0aGlzO1xuXHRcdGNvbnN0IHsgZ2wsIGNhbWVyYSB9ID0gY29udGV4dDtcblx0XHRwcm9ncmFtLnVzZSgpO1xuXHRcdHByb2dyYW0udW5pZm9ybU1hdHJpeDRmdihcInVuaU1vZGVsVmlld01hdHJpeFwiLCBjYW1lcmEubWF0cml4TW9kZWxWaWV3KTtcblx0XHRwcm9ncmFtLnVuaWZvcm1NYXRyaXg0ZnYoXCJ1bmlQcm9qZWN0aW9uTWF0cml4XCIsIGNhbWVyYS5tYXRyaXhQcm9qZWN0aW9uKTtcblx0XHR2YW8uYmluZCgpO1xuXHRcdGdsLmRyYXdFbGVtZW50cyhnbC5MSU5FUywgZWxlbWVudHNDb3VudCwgZ2wuVU5TSUdORURfQllURSwgMCk7XG5cdFx0dmFvLnVuYmluZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVEYXRhc2V0KCkge1xuXHRcdGNvbnN0IGRhdGFzZXQgPSBuZXcgVGdkRGF0YXNldCh7XG5cdFx0XHRhdHRQb2ludDogXCJ2ZWMzXCIsXG5cdFx0fSk7XG5cdFx0ZGF0YXNldC5zZXQoXCJhdHRQb2ludFwiLCBjdWJlTWlkUG9pbnRzKTtcblx0XHRyZXR1cm4gZGF0YXNldDtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUHJvZ3JhbSgpOiBUZ2RQcm9ncmFtIHtcblx0XHRjb25zdCB2ZXJ0ID0gbmV3IFRnZFNoYWRlclZlcnRleCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlNb2RlbFZpZXdNYXRyaXg6IFwibWF0NFwiLFxuXHRcdFx0XHR1bmlQcm9qZWN0aW9uTWF0cml4OiBcIm1hdDRcIixcblx0XHRcdFx0dW5pTGlnaHQ6IFwiZmxvYXRcIixcblx0XHRcdH0sXG5cdFx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRcdGF0dFBvaW50OiBcInZlYzRcIixcblx0XHRcdH0sXG5cdFx0XHRtYWluQ29kZTogW1xuXHRcdFx0XHRcImdsX1Bvc2l0aW9uID0gdW5pUHJvamVjdGlvbk1hdHJpeCAqIFwiLFxuXHRcdFx0XHRcIiAgKHVuaU1vZGVsVmlld01hdHJpeCAqIGF0dFBvaW50ICsgdmVjNCgwLCAwLCAwLjAyLCAwKSk7XCIsXG5cdFx0XHRdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgZnJhZyA9IG5ldyBUZ2RTaGFkZXJGcmFnbWVudCh7XG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1bmlUZXh0dXJlOiBcInNhbXBsZXIyRFwiLFxuXHRcdFx0fSxcblx0XHRcdG91dHB1dHM6IHsgRnJhZ0NvbG9yOiBcInZlYzRcIiB9LFxuXHRcdFx0bWFpbkNvZGU6IFtcIkZyYWdDb2xvciA9IHZlYzQoMCwwLDAsMSk7XCJdLFxuXHRcdH0pLmNvZGU7XG5cdFx0Y29uc3QgcHJvZ3JhbSA9IG5ldyBUZ2RQcm9ncmFtKHRoaXMuY29udGV4dC5nbCwgeyB2ZXJ0LCBmcmFnIH0pO1xuXHRcdHJldHVybiBwcm9ncmFtO1xuXHR9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQC9jb21wb25lbnRzL2RlbW8vVGdkXCI7XG5pbXBvcnQge1xuXHRJY29uQXJyb3dMZWZ0LFxuXHRJY29uQXJyb3dSaWdodCxcblx0SWNvblJlc2V0LFxuXHR1c2VMb2NhbFN0b3JhZ2VTdGF0ZSxcblx0Vmlld0J1dHRvbixcblx0Vmlld0Zsb2F0aW5nQnV0dG9uLFxuXHRWaWV3SW5wdXRUZXh0LFxuXHRWaWV3UGFuZWwsXG5cdFZpZXdTbGlkZXIsXG59IGZyb20gXCJAdG9sb2tvYmFuL3VpXCI7XG5pbXBvcnQge1xuXHR0Z2RDYWxjQ2xhbXAsXG5cdHRnZERhdGFNYXJjaGluZ0N1YmVzQ29uZmlndXJhdGlvbnMsXG59IGZyb20gXCJAdG9sb2tvYmFuL3RnZFwiO1xuXG5pbXBvcnQgeyB1c2VWb2x1bWVUb01lc2hNYW5hZ2VyIH0gZnJvbSBcIi4vXy9tYW5hZ2VyXCI7XG5pbXBvcnQgeyBlbnN1cmVOdW1iZXIgfSBmcm9tIFwiQHRvbG9rb2Jhbi90eXBlLWd1YXJkc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdHJpYW5nbGVzU3RyaW5nVG9FbGVtZW50cyB9IGZyb20gXCIuL18vZ2VvbWV0cnlcIjtcbmltcG9ydCB7IENPTkZJR1VSQVRJT05TIH0gZnJvbSBcIi4vXy9jb25maWd1cmF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXHRjb25zdCBbY2FzZU51bWJlciwgc2V0Q2FzZU51bWJlcl0gPSB1c2VMb2NhbFN0b3JhZ2VTdGF0ZShcblx0XHQwLFxuXHRcdFwidm9sdW1lLXRvLW1lc2gvY2FzZU51bWJlclwiLFxuXHRcdCh2YWx1ZSkgPT4gdGdkQ2FsY0NsYW1wKE1hdGguZmxvb3IoZW5zdXJlTnVtYmVyKHZhbHVlLCAwKSksIDAsIDI1NSksXG5cdCk7XG5cdGNvbnN0IFt0cmlhbmdsZXMsIHNldFRyaWFuZ2xlc10gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblx0Y29uc3Qga2V5ID0gYHZvbHVtZS10by1tZXNoL3RyaWFuZ2xlcy8ke2Nhc2VOdW1iZXJ9YDtcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUcmlhbmdsZXMoXG5cdFx0XHRnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPz8gQ09ORklHVVJBVElPTlNbY2FzZU51bWJlcl0sXG5cdFx0KTtcblx0XHRtYW5hZ2VyLmNhc2VOdW1iZXIgPSBjYXNlTnVtYmVyO1xuXHR9LCBbY2FzZU51bWJlcl0pO1xuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGdsb2JhbFRoaXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB0cmlhbmdsZXMudHJpbSgpLnRvVXBwZXJDYXNlKCkpO1xuXHRcdG1hbmFnZXIudHJpYW5nbGVzID0gdHJpYW5nbGVzO1xuXHR9LCBbdHJpYW5nbGVzXSk7XG5cdGNvbnN0IGhhbmRsZUxlZnQgPSAoKSA9PiB7XG5cdFx0c2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDI1NSkgJiAweGZmKTtcblx0fTtcblx0Y29uc3QgaGFuZGxlUmlnaHQgPSAoKSA9PiB7XG5cdFx0c2V0Q2FzZU51bWJlcigoY2FzZU51bWJlciArIDEpICYgMHhmZik7XG5cdH07XG5cdGNvbnN0IG1hbmFnZXIgPSB1c2VWb2x1bWVUb01lc2hNYW5hZ2VyKCk7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5NYXJjaGluZyBjdWJlczwvaDE+XG5cdFx0XHQ8cD5cblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01hcmNoaW5nX2N1YmVzXCI+XG5cdFx0XHRcdFx0TWFyY2hpbmcgY3ViZXNcblx0XHRcdFx0PC9hPntcIiBcIn1cblx0XHRcdFx0aXMgYSB0ZWNobmlxdWUgdG8gZ2VuZXJhdGUgbWVzaGVzIGZyb20gYSB2b2x1bWUuXG5cdFx0XHRcdDxiciAvPkEgdm9sdW1lIGlzIGEgZnVuY3Rpb24gdGhhdCB0ZWxscyB5b3UsIGZvciBlYWNoIHBvaW50IGluIGEgYm94LCBpdFxuXHRcdFx0XHR5b3UgYXJlIGluc2lkZSBvciBvdXRzaWRlIGFuIG9iamVjdC5cblx0XHRcdDwvcD5cblx0XHRcdDxwPlxuXHRcdFx0XHRBIHZveGVsIGlzIGEgdW5pdCBjdWJlLiBFYWNoIGNvcm5lciBvZiBhIHZveGVsIGlzIGVpdGhlciBpbnNpZGUgdGhlXG5cdFx0XHRcdHZvbHVtZSAoPGI+cmVkPC9iPikgb3Igb3V0c2lkZSAoPGI+Ymx1ZTwvYj4pLiBXaXRoIHRyaWFuZ2xlcywgdG91Y2hpbmdcblx0XHRcdFx0dGhlIGVkZ2VzIG9mIHRoZSB2b3hlbCwgd2UgbmVlZCB0byBzZXBhcmF0ZSB0aGUgc3BhY2UgYmV0d2VlbiByZWQgYW5kXG5cdFx0XHRcdGJsdWUgY29ybmVycy5cblx0XHRcdDwvcD5cblx0XHRcdDxwPkEgdm94ZWwgaGFzIDggY29ybmVycywgc28gd2UgaGF2ZSAyNTYgY29uZmlndXJhdGlvbnMuPC9wPlxuXHRcdFx0PFZpZXdcblx0XHRcdFx0b25SZWFkeT17KGNvbnRleHQpID0+IHtcblx0XHRcdFx0XHRtYW5hZ2VyLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxWaWV3U2xpZGVyXG5cdFx0XHRcdGNsYXNzTmFtZT17c3R5bGVzLmZsZXgxfVxuXHRcdFx0XHR3aWRlXG5cdFx0XHRcdHRleHQ9e2Ake2Nhc2VOdW1iZXJ9YH1cblx0XHRcdFx0dmFsdWU9e2Nhc2VOdW1iZXJ9XG5cdFx0XHRcdG9uQ2hhbmdlPXtzZXRDYXNlTnVtYmVyfVxuXHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdG1heD17MjU1fVxuXHRcdFx0XHRzdGVwPXsxfVxuXHRcdFx0PjwvVmlld1NsaWRlcj5cblx0XHRcdDxiciAvPlxuXHRcdFx0PFZpZXdQYW5lbFxuXHRcdFx0XHRkaXNwbGF5PVwiZmxleFwiXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG5cdFx0XHRcdGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8Vmlld1BhbmVsIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGZ1bGx3aWR0aCBnYXA9XCJNXCI+XG5cdFx0XHRcdFx0PFZpZXdJbnB1dFRleHRcblx0XHRcdFx0XHRcdGxhYmVsPVwiVHJpYW5nbGVzIChmcm9tIG1pZCBwb2ludHMgQUJDREVGR0hJSktMKVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17dHJpYW5nbGVzfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3NldFRyaWFuZ2xlc31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxWaWV3RmxvYXRpbmdCdXR0b24gaWNvbj17SWNvbkFycm93TGVmdH0gb25DbGljaz17aGFuZGxlTGVmdH0gLz5cblx0XHRcdFx0XHQ8Vmlld0Zsb2F0aW5nQnV0dG9uIGljb249e0ljb25BcnJvd1JpZ2h0fSBvbkNsaWNrPXtoYW5kbGVSaWdodH0gLz5cblx0XHRcdFx0PC9WaWV3UGFuZWw+XG5cdFx0XHRcdDxWaWV3QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSBpY29uPXtJY29uUmVzZXR9PlxuXHRcdFx0XHRcdFJlc2V0XG5cdFx0XHRcdDwvVmlld0J1dHRvbj5cblx0XHRcdDwvVmlld1BhbmVsPlxuXHRcdFx0PGJyIC8+XG5cdFx0XHQ8YnIgLz5cblx0XHRcdDxkZXRhaWxzPlxuXHRcdFx0XHQ8c3VtbWFyeT5MaXN0IG9mIHRyaWFuZ2xlcyBwZXIgY29uZmlndXJhdGlvbjwvc3VtbWFyeT5cblx0XHRcdFx0PHByZT57Z2V0VHJpYW5nbGVzKCl9PC9wcmU+XG5cdFx0XHQ8L2RldGFpbHM+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0KCkge1xuXHRjb25zdCBjb25maWd1cmF0aW9ucyA9IHRnZERhdGFNYXJjaGluZ0N1YmVzQ29uZmlndXJhdGlvbnMoKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWd1cmF0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3VyYXRpb25zW2ldO1xuXHRcdGNvbnN0IGNvZGUgPSBjb25maWcubWFwKChpKSA9PiBcIkFCQ0RFRkdISUpLTFwiLmNoYXJBdChpKSkuam9pbihcIlwiKTtcblx0XHRnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB2b2x1bWUtdG8tbWVzaC90cmlhbmdsZXMvJHtpfWAsIGNvZGUpO1xuXHR9XG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBnZXRUcmlhbmdsZXMoKSB7XG5cdGNvbnN0IGxpbmVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdFx0Y29uc3QgdGV4dCA9XG5cdFx0XHRnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGB2b2x1bWUtdG8tbWVzaC90cmlhbmdsZXMvJHtpfWApID8/IFwiP1wiO1xuXHRcdGlmICh0ZXh0ID09PSBcIj9cIikgbGluZXMucHVzaChcIlsgLyogTi9BIC8qIF0sXCIpO1xuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc3QgZWxlbWVudHMgPSB0cmlhbmdsZXNTdHJpbmdUb0VsZW1lbnRzKHRleHQpO1xuXHRcdFx0bGluZXMucHVzaChgJHtKU09OLnN0cmluZ2lmeShlbGVtZW50cyl9LGApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcbn1cbiJdLCJuYW1lcyI6WyJ0Z2REYXRhTWFyY2hpbmdDdWJlc0NvbmZpZ3VyYXRpb25zIiwiQ09ORklHVVJBVElPTlMiLCJhcnIiLCJpIiwiVGdkRGF0YXNldCIsIlRnZFBhaW50ZXIiLCJUZ2RQcm9ncmFtIiwiVGdkU2hhZGVyRnJhZ21lbnQiLCJUZ2RTaGFkZXJWZXJ0ZXgiLCJUZ2RUZXh0dXJlMkQiLCJUZ2RWZXJ0ZXhBcnJheSIsInRnZENhbnZhc0NyZWF0ZVBhbGV0dGUiLCJjYXNlTnVtYmVyVG9Db2xvcnMiLCJjdWJlVmVydGljZXMiLCJQYWludGVyQ29ybmVycyIsImNvbnRleHQiLCJ2YWx1ZSIsImNvbG9ycyIsIkZsb2F0MzJBcnJheSIsIl9kZWxldGUiLCJwYWludCIsIl90aGlzIiwicHJvZ3JhbSIsInZhbyIsInRleHR1cmUiLCJnbCIsImNhbWVyYSIsImNyZWF0ZURhdGFzZXQiLCJkYXRhc2V0IiwiY3JlYXRlUHJvZ3JhbSIsInZlcnQiLCJmcmFnIiwiY3JlYXRlVGV4dHVyZSIsImN1YmVFZGdlcyIsIlVpbnQ4QXJyYXkiLCJQIiwiTiIsIm1pZFBvaW50cyIsImEiLCJiIiwieCIsInkiLCJ6IiwiY3ViZU1pZFBvaW50cyIsInRyaWFuZ2xlc1N0cmluZ1RvRWxlbWVudHMiLCJlbGVtZW50cyIsIl9pdGVyYXRvckVycm9yIiwiQyIsIm1hc2siLCJUZ2RDYW1lcmFQZXJzcGVjdGl2ZSIsIlRnZENvbnRyb2xsZXJDYW1lcmFPcmJpdCIsIlRnZFBhaW50ZXJDbGVhciIsIlRnZFBhaW50ZXJTdGF0ZSIsInRnZENhbGNEZWdUb1JhZCIsIndlYmdsUHJlc2V0QmxlbmQiLCJ3ZWJnbFByZXNldEN1bGwiLCJ3ZWJnbFByZXNldERlcHRoIiwiUmVhY3QiLCJQYWludGVyTWlkUG9pbnRzIiwiUGFpbnRlckN1YmUiLCJQYWludGVyVHJpYW5nbGVzIiwiUGFpbnRlcldpcmVmcmFtZSIsIlZvbHVtZVRvTWVzaE1hbmFnZXIiLCJfaW5zdGFuY2VvZiIsImNsZWFyIiwic3RhdGUiLCJ3aXJlZnJhbWUiLCJjb3JuZXJzIiwidHJpYW5nbGVzIiwiX3RoaXNfY29ybmVyc1BhaW50ZXIiLCJ0cmlhbmdsZXNQYWludGVyIiwid2lyZWZyYW1lUGFpbnRlciIsInVzZVZvbHVtZVRvTWVzaE1hbmFnZXIiLCJyZWYiLCJ0Z2RDYW52YXNDcmVhdGVXaXRoQ29udGV4dDJEIiwidmlzaWJsZXMiLCJsZXR0ZXJzIiwiY291bnQiLCJzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJfdGdkQ2FudmFzQ3JlYXRlV2l0aENvbnRleHQyRCIsImN0eCIsImNhbnZhcyIsImxldHRlciIsImVsZW1lbnRzQ291bnQiLCJjIiwiVmlldyIsIkljb25BcnJvd0xlZnQiLCJJY29uQXJyb3dSaWdodCIsIkljb25SZXNldCIsInVzZUxvY2FsU3RvcmFnZVN0YXRlIiwiVmlld0J1dHRvbiIsIlZpZXdGbG9hdGluZ0J1dHRvbiIsIlZpZXdJbnB1dFRleHQiLCJWaWV3UGFuZWwiLCJWaWV3U2xpZGVyIiwidGdkQ2FsY0NsYW1wIiwiZW5zdXJlTnVtYmVyIiwic3R5bGVzIiwiUGFnZSIsIl91c2VMb2NhbFN0b3JhZ2VTdGF0ZSIsIk1hdGgiLCJjYXNlTnVtYmVyIiwic2V0Q2FzZU51bWJlciIsIl9SZWFjdF91c2VTdGF0ZSIsInNldFRyaWFuZ2xlcyIsImtleSIsIl9nbG9iYWxUaGlzX2xvY2FsU3RvcmFnZV9nZXRJdGVtIiwibWFuYWdlciIsImdsb2JhbFRoaXMiLCJoYW5kbGVMZWZ0IiwiaGFuZGxlUmlnaHQiLCJvblJlYWR5IiwiaGFuZGxlUmVzZXQiLCJnZXRUcmlhbmdsZXMiLCJjb25maWd1cmF0aW9ucyIsImNvbmZpZyIsImNvZGUiLCJsb2NhdGlvbiIsImxpbmVzIiwidGV4dCIsIkpTT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBLHNEQUFlLENBQUMsd0VBQXdFLEU7Ozs7Ozs7OztBQ0RwQjtBQUVwRTs7Q0FFQyxHQUNNLElBQU1DLGlCQUNaRCxzRUFBa0NBLEdBQUcsR0FBRyxDQUFDLFNBQUNFO1dBQ3pDQSxJQUFJLEdBQUcsQ0FBQyxTQUFDQztlQUFNLGVBQWUsTUFBTSxDQUFDQTtPQUFJLElBQUksQ0FBQztHQUM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VxQjtBQUNzQztBQUV2RCxJQUFNVywrQkFBTjs7Y0FBTUE7YUFBQUEsZUFPaUJDLE9BQW1CO2dDQVBwQ0Q7O2dCQVFYLGtCQVJXQSw2REFDWix3QkFBaUIsV0FBakIsU0FDQSx3QkFBaUIsV0FBakIsU0FDQSx3QkFBaUIsV0FBakIsU0FDQSx3QkFBaUIsT0FBakIsU0FDQSx3QkFBUSxlQUFSLGVBRTZCQyxVQUFBQSxlQUZyQixjQUFjLENBQUM7UUFJdEIsTUFBSyxPQUFPLEdBQUcsTUFBSyxhQUFhO1FBQ2pDLE1BQUssT0FBTyxHQUFHLE1BQUssYUFBYTtRQUNqQyxNQUFLLEdBQUcsR0FBRyxJQUFJTCw4Q0FBY0EsQ0FBQ0ssUUFBUSxFQUFFLEVBQUUsTUFBSyxPQUFPLEVBQUU7WUFBQyxNQUFLLE9BQU87U0FBQztRQUN0RSxNQUFLLE9BQU8sR0FBRyxNQUFLLGFBQWE7UUFDakMs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