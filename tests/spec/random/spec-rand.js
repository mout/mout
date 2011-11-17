define(['src/random/rand'], function (rand) {

    describe('random/rand()', function(){

        beforeEach(function(){
            this.addMatchers({
                toSnap : function(min, max){
                    return this.actual === min || this.actual === max;
                },
                toDiffAny : function(vals){
                    var n = arguments.length;
                    while(n--){
                        if(this.actual !== arguments[n]) return true;
                    }
                    return false;
                }
            });
        });

        it('returns a rand number at each call', function(){
            var q = rand();
            var w = rand();
            var e = rand();
            var r = rand();
            var t = rand();
            var y = rand();
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).toDiffAny(w, e, r, t, y);
        });

        it('returns a rand number inside range', function(){
            var q = rand(0, 9999);
            var w = rand(0, 9999);
            var e = rand(0, 9999);
            var r = rand(0, 9999);
            var t = rand(0, 9999);
            var y = rand(0, 9999);
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

    });
});
