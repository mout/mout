import deepEquals from '../../../lang/deepEquals';

describe('lang/deepEquals', function() {
    it('should check object values', function() {
        expect(deepEquals({}, {})).toBe(true);
        expect(deepEquals({ a: 1 }, { a: 1 })).toBe(true);
        expect(deepEquals({ a: 1 }, { a: 2 })).toBe(false);
    });

    it('should recursively check values', function() {
        const a = { value: { a: 1 } };
        const b = { value: { a: 1 } };
        expect(deepEquals(a, b)).toBe(true);

        b.a = 2;
        expect(deepEquals(a, b)).toBe(false);
    });

    it('should ensure objects have same properties', function() {
        const a = { value: { a: 1 } };
        const b = { value: { a: 1, b: 2 } };
        expect(deepEquals(a, b)).toBe(false);
        expect(deepEquals(b, a)).toBe(false);
    });

    it('should ignore order of keys', function() {
        const a = { value: { a: 1, b: 2 } };
        const b = { value: { b: 2, a: 1 } };
        expect(deepEquals(a, b)).toBe(true);
    });

    it('should check arrays', function() {
        const a = { value: { a: [1, 3, [5, { c: 6 }]], b: 2 } };
        const b = { value: { b: 2, a: [1, 3, [5, { c: 6 }]] } };
        expect(deepEquals(a, b)).toBe(true);
    });

    it('should use strict equals for non-objects', function() {
        expect(deepEquals({}, null)).toBe(false);
        expect(deepEquals(null, {})).toBe(false);
        expect(deepEquals(null, null)).toBe(true);
        expect(deepEquals(null, undefined)).toBe(false);
        expect(deepEquals(NaN, NaN)).toBe(true);
        expect(deepEquals(+0, -0)).toBe(false);
        expect(deepEquals(0, 0)).toBe(true);
        expect(deepEquals('123', 123)).toBe(false);
    });

    it("should only check object's own properties", function() {
        function A() {}
        A.prototype.isA = true;
        function B() {}
        B.prototype.isA = false;

        const a = { foo: new A() };
        const b = { foo: new B() };

        expect(deepEquals(a, b)).toBe(true);
    });

    it('should allow custom compare function', function() {
        const a = { a: 1, b: { value: 2 } };
        const b = { a: '1', b: { value: '02.0' } };

        function numericCompare(a, b) {
            return +a === +b;
        }

        expect(deepEquals(a, b, numericCompare)).toBe(true);
    });
});
