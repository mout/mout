define(['mout/collection/contains'], function(contains){

    describe('collection/contains', function(){

        it('should check for existence (array)', function(){
            var arr = [1, 2, 3];
            expect( contains(arr, 2) ).toBe( true );
            expect( contains(arr, 4) ).toBe( false );
        });

        it('should check for existence (object)', function(){
            var list = {a:1, b:2, c:3};
            expect( contains(list, 2) ).toBe( true );
            expect( contains(list, 4) ).toBe( false );
        });

    });

});
