define(['src/financial/compoundInterest', 'src/number/enforcePrecision'], function (compoundInterest, enforcePrecision) {

    describe('financial/compoundInterest()', function () {

        beforeEach(function(){
            this.addMatchers({
                toFinanciallyEqual : function(val){
                    return (enforcePrecision(this.actual, 2) === val);
                }
            });
        });


        it('should calculate the compound interest', function () {

            expect( compoundInterest(0.1, 20, 100) ).toFinanciallyEqual( 672.75 );
            expect( compoundInterest(0.1, 3, 100) ).toFinanciallyEqual( 133.1 );

        });

    });

});
