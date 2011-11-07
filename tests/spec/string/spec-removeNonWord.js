define(['src/string/removeNonWord'], function (removeNonWord) {

    describe('string/removeNonWord()', function(){

        it('should remove non word chars', function(){
            var str = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';
            expect( removeNonWord(str) ).toEqual('lorem - ipsum');
        });

    });
});
