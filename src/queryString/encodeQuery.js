define(function () {

    /**
     * Encode object into a query string.
     * @version 0.2.0 (2011/10/31)
     */
    function encodeQuery(obj){
        var query = [],
            key;
        for(key in obj){
            if(obj.hasOwnProperty(key)){ //avoid copying properties from the prototype
                query.push(key +'='+ encodeURIComponent( obj[key] ) );
            }
        }
        return (query.length)? '?'+ query.join('&') : '';
    }

    return encodeQuery;
});
