define(['mout/random/randHex', './helper-mockRandom'], function (randHex, mockRandom) {

    describe('random/randHex()', function () {

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function() {
            mockRandom.end();
        });

        it('should return a random hexadecimal value', function () {
            var a = randHex(),
                b = randHex();
            expect( a ).not.toEqual( b );
        });

        it('should return a 6 char length hex value by default', function () {
            expect( randHex().length ).toBe( 6 );
            expect( randHex(0).length ).toBe( 6 );
        });

        it('should allow custom length', function () {
            expect( randHex(2).length ).toEqual( 2 );
            expect( randHex(5).length ).toEqual( 5 );
            expect( randHex(10).length ).toEqual( 10 );
        });

        it('should handle negative size', function () {
            expect( randHex(-5).length ).toEqual( 6 );
        });

    });

});
