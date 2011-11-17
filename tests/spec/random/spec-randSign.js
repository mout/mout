define(['src/random/randSign'], function (randSign) {

    describe('random/randSign()', function(){

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
            var q = randSign();
            var w = randSign();
            var e = randSign();
            var r = randSign();
            var t = randSign();
            var y = randSign();
            var a = randSign();
            var s = randSign();
            var d = randSign();
            var f = randSign();
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).not.toEqual( NaN );
            expect( q ).toDiffAny(w, e, r, t, y, a, s, d, f);
        });

        it('shouldn\t be biased', function () {

            var c1 = 0,
                c_1 = 0,
                n = 1000,
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

            expect( c_1 ).toBeLessThan( 540 );
            expect( c_1 ).toBeGreaterThan( 460 );
            expect( c1 ).toBeLessThan( 540 );
            expect( c1 ).toBeGreaterThan( 460 );

        });

    });
});
