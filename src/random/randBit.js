define(function () {

    /**
     * Returns random bit (0 or 1)
     * @version 0.1.0 (2011/11/16)
     */
    function randomBit() {
        return Math.random() > 0.5? 1 : 0;
    }

    return randomBit;
});
