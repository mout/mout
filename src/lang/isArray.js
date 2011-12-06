define(['./isKind'], function (isKind) {
    /**
     * @author Miller Medeiros
     * @version 0.2.0 (2011/12/06)
     */
    var isArray = Array.isArray || function (val) {
        return isKind(val, 'Array');
    };
    return isArray;
});
