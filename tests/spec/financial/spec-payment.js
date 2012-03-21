define(['src/financial/payment', 'src/number/enforcePrecision'], function (payment, enforcePrecision) {

    describe('financial/payment()', function () {

        beforeEach(function(){
            this.addMatchers({
                toFinanciallyEqual : function(val){
                    return (enforcePrecision(this.actual, 2) === val);
                }
            });
        });


        it('payment should be based on a constant interest rate', function () {
            expect( payment(0.05, 10, 1000) ).toFinanciallyEqual( 129.50 );
            expect( payment(6.5/100/12, 30*12, 200000) ).toFinanciallyEqual( 1264.14 );
        });

        it('isDue should change behavior', function () {
            expect( payment(0.05, 10, 1000, null, true) ).toFinanciallyEqual( 123.34 );
            expect( payment(6.5/100/12, 30*12, 200000, null, true) ).toFinanciallyEqual( 1257.33 );
        });

        it('futureValue should be computed into the result', function () {
            expect( payment(0.05, 10, 1000, 500) ).toFinanciallyEqual( 169.26 );
            expect( payment(0.05, 10, 1000, 500, true) ).toFinanciallyEqual( 161.20 );
        });

        it('should be zero if presentValue is zero', function () {
            expect( payment(0.05, 10, 0) ).toFinanciallyEqual( 0 );
        });

        it('shouldn\'t be zero if futureValue is specified', function () {
            expect( payment(0.05, 10, 0, 500) ).toFinanciallyEqual( 39.75 );
        });

        it('should work with negative rate', function () {
            expect( payment(-0.05, 10, 1000) ).toFinanciallyEqual( 74.61 );
            expect( payment(-0.05, 10, 1000, 500) ).toFinanciallyEqual( 136.91 );
            expect( payment(-0.05, 10, 1000, 500, true) ).toFinanciallyEqual( 144.12 );
            expect( payment(-0.05, 10, 0, 500) ).toFinanciallyEqual( 62.30 );
            expect( payment(-0.05, 10, 0, 500, true) ).toFinanciallyEqual( 65.58 );
        });

        it('should work with zero rate', function () {
            expect( payment(0, 10, 1000) ).toFinanciallyEqual( 100 );
            expect( payment(0, 10, 1000, 500) ).toFinanciallyEqual( 150 );
        });

        it('should work with negative values', function () {
            expect( payment(0.05, 10, 1000, -500) ).toFinanciallyEqual( 89.75 );
            expect( payment(0.05, 10, -1000, 500) ).toFinanciallyEqual( -89.75 );
            expect( payment(0.05, 10, -1000, -500) ).toFinanciallyEqual( -169.26 );
        });

    });

});
