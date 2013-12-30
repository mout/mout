define(['mout/string/removeNonWord'], function (removeNonWord) {

    describe('string/removeNonWord()', function(){

        it('should remove non word chars', function(){
            var str = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum\xD7';
            expect( removeNonWord(str) ).toEqual('lorem _- ipsum');
        });

        it('should treat null as empty string', function(){
            expect( removeNonWord(null) ).toEqual('');
        });

        it('should treat undefined as empty string', function(){
            expect( removeNonWord(void 0) ).toEqual('');
        });

    });

});
