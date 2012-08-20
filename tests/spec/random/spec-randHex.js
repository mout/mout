define(['src/random/randHex'], function (randHex) {

    describe('random/randHex()', function () {

        beforeEach(function(){
            this.addMatchers({
                toDiffAny : function(vals){
                    var n = vals.length;
                    while(n--){
                        if(this.actual !== vals[n]) return true;
                    }
                    return false;
                }
            });
        });


        it('should return a random hexadecimal value', function () {
            var results = [];
            var n = 16;
            while (n--){
                results[n] = randHex();
            }
            expect( randHex() ).toDiffAny( results );
        });

        it('should return a 6 char length hex value by default', function () {
            expect( randHex().length ).toBe( 6 );
            expect( randHex(0).length ).toBe( 6 );
        });

        it('should allow custom length', function () {
            expect( randHex(2).length ).toEqual( 2 );
            expect( randHex(5).length ).toEqual( 5 );
            expect( randHex(10).length ).toEqual( 10 );
        });

        it('should handle negative size', function () {
            expect( randHex(-5).length ).toEqual( 6 );
        });

    });

});
