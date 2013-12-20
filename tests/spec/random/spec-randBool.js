define(['mout/random/randBool', './helper-mockRandom'], function(randBool, mockRandom){

    describe('random/randBool', function(){

        beforeEach(function(){
            mockRandom.start([0.6, 0.1, 0.7, 0.51, 0]);
        });

        afterEach(function(){
            mockRandom.end();
        });

        it('should return a random boolean value at each call', function(){
            expect( randBool() ).toBe(true);
            expect( randBool() ).toBe(false);
            expect( randBool() ).toBe(true);
            expect( randBool() ).toBe(true);
            expect( randBool() ).toBe(false);
        });

    });

});
