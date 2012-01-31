define(function () {

    /**
     * Returns the present value of an investment.
     * http://en.wikipedia.org/wiki/Annuity_%28finance_theory%29
     * @author Miller Medeiros
     * @version 0.1.0 (2012/01/27)
     */
    function presentValue(rate, nPeriods, payment, isDue){
        var p = ((1 - Math.pow(1 + rate, - nPeriods)) / rate) * payment;
        return isDue? p * (1 + rate) : p;
    }

    return presentValue;

});
