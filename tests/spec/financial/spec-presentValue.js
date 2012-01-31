define(['src/financial/presentValue', 'src/number/enforcePrecision'], function (presentValue, enforcePrecision) {

    describe('financial/futureValue()', function () {

        it('should return the present value of an investment.', function () {

            expect( enforcePrecision(presentValue(0.12, 12, 1000), 2) ).toEqual( 6194.37 );
            expect( enforcePrecision(presentValue(0.12, 12, 1000, true), 2) ).toEqual( 6937.70 );

            expect( enforcePrecision(presentValue(0.06, 40, 2000), 2) ).toEqual( 30092.59 );
            expect( enforcePrecision(presentValue(0.06, 40, 2000, true), 2) ).toEqual( 31898.15 );

            expect( enforcePrecision(presentValue(0.06, 25, 2400), 2) ).toEqual( 30680.05 );
            expect( enforcePrecision(presentValue(0.06, 25, 2400, true), 2) ).toEqual( 32520.86 );


        });

    });


});
