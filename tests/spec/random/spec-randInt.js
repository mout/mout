define(['mout/random/randInt', './helper-mockRandom'], function (randInt, mockRandom){

    describe('random/randInt()', function(){

        it('returns a random number at each call', function(){
            mockRandom();

            var a = randInt(),
                b = randInt(),
                c = randInt();
            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( c ).not.toEqual( NaN );
            expect( a === b && b === c ).toBe(false);

            mockRandom.end();
        });

        it('returns a same number if mix/max are same', function(){
            mockRandom();

            var a = randInt(1, 1),
                b = randInt(1, 1),
                c = randInt(1, 1);

            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( a ).not.toEqual( NaN );
            expect( a ).toEqual( b );
            expect( b ).toEqual( a );

            mockRandom.end();
        });

        it('returns a random number inside range', function(){
            mockRandom();

            var a = randInt(0, 9999), 
                b = randInt(0, 9999),
                c = randInt(0, 9999);
            expect( a ).toBeLessThan(9999.01);
            expect( a ).toBeGreaterThan(-0.01);
            expect( b ).toBeLessThan(9999.01);
            expect( b ).toBeGreaterThan(-0.01);
            expect( c ).toBeLessThan(9999.01);
            expect( c ).toBeGreaterThan(-0.01);

            expect( a === b && b === c ).toBe(false);

            mockRandom.end();
        });

        it('shouldn\t be biased', function () {
            // Do not mock, since it needs a good non-biased random number
            // generator.

            var c1 = 0,
                c_1 = 0,
                c0 = 0,
                n = 6000,
                rnd;

            while (n--) {
                rnd = randInt(-1, 1);
                if ( rnd === 0) {
                    c0++;
                } else if ( rnd === 1 ){
                    c1++;
                } else if ( rnd === -1) {
                    c_1++;
                } else {
                    expect(rnd).toBe('fail, out of range.');
                }
            }

            expect( c0 ).toBeLessThan( 2200 );
            expect( c0 ).toBeGreaterThan( 1800 );
            expect( c1 ).toBeLessThan( 2200 );
            expect( c1 ).toBeGreaterThan( 1800 );
            expect( c_1 ).toBeLessThan( 2200 );
            expect( c_1 ).toBeGreaterThan( 1800 );

        });

        it('shouldn\t be biased 2', function () {

            var c1 = 0,
                c0 = 0,
                n = 5000,
                rnd;

            while (n--) {
                rnd = randInt(0, 1);
                if ( rnd === 0) {
                    c0++;
                } else if ( rnd === 1 ){
                    c1++;
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
