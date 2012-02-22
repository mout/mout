define(function () {

    /**
     * Basic compound interest
     * @version 0.1.0 (2011/12/30)
     */
    function compoundInterest(presentValue, interestRate, nPeriods) {
        return presentValue * Math.pow(1 + interestRate, nPeriods);
    }

    return compoundInterest;

});
