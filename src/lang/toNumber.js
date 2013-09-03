define(['./isArray'], function (isArray) {

    /**
     * covert value into number if numeric
     */
    function toNumber(val){
        // we want `undefined` to also return zero to avoid headaches
        if (val == null) return 0;
        if (typeof val === 'number') return val;
        if (typeof val === 'string') return parseFloat(val);
        // arrays are edge cases. `Number([4]) === 4`
        if (isArray(val)) return NaN;
        return Number(val);
    }

    return toNumber;

});
