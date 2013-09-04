define(['mout/number/rol'], function (rol) {

    describe('number/rol()', function(){
        it('should rotate bits left', function(){
            expect( rol( parseInt('10101', 2), 5).toString(2) ).toEqual( '1010100000' );
            expect( rol( 1 << 30, 5).toString(2) ).toEqual( '1000' );
        });

        it('should typecast value to number', function () {
            expect( rol('2', 5).toString(2) ).toEqual( '1000000' );
            expect( rol('', 30).toString(2) ).toEqual( '0' );
            expect( rol(null, 30).toString(2) ).toEqual( '0' );
            expect( rol(void(0), 30).toString(2) ).toEqual( '0' );
        });

    });

});
