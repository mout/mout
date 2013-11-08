define(['../lang/toString'], function(toString) {

    var nonWord = /\W/g;

    /**
     * Escape RegExp string chars.
     */
    function escapeRegExp(str) {
        return toString(str).replace(nonWord,'\\$&');
    }

    return escapeRegExp;

});
