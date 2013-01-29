define(['mout/string/lowerCase'], function (lowerCase) {

    describe('string/lowerCase()', function(){

        it('should convert string to lower case', function () {
            expect( lowerCase('FOO') ).toEqual( 'foo' );
            expect( lowerCase('Bar') ).toEqual( 'bar' );
            expect( lowerCase('ipsum') ).toEqual( 'ipsum' );
        });

        it('should treat null as empty string', function(){
            expect( lowerCase(null) ).toEqual('');
        });

        it('should treat undefined as empty string', function(){
            expect( lowerCase(void 0) ).toEqual('');
        });

    });

});
