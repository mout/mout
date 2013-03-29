define(['mout/array/contains'], function (contains) {

    describe('array/contains()', function(){

        it('should check for existance', function(){

            var arr = [1, 2, 3];
            expect( contains(arr, 2) ).toBe( true );
            expect( contains(arr, 4) ).toBe( false );
        });

        it('should return false when array is null/undefined', function(){
            expect( contains(null, 1) ).toBe( false );
            expect( contains(undefined, 1) ).toBe( false );
        });

    });
});
