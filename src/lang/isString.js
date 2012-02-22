define(['./isKind'], function (isKind) {
    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isString(val) {
        return isKind(val, 'String');
    }
    return isString;
});
