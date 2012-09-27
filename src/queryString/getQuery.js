define(function () {

    /**
     * Gets full query as string with all special chars decoded.
     * @version 0.2.0 (2012/09/26)
     */
    function getQuery(url) {
        url = url.replace(/#.*/, ''); //removes hash (to avoid getting hash query)
        var queryString = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(url); //valid chars according to: http://www.ietf.org/rfc/rfc1738.txt
        return (queryString)? decodeURIComponent(queryString[0]) : '';
    }

    return getQuery;
});
