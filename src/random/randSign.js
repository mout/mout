define(['./random'], function (random) {

    /**
     * Returns random sign (-1 or 1)
     * @version 0.2.0 (2012/11/29)
     */
    function randomSign() {
        return random() > 0.5? 1 : -1;
    }

    return randomSign;
});
