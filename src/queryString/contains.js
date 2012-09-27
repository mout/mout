define(['./getQuery'], function (getQuery) {

    /**
     * Checks if query string contains parameter.
     * @version 0.2.0 (2012/09/26)
     */
    function contains(url, paramName) {
        var regex = new RegExp('(\\?|&)'+ paramName +'=', 'g'); //matches `?param=` or `&param=`
        return regex.test(getQuery(url));
    }

    return contains;
});
