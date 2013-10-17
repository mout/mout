define(['mout/random/guid', './helper-mockRandom'], function (guid, mockRandom) {

    describe('random/guid()', function(){

        beforeEach(function(){
            mockRandom.start();
        });

        afterEach(function(){
            mockRandom.end();
        });

        it('returns a random guid each call', function(){
            var a = guid();
            var b = guid();

            // match guid v4 format e.g. 3f2504e0-2f89-41d3-9a0c-0305e82c3301
            expect( a ).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[ab89][a-f0-9]{3}-[a-f0-9]{12}/);
            expect( a ).not.toEqual( b );
        });

    });
});
