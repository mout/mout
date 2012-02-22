define(['./isKind'], function (isKind) {
    /**
     * @version 0.1.0 (2011/10/31)
     */
    function isRegExp(val) {
        return isKind(val, 'RegExp');
    }
    return isRegExp;
});
