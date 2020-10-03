import map from '../../../collection/map';

describe('collection/map', function() {
    it('should map array', function() {
        const result = map([1, 2, 3], function(val) {
            return val * 2;
        });
        expect(result).toEqual([2, 4, 6]);
    });

    it('should map object', function() {
        const result = map({ a: 1, b: 2, c: 3 }, function(val) {
            return val * 2;
        });
        expect(result).toEqual([2, 4, 6]);
    });

    it('should return empty array if target is undefined', function() {
        const result = map(null, function(val) {
            return val * 2;
        });
        expect(result).toEqual([]);
    });

    it('should loop over array-like object as if it was an array', function() {
        const obj = {
            '0': '1',
            '1': 'b',
            '2': 'c',
            length: 3
        };
        const result = map(obj, function(val, i) {
            return i + '-' + val;
        });
        expect(result).toEqual(['0-1', '1-b', '2-c']);
    });

    it('should allow string shorthand syntax', function() {
        const obj = {
            '0': { foo: 'bar', lorem: 'ipsum', id: 1 },
            '1': { foo: 'bar', lorem: 'ipsum', id: 2 },
            '2': { foo: 'bar', lorem: 'ipsum', id: 0 }
        };
        const arr = [obj[0], obj[1], obj[2]];

        expect(map(obj, 'foo')).toEqual(['bar', 'bar', 'bar']);
        expect(map(obj, 'id')).toEqual([1, 2, 0]);
        expect(map(obj, 'amet')).toEqual([undefined, undefined, undefined]);

        expect(map(arr, 'foo')).toEqual(['bar', 'bar', 'bar']);
        expect(map(arr, 'id')).toEqual([1, 2, 0]);
        expect(map(arr, 'amet')).toEqual([undefined, undefined, undefined]);
    });
});
