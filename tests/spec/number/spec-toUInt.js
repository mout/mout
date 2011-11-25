define(['src/number/toUInt'], function (toUInt) {

    describe('number/toUInt()', function(){

        var max_uint = 4294967295;

        it('should remove decimal digits', function(){
            expect( toUInt(1.25) ).toEqual(1);
            expect( toUInt(0.75) ).toEqual(0);
            expect( toUInt(2.999) ).toEqual(2);
            expect( toUInt(10.0001) ).toEqual(10);
        });

        it('negative numbers should be subtracted from MAX_UINT + 1 (wrap at zero) - similat to AS3 `uint(val)`', function () {
            expect( toUInt(-0.55) ).toEqual(0);
            expect( toUInt(-5.0001) ).toEqual( max_uint - 5 + 1 );
            expect( toUInt(-9.99999) ).toEqual( max_uint - 9 + 1 );
        });

        it('should wrap at 2^32', function () {
            expect( toUInt( Math.pow(2,31) + 0.5 ) ).toEqual( 2147483648 );
            expect( toUInt( Math.pow(2,31) + 5.5 ) ).toEqual( 2147483653 );
            expect( toUInt( Math.pow(2,32) - 0.5 ) ).toEqual( 4294967295 );
            expect( toUInt( Math.pow(2,32) + 0.5 ) ).toEqual( 0 );
            expect( toUInt( Math.pow(2,32) + 5.5 ) ).toEqual( 5 );
            expect( toUInt( Math.pow(2,33) - 0.5 ) ).toEqual( 4294967295 );
            expect( toUInt( Math.pow(2,33) + 5.5 ) ).toEqual( 5 );
        });

    });
});
