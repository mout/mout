define(['mout/array/last'], function(last){

    describe('array/last', function(){

        it('should return the last element of an array', function(){
            expect( last( ['one', 'two'] ) ).toBe('two');
            expect( last( [1,2,3,4,5] ) ).toBe(5);
            expect( last( [1]) ).toBe(1);
            expect( last( [] ) ).toBe(undefined);
            expect( last() ).toBe(undefined);
        });

    });

});
