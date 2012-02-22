define(function () {

    /**
     * Returns random sign (-1 or 1)
     * @version 0.1.0 (2011/11/16)
     */
    function randomSign() {
        return Math.random() > 0.5? 1 : -1;
    }

    return randomSign;
});
