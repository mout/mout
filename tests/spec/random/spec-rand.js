define(['mout/random/rand', './helper-mockRandom'], function (rand, mockRandom) {

    describe('random/rand()', function(){

        beforeEach(function(){
            mockRandom();
        });

        afterEach(function() {
            mockRandom.end();
        });

        it('returns a rand number at each call', function(){
            var a = rand(),
                b = rand();
            expect( a ).not.toBeUndefined();
            expect( b ).not.toEqual( Infinity );
            expect( a === b ).toBe(false);
        });

        it('returns a rand number inside range', function(){
            var a = rand(0, 9999),
                b = rand(0, 9999),
                c = rand(0, 9999);
            expect( a ).toBeLessThan(9999.01);
            expect( a ).toBeGreaterThan(-0.01);
            expect( b ).toBeLessThan(9999.01);
            expect( b ).toBeGreaterThan(-0.01);
            expect( c ).toBeLessThan(9999.01);
            expect( c ).toBeGreaterThan(-0.01);

            expect( a === b && b === c ).toBe(false);
        });

    });

});
