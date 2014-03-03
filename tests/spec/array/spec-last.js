define(['mout/array/last'], function(last){

    describe('array/last', function(){

        it('should return the last element of an array', function(){
            expect( last([1,2,3,4,5]) ).toBe(5);
            expect( last([1]) ).toBe(1);
            expect( last([]) ).toBe(null);
            expect( last() ).toBe(null);
            expect( last([ "one", "two" ]) ).toBe("two");
        });

        it('should return an array of elements', function() {
            expect( last([1, 2, 3, 4, 5], 2 ) ).toEqual([4, 5]);
            expect( last([1, 2], 4 ) ).toEqual([1, 2]);
        });

    });

});
