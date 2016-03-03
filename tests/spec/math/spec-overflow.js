define(['mout/math/overflow'], function(overflow){

    describe('math/overflow', function(){

        it('should return number if within bounds', function(){
            expect( overflow( 10, 0, 20 ) ).toBe( 10 );
            expect( overflow( 15, 30 ) ).toBe( 15 );
            expect( overflow( 0, -5, 5 ) ).toBe( 0 );
            expect( overflow( -10, -10, -5 ) ).toBe( -10 );
            expect( overflow( 10, 0, 10 ) ).toBe( 0 );
            expect( overflow( 3, 3, 10 ) ).toBe( 3 );
        });

        it('should wrap numbers higher or equal max', function(){
            expect( overflow( 12, 4, 10 ) ).toBe( 6 );
            expect( overflow( 23, 5 ) ).toBe( 3 );
            expect( overflow( 23, 5, 12 ) ).toBe( 9 );
            expect( overflow( -3, -10, -5 ) ).toBe( -8 );
        });

        it('should wrap number lower then min', function() {
            expect( overflow( 2, 5, 10 ) ).toBe( 7 );
            expect( overflow( 1, 10, 14 ) ).toBe( 13 );
            expect( overflow( -13, -10, -5 ) ).toBe( -8 );
        });

        it('should behave like module operator for positve numbers', function() {
            expect( overflow( 3, 15 ) ).toBe( 3 % 15 );
            expect( overflow( 27, 5 ) ).toBe( 27 % 5 );
        });

        it('should use 0 as lower bound if only 2 arguments are given', function() {
            expect( overflow( 15, 5 ) ).toBe( 0 );
            expect( overflow( 27, 7 ) ).toBe( 6 );
        });

    });

});
