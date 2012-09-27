define(['../string/typecast', './getQuery'], function (typecast, getQuery) {

    /**
     * Get query parameter value.
     * @version 0.2.0 (2012/09/26)
     */
    function getParam(url, param, shouldTypecast){
        var regexp = new RegExp('(\\?|&)'+ param + '=([^&]*)'), //matches `?param=value` or `&param=value`, value = $2
            result = regexp.exec( getQuery(url) ),
            val = (result && result[2])? result[2] : null;
        return shouldTypecast === false? val : typecast(val);
    }

    return getParam;
});
