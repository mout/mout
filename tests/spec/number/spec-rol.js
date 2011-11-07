define(['src/number/rol'], function (rol) {

    describe('number/rol()', function(){
        it('should rotate bits left', function(){
            expect( rol( parseInt('10101', 2), 5).toString(2) ).toEqual( '1010100000' );
            expect( rol( 1 << 30, 5).toString(2) ).toEqual( '1000' );
        });
    });

});
