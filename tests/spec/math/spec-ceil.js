define(['mout/math/ceil'], function(ceil){

    describe('math/ceil', function(){

        it('should round value up', function(){
            expect( ceil(10.2) ).toBe( 11 );
            expect( ceil(10.7) ).toBe( 11 );
        });

        it('should allow a custom radix', function () {
            expect( ceil(10.7, 2) ).toBe( 12 );
            expect( ceil(10.7, 5) ).toBe( 15 );
            expect( ceil(12, 5) ).toBe( 15 );
            expect( ceil(12, 1000) ).toBe( 1000 );
            expect( ceil(1000.1, 1000) ).toBe( 2000 );
        });

        it('should work with negative numbers', function () {
            expect( ceil(-5.3) ).toEqual( -5 );
            expect( ceil(-5.3, -2) ).toEqual( -4 );
        });

        it('should not round up if value is divisible by radix', function () {
            expect( ceil(1) ).toEqual( 1 );
            expect( ceil(2, 2) ).toEqual( 2 );
            expect( ceil(15, 5) ).toEqual( 15 );
        });

        it('should work properly with fractional step', function () {
            expect( ceil(1.2, 0.25) ).toEqual( 1.25 );
            expect( ceil(1.42, 0.25) ).toEqual( 1.5 );
            expect( ceil(1.5, 0.25) ).toEqual( 1.5 );
        });

    });

});
