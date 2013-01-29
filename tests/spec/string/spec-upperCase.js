define(['mout/string/upperCase'], function (upperCase) {

    describe('string/upperCase()', function(){

        it('should convert string to lower case', function () {
            expect( upperCase('FOO') ).toEqual( 'FOO' );
            expect( upperCase('Bar') ).toEqual( 'BAR' );
            expect( upperCase('ipsum') ).toEqual( 'IPSUM' );
        });

        it('should treat null as empty string', function(){
            expect( upperCase(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( upperCase(void 0) ).toBe('');
        });

    });

});
