define(['../object/forOwn'], function (forOwn) {

    /**
     * Encode object into a query string.
     * @version 0.2.1 (2012/09/19)
     */
    function encodeQuery(obj){
        var query = [];
        forOwn(obj, function(val, key){
            query.push( key +'='+ encodeURIComponent(val) );
        });
        return (query.length)? '?'+ query.join('&') : '';
    }

    return encodeQuery;
});
