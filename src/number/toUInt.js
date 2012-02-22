define(function () {

    /**
     * "Convert" value into a 32-bit unsigned integer.
     * IMPORTANT: Value will wrap at 2^32.
     * @version 0.2.0 (2011/11/25)
     */
    function toUInt(val){
        return val >>> 0;
    }

    return toUInt;

});
