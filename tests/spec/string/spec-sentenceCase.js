import sentenceCase from '../../../string/sentenceCase';

describe('string/sentenceCase()', function() {
    it('should uppercase first char of each sentence and lowercase others', function() {
        const str = 'lorem Ipsum doLOr. sit amet dolor.';
        expect(sentenceCase(str)).toEqual('Lorem ipsum dolor. Sit amet dolor.');
    });

    it('should treat null as empty string', function() {
        expect(sentenceCase(null)).toEqual('');
    });

    it('should treat undefined as empty string', function() {
        expect(sentenceCase(void 0)).toEqual('');
    });
});
