define(['../lang/toString'], function(toString){
    var PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;

    /**
     * Remove non-word chars.
     */
    function removeNonWord(str){
        str = toString(str);
        return str.replace(PATTERN, '');
    }

    return removeNonWord;
});
