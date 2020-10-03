import sortBy from '../../../array/sortBy';

describe('array/sortBy', function() {
    it('should sort array with function', function() {
        const arr = [{ a: 1 }, { a: 3 }, { a: 2 }];

        const result = sortBy(arr, function(item) {
            return item.a;
        });
        expect(result).toEqual([arr[0], arr[2], arr[1]]);
    });

    it('should sort array with property name', function() {
        const arr = [{ a: 3 }, { a: 5 }, { a: 1 }];

        sortBy(arr, 'a');
        expect(sortBy(arr, 'a')).toEqual([arr[2], arr[0], arr[1]]);
    });

    it('should pass index and context to accessor', function() {
        const context = {};
        const arr = [{ b: 'a' }, { b: 'c' }, { b: 'b' }];

        const result = sortBy(
            arr,
            function(item) {
                expect(this).toBe(context);
                return item.b;
            },
            context
        );

        expect(result).toEqual([arr[0], arr[2], arr[1]]);
    });

    it('should handle null array', function() {
        const result = sortBy(null, function() {
            return 1;
        });
        expect(result).toEqual([]);
    });

    it('should handle empty array', function() {
        const result = sortBy([], function() {
            return 1;
        });
        expect(result).toEqual([]);
    });

    it('should sort items by value if missing callback', function() {
        expect(sortBy([1, 10, 20, 2, 3])).toEqual([1, 2, 3, 10, 20]);
    });
});
