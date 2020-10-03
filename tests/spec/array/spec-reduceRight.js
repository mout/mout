import reduceRight from '../../../array/reduceRight';

describe('array/reduceRight()', function() {
    it('should reduce array into a single value', function() {
        const arr = [1, 2, 3, 4];
        const compare1 = [];
        const compare2 = [];

        function sum(prev, cur, idx, arr) {
            compare1.push(prev);
            return prev + cur;
        }

        function mult(prev, cur, idx, arr) {
            compare2.push(prev);
            return prev * cur;
        }

        expect(reduceRight(arr, sum)).toBe(10);
        expect(reduceRight(arr, mult)).toBe(24);

        expect(compare1).toEqual([4, 7, 9]);
        expect(compare2).toEqual([4, 12, 24]);
    });

    it('should allow init value', function() {
        const arr = [1, 2, 3, 4];

        function sum(prev, cur, idx, arr) {
            return prev + cur;
        }

        function mult(prev, cur, idx, arr) {
            return prev * cur;
        }

        expect(reduceRight(arr, sum, 10)).toBe(20);
        expect(reduceRight(arr, mult, 10)).toBe(240);
    });

    it('should pass proper params to callback', function() {
        const base = [1, 2, 3, 4];

        function foo(prev, cur, idx, arr) {
            expect(arr[idx + 1]).toBe(prev);
            expect(arr).toBe(base);
            return cur;
        }

        expect(reduceRight(base, foo)).toBe(1);
    });

    it('should throw error if empty', function() {
        function sum(prev, cur, idx, arr) {
            return prev + cur;
        }
        expect(function() {
            reduceRight([], sum);
        }).toThrow();
    });

    it('should throw error if null/undefined', function() {
        const testFunc = function() {};

        expect(function() {
            reduceRight(null, testFunc);
        }).toThrow();
        expect(function() {
            reduceRight(undefined, testFunc);
        }).toThrow();
    });

    it('should work on empty arrays if provide initVal', function() {
        function sum(prev, cur, idx, arr) {
            return prev + cur;
        }
        expect(reduceRight([], sum, 10)).toBe(10);
    });

    it('should work on null/undefined array if initVal provided', function() {
        const testFunc = function() {};

        expect(reduceRight(null, testFunc, 10)).toBe(10);
        expect(reduceRight(undefined, testFunc, 10)).toBe(10);
    });

    it('should iterate over sparse items. see #64', function() {
        function specialSum(prev, cur, i, arr) {
            const a = prev == null ? 1 : prev;
            const b = cur == null ? 1 : cur;
            return a + b;
        }

        const base = [1, 5];
        base[7] = 4;
        base[10] = undefined;

        // IMPORTANT
        // ---------
        // this behavior is different than ES5 Array#reduceRight
        expect(reduceRight(base, specialSum)).toEqual(18);
        expect(reduceRight(base, specialSum, 2)).toEqual(20);
    });

    it('should allow "undefined" as initial value', function() {
        // thx @jdalton for catching this one see #gh-57
        const base = [1, 2, 3];
        const compare = [];

        const r = reduceRight(
            base,
            function(prev, cur, i, arr) {
                compare.push(prev);
                return prev == null ? cur : prev * cur;
            },
            undefined
        );

        expect(r).toBe(6);
        expect(compare).toEqual([undefined, 3, 6]);
    });
});
