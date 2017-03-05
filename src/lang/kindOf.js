define(function () {

    var _toString = Object.prototype.toString;

    /**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */
    function kindOf(val) {
        return _toString.call(val).slice(8, -1);
    }
    return kindOf;
});
