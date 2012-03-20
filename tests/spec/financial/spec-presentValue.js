define(['src/financial/presentValue', 'src/number/enforcePrecision'], function (presentValue, enforcePrecision) {

    describe('financial/futureValue()', function () {

        beforeEach(function(){
            this.addMatchers({
                toFinanciallyEqual : function(val){
                    return (enforcePrecision(this.actual, 2) === val);
                }
            });
        });


        it('should return the present value of an investment.', function () {

            expect( presentValue(0.12, 12, 1000) ).toFinanciallyEqual( 6194.37 );
            expect( presentValue(0.12, 12, 1000, null, true) ).toFinanciallyEqual( 6937.70 );

            expect( presentValue(0.06, 40, 2000) ).toFinanciallyEqual( 30092.59 );
            expect( presentValue(0.06, 40, 2000, null, true) ).toFinanciallyEqual( 31898.15 );

            expect( presentValue(0.06, 25, 2400) ).toFinanciallyEqual( 30680.05 );
            expect( presentValue(0.06, 25, 2400, null, true) ).toFinanciallyEqual( 32520.86 );

        });

        it('should consider futureValue', function () {
            expect( presentValue(0.12, 12, 1000, 500) ).toFinanciallyEqual( 6322.71 );
            expect( presentValue(0.12, 12, 1000, 500, true) ).toFinanciallyEqual( 7066.04 );

            expect( presentValue(0.06, 40, 2000, 10000) ).toFinanciallyEqual( 31064.82 );
            expect( presentValue(0.06, 40, 2000, 10000, true) ).toFinanciallyEqual( 32870.37 );
        });

        it('should return sum of payments if rate is zero', function () {
            expect( presentValue(0, 25, 2400) ).toFinanciallyEqual( 60000 );
            expect( presentValue(0, 25, 2400, null, true) ).toFinanciallyEqual( 60000 );
        });

        it('should return more money if rate is negative', function () {
            expect( presentValue(-0.06, 25, 2400) ).toFinanciallyEqual( 147872.69 );
            expect( presentValue(-0.06, 25, 2400, null, true) ).toFinanciallyEqual( 139000.33 );
        });

    });


});
