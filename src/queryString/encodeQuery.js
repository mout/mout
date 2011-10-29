define(function () {

    /**
     * Encode object into a query string.
     * @version 0.1.0 (2011/10/29)
     * @author Miller Medeiros
     */
    function encodeQuery(obj){
        var query = [],
            param;
        for(param in obj){
            if(obj.hasOwnProperty(param)){ //avoid copying properties from the prototype
                query.push(param +'='+ obj[param]);
            }
        }
        return (query.length)? '?'+ query.join('&') : '';
    }

    return encodeQuery;
});
