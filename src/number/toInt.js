define(['./MIN_INT', './MAX_INT'], function(MIN_INT, MAX_INT){
    /**
     * "Convert" value into an 32-bit integer.
     * Works like `Math.floor` if val > 0 and `Math.ceil` if val < 0.
     * IMPORTANT: val will wrap at 2^31 and -2^31.
     * Perf tests: http://jsperf.com/vs-vs-parseint-bitwise-operators/7
     * @author Miller Medeiros
     * @version 0.2.0 (2011/10/21)
     */
    function toInt(val){
        return (val > MAX_INT)? ~~(val % (MAX_INT + 1)) : (val < MIN_INT? ~~(val % (MIN_INT - 1)) : ~~val);
    }
    return toInt;
});
