define(['mout/random/randSign', './helper-mockRandom'], function (randSign, mockRandom) {

    describe('random/randSign()', function(){

        it('returns a random number at each call', function(){
            mockRandom();

            var a = randSign(),
                b = randSign(),
                c = randSign();

            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( a ).not.toEqual( NaN );
            expect( a === b && b === c ).toBe(false);

            mockRandom.end();
        });

        it('shouldn\t be biased', function () {
            // Do not mock, since it needs a good non-biased random number
            // generator

            var c1 = 0,
                c_1 = 0,
                n = 5000,
                rnd;

            while (n--) {
                rnd = randSign();
                if ( rnd === 1 ){
                    c1++;
                } else if ( rnd === -1) {
                    c_1++;
                } else {
                    expect(rnd).toBe('fail, out of range.');
                }
            }

            expect( c_1 ).toBeLessThan( 2600 );
            expect( c_1 ).toBeGreaterThan( 2400 );
            expect( c1 ).toBeLessThan( 2600 );
            expect( c1 ).toBeGreaterThan( 2400 );

        });

    });
});
