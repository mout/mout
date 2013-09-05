define(['mout/number/pad'], function (pad) {

    describe('number/pad()', function(){
        it('should add zeroes if number length is < minLength', function(){
            expect( pad(15, 0) ).toEqual( '15' );
            expect( pad(15, 1) ).toEqual( '15' );
            expect( pad(15, 2) ).toEqual( '15' );
            expect( pad(15, 3) ).toEqual( '015' );
            expect( pad(15, 4) ).toEqual( '0015' );
        });

        it('should allow custom pad char', function () {
            expect( pad(15, 4, '_') ).toEqual( '__15' );
        });

        it('should typecast value to number', function () {
            expect( pad(null, 2) ).toEqual( '00' );
            expect( pad('', 2) ).toEqual( '00' );
            expect( pad('1', 2) ).toEqual( '01' );
        });

    });

});
