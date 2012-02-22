define(['./repeat'], function (repeat) {

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     * @version 0.1.0 (2011/12/07)
     */
    function rpad(str, minLen, char) {
        char = char || ' ';
        return (str.length < minLen)? str + repeat(char, minLen - str.length) : str;
    }

    return rpad;

});
