define(['src/number/toUInt31'], function (toUInt31) {

    describe('number/toUInt31()', function(){

        it('should remove decimal digits', function(){
            expect( toUInt31(1.25) ).toEqual(1);
            expect( toUInt31(0.75) ).toEqual(0);
            expect( toUInt31(2.999) ).toEqual(2);
            expect( toUInt31(10.0001) ).toEqual(10);
        });

        it('should treat negative numbers as zero', function () {
            expect( toUInt31(-0.55) ).toEqual(0);
            expect( toUInt31(-5.0001) ).toEqual(0);
            expect( toUInt31(-9.99999) ).toEqual(0);
        });

        it('should wrap at 2^31', function () {
            expect( toUInt31( Math.pow(2,31) + 0.5 ) ).toEqual( 0 );
            expect( toUInt31( Math.pow(2,31) + 5.5 ) ).toEqual( 5 );
            expect( toUInt31( Math.pow(2,32) - 0.5 ) ).toEqual( 2147483647 );
        });

    });
});
