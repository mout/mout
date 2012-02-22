define(function () {


    /**
     * Net present value
     * http://en.wikipedia.org/wiki/Net_present_value
     * @version 0.1.0 (2011/12/30)
     */
    function npv(discountRate, values) {
        var val = 0,
            n = values.length;

        while (n--) {
            val += values[n] / Math.pow(1 + discountRate, n + 1);
        }

        return val;
    }

    return npv;

});
