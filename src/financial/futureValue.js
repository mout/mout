define(function () {

    /**
     * Calculate future value of an investment.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @version 0.1.0 (2012/01/27)
     */
    function futureValue(rate, nPeriods, payment, isDue){
        var s = payment * ((Math.pow(1+rate, nPeriods) - 1) / rate);
        return isDue? s * (1 + rate) : s;
    }

    return futureValue;

});
