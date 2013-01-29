define(['mout/string/properCase'], function (properCase) {

    describe('string/properCase()', function(){

        it('should uppercase first char of each word and lowercase others', function(){
            expect( properCase('lorem iPSum dolor') ).toEqual('Lorem Ipsum Dolor');
        });

        it('should treat null as empty string', function(){
            expect( properCase(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( properCase(void 0) ).toBe('');
        });

    });

});
