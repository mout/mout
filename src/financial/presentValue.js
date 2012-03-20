define(function () {

    /**
     * Returns the present value of an investment.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @version 0.2.0 (2012/03/20)
     */
    function presentValue(rate, nPeriods, payment, futureValue, isDue){
        if (rate === 0) {
            return payment * nPeriods;
        } else {
            var p = ((1 - Math.pow(1 + rate, - nPeriods)) / rate) * payment;
            if (isDue) {
                p *= (1 + rate);
            }
            if (futureValue) {
                p += futureValue / Math.pow(1 + rate, nPeriods);
            }
            return p;
        }
    }

    return presentValue;

});
