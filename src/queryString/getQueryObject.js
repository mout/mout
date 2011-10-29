define(['./decodeQuery', './getQueryString'], function (decodeQuery, getQueryString) {

    /**
     * Get query string, parses and decodes it.
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/29)
     */
    function getQueryObject(url) {
        return decodeQuery(getQueryString(url));
    }

    return getQueryObject;
});

