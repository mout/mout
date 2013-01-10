define(['mout/math/round'], function(round){

    describe('math/round', function(){

        it('should round value', function(){
            expect( round(2.3) ).toBe( 2 );
            expect( round(2.6) ).toBe( 3 );
        });

        it('should work with negative numbers', function(){
            expect( round(-2.3) ).toBe( -2 );
            expect( round(-2.6) ).toBe( -3 );
        });

        it('should round 0.5 up', function () {
            expect( round(0) ).toEqual( 0 );
            expect( round(0.2) ).toEqual( 0 );
            expect( round(0.49) ).toEqual( 0 );
            expect( round(0.5) ).toEqual( 1 );
            expect( round(0.51) ).toEqual( 1 );
            expect( round(-0.49) ).toEqual( 0 );
            expect( round(-0.5) ).toEqual( 0 );
            expect( round(-0.51) ).toEqual( -1 );
        });

        it('should allow custom radix', function () {
            expect( round(1, 3) ).toEqual( 0 );
            expect( round(1.49, 3) ).toEqual( 0 );
            expect( round(1.5, 3) ).toEqual( 3 );
            expect( round(1.51, 3) ).toEqual( 3 );
            expect( round(2, 3) ).toEqual( 3 );
            expect( round(4, 3) ).toEqual( 3 );
            expect( round(5, 3) ).toEqual( 6 );
        });

        it('should allow fractional radix', function () {
            expect( round(0, 0.5) ).toEqual( 0 );
            expect( round(0.22, 0.5) ).toEqual( 0 );
            expect( round(0.49, 0.5) ).toEqual( 0.5 );
            expect( round(0.5, 0.5) ).toEqual( 0.5 );
            expect( round(0.6, 0.5) ).toEqual( 0.5 );
            expect( round(0.74, 0.5) ).toEqual( 0.5 );
            expect( round(0.75, 0.5) ).toEqual( 1 );
            expect( round(0.76, 0.5) ).toEqual( 1 );
            expect( round(1.2, 0.5) ).toEqual( 1 );
            expect( round(1.3, 0.5) ).toEqual( 1.5 );
        });

        it('should allow negative value and radix', function () {
            expect( round(-0.5, -0.5) ).toEqual( -0.5 );
            expect( round(-0.6, -0.5) ).toEqual( -0.5 );
            expect( round(-0.74, -0.5) ).toEqual( -0.5 );
            expect( round(-0.75, -0.5) ).toEqual( -1 );
            expect( round(-0.76, -0.5) ).toEqual( -1 );
            expect( round(-1.2, -0.5) ).toEqual( -1 );
            expect( round(-1.3, -0.5) ).toEqual( -1.5 );
        });

    });

});
