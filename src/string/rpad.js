define(['./repeat'], function (repeat) {

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     */
    function rpad(str, minLen, ch) {
        ch = ch || ' ';
        return (str.length < minLen)? str + repeat(ch, minLen - str.length) : str;
    }

    return rpad;

});
