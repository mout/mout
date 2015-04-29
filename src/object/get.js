define(['../lang/isPrimitive'], function (isPrimitive) {

    var splitBy = /[\.\[\]]+/;

    /**
     * get "nested" object property
     */
    function get(obj, prop){
        var parts = prop.split(splitBy),
            last = parts.pop();

        while (prop = parts.shift()) {
            obj = obj[prop];
            if (obj == null) return;
        }

        return obj[last];
    }

    return get;

});
