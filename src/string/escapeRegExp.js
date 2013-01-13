define(function () {

    var _rEscapeChars;

    /**
     * Escape RegExp string chars.
     */
    function escapeRegExp(str) {
        if (! _rEscapeChars) {
            _rEscapeChars = /[\\.+*?\^$\[\](){}\/'#]/g;
        }
        return str.replace(_rEscapeChars,'\\$&');
    }

    return escapeRegExp;

});
