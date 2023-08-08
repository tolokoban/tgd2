var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var EPSILON = 1e-12;
export function isZero(x) {
    return Math.abs(x) < EPSILON;
}
export function project(vector, base) {
    var vx = vector[0], vy = vector[1], vz = vector[2];
    var bx = base[0], by = base[1], bz = base[2];
    var coeff = 1 / (bx * bx + by * by + bz * bz);
    return coeff * (vx * bx + vy * by + vz * bz);
}
export function vectorSquareLength(vec) {
    return vec.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue * currentValue;
    }, 0);
}
export function vectorLength(vec) {
    return Math.sqrt(vectorSquareLength(vec));
}
export function normalize(vec) {
    var result = __spreadArray([], vec, true);
    var squareLength = vectorSquareLength(vec);
    if (squareLength < EPSILON) {
        return result;
    }
    var length = Math.sqrt(squareLength);
    return result.map(function (v) { return v / length; });
}
export function subtractVectors(a, b) {
    return a.map(function (value, index) { return value - b[index]; });
}
export function addVectors() {
    var vectors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vectors[_i] = arguments[_i];
    }
    var first = vectors[0], rest = vectors.slice(1);
    var result = __spreadArray([], first, true);
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var vector = rest_1[_a];
        for (var k = 0; k < result.length; k++)
            result[k] += vector[k];
    }
    return result;
}
export function scaleVector(v, scale) {
    return v.map(function (elem) { return elem * scale; });
}
export function computeBoundingBox(points) {
    var _a = points[0], x = _a[0], y = _a[1], z = _a[2], rest = points.slice(1);
    var minX = x;
    var maxX = x;
    var minY = y;
    var maxY = y;
    var minZ = z;
    var maxZ = z;
    for (var _i = 0, rest_2 = rest; _i < rest_2.length; _i++) {
        var _b = rest_2[_i], xx = _b[0], yy = _b[1], zz = _b[2];
        minX = Math.min(minX, xx);
        maxX = Math.max(maxX, xx);
        minY = Math.min(minY, yy);
        maxY = Math.max(maxY, yy);
        minZ = Math.min(minZ, zz);
        maxZ = Math.max(maxZ, zz);
    }
    return {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY,
        minZ: minZ,
        maxZ: maxZ,
    };
}
export function crossProduct(vecA, vecB) {
    var xa = vecA[0], ya = vecA[1], za = vecA[2];
    var xb = vecB[0], yb = vecB[1], zb = vecB[2];
    return [ya * zb - yb * za, xb * za - xa * zb, xa * yb - xb * ya];
}
export function clamp(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
//# sourceMappingURL=calc.js.map