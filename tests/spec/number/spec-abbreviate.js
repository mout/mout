define(['src/number/abbreviate'], function (abbr) {

    describe('number/abbreviate', function () {

        it('should abbreviate numbers to thousands, millions and billions', function () {
            expect( abbr(15   )).toEqual( '0K'   );
            expect( abbr(55   )).toEqual( '0.1K' );
            expect( abbr(500  )).toEqual( '0.5K' );
            expect( abbr(910  )).toEqual( '0.9K' );

            expect( abbr(999    )).toEqual( '1K'    );
            expect( abbr(999.9  )).toEqual( '1K'    );
            expect( abbr(999.99 )).toEqual( '1K'    );
            expect( abbr(1000   )).toEqual( '1K'    );
            expect( abbr(1000.1 )).toEqual( '1K'    );
            expect( abbr(1001   )).toEqual( '1K'    );
            expect( abbr(1100   )).toEqual( '1.1K'  );
            expect( abbr(5721   )).toEqual( '5.7K'  );

            expect( abbr(999000    )).toEqual( '999K'   );
            expect( abbr(999900    )).toEqual( '999.9K' );
            expect( abbr(999990    )).toEqual( '1M'     ); // round
            expect( abbr(999999    )).toEqual( '1M'     );
            expect( abbr(1000000   )).toEqual( '1M'     );
            expect( abbr(1000000.1 )).toEqual( '1M'     );
            expect( abbr(1000101   )).toEqual( '1M'     );
            expect( abbr(1100000   )).toEqual( '1.1M'   );
            expect( abbr(5721000   )).toEqual( '5.7M'   );
            expect( abbr(9876543   )).toEqual( '9.9M'   ); // round

            expect( abbr(999000000    )).toEqual( '999M'   );
            expect( abbr(999900000    )).toEqual( '999.9M' );
            expect( abbr(999990000    )).toEqual( '1B'     ); //round
            expect( abbr(999999999    )).toEqual( '1B'     );
            expect( abbr(1000000000   )).toEqual( '1B'     );
            expect( abbr(1000000000.1 )).toEqual( '1B'     );
            expect( abbr(1000000001   )).toEqual( '1B'     );
            expect( abbr(1100000000   )).toEqual( '1.1B'   );
            expect( abbr(5721000000   )).toEqual( '5.7B'   );
            expect( abbr(9876543210   )).toEqual( '9.9B'   ); // round
        });


        it('should allow custom nDigits', function () {
            expect( abbr(15  , 2 )).toEqual( '0.02K' );
            expect( abbr(55  , 2 )).toEqual( '0.06K' );
            expect( abbr(500 , 2 )).toEqual( '0.5K'  );
            expect( abbr(910 , 2 )).toEqual( '0.91K' );

            expect( abbr(999    , 2 )).toEqual( '1K'    );
            expect( abbr(999.9  , 2 )).toEqual( '1K'    );
            expect( abbr(999.99 , 2 )).toEqual( '1K'    );
            expect( abbr(1000   , 2 )).toEqual( '1K'    );
            expect( abbr(1000.1 , 2 )).toEqual( '1K'    );
            expect( abbr(1001   , 2 )).toEqual( '1K'    );
            expect( abbr(1100   , 2 )).toEqual( '1.1K'  );
            expect( abbr(5721   , 2 )).toEqual( '5.72K' );

            expect( abbr(999000    , 2 )).toEqual( '999K'   );
            expect( abbr(999900    , 2 )).toEqual( '999.9K' );
            expect( abbr(999990    , 2 )).toEqual( '999.99K');
            expect( abbr(999999    , 2 )).toEqual( '1M'     ); //round
            expect( abbr(1000000   , 2 )).toEqual( '1M'     );
            expect( abbr(1000000.1 , 2 )).toEqual( '1M'     );
            expect( abbr(1000001   , 2 )).toEqual( '1M'     );
            expect( abbr(1100000   , 2 )).toEqual( '1.1M'   );
            expect( abbr(5721000   , 2 )).toEqual( '5.72M'  );
            expect( abbr(9876543   , 2 )).toEqual( '9.88M'  ); //round

            expect( abbr(999000000    , 2 )).toEqual( '999M'   );
            expect( abbr(999900000    , 2 )).toEqual( '999.9M' );
            expect( abbr(999990000    , 2 )).toEqual( '999.99M');
            expect( abbr(999999999    , 2 )).toEqual( '1B'     ); //round
            expect( abbr(1000000000   , 2 )).toEqual( '1B'     );
            expect( abbr(1000000000.1 , 2 )).toEqual( '1B'     );
            expect( abbr(1000000001   , 2 )).toEqual( '1B'     );
            expect( abbr(1100000000   , 2 )).toEqual( '1.1B'   );
            expect( abbr(5721000000   , 2 )).toEqual( '5.72B'  );
            expect( abbr(9876543210   , 2 )).toEqual( '9.88B'  ); // round
        });

        it('should allow custom dictionary', function () {
            var dict = {
                thousand : ' mil',
                million : ' Mi',
                billion : ' Bi'
            };

            expect( abbr(123456, 1, dict) ).toEqual( '123.5 mil' );
            expect( abbr(12345678, 1, dict) ).toEqual( '12.3 Mi' );
            expect( abbr(1234567890, 1, dict) ).toEqual( '1.2 Bi' );

        });

    });
});
