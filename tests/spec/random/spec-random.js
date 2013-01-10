define(['mout/random/random'], function(random){

    describe('random/random', function(){

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


        it('should return a number from 0 till 1', function(){
            var nums = [];
            var n = 15;
            var r;
            while (n--) {
                r = random();
                expect( r ).toBeGreaterThan(-0.00000001);
                expect( r ).toBeLessThan(1.000000001);
                // there is a very small chance of returning same value in
                // a row, so we just compare it against the last value
                expect( r ).not.toEqual( nums[nums.length? nums.length - 1 : 0] );
                nums.push(r);
            }
        });


        it('should expose the PRNG and it should default it to Math.random', function () {
            expect( random.get ).toBe( Math.random );
        });


        it('should affect the behavior if we swap the PRNG', function () {
            var n = 0;
            random.get = function(){
                return ++n % 2? 0 : 1;
            };
            expect( random() ).toEqual( 0 );
            expect( random() ).toEqual( 1 );
            expect( random() ).toEqual( 0 );
            expect( random() ).toEqual( 1 );
            random.get = Math.random; // reset
        });

    });

});
