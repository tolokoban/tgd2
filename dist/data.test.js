import { makeData } from "./data";
describe("data.ts", function () {
    var data = makeData({
        xy: 2,
        z: 1,
    });
    data.set("xy", new Float32Array([11, 12, 21, 22]));
    data.set("z", new Float32Array([1, 2]));
    var got = new Float32Array(data.get(2));
    var exp = new Float32Array([11, 12, 1, 21, 22, 2]);
    it("should interleave floats", function () {
        expect(got).toEqual(exp);
    });
});
//# sourceMappingURL=data.test.js.map