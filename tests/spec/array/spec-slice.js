define(['mout/array/slice'], function(slice){

    describe('array/slice', function(){

        it('should return slice of array', function(){
            var arr = [1, 2, 3, 4, 5];
            expect( slice(arr, 1, 3) ).toEqual( [2, 3] );
        });

        it('should use end of array when end omitted', function(){
            var arr = [1, 2, 3, 4];
            expect( slice(arr, 1) ).toEqual( [2, 3, 4] );
        });

        it('should include whole array when start omitted', function(){
            var arr = [1, 2, 3, 4],
                result = slice(arr);
            expect( result ).toEqual( arr );
            expect( result ).not.toBe( arr );
        });

        it('should convert array-like object to array', function(){
            var obj = { 'length': 3, 0: 'a', 1: 'b', 2: 'c' },
                result = slice(obj);
            expect( result ).toEqual( ['a', 'b', 'c'] );
            expect( result.constructor ).toBe( Array );
        });

    });

});
