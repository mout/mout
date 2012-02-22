define(function () {

    var _rEscapeChars;

    /**
     * Escape RegExp string chars.
     * @version 0.1.0 (2011/12/17)
     */
    function escapeRegExp(str) {
        if (! _rEscapeChars) {
            _rEscapeChars = /[\\.+*?\^$\[\](){}\/'#]/g;
        }
        return str.replace(_rEscapeChars,'\\$&');
    }

    return escapeRegExp;

});
