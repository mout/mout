import equals from '../../../object/equals';

describe('object/equals', function() {
    it('should return equal when objects have same properties and values', function() {
        expect(equals({ test: true }, { test: true })).toBe(true);

        const a = { foo: 'foo-value', bar: 'bar-value' };
        const b = { foo: 'foo-value', bar: 'bar-value' };
        expect(equals(a, b)).toBe(true);
    });

    it('should consider empty objects equal', function() {
        expect(equals({}, {})).toBe(true);
    });

    it('should use strict equals for non-objects', function() {
        expect(equals('test', 'test')).toBe(true);
        expect(equals('abc', '')).toBe(false);
        expect(equals(null, null)).toBe(true);
        expect(equals(null, void 0)).toBe(false);
        expect(equals({}, null)).toBe(false);
    });

    it('should require objects to have same properties', function() {
        const a = { test: true };
        const b = { test: true, special: true };
        expect(equals(a, b)).toBe(false);
        expect(equals(b, a)).toBe(false);
    });

    it('should require objects to have same values', function() {
        const a = { test: true, special: true };
        const b = { test: true, special: false };
        expect(equals(a, b)).toBe(false);
    });

    it('should allow objects with same prototype', function() {
        function A() {
            this.id = 'test';
        }
        A.prototype.test = true;

        expect(equals(new A(), new A())).toBe(true);
    });

    it('should not use prototype properties', function() {
        function Test() {}
        Test.prototype.test = true;

        const a = new Test();
        const b = new Test();
        a.test = true;
        expect(equals(a, b)).toBe(false);

        b.isB = true;
        expect(equals(a, b)).toBe(false);
    });

    it('should only check own properties', function() {
        function A() {}
        A.prototype.isA = true;
        function B() {}
        B.prototype.isA = false;

        expect(equals(new A(), new B())).toBe(true);
    });

    it('should ignore order of keys', function() {
        const a = { a: 1, b: 2 };
        const b = { b: 2, a: 1 };
        expect(equals(a, b)).toBe(true);
    });

    it('should allow custom compare function', function() {
        const a = { a: 1, b: 2 };
        const b = { a: '1', b: '02' };

        function numericCompare(a, b) {
            return +a === +b;
        }

        expect(equals(a, b, numericCompare)).toBe(true);
    });

    it('should use custom compare function when values are not objects', function() {
        function numericCompare(a, b) {
            return +a === +b;
        }

        expect(equals('1.0', 1, numericCompare)).toBe(true);
    });
});
