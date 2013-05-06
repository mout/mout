define(function () {

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = (typeof prop === "string" ? prop.split('.') : prop);

        if (parts.length === 0) return obj;

        var last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (typeof obj !== 'object') return undefined;
        }

        return obj[last];
    }

    return get;

});
