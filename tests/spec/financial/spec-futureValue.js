define(['src/financial/futureValue', 'src/number/enforcePrecision'], function (futureValue, enforcePrecision) {

    describe('financial/futureValue()', function () {

        it('should calculate the future value of an investment based on periodic, constant payments at a constant interest rate.', function () {

            expect( enforcePrecision(futureValue(0.12, 12, 1000), 2) ).toEqual( 24133.13 );
            expect( enforcePrecision(futureValue(0.12, 12, 1000, true), 2) ).toEqual( 27029.11 );

            expect( enforcePrecision(futureValue(0.06, 40, 2000), 2) ).toEqual( 309523.93 );
            expect( enforcePrecision(futureValue(0.06, 40, 2000, true), 2) ).toEqual( 328095.37 );

            expect( enforcePrecision(futureValue(0.06, 25, 2400), 2) ).toEqual( 131674.83 );
            expect( enforcePrecision(futureValue(0.06, 25, 2400, true), 2) ).toEqual( 139575.32 );

        });

        it('should return sum of payments if rate is zero', function () {
            expect( enforcePrecision(futureValue(0.0, 25, 2400), 2) ).toEqual( 60000 );
            expect( enforcePrecision(futureValue(0.0, 25, 2400, true), 2) ).toEqual( 60000 );
        });

        it('should decrement the value if rate is negative (deflation)', function () {
            expect( enforcePrecision(futureValue(-0.06, 25, 2400), 2) ).toEqual( 31483.59  );
            expect( enforcePrecision(futureValue(-0.06, 25, 2400, true), 2) ).toEqual( 29594.58  );
        });

    });


});
