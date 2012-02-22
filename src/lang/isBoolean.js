define(['./isKind'], function (isKind) {
    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isBoolean(val) {
        return isKind(val, 'Boolean');
    }
    return isBoolean;
});
