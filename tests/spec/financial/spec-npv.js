define(['src/financial/npv', 'src/number/enforcePrecision'], function (npv, enforcePrecision) {

    describe('financial/npv()', function () {

        it('should return the net present value', function () {

            var vals = [-100, 5, 10, 12, 20, 30];

            expect( enforcePrecision( npv(0.06, vals), 2 ) ).toEqual( -35.89 );
            expect( enforcePrecision( npv(0.10, vals), 2 ) ).toEqual( -41.71 );

            vals.push(40, 55);

            expect( enforcePrecision( npv(0.06, vals), 2 ) ).toEqual( 25.22 );
            expect( enforcePrecision( npv(0.10, vals), 2 ) ).toEqual( 4.47 );


            // based on wikipedia example
            // http://en.wikipedia.org/wiki/Net_present_value#Example
            vals = [25000, 25000, 25000, 25000, 25000, 25000];

            expect( enforcePrecision( npv(0.1, vals) - 100000, 2) ).toEqual( 8881.52 );
        });


    });


});

