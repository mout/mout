define(['./random'], function (random) {

    /**
     * Returns random bit (0 or 1)
     * @version 0.2.0 (2012/11/29)
     */
    function randomBit() {
        return random() > 0.5? 1 : 0;
    }

    return randomBit;
});
