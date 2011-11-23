define(['src/number/MAX_UINT'], function (MAX_INT) {

    describe('number/MAX_UINT', function(){
        it('should be equal (2 ^ 32) - 1', function(){
            expect( MAX_INT ).toEqual( Math.pow(2, 32) - 1 );
        });
    });

});
