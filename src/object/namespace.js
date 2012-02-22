define(['../array/forEach'], function (forEach) {

    /**
     * Create nested object if non-existent
     * @version 0.1.0 (2012/01/30)
     */
    function namespace(obj, path){
        if (!path) return obj;
        forEach(path.split('.'), function(key){
            if (!obj[key]) {
                obj[key] = {};
            }
            obj = obj[key];
        });
        return obj;
    }

    return namespace;

});
