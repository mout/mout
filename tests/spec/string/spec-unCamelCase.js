define(['src/string/unCamelCase'], function (unCamelCase) {

    describe('string/unCamelCase()', function(){

        it('should add space between camelCase text', function(){
           expect( unCamelCase('loremIpsumDolor') ).toEqual('lorem ipsum dolor');
           expect( unCamelCase('lorem IpsumDolor') ).toEqual('lorem ipsum dolor');
        });

    });
});
