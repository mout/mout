define(['src/number/currencyFormat'], function (currencyFormat) {

    describe('number/currencyFormat()', function () {

        it('should format numbers into a currency-like format', function () {
            expect( currencyFormat(0) ).toEqual( '0.00' );
            expect( currencyFormat(1) ).toEqual( '1.00' );
            expect( currencyFormat(999) ).toEqual( '999.00' );
            expect( currencyFormat(1000) ).toEqual( '1,000.00' );
            expect( currencyFormat(1000000) ).toEqual( '1,000,000.00' );
        });

        it('should handle negative numbers', function () {
            expect( currencyFormat(-10) ).toEqual( '-10.00' );
            expect( currencyFormat(-1000) ).toEqual( '-1,000.00' );
            expect( currencyFormat(-100000) ).toEqual( '-100,000.00' );
        });

        it('should allow custom separators', function () {
            expect( currencyFormat(0, ',', '.') ).toEqual( '0,00' );
            expect( currencyFormat(1, ',', '.') ).toEqual( '1,00' );
            expect( currencyFormat(999, ',', '.') ).toEqual( '999,00' );
            expect( currencyFormat(1000, ',', '.') ).toEqual( '1.000,00' );
            expect( currencyFormat(1000000, ',', '.') ).toEqual( '1.000.000,00' );
        });

        it('should allow custom number of decimal digits', function () {
            expect( currencyFormat(1, null, null, 3) ).toEqual( '1.000' );
            expect( currencyFormat(999, null, null, 3) ).toEqual( '999.000' );
            expect( currencyFormat(1000, null, null, 3) ).toEqual( '1,000.000' );
        });

    });

});
