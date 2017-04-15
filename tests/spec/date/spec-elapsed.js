define(['mout/date/elapsed'], function(elapsed){

    describe('date/elapsed', function(){

        /**
        * Today is April 4, 2013.
        */

        it('should return a object containing the total years, months and days elapsed ', function () {
            expect( elapsed(new Date(1991, 6, 18)) ).toEqual({
                years: 21,  // 2013 - 1991 - 1* (*because we're in april yet)
                months: 8,  // 18/07 - 04/04 = 8 full months (ago, set, out, nov, dez, jan, fev, mar)
                days: 16    // 18 - 4 (today), to complete a month at april
            });
        });

        it('should be underage', function () {
            expect( elapsed(new Date(1995, 4)).years ).toBeLessThan( 18 );
        });

        it('should have a beer', function () {
            expect( elapsed(new Date(1995, 3, 4)).years ).toBeGreaterThan( 17 );
        });
    });
});
