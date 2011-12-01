define(['src/string/lowerCase'], function (lowerCase) {

    describe('it should convert string to lower case', function () {
        expect( lowerCase('FOO') ).toEqual( 'foo' );
        expect( lowerCase('Bar') ).toEqual( 'bar' );
        expect( lowerCase('ipsum') ).toEqual( 'ipsum' );
    });

    describe('it should return empty string if null or undefined', function () {
        expect( lowerCase() ).toEqual( '' );
        expect( lowerCase(null) ).toEqual( '' );
    });

});
