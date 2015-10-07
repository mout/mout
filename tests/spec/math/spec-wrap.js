define(['mout/math/wrap'], function(wrap){

    describe('math/wrap', function(){

        it('should return number if within bounds', function(){
            expect( wrap( 10, 0, 20 ) ).toBe( 10 );
            expect( wrap( 15, 30 ) ).toBe( 15 );
            expect( wrap( 0, -5, 5 ) ).toBe( 0 );
            expect( wrap( -10, -10, -5 ) ).toBe( -10 );
            expect( wrap( 10, 0, 10 ) ).toBe( 0 );
            expect( wrap( 3, 3, 10 ) ).toBe( 3 );
        });

        it('should wrap numbers higher or equal max', function(){
            expect( wrap( 12, 4, 10 ) ).toBe( 6 );
            expect( wrap( 23, 5 ) ).toBe( 3 );
            expect( wrap( 23, 5, 12 ) ).toBe( 9 );
            expect( wrap( -3, -10, -5 ) ).toBe( -8 );
        });

        it('should wrap number lower then min', function() {
            expect( wrap( 2, 5, 10 ) ).toBe( 7 );
            expect( wrap( 1, 10, 14 ) ).toBe( 13 );
            expect( wrap( -13, -10, -5 ) ).toBe( -8 );
        });

        it('should behave like module operator for positve numbers', function() {
            expect( wrap( 3, 15 ) ).toBe( 3 % 15 );
            expect( wrap( 27, 5 ) ).toBe( 27 % 5 );
        });

        it('should use 0 as lower bound if only 2 arguments are given', function() {
            expect( wrap( 15, 5 ) ).toBe( 0 );
            expect( wrap( 27, 7 ) ).toBe( 6 );
        });

    });

});
