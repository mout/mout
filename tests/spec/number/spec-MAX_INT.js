define(['src/number/MAX_INT'], function (MAX_INT) {

    describe('number/MAX_INT', function(){
        it('should be equal (2 ^ 31) - 1', function(){
            expect( MAX_INT ).toEqual( Math.pow(2, 31) - 1 );
        });
    });

});
