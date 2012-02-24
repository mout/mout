define(function () {

    /**
     * Returns the present value of an investment.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @version 0.1.1 (2012/02/24)
     */
    function presentValue(rate, nPeriods, payment, isDue){
        if (rate === 0) {
            return payment * nPeriods;
        } else {
            var p = ((1 - Math.pow(1 + rate, - nPeriods)) / rate) * payment;
            return isDue? p * (1 + rate) : p;
        }
    }

    return presentValue;

});
