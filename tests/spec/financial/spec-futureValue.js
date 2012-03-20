define(['src/financial/futureValue', 'src/number/enforcePrecision'], function (futureValue, enforcePrecision) {

    describe('financial/futureValue()', function () {

        beforeEach(function(){
            this.addMatchers({
                toFinanciallyEqual : function(val){
                    return (enforcePrecision(this.actual, 2) === val);
                }
            });
        });


        it('should calculate the future value of an investment based on periodic, constant payments at a constant interest rate.', function () {

            expect( futureValue(0.12, 12, 1000) ).toFinanciallyEqual( 24133.13 );
            expect( futureValue(0.12, 12, 1000, null, true) ).toFinanciallyEqual( 27029.11 );

            expect( futureValue(0.06, 40, 2000) ).toFinanciallyEqual( 309523.93 );
            expect( futureValue(0.06, 40, 2000, null, true) ).toFinanciallyEqual( 328095.37 );

            expect( futureValue(0.06, 25, 2400) ).toFinanciallyEqual( 131674.83 );
            expect( futureValue(0.06, 25, 2400, null, true) ).toFinanciallyEqual( 139575.32 );

        });

        it('presentValue should compound over the periods', function () {

            expect( futureValue(0.12, 12, 1000, 500) ).toFinanciallyEqual( 26081.12 );
            expect( futureValue(0.12, 12, 1000, 500, true) ).toFinanciallyEqual( 28977.10 );

            expect( futureValue(0.06, 25, 2400, 10000) ).toFinanciallyEqual( 174593.54 );
            expect( futureValue(0.06, 25, 2400, 10000, true) ).toFinanciallyEqual( 182494.03 );

        });

        it('should return sum of payments if rate is zero', function () {
            expect( futureValue(0.0, 25, 2400) ).toFinanciallyEqual( 60000 );
            expect( futureValue(0.0, 25, 2400, null, true) ).toFinanciallyEqual( 60000 );
        });

        it('should decrement the value if rate is negative (deflation)', function () {
            expect( futureValue(-0.06, 25, 2400) ).toFinanciallyEqual( 31483.59  );
            expect( futureValue(-0.06, 25, 2400, null, true) ).toFinanciallyEqual( 29594.58  );
        });

    });


});
