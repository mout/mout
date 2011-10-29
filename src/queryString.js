define(function (require) {

    /**
     * Query String utilities.
     * @exports amd-utils/queryString
     * @author Miller Medeiros
     * @version 0.1.0 (2011/10/30)
     */
    return {
        decodeQuery    : require('./queryString/decodeQuery'),
        encodeQuery    : require('./queryString/encodeQuery'),
        getParam       : require('./queryString/getParam'),
        getQueryObject : require('./queryString/getQueryObject'),
        getQueryString : require('./queryString/getQueryString'),
        hasParam       : require('./queryString/hasParam')
    };

});
