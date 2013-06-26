define(['../object/forOwn','../lang/isArray','../array/forEach'], function (forOwn,isArray,forEach) {

    /**
     * Encode object into a query string.
     */
    function encode(obj){
        var query = [],
            arrValues;
        forOwn(obj, function (val, key) {
            if (isArray(val)) {
                arrValues = key + '=';
                forEach(val, function (aValue) {
                    arrValues += encodeURIComponent(aValue) + '&' + key + '=';
                });
                query.push(arrValues.replace(/&[\w]+=$/, ''));
            } else {
               query.push(key + '=' + encodeURIComponent(val));
            }
        });
        return (query.length) ? '?' + query.join('&') : '';
    }

    return encode;
});
