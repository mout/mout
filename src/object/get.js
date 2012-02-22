define(function () {

    /**
     * set "nested" object property
     * @version 0.1.0 (2012/01/30)
     */
    function get(obj, prop){
        var parts = prop.split('.'),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (typeof obj !== 'object') return;
        }

        return obj[last];
    }

    return get;

});
