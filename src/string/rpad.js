define(['./repeat'], function (repeat) {

    /**
     * Pad string with `char` if its' length is smaller than `minLen`
     * @version 0.1.1 (2012/05/03)
     */
    function rpad(str, minLen, ch) {
        ch = ch || ' ';
        return (str.length < minLen)? str + repeat(ch, minLen - str.length) : str;
    }

    return rpad;

});
