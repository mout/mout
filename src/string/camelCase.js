define(['./replaceAccents', './removeNonWord', './upperCase', './lowerCase'], function(replaceAccents, removeNonWord, upperCase, lowerCase){
    /**
    * Convert string to camelCase text.
    * - ported from Miller Medeiros Eclipse Monkey Scripts
    * @example camelCase('my --  awesome-text') -> 'myAwesomeText';
    * @param {string} str
    * @return {string}
    * @version 0.2.0 (2011/08/09)
    */
    function camelCase(str){
        str = replaceAccents(str);
        str = removeNonWord(str)
                .replace(/\-/g, ' ') //convert all hyphens to spaces
                .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
                .replace(/\s+/g, '') //remove spaces
                .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
        return str;
    }
    return camelCase;
});
