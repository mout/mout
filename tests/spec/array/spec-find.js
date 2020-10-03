import find from '../../../array/find';

describe('array/find', function() {
    it('should return first match', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];

        expect(
            find(arr, function(val) {
                return val === 123;
            })
        ).toEqual(123);
        expect(
            find(arr, function(val) {
                return typeof val === 'string';
            })
        ).toEqual('foo');
        expect(
            find(arr, function(val) {
                return val.a === 'b';
            })
        ).toEqual(obj);
    });

    it('should return undefined if array is null/undefined', function() {
        const testFunc = function() {
            return true;
        };

        expect(find(null, testFunc)).toBeUndefined();
        expect(find(undefined, testFunc)).toBeUndefined();
    });

    it('should support object shortcut syntax', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];

        expect(find(arr, { a: 'b' })).toEqual(obj);
    });

    it('should support string shortcut syntax', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];
        expect(find(arr, 'a')).toEqual(obj);
    });
});
