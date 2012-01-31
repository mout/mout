define(['src/random/randInt'], function (randInt) {

    describe('random/randInt()', function(){

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
            var q = randInt();
            var w = randInt();
            var e = randInt();
            var r = randInt();
            var t = randInt();
            var y = randInt();
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).not.toEqual( NaN );
            expect( q ).toDiffAny(w, e, r, t, y);
        });

        it('returns a same number if mix/max are same', function(){
            var q = randInt(1, 1);
            var w = randInt(1, 1);
            var e = randInt(1, 1);
            var r = randInt(1, 1);
            var t = randInt(1, 1);
            var y = randInt(1, 1);
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).not.toEqual( NaN );
            expect( q ).not.toDiffAny(w, e, r, t, y);
        });

        it('returns a random number inside range', function(){
            var q = randInt(0, 9999);
            var w = randInt(0, 9999);
            var e = randInt(0, 9999);
            var r = randInt(0, 9999);
            var t = randInt(0, 9999);
            var y = randInt(0, 9999);
            expect( q ).toBeLessThan(9999.01);
            expect( q ).toBeGreaterThan(-0.01);
            expect( w ).toBeLessThan(9999.01);
            expect( w ).toBeGreaterThan(-0.01);
            expect( e ).toBeLessThan(9999.01);
            expect( e ).toBeGreaterThan(-0.01);
            expect( r ).toBeLessThan(9999.01);
            expect( r ).toBeGreaterThan(-0.01);
            expect( t ).toBeLessThan(9999.01);
            expect( t ).toBeGreaterThan(-0.01);
            expect( y ).toBeLessThan(9999.01);
            expect( y ).toBeGreaterThan(-0.01);

            expect( q ).toDiffAny(w, e, r, t, y);
        });

        it('shouldn\t be biased', function () {

            var c1 = 0,
                c_1 = 0,
                c0 = 0,
                n = 1000,
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

            expect( c0 ).toBeLessThan( 375 );
            expect( c0 ).toBeGreaterThan( 290 );
            expect( c1 ).toBeLessThan( 375 );
            expect( c1 ).toBeGreaterThan( 290 );
            expect( c_1 ).toBeLessThan( 375 );
            expect( c_1 ).toBeGreaterThan( 290 );

        });

        it('shouldn\t be biased 2', function () {

            var c1 = 0,
                c0 = 0,
                n = 1000,
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

            expect( c0 ).toBeLessThan( 550 );
            expect( c0 ).toBeGreaterThan( 450 );
            expect( c1 ).toBeLessThan( 550 );
            expect( c1 ).toBeGreaterThan( 450 );

        });

    });
});
