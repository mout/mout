define(['./lowerCase', './upperCase'], function(lowerCase, upperCase){
    /**
     * UPPERCASE first char of each word.
     * - ported from Miller Medeiros Eclipse Monkey Scripts
     * @example properCase('loRem iPSum') -> 'Lorem Ipsum'
     * @param {string} str
     * @return {string}
     * @version 0.1.0 (2011/07/20)
     */
    function properCase(str){
        return lowerCase(str).replace(/^\w|\s\w/g, upperCase); //replace first char of each word to UPPERCASE
    }
    return properCase;
});
