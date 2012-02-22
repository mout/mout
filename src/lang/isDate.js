define(['./isKind'], function (isKind) {
    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isDate(val) {
        return isKind(val, 'Date');
    }
    return isDate;
});
