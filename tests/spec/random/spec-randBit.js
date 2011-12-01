define(['src/random/randBit'], function (randBit) {

    describe('random/randBit()', function(){

        beforeEach(function(){
            this.addMatchers({
                toDiffAny : function(vals){
                    var n = arguments.length;
                    while(n--){
                        if(this.actual !== arguments[n]) return true;
                    }
                    return false;
                }
            });
        });

        it('returns a random number at each call', function(){
            var q = randBit();
            var w = randBit();
            var e = randBit();
            var r = randBit();
            var t = randBit();
            var y = randBit();
            var a = randBit();
            var s = randBit();
            var d = randBit();
            var f = randBit();
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).not.toEqual( NaN );
            expect( q ).toDiffAny(w, e, r, t, y, a, s, d, f);
        });

        it('shouldn\t be biased', function () {

            var c1 = 0,
                c0 = 0,
                n = 1000,
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

            expect( c0 ).toBeLessThan( 560 );
            expect( c0 ).toBeGreaterThan( 440 );
            expect( c1 ).toBeLessThan( 560 );
            expect( c1 ).toBeGreaterThan( 440 );

        });

    });
});
