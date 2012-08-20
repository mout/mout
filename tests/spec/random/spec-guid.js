define(['src/random/guid'], function (guid) {

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

            // match guid format e.g. 3F2504E0-4F89-11D3-9A0C-0305E82C3301
            expect( q ).toMatch(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/);
            expect( q ).not.toBeUndefined();
            expect( q ).toDiffAny(w, e, r, t, y);
        });

    });
});
