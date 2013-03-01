define(['mout/random/random'], function(random){

    describe('random/random', function(){

        it('should return a number from 0 till 1', function(){
            var nums = [];
            var n = 500;
            var r;
            while (n--) {
                r = random();
                expect( r ).toBeGreaterThan(-0.00000001);
                expect( r ).toBeLessThan(1.000000001);
                nums.push(r);
            }

            var areSame = true,
                first = nums[0];
            n = 0;
            while (++n < nums.length) {
                if (nums[n] !== first) {
                    areSame = false;
                    break;
                }
            }

            expect( areSame ).toBe(false);
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
