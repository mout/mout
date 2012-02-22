define(['../string/typecast', './getQueryString'], function (typecast, getQueryString) {

    /**
     * Get query parameter value.
     * @version 0.1.0 (2011/10/29)
     */
    function getParam(param, url){
        var regexp = new RegExp('(\\?|&)'+ param + '=([^&]*)'), //matches `?param=value` or `&param=value`, value = $2
            result = regexp.exec( getQueryString(url) ),
            val = (result && result[2])? result[2] : null;
        return typecast(val);
    }

    return getParam;
});
