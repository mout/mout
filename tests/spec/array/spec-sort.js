define(['src/array/sort'], function (sort) {

    describe('array/sort()', function () {

        it('should sort numerically by default', function () {

            var arr = [187, 23, 47, 987, 12, 59, 0];
            var com = [0, 12, 23, 47, 59, 187, 987];
            expect( sort(arr) ).toEqual( com );

        });

        it('should sort alphabetically if string', function () {

            var arr1 = ['187', '23', '47', '987', '12', '59', '0'];
            var com1 = ['0', '12', '187', '23', '47', '59', '987'];
            expect( sort(arr1) ).toEqual( com1 );

            var arr2 = ['a', 'b', 'alfa', 'c', 'beta', 'd', 'bar', 'zeta', 'z'];
            var com2 = ['a', 'alfa', 'b', 'bar', 'beta', 'c', 'd', 'z', 'zeta'];
            expect( sort(arr2) ).toEqual( com2 );

        });

        it('should support a custom compare function', function () {

            var arr = [2, 4, 6, 8, 9, 7, 5, 3, 1];
            var com = [9, 8, 7, 6, 5, 4, 3, 2, 1];

            var compareFn = function(a, b){
                // reverse sort
                return b - a;
            };

            expect( sort(arr, compareFn) ).toEqual( com );

        });

        it('should be a stable sort (items should preserve same order if "sorted")', function () {

            var arr = ['c', 'it', 'foo', 'bar', 'ipsum', 'b', 'do', 'dolor', 'sit', 'amet'];
            var com = ['c', 'b', 'it', 'do', 'foo', 'bar', 'sit', 'amet', 'ipsum', 'dolor'];

            var compareFn2 = function(a, b){
                //sort by length if same length (return === 0) it should keep
                //the same relative position in the array
                return a.length - b.length;
            };

            expect( sort(arr, compareFn2) ).toEqual( com );

        });
    });

});
