define(function () {

    /**
     * Gets full query as string with all special chars decoded.
     * @version 0.1.0 (2011/10/29)
     */
    function getQueryString(url) {
        url = url || location.href; //used location.href to avoid bug on IE6 and pseudo query string inside location.hash
        url = url.replace(/#.*/, ''); //removes hash (to avoid getting hash query)
        var queryString = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(url); //valid chars according to: http://www.ietf.org/rfc/rfc1738.txt
        return (queryString)? decodeURIComponent(queryString[0]) : '';
    }

    return getQueryString;
});
