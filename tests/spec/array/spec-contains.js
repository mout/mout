define(['src/array/contains'], function (contains) {

    describe('array/contains()', function(){

        it('should check for existance', function(){

            var arr = [1, 2, 3];
            expect( contains(arr, 2) ).toBe( true );
            expect( contains(arr, 4) ).toBe( false );
        });

    });
});
