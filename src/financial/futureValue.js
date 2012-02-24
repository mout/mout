define(function () {

    /**
     * Calculate future value of an investment.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @version 0.1.1 (2012/02/24)
     */
    function futureValue(rate, nPeriods, payment, isDue){
        if (rate === 0) {
            //isDue makes no difference since rate is zero..
            return payment * nPeriods;
        } else {
            var s = payment * ((Math.pow(1 + rate, nPeriods) - 1) / rate);
            return isDue? s * (1 + rate) : s;
        }
    }

    return futureValue;

});
