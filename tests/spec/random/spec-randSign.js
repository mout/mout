define(['mout/random/randSign', './helper-mockRandom'], function (randSign, mockRandom) {

    describe('random/randSign()', function(){

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function(){
            mockRandom.end();
        });

        it('returns a random number at each call', function(){
            var a = randSign(),
                b = randSign();

            expect( a ).not.toBeUndefined();
            expect( a ).not.toEqual( Infinity );
            expect( a ).not.toEqual( NaN );
            expect( a ).not.toEqual( b );
        });

        it('shouldn\t be biased', function () {
            var c1 = 0,
                c_1 = 0,
                n = 10,
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

            expect( c_1 ).toEqual(5);
            expect( c1 ).toEqual(5);
        });

    });
});
