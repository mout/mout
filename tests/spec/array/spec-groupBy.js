define(['mout/array/groupBy'], function(groupBy) {

    describe('array/groupBy', function() {
        it('should bucket appropriately', function() {
            function floor(num) {
                return Math.floor(num);
            }

            // Test case borrowed from lodash.
            expect(groupBy([4.2, 6.1, 6.4], floor)).toEqual({
              '4': [4.2],
              '6': [6.1, 6.4]
            });
        });

        it('should accept thisArg', function() {
            var x = { '1': 'left', '2': 'left', '3': 'left', '4': 'right', '5': 'left' };

            expect(
                groupBy([1, 2, 3, 4, 5], function(key) {
                  return this[key];
                }, x)
            )
            .toEqual({ 'left': [1, 2, 3, 5], 'right': [4] });
        });

        it('should default to identity function', function() {
            expect(
                groupBy([1, 2, 2, 1, 1])
            )
            .toEqual({ '1': [1, 1, 1], '2': [2, 2] });
        });

        it('should categorize by property', function() {
            expect(
                groupBy(['green', 'eggs', 'and', 'ham'], 'length')
            )
            .toEqual({ '3': ['and', 'ham'], '4': ['eggs'], '5': ['green'] });
        });
    });
});
