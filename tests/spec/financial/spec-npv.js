define(['src/financial/npv', 'src/number/enforcePrecision'], function (npv, enforcePrecision) {

    describe('financial/npv()', function () {

        beforeEach(function(){
            this.addMatchers({
                toFinanciallyEqual : function(val){
                    return (enforcePrecision(this.actual, 2) === val);
                }
            });
        });


        it('should return the net present value', function () {

            var vals = [-100, 5, 10, 12, 20, 30];

            expect( npv(0.06, vals) ).toFinanciallyEqual( -35.89 );
            expect(  npv(0.10, vals) ).toFinanciallyEqual( -41.71 );

            vals.push(40, 55);

            expect(  npv(0.06, vals) ).toFinanciallyEqual( 25.22 );
            expect(  npv(0.10, vals) ).toFinanciallyEqual( 4.47 );


            // based on wikipedia example
            // http://en.wikipedia.org/wiki/Net_present_value#Example
            vals = [25000, 25000, 25000, 25000, 25000, 25000];

            expect(  npv(0.1, vals) - 100000 ).toFinanciallyEqual( 8881.52 );
        });

        it('should work if rate is zero', function () {
            expect( npv(0, [100, 100, 100]) ).toFinanciallyEqual( 300 );
        });

    });

});
