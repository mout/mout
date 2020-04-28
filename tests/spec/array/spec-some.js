import some from '../../../array/some';

describe('array/some()', function() {
    const isEven = function(val, i, arr) {
        return val % 2 === 0;
    };

    it('should work on normal array', function() {
        const a1 = [1, 2, 3];
        const a2 = [1, 3, 5];
        const a3 = [2, 4, 6];

        expect(some(a1, isEven)).toBe(true);
        expect(some(a2, isEven)).toBe(false);
        expect(some(a3, isEven)).toBe(true);
    });

    it('should iterate over sparse items. see #64', function() {
        const a1 = [1, 2, 3];
        a1[10] = 8;
        const a2 = [1, 3, 5];
        a2[10] = 7;
        const a3 = [2, 4, 6];
        a3[10] = 10;

        expect(some(a1, isEven)).toBe(true);
        expect(some(a2, isEven)).toBe(false);
        expect(some(a3, isEven)).toBe(true);
        // IMPORTANT
        // ---------
        // this behavior is different than ES5 Array#some
        expect(
            some(a1, function(val) {
                return val == null;
            })
        ).toBe(true);
    });

    it('should work on empty arrays', function() {
        expect(some([], isEven)).toBe(false);
    });

    it('should work on null/undefined array', function() {
        expect(some(null, isEven)).toBe(false);
        expect(some(undefined, isEven)).toBe(false);
    });

    it('should be incremental', function() {
        const a = [1, 2, 3];
        const compare = [];
        expect(
            some(a, function(val) {
                compare.push(val);
                return val === 3;
            })
        ).toBe(true);
        expect(a).toEqual(compare);
    });

    it('should allow shorthand object syntax', function() {
        const arr = [{ a: 3 }, { a: 3, b: 2 }, { a: 3, b: 4 }, { a: 3, b: 1 }];
        expect(some(arr, { a: 3, b: 2 })).toEqual(true);
        expect(some(arr, { b: 2 })).toEqual(true);
        expect(some(arr, { b: 5 })).toEqual(false);
    });

    it('should allow shorthand string syntax', function() {
        const arr = [{ a: 3 }, { a: 3, b: 2 }, { a: 3, b: 4 }, { a: 3, b: 1 }];
        expect(some(arr, 'a')).toEqual(true);
        expect(some(arr, 'b')).toEqual(true);
        expect(some(arr, 'c')).toEqual(false);
    });
});
