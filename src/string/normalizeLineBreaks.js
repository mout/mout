define(function () {

    /**
     * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
     * @version 0.1.0 (2011/12/17)
     */
    function normalizeLineBreaks(str, lineEnd) {
        lineEnd = lineEnd || '\n';
        return str
                .replace(/\r\n/g, lineEnd) // DOS
                .replace(/\r/g, lineEnd)   // Mac
                .replace(/\n/g, lineEnd);  // Unix
    }

    return normalizeLineBreaks;

});
