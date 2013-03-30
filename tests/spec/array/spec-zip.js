define(['mout/array/zip'], function(zip){

    describe('array/zip', function(){

        it('should group elements from different arrays', function(){
            var output = [ ['a', 1], ['b', 2], ['c', 3] ];
            expect( zip(['a', 'b', 'c'], [1, 2, 3]) ).toEqual( output );
        });

        it('should work with "n" arrays', function () {
            var output = [ ['a', 1, true, 4], ['b', 2, false, 5], ['c', 3, true, 6] ];
            expect( zip(['a', 'b', 'c'], [1, 2, 3], [true, false, true], [4,5,6]) ).toEqual( output );
        });

        it('should work with arrays of diff length', function () {
            var output = [ ['a', 1, true, 4], ['b', 2, false, undefined], ['c', 3, undefined, undefined] ];
            expect( zip(['a', 'b', 'c'], [1, 2, 3], [true, false], [4]) ).toEqual( output );
        });

        it('should use undefined for null/undefined argument values', function () {
            var output = [
                [1, undefined, undefined],
                [2, undefined, undefined]
            ];
            expect( zip([1, 2], null, undefined) ).toEqual( output );
        });

    });

});
