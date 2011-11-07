define(['src/string/sentenceCase'], function (sentenceCase) {

    describe('string/sentenceCase()', function(){

        it('should uppercase first char of each sentence and lowercase others', function(){
            expect( sentenceCase('lorem Ipsum doLOr. sit amet dolor.') ).toEqual('Lorem ipsum dolor. Sit amet dolor.');
        });
    });
});
