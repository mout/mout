define(['mout/object/contains'], function(contains){

    describe('object/contains', function(){

        it('should check for existence', function(){
            var list = {a:1, b:2, c:3};
            expect( contains(list, 2) ).toBe( true );
            expect( contains(list, 4) ).toBe( false );
        });

    });

});
