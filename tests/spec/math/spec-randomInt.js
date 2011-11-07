define(['src/math/randomInt'], function (randomInt) {

    describe('math/randomInt()', function(){

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

        it('returns a random number at each call', function(){
            var q = randomInt();
            var w = randomInt();
            var e = randomInt();
            var r = randomInt();
            var t = randomInt();
            var y = randomInt();
            expect( q ).not.toBeUndefined();
            expect( q ).not.toEqual( Infinity );
            expect( q ).toDiffAny(w, e, r, t, y);
        });

        it('returns a random number inside range', function(){
            var q = randomInt(0, 9999);
            var w = randomInt(0, 9999);
            var e = randomInt(0, 9999);
            var r = randomInt(0, 9999);
            var t = randomInt(0, 9999);
            var y = randomInt(0, 9999);
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

        it('snap to min or max', function(){
            var q = randomInt(0, 10.5, true);
            var w = randomInt(0.5, 10, true);
            var e = randomInt(0, 10, true);
            var r = randomInt(0, 10, true);
            var t = randomInt(0, 10, true);
            var y = randomInt(0, 10, true);
            var u = randomInt(0, 10, true);
            var i = randomInt(0, 10, true);
            var o = randomInt(0, 10, true);
            var p = randomInt(0, 10, true);

            expect( q ).toSnap(0, 10);
            expect( w ).toSnap(0, 10);
            expect( e ).toSnap(0, 10);
            expect( r ).toSnap(0, 10);
            expect( t ).toSnap(0, 10);
            expect( y ).toSnap(0, 10);
            expect( u ).toSnap(0, 10);
            expect( i ).toSnap(0, 10);
            expect( o ).toSnap(0, 10);
            expect( p ).toSnap(0, 10);

            expect( q ).toDiffAny(w, e, r, t, y, u, i, o, p);
        });

    });
});
