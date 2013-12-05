define(['../lang/toString'], function (toString) {

    var IS_DECIMAL = /^#[0-9]+$/,
        IS_HEX = /^#[xX][0-9A-Fa-f]+$/;

    /**
     * Unescapes HTML special chars
     * See http://developers.whatwg.org/syntax.html#character-references for
     * the spec on character escapes.
     */
    function unescapeHtml(str){
        if (!str) {
            return '';
        }

        var i = 0,
            start = 0,
            output = '',
            end,
            escape;

        // Find all '&' characters
        while ((i = str.indexOf('&', start)) !== -1)
        {
            // Find the ending ';'
            end = str.indexOf(';', i + 1);
            if (end === -1) {
                // No more valid escapes
                break;
            }

            escape = str.substring(i + 1, end);
            output += str.substring(start, i) + unescapeChar(escape);
            start = end + 1;
        }

        // Add the remaining string
        output += str.substring(start, str.length);

        return output;
    }

    // This does not recognize all named characters. See
    // http://developers.whatwg.org/named-character-references.html#named-character-references
    // for the full list.
    function unescapeChar(value) {
        if (value === 'lt') {
            return '<';
        } else if (value === 'gt') {
            return '>';
        } else if (value === 'amp') {
            return '&';
        } else if (value === 'quot') {
            return '"';
        } else if (IS_DECIMAL.test(value)) {
            value = value.substring(1);
            return String.fromCharCode(+value);
        } else if (IS_HEX.test(value)) {
            value = value.substring(2);
            return String.fromCharCode(parseInt(value, 16));
        } else {
            // Unrecognized escape sequence
            return '&' + value + ';';
        }
    }

    return unescapeHtml;

});
