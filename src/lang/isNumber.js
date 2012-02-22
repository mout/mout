define(['./isKind'], function (isKind) {
    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isNumber(val) {
        return isKind(val, 'Number');
    }
    return isNumber;
});
