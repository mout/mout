define(['mout/random/randBit', './helper-mockRandom'], function (randBit, mockRandom) {

    describe('random/randBit()', function(){

        it('returns a random number at each call', function(){
            mockRandom();

            var a = randBit(),
                b = randBit(),
                c = randBit();
            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( a ).not.toEqual( NaN );
            expect( a === b && b === c ).toBe(false);

            mockRandom.end();
        });

        it('shouldn\t be biased', function () {
            // Do not mock random on this test, since it needs a good random
            // number generator that is not biased

            var c1 = 0,
                c0 = 0,
                n = 5000,
                rnd;

            while (n--) {
                rnd = randBit();
                if ( rnd === 1 ){
                    c1++;
                } else if ( rnd === 0) {
                    c0++;
                } else {
                    expect(rnd).toBe('fail, out of range.');
                }
            }

            expect( c0 ).toBeLessThan( 2600 );
            expect( c0 ).toBeGreaterThan( 2400 );
            expect( c1 ).toBeLessThan( 2600 );
            expect( c1 ).toBeGreaterThan( 2400 );

        });

    });
});
