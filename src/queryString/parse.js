define(['./decode', './getQuery'], function (decode, getQuery) {

    /**
     * Get query string, parses and decodes it.
     * @version 0.2.0 (2012/09/26)
     */
    function parse(url, shouldTypecast) {
        return decode(getQuery(url), shouldTypecast);
    }

    return parse;
});

