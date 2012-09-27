define(['../object/forOwn'], function (forOwn) {

    /**
     * Encode object into a query string.
     * @version 0.3.0 (2012/09/26)
     */
    function encode(obj){
        var query = [];
        forOwn(obj, function(val, key){
            query.push( key +'='+ encodeURIComponent(val) );
        });
        return (query.length)? '?'+ query.join('&') : '';
    }

    return encode;
});
