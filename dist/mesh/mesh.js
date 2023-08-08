import { addVectors, crossProduct, normalize, subtractVectors, } from "../calc";
var TgdMesh = (function () {
    function TgdMesh(faces) {
        if (faces === void 0) { faces = []; }
        this.faces = faces;
        this.data = null;
    }
    TgdMesh.prototype.addFace = function () {
        var _a;
        var faces = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            faces[_i] = arguments[_i];
        }
        (_a = this.faces).push.apply(_a, faces);
        this.data = null;
    };
    Object.defineProperty(TgdMesh.prototype, "facesCount", {
        get: function () {
            return this.faces.length;
        },
        enumerable: false,
        configurable: true
    });
    TgdMesh.prototype.getData = function () {
        if (this.data) {
            var points = [];
            var normals = [];
            var uvs = [];
            var elements = [];
            var vertices = new Map();
            for (var _i = 0, _a = this.faces; _i < _a.length; _i++) {
                var face = _a[_i];
                for (var _b = 0, face_1 = face; _b < face_1.length; _b++) {
                    var facePoint = face_1[_b];
                    var key = JSON.stringify(facePoint);
                    var k = vertices.get(key);
                    if (typeof k === "number") {
                        elements.push(k);
                    }
                    else {
                        points.push([facePoint.x, facePoint.y, facePoint.z]);
                        if (typeof facePoint.nx === "number") {
                            normals.push([
                                facePoint.nx,
                                facePoint.ny,
                                facePoint.nz,
                            ]);
                        }
                        else
                            normals.push(null);
                        if (typeof facePoint.u === "number") {
                            uvs.push([facePoint.u, facePoint.v]);
                        }
                        else
                            uvs.push([0, 0]);
                        elements.push(points.length - 1);
                    }
                }
            }
            this.data = {
                attributes: {
                    point: createFloat32ArrayFromVector3Array(points),
                    normal: createFloat32ArrayFromVector3Array(normals),
                    uv: createFloat32ArrayFromVector2Array(uvs),
                },
                elements: createBestElementArray(elements),
            };
        }
        return this.data;
    };
    return TgdMesh;
}());
export { TgdMesh };
function createBestElementArray(elements) {
    var max = elements.reduce(function (prv, cur) { return Math.max(prv, cur); }, 0);
    if (max < 256)
        return new Uint8Array(elements);
    if (max < 256 * 256)
        return new Uint16Array(elements);
    return new Uint32Array(elements);
}
function createFloat32ArrayFromVector3Array(points) {
    var arr = new Float32Array(points.length * 3);
    var cursor = 0;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var _a = points_1[_i], x = _a[0], y = _a[1], z = _a[2];
        arr[cursor++] = x;
        arr[cursor++] = y;
        arr[cursor++] = z;
    }
    return arr;
}
function createFloat32ArrayFromVector2Array(points) {
    var arr = new Float32Array(points.length * 2);
    var cursor = 0;
    for (var _i = 0, points_2 = points; _i < points_2.length; _i++) {
        var _a = points_2[_i], x = _a[0], y = _a[1];
        arr[cursor++] = x;
        arr[cursor++] = y;
    }
    return arr;
}
function computeNormals(elements, points) {
    var normals = [].fill(0, 0, points.length).map(function () { return [0, 0, 0]; });
    for (var k = 0; k < elements.length; k += 3) {
        var idxA = elements[k + 0];
        var idxB = elements[k + 1];
        var idxC = elements[k + 2];
        var a = points[idxA];
        var b = points[idxB];
        var c = points[idxC];
        var ab = normalize(subtractVectors(b, a));
        var ac = normalize(subtractVectors(c, a));
        var normal = normalize(crossProduct(ab, ac));
        normals[idxA] = addVectors(normals[idxA], normal);
        normals[idxB] = addVectors(normals[idxB], normal);
        normals[idxC] = addVectors(normals[idxC], normal);
    }
    var result = normals.map(normalize);
    return result;
}
//# sourceMappingURL=mesh.js.map