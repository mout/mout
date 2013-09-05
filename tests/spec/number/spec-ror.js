define(['mout/number/ror'], function (ror) {

    describe('number/ror()', function(){
        it('should rotate bits right', function(){
            expect( ror( parseInt('10101', 2), 6).toString(2) ).toEqual( '10101'+ (new Array(27)).join(0) );
            expect( ror( 1 << 30, 5).toString(2) ).toEqual( '1'+ (new Array(26)).join('0') );
        });

        it('should typecast value to number', function () {
            expect( ror('2', 30) ).toEqual( 8 );
            expect( ror('', 30) ).toEqual( 0 );
            expect( ror(null, 30) ).toEqual( 0 );
            expect( ror(void(0), 30) ).toEqual( 0 );
        });
    });
});
