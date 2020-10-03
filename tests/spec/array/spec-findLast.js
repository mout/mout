import findLast from '../../../array/findLast';

describe('array/findLast', function() {
    it('should return last match', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];

        expect(
            findLast(arr, function(val) {
                return val === 123;
            })
        ).toEqual(123);
        expect(
            findLast(arr, function(val) {
                return typeof val === 'string';
            })
        ).toEqual('bar');
        expect(
            findLast(arr, function(val) {
                return val.a === 'b';
            })
        ).toEqual(obj);
    });

    it('should return undefined if array is null/undefined', function() {
        const testFunc = function() {
            return true;
        };

        expect(findLast(null, testFunc)).toBeUndefined();
        expect(findLast(undefined, testFunc)).toBeUndefined();
    });

    it('should support object shortcut syntax', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];

        expect(findLast(arr, { a: 'b' })).toEqual(obj);
    });

    it('should support string shortcut syntax', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];
        expect(findLast(arr, 'a')).toEqual(obj);
    });
});
