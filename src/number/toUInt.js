define(function(){
    /**
     * "Convert" value into an 31-bit unsigned integer (since 1 bit is used for sign).
     * IMPORTANT: val should be inside range number/MIN_INT...number/MAX_INT.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/21)
     */
    function toUInt(val){
        return (val <= 0)? 0 : ~~val;
    }
    return toUInt;
});
