define(['src/financial/compoundInterest', 'src/number/enforcePrecision'], function (compoundInterest, enforcePrecision) {

    describe('financial/compoundInterest()', function () {

        it('should calculate the compound interest', function () {

            expect( enforcePrecision(compoundInterest(100, 0.1, 20), 2) ).toEqual( 672.75 );
            expect( enforcePrecision(compoundInterest(100, 0.1, 3), 2) ).toEqual( 133.1 );

        });

    });

});
