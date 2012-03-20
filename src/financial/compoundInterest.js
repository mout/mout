define(function () {

    /**
     * Basic compound interest
     * @version 0.2.0 (2012/03/20)
     */
    function compoundInterest(interestRate, nPeriods, presentValue) {
        return presentValue * Math.pow(1 + interestRate, nPeriods);
    }

    return compoundInterest;

});
