define(['mout/string/unCamelCase'], function (unCamelCase) {

    describe('string/unCamelCase()', function(){

        it('should add space between camelCase text', function(){
           expect( unCamelCase('loremIpsumDolor') ).toEqual('lorem ipsum dolor');
           expect( unCamelCase('lorem IpsumDolor') ).toEqual('lorem ipsum dolor');
        });

        it('should use specified separator', function(){
            var str = 'loremIpsumDolor';
            expect( unCamelCase(str, '-') ).toEqual('lorem-ipsum-dolor');
        });

        it('should treat null as empty string', function(){
            expect( unCamelCase(null) ).toBe('');
        });

        it('should treat undefined as empty string', function(){
            expect( unCamelCase(void 0) ).toBe('');
        });

    });

});
