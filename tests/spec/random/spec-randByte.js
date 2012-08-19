define(['src/random/randByte'], function (randByte) {

    describe('random/randByte()', function(){

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

        it('returns a random byte at each call', function(){
            var q = randByte();
            var w = randByte();
            var e = randByte();
            var r = randByte();
            var t = randByte();
            var y = randByte();
            var a = randByte();
            var s = randByte();
            var d = randByte();
            var f = randByte();
            expect( q ).not.toBeUndefined();
            expect( parseInt(q,16) ).toBeGreaterThan(0);
            expect( parseInt(q,16) ).toBeLessThan(256);
            expect( q ).not.toEqual( NaN );
            expect( q ).toDiffAny(w, e, r, t, y, a, s, d, f);
        });

    });
});
