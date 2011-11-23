define(function () {

    /**
     * "Convert" value into a 32-bit unsigned integer.
     * IMPORTANT: Value will wrap at 2^32.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/11/23)
     */
    function toUInt32(val){
        return val <= 0? 0 : val >>> 0;
    }

    return toUInt32;

});
