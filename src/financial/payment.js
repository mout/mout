define(['./compoundInterest'], function (compoundInterest) {

    /**
     * Calculates the payment for a loan based on constant payments and
     * a constant interest rate.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @version 0.1.1 (2012/03/20)
     */
    function payment(rate, nPeriods, presentValue, futureValue, isDue){
        futureValue = futureValue || 0;
        if (!presentValue && !futureValue) {
            return 0;
        } else if (rate === 0) {
            return (presentValue + futureValue) / nPeriods;
        } else {
            var r;
            r = (rate / (1 - Math.pow(1 + rate, -nPeriods))) * presentValue;
            if (futureValue) {
                //the "opposite" of financial/futureValue
                r += futureValue / ((Math.pow(1 + rate, nPeriods) -1) / rate);
            }
            return isDue? r / (1 + rate) : r;
        }
    }

    return payment;

});
