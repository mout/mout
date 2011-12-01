define(['src/string/upperCase'], function (upperCase) {

    describe('it should convert string to lower case', function () {
        expect( upperCase('FOO') ).toEqual( 'FOO' );
        expect( upperCase('Bar') ).toEqual( 'BAR' );
        expect( upperCase('ipsum') ).toEqual( 'IPSUM' );
    });

    describe('it should return empty string if null or undefined', function () {
        expect( upperCase() ).toEqual( '' );
        expect( upperCase(null) ).toEqual( '' );
    });

});
