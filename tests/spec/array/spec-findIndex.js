import findIndex from '../../../array/findIndex';

describe('array/findIndex', function() {
    it('should return index of first match', function() {
        const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

        const findOne = function(val) {
            return val === 1;
        };
        const isString = function(val) {
            return typeof val === 'string';
        };
        const findObj = function(val) {
            return val.a === 1;
        };

        expect(findIndex(items, findOne)).toEqual(0);
        expect(findIndex(items, isString)).toEqual(3);
        expect(findIndex(items, findObj)).toEqual(1);
    });

    it('should support object shortcut syntax', function() {
        const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

        expect(findIndex(items, { a: 1 })).toEqual(1);
    });

    it('should support string shortcut syntax', function() {
        const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];

        expect(findIndex(items, 'a')).toEqual(1);
    });

    it('should return -1 when not found', function() {
        const items = [1, { a: 1 }, 1, 'foo', 'bar', { a: 1 }];
        const findTwo = function(val) {
            return val === 2;
        };

        expect(findIndex(items, findTwo)).toEqual(-1);
    });

    it('should return -1 when array is null/undefined', function() {
        const testFunc = function() {
            return true;
        };

        expect(findIndex(null, testFunc)).toBe(-1);
        expect(findIndex(undefined, testFunc)).toBe(-1);
    });
});
