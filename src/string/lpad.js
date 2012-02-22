define(['./repeat'], function (repeat) {

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     * @version 0.1.0 (2011/12/07)
     */
    function lpad(str, minLen, char) {
        char = char || ' ';
        return (str.length < minLen)? repeat(char, minLen - str.length) + str : str;
    }

    return lpad;

});
