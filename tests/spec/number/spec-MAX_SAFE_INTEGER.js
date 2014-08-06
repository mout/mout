define(['mout/number/MAX_SAFE_INTEGER'], function(MAX_SAFE_INTEGER){

    describe('number/MAX_SAFE_INTEGER', function(){

        it('should be equal (2 ^ 52) - 1', function(){
            expect( MAX_SAFE_INTEGER ).toBe( Math.pow(2, 53) - 1 );
        });

    });

});
