define(['./lowerCase', './upperCase'], function(lowerCase, upperCase){
    /**
     * UPPERCASE first char of each sentence and lowercase other chars.
     * - ported from Miller Medeiros Eclipse Monkey Scripts
     * @example sentenceCase('Lorem IpSum DoLOr. maeCeNnas Ullamcor.') -> 'Lorem ipsum dolor. Maecennas ullamcor.'
     * @param {string} str
     * @return {string}
     */
    function sentenceCase(str){
        return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase); //replace first char of each sentence (new line or after '.\s+') to UPPERCASE
    }
    return sentenceCase;
});
