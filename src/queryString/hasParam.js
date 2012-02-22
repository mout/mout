define(['./getQueryString'], function (getQueryString) {

    /**
     * Checks if query string contains parameter.
     * @version 0.1.0 (2011/10/29)
     */
    function hasParam(paramName, url) {
        var regex = new RegExp('(\\?|&)'+ paramName +'=', 'g'); //matches `?param=` or `&param=`
        return regex.test(getQueryString(url));
    }

    return hasParam;
});
