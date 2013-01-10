define(['mout/random/guid'], function (guid) {

    describe('random/guid()', function(){

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

        it('returns a random guid each call', function(){
            var q = guid();
            var w = guid();
            var e = guid();
            var r = guid();
            var t = guid();
            var y = guid();

            // match guid v4 format e.g. 3f2504e0-2f89-41d3-9a0c-0305e82c3301
            expect( q ).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
            expect( q ).not.toBeUndefined();
            expect( q ).toDiffAny(w, e, r, t, y);
        });

    });
});
