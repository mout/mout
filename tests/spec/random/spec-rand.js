define(['mout/random/rand', './helper-mockRandom'], function (rand, mockRandom) {

    describe('random/rand()', function(){

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function() {
            mockRandom.end();
        });

        it('returns a rand number at each call', function(){
            var a = rand(),
                b = rand();
            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( a ).not.toEqual( b );
        });

        it('returns a rand number inside range', function(){
            var a = rand(0, 9999),
                b = rand(0, 9999);
            expect( a ).toBeLessThan(9999.01);
            expect( a ).toBeGreaterThan(-0.01);
            expect( b ).toBeLessThan(9999.01);
            expect( b ).toBeGreaterThan(-0.01);
            expect( a ).not.toEqual( b );
        });

    });

});
