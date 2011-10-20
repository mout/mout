define(function(){

    /**
     * Number Utilities.
     * @exports amd-utils/number
     * @author Miller Medeiros
     * @version 0.0.1 (2011/08/30)
     */
    var numberUtils = {

        /**
         * @constant Minimum 32-bit signed integer value (1 << 31).
         */
        MIN_INT : -2147483648,

        /**
         * @constant Maximum 32-bit signed integer value. (-1 >>> 1)
         */
        MAX_INT : 2147483647,

        /**
         * "Convert" value into an 32-bit integer.
         * Works like `Math.floor` if val > 0 and `Math.ceil` if val < 0.
         * IMPORTANT: val should be inside range numberUtils.MIN_INT<->numberUtils.MAX_INT.
         */
        toInt : function(val){
            return ~~val;
        },

        /**
         * "Convert" value into an 31-bit unsigned integer (since 1 bit is used for sign).
         * IMPORTANT: val should be inside range numberUtils.MIN_INT<->numberUtils.MAX_INT.
         */
        toUInt : function(val){
            return (val <= 0)? 0 : ~~val;
        },

        /**
         * Enforce a specific amount of decimal digits and also fix floating
         * point rounding issues.
         */
        enforcePrecision : function(val, nDecimalDigits){
            var pow = Math.pow(10, nDecimalDigits);
            return +(Math.round(val * pow) / pow).toFixed(nDecimalDigits);
        }

    };

    return numberUtils;

});
