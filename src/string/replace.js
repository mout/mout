define(['../lang/isArray', '../lang/isString'], function (isArray, isString){
    'use strict';

    function replaceFromArrayToArray(subject, search, replacement) {
        var replacementChars;
        var result = subject;

        for(var i = 0, len = search.length; i < len; i++) {
            replacementChars = replacement[i] || '';
            result = replace(result, search[i], replacementChars);
        }

        return result;
    }

    /**
    * Replace string characters.
    *
    * @example replace('Hello World', 'lo', '$') -> 'Hel$ World';
    * @example replace('Hello World', ['ell', 'r'], '@') -> 'H@o Wo@ld';
    * @example replace('Hello World', ['e', 'o'], ['o', 'e']) -> 'Holle Werld';
    * @example replace('HellO World', 'O', 'i') -> 'Helli World';
    * @example replace('HellO World', 'O', 'i', true) -> 'Holli Wirld';
    * @param {string} subject
    * @param {string} search
    * @param {string} replacement
    * @param {string} caseInsensitive
    * @return {string}
    */
     function replace(subject, search, replacement, caseInsensitive){
        if(!isString(subject)) {
            return subject;
        }

        if(isArray(search) && isArray(replacement)) {
            return replaceFromArrayToArray(subject, search, replacement);
        }

        var charsBeeingSearched;

        if(isArray(search)) {
            charsBeeingSearched = search;
        } else if(isString(search)) {
            charsBeeingSearched = [search];
        } else {
            return subject;
        }

        charsBeeingSearched = charsBeeingSearched.join('|');

        var regexFlag = 'g';
        regexFlag += (caseInsensitive) ? 'i' : '';
        var regexMatcher = new RegExp('(' + charsBeeingSearched + ')', regexFlag);

        return subject.replace(regexMatcher, replacement);
     }

     return replace;

});
