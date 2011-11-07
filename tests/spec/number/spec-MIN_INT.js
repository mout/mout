define(['src/number/MIN_INT'], function (MIN_INT) {

    describe('number/MIN_INT', function(){
        it('should be equal -2 ^ 31', function(){
            expect( MIN_INT ).toEqual( Math.pow(-2, 31) );
        });
    });

});
